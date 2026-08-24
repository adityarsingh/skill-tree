---
name: quotable
description: Use when a page should be cited by AI models and assistants rather than only ranked by search engines, including content getting traffic but no citations, pages written as flowing prose with pronoun-chained sentences, or work on GEO, AEO, and AI search visibility.
metadata:
  category: GEO
  tagline: "Restructures a page so AI models can lift and cite it."
  order: 4
---

# quotable

## Overview

A model citing your page has to lift a span of text out of it and drop that span
into an answer where none of your surrounding context exists.

**A sentence that needs the previous sentence to make sense cannot be lifted, so
it will not be cited.** Most well-written prose fails this, because good prose
deliberately chains sentences together. Ranking rewards flow. Citation rewards
sentences that stand alone.

This is a structural edit, not a keyword edit.

## The quote test

Take any sentence carrying a claim. Paste it alone into a blank document.

Does it still assert something complete and true, with no ambiguous referent?

If not, it is unciteable, no matter how good the page is. Run this on every
claim-bearing sentence before and after editing.

## The passes

**1. Resolve the referents.** Sentences opening with *this, that, it, these,
they, such* are the largest single cause of failure. Restate the subject even
when it feels repetitive on the page. Repetition costs a reader half a second and
buys the whole citation.

**2. Answer first.** The paragraph under a heading opens with the answer in one
sentence, then the context. Models weight the first sentence after a heading
disproportionately, and a paragraph that builds to its point gets its
throat-clearing quoted instead.

**3. Headings as real questions.** Match how someone would ask out loud, not your
internal taxonomy. "How much does it cost to self-host n8n?" beats "Pricing
considerations."

**4. One claim per sentence.** Compound sentences get truncated mid-quote, and a
half-quote either misrepresents you or gets dropped. Split them.

**5. Attach specifics.** Numbers, dates, versions, named methods, named
alternatives. A sentence with a specific gets quoted; a general sentence gets
paraphrased, and paraphrase does not carry a citation.

**6. Date the perishable claims.** Prices, version numbers, model capabilities,
anything hedged with "currently". Each one carries its date in the sentence
itself, so a model can tell whether the claim is still live. Stale and uncited
beats stale and cited wrong.

**7. Confirm it's reachable.** None of the above matters if the content isn't in
the server-rendered HTML. Check: view source and find the actual sentences, check
`robots.txt` for AI crawler blocks, and check for a `Content-Signal` header
declining AI input. JS-gated content is invisible to most of them.

## Output contract

Return, in this order:

1. **Blockers.** Anything from pass 7. If the page is unreachable, say so first
   and stop; the rest is wasted work until it's fixed.
2. **The claim table.** Every claim-bearing sentence, its quote-test result, and
   which pass it failed.
3. **The rewrite.** The restructured page.
4. **The five most quotable sentences** in the result, listed plainly. These are
   what you'd expect to see turn up in an answer. If none of them feels like
   something worth quoting, the problem is that the page has no claims, and no
   amount of restructuring fixes that.

## Common mistakes

| Mistake | Why it fails |
|---|---|
| Treating this as keyword optimization | Models aren't matching keywords, they're extracting spans. Structure is the lever. |
| Adding an FAQ block and calling it done | An FAQ of questions nobody asks, answered vaguely, is unciteable too. Same passes apply inside it. |
| Removing all flow to maximize extractability | Humans still read the page and convert on it. Self-contained sentences and readable prose are compatible. It costs some repetition, not readability. |
| Optimizing a page with no original claim | Citation requires something worth citing: your data, your method, your number. A summary of consensus gets no citation because the model already knows it. |
| Skipping pass 7 | The most common real cause of zero citations is that nothing can fetch the page. Check it first, always. |
