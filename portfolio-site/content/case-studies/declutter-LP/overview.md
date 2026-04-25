# Overview

## Summary

AutoScout24 treated this as a search-funnel optimisation problem on the list page, not a visual tidy-up. The card is the point where shoppers scan dozens of offers, compare them quickly, and decide whether any single vehicle deserves a deeper look. From Q2 2024 through rollout work in 2025 and later validation into early 2026, the team simplified card hierarchy across mobile web, desktop, and apps, then tested three linked questions: how far to declutter, whether partner links should remain on-card, and when gallery behaviour helped or hurt. The result was not one universal card. It was a platform-specific set of decisions intended to reduce cognitive load while protecting dealer leads, detail-page visits, partner outcomes, and other marketplace KPIs.

## Context

This work sat inside Search Funnel efforts and was repeatedly connected to broader buyer-experience goals, including Big Rock 2025: _Seamless results exploration and comparison_. It was also tied to explicit commercial targets: grow conversion of engaged users by 5%, maximise dealer lead growth, preserve or improve supporting KPIs such as media revenue, and create upsell triggers into premium app experiences.

That business framing matters because the list page is one of the marketplace’s highest-leverage surfaces. It sits before detail pages and before lead generation, so hierarchy changes at card level can alter what users notice, which offers they open, how often they enquire, and how partner modules perform. This project therefore touched more than browsing behaviour. It affected dealer and private leads, finance entries and conversions, Check24 / insurance outcomes, media performance, reporting, and rollout readiness across markets and platforms.

The organisational context made the work harder still. Simplifying the card meant intervening in a space where multiple functions had legitimate claims on limited UI real estate: product, analytics, engineering, GTM, legal, partner teams, and market stakeholders. The design problem was inseparable from those tradeoffs.

## Problem

The stated diagnosis was excessive cognitive load caused by an overly complex information hierarchy on list-page offers. One source reported that 12% of AutoScout24 users said a cluttered list page negatively affected their search experience. Contentsquare zoning analysis reportedly showed that about half of visitors dropped off from the list page before reaching a detail page. That made the problem commercially material, not just aesthetic.

Early research framed the issue more precisely than “too much content.” The list page needed to support three jobs at once:

- make it clear that users were still browsing a list, not consuming full detail
- signal that tapping a card was the route to richer information
- provide enough evidence on-card for users to decide which offers were worth opening

The existing design was not doing that cleanly. Too many elements competed for attention. Image preview carried more decision value than the design allowed for, but the interface did not clearly signal that more pictures existed. Some users found the price-rating treatment too prominent relative to its usefulness. The result was slower scanning, harder comparison, and more friction at the point where users needed to narrow options quickly.

This is why “declutter” is slightly misleading as a label. The underlying issue was decision friction. The team was not only trying to remove visual noise; it was trying to improve the quality and speed of choices on a surface that determined downstream funnel performance.

## Role

As Principal Product Designer, I drove the design side of the work end to end: discovery, support for UXR, concept exploration, design validation, experimentation design, delivery, QA, and rollout.

My contribution was not limited to producing a cleaner card layout. I helped turn the problem into a sequence of testable design decisions, carried those decisions through validation and implementation, and influenced how the findings were translated into rollout-ready variants across mobile web, desktop, and apps.

I did not solely own the adjacent functions, and that distinction matters. Consumer Analytics led deep dives and experiment analysis. The PM partner shared product framing and decision-making. Engineering teams owned platform implementation. GTM, legal, partner, and market stakeholders were necessary for rollout preparation, partner alignment, training, and communications. The work was cross-functional, but my role was specifically to drive the design problem from diagnosis through shipped outcomes without overstating ownership of the broader programme.

## Approach

The work did not move as a single redesign pass. It progressed through a layered set of decisions, each of which changed the interpretation of the others.

The first layer was declutter level: how much information density could be removed or reduced without weakening the card’s decision value. Early mobile-web concept testing compared a more conservative direction with a more reduced one. That established that stronger simplification was credible enough to keep pushing.

The second layer was partner-link treatment. Once the card became more focused, the team had to decide whether finance and insurance entry points should remain on-card, how prominent they should be, and what that would do to both buyer scanning and partner performance.

The third layer was gallery behaviour. Research showed that imagery mattered more than the existing design reflected. Users wanted more than one picture, clearer evidence that more pictures were available, and better visibility of multiple angles or interior views. But quantitative testing later showed that richer on-card imagery did not automatically produce better downstream behaviour.

Across those layers, the core product moves were consistent:

- simplify card hierarchy
- reduce information density
- show more offers above the fold
- preserve enough decision-critical information to support comparison
- refine which commercial elements remained on-card and where
- revisit touch-target size and placement rather than treating link presence as the only variable

Later iterations added more specificity. Finance and insurance were not treated as one generic “partner area.” Finance moved directly below price, while insurance was separated above seller information. Tags, sponsored treatment, price-assessment prominence, WLTP / range handling, and empty-value display were also refined. The important point is that the team was not simply subtracting elements. It was reprioritising the card around the decisions the list page was actually supposed to support.

As the programme expanded beyond mobile web into desktop and apps, the work became less about finding a single winning layout and more about translating the same design intent into platform-specific answers.

