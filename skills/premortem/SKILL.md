---
name: premortem
description: Use before committing to a project, feature, launch, or plan, especially when the decision is close to final and has mostly attracted agreement. Also when a proposal needs someone to argue against it, when nobody has said what would change their mind, or when the cost of being wrong has not been named.
metadata:
  category: Strategy
  tagline: "Kills an idea on paper before you build it, and names what killed it."
  order: 4
---

# premortem

## Overview

Asking "what could go wrong?" produces quibbles. People generate caveats, hedge
them, and everyone leaves feeling thorough.

Asking "it failed, why?" produces the real answer. Explaining a fixed outcome is
far easier than predicting an open one. Tell someone the thing is already dead
and the person who had no concerns will hand you four specific causes.

The technique is Gary Klein's, and the name is his too.

**The output is not a balanced view.** A critique that lists strengths alongside
weaknesses lets the reader pick the half they wanted. Argue the case against.
Someone else already argued for it, which is why the decision got this far.

## Before you start

Get one sentence out of the person: **what is being spent, what comes back, by
when.** Money, weeks, headcount, reputation, whatever the currency is.

If they cannot state it, there is nothing to critique yet. Say that and stop.
An idea with no stated bet is a mood, and critiquing a mood wastes both of you.

## The passes

**1. Write the failure story.** It is a year from now. The thing shipped and
failed badly enough that people avoid mentioning it. Write three sentences
explaining what happened. No hedging, no "might". It failed. Say why.

Do this three times, with a different cause each time. The first story is
usually the obvious risk everyone has already discussed. The second and third
are where the value is.

**2. List what has to be true.** Every plan rests on claims that must hold. Pull
them out and tag each one:

- **known** if there is evidence sitting somewhere you could point at
- **assumed** if it is a reasonable inference from something known
- **hoped** if it is neither

Anything tagged *hoped* that the plan cannot survive without is the actual risk.
Everything else is noise. This step is usually where the project dies.

**3. Find the cheapest disproof.** For each load-bearing assumption, name the
fastest and cheapest thing that would show it false. A phone call, a landing
page, an afternoon reading support tickets, ten minutes of arithmetic.

This is what turns a critique into something someone can act on. A risk with no
cheap test attached gets acknowledged and then ignored.

**4. Ask what would change their mind.** Put it directly: what result would make
you drop this?

If the answer is nothing, this is not a decision under consideration. It is a
commitment already made, and further critique is theatre. Say so plainly and
stop. That sentence is more useful than any analysis you could add.

**5. Price the null option.** What happens if nobody does anything at all?
Almost nobody computes this, and the honest baseline is often better than the
proposal. Sometimes it is much worse, which is a finding too.

**6. Name who pays.** If this is wrong, who absorbs it? The user, the team, one
person's quarter, a customer who never finds out. A cost nobody carries is not a
cost, and a cost carried by someone absent from the room needs saying out loud.

## Ranking

Score each finding by **cost if wrong, times how likely it is.** Sort by that.
Keep the top three or four and cut the rest.

A critique with twenty concerns gets read as pessimism and dismissed whole. Four
ranked concerns get argued with one at a time, which is the point.

## Output contract

1. **The bet.** Their sentence, restated in your words. Getting this wrong
   invalidates everything after it, so put it first where they can correct it.
2. **What has to be true.** A table: the assumption, known or assumed or hoped,
   and the cheapest disproof.
3. **How it fails.** The three stories, ranked by cost times likelihood.
4. **The one question.** The single thing worth answering before proceeding. One,
   not a list. Choosing it is the work.
5. **The verdict.** Proceed, proceed after testing the named assumption, or do
   not proceed. Pick one and say it in a sentence.

## Leave alone

- The person. Critique the plan and never the judgement of whoever brought it.
- Execution quality. This is about whether the thing is worth doing, not whether
  the team can do it.
- The design and the wording. Different jobs, and raising them here buries the
  finding that matters.
- Anything you would say about any project. "Scope could grow" and "the market is
  competitive" are true everywhere and useful nowhere.

## Common mistakes

| Mistake | Why it fails |
|---|---|
| Balancing every criticism with a strength | The reader keeps the half they already believed. They have heard the case for. Give them the case against. |
| Listing risks without a disproof | An untestable risk gets nodded at and forgotten. The test is what makes it real. |
| Generating twenty findings | Volume reads as reflexive negativity. Four ranked findings get taken seriously. |
| Softening the verdict to stay agreeable | "There are some considerations" tells them nothing. If it should not be built, that sentence is the entire value you add. |
| Skipping the null option | Doing nothing is a real option with a real payoff, and it is the baseline every other option should beat. |
| Running it after the money is spent | Then it is a postmortem. Useful, different skill, and much more expensive. |
