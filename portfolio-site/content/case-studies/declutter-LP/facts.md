# Facts

## Project

Project name:

- Declutter List Page
- Declutter List Card

Known aliases:

- Declutter
- Decluttered List Page Card
- List Page Declutter

Company:

- AutoScout24

Dates:

- Beginning Q2 2024: research and design started
- 24.05.2024 to 03.06.2024: formative unmoderated mobile-web user test
- Oct 2024: early DE and IT quantitative declutter experiments / deep dive
- 19.02.2025 and 24.02.2025: internal alignment and DE mWeb partner-links decision point
- 28.03.2025: rollout-plan document across mWeb, desktop, iOS, and Android
- 16.09.2025 and 09.10.2025: cross-country rollout reviews
- Late 2025 to 02.02.2026: later desktop and iOS validation workbooks
- User clarification in chat: final designs were shipped across markets

My role:

- Principal Product Designer

PM / primary partner:

- Senior Product Manager

Team / collaborators:

- Consumer Analytics
- Check24
- CA integration teams
- Engineering / implementation partners by platform
- GTM, Sales, Customer Success, Legal, market, and partner stakeholders
- Named collaborators visible in sources include Andreia, Brunno, Anja, Oleksii, Mo, Mathias, Kaan, Alex, Kira, Miriam Kockler, and Anastasiia Makarenko

## One-line summary

- AutoScout24 simplified list-page card hierarchy, tested declutter level, partner-link treatment, and gallery behaviour across mWeb, desktop, and apps, then rolled out different final variants by platform.

## Business context

- Explicitly tied to Search Funnel work and framed in several decks as Search Funnel Update.
- Explicit business goals:
  - grow conversion of engaged users by 5%
  - support Big Rock 2025: Seamless results exploration and comparison
  - maximise dealer lead growth
  - generate positive or neutral impact on supporting KPIs such as media revenue
  - create upsell triggers into premium mobile app experiences

- The work was measured against more than browsing KPIs:
  - dealer and private leads / enquiries
  - DPVs
  - finance entries and conversions
  - Check24 / insurance results
  - partner performance
  - ad / media impact

- The work touched broader marketplace and organisational concerns:
  - partner integrations
  - MIA / performance-product implications
  - reporting implications
  - GTM, legal, and stakeholder alignment

## Problem

- 12% of AS24 users reportedly said a cluttered list page negatively impacted their search experience.
- Contentsquare zoning analysis reportedly showed that about half of visitors dropped off from the list page before reaching a detail page.
- The stated hypothesis was that reducing cognitive load and simplifying the information hierarchy on list-page offers would help visitors browse more easily, find suitable offers more easily, and drive more DPVs and enquiries.
- Early research also framed the problem as a page-hierarchy and decision-support issue:
  - users should clearly understand they are on a list page
  - users should understand they need to tap a card to reach detail
  - users should have enough information to decide whether to open detail

## Why this was hard

- Decluttering the card directly affected multiple competing surfaces and stakeholders:
  - dealer leads
  - private leads
  - finance conversions
  - Check24 insurance conversions
  - media / ad revenue
  - reported dealer KPIs

- The work was not one variable:
  - declutter level
  - partner links
  - gallery behaviour
  - touch-target size
  - finance / insurance placement

- Platform behaviour diverged:
  - mWeb, desktop, and iOS did not support the same answer
  - DE, IT, and NL also produced different trade-offs

- Gallery decisions were especially tricky:
  - users wanted more imagery
  - gallery-heavy variants could hurt actual DPVs
  - desktop evidence showed reported DPVs could be misleading

- Rollout required coordination across:
  - product
  - analytics
  - engineering
  - GTM
  - partner stakeholders
  - legal
  - market teams

- Measurement quality was not perfectly clean:
  - repeat-lead deduping was being corrected
  - some decks contain copy / date noise
  - some raw workbooks contain scope or data-quality caveats

## Users

- Primary users were shoppers browsing vehicle offers on the list page.
- Clearest direct user evidence comes from the Q2 2024 mobile-web study:
  - Germany-based users who spoke English
  - actively looking for a car
  - planning to buy within 3 months

- Core user tasks:
  - scan many offers quickly
  - compare vehicles
  - decide whether to open a detail page
  - sometimes save / favourite vehicles for later

- Confirmed friction:
  - cluttered list-page experience
  - effortful scanning and comparison
  - not enough or not clearly signposted image preview
  - overly prominent price-rating treatment for some users

- Confirmed user needs from early UXR:
  - more than one picture on the card
  - clearer indication that more pictures exist
  - multiple angles and interior views
  - enough information to decide whether to go to detail

