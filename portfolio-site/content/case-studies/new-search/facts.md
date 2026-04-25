# facts.md

## 1. Corpus control check

`0.source-index` was reviewed directly and used as the control file for canonical source IDs, canonical source names, source types, and platform/surface normalization.

Source naming in the pasted `source-analyses.md` aligns cleanly with the index for `NS-S02` through `NS-S18`. `NS-S01` exists in the index but is not represented in the pasted analyses, so it is included in the coverage snapshot only and is not used as evidentiary support below.

There are no off-index analysed sources and no invented source IDs. The main corpus-structure caveats are companion/slice relationships rather than mapping errors: `NS-S05` and `NS-S06` are app/web slices of the same PPTX, `NS-S15` and `NS-S16` are web/Android slices of the same RTFD export, and `NS-S13` and `NS-S14` are companion Android benchmark fragments. Dates below are normalized to best-fit dates where filenames, slide dates, and metadata differ.

Confidence is strongest for iOS benchmark/launch evidence and for web launch communications. Confidence is weaker where the corpus only provides rounded summary metrics, partial Android benchmark fragments, or background numbers cited second-hand inside planning material.

## 2. Source coverage snapshot

| Source ID | Canonical source name                                                           | Stream          | Evidence type      | Represented in pasted source-analyses.md | Notes                                                                                |
| --------- | ------------------------------------------------------------------------------- | --------------- | ------------------ | ---------------------------------------- | ------------------------------------------------------------------------------------ |
| NS-S01    | Chat context dump for New Search case-study scope                               | iOS/Android/Web | Spec               | No                                       | Indexed scoping artifact only; not used as proof.                                    |
| NS-S02    | 1.UXR_research_brief_05.2025.docx                                               | iOS/Android/Web | Research artifact  | Yes                                      | Early multi-surface discovery/planning brief; strong for scope and intent.           |
| NS-S03    | 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx         | iOS             | Experiment readout | Yes                                      | Primary iOS benchmark source; rounded headline and table values differ.              |
| NS-S04    | 3.presentation_search_funnel_team_2025_strategy.pptx                            | iOS/Android/Web | Deck               | Yes                                      | Strategy and prioritisation source; forecasts and roadmap, not shipment proof.       |
| NS-S05    | 4.presentation_search_funnel_team_q4_2025_initiatives.pptx - mobile apps scope  | iOS/Android     | Deck               | Yes                                      | App planning/status slice of the same underlying PPTX as NS-S06.                     |
| NS-S06    | 4.presentation_search_funnel_team_q4_2025_initiatives.pptx - web scope          | Web             | Deck               | Yes                                      | Web planning/status slice of the same underlying PPTX as NS-S05.                     |
| NS-S07    | 5.experiment_v1seach_vs_v2search_notoggle_29.12.2023.pdf                        | iOS             | Experiment readout | Yes                                      | Strong early iOS benchmark/reset source.                                             |
| NS-S08    | 6.report_v1search_vs_v2search_metrics_insights_q4,2022_q3_2023.docx             | iOS/Android     | Experiment readout | Yes                                      | Historical app-lineage source; useful background, mixed contents.                    |
| NS-S09    | 7.experiment_results_ABTEST690_V3_Search_IT_Android_results.xls                 | Android         | Analytics export   | Yes                                      | Strong narrow Android/Italy experiment data; UX variant labels missing.              |
| NS-S10    | 9.experiment_results_iOS_V3_Search.rtfd.zip                                     | iOS             | Experiment readout | Yes                                      | iOS benchmark summary/update; overlaps with NS-S03.                                  |
| NS-S11    | 10.UXR_report_android_v3_search_autosave_vs_manual_save_q2_2025.png             | Android         | Research artifact  | Yes                                      | Android qualitative decision-support source.                                         |
| NS-S12    | 11.launch_announcement_iOS_V3_App_search_02.10.2024.rtfd.zip                    | iOS             | Slack summary      | Yes                                      | iOS launch/rollout communication.                                                    |
| NS-S13    | 13.experiment_results_Android_V3_Search_benchmarking3_image2_21.07.2025.png     | Android         | Screenshot         | Yes                                      | Partial Android benchmark fragment for enquiry-related slices.                       |
| NS-S14    | 14.experiment_results_Android_V3_Search_benchmarking3_image2_21.07.2025.png.png | Android         | Screenshot         | Yes                                      | Partial Android benchmark fragment for DPV/enquiry summary slices.                   |
| NS-S15    | 15.email_android_V3_search_rollout_update_21.05.2025.rtfd.zip - web section     | Web             | Slack summary      | Yes                                      | Web planning/status slice of the same underlying RTFD as NS-S16.                     |
| NS-S16    | 15.email_android_V3_search_rollout_update_21.05.2025.rtfd.zip - Android section | Android         | Slack summary      | Yes                                      | Android benchmark/recommendation/status slice of the same underlying RTFD as NS-S15. |
| NS-S17    | 5.web_search_rollout_result.png                                                 | Web             | Screenshot         | Yes                                      | PM rollout/result announcement screenshot; strong communication-layer evidence.      |
| NS-S18    | 16.email_new_web_search_launch_update_12.03.2026.rtfd.zip                       | Web             | Slack summary      | Yes                                      | Composite web rollout bundle with dated Feb 2026 launch/update messages.             |

## 3. High-confidence facts

### 3.1 Timeline and rollout facts

#### F001

- **Claim:** A live iOS old-vs-new no-toggle benchmark ran from 05 Dec 2023 to 25 Dec 2023 for new users only across all countries.
- **Stream:** iOS
- **Timeframe:** 05 Dec 2023-25 Dec 2023
- **Evidence type:** experiment
- **Support:** single-source
- **Sources:** [NS-S07 5.experiment_v1seach_vs_v2search_notoggle_29.12.2023.pdf]
- **Why this is safe:** The readout explicitly states the dates, platform, audience, and benchmark setup.
- **Caveats:** This proves the test ran; it does not by itself prove root cause or later shipment.

