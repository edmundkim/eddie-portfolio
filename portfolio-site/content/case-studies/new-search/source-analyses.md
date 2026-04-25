# Source Analyses

## Purpose

This file is the working analysis layer for the **New Search** portfolio case study.

It is structured so each source can be analysed consistently and traced back to a specific source record.

Use this file to:

- capture what each source directly supports
- separate evidence from interpretation
- preserve uncertainty and limitations
- map sources to possible future case study claims
- keep **App** and **Web** evidence distinct

## How to use this file

- One section per source/artifact
- Keep the source ID and source name exactly as recorded
- Paste source analysis into the relevant section only
- Do not upgrade evidence strength without explicit support
- If a source is ambiguous, record that ambiguity rather than resolving it prematurely

## Analysis template for each source

Use this structure inside each source section.

### Source metadata

- **Source ID**:
- **Source Name**:
- **Source Type**:
- **Origin**:
- **Platform / Surface**:
- **Approx Date**:

### What this source covers

-

### What this source directly supports

-

### Key facts extracted

-
-
-

### Potential claims this could support

-
-

### What this source does **not** prove

-
-

### Evidence strength

- **Current rating**:
- **Why**:

### Risks / limitations

-
-

### Follow-up needed

-
-

### Notes for case study use

-

## Source analyses

### NS-S02. 1.UXR_research_brief_05.2025.docx

#### Source metadata

- **Source ID**: NS-S02
- **Source Name**: 1.UXR_research_brief_05.2025.docx
- **Source Type**: Research artifact; specifically a UXR research brief / intake template
- **Origin**: Custom project file; Word document built on a “Research Topic Template”
- **Platform / Surface**: Cross-stream; Multi-platform (Desktop, Mweb, iOS, Android)
- **Approx Date**: Jan 2024, uncertain. The brief targets insights by Feb 15, 2024; in-file comments and last-modified metadata cluster in Jan 2024; the filename says 05.2025; the original DOCX creation property dates to 2022 and likely reflects template lineage rather than project start.

#### What this source covers

- An early cross-stream research artifact, positioned upstream of later experiment and rollout evidence.
- A scoped research brief titled **“Filter usage and clean-up”** focused on search-mask/filter usage, findability, structure, missing filters, and clean-up opportunities.
- Problem framing across both app and web surfaces: the brief cites four different filter experiences across web, mWeb, Android, and iOS, and asks how wins or learnings can transfer from one platform to another.
- A plan to use UXR input to prioritise Q1/Q2 experiments, primarily through review of existing user recordings.
- Background rationale that cites prior evidence rather than generating it: a web/app List > DPV conversion gap, learnings from an “old vs new search mask (no toggle)” test, and an appendix exhibit titled **“top problem areas.”**
- Operational setup: stakeholders, target users, countries, timing target, and links to related planning boards.

#### What this source directly supports

- A structured cross-stream UXR effort was being scoped around filter/search-mask problems. This is a formal planning artifact, not just an informal note.
- The intended output was experiment prioritisation for Q1 and Q2, not proof of a shipped solution.
- Gregory Hamill (**PO for Search and Select / SAS**) and Eddie Kim (**Design**) are explicitly named as stakeholders.
- The planned method was **review of recordings where users interact with the search mask**. The file does not describe fresh fieldwork, a survey, or experiment analysis.
- The brief explicitly spans **desktop, mWeb, iOS, and Android**, with **used-car buyers** as the target group and **DE / AT / NL** as target markets.
- The file directly records the background assumptions and evidence references the team was using, including a cited conversion gap and old-vs-new search-mask learnings, but it does **not** independently verify those claims.
- The document package contains Jan 2024 comment threads, showing collaborative drafting around scope and research questions.

#### Key facts extracted

- Working title: **“Filter usage and clean-up.”**
- Project goal: create **a list of ideas to test around improving filter accessibility for Q1 and Q2**.
- Decision to inform: choose a series of experiments; the brief states that ideas with stronger UXR confidence are more likely to be tested.
- Hypothesis stated in the brief: improving filter accessibility should help buyers find matching cars more easily and increase **detailed page views** and **users with a dealer enquiry**.
- The background section cites a **List > DPV conversion difference of 45% for web vs 83% for apps**.
- The phrase **“old vs new search mask (no toggle) test”** is hyperlinked to another artifact, indicating that at least one background claim is meant to trace to a separate source.
- The brief says the old search mask performed better in that prior test because users engaged more with top filters and more often reached an **“optimal” result range of 20-600 offers**.
- Research questions explicitly include: variant-filter use, exclusion filters, filter findability, missing filters, missing capabilities, editing filters from the list page, price-range granularity, clarity of applied filters, search within the search mask, filter recommendations, visual cues such as icons/make logos, and filter hierarchy/grouping, especially **“Basisdaten & Standort”** on web/mWeb.
- Target setup: **used-car buyers**; **desktop, mWeb, iOS, Android**; **DE, AT or NL**; **priority insights targeted for Feb 15, 2024**, with additional ideas expected later into Q2.
- Linked planning artifacts are named as **“Q1 SAS ideas to test,” “Search funnel Q1 planning board,”** and **“Search Funnel product strategy 2024.”**
- The appendix contains an exhibit titled **“top problem areas,”** but the embedded image is not reliably legible enough for precise category/percentage extraction from this file alone.

#### Potential claims this could support

- By early 2024, filter/search-mask work was being framed as a **cross-stream problem** spanning both app and web surfaces, not as a single-platform clean-up task.
- UXR was being used upstream to **de-risk and prioritise experiment ideas** before implementation and benchmarking.
- The team was explicitly trying to **transfer learnings across platforms** and tie UX work to downstream funnel/business hypotheses such as DPVs and dealer enquiries.
- This artifact supports a case-study claim about **discovery and experiment framing**, but only for the narrower topic of filter/search-mask usability and clean-up, not for New Search as a whole.

#### What this source does **not** prove

- It does **not** prove that the research was completed, what final findings emerged, or what recommendations were ultimately made.
- It does **not** prove that any Q1/Q2 experiment actually ran, won, or shipped because of this brief.
- It does **not** prove that the cited background numbers or interpretations are correct. Those require primary analytics or experiment sources.
- It does **not** prove business impact. DPV and dealer-enquiry changes are framed here as hypotheses or cited prior inputs, not as results generated by this document.
- It does **not** prove the portfolio owner’s role, authorship, or decision authority beyond whatever relationship they may have to the named stakeholders.
- It does **not** explicitly use the label **“New Search”** in the visible content, so the connection to a New Search case study is contextual rather than explicit.

#### Evidence strength

- **Current rating**: Moderate overall; strong for scope and intent, weak for findings and impact
- **Why**: This is a primary internal document with concrete scope, stakeholders, method, timing, and decision intent. However, it is a template-based brief/draft, includes collaboration comments, cites external evidence rather than embedding it, and contains no completed research output, launch proof, or measured outcomes.

#### Risks / limitations

- Date ambiguity is material: the filename says **05.2025**, while the internal timing, comments, and last-modified metadata point to **Jan 2024**; the original creation property predates the project and likely reflects the template.
- This is a **planning/intake artifact**, not a UXR findings report or experiment readout.
- Several high-value background claims depend on external artifacts not bundled here: Search Vision Project material, competitor benchmarking, the old-vs-new no-toggle test, and the source behind the appendix exhibit.
- The appendix image and small embedded diagram are image-based and only partially legible in extraction, so they should not be used for precise metric citation from this file alone.
- Comment threads from Jan 2024 show the brief was collaboratively refined. At least some scope/questions were still being adjusted during drafting.
- Relative to the broader corpus, this source is **upstream context**. Later experiment decks, analytics exports, and rollout summaries are still needed for proof of results or shipment.

#### Follow-up needed

- Find the actual UXR output or synthesis that followed this brief and identify what was learned.
- Pair the cited **45% vs 83% List > DPV** comparison with its primary analytics source before reusing the metric.
- Pair the hyperlinked **“old vs new search mask (no toggle)”** reference with the actual experiment readout before reusing its interpretation.
- Verify which Q1/Q2 experiment ideas from this brief were actually tested, on which platforms, and with what outcomes.
- Confirm timeline placement in the portfolio narrative, given the filename/date mismatch.
- If the appendix matters to the case study, locate the original **“top problem areas”** source rather than relying on the embedded image in this DOCX.

#### Notes for case study use

- Good source for showing **early discovery framing**, **cross-stream scope**, and the decision logic for using UXR to shape experiments.
- Good source for showing that **app-vs-web distinctions were already explicit**: four separate filter experiences are named, and web/mWeb-specific structure issues are called out.
- Use this to support **planning/discovery claims**, not impact claims.
- Do **not** use named stakeholders as proof of your individual contribution.
- Best used in combination with later experiment readouts, research outputs, and rollout evidence: this brief can establish the **question framing**, while other sources must carry **findings, decisions, shipment, and measurable impact**.

### NS-S03. 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx

#### Source metadata

- **Source ID**: NS-S03
- **Source Name**: 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx
- **Source Type**: Experiment readout deck (App stream; PowerPoint / Experiment Canvas format)
- **Origin**: Custom project file; indexed as an iOS experiment readout with high usefulness / strong evidence relative to the corpus
- **Platform / Surface**: iOS app; search mask / filter flow and downstream List Page -> Detail Page / enquiry funnel
- **Approx Date**: 28 Aug 2024 on-slide; experiment dates shown as 25 Jun 2024-12 Aug 2024; file metadata shows a later modification date of 22 Oct 2024

#### What this source covers

- Context for the iOS benchmark after an earlier December old-vs-new test underperformed. The deck frames the new work as a cleaner baseline on a new codebase informed by prior learnings.
- Hypothesis and experiment design for an iOS-only A/B test of old search vs two new no-toggle variants for **new users only** across **DE, AT, IT, NL, BE, FR, SP, GB**.
- Variant definitions and visual examples of the old search, the new search with a **Delete** action, and the new search with a **Done** action.
- Reported outcome summary, segment learnings, and next steps, including a PowerPoint table plus embedded analytics screenshots referencing both PA analysis and Optimizely.
- This appears to be the main primary readout for the 2024 iOS app benchmark, sitting between the earlier failed iOS benchmark (`NS-S07`) and later iOS rollout/launch summaries (`NS-S10`, `NS-S12`).

#### What this source directly supports

- The team documented an iOS-only benchmark of the old no-toggle search mask against two new no-toggle variants for **new users only**.
- The deck explicitly presents **Variation 2 ("Done")** as the winner and reports uplift vs control in the visible table: **Users with enquiry from List page** = **+0.8% (Var 1)** and **+4.2% (Var 2)**; **Total enquiries from List Page** = **No change (Var 1)** and **+3.7% (Var 2)**.
- The deck also explicitly states a rounded PA-analysis headline of **+5% users with an enquiry from List Page** and **+6% total enquiries from List Page**. This is directionally aligned with the table but not numerically identical.
- The source directly records that rollout was intended even if headline KPIs were flat, because the new codebase would reduce complexity and enable faster future experimentation. That is a stated launch rationale, not proof of shipment.
- The source directly records mixed learning beyond the winner call: privates outperform dealers on several KPIs, Germany is described as a strong market, and the team lists filter-usage and behaviour shifts for DE.

#### Key facts extracted

- Slide 1 defines the benchmark as **iOS only**, **new users only**, markets **DE, AT, IT, NL, BE, FR, SP, GB**, with **100% traffic allocation** and a **34/33/33** control / Var 1 / Var 2 split.
- The control is the **old search mask (no toggle)**. **Variation 1** is the new search with a **Delete** action. **Variation 2** is the new search with a **Done** action.
- The deck says the new search baseline was created on a **new codebase** based on **BSG Design Principles**, and that **3 rounds of user testing** were run before benchmarking. The latest round is described as **May 28, n=5**.
- Slide 1 lists the original **primary KPIs** as **dealer Detail Page View** metrics from List Page, while slide 3 headlines **overall enquiry** metrics instead. This is a meaningful KPI-framing inconsistency inside the same file.
- Slide 3’s visible summary table reports: **Users with enquiry from List page** = **+0.8% (Var 1)** / **+4.2% (Var 2)**; **Total enquiries from List Page** = **No change (Var 1)** / **+3.7% (Var 2)**; **Users with a Detail Page view from List Page** = **+0.3% (Var 1)** / **+0.4% (Var 2)**; **Total Detail Page views from List Page** = **No change** for both variants.
- Slide 3 states **no change** in overall DPV KPIs, while the learnings text says privates outperformed dealers. Examples given for Var 2 vs baseline include **+7% users with a Private enquiry from List Page vs +4% for dealer**, **+5% users with a Private DPV vs -0.1% for dealer**, and **total private DPVs +8-9%** while **total dealer DPVs shrunk by 4%**.
- Slide 3 says **Germany** was the second-best-performing market for Var 2 with **+12% users with enquiry from List Page**, broken down as **+9% dealer** and **+19% private**.
- Slide 3 lists DE behaviour shifts: **Body Type -25%**, **Fuel Type -17%**, **First Registration -12%**, **Location +20%**, **Equipment +26%**, **Price Label +120%**. It also says users in the variants executed more multi-make/model searches and spent the most time on Equipment, Zip/City, Model, and Price.
- The deck says the team used **both PA analysis and Optimizely**. An embedded Optimizely screenshot appears to show Var 2 dealer-lead conversion at roughly **4.41% vs 4.24% baseline (+3.85%)** but only **52% statistical significance** in Optimizely, matching the slide text that PA reached significance while Optimizely did not.
- Slide 3 next steps are explicit: **full rollout of Var 2 to all AutoScout24 markets by CW36**, **clean-up and white-label rollout by CW37**, deeper **PA / UXR** analysis on why privates outperformed dealers, and reuse of learnings for **Android**.
- The deck references but does not embed underlying artefacts: an **AB test ticket (`ABTEST-491`)**, a **PA analysis ticket (`PAX-349`)**, an implementation ticket link, a Figma design ticket, and three Condens UXR links. Slide 4 contains only a linked filename, **`v3-promo-iteration-5.mp4`**, not an embedded video.

#### Potential claims this could support

- **Directly supportable from this source alone**: by late Aug 2024, the iOS team had a benchmark readout that selected the **“Done”** variant as the preferred new-search baseline for new users.
- **Supportable with corroboration**: the revised iOS baseline search produced a positive top-line enquiry signal vs the old search, even though overall DPV was flat and dealer/private effects were uneven.
- **Supportable with corroboration**: this was not only a UX optimisation effort but also a platform-reset effort, where codebase simplification and future experimentation speed were part of the rollout rationale.

#### What this source does **not** prove