## Key Decisions and Tradeoffs

The first major decision was to continue with the more decluttered direction after early testing showed it outperformed the more conservative concept. That was the point where the project became strategically meaningful. Once simplification showed upside, the question was no longer whether to clean up the card. It was how to capture that upside without damaging adjacent business surfaces.

That exposed the central tradeoff of the programme: cleaner cards often improved browsing and dealer-lead signals, but they also put pressure on finance, insurance, or partner exposure. A “no links” direction kept the card more protected and more focused, but reduced visibility for partner pathways. A “with links” direction preserved Check24 and related outcomes better, but introduced other downsides and still did not fully solve finance performance.

Gallery behaviour created a second, distinct tradeoff. User need pointed toward richer image preview. Shoppers wanted stronger visual evidence before opening detail. But the data showed that more gallery behaviour on-card could slow scanning or weaken actual detail-page progression. The desktop work made this especially clear, and it also exposed an important measurement issue: reported DPVs could make gallery look healthier than it really was, while actual DPVs showed the opposite. That meant the team had to make a judgment not only about design, but about which metric interpretation deserved trust.

Those tradeoffs produced a platform-specific rollout logic rather than a single global answer:

- mobile web: No Gallery
- desktop: No Gallery
- iOS and Android: Gallery
- finance placed directly below price
- insurance separated above seller information

That final state is important because it shows the real nature of the work. The main decision was not “make the card smaller” or “use a gallery.” It was deciding which signals deserved scarce attention on each platform, which ones had to move or lose prominence, and which commercial requirements could not be allowed to dominate the card hierarchy.

## Outcome

The strongest supported outcome is that the more decluttered direction repeatedly improved key funnel signals, but the magnitude and side effects differed by platform and by the surrounding commercial treatments.

In early IT mobile-web testing, the evidence was straightforward: the Slightly Decluttered variant without links increased total dealer leads from the list page by 8%, and the Most Decluttered variant without links increased them by 12%. The same test also showed that card changes affected more than lead flow. Ad impressions rose 26% and ad clicks rose 16%, while ad conversion rate fell 4.5%, reinforcing that the list card sat inside a broader marketplace system.

In DE mobile-web partner-link testing, both decluttered variants produced very large list-page DPV gains and positive dealer-lead movement. The tradeoff was not whether declutter helped, but which secondary costs were acceptable. No-links preserved private-performance metrics better. With-links preserved Check24 performance better. Finance underperformed in both directions, which is why the team did not treat the first positive result as a final answer.

The desktop results made the gallery question much harder to ignore. No Gallery was the safer direction:

- DE No Gallery: actual dealer DPVs +6%, dealer leads stable
- IT No Gallery: actual dealer DPVs -2%, dealer leads stable

Gallery variants, by contrast, materially weakened actual dealer DPVs while leaving dealer leads stable:

- DE Gallery: actual dealer DPVs -9%, dealer leads stable
- IT Gallery: actual dealer DPVs -27%, dealer leads stable

That was a strong signal that richer on-card interaction could absorb user attention without improving real progression into deeper offer evaluation.

Later iOS validation was softer. Dealer DPVs were down in DE and IT, dealer leads showed no significant change, and finance entries and conversions fell materially. Even so, apps still moved toward the Gallery direction. The clearest conclusion is not that gallery “won,” but that the decision logic differed by platform and that the programme did not support a single universal pattern.

According to project clarification, the final designs were shipped across markets. Forecasted rollout impact was +25% dealer DPVs and +3% dealer leads. Those forecast numbers are useful as directional stakes, but they are cleaner than the retained post-rollout measurement record. The safer evidence-based claim is that the project produced enough repeated signal to justify rollout, while the exact final impact across all markets is not documented equally cleanly in the kept source set.

## Why this matters

This project is easy to misread as card cleanup. That undersells it.

The list page card was carrying multiple kinds of work at once: buyer decision support, lead generation, finance and insurance entry points, media exposure, and partner/reporting implications. Simplifying it therefore required explicit prioritisation across competing business models, not just better layout discipline.

That is why the work reads as senior/principal-level product design rather than UI refinement. The substance was in:

- diagnosing the problem as decision friction and hierarchy failure, not just visual clutter
- sequencing the work into testable decision layers rather than chasing one big redesign
- protecting the integrity of the readouts, including questioning headline metrics when reported and actual DPVs diverged
- translating one design intent into different platform answers instead of forcing consistency where the evidence did not support it
- carrying the work from early concept testing through validation, delivery, QA, and rollout

The strategic value was not only that the cards became cleaner. It was that the team found a way to simplify a commercially crowded surface without pretending every internal demand should remain equally prominent. That is a different class of design problem from “make the interface easier to use.” It is about deciding what the marketplace most needs the card to do, then defending those priorities with evidence.

## Reflection

The clearest lesson supported by the facts is that simplification on a marketplace list page is rarely a single design move and almost never a single-variant answer. Once the card sits inside lead generation, partner economics, and multiple platform contexts, every hierarchy choice has second-order effects.

What makes this work credible is not that every metric moved cleanly in one direction. It is that the team kept iterating where the evidence stayed mixed, used tradeoffs rather than aesthetics to guide the decisions, and accepted a platform-specific outcome when the data did not justify a universal one.