#### F002

- **Claim:** An early filter/search-mask research brief scoped multi-surface discovery work across desktop, mWeb, iOS, and Android to inform Q1/Q2 experiment prioritisation.
- **Stream:** iOS/Android/Web
- **Timeframe:** Jan 2024
- **Evidence type:** UXR
- **Support:** single-source
- **Sources:** [NS-S02 1.UXR_research_brief_05.2025.docx]
- **Why this is safe:** The brief directly states the surfaces, problem area, and intended decision use.
- **Caveats:** It is a planning artifact, not a findings report.

#### F003

- **Claim:** By 28 Aug 2024, the iOS benchmark readout had selected Variation 2 as the preferred new-search winner over both the old control and Variation 1.
- **Stream:** iOS
- **Timeframe:** 28 Aug 2024
- **Evidence type:** benchmark
- **Support:** corroborated
- **Sources:** [NS-S03 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx; NS-S10 9.experiment_results_iOS_V3_Search.rtfd.zip]
- **Why this is safe:** Both iOS benchmark sources explicitly present Variation 2 as the winner.
- **Caveats:** The benchmark sources alone do not prove rollout completion.

#### F004

- **Claim:** An internal iOS launch announcement states that the new iOS search/filters experience had been fully rolled out to all AutoScout24 markets and white labels.
- **Stream:** iOS
- **Timeframe:** 02 Oct 2024
- **Evidence type:** rollout update
- **Support:** single-source
- **Sources:** [NS-S12 11.launch_announcement_iOS_V3_App_search_02.10.2024.rtfd.zip]
- **Why this is safe:** The launch communication directly states the rollout status and scope.
- **Caveats:** This is communication-layer rollout proof rather than release-log evidence.

#### F005

- **Claim:** A Germany-based Android usability study compared AutoSave and non-AutoSave beta variants during 12 May 2025-19 May 2025.
- **Stream:** Android
- **Timeframe:** 12 May 2025-19 May 2025
- **Evidence type:** UXR
- **Support:** single-source
- **Sources:** [NS-S11 10.UXR_report_android_v3_search_autosave_vs_manual_save_q2_2025.png]
- **Why this is safe:** The report states the field phase, country, and variant split explicitly.
- **Caveats:** The study is qualitative and Germany-only.

#### F006

- **Claim:** A later Android rollout update recommends proceeding with the new search using AutoSave and frames rollout to core markets by 08 Aug as the next step.
- **Stream:** Android
- **Timeframe:** Jul-Aug 2025
- **Evidence type:** rollout update
- **Support:** single-source
- **Sources:** [NS-S16 15.email_android_V3_search_rollout_update_21.05.2025.rtfd.zip - Android section]
- **Why this is safe:** The update explicitly states the recommendation and the planned rollout target.
- **Caveats:** This is rollout-plan evidence, not a clean indexed launch artifact.

#### F007

- **Claim:** A dated 05 Feb 2026 web launch email states that new search was live in Germany and Italy on desktop and mWeb.
- **Stream:** Web
- **Timeframe:** 05 Feb 2026
- **Evidence type:** rollout update
- **Support:** corroborated
- **Sources:** [NS-S17 5.web_search_rollout_result.png; NS-S18 16.email_new_web_search_launch_update_12.03.2026.rtfd.zip]
- **Why this is safe:** The same launch state is visible in the PM screenshot and in the fuller communication bundle.
- **Caveats:** The sources do not expose rollout mechanics or traffic percentage.

#### F008

- **Claim:** A later web launch note states that new search launched on desktop and mWeb for Belgium, Netherlands, and Austria, cars only.
- **Stream:** Web
- **Timeframe:** Mar 2026
- **Evidence type:** rollout update
- **Support:** single-source
- **Sources:** [NS-S18 16.email_new_web_search_launch_update_12.03.2026.rtfd.zip]
- **Why this is safe:** The later note explicitly describes that rollout wave and scope.
- **Caveats:** The note’s exact in-body send date is not visible, so Mar 2026 is a best-fit date.

### 3.2 Product and experience facts

#### F009

- **Claim:** The 2024 iOS benchmark compared the old no-toggle control against two new no-toggle variants: one centered on Delete/Clear and one centered on Done/Finish returning the user to the main filter page.
- **Stream:** iOS
- **Timeframe:** Jun-Aug 2024
- **Evidence type:** benchmark
- **Support:** corroborated
- **Sources:** [NS-S03 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx; NS-S10 9.experiment_results_iOS_V3_Search.rtfd.zip; NS-S12 11.launch_announcement_iOS_V3_App_search_02.10.2024.rtfd.zip]
- **Why this is safe:** Multiple iOS sources describe the same interaction distinction.
- **Caveats:** Exact CTA microcopy varies slightly across sources.

#### F010

- **Claim:** The Android V3 work explicitly compared an AutoSave interaction, where filter choices were applied automatically, against a non-AutoSave interaction that required an explicit save action.
- **Stream:** Android
- **Timeframe:** May-Jul 2025
- **Evidence type:** mixed
- **Support:** corroborated
- **Sources:** [NS-S11 10.UXR_report_android_v3_search_autosave_vs_manual_save_q2_2025.png; NS-S13 13.experiment_results_Android_V3_Search_benchmarking3_image2_21.07.2025.png; NS-S14 14.experiment_results_Android_V3_Search_benchmarking3_image2_21.07.2025.png.png; NS-S16 15.email_android_V3_search_rollout_update_21.05.2025.rtfd.zip - Android section]
- **Why this is safe:** Both qualitative and quantitative Android materials distinguish the same interaction pattern.
- **Caveats:** Variant naming is not perfectly consistent across all materials.

#### F011

