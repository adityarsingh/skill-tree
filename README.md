# skill-tree

The Claude skills I use every week for marketing work. Each one saves me hours
of work I would otherwise do by hand.

Browse them at **[adityarsingh.in/skills](https://adityarsingh.in/skills/)**.

## The skills

| Skill | Category | What it's for |
|---|---|---|
| `buzzkill` | Copywriting | Cuts buzzwords and vague corporate language out of a draft. |
| `autotune` | Copywriting | Removes AI writing tells without flattening your voice. |
| `whocares` | Strategy | Works out who your writing is for before you start writing. |
| `premortem` | Strategy | Kills an idea on paper before you build it, and names what killed it. |
| `quotable` | GEO | Rewrites a page so AI models can quote and cite it. |
| `squint` | CRO | Checks what a page communicates before anyone reads the words. |

## What one looks like

Paste a paragraph and ask for `buzzkill`:

> Our industry-leading platform empowers teams to seamlessly leverage
> data-driven insights at scale.

It returns the tells before the rewrite, because the list is the part that
teaches you to catch your own:

| Phrase | Pass | What it was avoiding |
|---|---|---|
| industry-leading | unfalsifiable | No competitor claims the opposite, so it asserts nothing |
| empowers | abstraction | What does the user actually do? |
| seamlessly | unfalsifiable | Nobody advertises friction |
| leverage | register | use |

> Teams query their own data without waiting on analytics.

Thirteen words down to nine, and the second one can be argued with.

## Install

```bash
claude plugin marketplace add adityarsingh/skill-tree
claude plugin install skill-tree@skill-tree
```

Then work normally. Each skill fires on its own when the situation matches, or
call one by name.

<details>
<summary>Other ways to install</summary>

**Inside a running Claude Code session**, the same thing as a slash command:

```
/plugin marketplace add adityarsingh/skill-tree
/plugin install skill-tree@skill-tree
```

A terminal answers `no such file or directory: /plugin` if you paste that form
into a shell. Use `claude plugin` there.

**One skill without the rest.** Every skill is also its own plugin:

```bash
claude plugin install buzzkill@skill-tree
```

**Behind a proxy that blocks GitHub.** `marketplace add` clones this repo over
HTTPS. If that is blocked, copy the file into your personal skills directory:

```bash
mkdir -p ~/.claude/skills/buzzkill
curl -fsSL https://raw.githubusercontent.com/adityarsingh/skill-tree/main/skills/buzzkill/SKILL.md \
  -o ~/.claude/skills/buzzkill/SKILL.md
```

</details>

## How they fit together

`premortem` runs before I commit to the thing at all. `whocares` runs before I
write anything. `buzzkill`, `autotune`, and `quotable` go on the draft. `squint`
goes on the page it ends up as. Between them they cover a piece of work from
idea to published.

`buzzkill` and `autotune` look similar and are not. `buzzkill` hunts corporate
evasion, which people produced for decades without any help from a model.
`autotune` hunts the statistical habits of a model. A brochure written by a
person in 2010 trips the first and walks past the second.

Queued next: `receipts`, `deadwood`, `longtail`, `chopshop`, `boilerplate`,
`swipe`.

## Working on this repo

```
skills/<name>/SKILL.md     the source of truth, edit here
packs/<name>/              generated, one single-skill plugin each
.claude-plugin/            marketplace manifest, partly generated
```

After editing a skill, regenerate the packs and the manifest:

```bash
node scripts/build-packs.mjs
```

Bump `version` in `.claude-plugin/plugin.json` when a skill's content changes.
Without it, installed copies have no reason to re-fetch and keep serving the
old body.

## Contributing

Issues and PRs welcome. A new skill needs to be something you would reach for
weekly. That means a description sharp enough to fire at the right moment, and
a body with a real method rather than a list of adjectives.

## License

MIT © [Aditya Raj Singh](https://adityarsingh.in)