## My responsibility

- Personally drove:
  - discovery
  - support for UXR
  - concept exploration
  - design validation
  - experimentation design
  - delivery / implementation
  - QA
  - rollout

- Influenced but did not solely own:
  - cross-functional alignment across analytics, product, engineering, GTM, legal, partner, and market stakeholders
  - translation of findings into rollout-ready platform variants

- Appears to have been owned or heavily supported by others:
  - Consumer Analytics: deep dives / experiment analysis
  - PM partner: product partnership and decision-making
  - engineering partners by platform: implementation and rollout
  - GTM / stakeholder groups: rollout preparation, partner alignment, legal, training, and communications

## Diagnosis

- The team’s stated diagnosis was excessive cognitive load caused by overly complex information hierarchy on list-page offers.
- Early research linked the problem to clutter, drop-off before detail pages, and reduced scanability.
- Specific diagnosis points surfaced in early research:
  - too much card content competing for attention
  - pictures mattered more than the design allowed
  - the design did not clearly signal that more pictures existed
  - the price-rating tag was too prominent and not always understood

- Later experimentation showed that cognitive overload was not only about “too much content” in the abstract. It was also shaped by:
  - whether partner links were present
  - where finance and insurance links sat
  - how large the touch target was
  - whether the image area behaved like a gallery

- Desktop synthesis added a measurement diagnosis:
  - reported DPVs could suggest gallery success while actual DPVs fell

## Approach

- Started with early mobile-web concept testing:
  - Version 1: more conservative, closer to the current list page
  - Version 2: bolder, more reduced list cards

- The work then iterated through three decision layers:
  - declutter level
  - partner-link treatment
  - gallery / no-gallery behaviour

- Variant logic, using later clarified naming:
  - Most Decluttered: smaller card with a small vehicle thumbnail
  - Slightly Decluttered: bigger card with a larger vehicle image
  - With links / no links: refers to partner-link treatment
  - Gallery / no gallery: refers to whether the image area is swipeable and shows multiple images
  - Small / medium / large: descriptive shorthand, not stable canonical variant names

- Major product / design moves evidenced across sources:
  - simplify information hierarchy on the list page card
  - reduce information density and show more offers above the fold
  - test more reduced cards versus bigger-card alternatives
  - reintroduce finance and insurance partner links after early no-links learnings
  - increase partner-link touch targets
  - move finance directly below price and keep insurance separate
  - refine tags, sponsored treatment, price assessment, WLTP / range handling, and empty-value display

- Expanded from mWeb into desktop and apps, with market-specific rollout adaptations.

## Key decisions

- Early mWeb direction:
  - the more decluttered direction outperformed the more conservative direction strongly enough to continue iterating it

- DE mWeb partner-links phase:
  - both decluttered variants improved dealer-lead-related signals
  - the with-links direction preserved Check24 outcomes better
  - finance still underperformed, so the team chose iteration rather than immediate clean rollout

- The team explicitly planned further mWeb iteration to:
  - improve partner-link touch targets
  - test whether insurance cannibalised finance leads
  - explore alternative finance placement

- Final rollout strategy by platform:
  - Mobile web: No Gallery
  - iOS + Android: Gallery
  - Desktop: No Gallery

- Finance placement direction:
  - finance directly below price
  - insurance separated above seller information

- Platform-specific rollout decisions mattered because the data did not support one universal card pattern.

## Tradeoffs

- More decluttered cards improved key browsing and dealer-lead signals, but often increased pressure on finance / insurance surfaces.
- No-links variants protected the decluttered card more aggressively, but reduced finance and insurance exposure.
- With-links variants preserved Check24 / partner needs better, but introduced private-lead downside and still did not fully solve finance performance.
- Gallery introduced a recurring tension:
  - more on-card detail and richer preview
  - versus slower scanning, weaker actual DPVs, or longer result-page interaction cost

- The work balanced:
  - dealer leads
  - private leads
  - DPVs
  - finance entries and conversions
  - insurance / partner performance
  - media revenue
  - reported dealer metrics
  - legal and rollout constraints

- Later rollout also had to balance consistency across markets and platforms against different local starting points.

## Validation

- Qualitative validation:
  - Q2 2024 unmoderated mobile-web user test, N=10, comparing two declutter concepts
  - later UXR was explicitly considered again when private-lead loss remained unclear

- Quantitative validation:
  - Oct 2024 declutter deep dive
  - repeated Consumer Analytics A/B-test readouts across DE, IT, and NL
  - mWeb, desktop, and iOS workstreams

