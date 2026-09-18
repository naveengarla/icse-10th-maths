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

## 5. Author the learning pages: compress repetition, preserve teaching

The mandatory sequence for each chapter is **foundations → concepts → formula meaning and derivation → problem reading → reasoned worked examples → guided attempt → independent practice → mixed recognition → exam presentation**.

### Foundations and concepts

Identify prerequisites before teaching the chapter. Explain each prerequisite with a small example and a readiness check with feedback. Do not assume a student in Class 10 has mastered percentages, fractions or algebra. Provide a concept checklist with meaning, units, examples and common confusions. A vocabulary list alone is insufficient.

### Formulae

State symbols, units and conditions. Derive a small set of central relationships before showing rearrangements. Explain why the formula applies, which value or percentage base it uses, and what changes when the unknown changes. Include formula-selection practice rather than asking the learner only to recite formulas.

### Reading and reasoning

Teach how to extract givens, identify the requested quantity, decode language and connect intermediate quantities. Explicitly contrast words such as by/to, amount/percentage, equal investments/equal incomes, and proceeds/profit. For multi-stage questions, make the chronological or algebraic structure visible. Use a compact Mermaid diagram when branching or dependencies help; prose and tables remain sufficient for simple steps.

### Every model solution

Include the question, how to read it, why the method was chosen, essential exam working, a sanity check, a common wrong approach and a transfer question. Show intermediate arithmetic and algebra, especially for reverse and multi-stage problems. Keep the learning explanation separate from the shorter mathematical presentation the student should reproduce in an exam. Do not invent official marking schemes.

### Practice and compression

Link each Core problem to a relevant fully explained model or lesson. Give a supported attempt before independent work. Compact answer keys are useful only after teaching; they must not replace the reasoning. A wrong answer should lead to the missing prerequisite, concept, recognition step or calculation, not simply a larger random question set.

**Reduce repeated questions and unnecessary software work. Do not reduce conceptual explanation, important algebraic steps or exam presentation merely to save tokens.** Markdown is sufficient for substantive teaching, tables, mathematical notation, expandable solutions and Mermaid source; no application framework is required to author or review it.

End with mixed retrieval and delayed retries. Do not infer durable mastery from one correct attempt.

## 6. Publish honest statistics

Report source prompts and subparts, concepts/clusters, operational skills, problem types, meaningful variations, selected worked examples, Core source/original questions, Core subparts, mixed-retrieval questions, Exam questions, redundant and special source counts.

State overlap between paths and between teaching and practice. New practice does not reduce the source count, and read examples do not count as unaided attempts. Keep statistics derived from the same dataset as the matrix.

## 7. Validate before publishing

- Reconcile all source identifiers and subpart labels against page images.
- Confirm every source variation has a Core witness; retain source-specific notes.
- Check arithmetic with an independent computation, then check interpretation separately.
- Ensure Core lessons explain every rare transformation; avoid coverage that exists only as an unexplained tag.
- For Markdown-only work, check relative links, mathematical steps, solution completeness and diagram syntax. Build or browser-test a website only when website changes are requested.
- Use a reviewable branch/PR. Publishing the website is separate from preparing content.

Future chapters should reuse this schema and workflow, not assume Shares & Dividends’ list of concepts is universal. In this Markdown edition, students choose Strengthen questions using the variation-to-question map rather than automatic recommendations.