- It does **not** prove that rollout actually happened. Rollout is presented as a **next step**, not as completed shipment evidence.
- It does **not** prove long-term business impact, all-market impact, or impact on existing users. The benchmark is limited to **new users** in the listed markets.
- It does **not** prove the portfolio owner’s role or contribution. The slides show a presenter name, but not contribution attribution.
- It does **not** independently prove the exact analytics calculations, significance model, or final source-of-truth KPI definitions. The deck is a summary layer over PA and Optimizely, not raw analysis.
- It does **not** isolate which change caused the result. Layout/order/accessibility changes, interaction labels, and baseline-codebase changes are bundled together in the story.
- It does **not** prove Android or Web performance. This is **App / iOS only**.
- It does **not** itself contain the underlying UXR evidence. It only links out to research artefacts.

#### Evidence strength

- **Current rating**: Strong for experiment setup and reported readout; moderate for exact numerical reuse and causal interpretation
- **Why**: This is a primary project artefact with concrete test design, variant definitions, visible result tables, and explicit next steps. It is still a summary deck rather than raw analytics, and it contains internal inconsistencies that need reconciliation before precise portfolio claims are made.

#### Risks / limitations

- Slide 1 says **Duration: 21 days**, while slide 3 shows **25.06.2024-12.08.2024** and **42 days**. That discrepancy should be resolved before quoting runtime.
- Slide 1 defines **dealer DPV** as the primary KPI set, while slide 3’s winner call emphasises **overall enquiry**. That KPI shift matters.
- The slide 3 headline (**+5% / +6%**) and the visible table (**+4.2% / +3.7%**) do not match exactly. The deck itself attributes this partly to **PA vs Optimizely** framing.
- The slide includes a **“Total enquiries capped 10”** note near the analytics area, so exact metric definitions may be more specific than the simplified table labels suggest.
- Segment details such as dealer/private splits, Germany breakout, and filter-usage changes are asserted in prose rather than shown in full underlying tables.
- Several supporting visuals are small embedded screenshots. They are useful context, but not the cleanest source for exact metric citation.
- UI copy is described inconsistently across the deck (**Delete / Clear** and **Done / Finish**), so exact microcopy should be confirmed in the design source if that matters to the case study.
- Slide 2 screenshots and the linked video on slide 4 are useful for variant illustration, but they are **not** outcome evidence.
- The file metadata shows a later modification date (**22 Oct 2024**) than the on-slide date (**28 Aug 2024**), so the deck may have been edited after the original readout.
- This source overlaps with later iOS summaries in the corpus (`NS-S10`, `NS-S12`). Numbers and rollout statements should be reconciled across those sources before reuse.

#### Follow-up needed

- Pull the underlying analytics sources behind **`ABTEST-491`** and **`PAX-349`** to reconcile exact KPI definitions, significance thresholds, capped vs uncapped enquiry metrics, and the true final test duration.
- Use later iOS sources such as `NS-S10` and `NS-S12` to confirm whether the planned rollout by **CW36/CW37** actually happened and how the impact was later summarised.
- Retrieve the linked Condens UXR artefacts and Figma ticket if the case study needs to make stronger claims about the design rationale or why the new layout worked.
- If you want to quote dealer/private or country-level outcomes, find the underlying PA tables rather than relying only on slide prose.
- Find separate evidence for your own role. This deck alone is not suitable for contribution attribution.

#### Notes for case study use

- Best used as a **primary evidence source for the 2024 iOS benchmark setup, variant definitions, winner call, and reported next steps**.
- Prefer the visible table numbers (**+4.2% users with enquiry**, **+3.7% total enquiries** for Var 2) when quoting results, or explicitly explain that the **+5% / +6%** headline is rounded PA-analysis framing.
- Useful for showing that the project balanced **business KPI evidence** with **platform simplification / future experimentation** goals. That is a stronger and more nuanced story than a pure KPI win.
- Useful for showing that the outcome was **not uniformly positive**: overall enquiry improved, overall DPV stayed flat, and private listings outperformed dealer listings.
- Pair this source with the earlier failed iOS benchmark (`NS-S07`) for iteration context and with later rollout sources (`NS-S10`, `NS-S12`) for shipment confirmation.
- Keep stream boundaries explicit in the case study. This is **App / iOS evidence only**, not Web or Android proof.

### NS-S04. 3.presentation_search_funnel_team_2025_strategy.pptx

#### Source metadata

- **Source ID**: NS-S04
- **Source Name**: 3.presentation_search_funnel_team_2025_strategy.pptx
- **Source Type**: Deck; specifically an internal strategy / roadmap presentation rather than an experiment readout
- **Origin**: Custom project file; Search Funnel team strategy deck
- **Platform / Surface**: Cross-stream, multi-platform. The deck explicitly references web, mWeb, desktop, iOS, and generic “apps”. Android is not explicitly named in extracted text.
- **Approx Date**: 2025; slides include dated updates `Jan 15`, `Mar 21`, `Jun 2`, and `Jul 31` 2025, and file metadata shows last modification on `2025-10-10`

#### What this source covers

- Team-level Search Funnel 2025 strategy: objective, buyer-journey focus areas, search/decide vision, and initiative prioritisation.
- New Search context as one initiative: `New baseline search` appears under `Efficient search execution`, alongside `Filter discoverability & usability` and `Easy entry / re-entry to Search`.
- Search roadmap material, including one visible roadmap slide and several hidden working-update slides with later roadmap revisions and a separate `New baseline search web` item.
- Problem framing, cited research/analytics inputs, and estimated upside for Search initiatives. The deck mixes direct citations, secondary summaries, and modelled impact.
- Broader Search Funnel scope beyond New Search, including declutter/listing comparison, new filters/taxonomy, AutoMatch, Confidence on Detail Page, Interaction Quality, and an explicit `No Focus in 2025` section.

#### What this source directly supports

- In 2025, the Search Funnel team was targeting `+10%` dealer leads and treating Search plus Decide as its main investment areas.
- `New baseline search` was a named, formal initiative inside `Efficient search execution`. It was not just an informal concept.
- The deck explicitly frames the search problem as filter discoverability / usability / search-complexity friction, using cited DE Web, mWeb, and cross-platform UXR inputs.
- The deck explicitly shows the team’s expected-value model for New Search-related work: `New Baseline Search can add +2.5% total leads`; `Filter Discoverability & Usability could add +1.2% total leads from List Page`.
- The deck explicitly cites prior evidence used to justify prioritisation, including `iOS new search benchmarking showed +6% leads from List Page (in core markets)`.
- Hidden slides `8-12` contain later roadmap updates and `New baseline search web`, which directly supports internal planning context, but these hidden slides should be treated more cautiously than the visible narrative slides.

#### Key facts extracted

- Slide 2 states the 2025 objective as growing dealer leads by `10%` and defines the team contribution as improving buyer enquiry conversion measured by engaged users (`+6 Detail Page Views in the last 7 days`) with an enquiry.
- Slides 2 and 6 place `New baseline search` under the Search focus area `Efficient search execution`, alongside `Filter discoverability & usability` and `Easy entry / re-entry to Search`.
- Slide 5 states the intended end-state for Search by end of 2025: buyers should know when they are on a List Page, experience reduced cognitive load, and easily find / apply / edit relevant filters.
- Slide 14 rates `Efficient search execution` as **High** confidence and cites concrete pain signals: `12%` of negative DE Web feedback about search complexity / not finding existing filters; only `10%` of users reach the bottom of detailed search on mWeb DE; only `15%` of List Page users hit the `filters` button on mWeb DE.
- Slide 14 also cites behaviour / business-case data: most web searches involve `3-7 filters`; dealer enquiry conversion from List Page is `2-3x` higher for searches with `7 filters` vs `4 filters`; users with `6-200` results are `30%+` more likely to send a lead from List Page.
- Slide 14 models `New Baseline Search` at `+2.5% total leads` and cites `iOS new search benchmarking` at `+6% leads from List Page`; it also states that `40%` of dealer enquiries come from List Page and `15%` from Favourites.
- Slides `8-12` are hidden. They include later roadmap snapshots (`updated Mar21`, `updated Jun 2`, `updated Jul 31`), an `Upper funnel` roadmap, and a separate `New baseline search web` item, indicating working-plan evolution inside the same file.
- Slide 24 contains screenshot-based declutter experiment material (`Declutter test 2 (DE only) results in Optimizely and MicroStategy`) with labels such as `Bug`, `BIG bounce (NOT a bug)`, and `No bounce`, but exact numeric results are not safely recoverable from the extracted slide text.

#### Potential claims this could support

- New Search was a formal 2025 strategic priority within Search Funnel, positioned as foundational “fix the basics” work before more delight-oriented search improvements.
- The team prioritised New Search using a mixed evidence base: web/mWeb pain signals, cross-platform UXR synthesis, filter-usage analytics, and prior iOS benchmark learnings.
- The deck can support a claim that the team had a modelled business case for New Search (`+2.5% total leads` estimate), but only as forecast / prioritisation logic, not as observed outcome.
- With corroboration, the hidden roadmap material could support a claim that web-specific New Search planning existed in 2025 (`New baseline search web`), but this should not be used strongly on its own.

#### What this source does **not** prove

- It does **not** prove that `New baseline search` shipped on any specific platform, market, or date.
- It does **not** prove that the modelled uplifts (`+2.5%`, `+1.2%`) were achieved. Those are forecast values in a strategy deck.
- It does **not** independently prove the cited `+6%` iOS benchmark result. That requires the underlying experiment source(s).
- It does **not** prove exact roadmap delivery timing unless corroborated elsewhere. Some timing detail is only visible through roadmap bar placement, and several relevant roadmap slides are hidden.
- It does **not** prove your role, scope, authorship, decision ownership, or level of contribution.
- It does **not** prove that evidence from DE Web, mWeb, iOS, desktop, and generic “apps” transferred equally across all surfaces.

#### Evidence strength

- **Current rating**: Moderate overall; stronger for strategy / prioritisation context than for shipped impact or personal-role proof
- **Why**: The deck is rich in direct initiative naming, team objectives, roadmap presence, cited research inputs, and expected upside. But it is still a strategy artefact: it mixes planning, synthesis, estimates, hidden working slides, and non-New-Search material, and several important claims depend on secondary references to other sources.

#### Risks / limitations

- This is a team strategy deck, not a project-specific primary source. It blends intent, synthesis, and forecast.
- The deck mixes committed work, exploratory concepts, and explicitly out-of-scope items (`No Focus in 2025`), so not every named item should be treated as committed delivery.
- The most detailed roadmap evolution for New Search sits partly on hidden slides (`8-12`), which suggests working material rather than final presentation narrative.
- Platform evidence is blended: the problem case leans on DE Web / mWeb signals, while the business case cites iOS benchmark evidence and generic mobile / desktop splits. That supports cross-stream synthesis, not platform-specific proof.
- File metadata shows last modification on `2025-10-10`, but the deck contains dated snapshots from earlier in 2025. Exact circulation / decision date is uncertain.
- Some slides are image-heavy or screenshot-based. Exact numerical detail is not always machine-readable from the extracted text.
- The deck overlaps with stronger corpus items for factual reuse: iOS benchmark readouts, later web planning, and rollout / launch updates are better sources for outcome claims.

#### Follow-up needed

- Pair any reuse of the `+6% iOS` statement with the underlying iOS benchmark source before quoting it in a portfolio case study.
- Pair any statement about web rollout, web impact, or platform-specific delivery with the later web planning / rollout sources in the corpus.
- If you want to use roadmap timing, corroborate with delivery artefacts such as benchmark readouts, launch announcements, release notes, or tickets.
- Use a release / experiment / rollout source to prove shipped work. Use this deck mainly to prove prioritisation logic, initiative framing, and expected upside.
- Do not use deck authorship or file metadata as evidence of your role without separate corroboration.

#### Notes for case study use

- Best use: establish why New Search mattered at portfolio / team level in 2025 and show that it was a named priority inside a broader Search Funnel strategy.
- Good for principal-level framing: it shows how the initiative was positioned among other Search and Decide bets, and how user-problem evidence was translated into roadmap and expected-value language.
- Use it to separate **strategy hypothesis** from **observed impact**. The deck is strong on rationale and forecast, weak on proving shipped results.
- Helpful for showing App/Web linkage, but be precise: the deck combines evidence from different surfaces rather than proving equivalent performance across them.
- Do not use it alone to claim delivery, business outcome, or personal ownership.

### NS-S05. 4.presentation_search_funnel_team_q4_2025_initiatives.pptx - mobile apps scope

#### Source metadata

- **Source ID**: NS-S05
- **Source Name**: 4.presentation_search_funnel_team_q4_2025_initiatives.pptx - mobile apps scope
- **Source Type**: Deck; app planning / initiative status
- **Origin**: Custom project file; this is the mobile-apps slice of a short cross-stream Search Funnel initiative deck
- **Platform / Surface**: App stream; Android, iOS
- **Approx Date**: Likely **7 Oct 2024** for the content. The cover slide says `Oct 7th`, internal revision logs cluster on `2024-10-07`, and the file package also shows a later `05 Apr 2026` last-modified state, so the filename’s `q4_2025` label is not reliable as the authoritative date.

#### What this source covers

- The cover slide plus the **mobile-apps scope** slide from a **3-slide internal Search Funnel initiative deck**.
- Planned app scope, sequencing, dependencies, and target KPI for **“New baseline search.”**
- This is primarily **planning / intent evidence**. It is not an experiment result deck, launch confirmation, or detailed research report.

#### What this source directly supports

- App work was being framed under **“New baseline search”** and tied to the supporting KR: **“Increase dealer enquiry conversion from List Page by 5% via making better the offer selection experience.”**
- The deck documents an **app plan** to launch **Android benchmarking in October** across **DE, IT, NL, BE, AT** for **new and existing users**, with rollout to **all AS24 markets and white labels by end of 2024** only **if results were successful**.
- The deck documents an **app scope dependency** that **iOS** still needed **“the new modelvariant flow that Android currently has.”**
- The app slide includes an illustrative **static Android screenshot**.

#### Key facts extracted

- The artifact is extremely short: **3 slides total**, so it is **summary-level** rather than a deep spec, experiment readout, or delivery log.
- The visible date evidence conflicts: cover slide `Oct 7th`, footer placeholders `05.04.26`, filename `q4_2025`. Internal revision metadata most strongly supports **7 Oct 2024** as the content date.
- The app slide includes a static visual labelled **`New modelvariant flow for Android`**. The image appears to show make/model and model-variant selection states, but not clearly enough to reconstruct the interaction in detail.
- The only numeric figure in the deck is a **target metric**: **+5% dealer enquiry conversion from List Page**. There are **no experiment results, launch metrics, or recommendation/result tables** in this file.