- **Claim:** The iOS launch materials show the shipped experience covering the main filter overview, make/model, online-since, equipment with free-text search, and location.
- **Stream:** iOS
- **Timeframe:** Oct 2024
- **Evidence type:** rollout update
- **Support:** single-source
- **Sources:** [NS-S12 11.launch_announcement_iOS_V3_App_search_02.10.2024.rtfd.zip]
- **Why this is safe:** The launch artifact includes embedded UI screenshots across those areas.
- **Caveats:** The screenshots illustrate communicated UI scope, not a full product spec.

#### F012

- **Claim:** The web launch communications frame the web release as a deliberate 2026 baseline, with sticky filters, filter visualisations, recommendations, and related additions planned later.
- **Stream:** Web
- **Timeframe:** Feb-Mar 2026
- **Evidence type:** rollout update
- **Support:** corroborated
- **Sources:** [NS-S17 5.web_search_rollout_result.png; NS-S18 16.email_new_web_search_launch_update_12.03.2026.rtfd.zip]
- **Why this is safe:** Both web launch communications describe the release as an intentionally incomplete baseline.
- **Caveats:** These sources do not prove those later additions shipped.

#### F013

- **Claim:** The iOS rollout rationale included reduced code complexity and faster future experimentation, not only KPI improvement.
- **Stream:** iOS
- **Timeframe:** Aug-Oct 2024
- **Evidence type:** mixed
- **Support:** corroborated
- **Sources:** [NS-S03 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx; NS-S12 11.launch_announcement_iOS_V3_App_search_02.10.2024.rtfd.zip]
- **Why this is safe:** Both sources explicitly describe codebase simplification and future-testing speed as part of the rationale.
- **Caveats:** This is stated internal rationale, not a measured long-run engineering-impact study.

### 3.3 Experiment and metrics facts

#### F014

- **Claim:** The 2024 iOS benchmark deck headlines the winning variant at about +5% users with an enquiry from List Page.
- **Stream:** iOS
- **Timeframe:** 28 Aug 2024
- **Evidence type:** benchmark
- **Support:** single-source
- **Sources:** [NS-S03 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx]
- **Why this is safe:** The deck explicitly presents that rounded PA-analysis headline for the winning variant.
- **Caveats:** The visible table in the same evidence chain shows a lower exact figure.

#### F015

- **Claim:** Internal iOS materials headline the winning 2024 benchmark at about +6% total enquiries/leads from List Page.
- **Stream:** iOS
- **Timeframe:** Aug 2024-2025 strategy reuse
- **Evidence type:** mixed
- **Support:** corroborated
- **Sources:** [NS-S03 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx; NS-S04 3.presentation_search_funnel_team_2025_strategy.pptx]
- **Why this is safe:** The benchmark deck and later strategy deck both reuse the rounded +6% framing.
- **Caveats:** Other iOS summaries round the same outcome lower, so this should be treated as headline framing rather than a reconciled exact value.

#### F016

- **Claim:** The same iOS benchmark reports no change in total Detail Page Views from List Page for the winning variant.
- **Stream:** iOS
- **Timeframe:** Aug-Sep 2024
- **Evidence type:** benchmark
- **Support:** corroborated
- **Sources:** [NS-S03 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx; NS-S10 9.experiment_results_iOS_V3_Search.rtfd.zip]
- **Why this is safe:** Both benchmark summaries report the same total-DPV outcome.
- **Caveats:** This is benchmark-period evidence, not a post-rollout outcome.

#### F017

- **Claim:** The iOS benchmark summaries report that private listings outperformed dealer listings on several KPI cuts.
- **Stream:** iOS
- **Timeframe:** Aug-Sep 2024
- **Evidence type:** benchmark
- **Support:** corroborated
- **Sources:** [NS-S03 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx; NS-S10 9.experiment_results_iOS_V3_Search.rtfd.zip]
- **Why this is safe:** Both iOS summaries explicitly state the same segment pattern.
- **Caveats:** The full underlying segment tables are not present in the visible corpus.

#### F018

- **Claim:** The Android benchmark/recommendation update says AutoSave kept dealer and private leads stable in Germany and Italy, produced a +12% new-user enquiry/conversion signal in Germany, and that no-AutoSave underperformed in Germany.
- **Stream:** Android
- **Timeframe:** Jul-Aug 2025
- **Evidence type:** benchmark
- **Support:** corroborated
- **Sources:** [NS-S13 13.experiment_results_Android_V3_Search_benchmarking3_image2_21.07.2025.png; NS-S16 15.email_android_V3_search_rollout_update_21.05.2025.rtfd.zip - Android section]
- **Why this is safe:** The update text and Android benchmark fragment align on the key Germany AutoSave and no-AutoSave signals.
- **Caveats:** The full benchmark deck is not available in the analysed set.

#### F019

- **Claim:** In the Italy Android workbook, `variation_1` produced no statistically significant enquiry uplift at the 5% level and showed statistically significant declines on several browsing/list-page interaction metrics.
- **Stream:** Android
- **Timeframe:** 2025
- **Evidence type:** experiment
- **Support:** single-source
- **Sources:** [NS-S09 7.experiment_results_ABTEST690_V3_Search_IT_Android_results.xls]
- **Why this is safe:** The workbook contains explicit metric deltas and p-values supporting that pattern.
- **Caveats:** The workbook does not identify what UX variant `variation_1` represents.

#### F020

- **Claim:** The Feb 2026 web launch communications summarise the recent Italy old-vs-new benchmark as +7% total dealer leads from the List Page on desktop, with mWeb leads stable and DPVs stable.
- **Stream:** Web
- **Timeframe:** Feb 2026
- **Evidence type:** rollout update
- **Support:** corroborated
- **Sources:** [NS-S17 5.web_search_rollout_result.png; NS-S18 16.email_new_web_search_launch_update_12.03.2026.rtfd.zip]
- **Why this is safe:** The same result summary appears in both the PM screenshot and the fuller web launch bundle.
- **Caveats:** This is summary-level benchmark evidence; the promised deep-dive is not attached.

### 3.4 UXR and user behaviour facts