- Validation methods / signals included:
  - DPVs and list-page-originated DPVs
  - dealer and private leads / enquiries
  - lead-type breakdowns such as WhatsApp, call, and email
  - gallery swipe behaviour
  - finance / insurance / partner metrics
  - p-values, significance flags, segment cuts, and scorecards

- Decision hygiene:
  - several decks explicitly say only 95% significant changes are reported unless otherwise stated
  - lead deduping was revisited to improve reliability
  - desktop evaluation explicitly separated reported DPVs from actual DPVs

- Rollout review material added:
  - cross-country / cross-platform rollout evidence
  - mock-versus-tested-version validation
  - GTM / stakeholder readiness planning

## Outcomes

- Confirmed in the kept source analyses:
  - Early mWeb testing:
    - earlier DE and IT mobile-web experiments showed strong DPV and total-lead movement
    - the most decluttered direction performed better than the more conservative direction
    - in early no-links phases, finance conversions were treated as stable despite removed partner links

  - IT mWeb test 1:
    - Slightly Decluttered (no links): +8% total dealer leads from List Page
    - Most Decluttered (no links): +12% total dealer leads from List Page
    - Most Decluttered also showed ad impressions +26%, ad clicks +16%, ad conversion rate -4.5%
    - finance entries underperformed for both

  - DE mWeb partner-links test 2:
    - both decluttered variants delivered very large List Page DPV growth
    - headline numbers vary by deck version, but direction is stable
    - dealer lead / enquiry movement was positive for both variants
    - no-links preserved private performance better
    - with-links preserved Check24 results better
    - finance underperformed for both variants

  - Early Oct 2024 deep-dive tradeoffs were already visible:
    - gallery-forward usage share down in DE and IT
    - go-forwards per gallery user up
    - finance entries down but completion CVR up on very small counts
    - ad impressions up while overall click rate was slightly down

  - Desktop test 1:
    - DE No Gallery: actual dealer DPVs +6%, dealer leads stable
    - IT No Gallery: actual dealer DPVs -2%, dealer leads stable
    - DE Gallery: actual dealer DPVs -9%, dealer leads stable
    - IT Gallery: actual dealer DPVs -27%, dealer leads stable
    - later rollout decks treat No Gallery on desktop as the safer direction and say media revenue moved only very slightly while other core metrics stayed stable

  - iOS test 2:
    - DE iOS: dealer DPVs -7%, dealer leads no significant change
    - IT iOS: dealer DPVs -10%, dealer leads no significant change
    - finance entries and conversions fell materially in later iOS validation
    - apps still moved toward the Gallery direction

- Confirmed by user clarification in chat, not cleanly evidenced in the kept source set:
  - forecasted rollout uplift: +25% dealer DPVs
  - forecasted rollout uplift: +3% dealer leads
  - final designs were shipped across markets

- Likely outcomes:
  - the final answer was not one universal winner
  - the project converged on a platform-specific compromise between cleaner cards and preserved partner / lead performance

## Strategic importance

- This was not a cosmetic tidy-up.
- It was explicitly tied to:
  - Search Funnel
  - a named OKR
  - Big Rock 2025
  - dealer lead growth
  - supporting KPIs such as media revenue
  - premium-app upsell strategy

- The work had marketplace-level implications:
  - finance and insurance partner economics
  - reporting and sales implications
  - partner-link and touch-target design across markets
  - GTM, legal, and customer-facing preparation

- It reflects senior / principal-level work because it spanned:
  - discovery
  - experimentation design
  - validation
  - delivery
  - QA
  - rollout
  - cross-org coordination

- It also required turning one design problem into a platform-specific system rather than forcing a single UI across all contexts.

## Reflection

- No direct personal reflection is supported by the kept source analyses.

## Evidence log

- Project
  - S10, S11, S12, S14, S17: direct, repeated
  - S08 and S09: direct supporting
  - My role and PM title: user clarification in chat, not source-derived

- One-line summary
  - S10, S11, S12, S13, S14: direct, repeated
  - S01, S02, S05, S06, S07: supporting trade-off evidence
  - final synthesis is inferred from repeated sources

- Business context
  - S10, S11, S12, S13, S14: direct, repeated
  - S08 and S09: direct supporting

- Problem
  - S17: strongest direct evidence
  - S11, S12, S13, S14: direct repeated hypothesis framing

- Why this was hard
  - S10, S11, S12, S13, S14: direct, repeated
  - S01, S02, S03, S05, S06, S07: direct quantitative trade-offs
  - some synthesis is inferred across sources

