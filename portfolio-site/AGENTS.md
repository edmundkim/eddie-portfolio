# AGENTS.md

## Purpose

This repo is a production-facing personal portfolio site built with Next.js and Tailwind.
Treat changes as user-visible and quality-sensitive.

## How to work

- Analyze before editing.
- Prefer small, inspectable diffs.
- Do not change unrelated files.
- Do not make speculative refactors.
- Explain what changed and why.

## Validation

After code changes, run:

- `npm run lint`
- `npm run build`

If validation fails, report it clearly and do not claim the task is fully complete.

## Content boundaries

- Do not rewrite case study copy unless explicitly asked.
- Do not change layout and content strategy in the same pass unless explicitly asked.
- Prefer targeted edits over page-wide rewrites.
- Preserve existing component patterns unless the task is to evolve them.

## Source of truth for case study work

When working on case study pages, prioritize:

1. The live page source that actually renders the page
2. `TONE-OF-VOICE.md`
3. Case study source files such as `overview.md`, `facts.md`, `source-analyses.md`, `timeline.md`, and related content docs

If source docs and live page content conflict, call out the mismatch before making major edits.

## Writing expectations

- Keep writing credible, concise, and outcome-focused.
- Emphasize judgment, scope, leadership, systems thinking, and measurable impact.
- Avoid overly internal language, excessive timeline detail, and company-specific jargon unless it materially improves clarity or credibility.
- Do not overstate ownership or impact beyond what the source material supports.

## Case study editing rules

- Follow the repo tone-of-voice guidance.
- Keep iOS and Android impact grouped when appropriate.
- Keep web impact separate when appropriate.
- Reduce unnecessary specificity for hiring-manager audiences.
- Highlight meaningful outcomes and evidence over exhaustive process detail.

## Before finishing

- Summarize what changed.
- Note anything not verified.
- Call out assumptions or source conflicts.
- Separate completed work from follow-up suggestions.