#### F021

- **Claim:** The early multi-surface UXR brief planned to prioritise experiments through review of recordings where users interacted with the search mask.
- **Stream:** iOS/Android/Web
- **Timeframe:** Jan 2024
- **Evidence type:** UXR
- **Support:** single-source
- **Sources:** [NS-S02 1.UXR_research_brief_05.2025.docx]
- **Why this is safe:** The planned method is explicitly stated in the brief.
- **Caveats:** This documents intended method, not completed research output.

#### F022

- **Claim:** That same brief treated search/filter usability as four distinct experiences across desktop, mWeb, iOS, and Android.
- **Stream:** iOS/Android/Web
- **Timeframe:** Jan 2024
- **Evidence type:** UXR
- **Support:** single-source
- **Sources:** [NS-S02 1.UXR_research_brief_05.2025.docx]
- **Why this is safe:** The brief explicitly frames the problem that way.
- **Caveats:** It is a discovery-framing document, not proof of outcome.

#### F023

- **Claim:** The Android UXR report says both variants were generally well received, but AutoSave created less friction and fewer user errors, and the recommendation was to move forward with AutoSave plus refinements.
- **Stream:** Android
- **Timeframe:** May 2025
- **Evidence type:** UXR
- **Support:** single-source
- **Sources:** [NS-S11 10.UXR_report_android_v3_search_autosave_vs_manual_save_q2_2025.png]
- **Why this is safe:** The report summary and recommendation state this directly.
- **Caveats:** The study is qualitative and based on 10 German participants.

#### F024

- **Claim:** In the Android UXR study, all 5 AutoSave participants failed to notice that filters were saved automatically, and some non-AutoSave participants exited via the back arrow expecting autosave.
- **Stream:** Android
- **Timeframe:** May 2025
- **Evidence type:** UXR
- **Support:** single-source
- **Sources:** [NS-S11 10.UXR_report_android_v3_search_autosave_vs_manual_save_q2_2025.png]
- **Why this is safe:** These participant-count findings are stated directly in the report.
- **Caveats:** They are small-sample qualitative observations.

#### F025

- **Claim:** The iOS benchmark summaries report Germany-specific behaviour shifts under the variants, with lower Body Type/Fuel Type/First Registration usage and higher Location/Equipment/Price Label usage.
- **Stream:** iOS
- **Timeframe:** Aug-Sep 2024
- **Evidence type:** benchmark
- **Support:** corroborated
- **Sources:** [NS-S03 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx; NS-S10 9.experiment_results_iOS_V3_Search.rtfd.zip]
- **Why this is safe:** Both iOS summaries describe the same directional usage shifts.
- **Caveats:** The underlying analysis tables are not included.

### 3.5 Strategy and organisational facts

#### F026

- **Claim:** The 2025 Search Funnel strategy deck sets a +10% dealer-lead objective.
- **Stream:** iOS/Android/Web
- **Timeframe:** 2025
- **Evidence type:** strategy
- **Support:** single-source
- **Sources:** [NS-S04 3.presentation_search_funnel_team_2025_strategy.pptx]
- **Why this is safe:** The objective is stated directly in the deck.
- **Caveats:** This is a target, not an achieved result.

#### F027

- **Claim:** `New baseline search` is a named initiative under `Efficient search execution` in the 2025 strategy deck.
- **Stream:** iOS/Android/Web
- **Timeframe:** 2025
- **Evidence type:** strategy
- **Support:** single-source
- **Sources:** [NS-S04 3.presentation_search_funnel_team_2025_strategy.pptx]
- **Why this is safe:** The initiative is explicitly named and placed in the strategy structure.
- **Caveats:** Strategy naming does not prove delivery on every platform.

#### F028

- **Claim:** The 2025 strategy deck models New Baseline Search as a +2.5% total-leads opportunity and Filter Discoverability & Usability as a +1.2% total-leads opportunity.
- **Stream:** iOS/Android/Web
- **Timeframe:** 2025
- **Evidence type:** strategy
- **Support:** single-source
- **Sources:** [NS-S04 3.presentation_search_funnel_team_2025_strategy.pptx]
- **Why this is safe:** Those expected-value figures are stated directly in the deck.
- **Caveats:** They are forecast values, not measured outcomes.

#### F029

- **Claim:** The Oct 2024 planning deck ties New baseline search to a supporting KR of increasing dealer enquiry conversion from the List Page by 5%.
- **Stream:** iOS/Android/Web
- **Timeframe:** Oct 2024
- **Evidence type:** strategy
- **Support:** corroborated
- **Sources:** [NS-S05 4.presentation_search_funnel_team_q4_2025_initiatives.pptx - mobile apps scope; NS-S06 4.presentation_search_funnel_team_q4_2025_initiatives.pptx - web scope]
- **Why this is safe:** Both platform slices of the planning deck state the same supporting KR.
- **Caveats:** This is a planning target, not an outcome.

### 3.6 Platform-specific facts

#### F030

- **Claim:** The 2024 iOS benchmark was limited to new users in DE, AT, IT, NL, BE, FR, SP, and GB.
- **Stream:** iOS
- **Timeframe:** Jun-Aug 2024
- **Evidence type:** benchmark
- **Support:** single-source
- **Sources:** [NS-S03 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx]
- **Why this is safe:** The deck explicitly lists both the audience restriction and the market set.
- **Caveats:** Existing users were not part of this benchmark.

#### F031

- **Claim:** The Italy Android analytics workbook is limited to `market = it`, `platform = android`, and `device_category = mobile`.
- **Stream:** Android
- **Timeframe:** 2025
- **Evidence type:** experiment
- **Support:** single-source
- **Sources:** [NS-S09 7.experiment_results_ABTEST690_V3_Search_IT_Android_results.xls]
- **Why this is safe:** Those scope fields are explicit in the workbook.
- **Caveats:** The workbook does not establish cross-market or cross-platform generalisability.

#### F032