- Users
  - S17: direct strongest evidence
  - S05 and S06: supporting later-platform behaviour evidence

- My responsibility
  - user clarification in chat for first-person scope
  - S10, S11, S12, S13, S14: source support for cross-functional ownership by others

- Diagnosis
  - S17: direct
  - S11, S12, S13, S14: direct repeated problem framing
  - S02, S03, S05, S06, S09: supporting on gallery, reported versus actual DPVs, and LP-localised losses

- Approach
  - S17: direct early concept phase
  - S12, S13, S14: direct variant and iteration evidence
  - S09, S11: direct gallery / no-gallery and rollout evidence
  - variant taxonomy details use user clarification plus source naming

- Key decisions
  - S12, S13, S14: direct on DE mWeb decisions
  - S08 and S11: direct on final platform rollout strategy
  - S09: direct but conflicting interim synthesis

- Tradeoffs
  - S01, S02, S03, S05, S06, S07: direct quantitative trade-offs
  - S10, S12, S13, S14: direct repeated organisational trade-off framing

- Validation
  - S17: direct qualitative validation
  - S01, S02, S03, S05, S06, S07: direct raw quantitative validation
  - S09, S11, S12, S13, S14: direct methodology / significance / rollout review evidence

- Outcomes
  - S01, S02, S05, S06, S07, S10, S12, S13, S14: direct
  - S08, S09, S11: supporting synthesis and rollout evidence
  - +25% dealer DPVs, +3% dealer leads, and shipped status come from user clarification in chat

- Strategic importance
  - S10, S11, S12, S13, S14: direct, repeated
  - S08 and S09: direct supporting
  - senior / principal framing combines repeated source evidence with user-provided role clarification

- Reflection
  - no direct supporting source

## Missing / Uncertain

- Source-derived attribution of your role is absent. The role section depends on user clarification in chat rather than documentary attribution inside the kept sources.
- PM title also comes from user clarification rather than the source set.
- Variant naming and numbering remain messy across phases:
  - “Variant 1 / Variant 2” are not stable labels across the whole programme
  - later deck labels mix declutter level, partner-link treatment, and gallery behaviour

- Exact mapping of some early DE mWeb variants is still not fully clean, even if the most decluttered small-card direction appears to have been stronger.
- S09 presents an interim recommendation that differs from later rollout decks:
  - S09: Gallery for mobile web and apps
  - S08 / S11: final platform strategy becomes Mobile web No Gallery, Apps Gallery, Desktop No Gallery

- DE mWeb test #2 headline metrics vary across deck versions, although the direction is consistent:
  - S12 and S11 use +134% / +134% DPV framing
  - S13 and S14 use +143% / +144% DPV framing

- Check24 directionality conflicts across sources:
  - S12 / S13 say entries fell while visit-to-result CVR improved
  - S14 inverts that direction
  - stable takeaway: with-links preserved Check24 results / leads better than no-links

- Some raw workbook quality issues remain:
  - S01: ad click-rate inconsistency
  - S04: filename says desktop while sheets say mobile
  - S05: “conclusive” flag does not map cleanly to significance
  - S07: finance-sheet inconsistencies

- Exact measured post-rollout impact across all markets is not documented cleanly in the kept source set, even though shipped status and rollout forecasts were clarified in chat.
- Canada rollout context is not cleanly documented in the kept source set. User clarification says it rolled out there too during acquisition / implementation and was tied to broader One Marketplace consistency.

## Strongest portfolio angle

- Strongest evidence-backed framing:
  - principal-level product design leadership on a multi-phase declutter programme that turned early problem diagnosis into platform-specific experimentation and rollout decisions across the search funnel

- Why that is stronger than “I simplified a UI”:
  - it started with evidence-backed problem finding
  - it involved multiple experimentation layers, not one redesign pass
  - it balanced dealer leads, private leads, DPVs, finance, insurance, media, and reporting
  - it ended in different final strategies by platform, not one blanket solution

- 3 strongest story threads to emphasise later:
  - early diagnosis and concept exploration: clutter, drop-off, page hierarchy, and what users actually need on a card
  - layered decision-making: declutter level first, then partner links, then gallery behaviour
  - end-to-end scope: discovery, UXR support, design validation, experimentation design, delivery, QA, and rollout across a large stakeholder network

- 3 biggest evidence gaps or risks:
  - personal role is strong from first-person clarification but weak in documentary attribution inside the kept sources
  - variant naming and chronology are messy across decks and workbooks
  - post-rollout measurement, especially across all markets and Canada / One Marketplace rollout, is not well documented in the kept source set