#### Potential claims this could support

- **Inference, not direct proof**: by early Oct 2024, the **app stream appears more execution-ready than the web stream**, because Android benchmark parameters are already specified while web development is still gated by UXR.
- **Inference, not direct proof**: the team was pursuing **cross-platform convergence in phases**, with iOS explicitly expected to follow an Android modelvariant flow.

#### What this source does **not** prove

- It does **not** prove that the planned **Android benchmark actually ran in October**, that results were positive, or that rollout actually reached **all AS24 markets and white labels** by end of 2024.
- It does **not** prove **shipped UI state**, **business impact**, or **experiment outcomes**. The deck contains **intent/status statements**, not outcome data.
- It does **not** prove the **case-study author’s role, ownership, or decision authority**.

#### Evidence strength

- **Current rating**: Moderate for planning/scope/timing evidence; weak for impact or personal-role evidence
- **Why**: This is a primary internal artifact with concrete scope, markets, sequencing, and KPI framing, but it is brief, forward-looking, partly date-ambiguous, and unsupported by raw analytics, detailed UXR evidence, or release confirmation.

#### Risks / limitations

- This same underlying file is also represented separately as **NS-S06** for the web slice. It should **not** be counted as an independent corroborating source.
- Date handling is non-trivial: **filename, cover slide, footer date, and last-modified state do not agree**.
- Speaker notes are **template residue / unrelated filler**, so they should not be used as evidence.
- The Android visual is illustrative only. It helps show scope, but does not prove whether the design was **prototype, production, validated, or shipped**.

#### Follow-up needed

- Pair **app** planning claims with **NS-S03 / NS-S10 / NS-S12** for iOS and **NS-S09 / NS-S11 / NS-S13 / NS-S16** for Android.
- Find actual Android benchmark results and rollout confirmation if you want to turn this from planning evidence into delivery evidence.
- Find **role-specific artifacts** if this source is meant to support authorship or leadership claims.

#### Notes for case study use

- Strongest use: evidence of **app-planning scope, sequencing, dependencies, and KPI linkage** at a specific planning moment.
- Safe wording: **planned**, **targeted**, **conditional on successful results**, **intended to benchmark**. Unsafe standalone wording: **launched**, **improved conversion**, or **I led X**.
- Cite this as **NS-S05** for app-planning points, while noting that it comes from the same underlying PPTX as **NS-S06**.

### NS-S06. 4.presentation_search_funnel_team_q4_2025_initiatives.pptx - web scope

#### Source metadata

- **Source ID**: NS-S06
- **Source Name**: 4.presentation_search_funnel_team_q4_2025_initiatives.pptx - web scope
- **Source Type**: Deck; web planning / initiative status
- **Origin**: Custom project file; this is the web slice of a short cross-stream Search Funnel initiative deck
- **Platform / Surface**: Web stream; Desktop, Mweb
- **Approx Date**: Likely **7 Oct 2024** for the content. The cover slide says `Oct 7th`, internal revision logs cluster on `2024-10-07`, and an embedded web screen recording is dated `2024-09-27`. The filename’s `q4_2025` label is not reliable as the authoritative date.

#### What this source covers

- The cover slide plus the **web scope** slide from a **3-slide internal Search Funnel initiative deck**.
- Planned web scope, gating, sequencing, and target KPI for **“New baseline search.”**
- This is primarily **planning / intent evidence**. It is not an experiment result deck, launch confirmation, or detailed research report.

#### What this source directly supports

- Web work was being framed under **“New baseline search”** and tied to the supporting KR: **“Increase dealer enquiry conversion from List Page by 5% via making better the offer selection experience.”**
- The deck documents a **web plan/status** that desktop work required **UXR validation before development**.
- The deck states that the **first desktop designs did not pass UXR**.
- The deck states that **mobile web designs had already been validated**.
- The deck states that this first web phase excluded **Make/Model/Variant**.
- The deck states that development was targeted for **November** pending UXR, and that **mWeb + desktop benchmarking** was targeted for **January**.
- The web slide includes an embedded **web UI screen recording**.

#### Key facts extracted

- The artifact is extremely short: **3 slides total**, so it is **summary-level** rather than a deep spec, experiment readout, or delivery log.
- The visible date evidence conflicts: cover slide `Oct 7th`, footer placeholders `05.04.26`, filename `q4_2025`. Internal revision metadata most strongly supports **7 Oct 2024** as the content date.
- The web slide embeds an approximately **19-second** screen recording named **`Screen Recording 2024-09-27 at 11.40.01`**, which places at least part of the visual material in **late Sep 2024**.
- The only numeric figure in the deck is a **target metric**: **+5% dealer enquiry conversion from List Page**. There are **no experiment results, launch metrics, or recommendation/result tables** in this file.

#### Potential claims this could support

- **Inference, not direct proof**: by early Oct 2024, the **web stream appears less execution-ready than the app stream**, because desktop work was still gated by UXR while Android benchmark parameters were already specified.
- **Inference, not direct proof**: the team was pursuing **cross-platform convergence in phases**, with web deliberately starting **without Make/Model/Variant**.

#### What this source does **not** prove

- It does **not** prove **why** the first desktop designs failed UXR, what evidence supported mobile-web validation, or what design changes followed.
- It does **not** prove **shipped UI state**, **business impact**, or **experiment outcomes**. The deck contains **intent/status statements**, not outcome data.
- It does **not** prove the **case-study author’s role, ownership, or decision authority**.

#### Evidence strength

- **Current rating**: Moderate for planning/scope/timing evidence; weak for impact or personal-role evidence
- **Why**: This is a primary internal artifact with concrete web scope, gating, sequencing, and KPI framing, but it is brief, forward-looking, partly date-ambiguous, and unsupported by raw analytics, detailed UXR evidence, or release confirmation.

#### Risks / limitations

- This same underlying file is also represented separately as **NS-S05** for the app slice. It should **not** be counted as an independent corroborating source.
- Date handling is non-trivial: **filename, cover slide, footer date, and last-modified state do not agree**.
- Speaker notes are **template residue / unrelated filler**, so they should not be used as evidence.
- The web video shows UI motion but not whether the design was **prototype, production, validated, or shipped**.

#### Follow-up needed

- Pair **web** planning claims with **NS-S15 / NS-S17 / NS-S18** and any missing detailed benchmark readout promised in those updates.
- Find the underlying **UXR source(s)** for the desktop failure and mobile-web validation before using those points prominently.
- Find **role-specific artifacts** if this source is meant to support authorship or leadership claims.

#### Notes for case study use

- Strongest use: evidence of **web-planning scope, gating, sequencing, and KPI linkage** at a specific planning moment.
- Safe wording: **planned**, **gated by UXR**, **excluded from first phase**, **intended to benchmark**. Unsafe standalone wording: **launched**, **validated by research**, or **I led X**.
- Cite this as **NS-S06** for web-planning points, while noting that it comes from the same underlying PPTX as **NS-S05**.

### NS-S07. 5.experiment_v1seach_vs_v2search_notoggle_29.12.2023.pdf

#### Source metadata

- **Source ID**: NS-S07
- **Source Name**: 5.experiment_v1seach_vs_v2search_notoggle_29.12.2023.pdf
- **Source Type**: Experiment readout
- **Origin**: Custom project file
- **Platform / Surface**: App / iOS only
- **Approx Date**: Dec 2023 (test ran 05.12.2023-25.12.2023; main pages last updated 29.12.2023)

#### What this source covers

- A live iOS A/B test comparing the **old search mask** vs the **new search mask** with the toggle removed, limited to **new users only**, with a **50/50 split** across **all countries** for **21 days**.
- Experiment framing: context, hypothesis, KPI definition, control/variant setup, target audience, and linked implementation / AB test / design references.
- UI evidence: side-by-side screenshots of the control and variant. The variant is described as the **new search mask, with make/model as first filter**.
- Result summary: reported metric deltas, significance notes, interpretation, and documented next steps after the test.
- This sits upstream of later iOS benchmark / rollout sources as an **early App-stream benchmark** and **primary experiment artifact**, not a strategy deck or launch announcement.

#### What this source directly supports

- An **iOS-only** experiment was run with **Control = Old search mask (no toggle)** and **Variant 1 = New search mask (no toggle)** for **new users only**.
- The document owner is **Greg Hamill** and the main readout pages record **Last update: 29.12.2023**.
- The stated **primary KPI** was **Unique users with an enquiry**, with secondary KPIs including **total enquiries capped 10**, **conversion rate to detailed pages**, **detailed page views per user**, **saved searches**, and **searchExecution**.
- The reported outcome was negative for the new mask on the primary KPI and most listed secondaries: **-3.8% users with an enquiry**, **-5.3% total enquiries capped 10**, **-2.8% unique users with DPV**, **-6.0% DPVs per user**, **-7.6% search execution**, and **+3.4% total saved searches**.
- The readout explicitly says the hypothesis was **disproved** and the next step was to **adjust order/display of important elements** to stabilise performance and set **a new clean baseline in Q1 on the new technology**.
- This is **experiment evidence from a tested experience**, not just concept or planning work, but still a **summary artifact rather than raw analytics**.

#### Key facts extracted

- Test design: **iOS only**, **all countries**, **new users only**, **100% traffic allocation**, **50/50 split**, **21-day duration**, **05.12.2023-25.12.2023**.
- Variant definition: control is the **old search mask with no toggle**; variant is the **new search mask with no toggle**, described on p.2 as having **make/model as first filter**.
- KPI framework: **Primary = unique users with an enquiry**; secondary = **total enquiries capped 10**, **conversion rate to detailed pages**, **detailed page views per user**, **saved searches**, **searchExecution**.
- Pre-test decision framing explicitly notes the team planned to **roll out Variant 1 even if key metrics showed no change** because of **cost savings from deprecating old code**. After the negative result, the documented next step shifted to **further iteration**, not “ship as-is”.
- Embedded Optimizely screenshots on p.3 appear to show roughly balanced sample sizes for visible metrics: **81,126 control visitors** vs **81,227 variant visitors**. Visible screenshot-level readouts include **-3.78%** at **98% significance** for unique enquiry conversion, **-5.32%** at **85% significance** for total enquiries, **-2.81%** at **>99% significance** for unique DPV conversion, and **+3.43%** at **>99% significance** for saved searches. These counts come from OCR of embedded screenshots, so they are usable but should be cited cautiously.
- The PDF contains a fourth page that appears to be a **media placeholder** for `v3-promo-iteration-5.mp4` with a different date (**Last update: 22.11.2023**), which weakens the file’s cleanliness as a single-purpose readout.

#### Potential claims this could support

- This is strong evidence that the **December 2023 iOS no-toggle benchmark underperformed** the old search mask on the primary enquiry KPI and several supporting metrics in a live experiment.
- This source can support a claim that the team **invalidated its hypothesis** and recorded a **pivot toward reworking the new mask** rather than treating the tested variant as successful.
- With corroboration from later iOS sources, this could support a broader case-study arc in which **Dec 2023 was a failed benchmark / reset point** before later stabilisation and improved iterations.
- This source also supports a narrower claim that **maintainability / code-deprecation pressure was explicitly part of the decision framing**, but only as pre-test framing. It does **not** by itself prove the full final prioritisation logic beyond this readout.

#### What this source does **not** prove

- It does **not** prove the portfolio owner’s role, scope, or contribution. The only named individual in the file is **Greg Hamill**. That is not evidence of anyone else’s authorship, design ownership, or leadership.
- It does **not** prove that the tested December 2023 variant shipped broadly, that the Q1 baseline work happened as planned, or that later versions succeeded. It only records intended next steps.
- It does **not** independently prove the background context claims on p.1, such as **55-60%** old-mask usage in November, prior ABC-test underperformance, or **60% thumbs-up feedback**, because the underlying GA / prior-test evidence is not included here.
- It does **not** prove the causal explanation for underperformance. Claims about reduced top-filter usage, funnel leakage, and suboptimal result counts are the team’s interpretation and need supporting analytics.
- It does **not** provide raw event-level data, full statistical methodology, or complete tables for every listed KPI.

#### Evidence strength

- **Current rating**: Strong
- **Why**: The PDF contains explicit test design, dates, target audience, KPI framing, variant definitions, result deltas, and next steps. That makes it strong primary evidence for **what was tested** and **what top-line result was reported**. It is weaker for **root-cause interpretation**, **precise statistical reuse**, and **shipped-state claims** because it is a summary PDF rather than raw analytics and includes a stray media-placeholder page.

#### Risks / limitations

- This is a **summary readout**, not the underlying Optimizely / GA export or event-level dataset.
- Page 4 appears to be a **leftover media placeholder** with a different date, suggesting the export is somewhat messy or incomplete as a documentary artifact.
- Some metrics are only summarised in text, especially **DPVs per user** and **searchExecution**. The PDF does not show full embedded tables for every KPI.
- The file content is dated **Dec 2023**, but the PDF file metadata indicates an **Aug 2024** export timestamp. Content date and export date should not be conflated.
- The source overlaps conceptually with other corpus items that summarise or retrospectively reference earlier iOS search results, especially **NS-S08** and later retrospective launch material like **NS-S12**. Avoid double-counting this same evidence thread across multiple sources.
- The strongest causal and background claims in the document depend on linked but currently separate evidence sources.

#### Follow-up needed

- Pull the linked primary artifacts if available: **APSE-1600**, **ABTEST-407**, the linked **Figma design ticket**, the linked **Optimizely result page**, and the linked spreadsheet / GA sources referenced from the PDF.
- If you want to reuse the p.1 background framing (**55-60%** old-mask usage, prior ABC underperformance, **60% thumbs-up**), find the underlying analytics / earlier experiment artifact rather than relying on this summary alone.
- Pair this source with later iOS sources, especially **NS-S03**, **NS-S10**, and **NS-S12**, if you want to show progression from failed benchmark to later improved baseline and rollout.
- If you need a cleaner portfolio exhibit, isolate **pages 1-3**. Page 4 adds noise without clear evidentiary value.

#### Notes for case study use

- Best use: evidence of a **live iOS experiment that failed on core enquiry metrics** and triggered a documented pivot.
- Safest claims from this source are about **experiment setup**, **measured direction of impact**, and **documented next steps**.
- Treat the KPI deltas as **experiment-period relative movement**, not as realised post-launch business impact.
- Treat the UX-learning statements as **team interpretation from experiment + GA follow-up**, not as independently proven causal truth unless you also cite the underlying analytics.
- This source is clearly **App-stream**, not Web or Cross-stream. Do not generalise its findings to Android, Desktop, or Mweb.
- Do **not** infer your role from this file. Any claim about your ownership, design contribution, or leadership needs separate supporting evidence.
- For a principal-level case study, this source is most valuable as the **negative benchmark / reset point** that later sources can contrast against subsequent stabilisation and successful rollout.

