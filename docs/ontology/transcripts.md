---
title: Transcripts
sidebar_position: 2
description: "The append-only ground truth of a biography: the person's words verbatim, stamped to the minute, filed with the question that elicited them."
---

# Transcripts

A transcript is one inbound dump: one reply, one voice memo, one story told over dinner and typed up after. It is the ground-truth layer of the corpus, and it has three rules.

**Verbatim or nothing.** The transcript body is the person's words exactly as they arrived. Typos, tangents, half-finished sentences: all of it stays. The moment an agent paraphrases inside a transcript, the corpus stops being evidence and becomes interpretation. Interpretation belongs in character files, moment files, and summaries, where it is labeled as such.

**Stamped to the minute.** `YYYY-MM-DD-HH-MM--slug.md`, in the subject's timezone. Date-only stamps collide the first time someone replies twice in a day, and a biography collected over years will see that constantly.

**Filed with its question.** Frontmatter carries `elicited_by`: the question or letter that prompted this dump. An answer without its question is half a record. See [The Question Is Part of the Record](/principles/the-question-is-part-of-the-record).

A minimal transcript:

```markdown
---
date: 2026-08-07T14:32:00Z
elicited_by: "What music did she listen to while she cooked?"
summary: Nat King Cole in the Maple Street kitchen; Ruthie and the spoon.
---

Oh, that would be Nat King Cole. "Unforgettable." My mother hummed it
while she rolled out dough on Saturday mornings...
```

The `summary` line exists for grep and for the timeline work, and it is the one part of the file the agent writes in its own words.

> **Transcripts are evidence. Everything the corpus later claims must trace back to one.**
