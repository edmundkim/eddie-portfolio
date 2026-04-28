# Claude Handoff: Eddie Kim Portfolio

Last updated: 2026-04-28

## Purpose

Use this as the current handoff for Eddie Kim's portfolio site work.

The live code is the source of truth. This document should help the next coding session understand the current direction, active files, uncommitted work, verification commands, and likely next steps.

## Project Goal

Build a modern, minimal portfolio site for Eddie Kim.

The site should communicate:

- Principal Product Designer at AutoScout24
- AI design leadership
- CMO and Co-Founder at CryptoXpress
- product thinking, systems thinking, and shipped impact

Style direction:

- clean, minimal, high-quality typography
- modern but not flashy
- avoid generic startup-site patterns
- preserve the current editorial, sparse, high-signal feel

## Working Rules

- Do not invent achievements, metrics, company details, or case-study claims.
- Prefer small, reviewable changes over broad rewrites.
- Preserve the existing Next.js, TypeScript, and Tailwind structure.
- Use minimal dependencies.
- Explain the plan before larger changes.
- Keep layout and content strategy separate unless the user explicitly asks to combine them.
- For case-study edits, prioritize the rendered page source, then `TONE-OF-VOICE.md`, then source docs in the case-study content folders.

## Source Of Truth

Core guidance:

- `portfolio-site/AGENTS.md`
- `portfolio-site/RESUME.md`
- `portfolio-site/TONE-OF-VOICE.md`

Current content positioning from `RESUME.md`:

- Eddie is a Principal Product Designer and AI Design Lead at AutoScout24.
- Emphasize search and discovery impact, AI leadership, systems thinking, marketplace scale, and practical design-to-build workflow change.
- AutoScout24 marketplace scale is currently stated as over 30M monthly users in both the hero and `RESUME.md`.
- CryptoXpress should be represented as Co-Founder / CMO experience, but do not over-expand it without sourced detail.

Tone from `TONE-OF-VOICE.md`:

- clear, credible, concise, mature, senior, high-signal
- prioritize decisions, consequences, scope, judgment, and evidence
- avoid inflated UX language such as "seamless", "holistic", "best-in-class", "user-centric", and vague process narration

## Current Repo State

Branch:

- `main`, tracking `origin/main`
- No local or remote `product` branch was observed during this handoff pass.

Latest committed baseline before the current wrap-up:

- `cec3f9f Polish homepage reveal and analytics`

This wrap-up pass includes product-relevant edits in:

- `portfolio-site/RESUME.md`
- `portfolio-site/app/globals.css`
- `portfolio-site/app/work/daimler-subscription-concept/page.tsx`
- `portfolio-site/app/work/declutter-list-page/page.tsx`
- `portfolio-site/app/work/new-search/page.tsx`
- `portfolio-site/app/work/smart-connected-car-app/page.tsx`
- `portfolio-site/app/work/strategic-ai-design-leadership/page.tsx`
- `portfolio-site/components/About.tsx`
- `portfolio-site/components/ContactClose.tsx`
- `portfolio-site/components/Hero.tsx`
- `portfolio-site/components/Navbar.tsx`
- `portfolio-site/components/Speaking.tsx`
- `portfolio-site/components/Work.tsx`
- `portfolio-site/components/homepage/HomepageTopZone.tsx`
- `portfolio-site/components/homepage/WorkAssetReveal.tsx`
- `portfolio-site/components/homepage/content.ts`
- `claude_handoff.md`

Intentionally left out of the product commit unless Eddie says otherwise:

- `New` - untracked empty file, likely accidental
- `Synthesia-cover-letter-Eddie-Kim.docx` - untracked personal document
- `~$nthesia-cover-letter-Eddie-Kim.docx` - untracked Word temp/lock file

Recent commits:

- `cec3f9f Polish homepage reveal and analytics`
- `94a8796 Update portfolio favicon`
- `0c8e126 Update portfolio page title`
- `79058a3 Refine portfolio case studies`
- `522f55e Refine portfolio homepage and case studies`

## Active Focus

Main active theme:

- making the homepage feel more product-led and editorial by connecting the hero directly into the first selected-work entry
- making selected work read as senior product systems work, not a generic portfolio grid
- softening public case-study proof where exact metrics or confidential AI product detail should not be exposed
- keeping AI leadership concrete through decision standards, review/control logic, and workflow capability rather than hype

## Homepage State

Primary files:

- `portfolio-site/app/page.tsx`
- `portfolio-site/components/homepage/HomepageTopZone.tsx`
- `portfolio-site/components/Navbar.tsx`
- `portfolio-site/components/Hero.tsx`
- `portfolio-site/components/Work.tsx`
- `portfolio-site/components/homepage/content.ts`
- `portfolio-site/components/homepage/WorkAssetReveal.tsx`
- `portfolio-site/components/Speaking.tsx`

Current structure:

- `HomepageTopZone` contains the sticky nav overlay, `Hero`, and `Work`.
- Lower homepage sections include About, Experience, Speaking, and Contact.
- The nav/theme model is scroll/resize geometry-based.
- `HomepageTopZone` now uses the first work image trigger (`work-theme-trigger`) to fade in a fixed light work background and switch the nav/hero theme.
- The visual background transition has a small exit buffer to avoid flicker around the threshold.

Current `Hero.tsx` state:

- headline: "I design search, discovery, and AI product systems for complex marketplaces."
- role line: "Principal Product Designer and AI Design Lead at AutoScout24"
- summary mentions turning messy product systems into clearer user decisions, measurable marketplace outcomes, and responsible AI patterns at over 30M monthly user scale
- the previous oversized bottom padding has been reduced
- the selected-work marker now comes from `featuredProjects[0]`, so changing project order changes the hero handoff copy