### NS-S08. 6.report_v1search_vs_v2search_metrics_insights_q4,2022_q3_2023.docx

#### Source metadata

- **Source ID**: NS-S08
- **Source Name**: 6.report_v1search_vs_v2search_metrics_insights_q4,2022_q3_2023.docx
- **Source Type**: Experiment readout / retrospective internal report (Word document with embedded analytics screenshots, milestone tables, and rollout recommendations)
- **Origin**: Custom project file; document metadata lists creator Tagui Manukian and last modifier Edmund Kim
- **Platform / Surface**: Multi-platform (App: iOS + Android native search mask / search screen)
- **Approx Date**: Covers Q4 2022–Q3 2023; file metadata created 2023-11-15 and modified 2024-01-09

#### What this source covers

- Historical App-stream search-mask work before the later 2024–2026 New Search benchmark/launch evidence: Android 2022 benchmark + rollout history, iOS iteration #1 and #2 tests, and 2023 Search 1.1 / Search 2.0 planning.
- Redesign rationale across UX, business, and engineering: modernised UI, faster/less cluttered search, more enquiries per search, support for non-car inventory, and code modernisation from Objective-C toward Swift.
- Mixed evidence types in one file: experiment screenshots, milestone/owner tables, toggle-adoption analysis, zero-result analysis, thumbs up/down feedback, app-store review examples, and rollout recommendations.
- This functions as earlier app-history/background rather than final rollout proof.

#### What this source directly supports

- This is App evidence, not Web evidence. The document title is iOS-specific and the content only discusses iOS and Android native search surfaces.
- The document states that Android had earlier positive evidence and rollout momentum: a statistically significant lead uplift in beta testing, a staged beta-to-rollout path, and subsequent non-car tab expansion.
- It documents two iOS pre-Search-1.1 iterations with negative top-line results but repeated saved-search uplift, plus follow-on analyses of zero-result behaviour and layout adoption.
- It shows that the team used explicit thresholds and a multi-metric scorecard for Search 1.1, rather than evaluating the redesign on one KPI alone.
- It records an internal recommendation to beta-roll out Search 1.1 variation B, but as a recommendation/planned timeline, not confirmed launch proof.
- It names team-level owners for milestones, but does not identify the portfolio owner’s role.

#### Key facts extracted

- The document title is **“New Search Mask Design Test on iOS”** and the scope line reads **“Q4 2022 – Q3 2023.”**
- The Android context section states a **+7% statistically significant uplift in leads** in beta A/B testing and a separate **+2.2% uplift in leads** when caravans, trailers, and transporters were added.
- The Android rollout timeline recorded in the document is: **14.06.22–30.06.22** A/B test with toggle; **04.07.22–26.09.22** beta with toggle; **>80%** of users stayed on the new design in the first 3 beta weeks; **since 29.09.22** the new no-toggle layout was available in all countries/languages; non-car tabs launched **14.11.22** in IT/FR/ES/NL and **11.12.22** in DE/AT/BE.
- iOS **Iteration #1** uses an embedded results screenshot dated **Dec 19, 2022 – Jan 2, 2023** and reports **-7.38% combined leads**, **-7.63% detail views**, **-62.25% search execution**, **+14.27% saved searches**, and **-6.91% result-list-page views**.
- The Iteration #1 follow-up analysis says **76k users / 15%** in the test variation hit zero results vs **54k / 11%** in baseline; **68%** of test-variation users stayed on the new layout, while **97%** of baseline users stayed on the old layout.
- iOS **Iteration #2** uses an embedded results screenshot dated **Mar 20, 2023 – Apr 3, 2023** and reports **-4.44% combined leads**, **-4.76% detail views**, and **+12.55% saved searches**. The text also states that new-search users had better conversion ratios: **Lead/Search 8.26% vs 7%** and **Lead/DPV 9.81% vs 8.63%**.
- The milestone table names **Tagui Manukian** (PM), **Edmund Kim** (Design), and **Volodymyr Grytsenko / Santiago Salem** (Tech) across interviews, iteration 2, workshop, and iteration 3 milestones.
- Search 1.1 is framed as a **3-way A/B/C test**: baseline = old screen with new toggle; variation A = improved new search; variation B = improved new search with **make & model moved to position #1**.
- Search 1.1 planned metrics/tolerances are explicit: **Searches -5% / -10%**, **Combined Leads ≈ -1%**, **Saved Searches +5% / +10%**, **App Store rating > 2.5**, and **Thumbs-up 60% / Thumbs-down 40%**.
- The editable Search 1.1 summary table reports: **Searches -4.47% (A) / -2.87% (B)**, **Combined Leads -2.93% (A) / -1.7% (B)**, **Saved Searches +11.62% (A) / +9.99% (B)**, **App Store rating 4.2**, and **60.03% thumbs up / 39.97% thumbs down**.
- The Search 1.1 recommendation is to beta-roll out **variation B**, with a proposed timeline of **second half of Aug 2023 launch**, **end of Aug / beginning of Sep non-car addition**, **beta until mid/end Oct**, and **old mask removal by end of Oct**.
- The same Search 1.1 section contains an internal inconsistency: the embedded experiment screenshot appears more negative on the top-line lead metrics than the later editable summary table, so exact deltas should be reconciled before reuse.

#### Potential claims this could support

- With corroboration, this source can support a claim that the App stream had a long, non-linear redesign history before the later New Search rollout story: Android looked promising earlier, but iOS iterations initially hurt top-line metrics.
- With corroboration, this source can support a claim that the team evaluated search redesigns with a blended scorecard: business metrics, search-quality proxies, adoption, qualitative feedback, and technical/platform considerations.
- With corroboration, this source can support a claim that **variation B** became the internally preferred 2023 iOS beta candidate, but only as an internal recommendation rather than confirmed shipped outcome.
- With corroboration, this source can support a claim that saved-search uplift was a repeated positive signal across iterations, though the business interpretation of that signal is not proven here.

#### What this source does **not** prove

- It does **not** prove that the proposed Search 1.1 beta launch, non-car iOS additions, or old-mask removal actually happened on the Aug–Oct 2023 timeline.
- It does **not** prove the causal explanations offered for metric changes, such as over-filtering, harder filter findability, crashes, or “more precise searches”. These are stated as assumptions inside the document.
- It does **not** prove the document’s longer-term interpretation that saved-search uplift would later convert into more leads.
- It does **not** prove anything about Desktop, Mweb, or cross-stream New Search outcomes.
- It does **not** prove the portfolio owner’s role, authorship, or decision authority.
- It does **not** prove that the Search 2.0 concepts were implemented.

#### Evidence strength

- **Current rating**: Moderate
- **Why**: The file is substantive and contains concrete metrics, screenshots, milestone ownership, and recommendations. It is useful for historical app context and decision logic. It is weaker as primary outcome evidence because it mixes past results, future plans, and interpretation in one artifact; several underlying links are missing; and at least one result section appears internally inconsistent.

#### Risks / limitations

- The file is a retrospective compilation: it covers 2022–2023 events, but file metadata shows creation in late 2023 and modification in Jan 2024.
- The artifact mixes shipped history, experiment readouts, planning, and concept work, so it is easy to overstate what was actually delivered.
- Many “look / visit / read more” references point to missing tickets, analyses, or dashboards, so the underlying evidence chain is incomplete.
- Several important numbers are embedded in screenshots rather than raw analytics exports.
- Search 1.1 appears internally inconsistent on exact top-line lead deltas between the embedded screenshot and the editable summary table.
- The title suggests iOS-only scope, but the document also includes Android history and cross-app future concepts, so the scope can be misread.
- It overlaps conceptually with later app evidence in the corpus, but it predates stronger benchmark/launch sources and should not be treated as the final word on New Search impact.

#### Follow-up needed

- Find the original Android 2022 A/B test / rollout artifacts if you want to reuse the **+7%** and **+2.2%** claims confidently.
- Find primary analytics or dedicated readouts for iOS Iteration #1, Iteration #2, and Search 1.1 to reconcile exact metrics and confirm what shipped.
- Pair this with later app sources such as **NS-S07**, **NS-S03**, **NS-S10**, and **NS-S12** if you want to connect this early search-mask program to the later New Search case-study arc.
- Use a separate source if you need evidence of your own role, authorship, or direct contribution.

#### Notes for case study use

- Best use: historical background for the **App** stream and evidence of how the team reasoned through mixed experiment results.
- Weak use: headline proof of final New Search success. This source is too early and too mixed for that on its own.
- Strongest reusable material: iteration history, explicit thresholds/tolerances, team-level ownership, and the tension between negative user-level lead metrics and positive saved-search / per-search signals.
- If you cite Search 1.1, present it honestly: saved searches and feedback improved, but top-line combined leads were still negative and the beta recommendation depended on interpretation.
- Keep the boundary clean: this is app-only lineage evidence, not Web evidence.
- Do not use named collaborators here as proxy evidence of your personal contribution.

### NS-S09. 7.experiment_results_ABTEST690_V3_Search_IT_Android_results.xls

#### Source metadata

- **Source ID**: NS-S09
- **Source Name**: 7.experiment_results_ABTEST690_V3_Search_IT_Android_results.xls
- **Source Type**: Analytics export
- **Origin**: Custom project file
- **Platform / Surface**: App stream; Android mobile; Italy market only
- **Approx Date**: 2025, likely July 2025; the workbook itself shows no run dates, but file metadata indicates a creation timestamp of 2025-07-10 UTC

#### What this source covers

- A primary Android experiment data source rather than a deck, email summary, or screenshot fragment.
- The workbook compares `abtest_id = 690` baseline vs `variation_1` for `market = it`, `platform = android`, `device_category = mobile`.
- It contains seven sheets covering overall event metrics, `is_new_user` splits, CVRs, validation counts, search-mask raw/aggregated data, and a pivot-based filter-count view.
- This is outcome evidence and exploratory analysis material, not a narrative readout. There is no hypothesis statement, recommendation, rollout note, or shipped-status confirmation in the workbook.

#### What this source directly supports

- An Android/mobile experiment existed in Italy with at least two active arms: `abtest-690-baseline` and `abtest-690-variation-1`. `abtest-690-variation-2` appears only as a placeholder with sample size `1`.
- In the main event and CVR tabs, top-line enquiry metrics for `variation_1` are directionally negative and not statistically significant at the 5% level.
- Several DPV and list-page call-select metrics are statistically significantly worse for `variation_1`, especially in the `is_new_user = 0` slice.
- The workbook uses different denominators across sheets: the event/CVR tabs use `364,147` vs `360,348`, while the `search mask - data` sheet uses cleaned totals of `361,531` vs `357,732`.
- The `search mask - data` sheet directly shows interaction/event-logging differences between arms: baseline has zero `back/clear/done` counts in full aggregation, while `variation_1` has substantial non-zero counts.

#### Key facts extracted

- The workbook has 7 visible sheets: `search events`, `search events - new vs old`, `search cvr`, `search cvr - new vs old`, `Data validations`, `search mask - data`, and `pivots`.
- Main result tabs use overall sample sizes of `364,147` (baseline) vs `360,348` (variation_1). In the split tabs, `is_new_user = 0` is `351,381` vs `347,686`, and `is_new_user = 1` is `12,766` vs `12,662`.
- Data validations show raw-data counts of `364,147 / 360,348 / 1` before cleaning and `361,531 / 357,732 / 1` after cleaning for baseline / variation_1 / variation_2. The `search mask - data` sheet aligns with the cleaned totals.
- Overall enquiry metrics are not significant at 5%: `total_enquiries_dp_cnt` `0.163148 -> 0.155808` (`-4.50%`, `p=0.203`); `enquiry_total_from_lp_cnt` `0.081701 -> 0.076304` (`-6.61%`, `p=0.245`); `total_enquiries_dp_cvr` `0.064202 -> 0.063780` (`-0.66%`, `p=0.463`); `enquiry_total_from_lp_cvr` `0.034824 -> 0.034317` (`-1.46%`, `p=0.238`).
- Several engagement / browsing metrics are significantly negative for `variation_1`: `dpvs_total_unique_cnt` `15.086888 -> 14.727117` (`-2.38%`, `p=5.77e-06`); `dpvs_total_from_lp_unique_cnt` `8.933700 -> 8.587465` (`-3.88%`, `p=2.71e-09`); `call_select_total_from_lp_cnt` `0.023485 -> 0.021596` (`-8.04%`, `p=0.0054`); `call_select_dealer_from_lp_cnt` `0.021565 -> 0.020106` (`-6.77%`, `p=0.0126`).
- In the `is_new_user` split, the statistically significant negatives are concentrated in `is_new_user = 0`; the smaller `is_new_user = 1` cohort shows mostly directional but inconclusive negatives.
- In full-aggregation `search mask - data`, baseline has `0` `search_mask_back_select_total_cnt`, `0` `search_mask_clear_select_total_cnt`, and `0` `search_mask_done_select_total_cnt`, while `variation_1` has `821,209`, `243,494`, and `4,458,319` respectively.
- All `call_dial_*` and `call_success_*` metrics are `0` in both arms, with `NaN` p-values, so this file does not support conclusions about completed calls.

#### Potential claims this could support

- For Italy Android only, the measured `variation_1` arm does **not** show a statistically significant enquiry win in this workbook, and it does show statistically significant declines in several DPV / list-page interaction metrics.
- The tested variants likely differed in search-mask interaction mechanics or instrumentation, because `back/clear/done` events appear only for `variation_1`. However, another source is required before turning that into a UX claim such as AutoSave vs manual save, or old vs new flow.

#### What this source does **not** prove

- It does **not** identify what `baseline` and `variation_1` actually were in product terms. Mapping them to named UX variants would be an unsupported assumption without another source.
- It does **not** show experiment dates, hypothesis, success criteria, recommendation, final decision, rollout, or shipped status.
- It does **not** prove business impact beyond Italy Android mobile, and it does not prove cross-market or cross-platform performance.
- It does **not** prove the portfolio owner’s role, authorship, or decision-making responsibility.
- It does **not** justify treating `is_result_conclusive = conclusive` as a win/lose flag. The workbook does not define that field.

#### Evidence strength

- **Current rating**: Moderate-strong for narrow experiment evidence
- **Why**: This is a detailed primary data workbook with large samples, multiple metric tabs, segmentation, and validation sheets. It is strong for describing observed Android/Italy experiment outcomes. It is weaker for portfolio claims about UX meaning, shipment, business impact, or personal role because the variants are unlabeled, dates are only approximate, and denominators differ across sheets.

