---
title: Context Collection
sidebar_position: 1
description: "The craft of agentic biography is collecting context, and the test is whether the agent actually reads its corpus before it speaks."
---

# Context Collection

The mechanism of biography collection matters less than most builders think. Email, voice memos, dinner-table recordings, a chat thread: any channel works if replies keep arriving. What separates a biography from a pile of messages is **context collection**: every exchange lands in a durable, structured corpus, and the collector consults that corpus before it says anything.

The failure mode this replaces is the stateless loop: each reply handled by a fresh model call with whatever recent messages fit in the prompt. That loop produces pleasant correspondence and no biography. It re-asks answered questions, misses the callback ("you mentioned Ruthie in March"), and leaves nothing behind that a book could be built from.

The test for a real context-collection system is behavioral:

1. **Reads before writing.** Before composing, the agent searches the corpus: the profile, the timeline, anything the new reply touches. A question that was already answered is a system failure, and the person on the other end feels it as not being listened to.
2. **Writes before replying.** The new material is filed into the [ontology](/ontology/the-biographical-ontology) first: transcript recorded, characters and moments updated. The letter is composed from the updated corpus, so the reply reflects what was just learned.
3. **Leaves a corpus a stranger could pick up.** If the collecting agent vanished tomorrow, could a new agent (or a human biographer) open the files and continue? That is the standard. It is the same property that makes the corpus renderable into [forms](/concepts/forms-are-projections).

Being listened to is most of why people keep telling their story. Context collection is how a machine listens.

> **Any channel can collect a story. Only a consulted corpus can remember one.**
