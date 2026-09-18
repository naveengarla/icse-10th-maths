---
id: framework
title: "Reusable mathematics pedagogy"
sidebar_label: "Authoring framework"
---

# From textbook order to learning order

**Objective:** reduce avoidable repetition while preserving all mathematical and interpretation variations found in the supplied source. The framework supports a learner with limited time; it does not promise a score or substitute question counts for understanding.

The reference implementation is [Shares & Dividends](../ch3-shares/normal.md). Its [coverage audit](../ch3-shares/coverage.md) is the concrete example.

## 1. Inspect the entire source before authoring lessons

Inventory definitions, formulae, worked examples, all exercises, miscellaneous solved and unsolved problems, revision exercises, MCQs, assertion–reason items, multi-stage problems and case studies. Include material after the main exercises. Do not assume chapter headings reveal all skills.

For scans, inspect the page images as well as extracted text. Verify percentages, decimal points, fractions, minus signs, question labels and questions continued on later pages. Give each prompt a stable source ID, PDF-page number, printed-page number and each subpart its own identifier. Keep MCQ umbrella headings separate from actual question counts.

Do not upload the entire source PDF or transcription into the public repository by default. Store paraphrased questions and explicit source locations. Keep original numerical data; label any original or modified practice question.

## 2. Build the concept and skill hierarchy

**Chapter → Concept cluster → Skill → Problem type → Meaningful variation**

- A **concept** supplies meaning: e.g. face value, market value, dividend.
- A **cluster** groups related concepts for teaching: e.g. dividend and income.
- A **skill** is an action: reverse the dividend equation.
- A **problem type** names the goal: find required shares.
- A **variation** changes reasoning: desired total income versus additional income.

For every source subpart ask: **What is mathematically different from questions already mapped?**

Check for a different unknown, reverse reasoning, algebra, formula selection, combined concepts, wording, comparison, allocation, multiple stages, units/time periods, interpretation or exam traps. A changed number alone normally does not create a variation. A new combination needs its own variation if it changes the method; sharing a formula is not sufficient evidence of redundancy.

## 3. Freeze the coverage inventory before selecting Core

Record these fields for each source subpart:

| Field | Requirement |
|---|---|
| Source | Filename, prompt ID, subpart, PDF/printed page |
| Content | Accurate paraphrase; numerical data retained |
| Hierarchy | Concept cluster, skill, problem type, all variation IDs |
| Difficulty | 1 direct; 2 linked/interpretive; 3 algebraic/multi-stage, with editorial judgment |
| Source issue | Missing/ambiguous data or suspected error; explicit treatment |
| Classification | Representative / Redundant / Special |
| Core | Yes/No, with concrete reason |
| Coverage witnesses | Selected Core IDs covering EACH recorded variation |
| Answer | Independently checked result and enough working to explain it |

Do not call an excluded question redundant until every variation has a selected witness. For composite questions, check both component skills and the way they are combined. Never repair an ambiguous datum silently: present a qualified solution or ask for a clearer source if it cannot be resolved.

## 4. Select three overlapping paths

**Core:** use a small set covering all mapped variations. Prefer independent exercises after worked examples. If a variation appears only in a solved example, provide a clearly labelled original transfer problem. Verify removal of each selected question would leave a gap, but do not call this a proven global optimum. Minimise unnecessary subparts as well as question count.

**Strengthen:** retain excluded questions, indexed by variation and type. After an error, identify whether it was conceptual, recognition, algebra or arithmetic. Offer an exact-variation match first, related type second, then lesson review and delayed retry where no fresh match exists. A self-report interface must not claim to automatically grade or diagnose written work.

**Exam:** interleave types without method labels. Include difficult problems, timed practice, MCQs, statement reasoning and cases. Label suggested marks/timing as authored guidance. Only label questions as PYQs when official paper/year provenance has been checked; a textbook resemblance is insufficient.

## 5. Author the learning pages

Each concept lesson should provide meaning, prerequisites, recognition clues, method/formula, meaningful variations, a fully worked example, independent practice links, common errors and an exit check. Prefer short sessions. Teach why the formula applies before introducing shortcuts.

Link each Core question to a lesson or worked example. Provide solutions after an attempt, with units, intermediate reasoning and a sanity check. Separate an interpretation ambiguity from a learner error.

End with mixed retrieval: give the student no problem-type label until after their attempt. Revisit mistakes after a delay; do not infer durable mastery from one successful response.

## 6. Publish honest statistics

Report source prompts and subparts, concepts/clusters, operational skills, problem types, meaningful variations, selected worked examples, Core source/original questions, Core subparts, mixed-retrieval questions, Exam questions, redundant and special source counts.

State overlap between paths and between teaching and practice. New practice does not reduce the source count, and read examples do not count as unaided attempts. Keep statistics derived from the same dataset as the matrix.

## 7. Validate before publishing

- Reconcile all source identifiers and subpart labels against page images.
- Confirm every source variation has a Core witness; retain source-specific notes.
- Check arithmetic with an independent computation, then check interpretation separately.
- Ensure Core lessons explain every rare transformation; avoid coverage that exists only as an unexplained tag.
- Build the site, test navigation and solution reveals, and inspect narrow-screen and dark-mode layout.
- Use a reviewable branch/PR. Publishing the website is separate from preparing content.

Future chapters should reuse this schema and workflow, not assume Shares & Dividends’ list of concepts is universal. In this Markdown edition, students choose Strengthen questions using the variation-to-question map rather than automatic recommendations.