#### Risks / limitations

- Variant naming is missing. The workbook cannot safely tell you whether `variation_1` means AutoSave, manual save, old search, new search, or another interaction model.
- Result tabs and search-mask tabs use different sample bases (`364,147 / 360,348` vs `361,531 / 357,732`), so metrics should not be mixed casually across sheets.
- The file appears complete as a workbook, but context is incomplete: there is no cover note, no narrative interpretation, and no final recommendation.
- Some fields are ambiguous for case-study use: `is_new_user` is coded `0/1`, all CVR rows are tagged `conclusive` without explanation, and `call_dial_*` / `call_success_*` are all zero.
- The `pivots` sheet contains analyst working notes, including a note to not worry about sample sizes/normalisation there, so that sheet should be treated as exploratory rather than headline evidence.
- Likely overlap exists with later Android summary sources, especially `NS-S13` and `NS-S16`, but the relationship should be verified before citing them together.

#### Follow-up needed

- Pair this workbook with a labelled Android benchmark summary/readout to map `variation_1` to a named UX variant and identify the decision taken.
- Use `NS-S13` / `NS-S16` or another Android readout to determine whether this workbook underpins a later recommendation or rollout discussion.
- Find a source that states experiment timing, hypothesis, and shipped/rollout outcome.
- Confirm how `is_new_user` was defined operationally and whether the denominator shift between sheets is intentional and methodologically acceptable.
- If using metrics in the portfolio, quote the exact tab and metric family (`count`, `cvr`, or raw aggregation) rather than blending them into one headline claim.

#### Notes for case study use

- Use this as a primary evidence file for **observed experiment results**, not as proof of shipped work.
- Best standalone use: support a cautious claim such as “In Italy Android, one tested search variant failed to produce significant enquiry gains and showed significant declines in several DPV / list-page interaction metrics.”
- For UX-learning claims, use this only with a source that names the tested experience. Otherwise the interpretation remains speculative.
- Do not use this source to imply personal ownership or to summarise New Search more broadly. It is a team analytics artefact with narrow market/platform scope.

### NS-S10. 9.experiment_results_iOS_V3_Search.rtfd.zip

#### Source metadata

- **Source ID**: NS-S10
- **Source Name**: 9.experiment_results_iOS_V3_Search.rtfd.zip
- **Source Type**: Experiment readout (internal summary update, RTFD export)
- **Origin**: Custom project file; internal rich-text message/update signed “Greg,” with an embedded comparison graphic and a link to a deeper experiment canvas
- **Platform / Surface**: iOS app (**App** stream); new search / filter flow, List Page, Detail Page
- **Approx Date**: Late Aug / early Sep 2024, uncertain; the body has no explicit date, and this timing is inferred from the planned rollout by CW36 / CW37

#### What this source covers

- A completed iOS V3 search benchmark summary comparing **Control**, **Variation 1**, and **Variation 2**, plus the decision to back Variation 2.
- A significance-filtered KPI summary relative to Control for enquiry and detail-page metrics.
- Segment and behaviour learnings from the benchmark, including **private vs dealer** performance, a **Germany** market cut, filter-usage shifts, make/model behaviour, and time-spent observations.
- Immediate next steps: planned rollout timing, deeper PA / UXR analysis, and transfer of learnings into Android and future iOS improvements.
- This appears to be the narrative summary companion to the more setup-oriented iOS benchmark deck (`NS-S03`) and a pre-launch precursor to the later iOS launch announcement (`NS-S12`).

#### What this source directly supports

- **Variation 2** is presented as the winning iOS new-search variant, and the message says the team will pursue a full rollout of Variation 2.

- The source explicitly states that **only values significant at 95%** are shown in the KPI table.

- The KPI table reports, relative to Control:
  - **Users with enquiry from List Page**: Var 1 **+0.8%**, Var 2 **+4.2%**
  - **Total enquiries from List Page**: Var 1 **No change**, Var 2 **+3.7%**
  - **Users with a Detail Page view from List Page**: Var 1 **+0.3%**, Var 2 **+0.4%**
  - **Total Detail Page views from List Page**: **No change** for both variants

- The message directly states that **private listings outperformed dealer listings** on most KPIs, and gives specific example splits for Variant 2.

- The message directly states planned rollout timing: **all AutoScout markets by CW36** and **white labels by CW37**, plus deeper PA / UXR follow-up and Android learnings transfer.

- The embedded comparison graphic appears to describe the tested experiences as **new-user-only** and **no-toggle**:
  - **Control**: old search experience
  - **Variation 1**: new search with a **“Delete”** action that removes inputs / selections on that filter page
  - **Variation 2**: new search with a **“Finish/Done”** action that returns the user to the main filter page

#### Key facts extracted

- Variant 2 is the stated winner. The text says Variation 2 (“Done”) significantly outperformed baseline on most KPIs, while Variation 1 (“Delete”) was “much less encouraging.”
- The topline KPI table is explicitly limited to **95%-significant** values, which makes it useful for direction but incomplete as a full result view.
- For Variant 2 vs Control, the source reports **+4.2% users with enquiry from List Page** and **+3.7% total enquiries from List Page**.
- Private listings are reported as outperforming dealer listings. In Variant 2, the source says users with a **private enquiry from List Page were +7%** vs **+4% for dealer enquiries**.
- The same split is said to appear in detail-page behaviour: in Variant 2, **users with a private Detail Page View were +5%** vs baseline, while **users with a dealer Detail Page View were -0.1%**; **total private Detail Page views rose 8–9%** in both variants, while **total dealer Detail Page views fell 4%**.
- Germany is called the **second-best-performing market** for Variant 2 on users with enquiry from List Page at **+12%**, broken down as **+9% dealer** and **+19% private**.
- For Variation 2 in Germany, the source reports filter-usage shifts: **Body Type -25%**, **Fuel Type -17%**, **First Registration -12%**, **Location +20%**, **Equipment +26%**, **Price Label +120%**.
- The source says make/model behaviour shifted from more **single-make / single-model** searches in baseline to more **multi-make / multi-model** searches in the variants.
- The source says that, in the variants for Germany, users spent the most time on **Equipment**, then **Search for Zip or City**, then **Model**, then **Price**.
- The source links to a deeper **experiment canvas** PowerPoint, which implies this file is a summary layer rather than the full analytical record.

#### Potential claims this could support

- The iOS team made a variant-selection decision from benchmark evidence rather than shipping the redesign unchanged: Variation 2 outperformed both Control and Variation 1 on the source’s lead-oriented topline measures.
- The iOS benchmark produced both **business-relevant performance evidence** and **actionable UX / behaviour learnings**, which were intended to shape rollout, deeper analysis, and Android follow-on work.
- The winning interaction pattern appears to be the version that lets users **finish a filter step and return to the main filter page**, rather than the version centred on deleting filter selections. The exact UI wording should still be verified before quoting it.

#### What this source does **not** prove

- It does **not** prove that the rollout actually happened on the stated **CW36 / CW37** timing. This source states a plan, not confirmed delivery.
- It does **not** prove final post-launch business impact across all markets or all users. The source reports **benchmark-relative experiment results**, not post-rollout performance.
- It does **not** provide full experiment methodology: there are no sample sizes, traffic allocation, full market list, exact test dates, raw significance calculations, or denominator definitions in the message body.
- It does **not** prove why private listings outperformed dealer listings. The source itself proposes further PA / UXR work to investigate that.
- It does **not** prove Android results. Android is only mentioned as a **future application of learnings**.
- It does **not** prove the portfolio owner’s role, authorship, or decision authority. It thanks multiple teams, is signed by Greg, and points to cross-functional work, but it does not attribute specific contributions to you.
- It should **not** be used as evidence for Web, Desktop, or mWeb surfaces. This is **App / iOS** evidence only.

#### Evidence strength

- **Current rating**: Moderate
- **Why**: This is clearly reporting a completed experiment and includes concrete metrics, segment insights, and next steps, so it is stronger than planning material. But it remains a narrative summary rather than raw analytics or a full experiment deck, it suppresses non-significant values, the exact send date is absent, and the broader corpus already contains overlapping iOS sources with slightly different metric framing.

#### Risks / limitations

- No explicit send date or channel is visible in the body. “Late Aug / early Sep 2024” is an evidence-based estimate, not a printed date.
- This is summary-level evidence. It lacks the methodological detail needed to defend exact numbers in a principal-level portfolio case study without corroboration.
- The source overlaps heavily with **NS-S03** and **NS-S12**. Those neighbouring sources appear to cover the same iOS benchmark / rollout arc with slightly different rounding or framing, so quoted metrics should be reconciled before reuse.
- The embedded comparison graphic required image interpretation. It appears to show **“Finish”** on Variant 2 while the narrative calls Variant 2 **“Done.”** That wording should be verified before quoting UI labels.
- One market-learning sentence appears slightly truncated in the export, so the exact punctuation / completeness of that clause is somewhat unstable.
- Because only significant values are shown in the KPI table, this file is not sufficient for a balanced view of the full result distribution.

#### Follow-up needed

- Pair this with the referenced **experiment canvas** and/or **NS-S03** to recover the missing experiment design: dates, markets, traffic split, sample sizes, and exact metric definitions.
- Pair this with **NS-S12** or release evidence to confirm whether the planned **CW36 / CW37** rollout actually shipped as stated.
- Reconcile exact topline numbers before quoting them in a case study, especially if another source rounds the same outcome differently.
- If you want to use the dealer/private split as a strong insight claim, find the underlying PA tables or segmentation output rather than relying only on this summary message.
- Verify the exact tested interaction label for Variation 2 (**“Done” vs “Finish”**) if UI-level specificity matters in the case study.

#### Notes for case study use

- Strongest use: evidence that a real **iOS benchmark** was run, a winner was selected, and the team extracted concrete segment / behaviour learnings before rollout.
- Safer phrasing is **“the internal result summary reports...”** or **“the benchmark update says...”**, rather than presenting this file alone as the final source of truth for exact impact.
- This source is useful for showing the distinction between **experiment evidence** and **shipped evidence**: it captures a completed test and a rollout decision, but not confirmed launch completion.
- It supports cross-functional team context at a high level (**UXR, Design, UX Copy, Engineering, PA, Product, translators**) but not individual contribution claims.
- Although it mentions Android follow-on work, this file itself remains **App / iOS** evidence, not cross-stream proof.
- It is useful for app-specific case-study material and should not be generalised to Web or broader New Search outcomes without separate evidence.

### NS-S11. 10.UXR_report_android_v3_search_autosave_vs_manual_save_q2_2025.png

#### Source metadata

- **Source ID**: NS-S11
- **Source Name**: 10.UXR_report_android_v3_search_autosave_vs_manual_save_q2_2025.png
- **Source Type**: Research artifact; image screenshot of an internal UXR report page with embedded participant clips/excerpts
- **Origin**: Custom project file; visually appears to be a screenshot/export of a published internal report
- **Platform / Surface**: App / Android App (mobile), Germany-only study
- **Approx Date**: Q2 2025; field phase 12.05-19.05.2025

#### What this source covers

- Android Search Mask V3 beta user testing comparing two implemented variants: **AutoSave** vs **non-AutoSave**.
- Study setup: project background, goal, research questions, sample, device/platform, field phase, summary findings, detailed findings, and recommendations.
- Participant-level qualitative usability evidence for Android only, including summarised findings plus clip thumbnails/transcript excerpts.
- This is **Android/App qualitative decision-support evidence**, not a benchmark readout, analytics export, or rollout announcement.

#### What this source directly supports

- A Germany-based Android usability study was run with **10 current car shoppers**, split **5 AutoSave / 5 non-AutoSave**, during **12.05-19.05.2025**.
- By the time of research, both variants existed in a **beta / A/B-testing context**. This was not purely concept-only feedback.
- In this study, **both variants were generally well received**, but **AutoSave produced less friction and fewer user errors** than non-AutoSave.
- The report explicitly recommends **moving forward with AutoSave**, while adding clearer education about autosave, better visibility of selected filters, and better surfacing of commonly used filters.

#### Key facts extracted

- The report title is effectively **“Android Search Mask V3 | Beta User Tests (AutoSave and Non AutoSave) | DE | Q2.2025.”**
- Sample details are explicit: **10 users from Germany**, all **looking for a car right now**; AutoSave group **5 male, age 28-46**; non-AutoSave group **3 male / 2 female, age 25-46**.
- The stated project goal is to test the **usability and clarity** of the two Android Search Mask V3 variants, which the report says had already been **released for A/B testing**.
- Background framing in the report says earlier Android results were mixed/negative, prior UXR had not surfaced clear usability issues, and the team therefore created **small-change AutoSave and non-AutoSave variants** for further testing.
- **AutoSave positive findings**: 5/5 liked the breadth of filters; 5/5 said the search was simple to navigate/understand; 5/5 could clear filter settings between tasks; 5/5 explicitly noticed the changing offer number/count at the bottom; 4/5 said filters were easy to oversee/use; 4/5 felt good control over narrowing results.
- **AutoSave issues**: 5/5 did **not** realise filters were saved automatically and still used **“Fertig”/Done** to confirm; 3/5 said the amount of filters could feel overwhelming; 3/5 wanted important/frequently used filters higher up; 2/5 said it was hard to review what had already been selected.
- **non-AutoSave positive findings**: 4/5 said the filter structure/use felt intuitive; 4/5 explicitly said the search worked well; 1 participant described it as a “standard search experience.”
- **non-AutoSave issues**: 3/5 said not all filters were easy to find; colour was specifically called out as hard to find and at least 1 participant could not find it; 2/5 exited via the back arrow expecting autosave; 1 additional user could not work out how to remove already-set filters because they missed the cancel control.
- Final recommendations are concrete: explain saving behaviour to users, consider first-time pop-ups/messages, make selected filters more prominent, show most-used filters first, warn users when they leave the non-AutoSave version without saving, and make deletion/reset behaviour easier to understand.

#### Potential claims this could support

- Android variant selection was informed by **direct qualitative UXR**, and that UXR favoured **AutoSave on usability grounds** over non-AutoSave.
- The Android Search Mask V3 work involved **implemented beta variants** and generated **specific design refinements**, not just abstract concept feedback.
- Even the preferred AutoSave variant still had known comprehension and IA issues, so the decision was **“proceed with AutoSave, but refine it”**, not “design solved.”

#### What this source does **not** prove

