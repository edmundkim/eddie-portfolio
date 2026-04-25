# UI Redesign Plan

This file is the lightweight source of truth for the current homepage redesign phase.

## Current Phase

- Homepage visual refinement with controlled section-based theme transitions

## In Scope

- `portfolio-site/app/page.tsx`
- `portfolio-site/components/Hero.tsx`
- `portfolio-site/components/Work.tsx`
- `portfolio-site/components/Navbar.tsx`
- `portfolio-site/components/About.tsx`
- `portfolio-site/components/Experience.tsx`
- `portfolio-site/components/Speaking.tsx`
- `portfolio-site/components/ContactClose.tsx`
- `portfolio-site/app/globals.css`

## Out of Scope

- case study pages
- case study templates
- hover CTA system
- locked work states
- advanced motion choreography
- parallax or decorative scroll effects
- anything that turns this into a heavy animation pass

## Goals

- preserve the stronger work-led homepage hierarchy from the previous pass
- introduce a restrained dark-to-light-to-dark homepage rhythm across major sections
- keep theme shifts controlled through a small number of section-level states
- refine background, text, border, and link color behavior without adding a motion system
- keep the homepage readable and premium first, expressive second

## Active References

- David Pacheco: homepage structure and rhythm
- Hande Ky: interaction tone for a later phase, not to be implemented yet

## Deferred for Later

- hover CTA treatment
- locked work treatment
- active section tracking if it becomes necessary
- richer motion polish
- case study page redesign
