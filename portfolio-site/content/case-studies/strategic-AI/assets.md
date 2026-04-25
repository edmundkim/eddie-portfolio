# Strategic AI Asset Manifest

This file is the source of truth for `content/case-studies/strategic-AI/assets/`.
It supports the live case-study page at `app/work/strategic-ai-design-leadership/page.tsx`.

## Scope and source limits

- This case study is a strategic AI design leadership story, not a shipped-product UI gallery.
- The strongest current visual evidence is the Visual AI Framework itself.
- `timeline.md` is currently empty.
- `source-analyses.md` is not present in this folder.
- The live page now uses `strategic-ai-mockup-hero.png` as the primary visual anchor.

## Recommendation at a glance

- Keep the page otherwise intentionally sparse.
- Use `strategic-ai-mockup-hero.png` as the primary visual anchor on the homepage Work card and the case-study hero.
- Do not force product UI proof where the current evidence is strategic, framework-led, and partly confidential.
- Do not force a framework image into the current page structure if it only repeats the surrounding copy.
- If one framework asset is added later, use the safest one: `Principles.png`.
- Treat concept UI, prototype flows, and framework boards that embed sensitive product examples as out of scope unless explicit public-sharing approval exists.
- If stronger visual support is needed later, prefer abstracted framework derivatives over redacted product screens.

## Currently wired on the page

- `strategic-ai-mockup-hero.png` is used in the homepage Work section via `components/homepage/content.ts`.
- `strategic-ai-mockup-hero.png` is used as the full-bleed Strategic AI case-study hero via `app/work/strategic-ai-design-leadership/page.tsx`.

## Current asset inventory

| Filename | Status | Editorial note |
| --- | --- | --- |
| `strategic-ai-mockup-hero.png` | safe, wired | Primary public visual anchor for the Strategic AI case study. Used on the homepage Work card and as the full-bleed case-study hero. |
| `Principles.png` | safe, not wired | Safest current proof that the framework existed and had specific, defensible principles, but not clearly necessary in the current page layout. |
| `Presence Scale.png` | optional later | Useful supporting artifact, but the example labels should be reviewed before publishing as-is. |
| `Visual Signals.png` | do not use as-is | Contains embedded product and concept UI examples that push beyond a safe public framework artifact. |

## Safe to use later

| Asset name | Type | Status | Source / location | Publishability | Confidentiality risk | Intended use on page | Notes / rationale |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `Core Responsible AI Communication Principles` | Framework principles board | Existing | `assets/Principles.png` | Safe to publish now | Low | Optional supporting visual inside the `Visual AI Framework` section | This is the clearest current proof asset. It shows a concrete point of view and reusable decision criteria without relying on confidential product UI, rollout claims, or outcome inflation. In the current page, though, the same ideas are already covered by the section intro, principle cards, and body copy, so wiring it now risks repetition more than clarity. |

## Optional later

| Asset name | Type | Status | Source / location | Publishability | Confidentiality risk | Intended use on page | Notes / rationale |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `AI Presence Scale mapped to RAIC levels` | Framework model / quadrant diagram | Existing | `assets/Presence Scale.png` | Hold until example labels are reviewed; likely publishable after light abstraction if needed | Medium | Optional companion visual near the framework section | Conceptually strong, but it includes example labels such as `lead qualification` and `pricing pilot` that may reveal more initiative detail than the page needs. If used later, prefer a simplified export with generic examples only. |
| `Simplified RAIC scale` | Abstracted derivative, not yet created | Future substitute | Derived from `Presence Scale.png` and framework copy | Potentially publishable | Low | Optional second framework visual | Redraw the scale with generic category labels only. Keep it conceptual and avoid showing product screens or internal initiative names. |
| `Signal guidance crop or rebuild` | Abstracted derivative, not yet created | Future substitute | Derived from the non-product sections of `Visual Signals.png` | Potentially publishable after review | Low to medium | Optional detail block under the framework section | If the page needs a second supporting artifact, extract or rebuild only the signal-role guidance, token examples, or label/icon rules. Exclude all embedded product screenshots and concept flows. |
| `Framework principle cards` | Abstracted derivative, not yet created | Future substitute | Derived from `Principles.png` and the live page copy | Potentially publishable | Low | Optional lightweight support cards | A small set of cards for visibility, signaling, control, and user agency could add visual rhythm later without pretending to show shipped product proof. |
| `Framework -> enablement -> influence diagram` | Process diagram, not yet created | Future substitute | Derived from `overview.md`, `facts.md`, and the live page narrative | Potentially publishable | Low | Optional strategic-context visual | This should explain the operating model: framework creation, concept guidance, and team enablement. Keep it abstract and evidence-led. Do not turn it into workshop theatre. |

## Do not use

| Asset name | Type | Status | Source / location | Publishability | Confidentiality risk | Intended use on page | Notes / rationale |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `Visual AI Signals` full board | Framework board with embedded product and concept UI | Existing but withheld | `assets/Visual Signals.png` | Do not publish as-is | High | None | The full board includes multiple product screenshots and concept-stage AI flows. As a combined asset, it crosses the line from safe framework proof into potentially confidential product disclosure. |
| Conversational AI concept screens or flows | Concept / prototype product UI | Referenced but not stored in this folder | Referenced in `overview.md` and `facts.md` only | Do not publish | High | None | The source material supports senior design direction on this work, not public-sharing approval. Treat it as confidential concept work unless explicit approval exists. |
| AI-assisted lead enrichment concept screens or flows | Concept / prototype product UI | Referenced but not stored in this folder | Referenced in `overview.md` and `facts.md` only | Do not publish | High | None | Same constraint: concept-stage work with confidentiality and ownership-boundary risk. Do not use it to make the case study feel more complete. |
| Internal AI enablement / Builders decks | Internal presentation material | Referenced but not stored in this folder | Referenced in `facts.md` only | Withhold for now | Medium to high | None | These decks help support the enablement story, but authorship is not fully proven in the source notes and they are not strong public-facing proof assets. They are better treated as background evidence than portfolio visuals. |
| Redacted product UI or stylised pseudo-mockups created only to add polish | Fabricated or over-processed derivative | Not recommended | None | Do not create by default | Medium to high | None | Avoid invented proof, decorative framing of confidential work, or partially redacted UI that still implies more publishable product detail than is actually safe. |

## What the current visual set supports

- That a real, structured Visual AI Framework existed.
- That the framework had specific principles, not just generic AI rhetoric.
- That the work operated at the level of standards, communication models, and decision criteria.

## What the current visual set does not support

- Shipped AI feature outcomes.
- Adoption, rollout, or design-system integration across teams.
- Direct evidence of internal enablement impact.
- Public proof of the confidential concept work itself.

## Known gaps

- Beyond the hero image, the page is intentionally text-led for now.
- That is strategically acceptable for this case because the evidence is strongest at the framework and leadership layer.
- If the page later needs additional framework proof, `Principles.png` is still the safest first choice.
- If the page later needs more visual support, add only low-risk abstractions that strengthen the framework story.
- Do not try to close the gap with confidential screens, prototype flows, or weak decorative assets.