- It does **not** prove that AutoSave improved **conversion, enquiries, leads, DPVs, or any business KPI**. There are no experiment-performance metrics here.
- It does **not** prove that AutoSave **won** the later Android benchmark statistically, or that the recommendation was ultimately shipped/rolled out.
- It does **not** prove that findings generalise beyond **10 German Android participants** to all markets, all user types, or web/iOS surfaces.
- It does **not** identify **your role**, authorship, decision authority, or implementation ownership.
- It does **not** independently prove the earlier Android/iOS benchmark history described in the background section. Those claims need their own primary sources.
- It does **not** prove that the usability issues observed here were the causal explanation for later benchmark signals mentioned elsewhere in the corpus.

#### Evidence strength

- **Current rating**: Moderate overall; relatively strong for localised usability evidence, weak for outcome evidence
- **Why**: This is a primary research artefact with explicit study dates, sample breakdown, variant descriptions, participant-level examples, and a clear recommendation. Evidence strength is limited by the small sample, single-country scope, Android-only surface, image/screenshot format, and lack of raw transcripts, task script, or linked experiment analytics.

#### Risks / limitations

- The file is a **single long PNG screenshot**, not the original report/deck. Some text is hard to read and parts are image-based, so transcription risk remains.
- Naming is inconsistent across materials: the **filename says `manual_save`**, the report body says **`non-AutoSave`**, and other sources may use **`no-AutoSave`**. Variant mapping should be confirmed before quoting across sources.
- The study is **qualitative** and based on **5 participants per variant**. Counts are useful directionally but are not robust outcome evidence.
- The source likely overlaps conceptually with later Android summary sources. Avoid treating repeated recommendation language as multiple independent proofs.

#### Follow-up needed

- Retrieve the **original report or source page**, plus any linked notes/Miro board or recordings, to verify wording, authorship, and any missing/cropped details.
- Pair this with Android benchmark/launch sources, especially **NS-S13** and **NS-S16**, to separate **UX rationale** from **performance/rollout evidence**.
- Verify whether `manual_save`, `non-AutoSave`, and `no-AutoSave` are the **same variant label** across the corpus.
- Find explicit rollout confirmation if using this source inside a **shipped-work** narrative.

#### Notes for case study use

- Best used as **App/Android qualitative decision-rationale evidence**: why AutoSave was preferred and what issues still needed refinement.
- Do **not** use it alone for business impact, benchmark success, or launch claims. It needs corroboration from experiment readouts or rollout updates.
- It is useful for showing disciplined product thinking: the preferred variant still had known issues (autosave discoverability, filter prioritisation, selected-filter visibility), so the story is more credible than a simple “users liked it.”
- This source is most valuable when triangulated with later Android benchmark/rollout material rather than treated as a standalone proof source.

### NS-S12. 11.launch_announcement_iOS_V3_App_search_02.10.2024.rtfd.zip

#### Source metadata

- **Source ID**: NS-S12
- **Source Name**: 11.launch_announcement_iOS_V3_App_search_02.10.2024.rtfd.zip
- **Source Type**: Internal launch announcement / Slack-style summary (RTFD export with embedded screenshots, hyperlinks, and @mentions)
- **Origin**: Custom project file
- **Platform / Surface**: **App stream**; directly evidenced surface is **iOS**. Embedded screens show iOS search/filter flows (main filter overview, make/model, offer details / online since, equipment with free-text search, location). Android and Web appear only as future work.
- **Approx Date**: 02 Oct 2024, inferred from filename; no visible in-body timestamp in the export

#### What this source covers

- A post-benchmark launch communication announcing rollout of a new iOS search / filters experience.
- The team’s rationale for launch: a Dec 2023 benchmark of an earlier new-codebase search underperformed, then a later June benchmark of a revised baseline is described as successful.
- Announcement-level impact framing: +4% total enquiries from List Page during benchmarking, reduced code complexity, and higher future testing velocity.
- Embedded UI evidence: screenshots of the launched/communicated filter experience plus a demo-video link.
- Forward-looking next steps for Android benchmarking and Web design validation.
- This appears to sit downstream of the iOS benchmark evidence and functions mainly as rollout/communication proof, not as the primary source for experiment method or results.

#### What this source directly supports

- The Search Funnel team communicated that a new iOS search / filters experience had been rolled out and was available in all AutoScout24 markets and white labels.
- The announcement explicitly frames the launch as a response to a failed Dec 2023 direction and a later successful June benchmark of a new iOS baseline on the new codebase.
- The source states one concrete benchmark outcome: “total enquiries from List Page” grew by **+4%** during benchmarking.
- The file directly shows concrete iOS UI areas through embedded mobile screenshots: main filter overview, make/model, online-since, equipment free-text search, and location.
- One embedded annotated image explicitly explains that most filter screens have a “Finish” option in the upper-right that returns the user to the main filter page.
- By the time of this announcement, **iOS is framed as shipped**; **Android and Web are framed as planned next steps**.

#### Key facts extracted

- The message states: “We successfully fully rolled out a new search / filters experience for our iOS visitors” and says it is available in “all AutoScout24 markets and white labels.”
- It says the earlier Dec 2023 new-codebase search “underperformed on all key business KPIs.”
- It says that after applying UX Design Principles and learnings from several rounds of user testing, the team created “a new clean baseline search experience for iOS” and that a June benchmark “outperformed the baseline, old search.”
- The only explicit numeric impact stated in this announcement is: “During our benchmarking, we grew total enquiries from List Page by +4%.”
- The announcement claims the new search “reduced overall code complexity” and that the new UI enables testing “a wider set of features.”
- The “What’s next?” section says Android benchmarking would launch in **mid-October** and, if successful, the team would ideally roll out Android by **mid-December**.
- The same section says mobile web and desktop were still in design and would be validated with user testing before November development.
- The file includes a demo-video link and a thank-you list naming engineering, design, and support contributors, signed “Greg (on behalf of the Search Funnel team).”

#### Potential claims this could support

- With release or rollout corroboration, this can support the claim that by early Oct 2024 the iOS App work had moved from benchmark stage into broad launch communication.
- With benchmark corroboration, this can support the claim that the iOS launch was justified internally by measurable improvement over the prior baseline.
- With technical or roadmap corroboration, this can support the claim that iOS was being used as the baseline model for later Android and Web work.
- With separate ownership evidence, this can support a claim of substantial cross-functional coordination around launch, but not an individual leadership claim on its own.

#### What this source does **not** prove

- It does **not** independently verify the actual rollout date, rollout mechanics, app version, or whether all markets and white labels were live exactly as stated.
- It does **not** provide benchmark methodology, sample sizes, significance, KPI definitions, or raw analytics behind the **+4%** figure.
- It does **not** prove sustained post-launch business impact. The metric is framed as benchmark-period performance, not long-run realised outcome after rollout.
- It does **not** provide the underlying UXR findings. User testing is referenced, but no methods, evidence, or findings are included here.
- It does **not** prove the portfolio owner’s role, ownership level, or decision authority. The thank-you list is acknowledgment, not role attribution.
- It does **not** prove Android or Web shipped work. Those sections are explicitly forward-looking in this file.

#### Evidence strength

- **Current rating**: Moderate
- **Why**: Strong for proving that an internal launch announcement existed and that it claimed a completed iOS rollout, showed concrete UI, and stated rationale/next steps. Only moderate for impact, launch completeness, and ownership claims because it is summary-level, lacks explicit timestamp/version metadata, and appears downstream of stronger primary evidence such as benchmark readouts and release artefacts.

#### Risks / limitations

- The export has no visible send timestamp, channel context, or thread context. The date is inferred from the filename.
- This is an announcement artefact, not primary analytics, release instrumentation, or a formal launch record.
- The **+4%** wording is rounded and may not map cleanly to the more granular KPI phrasing in adjacent iOS benchmark sources. Reconcile before quoting.
- The cross-platform language could be over-read. This source only directly evidences **iOS shipped work**, while Android and Web remain intent/planning.
- One embedded image is annotated/explanatory rather than a pure in-product capture. The image set is useful for scope illustration but not a complete product spec.
- The screenshots are German-language examples, so they demonstrate UI states but not localisation coverage across all claimed markets.
- This source overlaps with earlier iOS benchmark artefacts, so it risks being misused as primary outcome evidence when it is more accurately launch-summary evidence.

#### Follow-up needed

- Corroborate launch state and timing with release notes, rollout tickets, app-version evidence, or another primary launch record.
- Reconcile the **+4% total enquiries from List Page** claim against the primary iOS benchmark sources around this artefact, especially **NS-S03** and **NS-S10**.
- If using this for a role/leadership claim, pair it with ownership evidence such as authored docs, tickets, comments, approvals, or decision records.
- If using a UX-learning claim, locate the underlying user-testing artefact rather than relying on this summary reference.
- If using a cross-platform story, pair the Android/Web next-step statements here with later Android/Web sources to show what actually shipped versus what was only planned.

#### Notes for case study use

- Best use: corroboration that the **iOS App stream** reached launch/rollout stage and that the team internally framed it as a meaningful milestone.
- Useful as supporting evidence for the **scope of the shipped iOS UI**, because it shows the actual filter areas being communicated at launch.
- Useful for app-vs-web discipline: in this file, **iOS is shipped**, while **Android and Web are still future work**.
- Use cautiously for business impact: the **+4%** figure is valuable but should be quoted only after KPI wording is reconciled with the primary benchmark readout.
- Do not use this source alone to claim principal-level ownership, cross-platform delivery, or long-term business outcome.

### NS-S13. 13.experiment_results_Android_V3_Search_benchmarking3_image2_21.07.2025.png

#### Source metadata

- **Source ID**: NS-S13
- **Source Name**: 13.experiment_results_Android_V3_Search_benchmarking3_image2_21.07.2025.png
- **Source Type**: Screenshot / partial experiment scorecard
- **Origin**: Custom project file; image capture of an internal experiment-results slide or presentation fragment
- **Platform / Surface**: App / Android
- **Approx Date**: 21 Jul 2025 (from filename; no in-image date visible)

#### What this source covers

- Partial results table titled as an Android benchmark readout for **“Android New Search Benchmarking #3”** in **DE and IT**.
- A **scorecard vs live / “old” Android search**, focused on **enquiry-related outcomes**.
- User-segment splits visible in the table: **User with enquiry**, **New User with enquiry**, and **Returning User with enquiry**.
- Two Android variant behaviours are described in-line: **with Autosave** and **with no Autosave**.
- This appears to be a **fragmentary Android App experiment artifact**, not a primary raw-data source or full readout.

#### What this source directly supports

- This is **experiment evidence**, not planning-only material: it shows benchmark results against **live / “old” Android search**.

- The benchmark explicitly covers **Germany** and **Italy**.

- One visible variant is **“New search with Autosave”**, described as automatically applying filter choices whether or not the user hits a **“Done”** CTA.

- A second visible variant is **“New search with no Autosave”**, described as requiring the user to hit a **“Save”** CTA for choices to be applied.

- The table states that **only values at 95% significance are reported unless otherwise specified**.

- In the **Germany / Autosave** row, the visible cells read:
  - **No sign change** for **User with enquiry**
  - **+12%** for **New User with enquiry**
  - **No sign change** for **Returning User with enquiry**

- In the **Germany / no Autosave** row, the visible cells read:
  - **-3%\*** for **User with enquiry**
  - **No sign change** for **New User with enquiry**
  - A further **-3%** appears in the **Returning User with enquiry** column, but that cell is less robustly readable than the others

- The `*` footnote is visible and says the starred value is **significant at 90%**.

#### Key facts extracted

- The title text is readable as: **“Results presentation for ‘Android New Search Benchmarking #3’ in DE and IT.”**
- The table is labelled **“Scorecard (vs Live / ‘old’ Android search)”** and cites **Consumer Analytics deepdives** as the source.
- The visible Germany Autosave result pattern is **stable overall**, **positive for new users (+12%)**, and **stable for returning users** on the enquiry metric shown.
- The visible Germany no-Autosave pattern is **negative overall (-3%\*, 90% significance)** and **no significant change for new users**.
- A **-3% returning-user value** appears visible for Germany no-Autosave, but this should be treated cautiously until corroborated by a fuller source.
- The visible **Italy / Autosave** portion appears to show **No sign change** across the three enquiry columns, but the Italy section is cropped and incomplete.
- A footer reading **“Search Funnel Update 42”** is visible, suggesting this image was captured from a presentation or update deck, not from a native analytics export.

#### Potential claims this could support

- The Android App stream was testing **real benchmark variants** against the live search experience and evaluating them on **business-facing enquiry outcomes**, not only on qualitative UX preference.
- **Autosave** appears to have been the stronger direction in the visible Germany slice, especially for **new users (+12%)**, while **no-Autosave** shows weaker or negative Germany signals.
- This source can support a claim that Android experimentation included **segment-level analysis** by **all users / new users / returning users**.
- This source can support a claim that **variant mechanics mattered**: the experiment explicitly distinguished between auto-applying filters and requiring an explicit save action.

#### What this source does **not** prove

- It does **not** prove the full experiment design, sample sizes, traffic allocation, run dates, or methodology.
- It does **not** prove final rollout, launch completion, or shipped-state beyond the experiment itself.
- It does **not** prove complete Germany or Italy performance. The screenshot is partial, and **Italy no-Autosave results are not visible**.
- It does **not** prove total business impact beyond the visible enquiry-related cells.
- It does **not** prove the portfolio owner’s role, authorship, ownership, or decision authority.
- It does **not** safely prove the exact meaning of every partially legible cell. Some lower/right-side values need corroboration before being quoted in a case study.

#### Evidence strength

- **Current rating**: Weak
- **Why**: The source contains some clearly readable and useful experiment details, but it is still a **cropped screenshot fragment**, not a complete readout or raw analytics source. Several important elements are missing, and at least one visible metric cell is only partially legible. It is useful for **directional corroboration**, not as a standalone proof source.

#### Risks / limitations

- The file is **image-based and incomplete**. The full table is not visible.
- Some values are clearly readable, but others depend on interpreting a cropped layout and should not be over-quoted without a fuller source.
- The **Italy section is partial**, and only the visible Autosave row can be read with any confidence.
- The image likely comes from a larger slide or deck. The parent source is **not definitively identified** inside the file.
- The **date comes from the filename**, not from the visible slide content.
- In the broader evidence base, this appears to be a **secondary fragment**, not the strongest Android benchmark artifact.
- It may be one part of a split screenshot set. There is a closely related companion fragment (**NS-S14**) from the same broader benchmarking material.

#### Follow-up needed

- Find the **full Android Benchmarking #3 deck or native table** so the scorecard can be read completely.
- Corroborate the visible Germany results, especially the **no-Autosave returning-user cell**, against a fuller experiment source.
- Pair this with the stronger Android benchmark summary source (**NS-S16**) to confirm the interpreted conclusion and any rollout recommendation.
- Pair this with a more raw analytics-style Android source (**NS-S09**) to validate significance, sample sizes, and segment definitions.
- Confirm whether **21 Jul 2025** is the experiment readout date, export date, or only a file-labelling date.

