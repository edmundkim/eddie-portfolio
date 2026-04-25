# Claude Handoff: Portfolio Homepage State

Last updated: 2026-04-24

## Purpose

Use this as the current handoff for the Eddie Kim portfolio homepage work.

Important: the current code is the source of truth. This document replaces older homepage recovery notes that mentioned an `IntersectionObserver` nav model, unresolved sticky behavior, or the old dark lower footer zone.

## Current Scope

This work is homepage-focused.

In scope:

- homepage shell and section structure
- sticky left nav behavior
- hero-to-work theme transition
- Work section preview layout
- homepage typography, spacing, and responsive rails
- lower homepage sections: About, Experience, Speaking, Contact

Out of scope unless explicitly requested:

- case study page redesigns
- case study copy rewrites
- broad design-system refactors
- invented metrics or achievements

## Current Homepage Structure

File:

- `portfolio-site/app/page.tsx`

The homepage currently renders:

1. `HomepageTopZone`
2. light zone containing `About` and `Experience`
3. light zone containing `Speaking` and `ContactClose`

`HomepageTopZone` renders:

1. absolute sticky nav overlay
2. `Hero`
3. `Work`

The lower homepage is no longer inside the old dark bottom zone.

## Core Files

- `portfolio-site/app/page.tsx`
- `portfolio-site/app/globals.css`
- `portfolio-site/components/homepage/HomepageTopZone.tsx`
- `portfolio-site/components/Navbar.tsx`
- `portfolio-site/components/Hero.tsx`
- `portfolio-site/components/Work.tsx`
- `portfolio-site/components/About.tsx`
- `portfolio-site/components/Experience.tsx`
- `portfolio-site/components/Speaking.tsx`
- `portfolio-site/components/ContactClose.tsx`
- `portfolio-site/components/homepage/content.ts`
- `portfolio-site/components/homepage/Section.tsx`

## Nav And Theme State

Primary file:

- `portfolio-site/components/homepage/HomepageTopZone.tsx`

Current model:

- `HomepageTopZone` owns `navMode`: `"default"` or `"work"`
- `HomepageTopZone` owns `heroTheme`: `"dark"` or `"light"`
- both are computed in a scroll/resize update function
- no `IntersectionObserver` is currently used
- the trigger uses `#work.getBoundingClientRect().top`
- theme/nav switch uses an early lead:

```ts
const themeLead = Math.min(window.innerHeight * 0.18, 240);
const hasWorkEnteredThemeZone =
  workSectionTop <= window.innerHeight + themeLead;
```

This means:

- the dark-to-light flip begins before the first Work image fully enters
- the work nav mode now appears at the same time as the hero theme flip
- the old separate nav trigger line was removed

## Sticky Nav Current State

Primary file:

- `portfolio-site/components/Navbar.tsx`

Top nav:

- email icon links to `mailto:edmundhkim@gmail.com`
- LinkedIn icon links to `https://www.linkedin.com/in/edmundhkim/`
- icons float without circular containers
- mail icon is filled, not outline
- LinkedIn icon uses a cleaner standard glyph path
- icon sizes are currently:
  - mail: `1.32rem`
  - LinkedIn: `1.21rem`

Bottom nav:

- mobile, below `lg`: no Work hint and no Work index
- `lg` to before `xl`: compact project index
- `xl+`: full project index
- default Work hint only appears from `lg` up
- inactive nav elements use `pointer-events-none`, `opacity-0`, and `tabIndex={-1}`
- Work nav enters with a transform-led slide-up animation
- reduced-motion users avoid the movement through existing `motion-reduce` classes

Responsive nav tradeoff:

- keeping the full index below `xl` crowded the narrower desktop rail
- the current middle state restores useful project navigation at `lg` without undoing the improved margins

## Hero Current State

Primary file:

- `portfolio-site/components/Hero.tsx`

Current features:

- hero text colors are driven by CSS variables on `data-hero-theme`
- dark mode:
  - name: `#FBFBFB`
  - main headline: `#6169FF`
  - supporting line: `#CCCCCC`
  - summary: `#FBFBFB`
  - selected-work project meta: `#566AFF`
- light mode:
  - name/supporting/summary/project meta: `#101010`
  - main headline: `#000BFF`
- `Selected works` remains hard-coded `#101010`
- the profile image has no drop shadow
- profile image wrapper is currently `max-w-[21.6rem]`
- selected-work transition label sits near the bottom of the hero:
  - `Selected works` with inline down arrow
  - `2022-present`
  - `AutoScout24`

Still worth watching:

- hero still uses intentionally large vertical values:
  - `min-h-[calc(148svh-4rem)]`
  - `sm:min-h-[calc(154svh-5rem)]`
  - `lg:min-h-[calc(166svh-6rem)]`
  - `pb-[900px]`
- these may need a future cleanup pass, but they are part of the current composition

## Hero-To-Work Theme Transition

Primary files:

- `portfolio-site/components/homepage/HomepageTopZone.tsx`
- `portfolio-site/app/globals.css`

Current behavior:

- `.homepage-zone--dark-top` defaults to `#101010`
- `[data-hero-theme="light"]` changes it to `#FBFBFB`
- transition duration is `500ms`
- hero text and selected-work project meta use scoped CSS variables
- the bottom fade on `.homepage-zone--dark-top::after` fades out in light mode
- reduced-motion disables these transitions

Why the trigger leads the viewport:

- if the theme flip starts exactly when `#work` enters, the 500ms transition feels late
- `themeLead` starts the transition early enough that light mode is underway as the first Work image appears

