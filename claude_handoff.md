# Claude Handoff: Eddie Kim Portfolio

Last updated: 2026-04-25

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
- CryptoXpress should be represented as Co-Founder / CMO experience, but do not over-expand it without sourced detail.

Tone from `TONE-OF-VOICE.md`:

- clear, credible, concise, mature, senior, high-signal
- prioritize decisions, consequences, scope, judgment, and evidence
- avoid inflated UX language such as "seamless", "holistic", "best-in-class", "user-centric", and vague process narration

## Current Repo State

Latest observed commit:

- `79058a3 Refine portfolio case studies`

Current uncommitted changes:

- `claude_handoff.md` is modified by this handoff update.
- `New` is an untracked empty file and looks accidental.

The recent homepage and case-study edits are now in `HEAD`, including:

- root `package.json` forwarding scripts to `portfolio-site`
- Declutter red hero asset
- Strategic AI hero asset
- case-study copy refinements
- homepage Work, Hero, and Speaking adjustments

Recent commits:

- `79058a3 Refine portfolio case studies`
- `522f55e Refine portfolio homepage and case studies`
- `13f5a6f Initial portfolio site`
- `0774522 Add portfolio site`
- `1eb772a Initial commit`

## Active Focus

Currently relevant open files:

- `portfolio-site/RESUME.md`
- `portfolio-site/TONE-OF-VOICE.md`
- `portfolio-site/AGENTS.md`
- `portfolio-site/components/Work.tsx`
- `portfolio-site/components/Navbar.tsx`

Main active theme:

- refining the homepage Work presentation and case-study credibility
- making AI/search/marketplace positioning clearer without overstating claims
- wiring stronger visual anchors for Declutter and Strategic AI

## Homepage State

Primary files:

- `portfolio-site/app/page.tsx`
- `portfolio-site/components/homepage/HomepageTopZone.tsx`
- `portfolio-site/components/Navbar.tsx`
- `portfolio-site/components/Hero.tsx`
- `portfolio-site/components/Work.tsx`
- `portfolio-site/components/homepage/content.ts`
- `portfolio-site/components/Speaking.tsx`

Current structure:

- `HomepageTopZone` contains the sticky nav overlay, `Hero`, and `Work`.
- Lower homepage sections include About, Experience, Speaking, and Contact.
- The nav/theme model is scroll/resize geometry-based, not `IntersectionObserver`.
- `HomepageTopZone` controls `navMode` and `heroTheme`.

Current `Hero.tsx` state:

- headline: "I lead product design work across search, discovery, and AI at marketplace scale."
- role line: "Principal Product Designer and AI Design Lead at AutoScout24"
- summary mentions a marketplace with over 30M monthly users
- hero still uses large vertical spacing and bottom padding; avoid changing unless the user asks for hero spacing or transition work

Current `Navbar.tsx` state:

- contact icons come from `ContactIconLinks`
- mobile/tablet below `md` uses contact icons inside the hero instead of the sticky nav
- bottom work hint and work index appear from `lg` upward
- `lg` to before `xl` uses compact work index
- `xl+` uses full project index

Current `Work.tsx` state:

- Work section renders from `featuredProjects`
- each project has a full-width image block plus text rail
- Declutter now gets a custom pale red background `#FFE5E6`
- the previous first-project `scale-120` / `translate-y-[5%]` treatment has been removed
- all Work images use `homepage-work-image object-cover`

Current `Speaking.tsx` state:

- background is `#F1F1F1`
- the two-column talk layout now starts at `2xl`, so it stacks longer on narrower desktop widths
- image `sizes` now uses `(min-width: 1536px) 32rem, 100vw`

## Featured Projects Data

Primary file:

- `portfolio-site/components/homepage/content.ts`

Current Work/project cards:

- Declutter the List Page
- New Search
- Strategic AI Design Leadership
- Daimler Vehicle Subscription Concept
- Smart Connected Car App

Notable current image wiring:

- Declutter imports `declutter-hero-mockup-wide-red.png`
- New Search imports `new-search-hero-mockup-wide.png`
- Strategic AI imports `strategic-ai-mockup-hero.png`
- Daimler imports `Clay_Mockup___7_.png`
- Smart imports `smart-connected-car-mockup-wide.png`

Contact links:

- email: `mailto:edmundhkim@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/edmundhkim/`

## Case Study State

Several case-study pages were recently refined. Treat the current code as the latest baseline and inspect before continuing.

Declutter:

- uses new red hero image asset
- copy has been softened away from highly specific metrics in several places
- current wording emphasizes measured uplift, buyer progression, enquiry signals, commercial tradeoffs, and platform-specific rollout
- removed the `searchVisionMiro` figure from the page

New Search:

- copy has been softened from exact test readouts toward stronger but less brittle validation language
- iOS remains the strongest validation signal, with Android and web as supporting evidence
- imported `appsSearchV2Failed` has been renamed locally to `appsSearchV2Intermediate`

Strategic AI:

- now uses `strategic-ai-mockup-hero.png` on the homepage Work card and as a full-bleed case-study hero
- copy emphasizes Visual AI Framework, AI design guidance, AI-assisted workflows, early product direction, and organisational capability
- `assets.md` now documents `strategic-ai-mockup-hero.png` as the primary public visual anchor
- page intentionally avoids claiming downstream product outcomes for early AI concepts

Daimler:

- `CaseStudyFigure` now passes `preservedWidthClassName="min-w-0 sm:min-w-[52rem]"`
- end nav has `showDivider={false}`

Smart Connected Car App:

- recent commit includes a small page adjustment; inspect before changing further

Shared case-study component:

- `CaseStudyFigure` now accepts optional `preservedWidthClassName`
- default remains `min-w-[52rem]`

## Verification Commands

Run from repo root:

- `npm run lint`
- `npm run build`

Run from `portfolio-site`:

- `npm run lint`
- `npm run build`

There is no explicit `typecheck` script in `portfolio-site/package.json`. If typecheck is needed, use:

- `npx tsc --noEmit`

Note:

- the root `package.json` forwards `dev`, `build`, `lint`, and `start` to `portfolio-site`

## Risks And Open Questions

- The untracked empty file `New` looks accidental; ask before deleting.
- `strategic-ai-mockup-hero.png` is about 8.6 MB; consider optimizing if build/performance becomes a concern.
- Copy has been intentionally softened in some case studies. Confirm with Eddie before restoring exact metrics or adding new ones.
- `RESUME.md` mentions over 20M monthly users, while the current hero says over 30M monthly users. Do not change either casually; verify the intended public claim before harmonizing.
- The hero vertical spacing remains heavy-handed but is part of the current composition.

## Recommended Next Steps

1. Decide whether the empty untracked `New` file should stay.
2. Review the latest committed case-study and homepage state before making more changes.
3. Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` before finalizing code changes.
4. Manually check responsive behavior for:
   - homepage hero-to-work transition
   - Work image framing
   - sticky nav at mobile, `lg`, and `xl`
   - Speaking section at tablet, laptop, and wide desktop widths
   - Strategic AI hero image load/performance

## Useful Next Prompt

If continuing from here, a good next prompt is:

> Please review the latest homepage and case-study state, clean up the accidental `New` file if appropriate, verify the new image treatments, then run lint, typecheck, and build. Keep copy changes conservative and do not invent new claims.