#### Notes for case study use

- Good for showing that the work reached **live benchmark testing on Android App Search** and was measured on **enquiry-related outcomes**.
- Good for evidencing that **Autosave vs no-Autosave** was a concrete product variable, not just a conceptual design discussion.
- Safe to reuse the visible **Germany new-user +12% Autosave** signal, but only with a caveat that it comes from a **partial screenshot** and should be corroborated.
- Safe to use as a **supporting visual artifact**, not as the sole source for headline impact claims.
- Do **not** use this source alone to claim final rollout success, complete multi-market performance, or your individual contribution.
- For a principal-level portfolio case study, this source is most valuable as **supporting experiment evidence** that complements stronger primary sources, rather than as the primary proof itself.

### NS-S14. 14.experiment_results_Android_V3_Search_benchmarking3_image2_21.07.2025.png.png

#### Source metadata

- **Source ID**: NS-S14
- **Source Name**: 14.experiment_results_Android_V3_Search_benchmarking3_image2_21.07.2025.png.png
- **Source Type**: Screenshot / partial experiment scorecard slide
- **Origin**: Custom project file; appears to be a screenshot of an internal presentation slide (footer reads `Search Funnel Update 40`)
- **Platform / Surface**: Android app (App stream)
- **Approx Date**: 21 Jul 2025 from filename; no explicit date is visible inside the slide

#### What this source covers

- Partial scorecard for `Android New Search Benchmarking #3` in Germany and Italy.
- Comparison against live / “old” Android search.
- Quantitative summary slice focused on `Total DPVs`, `Total Enquiries`, `Total Dealer Enquiries`, and `Total Private Enquiries`.
- Variant mechanics are part of the test: one row is clearly `with Autosave`; a second Germany row appears to be the `with no Autosave` variant; the visible Italy row is labelled `With Autosave`.

#### What this source directly supports

- An Android-specific benchmark existed and was presented as a scorecard versus the live / old Android search in DE and IT.
- The slide explicitly states that only values at 95% significance are reported unless otherwise specified.
- In the visible rows, most cells read `No sign change`.
- By visible row/column alignment under the metric headers, the Germany second row shows `-4%` in the leftmost metric column and `No sign change` in the other visible columns; the visible Italy Autosave row shows `-2%` in the leftmost metric column and `No sign change` in the other visible columns.
- This is experiment evidence, not planning or launch evidence.

#### Key facts extracted

- The title reads `Results presentation for "Android New Search Benchmarking #3" in DE and IT`.
- The subtitle/frame reads `Scorecard (vs Live / "old" Android search)`.
- The metric header visible in the crop is `Total DPVs`, plus `Total Enquiries = Total Dealer Enquiries + Total Private Enquiries`.
- A note on the slide says only values at 95% significance are reported unless otherwise specified.
- The `with Autosave` description says filter choices are automatically applied whether or not the user hits `Done`.
- The apparent `with no Autosave` variant says the user must hit a `Save` CTA for choices to be applied.
- Germany `with Autosave`: all four visible metric cells read `No sign change`.
- Germany second row, apparently `with no Autosave`: `-4%` in the leftmost visible metric column; remaining visible metric cells read `No sign change`.
- Italy visible `With Autosave` row: `-2%` in the leftmost visible metric column; remaining visible metric cells read `No sign change`.
- Footer text reads `Search Funnel Update 40`, suggesting this is slide 40 of a broader deck.

#### Potential claims this could support

- The Android team was testing interaction logic around Autosave vs explicit Save, not just visual UI changes.
- With corroboration, this can support a cautious claim that visible enquiry metrics were broadly stable in this summary slice, while DPVs showed negative signals for at least some market/variant combinations (`-4%` Germany second row; `-2%` visible Italy Autosave row).

#### What this source does **not** prove

- It does not prove the overall winning variant, the final recommendation, or whether anything shipped.
- It does not prove experiment dates, sample sizes, segment cuts, or exact statistical outputs beyond the stated significance rule.
- It does not prove your role, ownership, or team responsibilities.
- It does not safely support treating OCR artefacts such as `1092 offers` / `O92 offers` as result data.

#### Evidence strength

- **Current rating**: Weak
- **Why**: The title, frame, metric headers, significance note, and several result cells are legible, but this is a cropped image fragment with missing context, incomplete rows, and no methodology or decision narrative. It is useful as corroboration, not as a standalone source of truth.

#### Risks / limitations

- The screenshot is partial: only one Italy row is visible, and any additional Italy row(s) or summary content may be off-screen.
- Some text is distorted by image/OCR noise. Apparent strings like `1092 offers` likely come from embedded UI screenshots or artefacts, not from the results table.
- The Germany second-row label is only partially legible. The `-4%` figure is clear, but the row naming should still be confirmed from a fuller source.
- The filename supplies the date, but the slide itself does not show one.
- This likely overlaps related Android benchmark evidence, especially the sibling screenshot `NS-S13` and stronger Android benchmark/rollout sources.

#### Follow-up needed

- Find the original full deck/readout for `Android New Search Benchmarking #3` to confirm full table structure, all rows, and the exact no-Autosave label.
- Pair this screenshot with stronger Android sources before quoting metrics in a portfolio case study: `NS-S16` for recommendation/rollout context, `NS-S09` for raw-ish Android tables, and `NS-S11` for the Autosave rationale.
- Verify the `-4%` and `-2%` figures from a non-cropped primary source before using them as exact evidence.
- Confirm whether an Italy no-Autosave row exists in the full source and whether it was simply cut off here.

#### Notes for case study use

- Safe use: low-strength visual corroboration that Android app benchmarking explicitly compared Autosave vs no-Autosave and tracked DPVs plus dealer/private enquiries with a significance threshold.
- This is experiment evidence rather than planning intent, but it is still too fragmentary to stand alone as outcome evidence.
- Do not use it to claim shipped work, overall business impact, a final winner, or your specific contribution without stronger companion sources.
- This source is app-specific and quantitative. It says little about UX rationale and should not be generalised to web or iOS.
- Relative to the broader corpus, this looks like a companion fragment rather than the authoritative Android benchmark document.

### NS-S15. 15.email_android_V3_search_rollout_update_21.05.2025.rtfd.zip - web section

#### Source metadata

- **Source ID**: NS-S15
- **Source Name**: 15.email_android_V3_search_rollout_update_21.05.2025.rtfd.zip - web section
- **Source Type**: Internal status update / summary note (web section)
- **Origin**: Custom project file; extracted from a cross-stream RTFD export that mixes Android and Web status
- **Platform / Surface**: Web stream; Desktop, Mweb
- **Approx Date**: Filename says 21 May 2025, but this is uncertain. The content is internally inconsistent with that date, and embedded screenshots match separate corpus files whose filenames say 21 Jul 2025. Treat the date as tentative / possibly mislabeled.

#### What this source covers

- A high-level status update for **“Initiative: New Search Experience”**, marked **“On Track.”**
- **Web** status and forward plan: foundational work progress, remaining filter development, first old-vs-new comparison timing, and rollout sequencing.
- One embedded milestone/timeline screenshot that appears to cover upcoming web development, UXR, benchmarking, and analysis.
- This is **web planning/status evidence**, not a result readout.

#### What this source directly supports

- The initiative was being communicated internally as **“On Track”** at the time this export reflects.
- The web section is directly **status/planning** evidence, not result evidence.
- The update states that foundational web work was nearly complete, the first phase was finishing **Jul 25**, the first old-vs-new comparison was targeted **Aug 15**, and initial results were expected **Sep 12**.
- An embedded milestone screenshot appears to show **`#1 Web: New search benchmarking test #1 in DE, IT (Cars)`**.
- The same milestone screenshot appears to place **web remaining-filters development** through **15 Aug**, **web UXR** around **8-15 Aug**, and **web result analysis** through **12 Sep**. These details are image-derived and should be verified before quoting.

#### Key facts extracted

- The body text names the initiative as **“New Search Experience”** and labels status as **“On Track.”**
- The source is cross-stream overall, but the web content is planning-oriented rather than results-oriented.
- An embedded milestone screenshot appears to show **Web: New search benchmarking test #1 in DE, IT (Cars)**.
- The same milestone screenshot appears to place **remaining-filters development**, **UXR**, and **result analysis** across late July to mid-September.
- The approximate date is especially uncertain because the file label says **21.05.2025**, while embedded Android scorecards inside the same export match screenshots labelled **21.07.2025** elsewhere.

#### Potential claims this could support

- The web stream was still in **foundational build and first-comparison planning** while Android was further along.
- The broader New Search programme was being run as a **phased cross-stream initiative**, with different streams at different stages of readiness.
- This source is stronger for a case-study claim about **decision sequencing and programme timing** than for a claim about web outcome or shipped impact.

#### What this source does **not** prove

- It does **not** prove that the first old-vs-new web comparison actually happened on the stated timeline, or that later web rollout occurred.
- It does **not** prove web benchmark design, sample sizes, KPI definitions, or results.
- It does **not** prove your personal role or ownership.
- It does **not** function as web outcome evidence. It is planning/status material.

#### Evidence strength

- **Current rating**: Moderate for planning/timeline evidence; weak for outcome evidence
- **Why**: The source contains explicit status language and milestone timing, which makes it useful for understanding sequence and readiness. But it is still a summary artifact rather than a primary web benchmark readout, parts of it are image-based, and the original date/channel are ambiguous.

#### Risks / limitations

- The file mixes **Web planning**, **Android benchmark/recommendation**, and embedded screenshots. It is easy to blur stream boundaries if cited carelessly.
- The filename says **email**, but the export lacks normal email headers and may be a pasted or compiled update rather than a sent email.
- The approximate date is uncertain because the embedded images conflict with the filename.
- Some extracted detail comes from OCR of embedded screenshots. The body text is the safer layer; fine-grained dates from the images are less reliable.
- This file is not the right source for precise web metric or launch claims.

#### Follow-up needed

- Pair the web planning/timeline claims here with later web sources such as **NS-S17** and **NS-S18**.
- Find the primary web benchmark or deep-dive readout rather than relying on this status update.
- Verify milestone dates from a non-screenshot planning source before quoting them.
- Confirm the file’s true date or latest-edit window before using it as a chronology anchor.

#### Notes for case study use

- Best used as **web readiness / sequencing evidence**, not as proof of web impact.
- Useful for showing that the web stream was still in **build, validation, and benchmarking preparation** while Android had progressed further.
- Keep the stream boundary explicit. This section is **Web planning evidence only**.
- Do not use this source alone to quote web benchmark statistics, launch dates, or your role.

### NS-S16. 15.email_android_V3_search_rollout_update_21.05.2025.rtfd.zip - Android section

#### Source metadata

- **Source ID**: NS-S16
- **Source Name**: 15.email_android_V3_search_rollout_update_21.05.2025.rtfd.zip - Android section
- **Source Type**: Internal status update / summary note (Android section)
- **Origin**: Custom project file; extracted from a cross-stream RTFD export that mixes Android and Web status
- **Platform / Surface**: App / Android
- **Approx Date**: Filename says 21 May 2025, but this is uncertain. The content is internally inconsistent with that date, and embedded screenshots match separate corpus files whose filenames say 21 Jul 2025. Treat the date as tentative / possibly mislabeled.

#### What this source covers

- A high-level status update for **“Initiative: New Search Experience”**, marked **“On Track.”**
- **Android** benchmark summary and recommendation: initial DE/IT experiment readout, recommendation to prefer **Autosave**, brief rationale, and rollout target.
- Two embedded Android benchmark scorecards plus a milestone/timeline screenshot.
- This is a **decision/rationale checkpoint**, not a raw analytics file or final rollout confirmation.

#### What this source directly supports

- The initiative was being communicated internally as **“On Track”** at the time this export reflects.
- The Android recommendation in the document is to proceed with rollout of the new search **with Autosave**.
- The update explicitly says that, in **Germany and Italy**, **total Dealer leads** and **total Private leads** remained **stable** for the new search with Autosave.
- The update explicitly says that, in **Germany**, Autosave showed **+12%** for **new users with an enquiry / enquiry conversion rate**. In **Italy**, that same new-user signal for Autosave was described as **no sign change**.
- The update explicitly says the **no-Autosave** version underperformed in **Germany**, with **returning-user enquiry conversion rate at -3%**.
- The file states a **plan** to roll out the Android new search for **all vehicle types** to **all core markets by Aug 8**. It does not confirm that rollout occurred.

#### Key facts extracted

- The body text names the initiative as **“New Search Experience”** and labels status as **“On Track.”**
- The Android summary is recommendation-oriented, not neutral reporting: it says the team should roll out **Autosave**, and ties that recommendation to both benchmark signals and a referenced **May 2025 UXR recommendation** against further no-autosave testing.
- Two embedded scorecards appear to be from **“Android New Search Benchmarking #3” in DE and IT**, compared against live / “old” Android search. The scorecard header says **only values at 95% significance are reported unless otherwise specified**.
- An embedded milestone screenshot appears to show **`#3 Android: Test #3 in DE, IT (Cars)`**, with Android benchmark analysis still **in progress** and rollout work **not started** at capture time.
- The milestone screenshot appears to state that Android experiment runtime covered **DE: 16 May-26 Jun** and **IT: 24 May-26 Jun**, and that Android rollout development was planned for **28 Jul-8 Aug**. These details are image-derived and should be verified before quoting.

#### Potential claims this could support

- By this stage of the programme, the team had enough internal evidence to make an **Android interaction-pattern decision**: move forward with **Autosave**, not no-autosave.
- The Android decision appears to have combined **business-proxy experiment signals** (leads, enquiry conversion) with **UX research input**. This is a reasonable interpretation, but the underlying research and analytics sources are still needed for a portfolio-grade claim.
- This source is stronger for a case-study claim about **decision readiness** than for a claim about final shipped impact.

#### What this source does **not** prove

- It does **not** prove that Android rollout actually happened by **8 Aug**.
- It does **not** prove final business impact after rollout. It is a summary of initial benchmark findings and plans, not a post-launch result readout.
- It does **not** provide enough experiment detail to independently validate the Android recommendation: sample sizes, full KPI set, exact variant definitions, and the underlying **Consumer Analytics deep-dives** are not attached here.
- It does **not** prove that all Android metrics were flat or positive. The scorecards appear to report only significant values unless otherwise specified, so absence of a number is not the same as full neutrality across all metrics.
- It does **not** prove your personal role or ownership.
- It does **not** function as pure app evidence without caveat, because the underlying file also mixes web planning content.

#### Evidence strength