## Work Section Current State

Primary file:

- `portfolio-site/components/Work.tsx`

Current structure:

- `#work` has an `sr-only` heading: `Selected works`
- each project row has:
  - full-width image block
  - inner text content rail using `homepage-shell homepage-core homepage-core--hero`
  - context and label grouped together as metadata
  - index/title on the left
  - summary/description/CTA on the right at `lg`
- text content article has subtle vertical padding:
  - `py-1 sm:py-1.5`
- item spacing:
  - `py-12`
  - `sm:py-[4.2rem]`
  - last item bottom padding `pb-24 sm:pb-[7.2rem]`

Current images:

- Declutter uses `declutter-hero-mockup-wide.png`
- New Search uses `new-search-hero-mockup-wide.png`
- Daimler uses `Clay_Mockup___7_.png`
- Strategic AI currently has no image assigned

Current Declutter image treatment:

- first project image gets `scale-120`
- first project image gets `translate-y-[5%]`
- object position is `58% 50%`

## Content Data

Primary file:

- `portfolio-site/components/homepage/content.ts`

Current notable values:

- email: `mailto:edmundhkim@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/edmundhkim/`
- Daimler image import:
  - `@/content/legacy-projects/daimler-subscription/assets/Clay_Mockup___7_.png`
- `featuredProjects` powers:
  - Work cards
  - sticky Work nav index

Do not invent new metrics or outcomes. Preserve the current copy unless the user explicitly asks for copy changes.

## Lower Homepage Sections

### About / How I Work

Primary file:

- `portfolio-site/components/About.tsx`

Current state:

- full-width background: `#EAEDFF`
- content remains inside `HomepageSection`
- no section divider border

### Experience

Primary file:

- `portfolio-site/components/Experience.tsx`

Current state:

- no major top section border
- internal row separators remain
- this was intentional because those divide rows inside one section, not between major sections

### Speaking

Primary file:

- `portfolio-site/components/Speaking.tsx`

Current state:

- full-width background: `#F1F1F1`
- two-column talk rows at `lg`:
  - left: title and description
  - right: image
- mobile stacks text first, image second
- generous row spacing:
  - `space-y-24`
  - `sm:space-y-28`
  - `lg:space-y-32`

Known follow-up:

- the user reported the two-column Speaking layout gets too cramped on smaller/narrow desktop viewports
- a future fix should probably move the two-column grid from `lg:` to `xl:` or otherwise stack earlier
- do not change content or images for that fix

### Contact / Footer

Primary file:

- `portfolio-site/components/ContactClose.tsx`

Current state:

- lives in a light zone
- no major top section border
- still uses the existing contact copy and links

## Global Layout And Typography

Primary file:

- `portfolio-site/app/globals.css`

Current layout variables:

- `--homepage-edge-gap`
- `--homepage-nav-width`
- `--homepage-nav-gap`
- `--homepage-content-rail`

Current rail behavior:

- base and `sm` use small rails
- `1024px` to before `1280px` uses:

```css
--homepage-content-rail: clamp(10rem, 13vw, 12rem);
```

- `1280px+` restores the wider editorial rail:

```css
--homepage-content-rail: clamp(21.9615rem, 23.4256vw, 26.3538rem);
```

Why:

- the old `lg` rail jumped to about `351px` at `1024px`, which made narrower desktop layouts feel awkward
- the current middle range keeps a more usable rail without losing the wide-desktop composition

Typography:

- `app/page.tsx` loads IBM Plex Sans via `next/font/google`
- global typography helper classes now exist:
  - `homepage-type-display`
  - `homepage-type-subhead`
  - `homepage-type-body`
  - `homepage-type-eyebrow`
  - `homepage-type-badge`
  - `homepage-type-functional`
  - and related variants
- Hero, Work, About, Speaking, and nav have started using these helpers

## Validation Status

Recent code changes in this session were repeatedly validated with:

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

Most recent successful validation was after:

- hiding mobile Work hint/index while keeping email and LinkedIn icons visible

This documentation-only update did not require rerunning the app checks.

## Current Open Follow-Ups

1. Speaking responsive layout
   - two-column layout should stack earlier when the text column gets too narrow
   - likely fix: move the row grid from `lg:grid-cols-*` to `xl:grid-cols-*`, or add a more adaptive grid rule

2. Hero vertical system
   - current tall hero values work visually but are still heavy-handed
   - avoid touching unless the user asks for hero spacing or transition changes

3. Browser verification
   - manually check:
     - mobile nav has only email and LinkedIn
     - `lg` compact Work index appears
     - `xl` full Work index appears
     - hero theme flips before the first Work image appears
     - About background is `#EAEDFF`
     - Speaking background is `#F1F1F1`

## Recommended Next Prompt

If continuing the current homepage work, a good next prompt is:

> Please fix the Speaking section responsive layout so the two-column rows stack before the text column becomes too narrow. Keep the current `#F1F1F1` background, existing content, images, and spacing direction. Prefer a small breakpoint/grid change in `components/Speaking.tsx`, then run lint, typecheck, and build.

## Notes For The Next Assistant

- Do not use old handoff assumptions about `IntersectionObserver`; the current nav uses scroll/resize geometry.
- Do not restore the dark bottom/footer zone unless the user explicitly asks.
- Do not bring back mobile Work hint/index unless asked; mobile should currently show only email and LinkedIn at the top.
- Preserve the `1024px` to `1279px` rail unless the user is explicitly revisiting margins.
- Keep changes small and explain the "why"; the user is using this as a learning process.