- **Claim:** The Feb 2026 web benchmark/launch communications are cars-only for desktop and mWeb.
- **Stream:** Web
- **Timeframe:** Feb 2026
- **Evidence type:** rollout update
- **Support:** single-source
- **Sources:** [NS-S18 16.email_new_web_search_launch_update_12.03.2026.rtfd.zip]
- **Why this is safe:** The dated 04 Feb and 05 Feb web updates explicitly scope the benchmark and rollout to cars.
- **Caveats:** This does not prove later non-car rollout timing.

### 3.7 Cross-stream facts

#### F033

- **Claim:** The available corpus shows staggered stream progression rather than one simultaneous launch: iOS benchmark and rollout evidence in 2024, Android UXR/benchmark/recommendation evidence in 2025, and web rollout communications in 2026.
- **Stream:** iOS/Android/Web
- **Timeframe:** 2024-2026
- **Evidence type:** mixed
- **Support:** corroborated
- **Sources:** [NS-S03 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx; NS-S12 11.launch_announcement_iOS_V3_App_search_02.10.2024.rtfd.zip; NS-S16 15.email_android_V3_search_rollout_update_21.05.2025.rtfd.zip - Android section; NS-S18 16.email_new_web_search_launch_update_12.03.2026.rtfd.zip]
- **Why this is safe:** The dated sources line up into a consistent staged timeline across streams.
- **Caveats:** The visible Android corpus tops out at recommendation/status evidence rather than a dedicated launch artifact.

#### F034

- **Claim:** Both early discovery material and later strategy material frame search/filter usability as a multi-surface problem spanning app and web.
- **Stream:** iOS/Android/Web
- **Timeframe:** 2024-2025
- **Evidence type:** mixed
- **Support:** corroborated
- **Sources:** [NS-S02 1.UXR_research_brief_05.2025.docx; NS-S04 3.presentation_search_funnel_team_2025_strategy.pptx]
- **Why this is safe:** The discovery brief and strategy deck each combine app and web evidence in their framing.
- **Caveats:** Shared framing does not prove identical designs or outcomes across every surface.

## 4. Moderate-confidence facts

#### F035

- **Claim:** The early UXR brief cites a background List > DPV conversion gap of 45% for web versus 83% for apps.
- **Stream:** iOS/Android/Web
- **Timeframe:** Jan 2024
- **Evidence type:** UXR
- **Support:** single-source
- **Sources:** [NS-S02 1.UXR_research_brief_05.2025.docx]
- **Why this is safe:** The brief explicitly records that comparison as background rationale.
- **Caveats:** The underlying analytics source is not present in the analysed set.

#### F036

- **Claim:** The same brief cites a prior interpretation that the older no-toggle search worked better because users engaged more with top filters and more often reached an `optimal` result range of 20-600 offers.
- **Stream:** iOS/Android/Web
- **Timeframe:** Jan 2024
- **Evidence type:** UXR
- **Support:** single-source
- **Sources:** [NS-S02 1.UXR_research_brief_05.2025.docx]
- **Why this is safe:** The brief explicitly preserves that prior interpretation as background input.
- **Caveats:** This is second-hand reasoning inside a planning brief, not a primary result source.

#### F037

- **Claim:** The Oct 2024 app-planning deck states that Android benchmarking was planned in DE, IT, NL, BE, and AT for both new and existing users, with broader rollout conditional on successful results.
- **Stream:** Android
- **Timeframe:** Oct 2024
- **Evidence type:** strategy
- **Support:** single-source
- **Sources:** [NS-S05 4.presentation_search_funnel_team_q4_2025_initiatives.pptx - mobile apps scope]
- **Why this is safe:** The app-planning slice states the intended benchmark scope and conditional rollout logic.
- **Caveats:** This is plan/status evidence only.

#### F038

- **Claim:** The Oct 2024 web-planning deck states that desktop designs did not pass UXR, mobile-web designs had already been validated, the first phase excluded Make/Model/Variant, and development/benchmarking were targeted for November and January respectively.
- **Stream:** Web
- **Timeframe:** Oct 2024
- **Evidence type:** strategy
- **Support:** single-source
- **Sources:** [NS-S06 4.presentation_search_funnel_team_q4_2025_initiatives.pptx - web scope]
- **Why this is safe:** The web-planning slice states those gating and sequencing decisions directly.
- **Caveats:** It is a planning snapshot, not proof that those dates held.

#### F039

- **Claim:** The iOS benchmark summaries report Germany as the second-best market for the winning variant on users with enquiry from List Page at +12%, with +9% dealer and +19% private.
- **Stream:** iOS
- **Timeframe:** Aug-Sep 2024
- **Evidence type:** benchmark
- **Support:** corroborated
- **Sources:** [NS-S03 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx; NS-S10 9.experiment_results_iOS_V3_Search.rtfd.zip]
- **Why this is safe:** Both iOS summaries repeat the same country-cut claim.
- **Caveats:** The full underlying country table is not attached.

#### F040

- **Claim:** The iOS benchmark summaries report more multi-make and multi-model searches in the variants and say users in Germany spent the most time on Equipment, Zip/City, Model, and Price.
- **Stream:** iOS
- **Timeframe:** Aug-Sep 2024
- **Evidence type:** benchmark
- **Support:** corroborated
- **Sources:** [NS-S03 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx; NS-S10 9.experiment_results_iOS_V3_Search.rtfd.zip]
- **Why this is safe:** The same behaviour summary appears in both iOS result summaries.
- **Caveats:** These are summary-level behavioural interpretations rather than full attached tables.

#### F041

- **Claim:** A dated 04 Feb 2026 web status update said initial Italy benchmark signals showed the new search was as performant as the old search and that a full deep-dive would follow by 09 Feb.
- **Stream:** Web
- **Timeframe:** 04 Feb 2026
- **Evidence type:** rollout update
- **Support:** single-source
- **Sources:** [NS-S18 16.email_new_web_search_launch_update_12.03.2026.rtfd.zip]
- **Why this is safe:** The dated status message states both the initial read and the planned follow-up.
- **Caveats:** The later +7% desktop summary is more specific, and the promised deep-dive is not included.

