---
title: Moments and the Timeline
sidebar_position: 3
description: "A moment is a bounded thing that happened. The timeline is a generated index over moments. Neither is a transcript."
---

# Moments and the Timeline

A **moment** is a thing that happened over a bounded stretch of time. An hour, a day, a summer. "The drive from Casablanca to Paris." "The morning the store flooded." Moments are the units a life story is actually made of, and they are distinct from transcripts: a transcript records a telling, a moment records the thing told.

One moment usually accretes across many tellings. The person mentions the drive in March, adds the flat tire in June, remembers who was in the back seat in October. The moment file is where those tellings converge:

```markdown
---
when: 1954-07        # as precise as memory supports
where: Casablanca to Paris
characters: [father, ruthie]
---

The family drove north the summer before Eleanor started school...

Sources: 2026-03-02-09-14--reply.md, 2026-06-11-19-40--reply.md
```

Three disciplines keep moments honest:

- **Date precision is variable and declared.** `1954` is a valid `when`. So is `1954-07-15`. Faking precision the person never gave corrupts the timeline.
- **Every claim cites its transcripts.** A moment is interpretation; the sources line is what keeps it auditable.
- **A fact is not a moment.** "She loved Nat King Cole" lives in a character file or the profile. Moments are events.

The **timeline** is a chronological index generated over the moment files, regenerated whenever a moment changes. It is a projection inside the corpus, cheap to rebuild and never hand-curated. Its value is orientation: the agent reads it every cycle to know where the gaps are, and the family reads it to watch the life assemble.

> **A transcript records a telling. A moment records the thing told. The timeline is just the moments, sorted.**