Current `Work.tsx` state:

- Work renders from `featuredProjects`
- the first project title block appears in the hero, not again in the Work list
- each later project gets a separate header band, full-width image band, and content band
- image backgrounds are now data-driven through optional `project.image.backgroundColor`
- New Search uses a fade reveal
- Declutter uses the curtain/unveil reveal and pale red background `#FFE5E6`
- other Work images use the existing unveil reveal
- a confidentiality note appears after the final project

Current `Navbar.tsx` state:

- contact icons come from `ContactIconLinks`
- mobile/tablet below `md` uses contact icons inside the hero instead of the sticky nav
- default/work nav state transitions have slower delayed movement to match the longer hero-to-work transition
- bottom work hint and work index appear from `lg` upward
- `lg` to before `xl` uses compact work index
- `xl+` uses full project index

Current `Speaking.tsx` state:

- background is `#F6F6F6`
- the two-column talk layout starts at `2xl`, so it stacks longer on narrower desktop widths
- image `sizes` uses `(min-width: 1536px) 32rem, 100vw`

## Featured Projects Data

Primary file:

- `portfolio-site/components/homepage/content.ts`

Current Work/project order:

1. New Search
2. Declutter the List Page, displayed in the homepage hero/work area as "List Card Redesign"
3. Strategic AI Design Leadership
4. Daimler Vehicle Subscription Concept
5. Smart Connected Car App

Notable data model changes:

- `FeaturedProjectImage` supports optional `backgroundColor`
- `FeaturedProject` now includes `period` and `displayTitle`
- `formatFeaturedProjectIndex` still exists but is no longer used by `Work.tsx`

Notable current image wiring:

- New Search imports `new-search-hero-mockup-wide.png`
- Declutter imports `declutter-hero-mockup-wide-red.png`
- Strategic AI imports `strategic-ai-mockup-hero.png`
- Daimler imports `Clay_Mockup___7_.png`
- Smart imports `smart-connected-car-mockup-wide.png`

Contact links:

- email: `mailto:edmundhkim@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/edmundhkim/`

## Case Study State

Several case-study pages were refined in this pass. Treat the current code as the latest baseline and inspect before continuing.

Declutter:

- public proof is now phrased around testing, analysis, progression signals, enquiry behaviour, and rollout direction rather than exact values
- a paragraph explains that exact values are not included publicly
- card grids now move to multi-column at `2xl` to avoid cramped desktop layouts

New Search:

- public proof is phrased as research, experimentation, and post-launch analysis with platform-specific evidence
- the story frames the work around buyer intent expression and complex marketplace inventory
- exact figures are withheld publicly, while the evidence shape remains clear
- one supporting visual/text grid now shifts to `2xl`

Strategic AI:

- hero and facts now emphasize reusable AI decision guidance over downstream product claims
- added a generalized AI decision model covering quiet assistance, generated content, recommendations, decision-shaping summaries, and actions on the user's behalf
- the model is explicitly abstracted to protect confidential product strategy
- section grids now shift to `2xl`

Daimler:

- positioned as a supporting case study
- copy emphasizes making an ambiguous service model concrete enough for users, executives, and delivery partners to evaluate
- section grids now shift to `2xl`

Smart Connected Car App:

- positioned as an earlier supporting case
- copy emphasizes implementation-ready UX across vehicle, backend, and partner dependencies
- hero image now renders at natural width instead of a fixed cropped height
- section grids now shift to `2xl`

Resume:

- AutoScout24 marketplace scale changed from over 20M monthly users to over 30M monthly users.

## Verification Status

Latest wrap-up checks run on 2026-04-28:

- `npm run lint` - passed
- `npx tsc --noEmit` from `portfolio-site` - passed
- `npm run build` - passed
- `curl -I http://127.0.0.1:3002/` against `next start` - passed with HTTP 200
- Headless Chrome screenshots at 390x844 and 1440x1200 - passed basic hero/mobile overflow smoke check

There is no explicit `typecheck` script in `portfolio-site/package.json`.

Recommended verification commands from repo root:

- `npm run lint`
- `npm run build`

TypeScript-only check from `portfolio-site`:

- `npx tsc --noEmit`

## Risks And Open Questions

- The untracked empty file `New` looks accidental; ask before deleting.
- The untracked Synthesia Word document and Word temp file look unrelated to the product site; do not commit unless Eddie explicitly asks.
- There is no observed `product` branch. If Eddie means a deployment branch or environment named product, confirm before pushing or branch-moving.
- The first selected-work block now depends on `featuredProjects[0]`; reorder carefully because the hero copy changes with it.
- The homepage theme transition depends on `work-theme-trigger` on the first work image. If the Work layout changes, re-test the hero-to-work transition.
- `strategic-ai-mockup-hero.png` is large; consider optimization if performance becomes a concern.
- Copy has been intentionally softened in some case studies. Confirm with Eddie before restoring exact metrics or adding new claims.

## Recommended Next Steps

1. After the wrap-up commit, decide whether to delete or ignore the root-level untracked files.
2. Manually check the homepage at mobile, laptop, and wide desktop widths, especially the hero-to-work transition and first work image.
3. Review the Strategic AI decision model for tone and confidentiality.
4. If a `product` branch is required, create or switch to it deliberately after confirming the intended branch/deployment flow.

## Useful Next Prompt

If continuing from here, a good next prompt is:

> Please review the latest homepage hero-to-work transition and selected-work layout in browser at mobile, laptop, and wide desktop widths. Keep copy changes conservative, do not invent claims, and do not commit the unrelated root-level Word/temp files.
