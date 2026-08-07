---
title: The Question Is Part of the Record
sidebar_position: 2
description: "Every transcript files the question that elicited it. An answer without its question is half a record."
---

# The Question Is Part of the Record

Every [transcript](/ontology/transcripts) carries `elicited_by`: the question or letter that prompted it. This is a small convention with outsized returns, and it is the one most collection systems skip, because the question feels like the machine's business rather than the person's story.

It is the person's story. "We left before sunrise" means one thing as an answer to "what do you remember about the morning you left?" and another as an answer to "was your father a punctual man?" Interviewers and oral historians have always known this; a corpus that discards its questions forces every future reader to guess the frame.

Three more returns:

- **Steering becomes visible.** Reading the letters and their elicited transcripts side by side shows what the biographer's questions are doing: which threads open people up, which fall flat, where the agent has been leading the witness. You cannot improve the asking without a record of the asks.
- **Gaps become queryable.** Questions asked but never answered are the collection's open loops. With `elicited_by` filed, an agent can find them by grep instead of by rereading years of correspondence.
- **Provenance survives into the forms.** When a [projection](/concepts/forms-are-projections) quotes an answer, the question can travel with it. A memoir chapter that knows its own interview questions can be fact-checked by the family decades later.

The implementation cost is one frontmatter line per transcript, written at filing time, when the question is trivially known. Reconstructing it later is somewhere between expensive and impossible.

> **File the ask with the answer. The question is the half of the record you cannot recover later.**
