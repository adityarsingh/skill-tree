# skill-tree

Five Claude skills I use most weeks.

I got tired of re-explaining the same passes to Claude, so I wrote them down:
cutting corporate register out of a draft, catching what gives machine-written
prose away, working out who a page is for, making a page quotable by AI models,
and reading what a page communicates before anyone reads it.

Browse them at **[adityarsingh.in/skills](https://adityarsingh.in/skills/)**.

## Install

```
/plugin marketplace add adityarsingh/skill-tree
/plugin install skill-tree@skill-tree
```

Then just work. Each skill fires on its own when the situation matches, or call
one by name.

## The skills

| Skill | Category | What it's for |
|---|---|---|
| `buzzkill` | Copywriting | Strips the corporate register out of a draft and names every tell. |
| `autotune` | Copywriting | Catches prose autotuned flat, without scrubbing off what voice is left. |
| `whocares` | Strategy | Forces you to name who actually cares before anything gets written. |
| `quotable` | GEO | Restructures a page so AI models can lift and cite it. |
| `squint` | CRO | The squint test on a page: what reads first, and what that costs you. |

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
