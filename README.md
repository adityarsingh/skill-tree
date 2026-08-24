# skill-tree

Five Claude skills I use most weeks.

I got tired of re-explaining the same passes to Claude, so I wrote them down:
cutting buzzwords out of a draft, removing AI writing tells, working out who the
writing is for, making a page that AI models will quote, and checking what a
page communicates before anyone reads the words.

Browse them at **[adityarsingh.in/skills](https://adityarsingh.in/skills/)**.

## Install

```
/plugin marketplace add adityarsingh/skill-tree
/plugin install skill-tree@skill-tree
```

Then just work. Each skill fires on its own when the situation matches, or call
one by name.

### Just one of them

Every skill is also its own plugin, so you can take one without the rest:

```
/plugin marketplace add adityarsingh/skill-tree
/plugin install buzzkill@skill-tree
```

`packs/` holds a single-skill plugin per skill. It is generated, so edit
`skills/<name>/SKILL.md` and run `node scripts/build-packs.mjs` to rebuild it
along with the marketplace manifest.

## The skills

| Skill | Category | What it's for |
|---|---|---|
| `buzzkill` | Copywriting | Cuts buzzwords and vague corporate language out of a draft. |
| `autotune` | Copywriting | Removes AI writing tells without flattening your voice. |
| `whocares` | Strategy | Works out who your writing is for before you start writing. |
| `quotable` | GEO | Rewrites a page so AI models can quote and cite it. |
| `squint` | CRO | Checks what a page communicates before anyone reads the words. |

## Why these

`whocares` runs before I write anything. `buzzkill`, `autotune`, and `quotable` go
on the draft. `squint` goes on the page it ends up as. Between them they cover a
piece of work from brief to published.

`buzzkill` and `autotune` look similar and are not. `buzzkill` hunts corporate
evasion, which humans have produced for decades without help. `autotune` hunts
the statistical habits of a model. A brochure written by a person in 2010 trips
the first and not the second.

Queued next: `receipts`, `deadwood`, `longtail`, `chopshop`, `boilerplate`,
`swipe`, `pushback`.

## Contributing

Issues and PRs welcome. A new skill needs to be something you'd reach for weekly.
That means a description sharp enough to fire at the right moment, and a body
with a real method rather than a list of adjectives.

## License

MIT © [Aditya Raj Singh](https://adityarsingh.in)