#### F042

- **Claim:** The historical app-lineage report indicates that earlier Android search-mask work showed positive signals while multiple earlier iOS iterations hurt top-line lead metrics but repeatedly improved saved searches.
- **Stream:** iOS/Android
- **Timeframe:** Q4 2022-Q3 2023
- **Evidence type:** mixed
- **Support:** single-source
- **Sources:** [NS-S08 6.report_v1search_vs_v2search_metrics_insights_q4,2022_q3_2023.docx]
- **Why this is safe:** The retrospective report directly summarises that earlier app history.
- **Caveats:** It is a mixed historical compilation, not the strongest primary source for exact earlier metrics.

#### F043

- **Claim:** The iOS launch announcement rounds benchmark impact as +4% total enquiries from List Page during benchmarking.
- **Stream:** iOS
- **Timeframe:** Oct 2024
- **Evidence type:** rollout update
- **Support:** conflicting
- **Sources:** [NS-S12 11.launch_announcement_iOS_V3_App_search_02.10.2024.rtfd.zip]
- **Why this is safe:** The launch communication explicitly uses that rounded figure.
- **Caveats:** Other iOS materials round the same benchmark higher or show lower table-level values.

#### F044

- **Claim:** The later web launch note says rollout to remaining markets and non-car List Pages was targeted for the end of the following week.
- **Stream:** Web
- **Timeframe:** Mar 2026
- **Evidence type:** rollout update
- **Support:** single-source
- **Sources:** [NS-S18 16.email_new_web_search_launch_update_12.03.2026.rtfd.zip]
- **Why this is safe:** The note explicitly states that next-step timing.
- **Caveats:** This is future-plan language inside a launch note, not proof of completion.

## 5. Low-confidence or provisional claims

#### F045

- **Claim:** The iOS 2024 benchmark likely ran on a Jun-Aug 2024 schedule anchored by 25 Jun and 12 Aug.
- **Stream:** iOS
- **Timeframe:** Jun-Aug 2024
- **Evidence type:** benchmark
- **Support:** conflicting
- **Sources:** [NS-S03 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx]
- **Why this is safe:** Those dates are visible in the deck and are the best-fit anchors available.
- **Caveats:** The same deck also contains conflicting duration framing, so exact runtime should not be treated as settled.

#### F046

- **Claim:** Hidden slides in the 2025 strategy deck include updated roadmap snapshots and a separate `New baseline search web` item.
- **Stream:** iOS/Android/Web
- **Timeframe:** 2025
- **Evidence type:** strategy
- **Support:** single-source
- **Sources:** [NS-S04 3.presentation_search_funnel_team_2025_strategy.pptx]
- **Why this is safe:** The analysis records those hidden slides as present in the deck.
- **Caveats:** Hidden working slides are weaker evidence than the visible presentation narrative.

#### F047

- **Claim:** The Android benchmark fragment suggests the Italy AutoSave row shows no significant change across the visible enquiry-related columns.
- **Stream:** Android
- **Timeframe:** Jul 2025
- **Evidence type:** benchmark
- **Support:** single-source
- **Sources:** [NS-S13 13.experiment_results_Android_V3_Search_benchmarking3_image2_21.07.2025.png]
- **Why this is safe:** The visible Italy AutoSave cells are described as readable in that direction.
- **Caveats:** The screenshot is cropped and incomplete.

#### F048

- **Claim:** A companion Android benchmark fragment suggests a -4% leftmost-metric signal for Germany no-AutoSave and a -2% leftmost-metric signal for Italy AutoSave, with most other visible cells stable.
- **Stream:** Android
- **Timeframe:** Jul 2025
- **Evidence type:** benchmark
- **Support:** single-source
- **Sources:** [NS-S14 14.experiment_results_Android_V3_Search_benchmarking3_image2_21.07.2025.png.png]
- **Why this is safe:** Those visible cells are described as legible in the analysis.
- **Caveats:** The screenshot is partial, row labels are incomplete, and exact metric names must be inferred from the crop.

#### F049

- **Claim:** Milestone screenshots inside the mid-2025 update bundle suggest specific Jul-Sep 2025 development, benchmarking, analysis, and rollout windows for Android and web.
- **Stream:** iOS/Android/Web
- **Timeframe:** Jul-Sep 2025
- **Evidence type:** rollout update
- **Support:** single-source
- **Sources:** [NS-S15 15.email_android_V3_search_rollout_update_21.05.2025.rtfd.zip - web section; NS-S16 15.email_android_V3_search_rollout_update_21.05.2025.rtfd.zip - Android section]
- **Why this is safe:** The analyses extract those windows from embedded milestone screenshots.
- **Caveats:** The dates are image-derived and the bundle’s file-level dating is not clean.

## 6. Conflicts, ambiguities, and unresolved points

- **The point of disagreement or ambiguity:** The 2024 iOS benchmark does not resolve to one clean reusable result number.
  **Sources involved:** [NS-S03 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx; NS-S10 9.experiment_results_iOS_V3_Search.rtfd.zip; NS-S12 11.launch_announcement_iOS_V3_App_search_02.10.2024.rtfd.zip; NS-S04 3.presentation_search_funnel_team_2025_strategy.pptx]
  **What can be said safely:** Internal materials consistently frame the winning iOS benchmark as an enquiry improvement from List Page, commonly rounded to about +5% users with enquiry and +6% total enquiries/leads, with later launch messaging also using a lower rounded figure.
  **What should not be claimed yet:** One unreconciled exact iOS headline number without noting that the deck headline, table, strategy reuse, and launch summary do not fully align.

