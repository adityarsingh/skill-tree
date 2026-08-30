#!/usr/bin/env node
/**
 * Single-skill pack generator.
 *
 * A Claude Code plugin picks up skills from <source>/skills/<name>/SKILL.md, so
 * installing one skill on its own needs a source directory holding only that
 * skill. This writes one per skill under packs/, then regenerates the plugins
 * array in .claude-plugin/marketplace.json.
 *
 *   node scripts/build-packs.mjs
 *
 * Everything under packs/ is generated. Edit skills/<name>/SKILL.md and re-run.
 * Copies rather than symlinks, because a Windows clone without core.symlinks
 * turns a symlink into a text file and the skill silently disappears.
 *
 * Idempotent: a second run leaves the working tree clean.
 */

import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync, rmSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SKILLS = join(ROOT, 'skills');
const PACKS = join(ROOT, 'packs');
const MANIFEST = join(ROOT, '.claude-plugin/marketplace.json');

const names = readdirSync(SKILLS, { withFileTypes: true })
  .filter((e) => e.isDirectory() && existsSync(join(SKILLS, e.name, 'SKILL.md')))
  .map((e) => e.name)
  .sort();

if (names.length === 0) {
  console.error('\n✘ No skills found under skills/\n');
  process.exit(1);
}

/** Pull one frontmatter field without adding a YAML dependency. */
function field(body, key) {
  const m = body.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'));
  return m ? m[1].trim().replace(/^["']|["']$/g, '') : '';
}

// packs/ is generated wholesale, so a renamed or deleted skill can't leave a
// stale plugin entry behind.
rmSync(PACKS, { recursive: true, force: true });

const plugins = [
  {
    name: 'skill-tree',
    description: `All ${names.length} skills. Install this if you want the whole set.`,
    source: './',
    category: 'productivity',
  },
];

for (const name of names) {
  const source = join(SKILLS, name, 'SKILL.md');
  const raw = readFileSync(source, 'utf8');
  const tagline = field(raw, '  tagline') || field(raw, 'tagline');

  const dest = join(PACKS, name, 'skills', name);
  mkdirSync(dest, { recursive: true });
  writeFileSync(join(dest, 'SKILL.md'), raw);

  plugins.push({
    name,
    description: tagline,
    source: `./packs/${name}`,
    category: 'productivity',
  });

  console.log(`  packs/${name}/skills/${name}/SKILL.md`);
}

const manifest = JSON.parse(readFileSync(MANIFEST, 'utf8'));
manifest.plugins = plugins;
writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');

console.log(`\n✔ ${names.length} packs generated, marketplace.json has ${plugins.length} plugins\n`);
