---
name: squint
description: Use when judging what a landing page, homepage, or screen actually communicates before anyone reads it, including bounce rates that copy changes don't fix, pages where everything looks equally important, competing calls to action, or a redesign that needs a hierarchy verdict rather than a style opinion.
metadata:
  category: CRO
  tagline: "Checks what a page communicates before anyone reads the words."
  order: 5
---

# squint

## Overview

Nobody reads a page to decide whether to read it. They take a low-resolution
snapshot of shapes, weights, one or two colors, image mass, and decide from that
whether to spend attention at all.

**Every word on the page is downstream of a decision the visitor already made
from the blur.** So judge the blur first. A page can have perfect copy and lose
before a single word is processed.

This is a judgement pass on hierarchy and communication. It is not an
accessibility or performance audit. No contrast ratios, no Lighthouse. Those
are separate and both matter.

## How to actually blur it

Pick one. The point is to destroy your ability to read while preserving layout.

```js
// In the browser console. Fastest version, and reversible
document.body.style.filter = 'blur(6px)'
// undo: document.body.style.filter = ''
```

Or screenshot the page, scale it to 10%, then scale it back up. Or take off your
glasses. Squinting works and is where the name comes from, but you will cheat and
read. The CSS filter won't let you.

Do this at **1280px and 375px**, and for both the first viewport and a full-page
capture. Four blurs.

## The pass

**1. Inventory the blur.** Before any analysis, write down only what you can
identify while blurred: how many blocks, where the visual weight sits, the one
strongest color, where images are, what shape the biggest text makes. Write it
down before unblurring. This is the whole method, and skipping straight to
analysis is how the test gets faked.

**2. Answer three questions from the blur alone.**
   - What is this?
   - Who is it for?
   - What do I do next?

   Any question you cannot answer from the snapshot is a failure at the level
   where it matters most. Note which one failed; the fixes are different.

**3. Rank twice.** List the elements in the order the blurred eye takes them.
Then list them in the order that serves the page's goal. **The gap between the
two lists is the finding.** Everything else in this pass is supporting detail.

**4. Count the primaries.** How many things look clickable *and* important? More
than one primary action means zero primary action. The visitor resolves the
ambiguity by leaving. Secondary actions should lose at the blur, visibly.

**5. Proud vs. needed.** What does the page give the most weight to? What does
the visitor actually need first? These are inverted more often than not, usually
in favour of whatever the team worked hardest on.

## Output contract

One finding per line, in this shape:

> **What the blur shows** → **what it should show** → **the single change.**

Ranked by cost, most expensive first. Cap it at five findings. A page with
fifteen problems has one problem, and it's the hierarchy.

State the verdict on the three questions explicitly, as pass or fail per
question. Don't bury it in prose.

## Common mistakes

| Mistake | Why it fails |
|---|---|
| Analyzing before writing the blur inventory | You've already read the page. Memory fills in what the blur doesn't show, and the test returns your prior opinion. |
| Reporting style preferences | "The blue feels dated" is not a squint finding. If it doesn't change what reads first, it belongs in a different pass. |
| Testing desktop only | Most traffic blurs at 375px, where a three-column hierarchy becomes a one-column list and the intended ranking silently disappears. |
| Fixing findings by adding emphasis | Making the primary bigger while everything else stays big changes nothing. Hierarchy is created by making things *smaller*. |
| Running it on a page with no goal | The second ranking in step 3 needs a goal to rank against. If nobody can state the page's one job, that's the finding. Return it and stop. |