- **The point of disagreement or ambiguity:** Exact iOS benchmark runtime/duration is not settled.
  **Sources involved:** [NS-S03 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx]
  **What can be said safely:** The benchmark belongs in the Jun-Aug 2024 period and was read out on 28 Aug 2024.
  **What should not be claimed yet:** That the test duration was definitively 21 days or definitively 42 days.

- **The point of disagreement or ambiguity:** The Android Italy workbook does not map `variation_1` to a named UX variant.
  **Sources involved:** [NS-S09 7.experiment_results_ABTEST690_V3_Search_IT_Android_results.xls; NS-S11 10.UXR_report_android_v3_search_autosave_vs_manual_save_q2_2025.png; NS-S13 13.experiment_results_Android_V3_Search_benchmarking3_image2_21.07.2025.png; NS-S16 15.email_android_V3_search_rollout_update_21.05.2025.rtfd.zip - Android section]
  **What can be said safely:** The workbook shows one Android variation underperforming on several metrics, while other Android sources separately discuss AutoSave versus non-AutoSave.
  **What should not be claimed yet:** That `variation_1` in the workbook is definitively AutoSave or definitively non-AutoSave.

- **The point of disagreement or ambiguity:** Android Benchmarking #3 is represented by a recommendation update and partial screenshot fragments rather than a full indexed readout.
  **Sources involved:** [NS-S13 13.experiment_results_Android_V3_Search_benchmarking3_image2_21.07.2025.png; NS-S14 14.experiment_results_Android_V3_Search_benchmarking3_image2_21.07.2025.png.png; NS-S16 15.email_android_V3_search_rollout_update_21.05.2025.rtfd.zip - Android section]
  **What can be said safely:** AutoSave was the recommended Android direction and the visible Germany signals were better than no-AutoSave.
  **What should not be claimed yet:** A complete Android benchmark story with full methodology, all rows, and fully reconciled market/segment tables.

- **The point of disagreement or ambiguity:** The later Belgium/Netherlands/Austria web launch note has no visible in-body date header.
  **Sources involved:** [NS-S18 16.email_new_web_search_launch_update_12.03.2026.rtfd.zip]
  **What can be said safely:** It belongs after the 05 Feb 2026 Germany/Italy launch email and describes a later rollout wave.
  **What should not be claimed yet:** An exact send date for that note without qualification.

- **The point of disagreement or ambiguity:** The visible Android corpus ends at recommendation/status evidence rather than a dedicated indexed launch communication.
  **Sources involved:** [NS-S11 10.UXR_report_android_v3_search_autosave_vs_manual_save_q2_2025.png; NS-S13 13.experiment_results_Android_V3_Search_benchmarking3_image2_21.07.2025.png; NS-S16 15.email_android_V3_search_rollout_update_21.05.2025.rtfd.zip - Android section]
  **What can be said safely:** The Android stream reached UXR, benchmarking, recommendation, and rollout-planning stages in the visible corpus.
  **What should not be claimed yet:** A corpus-proven Android launch date or post-launch impact number from the analysed source set.

- **The point of disagreement or ambiguity:** Several high-value background claims in the early UXR brief are cited context rather than primary evidence.
  **Sources involved:** [NS-S02 1.UXR_research_brief_05.2025.docx]
  **What can be said safely:** The brief shows what background assumptions and inputs were guiding early discovery work.
  **What should not be claimed yet:** That those background numbers or interpretations are independently verified by the brief itself.

## 7. Claims excluded from the fact base

- **Claim:** New Search improved every stream in one unified launch.
  **Why excluded:** The evidence shows staged stream progression, not one simultaneous cross-platform launch.
  **What evidence would be needed to upgrade it:** A cross-stream release record or all-platform rollout summary.

- **Claim:** The `45% web vs 83% app` List > DPV comparison is a verified baseline metric for the case study.
  **Why excluded:** It appears only as cited background in the early UXR brief.
  **What evidence would be needed to upgrade it:** The primary analytics source behind that comparison.

- **Claim:** `variation_1` in the Italy Android workbook is the AutoSave variant, or the non-AutoSave variant.
  **Why excluded:** The workbook does not label its UX variants in product terms.
  **What evidence would be needed to upgrade it:** A mapped experiment readout or ticket linking workbook arms to named variants.

- **Claim:** The exact iOS 2024 benchmark result can be stated as one definitive unreconciled number.
  **Why excluded:** The benchmark deck headline, table figures, strategy reuse, and launch summary do not fully agree.
  **What evidence would be needed to upgrade it:** The underlying experiment canvas, PA tables, or source-of-truth analytics output.

- **Claim:** All remaining web markets and non-car List Pages definitely launched on the timing promised in the later web note.
  **Why excluded:** The corpus only shows intent/next-step language for that final rollout wave.
  **What evidence would be needed to upgrade it:** A dated follow-up launch or release artifact confirming completion.

## 8. Strongest reusable facts for later writing

- **F001:** A live iOS old-vs-new no-toggle benchmark ran from 05 Dec 2023 to 25 Dec 2023 for new users only across all countries.
  **Why it matters:** It gives the case study a concrete pre-reset benchmark anchor.
  **Sources:** [NS-S07 5.experiment_v1seach_vs_v2search_notoggle_29.12.2023.pdf]

- **F003:** By 28 Aug 2024, the iOS benchmark readout had selected Variation 2 as the preferred winner.
  **Why it matters:** This is the key transition from failed earlier direction to the later rollout path.
  **Sources:** [NS-S03 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx; NS-S10 9.experiment_results_iOS_V3_Search.rtfd.zip]

- **F014:** The 2024 iOS benchmark deck headlines the winning variant at about +5% users with an enquiry from List Page.
  **Why it matters:** It is the strongest reusable rounded top-line user-enquiry signal for the successful iOS benchmark.
  **Sources:** [NS-S03 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx]

- **F015:** Internal iOS materials headline the winning 2024 benchmark at about +6% total enquiries/leads from List Page.
  **Why it matters:** This is the rounded business-facing benchmark framing that later strategy material reuses.
  **Sources:** [NS-S03 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx; NS-S04 3.presentation_search_funnel_team_2025_strategy.pptx]

