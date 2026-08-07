---
title: The Biographical Ontology
sidebar_position: 1
description: "Six shapes hold a captured life: profile, transcripts, characters, moments, the timeline, and letters. Everything else is a projection."
---

# The Biographical Ontology

A life story being collected by an agent needs a file structure the agent can read, search, and grow. Six shapes are enough:

```
/profile.md
/transcripts/YYYY-MM-DD-HH-MM--slug.md
/characters/<slug>.md
/timeline/moments/YYYY[-MM[-DD]]--slug.md
/timeline.md
/letters/YYYY-MM-DD-HH-MM--letter.md
```

**Profile** is who the person is right now: name, language, timezone, what the collection is for, how they like to be spoken to, and the open threads the biographer is pursuing. It is the first file the agent reads every cycle.

**Transcripts** are the inbound dumps: what the person actually said, verbatim, stamped to the minute, filed with the question that elicited it. The transcript layer is append-only ground truth. See [Transcripts](/ontology/transcripts).

**Characters** are the recurring people. A mother, a sister, a business partner. Each gets a file once they recur, holding what is known and which transcripts mention them.

**Moments** are bounded things that happened: an afternoon, a summer, a move across the country. Each is a file with a date or date range at whatever precision the person's memory supports. See [Moments and the Timeline](/ontology/moments-and-the-timeline).

**The timeline** is a generated index over the moments, regenerated whenever a moment is added or changed. It grows as the collection deepens, and it is how the agent (and the family) sees the life at a glance.

**Letters** are everything the biographer sent. They matter because the questions asked are part of the record: you cannot interpret an answer without the question. See [The Question Is Part of the Record](/principles/the-question-is-part-of-the-record).

Timestamps carry hour and minute, in the subject's timezone. Two replies in one day is common; two in one minute happens. Filenames that sort chronologically make the corpus greppable by any agent without a database.

Anything beyond these six shapes should fight its way in. A printed biography, a video tribute, a chapter draft: those are [projections composed from the corpus](/concepts/forms-are-projections), never stored inside it.

> **Six shapes, greppable by any agent: profile, transcripts, characters, moments, timeline, letters. The biography is the corpus; everything else is rendered from it.**