- **Current rating**: Moderate
- **Why**: The source is useful because it contains explicit status language, recommendation text, timing, and a few concrete metric signals. But it is still a summary artifact rather than a primary experiment readout; parts of it are image-based, the original channel/date are ambiguous, and the key rollout statement is a **plan**, not confirmation.

#### Risks / limitations

- The source mixes **Android recommendation**, a **referenced UXR recommendation**, and **Web planning**. Stream boundaries need to be kept explicit.
- The filename says **email**, while the export itself shows **no sender, recipient, or sent timestamp**, so provenance and exact date are not fully secure.
- The approximate date is especially uncertain: the file label says **21.05.2025**, but the embedded Android scorecards match **NS-S13** and **NS-S14**, whose filenames say **21.07.2025**. That creates a date conflict and a risk of double-counting the same evidence.
- Some extracted detail comes from OCR of embedded screenshots. The body text is the safer layer; fine-grained table cells, names, and dates from the images are less reliable.
- The update cites a **May 2025 UXR recommendation**, but that recommendation is only referenced second-hand here.

#### Follow-up needed

- Pair the Android recommendation with a fuller benchmark source or analytics export before making portfolio claims about effect size or decision quality. The likely corroboration targets are **NS-S09** and any missing fuller Android readout.
- Use **NS-S11** to substantiate the claim that no-autosave should not be tested further. This file only cites that recommendation second-hand.
- Treat **NS-S13** and **NS-S14** as duplicate fragments from this same evidence chain, not as independent proof.
- Find actual **Android rollout confirmation** after the planned **8 Aug** target if you want to claim shipped work rather than planned work.
- Verify the file’s true date or latest-edit window before relying on its timeline.

#### Notes for case study use

- Best used as a **decision/rationale checkpoint**, not as final outcome proof.
- Strongest portfolio use: show that the Android team had moved from experimentation into **rollout recommendation**, with Autosave favoured because leads were stable, a **+12%** new-user signal appeared in Germany, and no-autosave showed a negative Germany signal.
- Also useful for showing **cross-stream sequencing**, but keep those streams clearly separated in the case study.
- Do not use this file alone to quote exact benchmark statistics, launch dates, or your role. It is better as a synthesis artifact that points to stronger primary evidence.

### NS-S17. 5.web_search_rollout_result.png

#### Source metadata

- **Source ID**: NS-S17
- **Source Name**: 5.web_search_rollout_result.png
- **Source Type**: Screenshot of an internal rollout/result announcement excerpt
- **Origin**: Custom project file; likely an internal chat/announcement screenshot, but the platform, sender, and channel are not visible in the image
- **Platform / Surface**: Desktop, Mweb
- **Approx Date**: 05 Feb 2026, inferred from overlap with NS-S18; no date is visible in the screenshot itself

#### What this source covers

- Web-stream only: a post-launch announcement excerpt about New Search on desktop and web, not app surfaces.
- Communicated rollout status for Germany and Italy, plus the next planned rollout wave for Belgium, Netherlands, and Austria.
- A short summary of a recent Italy A/B test used in rollout communication.
- Forward-looking intent: establish a 2026 web baseline first, then add more elements later.

#### What this source directly supports

- An internal, edited announcement stated that the new search had “just rolled out” in Germany and Italy and was “live on desktop and web.”
- The same announcement stated that Belgium, Netherlands, and Austria were next, with rollout planned by Feb 12.
- The announcement summarised a recent Italy A/B test as **+7% total dealer leads from the List Page on desktop**, with **mWeb leads stable** and **DPVs stable**.
- The announcement described the +7% desktop result as **statistically significant** and notable given that the test only ran for **one week**.
- The announcement framed the rollout as an intentionally incomplete **2026 baseline**, with later additions such as sticky filters, filter visualisations, recommendations, and more, said to have “strong UXR signals.”

#### Key facts extracted

- The screenshot states that the new search had been rolled out in **Germany and Italy** and was live on **desktop and web**.
- It states that **Belgium, Netherlands, and Austria** were the next rollout markets, planned **by Feb 12**.
- It reports a recent **Italy A/B test** summary: **+7% total dealer leads from the List Page on desktop**.
- It also reports **mWeb leads stable** and **DPVs stable**.
- It explicitly says the desktop result was described as **statistically significant**, while also noting the test only ran for **one week**.
- It frames the release as a **new baseline for 2026**, with some pieces still missing and future additions to follow.

#### Potential claims this could support

- By early Feb 2026, New Search appears to have reached **live web rollout** in at least Germany and Italy, with additional web-market rollout queued next. This should be corroborated with fuller launch evidence.
- The initial web rollout appears to have been justified internally by a **positive Italy desktop dealer-lead signal** and **stable mWeb / DPV signals**, rather than by a broad all-surface win. This needs the underlying benchmark/deep-dive before being used as a strong outcome claim.
- The web rollout strategy appears to have been **baseline-first**: ship a simpler version, then layer on additional features already supported by prior UXR. This is strategic intent, not proof those later features shipped.

#### What this source does **not** prove

- It does **not** prove the exact launch date, rollout percentage, or whether the rollout was fully complete across all Germany/Italy traffic at the moment of posting.
- It does **not** prove the experiment design, sample size, KPI definitions, or statistical calculations behind the **+7%** statement.
- It does **not** prove that Germany saw the same measured results as Italy, or that Belgium / Netherlands / Austria actually launched on the planned date.
- It does **not** prove improvement on mWeb or DPVs. It only says those were stable in the summary.
- It does **not** prove any individual role, ownership, or contribution, including yours.
- It does **not** prove that the mentioned future additions were later delivered or drove measurable impact.
- It does **not** justify assuming that this single announcement is stronger evidence than a benchmark readout, analytics export, or release log.

#### Evidence strength

- **Current rating**: High
- **Why**: Launch announcement from PM, Greg Hamill.

#### Risks / limitations

- Metric statements are summary-level only. Terms such as **dealer leads**, **List Page**, **DPVs**, and **statistically significant** are not defined in this file.
- The file overlaps heavily with **NS-S18**, so there is a risk of treating duplicated communication as separate evidence.
- Relative to the broader corpus, this looks like a low-strength communication artefact rather than a primary experiment or shipping source.

#### Follow-up needed

- Use **NS-S18** as the fuller companion source to confirm whether this screenshot corresponds to the Feb 5, 2026 Germany/Italy rollout note.
- Find the underlying **web benchmark / deep-dive** for the Italy A/B test to validate the +7% desktop claim, stable mWeb/DPV outcomes, test duration, and KPI definitions.
- Find release or rollout evidence for **Germany and Italy go-live**, plus later **Belgium / Netherlands / Austria** rollout completion.
- If the “strong UXR signals” line matters, locate the actual UXR artefacts for sticky filters, filter visualisations, recommendations, and related web features.

#### Notes for case study use

- Best used as a **supporting exhibit** for shipped web work: it shows how the team internally communicated that rollout was live and how the first result signal was framed.
- It is clearly **web-only** evidence (desktop + mWeb). Do not use it to support iOS, Android, or cross-stream claims.
- It can help support a case-study point about **sequencing**: launching a baseline first, then adding stronger UX features later. But that point remains partly interpretive without the fuller rollout and UXR sources.
- It is **not strong enough on its own** for principal-level claims about business impact, rollout completeness, or your specific role.
- In the corpus, it sits as a corroborative artefact between **NS-S15** (pre-launch web status/planning) and **NS-S18** (fuller web launch summary).

### NS-S18. 16.email_new_web_search_launch_update_12.03.2026.rtfd.zip

#### Source metadata

- **Source ID**: NS-S18
- **Source Name**: 16.email_new_web_search_launch_update_12.03.2026.rtfd.zip
- **Source Type**: Internal launch/status communication bundle (Web stream; the file body contains email-style content plus Slack references)
- **Origin**: Custom project file; RTFD export of internal AutoScout24 communications
- **Platform / Surface**: Desktop, Mweb (explicit benchmark/launch sections are cars-only; non-car list pages appear only as a next step)
- **Approx Date**: Feb-Mar 2026; 4 Feb 2026 and 5 Feb 2026 are explicit in the body, while 12 Mar 2026 is inferred from the filename rather than shown in a visible header

#### What this source covers

- A late-stage web rollout evidence bundle rather than raw analytics.
- At least **three communications**: a later undated launch note for **Belgium / Netherlands / Austria**, a **5 Feb 2026** launch email for **Germany / Italy**, and a **4 Feb** bi-weekly web status update.
- Coverage is primarily **web**: rollout chronology, a high-level **Italy benchmark summary**, rollout plans for additional markets/vehicle types, and forward-looking framing for the **2026 baseline**.

#### What this source directly supports

- By **5 Feb 2026**, an internal launch email said the new search had been rolled out in **Germany and Italy** and was live on **desktop and web**.
- That same email reports summary results from a recent **Italy old-vs-new benchmark**: **+7% total dealer leads from the List Page on desktop**, described as statistically significant; **mWeb leads stable**; **DPVs stable**.
- The embedded **4 Feb** status update says the Italy benchmark covered **cars only** on **mobile web and desktop**, that initial signals showed new search was **as performant as the old search**, and that a completed **deep-dive** was expected by **9 Feb**.
- The top undated note states that new search had launched on **mobile web and desktop** to **Belgium, Netherlands, and Austria (cars only)**, with rollout to **remaining markets** and **non-car List Pages** targeted by the end of the following week.
- The source frames the launch as a deliberately incomplete **baseline for 2026**, with future additions such as **sticky filters**, **filter visualisations**, and **recommendations** to be added later.

#### Key facts extracted

- A visible email header shows **From: Gregory Hamill**, **Date: Thursday, 5. February 2026 at 18:26**, **Subject: [Launch announcement] New Search Experience**.
- The 5 Feb email says new search is live in **Germany and Italy** on **desktop and web**, with **Belgium / Netherlands / Austria** planned by **12 Feb**, and all other markets and vehicle types targeted by **18 Feb**.
- The same email gives a summary of Italy benchmark results: **+7% total dealer leads from the List Page on desktop**; **mWeb leads stable**; **DPVs stable**. The +7% is explicitly described as **statistically significant** and notable because the test only ran for **one week**.
- The **4 Feb** bi-weekly update says benchmarking in Italy was completed for **cars only** on **mobile web and desktop**, initial signals showed the new search was **as performant as the old search**, and a full **deep-dive** would be shared later.
- That same 4 Feb update includes a contextual note that **Android and iOS users already had the new search experience everywhere, including whitelabels**. This is ancillary context, not the main subject of the file.
- The top note says the new search was launched to **Belgium, Netherlands, and Austria** on **mobile web and desktop** for **cars only**, and lists the next step as rolling out to **remaining markets** and **non-car List Pages** such as **Motos**.

#### Potential claims this could support

- The **web stream** moved from Italy benchmarking into a **phased rollout**, with **Germany / Italy** live first and **Belgium / Netherlands / Austria** added later for **cars only**.
- Web launch decisions appear to have been made on the basis of a **high-level performance check** showing **no overall deterioration** plus a positive **desktop dealer-lead signal in Italy**. This claim should still be backed by the promised deep-dive before using it as a principal-level evidence point.
- The team intentionally shipped a **baseline version** first and planned to layer in validated enhancements later. This supports a **phased delivery strategy** claim, not a claim that those later enhancements were already shipped.
- By Feb-Mar 2026, the web work was clearly in a **shipped / rollout** phase rather than a concept-only phase.

#### What this source does **not** prove

- It does **not** prove that the top Belgium / Netherlands / Austria note was actually sent on **12 Mar 2026**. That date comes from the filename, not a visible date header in the body.
- It does **not** prove the **full experiment design**, sample sizes, market segmentation, KPI definitions, or confidence details beyond the single “statistically significant” statement for the +7% desktop dealer-lead result.
- It does **not** prove that all **remaining markets** and **non-car List Pages** were actually launched on the promised timeline.
- It does **not** prove the underlying **UX research evidence** behind statements about sticky filters, filter visualisations, or recommendations.
- It does **not** prove the portfolio owner’s **individual role**, ownership, or decision authority.
- It does **not** turn this into a true **cross-stream** source. The app note is contextual only, while the substantive evidence remains web-specific.

#### Evidence strength

- **Current rating**: Moderate
- **Why**: It contains explicit rollout statements, one explicit email date, named markets, and concrete summary metrics. But it is still an internal communication bundle rather than a raw benchmark readout or release log; it mixes shipped facts with future plans; one launch note is undated in-body; and the promised deep-dive is not attached.

#### Risks / limitations

- The artifact is a **composite export**, so chronology has to be reconstructed from embedded messages rather than read from one clean document.
- The file body mixes **email formatting**, Slack-channel references, and update text, so the original communication context is somewhat blurred.
- The performance evidence is **summary-level only**. “Stable” is not quantified, and the source does not include raw tables, denominators, or methodology.
- The top launch note is **partially incomplete** as evidence: no visible sender line, no visible send date, and formatting noise from emoji / RTF export.
- An embedded image (**unknown.png**) is present, so some visual context may be missing from the text extraction.
- This source likely **overlaps with NS-S17**, so there is a duplication risk if both are treated as independent proof.

#### Follow-up needed

- Find the promised **Italy deep-dive** or benchmark readout that was expected by **9 Feb 2026**.
- Find release / rollout evidence confirming the **Belgium / Netherlands / Austria** launch date and whether rollout to **remaining markets** and **non-car List Pages** actually completed.
- If using the **+7% dealer leads** figure in a case study, pair it with KPI definitions, experiment design details, and ideally the full metric table.
- Verify whether the top launch note was actually sent on **12 Mar 2026** or merely stored under that filename.
- If this needs to support a personal portfolio claim, find a separate source that shows the portfolio owner’s actual **role or contribution**.

#### Notes for case study use

- Strongest use: **web launch chronology** plus **summary-level business outcome framing** for **Italy desktop**.
- Safe wording is narrow: for example, “an internal Feb 2026 launch update reported **+7% desktop dealer leads from the List Page in Italy**, with **mWeb leads** and **DPVs stable**.” Do not generalise this to all web markets or all lead types without the deep-dive.
- This source is useful to show **shipped work** on web and a **phased baseline strategy**, but not to prove final rollout completeness or the impact of later enhancements.
- Business impact evidence here is limited but explicit. **UX evidence is only referenced**, not shown. Treat the future-feature paragraph as **intent informed by prior UXR**, not as shipped proof or direct UX-learning evidence.
- Do not use sign-offs, general thanks, or sender names as evidence of the portfolio owner’s contribution.
- When reusing this source, cite the specific sub-message carefully: **4 Feb status update**, **5 Feb launch email**, or **later undated BE/NL/AT note**. The file should not be treated as one cleanly dated single message.