- **F016:** The same iOS benchmark reports no change in total Detail Page Views from List Page for the winning variant.
  **Why it matters:** It preserves nuance and prevents overselling the iOS win as uniform across every KPI.
  **Sources:** [NS-S03 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx; NS-S10 9.experiment_results_iOS_V3_Search.rtfd.zip]

- **F004:** An internal iOS launch announcement states that the new iOS search/filters experience had been fully rolled out to all AutoScout24 markets and white labels.
  **Why it matters:** This is the strongest shipped-state evidence for the iOS stream.
  **Sources:** [NS-S12 11.launch_announcement_iOS_V3_App_search_02.10.2024.rtfd.zip]

- **F013:** The iOS rollout rationale included reduced code complexity and faster future experimentation, not only KPI improvement.
  **Why it matters:** It supports a stronger portfolio story about platform reset and future leverage, not just one benchmark win.
  **Sources:** [NS-S03 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx; NS-S12 11.launch_announcement_iOS_V3_App_search_02.10.2024.rtfd.zip]

- **F023:** The Android UXR report says both variants were generally well received, but AutoSave created less friction and fewer user errors, and the recommendation was to move forward with AutoSave plus refinements.
  **Why it matters:** It gives the Android story a defensible design-rationale layer.
  **Sources:** [NS-S11 10.UXR_report_android_v3_search_autosave_vs_manual_save_q2_2025.png]

- **F024:** In the Android UXR study, all 5 AutoSave participants failed to notice that filters were saved automatically, and some non-AutoSave participants exited expecting autosave.
  **Why it matters:** It shows that even the preferred Android direction still had unresolved clarity issues.
  **Sources:** [NS-S11 10.UXR_report_android_v3_search_autosave_vs_manual_save_q2_2025.png]

- **F018:** The Android benchmark/recommendation update says AutoSave kept dealer and private leads stable in Germany and Italy, produced a +12% new-user enquiry/conversion signal in Germany, and that no-AutoSave underperformed in Germany.
  **Why it matters:** It is the strongest concise summary of why AutoSave was preferred in the Android benchmark phase.
  **Sources:** [NS-S13 13.experiment_results_Android_V3_Search_benchmarking3_image2_21.07.2025.png; NS-S16 15.email_android_V3_search_rollout_update_21.05.2025.rtfd.zip - Android section]

- **F019:** In the Italy Android workbook, `variation_1` produced no statistically significant enquiry uplift at the 5% level and showed statistically significant declines on several browsing/list-page interaction metrics.
  **Why it matters:** It keeps the Android evidence honest and prevents over-claiming outcome certainty from the visible corpus.
  **Sources:** [NS-S09 7.experiment_results_ABTEST690_V3_Search_IT_Android_results.xls]

- **F020:** The Feb 2026 web launch communications summarise the recent Italy benchmark as +7% total dealer leads from the List Page on desktop, with mWeb leads stable and DPVs stable.
  **Why it matters:** This is the clearest reusable web outcome signal in the analysed set.
  **Sources:** [NS-S17 5.web_search_rollout_result.png; NS-S18 16.email_new_web_search_launch_update_12.03.2026.rtfd.zip]

- **F007:** A dated 05 Feb 2026 web launch email states that new search was live in Germany and Italy on desktop and mWeb.
  **Why it matters:** It is the strongest dated rollout anchor for the web stream.
  **Sources:** [NS-S17 5.web_search_rollout_result.png; NS-S18 16.email_new_web_search_launch_update_12.03.2026.rtfd.zip]

- **F012:** The web launch communications frame the web release as a deliberate 2026 baseline, with richer enhancements planned later.
  **Why it matters:** It supports a phased-delivery narrative rather than an all-at-once launch story.
  **Sources:** [NS-S17 5.web_search_rollout_result.png; NS-S18 16.email_new_web_search_launch_update_12.03.2026.rtfd.zip]

- **F026:** The 2025 Search Funnel strategy deck sets a +10% dealer-lead objective.
  **Why it matters:** It anchors New Search inside a broader business target rather than as an isolated UX cleanup.
  **Sources:** [NS-S04 3.presentation_search_funnel_team_2025_strategy.pptx]

- **F027:** `New baseline search` is a named initiative under `Efficient search execution` in the 2025 strategy deck.
  **Why it matters:** It confirms that New Search was formal roadmap work, not ad hoc iteration.
  **Sources:** [NS-S04 3.presentation_search_funnel_team_2025_strategy.pptx]

- **F028:** The 2025 strategy deck models New Baseline Search as a +2.5% total-leads opportunity.
  **Why it matters:** It captures the internal business case while keeping forecast and outcome separate.
  **Sources:** [NS-S04 3.presentation_search_funnel_team_2025_strategy.pptx]

- **F033:** The available corpus shows staggered stream progression: iOS benchmark/rollout evidence in 2024, Android benchmark/recommendation evidence in 2025, and web rollout communications in 2026.
  **Why it matters:** It gives `overview.md` a defensible chronology without flattening platform differences.
  **Sources:** [NS-S03 2.experiment_benchmarking_v2search_vs_v3search_overview_28.08.2024.pptx; NS-S12 11.launch_announcement_iOS_V3_App_search_02.10.2024.rtfd.zip; NS-S16 15.email_android_V3_search_rollout_update_21.05.2025.rtfd.zip - Android section; NS-S18 16.email_new_web_search_launch_update_12.03.2026.rtfd.zip]

- **F034:** Both early discovery material and later strategy material frame search/filter usability as a multi-surface problem spanning app and web.
  **Why it matters:** It supports a portfolio narrative that links the streams through a shared problem space while preserving stream-specific evidence.
  **Sources:** [NS-S02 1.UXR_research_brief_05.2025.docx; NS-S04 3.presentation_search_funnel_team_2025_strategy.pptx]
