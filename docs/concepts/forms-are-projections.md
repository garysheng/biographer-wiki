---
title: Forms Are Projections
sidebar_position: 2
description: "A printed biography, a video tribute, a chapter: forms are rendered from the corpus and never stored inside it."
---

# Forms Are Projections

A biography corpus eventually becomes things: a printed book, a video tribute, short stories for the grandchildren, a toast for the ninetieth birthday. Call these **forms**. The load-bearing rule is that a form is a projection: it is rendered *from* the corpus, and it never lives *inside* the corpus.

This is the [corpus-and-projection pattern](https://appliedai.wiki/concepts/the-corpus-and-the-projection) applied to a life. The corpus holds ground truth at full resolution: transcripts verbatim, moments cited to their sources. A form is a lossy, styled, audience-shaped rendering of some slice of that truth. Storing the rendering back into the source of truth confuses evidence with output, and it goes stale the moment a new transcript arrives.

What this buys you:

- **Regeneration is free.** New material arrived? Re-render the chapter. The projection is never hand-edited, so nothing is lost by rebuilding it. When a form comes out wrong, fix the corpus or the renderer, never the artifact.
- **Forms multiply without new collection.** One corpus yields the book, the video script, and the toast. Defining a new form is trivial next to the years of collection behind it.
- **The corpus stays the single thing worth protecting.** Back up one directory tree and the family's inheritance is safe.

Practically: keep a form as a definition (what it selects, its structure, its voice) plus a renderer. Timestamps and provenance come along for free, because every claim in the projection traces to transcripts.

The one projection allowed inside the corpus is the [timeline](/ontology/moments-and-the-timeline), because the agent itself needs it for orientation on every cycle, and it is regenerated rather than curated.

> **Collect once, at full resolution. Render as many forms as the family wants, forever.**
