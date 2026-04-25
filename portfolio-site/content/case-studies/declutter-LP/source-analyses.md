# Source Analyses

## S01 — 1.declutter-deepdive-09.10.2024.xlsx

# Source Analysis: 1.declutter-deepdive-09.10.2024

## Relevance

- **Direct**
- **Why**
  - The filename explicitly says **declutter deepdive**.
  - The workbook measures **listpagecard** baseline/variant performance, including **gallery-forward behavior**, **finance funnel**, and **ad impressions/clicks**.
  - The reference index classifies S01 as an **“XLSX analytics deepdive”** and **“likely foundational quantitative analysis.”**

## Confirmed facts

- **Dates**
  - File metadata shows:
    - **Created:** 2024-10-08 10:46:26
    - **Modified:** 2024-10-09 06:58:58

  - The reference index lists the source as **Oct 2024**.

- **People**
  - No people are named in the visible sheet content.
  - File metadata lists **lastModifiedBy: Tino Kapolka**.
  - No author, owner, PM, or collaborator is named in the workbook content.

- **Project names / aliases**
  - Filename: **1.declutter-deepdive-09.10.2024.xlsx**
  - Sheet names:
    - **Gallery forward**
    - **DE Fnce funnel**
    - **ad impressions**

  - The ad sheet explicitly uses **listpagecard=Baseline / Variant1 / Variant2**.

- **Scope**
  - The workbook contains three analysis slices:
    - **DE vs IT gallery-forward behavior**
    - **DE finance funnel**
    - **DE ad impressions / clicks**

  - **DE and IT** are compared in the gallery-forward sheet.
  - **Only DE** appears in the finance funnel and ad impression sheets.
  - The workbook compares:
    - **base / Var 1** in the gallery sheet
    - **Base / Var1 / Var2** in the finance sheet
    - **Baseline / Variant1 / Variant2** in the ad sheet

  - The workbook does **not** define what those variants changed in the UI.

- **Problem framing**
  - There is **no explicit written problem statement** in the workbook.
  - There is **no explicit hypothesis statement** in the workbook.
  - The workbook is metric-first rather than narrative.

- **Business context**
  - The source does not only track browsing behavior.
  - It also tracks:
    - **Finance entries**
    - **Finance completions**
    - **Ad impressions**
    - **Ad clicks**
    - **Click rate**

  - This confirms that the analysis included **commercial / funnel-side measures**, not just interaction measures.

- **Metrics**
  - **Gallery forward — DE**
    - Base: **45,000** users in experiment; **21,059** used “Gallery, Go Forward”; **46.80%** usage; **2,400,000** go-forward events; **113.97** go-forwards per gallery user.
    - Var 1: **43,500** users; **19,125** used it; **43.97%** usage; **2,660,000** go-forward events; **139.08** go-forwards per gallery user.
    - The sheet explicitly shows **-6.05%** relative change in **% users who used Gallery, Go Forward** for DE Var 1 vs base.

  - **Gallery forward — IT**
    - Base: **42,000** users in experiment; **23,731** used “Gallery, Go Forward”; **56.50%** usage; **2,997,000** go-forward events; **126.29** go-forwards per gallery user.
    - Var 1: **40,600** users; **22,273** used it; **54.86%** usage; **3,305,000** go-forward events; **148.39** go-forwards per gallery user.
    - The sheet explicitly shows **-2.91%** relative change in **% users who used Gallery, Go Forward** for IT Var 1 vs base.

  - **DE vs IT differences shown in the sheet**
    - Baseline:
      - DE vs IT difference in **% users who used gallery forward**: **-0.0970**
      - DE vs IT difference in **go-forwards per gallery user**: **-9.76%**

    - Var 1:
      - DE vs IT difference in **% users who used gallery forward**: **-0.1089**
      - DE vs IT difference in **go-forwards per gallery user**: **-6.27%**

  - **DE finance funnel**
    - Base: **1,385** finance entries; **12** completions; **0.866%** funnel completion CVR.
    - Var1: **891** entries; **16** completions; **1.796%** CVR; **+107.26%** relative change vs baseline.
    - Var2: **906** entries; **15** completions; **1.656%** CVR; **+91.09%** relative change vs baseline.

  - **DE ad impressions — detail page**
    - Baseline: **171,556** impressions; **918** clicks; **0.5351%** clickrate.
    - Variant1: **190,912** impressions; **1,059** clicks; **0.5547%** clickrate.
    - Variant2: **251,029** impressions; **1,247** clicks; **0.4968%** clickrate.

  - **DE ad impressions — list page**
    - Baseline: **424,391** impressions; **450** clicks; **0.1060%** clickrate.
    - Variant1: **476,727** impressions; **455** clicks; **0.09544%** clickrate.
    - Variant2: **527,051** impressions; **492** clicks; **0.09335%** clickrate.

  - **DE ad impressions — total block shown in sheet**
    - Base: **595,947** impressions; **1,368** clicks; **0.2296%** click rate.
    - Var1: **667,639** impressions; **+12.03%** vs baseline; **1,514** clicks; **0.2268%** click rate.
    - Var2: **778,080** impressions; **+30.56%** vs baseline; **1,739** clicks; **0.2235%** click rate; displayed click-rate change **-2.64%** vs baseline.

- **Tradeoffs visible in the numbers**
  - In **DE and IT**, Var 1 reduces the **share of users using gallery-forward**, while increasing **go-forwards per gallery user**.
  - In the **DE finance funnel**, both variants show **fewer entries** than base but **more completions** and higher **completion CVR**.
  - In **DE ad totals**, both variants show **more impressions** and **more clicks** than base, while overall **click rate is lower**.

- **Validation**
  - This source is a **quantitative comparison** of experimental groups.
  - The gallery sheet explicitly labels **“Users in experiment.”**
  - No significance testing, p-values, or confidence intervals are shown.

- **Decisions / outcomes**
  - The workbook contains **no explicit recommendation**.
  - It contains **no declared winning variant**.
  - It contains **no rollout decision**.
  - It contains **no explicit success criteria**.

- **Constraints**
  - Variant definitions are **missing**.
  - Platform is **not stated**.
  - Exact filter values are **not fully exposed** in the ad sheet; the pivot headers show **“(Multiple Items)”**.
  - Finance completions are based on **very small absolute counts**: 12 / 16 / 15.

## Possible facts / inferences

- **This was likely an early diagnostic / decision-support analysis rather than a final rollout document.**
  - Confidence: **High**
  - Why: Oct 2024 timing, raw workbook structure, no narrative, no recommendation.

- **The declutter work was likely being evaluated partly through gallery prominence / gallery behavior.**
  - Confidence: **Medium**
  - Why: one sheet is titled **“Gallery forward”**, but the workbook does not explain the actual UI change.

- **The project was likely being judged against commercial side-effects, not only interaction behavior.**
  - Confidence: **High**
  - Why: the workbook includes finance funnel and ad impression/click metrics alongside gallery behavior.

- **DE may have been the primary market at this stage, with IT used as a comparison market rather than a fully parallel evaluation.**
  - Confidence: **Medium**
  - Why: IT appears only in the gallery sheet; finance and ad sheets are DE-only.

- **Var2 may have been introduced or analysed later / more narrowly than Var1.**
  - Confidence: **Medium**
  - Why: Var2 appears in DE finance and ad sheets, but not in the gallery sheet and not in IT.

## My role

- **What this source suggests I personally owned or drove**
  - This source does **not** identify your role.
  - It does **not** show your name, authorship, ownership, or decision responsibility.
  - It does **not** name you in connection with the analysis, variants, or outcomes.

- **What appears to have been owned by others**
  - Ownership is **not determinable** from the source.
  - The only named individual is **Tino Kapolka** in file metadata as **lastModifiedBy**, but that does **not** prove authorship or ownership.
  - No PM, analyst, designer, or stakeholder is named in the visible workbook content.

## Key evidence

- **Reference index context**
  - S01 is described as:
    - **“XLSX analytics deepdive”**
    - **“Very high - likely foundational quantitative analysis”**
    - **“Early DE/IT variant comparisons; gallery-forward behavior; finance funnel; ad impressions; variant-level uplift”**

- **Workbook metadata**
  - Created **2024-10-08**
  - Modified **2024-10-09**
  - lastModifiedBy **Tino Kapolka**

- **Source wording / labels**
  - **“Gallery forward”**
  - **“DE Fnce funnel”**
  - **“ad impressions”**
  - **“Users in experiment”**
  - **“Relative change Funnel CVR (vs baseline)”**
  - **“listpagecard=Baseline / Variant1 / Variant2”**

- **Specific cells / values**
  - Gallery forward DE:
    - **F4 = 0.46798**, **F5 = 0.43966**, **F6 = -0.06052**
    - **H4 = 113.97**, **H5 = 139.08**

  - Gallery forward IT:
    - **F11 = 0.56502**, **F12 = 0.54860**, **F13 = -0.02907**
    - **H11 = 126.29**, **H12 = 148.39**

  - Finance funnel:
    - **E3 = 0.008664**
    - **E4 = 0.017957**, **F4 = 1.07258**
    - **E5 = 0.016556**, **F5 = 0.91087**

  - Ad totals:
    - **J4 = 595,947**, **M4 = 0.0022955**
    - **J5 = 667,639**, **K5 = 0.12030**, **M5 = 0.0022677**
    - **J6 = 778,080**, **K6 = 0.30562**, **M6 = 0.0022350**, **N6 = -0.02636**

## Useful for

- **Business context**
  - Useful, because it shows the work was being measured against **finance** and **ad** metrics, not only browsing metrics.

- **Problem**
  - Limited usefulness. There is **no explicit problem statement**.

- **Diagnosis**
  - Strong. This is the best part of the source.

- **Approach**
  - Limited. It confirms variants existed, but not what changed.

- **Key decisions**
  - Limited. It shows what was measured, not what was decided.

- **Tradeoffs**
  - Strong. The workbook clearly shows behaviour / finance / ads moving in different directions.

- **Validation**
  - Strong. This is explicit experiment / analytics evidence.

- **Outcomes**
  - Limited. It has metric outcomes, but not final decisions or rollout outcomes.

- **Strategic importance**
  - Supporting, not standalone. It helps establish early quantitative rationale, but not org-level importance by itself.

## Risks / possible confusion

- The workbook is **directly relevant**, but it is easy to over-interpret.
- It does **not** define what **Baseline / Var1 / Var2** mean in design terms.
- It does **not** state the platform.
- It does **not** mention:
  - **cognitive load**
  - **Search Funnel**
  - **Buyer Experience**
  - **Greg Hamill**
  - your name

- That makes it risky to use for narrative claims about the project’s framing or your ownership.
- This source is **narrower and earlier** than later rollout / overview decks. It should not be treated as a complete project summary.
- Two of the three tabs are **finance / ad** analyses, so it could be confused with adjacent monetisation or partner-impact work unless paired with a broader source.
- There is at least one **data-hygiene issue** in the ad sheet:
  - **N5** is labelled as change in click rate vs baseline, but the stored formula is inconsistent with the label.
  - Using the visible totals, Var1 click rate is slightly **lower** than baseline, even though the displayed change cell is positive.
  - That specific metric should be treated cautiously.

## Confidence

- **Medium**
- **Why**
  - High confidence that this is a **direct, early quantitative source** for the declutter/listpagecard work.
  - Lower confidence for anything about:
    - exact design changes
    - platform
    - ownership
    - collaborators
    - final decision-making

  - The workbook is strong for **metrics and tradeoffs**, but weak for **role, framing, and narrative context**.

...

## S02 — 2.ABTEST674-DE-desktop-test-results-03.01.2026.xlsx

# Source Analysis: 2.ABTEST674-DE-desktop-test-results-03.01.2026

## Relevance

- Direct
- Why
  - Cross-source context in the uploaded rollout decks explicitly lists this file as `[Desktop] test #1 DE: CD-978 ABTEST674 Declutter DE Desktop Web_results.xlsx`.
  - The workbook itself is a results file for `abtest_id = 674`, scoped to `market = de`, `platform = web`, `device_category = desktop`.
  - It is still a late-stage validation/results artifact, not a core framing or design-rationale doc.

## Confirmed facts

- Dates
  - Filename date: `03.01.2026`
  - Workbook metadata: created `2025-07-10`, last modified `2026-04-02`
  - `Check24 data` raw tab spans `2025-05-19` to `2025-07-20`
  - The workbook does not state an explicit start/end date for the main DE desktop experiment.

- People
  - No people are named in the sheet content.
  - Workbook metadata shows `lastModifiedBy = Anna Michalczyk`.
  - No mention of Greg Hamill.

- Project names / aliases
  - `abtest_id = 674`
  - Arms are `baseline`, `variation_1`, `variation_2`
  - No variant names or UI labels appear inside the workbook.

- Scope / setup
  - Main tabs:
    - `search events - all`
    - `search events - new vs return`
    - `search cvr - all`
    - `search cvr - new vs return`
    - `gallery swipe`
    - `finance events`
    - `finance cvr`
    - `Check24 results`
    - `Check24 data`

  - Main experiment sample sizes are roughly even:
    - baseline `631,282`
    - variation_1 `632,181`
    - variation_2 `630,303`

  - Main tabs are explicitly `de / web / desktop`.

- Goals / measured outcomes
  - The workbook measures:
    - search/list-page browsing depth (`dpvs_*`)
    - list-page-originated browsing depth (`dpvs_*_from_lp_*`)
    - enquiries and contact actions (`total_enquiries_*`, `mail_success_*`, `call_select_*`)
    - gallery behaviour (`gallery_swipe_on_lp_*`)
    - finance / partner interactions (`finance_*`, `finance_partner_*`, `fb_preapproval_*`, `procheck_*`, `check24_*`)

  - No primary KPI is explicitly marked.

- Outcomes: search / browsing depth
  - The only conclusive search outcomes in `search cvr - all` are DPV/view-depth metrics.
  - `dpvs_total_unique_cvr`
    - baseline `0.7596`
    - variation_1 `0.7693` (`+1.29%`, significant)
    - variation_2 `0.7358` (`-3.13%`, significant)

  - `dpvs_total_from_lp_unique_cvr`
    - baseline `0.7385`
    - variation_1 `0.7490` (`+1.42%`, significant)
    - variation_2 `0.7130` (`-3.45%`, significant)

  - Event-count versions show the same direction:
    - `dpvs_total_unique_cnt`: baseline `6.7103`, variation_1 `7.0821` (`+5.54%`), variation_2 `6.0746` (`-9.47%`)
    - `dpvs_total_from_lp_unique_cnt`: baseline `5.7314`, variation_1 `6.1111` (`+6.63%`), variation_2 `5.1398` (`-10.32%`)

- Outcomes: enquiry / lead metrics
  - Core enquiry conversion metrics are explicitly labelled `overall test inconclusive - variation results only directional`.
  - Examples:
    - `total_enquiries_dp_cvr`
      - baseline `0.019389`
      - variation_1 `-0.58%` (`p=0.645`)
      - variation_2 `-1.70%` (`p=0.177`)

    - `enquiry_total_from_lp_cvr`
      - baseline `0.015502`
      - variation_1 `+0.17%` (`p=0.902`)
      - variation_2 `-0.33%` (`p=0.818`)

    - `mail_success_total_from_lp_cvr`
      - baseline `0.013751`
      - variation_1 `-0.86%` (`p=0.569`)
      - variation_2 `-0.21%` (`p=0.887`)

  - The workbook includes power estimates, and these are low on several enquiry metrics. Example:
    - `total_enquiries_dp_cvr` power: `0.0747` for variation_1, `0.2714` for variation_2

- Outcomes: gallery behaviour
  - `gallery swipe` tab shows extreme differences:
    - baseline: `116,174` unique vehicles swiped on LP; `249,019` swipe events
    - variation_1: `3,829` unique vehicles swiped; `6,997` swipe events
    - variation_2: `2,148,547` unique vehicles swiped; `2,745,223` swipe events

  - Same tab reports:
    - `mean_dpv`: baseline `6.7103`; variation_1 `+5.54%`; variation_2 `-9.47%`
    - `mean_reported_dpv`: baseline `6.8563`; variation_1 `+3.36%`; variation_2 `+28.33%`

- Outcomes: finance / partner metrics
  - Many finance metrics are labelled `overall test conclusive - variation results can be interpreted`.
  - Representative examples:
    - `finance_select_cvr`
      - variation_1 `+1.38%` (`p=0.0499`)
      - variation_2 `+4.91%` (`p=4.57e-12`)

    - `finance_select_list_page_cvr`
      - variation_1 `-10.84%` (`p=5.44e-23`)
      - variation_2 `+6.14%` (`p=8.08e-08`)

    - `finance_partner_select_list_page_cvr`
      - variation_1 `+14.29%`
      - variation_2 `+40.82%`

    - `fb_preapproval_select_list_page_cvr`
      - variation_1 `+3.31%` (not significant)
      - variation_2 `+28.97%` (significant)

    - `procheck_select_list_page_cvr`
      - variation_1 `+21.59%`
      - variation_2 `+49.58%`

    - `check24_select_cvr`
      - variation_1 `-20.18%`
      - variation_2 `-20.59%`

    - `check24_select_list_page_cvr`
      - variation_1 `-56.05%`
      - variation_2 `-55.75%`

  - Some downstream finance metrics are negative:
    - `fb_preapproval_last_step_cvr`
      - variation_1 `-13.12%` (`p=0.046`)
      - variation_2 `-13.32%` (`p=0.043`)

    - `finance_partner_last_step_cvr`
      - variation_2 `-9.59%` (`p=0.028`)
      - overall test still marked inconclusive

- Outcomes: segmented (`is_new_user`)
  - The workbook splits results by `is_new_user = 0` and `is_new_user = 1`.
  - Approximate segment sample sizes:
    - `is_new_user = 0`: ~`183k` per arm
    - `is_new_user = 1`: ~`448k` per arm

  - DPV conversion metrics are significantly up in variation_1 and down in variation_2 in both segments.
  - Additional segmented effects:
    - `is_new_user = 0`, `mail_success_dp_cvr`: variation_1 `-4.47%` (`p=0.019`)
    - `is_new_user = 1`, `call_select_dp_cvr`: variation_1 `+12.84%` (`p=0.0095`)
    - `is_new_user = 1`, `call_select_total_from_lp_cvr`: variation_1 `+15.86%` (`p=0.0064`)

- Check24-specific results
  - `Check24 results` tab says:
    - `Visits To Results Conversion`
      - baseline `19.15%`
      - variation_1 `24.64%` (`+28.69%`, significant)
      - variation_2 `27.96%` (`+46.06%`, significant)

    - `Results per user assigned to the experiment`
      - baseline `0.008562`
      - variation_1 `0.008263` (`-3.49%`, not significant)
      - variation_2 `0.008813` (`+2.93%`, not significant)

- Constraints / absences
  - No hypothesis text
  - No design rationale
  - No before/after visuals
  - No explicit winner / launch decision
  - Desktop web `call_dial_*` and `call_success_*` metrics are effectively zero across arms

## Possible facts / inferences

- This workbook is a later direct validation artifact in the Declutter programme, not a core 2024 framing document like S1/S2.
  - Confidence level: High

- The experiment structure was likely: baseline/current card + one “No Gallery” declutter variant + one “Gallery” declutter variant.
  - Why: later rollout decks explicitly discuss desktop as a “With gallery / Without gallery” test, and this workbook has one variant with near-zero LP gallery swipes and one with massive LP gallery swipes.
  - Confidence level: High

- Variation_1 is likely the “No Gallery” variant, and variation_2 is likely the “Gallery” variant.
  - Why: variation_1 almost eliminates LP swipes and raises DPVs; variation_2 massively increases LP swipes and lowers DPVs. This matches later desktop guidance that “Gallery” hurt DPVs and “No Gallery” was the likely recommendation.
  - Confidence level: High

- The business trade-off here was not just browsing vs enquiries. It also included finance / insurance / partner performance and probably ad or media effects.
  - Confidence level: High

- The `Check24` appendix may be an attempted workaround for desktop insurance validation rather than a perfectly matched desktop-only analysis.
  - Why: the raw `Check24 data` tab is broader than the main experiment scope.
  - Confidence level: High

## My role

- This source still does **not** support strong claims about my personal ownership.
- No PM, designer, analyst, or researcher is named in the sheet content.
- It does not show who defined the hypothesis, selected the variants, or made the go/no-go decision.
- The only named person attached to the file is metadata-only: `lastModifiedBy = Anna Michalczyk`.
- I would not use this source to claim that I personally owned:
  - the experiment design
  - the metric framework
  - the analysis
  - the desktop rollout decision

- What appears to have been owned by others
  - Not attributable from this source alone

## Key evidence

- `abtest_id = 674`, `market = de`, `platform = web`, `device_category = desktop`
- Exact workbook language:
  - `overall test conclusive - variation results can be interpreted`
  - `overall test inconclusive - variation results only directional`

- Search depth / browsing evidence:
  - `dpvs_total_unique_cvr` baseline `0.7596` -> variation_1 `0.7693` -> variation_2 `0.7358`
  - `dpvs_total_from_lp_unique_cvr` baseline `0.7385` -> variation_1 `0.7490` -> variation_2 `0.7130`

- Enquiry evidence:
  - `total_enquiries_dp_cvr` baseline `0.019389`; variation_1 `-0.58%`; variation_2 `-1.70%`

- Gallery evidence:
  - `gallery_swipe_on_lp_unique_vehicle_guid_cnt`: baseline `116,174`; variation_1 `3,829`; variation_2 `2,148,547`

- Partner / monetisation trade-off evidence:
  - `finance_select_list_page_cvr`: variation_1 `-10.84%`; variation_2 `+6.14%`
  - `finance_partner_select_list_page_cvr`: variation_1 `+14.29%`; variation_2 `+40.82%`
  - `check24_select_list_page_cvr`: variation_1 `-56.05%`; variation_2 `-55.75%`

- Check24 downstream evidence:
  - `Conversion Visit to Results`: baseline `19.15%`; variation_1 `24.64%`; variation_2 `27.96%`
  - `Results per User`: not significant for either variation

## Useful for

- Validation
  - Very strong

- Outcomes
  - Very strong

- Trade-offs
  - Very strong

- Business context
  - Moderate; it shows what downstream surfaces were important enough to measure

- Approach
  - Moderate; it shows segmentation and evaluation structure, but not the design process

- Problem
  - Weak; no problem statement

- Diagnosis
  - Weak; no explicit diagnosis of why the old card was problematic

- Key decisions
  - Weak; no explicit winner/decision recorded in the workbook

- Strategic importance
  - Moderate; the breadth of guardrail metrics suggests org-level stakes

## Risks / possible confusion

- This is now clearly direct to the Declutter desktop workstream, but it is **not** the best source for core framing. S2 is still more important for problem framing and design decisions.
- It should not be confused with S1/S2-era narrative artifacts. This is a later metrics workbook.
- Variant names are still opaque inside the workbook.
- The `Check24` tabs are broader than the main `de/web/desktop` scope and could be over-read.
- Metric definitions are not fully explained:
  - `mean_dpv` vs `mean_reported_dpv`
  - `check24_select_*` declines while `Visit to Results Conversion` improves

- Because later decks framed desktop as a “With gallery / Without gallery” question, this workbook may be easy to conflate with gallery-specific optimisation rather than the broader declutter card programme. In practice it appears to be both.

## Confidence

- High
- Why
  - The workbook is now clearly anchored to the Declutter source family as the DE desktop test #1 results file.
  - It is primary evidence for validation, outcomes, and trade-offs.
  - Its limitations are about framing and ownership, not about whether it belongs to the project.

...

## S03 — 3.ABTEST675-IT-desktop-test-results-26.09.2025.xlsx

# Source Analysis: 3.ABTEST675-IT-desktop-test-results-26.09.2025

## Relevance

- Supporting
- `0.declutter_source_index.xlsx` lists this as S03, describes it as **“High - raw desktop evidence”** and says it contains **“Search/lead events and CVR, gallery swipe, finance events; likely IT desktop counterpart to S02.”**
- The workbook itself matches that description, but it does **not** explicitly say “declutter,” “list page,” or “reduce cognitive load,” and it does **not** describe the tested UI.

## Confirmed facts

- **Dates**
  - Filename date: **26.09.2025**
  - Workbook properties: **created 2025-07-10**, **modified 2025-09-26 14:42:47**
  - No explicit experiment start/end dates are stated

- **People**
  - Workbook metadata: **lastModifiedBy = Ivan Mirchev**
  - No mention of **Greg Hamill** or any other collaborator inside the workbook

- **Project names / aliases**
  - `abtest_id = 675`
  - `market = it`
  - `platform = web`
  - `device_category = desktop`
  - `gallery swipe` sheet explicitly names the arms:
    - `abtest-675-baseline`
    - `abtest-675-variation-1`
    - `abtest-675-variation-2`

- **What the workbook measures**
  - Sheets:
    - `search events - all`
    - `search events - new vs return`
    - `search cvr - all`
    - `search cvr - new vs return`
    - `gallery swipe`
    - `finance events`
    - `finance cvr`
    - `Sheet1` (unlabeled / opaque)
  - Metric families include:
    - enquiries / mail success / call selection
    - DPV-related metrics
    - gallery swipe on list page
    - finance selection metrics
    - partner-specific finance metrics (`agos`, `compass`, `younited`)
  - The workbook does **not** contain a written hypothesis, problem statement, or design description

- **Test structure**
  - This is a **3-arm** test: baseline + 2 variations
  - Overall sample sizes are balanced:
    - baseline: **411,909**
    - variation 1: **412,231**
    - variation 2: **412,348**
  - `search events - new vs return` splits results by `is_new_user = 0 / 1`, but the workbook does not define those values in prose

- **Lead / search outcomes**
  - Major overall lead event counts are **not statistically significant** for either variation:
    - `total_enquiries_dp_cnt`:
      - var1 **+4.8%** (p=0.7506)
      - var2 **+2.9%** (p=0.9007)
    - `mail_success_dp_cnt`:
      - var1 **+4.0%** (p=0.8297)
      - var2 **+2.5%** (p=0.9278)
    - `enquiry_total_from_lp_cnt`:
      - var1 **+3.3%** (p=0.8160)
      - var2 **+0.7%** (p=0.9905)
  - In `search cvr - all`, major lead CVR rows are explicitly labeled:  
    **“overall test inconclusive - variation results only directional”**
  - Variation 2 has statistically significant gains on some **private** CVR rows:
    - `total_enquiries_private_dp_cvr`: **+3.67%** (p=0.0376)
    - `mail_success_private_dp_cvr`: **+4.47%** (p=0.0174)
    - `mail_success_private_from_lp_cvr`: **+3.93%** (p=0.0497)

- **Segmented lead outcomes**
  - In `search cvr - new vs return`, the `is_new_user=1` segment shows significant positive movement for **variation 1** on several lead CVR rows:
    - `total_enquiries_dp_cvr`: **+4.19%** (p=0.0232)
    - `mail_success_dp_cvr`: **+3.97%** (p=0.0423)
    - `total_enquiries_private_dp_cvr`: **+6.54%** (p=0.0166)
    - `mail_success_private_dp_cvr`: **+7.00%** (p=0.0160)
    - `enquiry_total_from_lp_cvr`: **+4.12%** (p=0.0353)
    - `mail_success_total_from_lp_cvr`: **+4.12%** (p=0.0460)
    - `enquiry_private_from_lp_cvr`: **+6.28%** (p=0.0291)
    - `mail_success_private_from_lp_cvr`: **+6.15%** (p=0.0435)
  - In the `is_new_user=0` segment, a significant lead-related row appears for **variation 2**:
    - `mail_success_private_dp_cvr`: **+4.96%** (p=0.0453)

- **DPV outcomes**
  - DPV metrics are materially negative, especially for variation 2:
    - `dpvs_total_unique_cnt`:
      - var1 **-1.39%** (p=0.0641)
      - var2 **-26.32%** (p<0.001)
    - `dpvs_dealer_unique_cnt`:
      - var1 **-1.63%** (p=0.0205)
      - var2 **-26.51%** (p<0.001)
    - `dpvs_total_from_lp_unique_cnt`:
      - var1 **-1.61%** (p=0.0157)
      - var2 **-29.58%** (p<0.001)
    - `dpvs_dealer_from_lp_unique_cnt`:
      - var1 **-1.73%** (p=0.0083)
      - var2 **-30.21%** (p<0.001)
  - In `search cvr - all`, DPV CVR rows are explicitly labeled:  
    **“overall test conclusive - variation results can be interpreted”**
  - DPV CVR declines are significant for both variations:
    - `dpvs_total_unique_cvr`:
      - var1 **-1.27%**
      - var2 **-9.46%**
    - `dpvs_dealer_unique_cvr`:
      - var1 **-1.32%**
      - var2 **-10.78%**
    - `dpvs_total_from_lp_unique_cvr`:
      - var1 **-1.38%**
      - var2 **-10.29%**
    - `dpvs_dealer_from_lp_unique_cvr`:
      - var1 **-1.44%**
      - var2 **-11.83%**

- **Gallery swipe / browsing behavior**
  - `gallery swipe` shows sharply different interaction patterns by variation
  - All listings section:
    - baseline:
      - `gallery_swipe_on_lp_unique_vehicle_guid_cnt = 94,876`
      - `gallery_swipe_on_lp_events_cnt = 193,614`
      - `mean_dpv = 9.125`
      - `mean_reported_dpv = 9.313`
    - variation 1:
      - unique swiped vehicles **4,650**
      - swipe events **8,409**
      - `mean_dpv = 8.999` (**-1.39%**)
      - `mean_reported_dpv = 9.008` (**-3.28%**)
    - variation 2:
      - unique swiped vehicles **3,485,135**
      - swipe events **4,191,007**
      - `mean_dpv = 6.724` (**-26.32%**)
      - `mean_reported_dpv = 13.911` (**+49.37%**)
  - Dealer-only section:
    - baseline `mean_reported_dpv = 8.228`
    - variation 1 `mean_reported_dpv = 8.121` (**-1.30%**)
    - variation 2 `mean_reported_dpv = 6.629` (**-19.43%**)
  - The sheet includes an explicit manual note:
    - **“The above looked bad for the variants, so just to be sure, I ran the same numbers for all listings (and not just for dealers) so please ignore the variable names here”**

- **Finance / partner outcomes**
  - Finance metrics are strongly negative and statistically significant for both variations
  - Overall finance:
    - `finance_select_event_cnt`:
      - var1 **-19.03%**
      - var2 **-19.81%**
    - `finance_select_unique_cnt`:
      - var1 **-20.12%**
      - var2 **-21.54%**
    - `finance_select_cvr`:
      - var1 **-18.12%**
      - var2 **-18.79%**
  - List-page finance:
    - `finance_select_list_page_event_cnt`:
      - var1 **-55.71%**
      - var2 **-48.58%**
    - `finance_select_list_page_unique_cnt`:
      - var1 **-55.85%**
      - var2 **-48.54%**
    - `finance_select_list_page_cvr`:
      - var1 **-54.67%**
      - var2 **-47.47%**
  - Partner-specific rows show similar declines:
    - `agos_select_cvr`:
      - var1 **-24.14%**
      - var2 **-23.42%**
    - `agos_select_list_page_cvr`:
      - var1 **-54.04%**
      - var2 **-46.28%**
    - `compass_select_cvr`:
      - var1 **-25.19%**
      - var2 **-29.19%**
    - `compass_select_list_page_cvr`:
      - var1 **-60.63%**
      - var2 **-58.60%**
  - Finance declines are concentrated in **overall / list-page** rows; afterlead / dealer-list event rows are not significantly negative

- **Constraints / data quirks**
  - Many `call_dial_*` and `call_success_*` rows are **0**
  - Several finance offer rows are **0**
  - `Sheet1` contains unlabeled values only and is not usable without another source
  - The workbook contains **no explicit mapping** from variation 1 / variation 2 to actual UI changes
  - The workbook contains **no explicit recommendation** or ship decision

## Possible facts / inferences

- This is likely part of the desktop declutter/list-card experiment stream for Italy rather than a separate finance-only initiative.
  - **Confidence: High**
- Variation 1 and variation 2 were probably meaningfully different list-page/gallery treatments, not small cosmetic changes.
  - **Confidence: High**
- Variation 1 likely suppressed list-page gallery interaction relative to baseline; variation 2 likely shifted much more interaction into list-page gallery usage.
  - **Confidence: High**
- Finance / partner impact appears to have been a major business constraint in evaluating the test, not just a side metric.
  - **Confidence: High**
- `is_new_user=1` probably means new users, but the workbook does not decode the flag explicitly.
  - **Confidence: Medium**
- Variation 1 appears less damaging than variation 2 on DPV metrics, while also showing more positive segmented lead CVR signals.
  - **Confidence: Medium**

## My role

- This source does **not** identify you, your role, or your ownership.
- It does **not** support a strong claim that you personally designed the variants, owned the test, or made the rollout decision.
- It does **not** name Greg Hamill.
- The only person directly attached to the file is **Ivan Mirchev** via workbook metadata, which indicates file edit history, not ownership of the project.

## Key evidence

- `0.declutter_source_index.xlsx`, S03:
  - **“High - raw desktop evidence”**
  - **“Search/lead events and CVR, gallery swipe, finance events; likely IT desktop counterpart to S02”**
- `search cvr - all`:
  - repeated status text: **“overall test inconclusive - variation results only directional”** on major lead CVR rows
- `finance cvr`:
  - repeated status text: **“overall test conclusive - variation results can be interpreted”** on finance rows
- `gallery swipe!A13`:
  - **“The above looked bad for the variants…”**
- High-signal metric examples:
  - `finance_select_event_cnt`: **-19.0% / -19.8%**
  - `finance_select_list_page_cvr`: **-54.7% / -47.5%**
  - `dpvs_total_from_lp_unique_cnt`: **-1.6% / -29.6%**
  - `search cvr - new vs return`, `is_new_user=1`, `total_enquiries_dp_cvr`: **var1 +4.19% (p=0.0232)**

## Useful for

- Validation
- Outcomes
- Tradeoffs
- Business context
- Key decisions (only as quantitative input, not as explicit decision rationale)

## Risks / possible confusion

- The workbook never explicitly names the project as declutter / list-card / cognitive-load work.
- This is **Italy desktop web only**. It should not be generalized to DE, NL, iOS, or mWeb without another source.
- There are **two unnamed variations**. Do not collapse this into a single desktop declutter treatment unless another source maps the variants to actual designs.
- The `gallery swipe` sheet mixes dealer-only and all-listings analyses and includes a warning to ignore variable names in the rerun section.
- The finance tabs are so extensive that this could be mistaken for a finance-first project; the workbook itself does not say that.
- `Sheet1` is opaque and easy to overinterpret.

## Confidence

- Medium
- Strong source for **raw quantitative outcomes** on Italy desktop.
- Weak source for **problem framing, design description, ownership, decision rationale, and mapping to the final shipped variant**.

...

## S04 — 4.ABTEST662-NL-desktop-test-results-27.08.2025.xlsx

I do not see a separate uploaded file named `0.declutter_source_index` in the available files here, so I’m using the source table you pasted as the context index.

# Source Analysis: 4.ABTEST662-NL-desktop-test-results-27.08.2025

## Relevance

- Adjacent
- The workbook is clearly a real A/B test results export for `abtest_id = 662`, and it is relevant to search/list-page behavior because it tracks LP enquiries, DPVs, gallery swipe, and finance/partner metrics.
- With your source table as context, it does **not** look like a core source for the original Declutter List Cards project. Your high-confidence core sources are 2024 readouts/decks; this file is dated August 2025, contains no explicit `declutter` wording, and does not describe the design change.
- Best use: possible later follow-on / rollout / country-level validation, but only if another source explicitly links ABTEST662 to the declutter workstream.

## Confirmed facts

- **Dates**
  - Source filename date: `27.08.2025`
  - No in-sheet start date, end date, launch date, or rollout date.

- **People**
  - No people are named.
  - Greg Hamill is not mentioned.

- **Project names / aliases**
  - `abtest_id = 662`
  - Gallery sheet uses:
    - `abtest-662-baseline`
    - `abtest-662-variation-1`
    - `abtest-662-variation-2`

- **Scope / setup**
  - All populated sheets record:
    - `market = nl`
    - `platform = web`
    - `device_category = mobile`

  - This directly conflicts with the filename label `desktop`.
  - Main sample sizes are consistent across sheets:
    - baseline: `339,986`
    - variation 1: `338,588`
    - variation 2: `340,588`

- **What the workbook measures**
  - Search/list/detail-page enquiry metrics:
    - `total_enquiries_dp_*`
    - `...from_lp_*`
    - `mail_success_*`
    - `whatsapp_*`
    - `call_select_*`

  - DPV metrics:
    - `dpvs_total_unique_*`
    - `dpvs_total_from_lp_unique_*`
    - dealer/private splits

  - Segmented user analysis:
    - `search events - new vs return`
    - `search cvr - new vs return`
    - field `is_new_user`

  - Gallery swipe metrics:
    - `gallery_swipe_on_lp_unique_vehicle_guid_cnt`
    - `gallery_swipe_on_lp_events_cnt`

  - Finance / partner metrics:
    - `finance_*`
    - `finance_partner_*`
    - `insurance_partner_*`
    - `dtclease_*`
    - `blokweg_*`
    - `anwb_*`

  - Search event sheets also include `*_capped10_cnt` versions.

- **Validation / statistical treatment**
  - The CVR sheets explicitly classify rows as either:
    - `overall test conclusive - variation results can be interpreted`
    - or `overall test inconclusive - variation results only directional`

  - `search cvr - all` contains both conclusive and inconclusive rows.
  - `finance cvr` contains both conclusive and inconclusive rows.
  - Columns include p-values, significance flags, effect size / power fields.

- **Key search/list-page results**
  - Variation 1 improves several core search/list metrics:
    - `total_enquiries_dp_cvr`: `0.02258 -> 0.02483` (`+9.96%`, significant)
    - `enquiry_total_from_lp_cvr`: `0.01720 -> 0.01930` (`+12.21%`, significant)
    - `whatsapp_total_from_lp_cvr`: `0.00583 -> 0.00738` (`+26.54%`, significant)
    - `call_select_total_from_lp_cvr`: `0.00779 -> 0.00879` (`+12.81%`, significant)
    - `dpvs_total_unique_cvr`: `0.57157 -> 0.73554` (`+28.69%`, significant)
    - `dpvs_total_from_lp_unique_cvr`: `0.53294 -> 0.71285` (`+33.76%`, significant)

  - Variation 2 also improves some search metrics, but by smaller amounts:
    - `whatsapp_total_from_lp_cvr`: `+10.75%`, significant
    - `dpvs_total_unique_cvr`: `+6.37%`, significant
    - `dpvs_total_from_lp_unique_cvr`: `+7.71%`, significant
    - `enquiry_total_from_lp_cvr`: `+3.58%`, not significant

  - Dealer-side results are more consistently conclusive than many private-side rows.
  - Negative search tradeoffs exist:
    - Variation 1:
      - `mail_success_dealer_dp_cvr`: `-10.07%`, significant

    - Variation 2:
      - `mail_success_dp_cvr`: `-7.41%`, significant
      - `mail_success_dealer_dp_cvr`: `-12.02%`, significant
      - `mail_success_total_from_lp_cvr`: `-6.47%`, significant
      - `mail_success_dealer_from_lp_cvr`: `-13.15%`, significant

- **Segmented validation**
  - The workbook splits results by `is_new_user = 0` and `is_new_user = 1`.
  - Variation 1 retains positive movement in both segments on core LP / DPV metrics.
    - `enquiry_total_from_lp_cvr`
      - `is_new_user = 0`: `+11.74%`, significant
      - `is_new_user = 1`: `+12.33%`, significant

    - `dpvs_total_from_lp_unique_cvr`
      - `is_new_user = 0`: `+27.97%`, significant
      - `is_new_user = 1`: `+35.42%`, significant

- **Finance / partner results**
  - Variation 1 improves many finance metrics:
    - `finance_select_cvr`: `+19.70%`, significant
    - `finance_select_dp_stage_cvr`: `+21.74%`, significant
    - `finance_select_dp_slice_cvr`: `+25.86%`, significant
    - `finance_select_list_page_cvr`: `+9.77%`, significant
    - `finance_partner_select_cvr`: `+17.56%`, significant
    - `finance_partner_select_dp_slice_cvr`: `+27.89%`, significant
    - `insurance_partner_select_list_page_cvr`: `+27.09%`, significant
    - `anwb_select_list_page_cvr`: `+27.09%`, significant

  - Finance effects are mixed, not uniformly positive:
    - `finance_select_afterlead_cvr`: `-47.79%`, significant
    - `dtclease_select_list_page_cvr`: `-10.53%`, significant
    - In event sheets, some list-page partner metrics drop sharply for variation 1:
      - `finance_partner_select_list_page_event_cnt`: `-18.81%`, significant
      - `dtclease_select_list_page_event_cnt`: `-19.70%`, significant
      - `blokweg_select_list_page_event_cnt`: `-17.79%`, significant

    - Other list-page partner metrics rise:
      - `insurance_partner_select_list_page_event_cnt`: `+23.23%`, significant
      - `anwb_select_list_page_event_cnt`: `+23.23%`, significant

- **Gallery swipe / measurement nuance**
  - There is a dedicated `gallery swipe` sheet.
  - First gallery table:
    - baseline `gallery_swipe_on_lp_unique_vehicle_guid_cnt`: `1,223,184`
    - variation 1: `56,211`
    - variation 2: `1,224,578`

  - Same table:
    - `mean_dpv`
      - baseline: `2.469`
      - variation 1: `5.294` (`+114.42%`)
      - variation 2: `2.957` (`+19.75%`)

    - `mean_reported_dpv`
      - baseline: `5.630`
      - variation 1: `5.431` (`-3.52%`)
      - variation 2: `5.932` (`+5.37%`)

  - The sheet also contains an explicit warning:
    - `Dealers only (ARCHIVED - DO NOT USE - something must be off in event parameters as too few dealers)`

- **Constraints / data quality**
  - The workbook does **not** describe what changed in variation 1 or variation 2.
  - Several zero-incidence metrics are marked inconclusive.
  - One `finance events` row between `finance_partner_select_dp_stage_event_cnt` and `finance_partner_select_list_page_event_cnt` has no metric label.
  - Event sheets and CVR sheets do not always move in the same direction for the same area.

## Possible facts / inferences

- **This is more likely a later follow-on / country-level experiment than a core source for the original declutter project.**
  - Confidence level: High
  - Reason: your core source list points to 2024 declutter docs; this file is August 2025 and lacks explicit declutter language.

- **Variation 1 was probably the stronger candidate inside ABTEST662.**
  - Confidence level: High
  - Reason: it shows larger and more numerous positive significant movements than variation 2 across search and finance sheets.

- **The tested change likely affected gallery/image-swipe behavior on the list page.**
  - Confidence level: Medium
  - Reason: gallery swipe has a dedicated sheet, and variation 1 almost eliminates recorded LP gallery swipes while materially shifting DPV metrics.

- **Finance / partner outcomes were probably being monitored as important business-side outcomes, not just incidental logging.**
  - Confidence level: Medium
  - Reason: two full tabs are dedicated to finance/partner events and CVRs across multiple brands and placements.

- **The filename label `desktop` is likely wrong for this workbook, or this is the wrong export/file name.**
  - Confidence level: High
  - Reason: every populated sheet says `device_category = mobile`.

- **`is_new_user = 1` probably means “new user” and `0` probably means “returning user.”**
  - Confidence level: Medium
  - Reason: implied by the tab name and field name, but not explicitly defined in-sheet.

## My role

- This source does **not** attribute any ownership to you.
- It does **not** support claims that you personally owned:
  - problem framing
  - design decisions
  - experiment setup
  - analysis
  - rollout decisions

- No collaborators or responsible individuals are named.
- Greg Hamill is not mentioned.

## Key evidence

- All populated sheets record `market = nl`, `platform = web`, `device_category = mobile`; this conflicts with the filename’s `desktop`.
- `search cvr - all` repeatedly uses the phrase: `overall test conclusive - variation results can be interpreted`.
- `search cvr - all`
  - `enquiry_total_from_lp_cvr`: `0.01720 -> 0.01930` (`+12.21%`) for variation 1
  - `whatsapp_total_from_lp_cvr`: `0.00583 -> 0.00738` (`+26.54%`) for variation 1
  - `dpvs_total_from_lp_unique_cvr`: `0.53294 -> 0.71285` (`+33.76%`) for variation 1
  - `mail_success_dealer_dp_cvr`: `0.00411 -> 0.00370` (`-10.07%`) for variation 1

- `search cvr - new vs return`
  - `enquiry_total_from_lp_cvr`: `+11.74%` for `is_new_user = 0`, `+12.33%` for `is_new_user = 1` in variation 1

- `finance cvr`
  - `finance_select_cvr`: `+19.70%`
  - `insurance_partner_select_list_page_cvr`: `+27.09%`
  - `dtclease_select_list_page_cvr`: `-10.53%`

- `finance events`
  - `finance_partner_select_list_page_event_cnt`: `-18.81%`
  - `insurance_partner_select_list_page_event_cnt`: `+23.23%`

- `gallery swipe`
  - variation 1 `gallery_swipe_on_lp_unique_vehicle_guid_cnt`: `1,223,184 -> 56,211`
  - explicit warning: `ARCHIVED - DO NOT USE`

## Useful for

- **Validation**
  - Medium, but only if another source explicitly ties ABTEST662 to the declutter workstream.

- **Outcomes**
  - Medium, especially for later-country / later-phase quantitative results.

- **Tradeoffs**
  - Medium. Useful for showing positive search movement alongside negative mail / some finance-side effects.

- **Strategic importance**
  - Low-Medium. The finance tabs show that partner / monetization effects were being monitored.

- **Business context**
  - Low. Only implied by the KPI set.

- **Problem**
  - Low. No explicit problem statement.

- **Diagnosis**
  - Low. Only indirect evidence via what was measured.

- **Approach**
  - Low. No design description.

- **Key decisions**
  - Low. No explicit decision log.

- **My role**
  - Low. No ownership evidence.

## Risks / possible confusion

- The largest risk is treating this as a **core declutter source**. Your reference table suggests the core sources are 2024 readouts/decks, not this 2025 results export.
- The workbook never uses the terms:
  - `declutter`
  - `reduce cognitive load`
  - `list cards`

- It is easy to conflate this file with adjacent workstreams because it mixes:
  - search/list-page outcomes
  - gallery swipe behavior
  - finance / partner metrics

- It may overlap with later rollout work, gallery/image behavior work, or finance-placement work.
- The `desktop` vs `mobile` mismatch is material.
- `ANWB` and `insurance_partner` rows are numerically identical in the finance CVR sheet and near-identical in finance events, which creates interpretation risk.
- The `Dealers only` gallery subsection is explicitly unusable.
- The unlabeled finance-events row is a data-quality issue.

## Confidence

- Low
- The quantitative extraction is reliable.
- The linkage to the core Declutter List Cards case study is not established from this source alone, and your reference table makes it more likely that this workbook is later, supporting, or adjacent rather than core.

...

## S05 — 5.ABTEST695-DE-ios-test2-results-11.12.2025.xlsx

# Source Analysis: 5.ABTEST695-DE-ios-test2-results-11.12.2025

## Relevance

- Supporting
- Why:
  - The reference index maps this file to the declutter project as **S05** and describes it as **“XLSX AB-test results (DE iOS test 2)”** with **“High - raw app validation evidence.”**
  - The workbook itself is a raw experiment-output file for **AB test 695 / DE / iOS / mobile**. It contains validation metrics for search/lead behavior, gallery swipe/DPV behavior, and finance behavior.
  - It does **not** name the project as “Declutter,” “List Page,” or “Reduce Cognitive Load,” and it does not explain the UI/design change.

## Confirmed facts

- Dates
  - Filename date: **11.12.2025**
  - Reference index approx date: **Dec 2025**
  - Workbook properties:
    - created: **2025-07-10 02:11:20**
    - modified: **2025-12-11 10:53:16**
- People
  - No people are named in sheet content.
  - Workbook metadata lists **lastModifiedBy = Tino Kapolka**.
- Project names / aliases
  - `abtest_id = 695` across all sheets.
  - `market = de`, `platform = ios`, `device_category = mobile`.
  - Variations in `gallery swipe` sheet:
    - `abtest-695-baseline`
    - `abtest-695-variant-1`
  - The source filename labels it as **DE iOS test2**.
- Goals
  - No written goal/hypothesis is stated.
  - The workbook measures:
    - search/lead events
    - search/lead CVR
    - new-vs-returning user splits for search metrics
    - gallery swipe / DPV metrics
    - finance events
    - finance CVR
- Decisions
  - No design decision or recommendation is written in the workbook.
  - The experiment compares **one baseline** vs **one variant**.
- Metrics
  - Workbook has **7 sheets**:
    - `search events`
    - `search events - new vs return`
    - `search cvr`
    - `search cvr - new vs return`
    - `gallery swipe`
    - `finance events`
    - `finance cvr`
  - Total sample sizes:
    - baseline: **492,775**
    - variant: **491,725**
  - Search segmentation samples:
    - `is_new_user = 0`: **413,733** baseline / **412,490** variant
    - `is_new_user = 1`: **79,042** baseline / **79,235** variant
  - Strong negative DPV shifts:
    - `dpvs_total_from_lp_unique_cnt`: **6.23269 -> 5.46732** (**-12.28%**, p=1.486435e-158)
    - `dpvs_total_unique_cnt`: **12.02964 -> 11.09931** (**-7.73%**, p=4.963942e-73)
    - `dpvs_total_from_lp_unique_cvr`: **0.612618 -> 0.584922** (**-4.52%**, p=6.449588e-173)
    - `dpvs_total_unique_cvr`: **0.796457 -> 0.776662** (**-2.49%**, p=5.952409e-127)
  - Top-level enquiry metrics are flat / not significant:
    - `total_enquiries_dp_cnt`: **0.149610 -> 0.149209** (**-0.27%**, p=0.9076)
    - `total_enquiries_dp_cvr`: **0.062014 -> 0.061984** (**-0.05%**, p=0.9503)
    - `enquiry_total_from_lp_cvr`: **0.027256 -> 0.026999** (**-0.94%**, p=0.4325)
  - WhatsApp-from-list-page increases significantly:
    - `whatsapp_total_from_lp_cnt`: **0.004976 -> 0.005649** (**+13.54%**, p=9.255587e-04)
    - `whatsapp_total_from_lp_cvr`: **0.004000 -> 0.004484** (**+12.11%**, p=2.174474e-04)
  - Some list-page lead/contact metrics decline significantly:
    - `mail_success_total_from_lp_cvr`: **0.014017 -> 0.013426** (**-4.21%**, p=0.0118)
    - `enquiry_private_from_lp_cvr`: **0.010317 -> 0.009814** (**-4.87%**, p=0.0125)
    - `mail_success_private_from_lp_cvr`: **0.007332 -> 0.006908** (**-5.78%**, p=0.0124)
  - Aggregate call metrics are not significant in the top-level sheets:
    - `call_select_total_from_lp_cnt`: **-0.60%**, p=0.8731
    - `call_dial_total_from_lp_cnt`: **-4.30%**, p=0.3776
    - `call_success_total_from_lp_cnt`: **+2.60%**, p=0.8468
  - Gallery / DPV sheet:
    - `mean_dpv`: **12.02964 -> 11.09931** (**-7.73%**)
    - `mean_reported_dpv`: **43.826326 -> 50.066023** (**+14.24%**)
    - `gallery_swipe_on_lp_events_cnt`: **15,668,612 -> 19,160,907**
    - `reported_dpv_cnt`: **21,596,518 -> 24,618,715**
  - Finance metrics are mixed, not uniformly positive or negative:
    - Overall finance down:
      - `finance_select_cvr`: **0.127141 -> 0.120716** (**-5.05%**, p=3.882578e-22)
      - `finance_select_list_page_cvr`: **0.072339 -> 0.061673** (**-14.75%**, p=2.064850e-99)
    - Finance partner / Procheck up:
      - `finance_partner_select_cvr`: **0.082482 -> 0.088328** (**+7.09%**, p=3.144852e-25)
      - `finance_partner_select_list_page_cvr`: **0.042212 -> 0.046180** (**+9.40%**, p=9.803812e-22)
      - `procheck_select_cvr`: **0.058507 -> 0.063487** (**+8.51%**, p=5.603583e-25)
      - `procheck_select_list_page_cvr`: **0.030322 -> 0.034617** (**+14.16%**, p=2.737891e-33)
    - Check24 down sharply:
      - `check24_select_cvr`: **0.063676 -> 0.047624** (**-25.21%**, p=2.291350e-264)
      - `check24_select_list_page_cvr`: **0.038314 -> 0.019887** (**-48.09%**, p≈0)
    - Smaller positive finance signal:
      - `fb_preapproval_select_cvr`: **0.040296 -> 0.042058** (**+4.37%**, p=1.088394e-05)
  - Metric coverage / structure:
    - Search metrics include dealer/private splits, LP vs DP splits, and `_capped10` versions.
    - Finance metrics include total / `dp_stage` / `dp_slice` / `list_page` / `afterlead` / `dealer_list` / `offer`.
  - Data-shape details:
    - All rows in `search cvr`, `search cvr - new vs return`, and `finance cvr` are marked **`is_result_conclusive = conclusive`**.
    - `whatsapp_select_private_dp_*` and `whatsapp_private_from_lp_*` are **0 in both arms**.
    - Many finance downstream metrics are **0 in both arms** (for example `dealer_list`, `offer`, and several `last_step` rows).
- Outcomes
  - The variant produces a large reduction in DPV-related metrics.
  - WhatsApp-from-list-page increases.
  - Top-level enquiry volume/CVR does not materially move.
  - Finance performance shifts by channel:
    - overall finance down
    - `finance_partner` and `procheck` up
    - `check24` down sharply
- Constraints
  - DE only
  - iOS only
  - mobile only
  - one variant only
  - no written success criteria
  - no UI description
  - no experiment run dates
  - no owner/recommendation field

## Possible facts / inferences

- This is likely a **later-stage validation source**, not an early discovery/problem-framing source.
  - Confidence level: **High**
- The tested change likely affected **list-page interaction patterns** on iOS, because the strongest movements cluster around `from_lp`, gallery swipe, and list-page finance entry metrics.
  - Confidence level: **High**
- The variant likely reduced **DPV / traversal depth** while increasing some **on-list-page actions**.
  - Evidence pattern: DPV metrics down; gallery swipe events and WhatsApp-from-LP up.
  - Confidence level: **High**
- Finance behavior appears to have been **redistributed**, not simply improved or worsened.
  - Evidence pattern: `finance_select` and `check24` down; `finance_partner` and `procheck` up.
  - Confidence level: **High**
- `is_new_user = 1` probably means **new users**, and `is_new_user = 0` probably means **returning users**.
  - Confidence level: **High**
- Negative search-side effects may be more concentrated in the `is_new_user = 1` cohort for some private/call metrics, while the WhatsApp lift is stronger in `is_new_user = 0`.
  - Confidence level: **Medium-high**
- This likely belongs to **Search Funnel / Buyer Experience** optimization, but that framing is not explicit in the workbook.
  - Confidence level: **High**

## My role

- This source does **not** identify you by name or role.
- It does **not** support claims that you:
  - owned the experiment
  - owned the design
  - drove the analysis
  - made the rollout decision
- It also does **not** mention **Greg Hamill**.
- The only named person attached to the file is **Tino Kapolka** in workbook metadata, which supports only that the file was last edited/exported under that name.

## Key evidence

- Reference index (`0.declutter_source_index`, Source Index row 6):
  - **“XLSX AB-test results (DE iOS test 2)”**
  - **“High - raw app validation evidence”**
  - **“iOS leads/CVR, call validation, gallery swipe, finance metrics”**
- `search events`, row 41:
  - `dpvs_total_from_lp_unique_cnt` **6.23269 -> 5.46732**, uplift **-0.122799**, p=**1.486435e-158**
- `search cvr`, row 41:
  - `dpvs_total_from_lp_unique_cvr` **0.612618 -> 0.584922**, uplift **-0.045209**, p=**6.449588e-173**
- `search events`, row 22:
  - `whatsapp_total_from_lp_cnt` **0.004976 -> 0.005649**, uplift **+0.135372**, p=**9.255587e-04**
- `search cvr`, row 21:
  - `mail_success_total_from_lp_cvr` **0.014017 -> 0.013426**, uplift **-0.042117**, p=**0.011818**
- `gallery swipe`, rows 2-3:
  - `mean_dpv` **12.02964 -> 11.09931**
  - `mean_reported_dpv` **43.826326 -> 50.066023**
  - `gallery_swipe_on_lp_events_cnt` **15,668,612 -> 19,160,907**
- `finance cvr`, row 2:
  - `finance_select_cvr` **0.127141 -> 0.120716**, uplift **-0.050537**, p=**3.882578e-22**
- `finance cvr`, row 9:
  - `finance_partner_select_cvr` **0.082482 -> 0.088328**, uplift **+0.070876**, p=**3.144852e-25**
- `finance cvr`, row 23:
  - `procheck_select_cvr` **0.058507 -> 0.063487**, uplift **+0.085105**, p=**5.603583e-25**
- `finance cvr`, row 30:
  - `check24_select_cvr` **0.063676 -> 0.047624**, uplift **-0.252087**, p=**2.291350e-264**
- `search events - new vs return`, rows 41 and 119:
  - `dpvs_total_from_lp_unique_cnt` falls for both cohorts:
    - `is_new_user=0`: **-11.60%**
    - `is_new_user=1`: **-15.13%**
- `search events - new vs return`, rows 22 and 100:
  - `whatsapp_total_from_lp_cnt`:
    - `is_new_user=0`: **+15.65%**, p=**0.00142**
    - `is_new_user=1`: **+7.30%**, p=**0.31145**

## Useful for

- Validation
- Outcomes
- Tradeoffs
- Business context
- Diagnosis, but only in a narrow quantitative sense
- Less useful for:
  - Problem
  - Approach
  - Strategic importance
  - Role / ownership

## Risks / possible confusion

- The workbook does **not** explicitly say “Declutter,” “List Page,” or “Reduce Cognitive Load.” The project connection comes from the index/context, not from workbook prose.
- This source can be misread as a clean success or clean failure. It is neither:
  - DPV-related metrics down
  - WhatsApp up
  - top-level enquiries roughly flat
  - finance mix shifted
- `is_result_conclusive` is easy to misread. In this workbook it appears on **every CVR row**, including rows that are not statistically significant.
- `mean_dpv` / `dpvs_*` fall, but `mean_reported_dpv` and gallery swipe events rise. Without metric definitions, those can look contradictory.
- `gallery_swipe_on_lp_unique_vehicle_guid_cnt` is **0 for both arms**, so it is not useful evidence.
- Many finance rows are all-zero, so downstream-funnel interpretation should stay limited to the non-zero metrics.
- The filename says **`test2`**, but this source does not explain what changed vs test 1.
- Easy overlap/confusion with adjacent declutter experiment files:
  - DE desktop 674
  - IT desktop 675
  - IT iOS 700
  - IT mWeb 655
  - later synthesis decks that likely explain design and recommendation more clearly

## Confidence

- Medium
- Why:
  - High reliability for raw outcome metrics and tradeoffs
  - Lower usefulness for reconstructing problem framing, exact design changes, ownership, or launch decisions
  - Strong validation source; weak narrative source

...

## S06 — 6.ABTEST700-IT-iOS-test2-results-02.02.2026.xlsx

# Source Analysis: 6.ABTEST700-IT-iOS-test2-results-02.02.2026

## Relevance

- **Direct**
- Cross-project context ties this workbook explicitly to the Declutter stream:
  - rollout/overview decks list `CD-977 ABTEST700 Declutter IT iOS round 2_results.xlsx`
  - it sits under `Consumer Analytics deep dives for Declutter`
  - it is labeled `[iOS] Validating call leads, test #2`

- So this is not just adjacent LP data. It is direct experiment evidence for a later iOS Declutter validation round.

## Confirmed facts

- **Dates**
  - Workbook filename date: `02.02.2026`
  - Declutter decks already referenced ABTEST700 in 2025 as part of the Declutter deep-dive set, so this workbook is the later results file for a known Declutter substream.

- **People**
  - Workbook metadata `lastModifiedBy`: `Gregory Hamill`

- **Project names / aliases**
  - `abtest_id`: `700`
  - `market`: `it`
  - `platform`: `ios`
  - `device_category`: `mobile`
  - Cross-doc context names the file:
    - `CD-977 ABTEST700 Declutter IT iOS round 2_results.xlsx`

  - Cross-doc context labels the workstream:
    - `[iOS] Validating call leads, test #2`

- **Goals**
  - The workbook itself does **not** state a written hypothesis.
  - Cross-doc context gives the test stream label:
    - `Validating call leads`

  - The workbook’s tracked metrics show evaluation across:
    - enquiry / mail / call actions
    - `dpvs_*`
    - list-page-originated actions (`*_from_lp_*`)
    - gallery behaviour
    - finance entries / conversions
    - partner-level finance metrics (`agos`, `compass`, `younited`)

- **Design / variant framing**
  - Cross-doc context for the IT iOS test #2 compares:
    - `Current List Page Card`
    - `Decluttered, with gallery`

  - The same reference slides mention:
    - `Touch target for Insurance`
    - `Touch target for Finance`

  - The iOS scorecard is framed **vs Live List Page card**.
  - The workbook itself contains **no further design rationale or mockups**.

- **Aggregate outcome pattern**
  - The strongest validated losses are in:
    - DPV / LP-navigation metrics
    - finance entry / finance conversion metrics

  - Aggregate lead metrics are more mixed. Several are flat or not significant.
  - This is consistent with the later cross-country scorecard for Italy iOS:
    - `Total Dealer DPVs: -10%`
    - `Total Dealer Leads: No sign change`
    - `Total Finance Entries: -29%`
    - `Total Finance Conversions: -31%`
    - `Compass entries: -4%`
    - `Agos entries: -41%`

- **DPV / LP-navigation results**
  - `dpvs_total_unique_cnt`: **-10.53%**
  - `dpvs_dealer_unique_cnt`: **-9.75%**
  - `dpvs_total_from_lp_unique_cnt`: **-15.30%**
  - `dpvs_dealer_from_lp_unique_cnt`: **-14.88%**
  - `dpvs_private_from_lp_unique_cnt`: **-16.13%**

- **Search CVR results**
  - `mail_success_dp_cvr`: **-2.67%**
  - `mail_success_total_from_lp_cvr`: **-4.88%**
  - `dpvs_total_unique_cvr`: **-2.98%**
  - `dpvs_total_from_lp_unique_cvr`: **-4.78%**
  - `dpvs_private_from_lp_unique_cvr`: **-8.79%**

- **Finance / commercial results**
  - `finance_select_event_cnt`: **-30.67%**
  - `finance_select_list_page_event_cnt`: **-49.22%**
  - `finance_select_cvr`: **-24.11%**
  - `finance_select_list_page_cvr`: **-40.87%**
  - `agos_select_event_cnt`: **-40.11%**
  - `agos_select_list_page_event_cnt`: **-60.64%**
  - `agos_select_cvr`: **-33.36%**
  - `agos_select_list_page_cvr`: **-53.78%**
  - `compass_select_event_cnt`: **-4.42%**
  - `compass_select_dp_stage_event_cnt`: **-12.45%**
  - `compass_select_cvr`: **-3.80%**
  - `compass_select_dp_stage_cvr`: **-10.42%**

- **Surface / stage localisation**
  - Finance losses are much larger on list-page metrics than on later-stage metrics:
    - `finance_select_list_page_event_cnt`: **-49.22%**
    - `finance_select_dp_stage_event_cnt`: **-1.26%**, not significant
    - `finance_select_afterlead_event_cnt`: **+2.51%**, not significant

  - Zero in both groups:
    - `finance_select_dealer_list_*`
    - `finance_select_offer_*`

  - All `younited` finance metrics are `0`

- **Lead / tradeoff pattern**
  - Cross-doc iOS scorecard summarises Italy as:
    - `Total Dealer DPVs: -10%`
    - `Total Dealer Leads: No sign change`
    - `Total Finance Entries: -29%`
    - `Total Finance Conversions: -31%`
    - `Compass entries: -4%`
    - `Agos entries: -41%`

  - This aligns with the workbook:
    - strong DPV losses
    - finance losses
    - dealer lead metrics mostly not showing a strong aggregate lift

- **Segment split**
  - The workbook splits by `is_new_user` values `0` and `1`
  - Both segments lose LP DPVs
  - `is_new_user=1` also shows significant mail/private declines
  - One positive exists at very low base rate:
    - `call_success_private_dp_cvr`: **+68.05%**

- **Gallery / measurement details**
  - `gallery_swipe_on_lp_events_cnt` rises
  - `gallery_swipe_on_lp_unique_vehicle_guid_cnt` is `0` in both groups
  - `mean_dpv`: **-10.53%**
  - `mean_reported_dpv`: **+11.74%**
  - The workbook gives **no definition** for why those two DPV measures move differently

- **Constraints**
  - No written hypothesis in the workbook
  - No explicit business case statement in the workbook
  - No rollout / no-rollout decision in the workbook
  - No definition of:
    - `sample_size`
    - `capped10`
    - `is_new_user`
    - `reported_dpv`

## Possible facts / inferences

- **This source is later-stage validation evidence, not the original core framing doc.**
  Confidence: **High**
  It is explicitly tied to Declutter, but it is a 2026 country/platform results workbook, not a 2024 framing or design deck.

- **ABTEST700 is specifically the Italy iOS “validating call leads” round-2 stream inside Declutter.**
  Confidence: **High**
  This is confirmed by project decks, not by workbook cell text alone.

- **The tested card was not a pure “no gallery” variant. It appears to be a decluttered card that still kept gallery.**
  Confidence: **High**
  Cross-doc context labels the variation `Decluttered, with gallery`.

- **The treatment likely reduced list-page discoverability / clickthrough more than downstream funnel mechanics.**
  Confidence: **High**
  Losses are strongest in `*_from_lp_*`, `dpvs_*`, and finance list-page metrics.

- **Business stakes extended beyond call-lead validation into finance-entry / finance-conversion impact.**
  Confidence: **High**
  The official test label is `validating call leads`, but both workbook and scorecard track large finance losses.

- **`is_new_user=1` probably means new users and `0` probably means returning users.**
  Confidence: **Medium**
  The workbook does not decode the flag.

- **`reported_dpv` probably comes from a different measurement definition or pipeline than `dpvs_total_unique_cnt`.**
  Confidence: **Medium**
  The two measures move in opposite directions with no explanation.

## My role

- This source gives **no direct evidence** of your name, title, or ownership.
- It does **not** identify:
  - who designed the variant
  - who ran the analysis
  - who made the product decision

- The only named person attached to the source is **Gregory Hamill**, via workbook metadata.
- What this source suggests I personally owned or drove:
  - **Nothing directly attributable**

- What appears to have been owned by others:
  - file stewardship / result compilation may have involved **Gregory Hamill**
  - beyond that, ownership is **not identifiable from this source**

## Key evidence

- Cross-country review decks:
  - `CD-977 ABTEST700 Declutter IT iOS round 2_results.xlsx`
  - listed under `Consumer Analytics deep dives for Declutter`
  - under `[iOS] Validating call leads, test #2`

- `presentation-overview-08.10.2025`, slides for IT iOS test #2:
  - `Current List Page Card`
  - `Decluttered, with gallery`
  - `Declutter IT iOS, validating call leads test #2`

- Italy iOS scorecard:
  - `Total Dealer DPVs: -10%`
  - `Total Dealer Leads: No sign change`
  - `Total Finance Entries: -29%`
  - `Total Finance Conversions: -31%`
  - `Compass entries: -4%`
  - `Agos entries: -41%`

- Workbook result highlights:
  - `dpvs_total_from_lp_unique_cnt`: **-15.30%**
  - `dpvs_total_from_lp_unique_cvr`: **-4.78%**
  - `finance_select_list_page_event_cnt`: **-49.22%**
  - `agos_select_list_page_cvr`: **-53.78%**
  - `mean_dpv`: **-10.53%**
  - `mean_reported_dpv`: **+11.74%**

## Useful for

- **Validation**
  - Very strong

- **Outcomes**
  - Very strong

- **Tradeoffs**
  - Strong
  - especially: DPV / finance losses vs dealer leads largely not improving

- **Business context**
  - Strong
  - because finance entries / conversions / partner impacts are explicit

- **Key decisions**
  - Moderate
  - mainly as evidence that this was a later iOS validation round with a specific card variant

- **Approach**
  - Moderate
  - because cross-doc context names the compared variants

- **Problem**
  - Limited on its own

- **Diagnosis**
  - Moderate
  - because the losses localise to LP surfaces

- **Strategic importance**
  - Moderate to strong
  - especially when paired with broader Search Funnel / Declutter decks

## Risks / possible confusion

- Easy to conflate with:
  - earlier Declutter framing work
  - earlier iOS `validating call leads test #1`
  - earlier `No Gallery` scorecards

- Cross-doc context suggests ABTEST700 is **round 2**, and the relevant variant here is `Decluttered, with gallery`.
- Easy to conflate with separate workstreams listed nearby in the same decks:
  - mWeb partner-links tests
  - desktop Declutter tests
  - NL partner-links work

- The official sub-workstream label is `Validating call leads`, but the measured impact is also heavily about:
  - finance entries
  - finance conversions
  - AGOS / Compass partner behaviour

- `reported_dpv` vs `mean_dpv` is internally ambiguous
- `gallery_swipe_on_lp_unique_vehicle_guid_cnt = 0` in both groups makes that field hard to trust or interpret
- This source is **Italy / iOS / mobile only**. Do not generalise it to the whole Declutter project without other sources.

## Confidence

- **High**
- Project linkage is explicit, not speculative.
- This source is highly reliable for:
  - experiment outcome
  - validation
  - quantified tradeoffs
  - later-stage Declutter/iOS evidence

- It is still weak for:
  - your personal role
  - original problem framing
  - detailed design rationale

Context files used: `0.declutter_source_index.xlsx` and related Declutter decks.

...

## S07 — 7.ABTEST655-IT-Results.xlsx

# Source Analysis: 7.ABTEST655-IT-Results

## Relevance

- **Supporting**
- **Why**
  - This is a quantitative results workbook for **AB test 655** in **Italy / web / mobile**.
  - Assignment happens mostly on list-like pages, especially `car/all/list`, so it is plausibly connected to the declutter/list-page workstream.
  - Relative to your source table, it is closest to **S1-type evidence**: experiment outcome data.
  - It is **not** a core framing source like **S2**: it contains no explicit declutter naming, no problem statement, no before/after, and no variant description.

## Confirmed facts

- **Dates**
  - File metadata: **created 2025-05-29**, **modified 2025-08-28**.
  - No explicit experiment start/end date appears in the workbook.

- **People**
  - The only named person is **Avishek Tarun** in file metadata (`lastModifiedBy`).
  - **Greg Hamill is not mentioned**.
  - No PM, designer, or analyst is named in the sheet contents.

- **Project names / aliases**
  - Test ID: **655**
  - Market / platform / device in parameterized finance sheets:
    - `market = it`
    - `platform = web`
    - `device_category = mobile`

  - Sheet names:
    - `data checks`
    - `search total conversions`
    - `search unique conversions`
    - `finance unique conversions`
    - `finance events - parameterized`
    - `finance cvr - parameterized`

- **Goals**
  - No explicit goal statement is written in the workbook.
  - The workbook does explicitly track:
    - search / contact behaviour (`dpvs`, enquiries, WhatsApp, call, mail success)
    - finance interaction behaviour (`finance_select_*`, `agos_*`, `compass_*`, `younited_*`)

- **Decisions**
  - The workbook confirms **baseline + 2 variations**.
  - It does **not** describe what the variations were.
  - It does **not** state a design rationale.

- **Metrics**
  - Search sheet title: **“TOTAL EVENTS (UNIQUE USER PER VEHICLE)”**
  - Search sheet title: **“Unique users conversion”**
  - Finance sheets include:
    - overall finance metrics
    - stage-specific metrics (`dp_stage`, `dp_slice`, `list_page`, `afterlead`, `dealer_list`)
    - partner-specific metrics (`agos`, `compass`, `younited`)

- **Outcomes**
  - **Assignment / scope**
    - Assignment page counts:
      - `car/all/list` = **1,803,935**
      - `car/all/vehicle_search` = **223,512**
      - `car/all/custom_list` = **26,381**

    - Content group is almost entirely **car**:
      - `car` = **2,053,876** of **2,054,043**

  - **Search outcomes**
    - `dpvs_total_unique`
      - baseline **2.8957**
      - var1 **6.6164** (**+128.5%**)
      - var2 **3.8761** (**+33.9%**)

    - `dpvs_total_from_lp_unique`
      - baseline **2.1674**
      - var1 **5.8362** (**+169.3%**)
      - var2 **3.1532** (**+45.5%**)

    - `total_enquiries`
      - baseline **0.0710**
      - var1 **0.0741** (**+4.3%**, significant)
      - var2 **0.0726** (**+2.3%**, not significant)

    - `total_enquiry_dealer`
      - var1 **+8.3%** (significant)
      - var2 **+4.7%** (significant)

    - `enquiry_dealer_from_lp`
      - var1 **+11.8%**
      - var2 **+7.9%**

    - `whatsapp_total_from_lp`
      - var1 **+23.1%**
      - var2 **+15.3%**

    - `call_dealer_from_lp`
      - var1 **+9.9%**
      - var2 **+8.1%**

    - Private-contact metrics are weaker:
      - `total_enquiry_private` negative in both variants, not significant
      - `enquiry_private_from_lp` negative in both variants, not significant
      - `cvr_mail_success_private_from_lp`
        - var1 **-6.1%**, significant
        - var2 **-4.1%**, not significant

  - **Finance outcomes — parameterized sheets**
    - Sample sizes:
      - baseline **486,174**
      - var1 **499,145**
      - var2 **493,284**

    - `finance_select_cvr`
      - baseline **0.0925**
      - var1 **0.0534** (**-42.3%**)
      - var2 **0.0494** (**-46.6%**)

    - `finance_select_list_page_cvr`
      - baseline **0.0702**
      - var1 **0.0198** (**-71.8%**)
      - var2 **0.0201** (**-71.3%**)

    - `finance_select_dp_stage_cvr`
      - var1 **+22.4%**
      - var2 **+7.5%**

    - `finance_select_dp_slice_cvr`
      - var1 **+12.6%** (significant)
      - var2 **+0.8%** (not significant)

    - `agos_select_cvr`
      - var1 **-55.4%**
      - var2 **-57.0%**

    - `agos_select_list_page_cvr`
      - var1 **-75.1%**
      - var2 **-74.1%**

    - `compass_select_cvr`
      - var1 **-36.4%**
      - var2 **-43.8%**

    - `compass_select_list_page_cvr`
      - var1 **-56.9%**
      - var2 **-59.2%**

    - `younited_*`
      - all shown as **0** / inconclusive in this workbook

  - **Finance outcomes — parameterized event counts**
    - `finance_select_event_cnt`
      - var1 **-46.8%**
      - var2 **-49.6%**

    - `finance_select_list_page_event_cnt`
      - var1 **-76.2%**
      - var2 **-74.8%**

    - `finance_select_dp_stage_event_cnt`
      - var1 **+24.0%**
      - var2 **+8.7%**

- **Constraints**
  - The workbook includes explicit data checks for multi-variant exposure:
    - **as24visitorid**
      - 1 variation = **1,812,240**
      - 2 variations = **712**
      - 3 variations = **22**

    - **user_pseudo_id**
      - 1 variation = **1,746,260**
      - 2 variations = **51,121**
      - 3 variations = **6,361**

  - Activation checks:
    - `optimizely_activation_success_count = 0` for **190,603** users
    - `= 1` for **1,451,199**

  - Finance reporting notes inside the workbook:
    - **“Agos = 2 agencies x 2 codes per agency --> complicated reporting”**
    - **“Look at clicks --> implies conversions”**

- **Timeline details**
  - Only workbook metadata dates are available.
  - The source is weak for experiment timing beyond “this file existed by late May 2025 and was edited again in late August 2025.”

## Possible facts / inferences

- **This source is likely about the same broader declutter/list-page workstream.**
  - Why: assignment is concentrated on list-like pages and the outcome mix is list-page search/contact vs finance interaction.
  - **Confidence level: Medium**

- **The experiment likely changed or deprioritised list-page finance interaction.**
  - Why: very large drops in `finance_select_list_page_*` alongside gains in `finance_select_dp_stage_*`.
  - **Confidence level: Medium**

- **This test appears to measure a trade-off between stronger buyer engagement and weaker finance interaction.**
  - Why: search/contact metrics mostly improve while finance selection metrics drop sharply.
  - **Confidence level: High**

- **Variation 1 may have been the more aggressive version.**
  - Why: it produces the largest DPV/contact uplifts, and one non-parameterized finance table reports var1 list-page finance clicks as exactly zero.
  - This is weakened by inconsistencies across finance sheets.
  - **Confidence level: Low / Medium**

## My role

- **What this source suggests I personally owned or drove**
  - Nothing explicit.
  - The workbook does not attribute ownership to you.

- **What appears to have been owned by others**
  - This looks like an analytics / experimentation readout artefact, not a design artefact.
  - Finance reporting / partner instrumentation may have involved separate analytics or finance stakeholders.
  - The only named person is **Avishek Tarun** in metadata, which is not enough to assign project ownership.

## Key evidence

- Exact wording from the source:
  - **“TOTAL EVENTS (UNIQUE USER PER VEHICLE)”**
  - **“Unique users conversion”**
  - **“In what page are users being assigned to the experiment?”**
  - **“overall test conclusive - variation results can be interpreted”**
  - **“Agos = 2 agencies x 2 codes per agency --> complicated reporting”**
  - **“Look at clicks --> implies conversions”**

- Specific metrics worth preserving:
  - `dpvs_total_unique`: **+128.5% var1**, **+33.9% var2**
  - `enquiry_dealer_from_lp`: **+11.8% var1**, **+7.9% var2**
  - `whatsapp_total_from_lp`: **+23.1% var1**, **+15.3% var2**
  - `finance_select_cvr`: **-42.3% var1**, **-46.6% var2**
  - `finance_select_list_page_cvr`: about **-71%** in both variants
  - `finance_select_dp_stage_cvr`: **+22.4% var1**, **+7.5% var2**
  - `agos_select_cvr`: **-55.4% / -57.0%**
  - `compass_select_cvr`: **-36.4% / -43.8%**

## Useful for

- **Strongest**
  - Validation
  - Outcomes
  - Trade-offs

- **Secondary**
  - Business context
  - Key decisions (indirectly, via what was measured)

- **Weak**
  - Problem
  - Diagnosis
  - Approach
  - My role
  - Strategic importance

## Risks / possible confusion

- This workbook does **not** explicitly say **Declutter List Page**, **Declutter List Cards**, or **Reduce Cognitive Load**.
- It should not be treated as a core source like **S2**.
- It is **Italy mobile web only**, so it should not be generalised to desktop or other markets without other evidence.
- It includes `list`, `vehicle_search`, and `custom_list`, so it may overlap with a broader list/search experiment rather than a single page template.
- The heavy finance metric set means it may overlap with:
  - finance-module work
  - partner reporting work
  - broader search-funnel optimisation

- There is a **material internal inconsistency** inside the source:
  - `finance unique conversions` reports `cvr_finance_clicks_list_page` for **var1 = 0**
  - `finance cvr - parameterized` reports `finance_select_list_page_cvr` for **var1 = 0.0198**

- Finance sheet sample sizes also differ:
  - non-parameterized finance unique sheet: **486,684 / 489,716 / 493,766**
  - parameterized finance sheets: **486,174 / 499,145 / 493,284**

- The `finance unique conversions` sheet appears partly hand-edited:
  - manual notes
  - stray text value `ii`

- Relative to your source table, this should sit **behind S1/S2** rather than replacing them.

## Confidence

- **Medium**
- **Why**
  - Strong for quantitative validation and trade-off evidence.
  - Weak for explicit project naming, design rationale, timing, and role attribution.
  - Internal finance-sheet inconsistencies reduce confidence in fine-grained interpretation.

...

## S08 — 8.presentation_roll-out-cross-Country Review_16.09.2025.pptx

# Source Analysis: 8.presentation_roll-out-cross-Country Review_16.09.2025

## Relevance

- **Supporting**
- This is clearly about the same initiative: the title is **“Declutter List Page Card”** and the core hypothesis is explicitly about **reducing cognitive load / simplifying information hierarchy on the List Page**.
- In your source-index terms, this behaves **closer to S3 (strategy / rollout deck)** than **S2 (core project deck)**. It is directly about Declutter, but mainly as a **cross-country rollout / GTM review**, not as the original design rationale or final experiment readout.

## Confirmed facts

- **Dates**
  - Title slide date: **September 16th, 2025**.
  - The deck includes a backup roadmap with dated rollout milestones:
    - **05.08.** gradual launch in DE
    - **Eo Sep** gradual launch in **BE / NL / AT / IT**
    - **Phase 1) Mobile Apps (30.09.)**
    - **Phase 2: Mobile Web & Desktop (15.10.)**
    - **FR/LUX to be planned for 15.10.**

- **People**
  - **Gregory** is attached to **“Why are we doing this?”** and **“Product Scope”**.
  - **Kira** is attached to **“Go-To-Market Plan”**.

- **Project names / aliases**
  - Title: **“Declutter List Page Card / Cross-Country Review”**.
  - Initiative term used throughout: **“Declutter”**.
  - Variant terms used in the deck:
    - **“No Gallery”**
    - **“Gallery”**

- **Goals**
  - Explicit hypothesis: by **reducing the cognitive load / simplifying the information hierarchy** on List Page offers, visitors will browse more easily, find suitable offers more easily, and this will drive **more DPVs and enquiries**.
  - Explicit end-state: **“By end of 2025”** visitors should understand they are on a List Page and find relevant offer details with **low effort**.
  - Business value claims listed:
    - **maximize dealer lead growth**
    - **generate positive or neutral impact on supporting KPIs** such as **media revenue**
    - create **upsell triggers** into **premium mobile app experiences**

- **Decisions**
  - Surface strategy:
    - **Mobile web:** **“No Gallery”** version
    - **iOS and Android:** **“Gallery”** version
    - **Desktop:** **“No Gallery”** version

  - Explicit strategic note: **“in 2026, we will push users from mWeb to the premium app experience”**.
  - Germany rollout is broken into specific change areas:
    - **Price assessment**
    - **Tags**
    - **Partner links (Finance and Insurance)**
    - **Combined key changes**
    - **Mobile app rollout**
    - **Desktop rollout**

  - Mobile-web rollout views are shown for **Germany, Italy, Belgium, Netherlands, Austria**.
  - Price assessment labels shown in rollout material:
    - **Very good price**
    - **Good price**
    - **Average price**
    - **Increased price**
    - **High price**
    - **No price assessment**

- **Metrics**
  - The deck repeats a metrics block from earlier Declutter material. It includes:
    - **+8% / +5%** total enquiries from List Page
    - **+13% / +11%** dealer enquiries from List Page
    - **No change / -14%** private enquiries from List Page
    - **+134% / +134%** DPVs from List Page
    - **+91% / +91%** DPVs from all traffic sources

  - Separate desktop statement:
    - **“No Gallery” on Desktop only very slightly increases Media revenue. Other core metrics remain stable**.

- **Outcomes**
  - Rollout intent is explicit:
    - **Mobile App: Oct-31**
    - **Mobile Web & Desktop: Nov-7**
    - **Rollout to all EU markets, all platforms and vehicle types** appears in the later October version of the same rollout review family, indicating the September deck sits in that same rollout stream.

- **Constraints**
  - GTM / rollout constraints listed in backup roadmap:
    - **Produce marketing assets**
    - **Preparations for Go-live in BE/NL/AT/IT**
    - **Data nugget creation for comms & internal FAQs**
    - **Craft value comms story**
    - **Sales/CSM/CC training**
    - **Buy-in from partners???**
    - **Legal perspective: GTG (government & contractual requirements)**

  - One rollout proposal says:
    - **No gradual rollout: 100% Traffic launch (all markets at the same time)**.

- **Timeline details**
  - The appendix cites the experiment lineage feeding this rollout:
    - **mWeb proof-of-concept in DE**
    - **mWeb partner links test #1** in **DE / IT**
    - **mWeb partner links test #2** in **DE / IT / NL**
    - **iOS validating call leads test #1 and #2**
    - **Desktop test #1** in **DE / IT**

## Possible facts / inferences

- This is a **late-phase rollout / operationalisation deck**, not the original core design deck.
  - **Confidence level: High**
  - Basis: the deck is organised around **product scope**, **country rollout views**, and **go-to-market plan**, rather than original discovery or design reasoning.

- Gregory is likely the main product-side owner or lead presenter for the **problem framing / scope** sections.
  - **Confidence level: Medium**
  - Basis: his name is attached to those sections, but the deck does not explicitly define ownership.

- Kira likely owned or coordinated the **GTM / rollout plan** section.
  - **Confidence level: Medium**
  - Basis: her name is attached to **Go-To-Market Plan**, but the deck does not explicitly define ownership.

- The initiative bundled more than pure decluttering. It also carried:
  - **partner-link monetisation**
  - **media revenue protection**
  - **premium app upsell**
  - **country / GTM rollout planning**
  - **Confidence level: High**

- Germany appears to be the first rollout market before wider expansion.
  - **Confidence level: High**
  - Basis: DE-specific rollout screens are shown first and the backup roadmap includes **05.08. gradual launch in DE** before later cross-country rollout.

## My role

- **No direct evidence identifies you by name.**
- This source does **not** support a strong claim that you personally owned the overall problem, the final design, or the rollout.
- The strongest explicit ownership / presenter signals point to:
  - **Gregory** for **Why are we doing this?** and **Product Scope**
  - **Kira** for **Go-To-Market Plan**

- If you were involved, this source could support involvement in **rollout design adaptation** or **cross-country planning**, but it does **not confirm** personal ownership.

## Key evidence

- **Slide title:** “**Declutter List Page Card / Cross-Country Review / September 16th, 2025**”
- **Problem framing:** “**By reducing the cognitive load / simplifying the information hierarchy** ... This will drive more **DPVs and enquiries**”
- **End-state:** “**By end of 2025** ... with **low effort**, find relevant offer details”
- **Business rationale:**
  - “**Maximize dealer lead growth**”
  - “**Generate positive or neutral impact on supporting KPIs**”
  - “**Create upsell triggers** to entice users to our premium mobile app experiences”

- **Desktop trade-off statement:** “**‘No Gallery’ on Desktop only very slightly increases Media revenue. Other core metrics remain stable**”
- **Platform strategy:**
  - “**Mobile web: ‘No Gallery’ version**”
  - “**IOS and Android: ‘Gallery’ version**”
  - “**Desktop: ‘No Gallery’ version**”

- **GTM roadmap detail:**
  - “**05.08. Gradual launch in DE**”
  - “**Eo Sep Gradual launch in BE/NL/AT/IT**”
  - “**Phase 1) Mobile Apps (30.09.)**”
  - “**Phase 2: Mobile Web & Desktop (15.10.)**”
  - “**No gradual rollout: 100% Traffic launch**”

## Useful for

- **Business context** — strong
- **Problem** — moderate
- **Diagnosis** — weak
- **Approach** — strong
- **Key decisions** — strong
- **Tradeoffs** — strong
- **Validation** — medium
- **Outcomes** — medium-low
- **Strategic importance** — strong

## Risks / possible confusion

- This source can easily be conflated with **adjacent workstreams**, not just core declutter design:
  - **Check24 insurance**
  - **finance partner links**
  - **media revenue**
  - **premium app upsell**
  - **go-to-market rollout**

- The repeated metrics block is **not a clean isolated readout of the whole project**. It is carried over from earlier experiment material and should not be treated as a final summary of the full rollout.
- The deck is **partially unfinished**:
  - title slide contains **“Product Delivery XXX”**
  - GTM section contains **“TO BE ADDED”**

- Compared with a likely core declutter deck, this source is **later, broader, and more operational**.
- It overlaps most with:
  - **S2** for framing language
  - **S3** for strategic / rollout framing
  - later rollout decks such as the **9 October 2025** version in the same document family

## Confidence

- **Medium**
- This is useful for:
  - confirming the initiative is the same Declutter workstream
  - extracting rollout strategy
  - capturing platform decisions
  - identifying business framing and rollout constraints

- It is less reliable for:
  - exact final shipped UI
  - clean attribution of ownership
  - a single definitive timeline
  - a pure project-outcome narrative, because the deck mixes reused experiment material, incomplete GTM content, and rollout planning.

...

## S09 — 9.presentation-overview-08.10.2025.pptx

I could not retrieve `0.declutter_source_index` from the loaded files, so this revision uses the source table you pasted plus the deck itself.

# Source Analysis: 9.presentation-overview-08.10.2025

## Relevance

- Direct
- Relative to your source map, this looks **closer to a later synthesis / rollout overview** than to the likely core project doc.
- It is **not** the equivalent of `reduce_cognitive_load_deck.pptx` / S2. It reads more like a deck that consolidates experiment evidence and rollout direction after multiple tests.
- It also overlaps with the territory you’d expect from **S1-style experiment readouts** and **S3-style strategic framing**:
  - from S1: metrics, test names, outcomes
  - from S3: rollout recommendation, stakeholder sign-off, search-funnel framing

- It does **not** resemble S4 / taxonomy-search work.

## Confirmed facts

- **Dates**
  - Title slide says **“August 12”**.
  - Executive summary says desktop recommendation is provisional **“as of 12-Aug-25.”**
  - Next-step ETAs:
    - **Stakeholder (excluding IT) sign-off: 22-August-2025**
    - **IT stakeholder sign-off: 3-Sept-2025**

  - Many slides carry **“December 19th”** in the footer.

- **People**
  - No project team is named in slide content.
  - **Consumer Analytics deepdives** are named as the source for results.
  - **Gregory Hamill** appears in file change metadata, but not as a named role on slides.

- **Project names / aliases / scope**
  - Uses:
    - **Declutter**
    - **Declutter the List Page Card**
    - **Gallery / No Gallery**
    - **Partner links**
    - **Validating call leads**
    - **Desktop benchmarking #1**
    - **Search Funnel Update**

  - Markets/channels covered:
    - **Germany, Italy, Netherlands**
    - **mWeb, iOS, Desktop**

- **Goal / problem framing**
  - The project is described as improving browsing by **“simplifying the information hierarchy on the List Page cards.”**
  - This deck frames success mainly through:
    - dealer leads
    - dealer DPVs
    - finance entries / conversions
    - insurance entries / conversions

- **Design / experiment variants explicitly shown**
  - **Current List Page Card**
  - **Small card, no gallery (Finance below price)**
  - **Small card, no gallery (Stacked partner links)**
  - **Large/Medium card, gallery**
  - Desktop **with gallery / without gallery**

- **Rollout decisions**
  - Recommendation: **roll out Gallery for mobile web and apps**
  - Desktop: still validating DE insurance-partner performance, but proposed direction is **No Gallery**
  - Proposed partner-link placement:
    - **Finance directly below price**
    - **Insurance separated and above seller info**

  - Additional rollout tweaks:
    - tags next to subtitle
    - larger touch targets for partner links

- **Validation standard**
  - Repeated statement: **only 95% significant values are reported unless otherwise specified**

- **Metrics / outcomes**
  - Executive-summary rollup:
    - expected **~1% increase in total dealer leads**
    - expected **~5–10% increase in total dealer DPVs**

  - **mWeb partner links test #2, Gallery vs live card**
    - **DE:** **+35% dealer DPVs**, **+4% dealer leads**
    - **IT:** **+36% dealer DPVs**, **+6% dealer leads**
    - **NL:** **+26% dealer DPVs**, **dealer leads: no significant change**

  - **iOS validating call leads test #2, Gallery vs live card**
    - **DE:** **-7% dealer DPVs**, **dealer leads: no significant change**
    - **IT:** **-10% dealer DPVs**, **dealer leads: no significant change**
    - dealer call-dial leads are shown as **no significant change**

  - **No Gallery evidence used as counterargument**
    - DE partner-links **test #1**: **dealer leads +6%**, **finance conversions -16%**
    - DE partner-links **test #2**: **dealer leads +5%**, **finance conversions: no significant change**
    - DE iOS validating-call-leads **test #1**: **dealer leads -3%**
    - deeper lead-type view for DE iOS no-gallery shows **dealer call (dial) leads -18%** and **private call (dial) leads -19%**

  - **NL exception**
    - NL partner-links test #2 shows **No Gallery** outperforming **Gallery** on headline lead metrics:
      - **No Gallery:** **+144% dealer DPVs**, **+11% dealer leads**
      - **Gallery:** **+26% dealer DPVs**, **dealer leads: no significant change**

  - **Desktop test #1**
    - **DE No Gallery:** **+6% dealer DPVs**, dealer leads stable
    - **DE Gallery:** **-9% dealer DPVs**, dealer leads stable
    - **IT No Gallery:** **-2% dealer DPVs**, dealer leads stable
    - **IT Gallery:** **-27% dealer DPVs**, dealer leads stable

  - **Reported DPVs vs actual DPVs**
    - Desktop slide explicitly separates **“reported” DPVs** from **actual DPVs**
    - Examples:
      - **DE No Gallery:** reported **-3%**, actual **+6%**
      - **DE Gallery:** reported **+30%**, actual **-9%**
      - **IT No Gallery:** reported **+3%**, actual **-3%**
      - **IT Gallery:** reported **+50%**, actual **-27%**

- **Constraints / data-quality limits**
  - **NL:** partner tracking not set up correctly; partner data missing
  - **Desktop:** some partner data unusable
  - **Italy desktop:** no insurance partner
  - Several metrics marked **Out of scope / Not applicable / Unable to calculate / To be calculated**

- **Timeline / cross-reference details**
  - Appendix references:
    - mWeb proof-of-concept DE: **AB test 547**
    - mWeb partner links #1: **DE 632 / IT 560**
    - mWeb partner links #2: **DE 654 / IT 655 / NL 662**
    - iOS validating call leads #1: **DE 663**
    - iOS validating call leads #2: **DE 695 / IT 700**
    - Desktop test #1: **DE 674 / IT 675**

## Possible facts / inferences

- This source is probably a **late overview deck built after multiple readouts**, not the original design/problem-framing doc.
  - Confidence level: **High**

- It is likely a bridge between the kinds of evidence you’d expect in **S1** and **S3**:
  - S1-style experiment outcomes
  - S3-style rollout / stakeholder decision framing
  - Confidence level: **High**

- The project here is broader than “declutter list cards” alone; it bundles:
  - card hierarchy
  - gallery/no-gallery
  - finance vs insurance placement
  - touch-target behavior
  - call-lead measurement validation
  - Confidence level: **High**

- Finance seems to have been prioritized over insurance as the primary top-level partner action.
  - Confidence level: **Medium**

- The team likely did **not** trust “reported DPVs” as the right decision metric.
  - Confidence level: **High**

- Gregory Hamill was likely involved in maintaining/editing the deck, but this file alone does not prove formal ownership.
  - Confidence level: **Medium**

## My role

- **What this source suggests I personally owned or drove**
  - No direct evidence.
  - The deck does not name you, your title, or your responsibilities.
  - It does not clearly attribute the synthesis or recommendation to a named individual.

- **What appears to have been owned by others**
  - **Consumer Analytics** appears to own the deep-dive measurement input.
  - Stakeholder sign-off and IT sign-off are explicit dependencies.
  - Gregory Hamill appears in file metadata only.

## Key evidence

- **“The Declutter project aims to enhance our visitor’s offer browsing experience by simplifying the information hierarchy on the List Page cards.”**
- **“Proceed with a rollout of the Gallery for mobile web and apps. For Desktop ... we’d propose No Gallery.”**
- **“To improve performance of Financing links, we propose to place this link directly below price, while keeping Insurance separated.”**
- **“Part 0: Why ‘No Gallery’ is a no-go”**
- **“Finance by price optimizes partner performance”**
- **“When touch target is similar, ‘Decluttered’ grows entries”**
- **“When live touch target is much larger, we lose entries”**
- Desktop metric mismatch:
  - **+30% reported DPVs (actual -9%)**
  - **+50% reported DPVs (actual -27%)**

- Appendix IDs:
  - **547 / 560 / 632 / 654 / 655 / 662 / 663 / 674 / 675 / 695 / 700**

## Useful for

- **Business context**
- **Approach**
- **Key decisions**
- **Tradeoffs**
- **Validation**
- **Outcomes**
- **Strategic importance**
- **Timeline** cross-reference

Least useful for:

- **core original problem framing** in the S2 sense
- **clean personal-role attribution**
- **clean chronology**

## Risks / possible confusion

- Relative to your source table, this source should **not** be mistaken for the likely core design narrative doc.
- It is easy to overread this as “the declutter project deck,” when it is more accurately a **measurement + recommendation + rollout synthesis**.
- The file contains clear contamination / reuse:
  - template-origin speaker notes
  - repeated divider-slide background content

- It uses **Declutter / Gallery / No Gallery** language, but not **Reduce Cognitive Load** wording.
- It overlaps with adjacent workstreams:
  - partner-link monetization
  - finance / insurance placement
  - call-lead validation
  - desktop benchmarking

- **Gallery / No Gallery** is not a single-variable comparison in this file; variants also change:
  - card size
  - partner-link placement
  - touch-target behavior

- NL results complicate the clean summary:
  - NL **No Gallery** beats NL **Gallery** on some lead metrics
  - the overall recommendation still favors Gallery on mobile

- The date story is inconsistent:
  - August 12
  - 12-Aug-25
  - Aug/Sep 2025 sign-off dates
  - December 19th footers

## Confidence

- **Medium**
- Strong for:
  - experiment naming
  - cross-market/platform result synthesis
  - rollout direction
  - tradeoffs

- Weaker for:
  - exact chronology
  - authorship
  - your role
  - separating the pure declutter story from adjacent monetization / analytics workstreams

...

## S10 — 10.doc-28.03.2025.docx

# Source Analysis: 10.doc-28.03.2025

## Relevance

- **Direct**
- **Why:** The document is explicitly titled **“Declutter the List page Card”** and is organized as a **rollout plan** for mWeb, desktop, iOS, and Android. It contains rollout goals, milestone tables, owners, status, and stakeholder/design follow-ups directly tied to the declutter work.
- **Important caveat:** the lower half is explicitly marked **“------IGNORE BELOW ------”** and **“The following pages are for Search Funnel team follow-ups”**, so the document mixes core rollout planning with appended notes and adjacent follow-up items.

## Confirmed facts

- **Document metadata**
  - File name date: **28.03.2025**
  - Core properties show:
    - **Created:** 2025-01-28
    - **Modified:** 2025-03-28
    - **Author / last modified by:** **Gregory Hamill**

- **Project naming / aliases used in this source**
  - **“Declutter the List page Card”**
  - **“Mobile Web – Declutter Roll-out Plan”**
  - **“Desktop – Declutter Roll-out Plan”**
  - **“iOS – Declutter Roll-out Plan”**
  - **“Android – Declutter Roll-out Plan”**

- **Business / performance framing in this source**
  - The source says research and design began **“Beginning Q2 2024.”**
  - By this document’s account, the experience had been tested on **mWeb 3 times**:
    - **twice in DE**
    - **once in IT**
  - Claimed mWeb outcomes:
    - **Double digit growth** in **total leads** and **total dealer leads** from List Page in all 3 mWeb tests run so far
    - **130–140% improvement** in **total Detail Page Views (DPV)** and **total Dealer DPVs** from List Page in **mWeb-DE 1st test**
    - This DPV uplift is said to have increased ad impressions, **“worth 200K EUR”**
    - **Improved performance of Check24 conversions** in **mWeb-DE 2nd test**

- **Goal**
  - The stated goal is to **roll out a Decluttered List Page Card to all platforms by end of Q2 2025**.

- **Progress section**
  - The source says the **second DE mWeb test** is focused on the **impact of finance and insurance links**.
  - That section is draft/incomplete:
    - “will wrap by **Feb XX**”
    - “Full analysis expected **XXX**”
    - “UX creating final mockups... Expected to finalize by **XXX**”
    - The next sentence is cut off after: **“If we obtain t”**
  - It states an **internal BSG Concept Review** with team and stakeholders was scheduled for **Feb-7**.

- **Roadmap / timeline by platform**
  - **Mobile web**
    - Kick-off: **Jan-15** — owner **Greg** — **Completed**
    - Development: **Check24, test #1** — **DE / Car** — owner **Oleksii** — **Jan-9 to Jan-15** — **Completed**
    - **Check24, test #1 runtime** — **DE / Car** — **Jan-16 to Feb-6** — **In Progress**
    - Analysis of results, **Check24 test #1** — owners **Greg, Andreia** — **Feb-7 to Feb-18** — **In Progress**
    - Design concept for **Check24, test #2** — owners **Brunno, Anja** — **Jan-27 to Feb-7** — **In Progress**
    - Tech estimation for **Check24, test #2** — owner **Oleksii** — **Feb-7** onward — **Not started**
    - BSG internal review — owners **Mo, Mathias** — **Feb-7** — **Not started**
    - Development: **Check24, test #2** — **DE / Car** — owner **Oleksii** — **Feb-11 to Feb-17**
    - Runtime: **Check24, test #2** — **DE / Car** — **Feb-18 to Mar-11**
    - Analysis: **Mar-12 to Mar-19**
    - Stakeholder review: **Mar-21**
    - Go/No-Go: **DFD Mar-26**
    - Tech estimate for rollout: **Mar-28**
    - Rollout development: **Mar-31 to Apr-8**
  - **Desktop**
    - Design concept for **test #1** — owners **Brunno, Anja** — **Jan-27 to Feb-7** — **In Progress**
    - Tech estimation — owner **Oleksii** — **Feb-7**
    - BSG internal review — owners **Mo, Mathias** — **Feb-7**
    - Development: **test #1** — **DE / Car** — owner **Oleksii** — **Feb-11 to Feb-20**
    - Runtime — **DE / Car** — **Feb-21 to Mar-21**
    - Analysis — owners **Greg, Andreia** — **Mar-24 to Mar-31**
    - Stakeholder review — **Apr-2**
    - Go/No-Go — **DFD Apr-5**
    - Tech estimate for rollout — **Apr-8**
    - Rollout development — **Apr-9 to Apr-16**
  - **iOS**
    - Design concept for **test #1** — owners **Brunno, Anja** — **Jan-27 to Feb-7** — **In Progress**
    - Tech estimation — owner **Kaan** — **Feb-7**
    - BSG internal review — owners **Mo, Mathias** — **Feb-7**
    - Development milestones:
      - Milestone 1 — **Feb-12 to Feb-28**
      - Milestone 2 — **Mar-10 to Mar-25**
      - Milestone 3 — **Mar-26 to Apr-3**
    - Runtime — **Apr-4 to Apr-25**
    - Analysis — owners **Greg, Andreia** — **Apr-28 to May-5**
    - Stakeholder review — **May-7**
    - Go/No-Go — **DFD May-9**
    - Tech estimate for rollout — **May-12**
    - Rollout development — **May-13 to May-19**
  - **Android**
    - Design concept for **new UI** — owners **Brunno, Anja** — **Jan-27 to Feb-7** — **In Progress**
    - Tech estimation for **new UI** — owner **Alex** — **Feb-7**
    - BSG internal review — owners **Mo, Mathias** — **Feb-7**
    - Stakeholder review — owners **Mo, Mathias** — **Feb-11**
    - Development milestones:
      - Milestone 1 — **Feb-13 to Feb-28**
      - Milestone 2 — **Feb-26 to Mar-6**
      - Milestone 3 — **Mar-3 to Mar-12**
    - Go/No-Go — **DFD Mar-14**
    - Tech estimate for rollout — **Mar-17**
    - Rollout development — **Mar-18 to Mar-24**

- **People / collaborators named in the source**
  - In roadmap ownership:
    - **Greg**
    - **Andreia**
    - **Oleksii**
    - **Brunno**
    - **Anja**
    - **Mo**
    - **Mathias**
    - **Kaan**
    - **Alex**
  - In comments / follow-up notes:
    - **Nicolas Travis**
    - **Nebojsa Bozic**
    - **Santiago Salem**
    - **Edmund Kim**
    - **Brunno Andriani**
    - **Tino Kapolka**
    - **Kira**
    - **Filip G.**

- **Stakeholder / dependency / tradeoff notes**
  - The appended follow-up section lists downstream impact areas:
    - **Growth**
    - **Favorites**
    - **S&P**
    - **LeasingMarkt**
    - **Marketing**
    - **Dealer**
    - **Sales**
    - **Legal**
    - **Media Sales**
    - **B2C/B2B Customer Care**
  - Specific risks/considerations listed:
    - possible KPI effect on engaged users vs favorites
    - **drop in sharing interactions** due to removal from list item
    - impact on performance products: **NFM, T50, NWL, Smyle**
    - impact on **MIA products**
    - impact on **Leasing Detail Pages and leads from List Page**
    - impact on **Dealer cockpit / Dealer IQ**
    - impact on reported dealer KPI such as **Detail Page Views**
    - legal questions around **WLTP**
    - **Ad impression changes**
    - impact on **partner integrations** in markets with finance/insurance/other partners on the list item
  - One explicit stakeholder metric cited in this section:
    - **“Favorites: +34% increase in traffic share, +25% enquiry CVR (DE Declutter test 1)”**

- **Design decisions / follow-ups captured in the source**
  - Clear explicit decision:
    - **“Go with ‘sponsored’ on top of card”**
  - Country/category-specific design notes:
    - **DE Moto:** highlight **First Registration / Mileage / Power**
    - **DE Caravan:** highlight **First Registration / Mileage / Fuel type**
    - **DE (lkw) Transporter:** highlight **First Registration / Mileage / Power**
    - **DE Trailer:** highlight **Maximum weight / First Registration / Number of Axels**
  - Italy note:
    - **“Finance partner: Compass only, cars only.”**
    - **“Design for exactly the content shown below in Finance area (ios screenshot)”**
  - Other scope mentions:
    - **BE car listings**
    - **NL car listings**
    - **AT car listings**
    - **Non-DE non-car listings**
    - **White labels car listings???**
  - Smaller follow-ups:
    - standardize empty-value display, example: **“– (Kilometerstand)”**
    - future WLTP hybrid format should match Detail Page combined petrol/electric format
    - **range (city)** could be removed from list item
    - listings with **video but no photo** are not currently shown correctly; the source says this issue also exists in production
    - **SuperDeal** + net price makes the list item “getting decluttered again”

- **Internal references / linked evidence**
  - A source link to **“Search Funnel Update vGH (2024 November) and justin ios update.pptx”**
  - A relevant link to **PAX-539** labeled **“Consumer Analytics deepdive on first Declutter tests in DE and IT”**

- **Internal comments that materially affect interpretation**
  - On updating App Store images, a comment says the change should also happen for the **search mask**.
  - On price assessment, a comment raises whether used cars show **“Ohne Bewertung”** rather than hiding the component.
  - On range/WLTP, a comment says the team is **still reviewing with legal** whether any range value is needed on the list item.

## Possible facts / inferences

- **This work likely sat within or closely with the Search Funnel workstream.**
  - Why it seems likely: the document links a **Search Funnel Update** deck and labels the lower section as **Search Funnel team follow-ups**.
  - **Confidence: High**

- **“Greg” in the owner column is likely Gregory Hamill.**
  - Why it seems likely: the document author/last modifier is **Gregory Hamill**, and the project context you provided also names Greg Hamill as PM / primary partner.
  - **Confidence: High**

- **mWeb appears to have been the proving ground; desktop and apps were still extension plans as of late March 2025.**
  - Why it seems likely: only mWeb has already-run tests and performance claims in the overview; desktop/iOS/Android are mostly future milestones.
  - **Confidence: High**

- **The project was not yet on a final, locked rollout path by this point.**
  - Why it seems likely: the document contains placeholders (**Feb XX / XXX**), an incomplete sentence, many “Not started” statuses, and multiple open design/legal questions.
  - **Confidence: High**

- **The “end of Q2 2025” all-platform rollout target was a plan, not a confirmed outcome, and likely slipped.**
  - Why it seems likely: this source is clearly planning-oriented, and the reference source index includes later platform test/result files dated into **late 2025 and early 2026**.
  - **Confidence: High**

- **This source is more commercially framed than user-problem framed.**
  - Why it seems likely: it emphasizes leads, dealer leads, DPV, ad impressions, Check24 conversions, partner integrations, and stakeholder KPIs rather than a user diagnosis.
  - **Confidence: High**

## My role

- **This source does not identify you by name.**
- **It does not provide direct evidence of your personal ownership.**
- What it does suggest about ownership in general:
  - **Design concept / mockup work** appears tied to **Brunno / Anja** and generic **UX**
  - **Analysis** appears owned by **Greg / Andreia**
  - **Engineering / rollout implementation** appears owned by **Oleksii** (mWeb/desktop), **Kaan** (iOS), **Alex** (Android)
  - **Reviews / sign-off** appear owned by **Mo / Mathias**
- Best safe reading:
  - If you were involved on the design side, this source supports **participation in concept/mockup work or design follow-ups**, but it does **not** support claiming sole ownership from this document alone.

## Key evidence

- **“Beginning Q2 2024, we began researching and designing a Decluttered List Page Card.”**
- **“tested the experience on mWeb 3 times (twice in DE, once in IT)”**
- **“Double digit growth in both total leads and total dealer leads”**
- **“Improved both total Detail Page Views (DPV) and total Dealer DPVs... by 130-140%... worth 200K EUR”**
- **“Improved performance of Check24 conversions (mWeb-DE 2nd test)”**
- **“Our goal is to rollout a Decluttered List Page Card to all platforms by end of Q2 2025.”**
- **“------IGNORE BELOW ------”**
- **“The following pages are for Search Funnel team follow-ups”**
- **“Go with ‘sponsored’ on top of card”**
- **“Finance partner: Compass only, cars only.”**
- **“We can remove the entry for range (city) on the list item. It is not needed from a legal perspective.”**
- Comment on the same topic: **legal review was still ongoing** for whether any range value should appear.

## Useful for

- **Business context**
- **Approach**
- **Key decisions**
- **Tradeoffs**
- **Validation** (early mWeb only)
- **Outcomes** (early mWeb only)
- **Strategic importance**
- **Timeline**

Less useful for:

- **Problem**
- **Diagnosis**

This source is operational and rollout-oriented, not a strong original problem-framing document.

## Risks / possible confusion

- The document is **part direct rollout source, part appended follow-up notes**. The **“IGNORE BELOW”** marker matters.
- It contains **draft artifacts**:
  - placeholders (**XXX**, **Feb XX**)
  - an incomplete sentence
  - inconsistent status spelling (**“Not stared”**)
- The source can easily be conflated with a **finance / partner-link substream**, because **Check24**, finance/insurance links, and partner integrations are prominent throughout.
- The source should **not** be treated as proof that all-platform rollout was completed by Q2 2025; it only proves that this was the target plan at that time.
- The source does **not** use “reduce cognitive load” language; it frames the work in performance, rollout, and stakeholder-impact terms.
- Country/platform scope is uneven:
  - mWeb and desktop tables are specifically **DE / Car**
  - iOS and Android tables leave market/vehicle blank
  - later follow-ups mention **Italy, BE, NL, AT, non-DE non-car, white labels**
- Some body text is softened or partially contradicted by comments:
  - example: body says range removal is legally fine; comment says legal review was still ongoing
- Android is framed as **“new UI”** in places rather than explicitly as **test #1**, which may indicate platform-specific implementation differences.

## Confidence

- **High**
- **Why:** This is one of the strongest direct sources for **execution details**: it gives dates, owners, statuses, platform sequencing, stakeholder concerns, and several concrete business metrics.
- **Limits:** It is still a **draft planning document**, so it is stronger for **timeline / ownership / rollout mechanics / stakeholder tradeoffs** than for **final outcomes** or **clean problem framing**.

...

## S11 — 11.presentation_roll-out-cross-Country Review_09.10.2025.pptx

# Source Analysis: 11.presentation_roll-out-cross-Country Review_09.10.2025

## Relevance

- **Direct**
- Why:
  - The deck title is **“Declutter List Page Card Cross-Country Review”** and it is dated **9 October 2025**.
  - It is explicitly about **Declutter / Decluttered list page**, not a generic search-funnel initiative.
  - It covers **why**, **product scope**, **country/platform rollout**, and includes an appendix linking to the underlying **Consumer Analytics deep dives / AB tests**.
  - It is especially strong for **late-stage rollout framing and decision-making**, less strong for detailed experiment methodology or your personal role.

## Confirmed facts

- **Dates**
  - Deck date: **9 October 2025**.
  - Rollout target dates shown in the deck:
    - **Mobile App: Oct-31**
    - **Mobile Web & Desktop: Nov-7**
    - With note: **“\* pending OMP Web test launch”**
  - Comment thread inside the file shows review activity on **4 September 2025** and completion on **9 October 2025**.
  - The file metadata shows later modification in **February 2026**, so the filename/title date and the file’s last-save timestamp are not the same thing.

- **People**
  - **Greg / Gregory Hamill** is explicitly named.
    - “Greg” appears as the named lead/presenter on section divider slides.
    - Gregory Hamill replies in an internal comment thread validating rollout mocks against tested versions.
  - **Miriam Kockler** is identifiable from the comment metadata as the person who asked Gregory Hamill to confirm whether the mock matched the tested/tracked insurance version.
  - **Consumer Analytics** is named as the source of the supporting deep dives in the appendix.

- **Project names / aliases**
  - **Declutter List Page Card**
  - **Decluttered list page**
  - **Declutter**
  - The deck is repeatedly branded as **Search Funnel Update**, which ties it to the search-funnel workstream.

- **Goals / problem framing**
  - Initiative hypothesis:
    - **“By reducing the cognitive load / simplifying the information hierarchy on the List Page offers, visitors will more easily browse List Page offers, and find ones that are suitable for them. This will drive more DPVs and enquiries.”**
  - Additional product framing:
    - **“By end of 2025: Our visitors will know when they are, in fact, on a List Page, and, with low effort, find relevant offer details for them.”**
  - Explicit business rationale:
    - **Maximize dealer lead growth**
    - **Generate positive or neutral impact on supporting KPIs (e.g. media revenue)**
    - **Create upsell triggers to entice users to our premium mobile app experiences**

- **Decisions / rollout choices**
  - The deck states the proposed rollout approach:
    - **Mobile web: “No Gallery” version**
    - **iOS and Android: “Gallery” version**
    - **Desktop: “No Gallery” version**
  - It also states:
    - **“In 2026, we will push users from mWeb to the ‘premium mobile app experience’”**
  - Germany rollout work is broken out into specific design areas:
    - **Price assessment**
    - **Tags**
    - **Partner links (Finance and Insurance)**
    - **Combined key changes**
  - Country/platform rollout views shown:
    - **Germany mobile web**
    - **Germany mobile app (iOS / Android)**
    - **Germany desktop**
    - **Italy mobile web**
    - **Belgium mobile web**
    - **Netherlands mobile web**
    - **Austria mobile web**
  - Belgium slide note:
    - **“FR and LUX will look similar to BE. Designs will be created after this sync.”**

- **Metrics**
  - The deck repeats summary metrics from the **2nd mobile web AB test** with two unnamed variants.
  - **DPVs from List Page**
    - Total: **+134% / +134%**
    - Dealer: **+134% / +135%**
    - Privates: **+130% / +130%**
  - **DPVs from all traffic sources**
    - Total: **+91% / +91%**
    - Dealer: **+91% / +91%**
    - Privates: **+92% / +91%**
  - **Enquiries from List Page**
    - Total: **+8% / +5%**
    - Dealer: **+13% / +11%**
    - Privates: **No change / -14%**
  - **Enquiries from all traffic sources**
    - Total: **+4% / No change**
    - Dealer: **+7% / +5%**
    - Privates: **-9% / -11%**
  - Desktop-specific summary statement:
    - **“‘No Gallery’ on Desktop only very slightly increases Media revenue. Other core metrics remain stable.”**

- **Outcomes / intended outcome**
  - Proposed next step is broad rollout:
    - **“Rollout to all EU markets -> all platform & vehicle types”**
  - This source is about a **planned rollout**, not post-rollout results.

- **Constraints / caveats**
  - **OMP Web test launch** is a gating item for mobile web and desktop rollout timing.
  - **FR/LUX designs** were not yet ready at the time of this review.
  - The rollout mocks shown were **not fully identical** to the tested version:
    - Gregory Hamill says they are **“very close”**, not exact.

- **Timeline details**
  - The appendix gives the supporting experiment sequence:
    1. **[mWeb] Proof-of-concept test** in DE
    2. **[mWeb] Partner links, test #1** in DE and IT
    3. **[mWeb] Partner links, test #2** in DE, IT, NL
    4. **[iOS] Validating call leads, test #1** in DE
    5. **[iOS] Validating call leads, test #2** in DE and IT
    6. **[Desktop] test #1** in DE and IT
  - The appendix names the specific analysis files, including:
    - **ABTEST655** (IT mWeb)
    - **ABTEST662** (NL)
    - **ABTEST695** (DE iOS)
    - **ABTEST700** (IT iOS)
    - **ABTEST674** (DE Desktop)
    - **ABTEST675** (IT Desktop)

## Possible facts / inferences

- This looks like a **late-stage rollout review / sign-off deck**, not an early concept deck.
  - Confidence: **High**
- The rollout recommendation appears to be based on **multiple experiments across mWeb, iOS, and desktop**, not only the repeated mWeb summary table.
  - Confidence: **High**
- The deck likely reflects a **localized rollout system** rather than a single global design, because country-specific mockups are shown and Belgium explicitly notes future FR/LUX adaptation.
  - Confidence: **High**
- The repeated **“Search Funnel Update / December 19th”** footer is likely reused template content or older embedded material, not the actual date of this review.
  - Confidence: **High**
- The Germany rollout mocks appear to be **rollout-ready adaptations of tested variants**, not exact copies of what was tested. This is directly supported by the comment thread.
  - Confidence: **High**
- Greg likely had a **decision / validation role** rather than only being a passive attendee, because the deck assigns him named sections and the comments ask him to verify fidelity to tracked test variants.
  - Confidence: **Medium**
- This source may represent a **later decision change** relative to adjacent decks, especially on mobile-web gallery strategy.
  - Confidence: **High** on the difference, **Medium** on the reason.

## My role

- This source does **not** identify you by name.
- It does **not** let me confirm what you personally owned, drove, or decided.
- What the source does suggest:
  - Someone on the deck/mockup side was coordinating rollout visuals and checking fidelity against tested versions.
  - **Gregory Hamill** was a named validator/decision partner in that process.
  - **Miriam Kockler** is tied to at least one concrete review/validation exchange in the file comments.
- What appears to have been owned by others:
  - **Gregory Hamill** appears to have had a product/decision role on rollout choices and test-version validation.
  - **Consumer Analytics** appears to have owned the deep-dive analyses referenced in the appendix.
- Bottom line:
  - **No reliable claim about your personal ownership can be made from this source alone.**

## Key evidence

- Slide 4:
  - **“By reducing the cognitive load / simplifying the information hierarchy…”**
- Slide 5:
  - **“By end of 2025… visitors will know when they are, in fact, on a List Page…”**
- Slide 6:
  - **“Why should AS24 Declutter at all?”**
  - **“Maximize dealer lead growth”**
  - **“Generate positive or neutral impact on supporting KPIs (e.g. media revenue)”**
  - **“Create upsell triggers to entice users to our premium mobile app experiences”**
- Slide 8:
  - **“‘No Gallery’ on Desktop only very slightly increases Media revenue. Other core metrics remain stable.”**
- Slide 12:
  - **“Mobile web: ‘No Gallery’ version”**
  - **“IOS and Android: ‘Gallery’ version”**
  - **“Desktop: ‘No Gallery’ version”**
- Slide 22:
  - **“FR and LUX will look similar to BE. Designs will be created after this sync”**
- Slide 26:
  - **“Rollout to all EU markets -> all platform & vehicle types”**
  - **“Mobile App: Oct-31”**
  - **“Mobile Web & Desktop: Nov-7\*”**
  - **“\* pending OMP Web test launch”**
- Internal comment on DE rollout mock slides:
  - Question to Gregory Hamill: **“is this 100% the version we tested and tracked for insurance?”**
  - Gregory Hamill reply:
    - **“It’s very close! The main differences are 1) we place the yellow tag with car info; 2) we want to use a new Price Assessment (eg Very Good) design”**
    - **“The placement of Finance and Insurance links (for DE) is the same between what we tested and what you see here”**

## Useful for

- **Business context**
- **Problem**
- **Approach**
- **Key decisions**
- **Tradeoffs**
- **Validation**
- **Strategic importance**
- **Timeline**
- Less useful for:
  - **Diagnosis** at detailed research level
  - **Outcomes** beyond planned rollout
  - **Your role** / ownership attribution

## Risks / possible confusion

- This deck can be mistaken for a **partner-links / Check24 / finance** project rather than the broader declutter project, because many slides reuse the **2nd mobile web AB test** header and metrics.
- It is a **rollout review deck**, not a raw-results source:
  - variant labels are not explained here
  - no methodology details
  - no sample sizes
  - no significance framework in the main body
- The deck contains **rollout mocks**, but comments confirm they are **not 100% identical** to the tested versions.
- The repeated **“December 19th”** footer is easy to misread as the review date; the actual deck date is **9 October 2025**.
- The file metadata shows modification in **February 2026**, so it may contain later edits beyond the original October 2025 review state.
- It differs from other likely project descriptions:
  - Compared with the **08 Oct 2025 overview deck**, this source recommends **No Gallery on mobile web**, whereas the overview deck recommends **Gallery for mobile web and apps**.
  - Compared with the **28 Mar 2025 rollout plan**, this source shows a much later rollout timing (**Oct/Nov 2025** vs a prior goal of rollout to all platforms by **end of Q2 2025**).
- It may overlap with adjacent substreams:
  - **partner links**
  - **Check24 insurance**
  - **finance link placement**
  - **desktop no-gallery validation**
  - Those are clearly connected here, but they are not identical to the whole declutter story.

## Confidence

- **High**
- Why:
  - It is directly about the correct project and late-stage rollout.
  - It contains explicit product rationale, rollout decisions, scope, timing, and linked evidence sources.
  - The internal comments materially improve confidence on what was finalized vs merely mocked.
  - Limits:
    - weak for personal-role attribution
    - weak for deep experiment method
    - includes some reused/ambiguous slide framing that can confuse chronology

...

## S12 — 12.presentation-internal-alignment-19.02.2025.pptx

# Source Analysis: 12.presentation-internal-alignment-19.02.2025

## Relevance

- **Direct**
- Why:
  - The deck is explicitly titled **“BSG Internal Alignment on Declutter”** and dated **19 Feb 2025** (slide 1).
  - It contains the project hypothesis, OKR/business framing, results from the **2nd DE mobile-web Declutter test**, and proposed next steps for mWeb, desktop, and apps (slides 2, 7–8, 24–32).
  - It is **not** a full end-to-end project summary. It is mainly a **decision/alignment deck for the Feb 2025 phase**, centered on the DE mobile-web partner-links test.

## Confirmed facts

- **Dates**
  - Deck date: **19 Feb 2025** (slide 1).
  - Prior Declutter mobile-web experiments were run in **Oct 2024 in DE and IT** (slide 2).
  - Prior conclusions referenced a **Consumer Analytics Declutter deepdive from Nov 2024** (slide 2).
  - The current test analysis in this deck comes from a **Consumer Analytics deepdive in Feb 2025** (slide 6).
  - A **March 31** timing constraint was active for Check24 / test planning (slides 28–30).

- **People / teams / partners**
  - **Consumer Analytics (CA)** is named as the analytics source for this deck’s test findings (slide 6).
  - **Check24** is the explicit insurance partner in scope (slides 3, 8, 24, 27–28).
  - **AS24 / BSG** are the internal org contexts referenced (slides 1–2, 28).
  - **Greg Hamill is not mentioned in this source.**
  - No named owner, PM, designer, or analyst is explicitly identified in the slide content.

- **Project names / aliases**
  - The work is referred to as **“Declutter”**, **“Declutter the List Page Card”**, and **“Decluttered List Page card”** (slides 1–2, 29, 32).
  - The deck repeatedly frames the current work as the **“2nd mobile web AB test”** / **DE Declutter mWeb test** (slides 3, 7–8, 24–29).

- **Goals / business context**
  - Relevant OKR: **“Grow conversion of engaged users by 5%”** (slide 2).
  - It is positioned as supporting **Big Rock 2025: “Seamless results exploration and comparison”** (slide 2).
  - Stated hypothesis: reducing **cognitive load** / simplifying the **information hierarchy** on List Page offers should help visitors browse offers more easily and find suitable ones, driving **more DPVs and enquiries** (slide 2).

- **Prior learning carried into this deck**
  - Before the Feb 2025 test, the team had run **two earlier mobile-web experiments in Oct 2024 in DE and IT** (slide 2).
  - Those earlier results are summarized as:
    - strong movement in **total DPVs** and **total leads** for both variants,
    - the **“most decluttered”** version performed better,
    - that winning version **did not include Finance or Insurance partner links**,
    - **finance conversions were stable** despite removing those links (slide 2).
  - The deck says the team then aligned with **Check24** to run a **DE mobile-web test** to understand the impact of **adding partner links back** (slide 2).

- **Design / experiment decisions**
  - The **2nd mobile-web AB test** was **DE only** (slide 7).
  - In this test, **Variant 2 has the partner links**, but the **touch target is limited to the Blue CTA** (slide 7).
  - The explicit test questions were:
    - impact of Check24 + Finance links on **lead growth from List Page**,
    - impact on **Check24 conversions / conversion rate**,
    - whether **Finance lead parity** would be maintained (slide 8).

- **Metrics / result details**
  - Reporting caveats:
    - only metric changes significant at **95%** are reported (slides 5–6),
    - metrics are from **List Page unless otherwise stated** (slides 5–6),
    - “total” lead metrics still counted **repeat enquiries from the same user to the same listing** at meeting time, with planned post-meeting correction to **one unique user lead per unique listing** (slides 5–6).

  - **2nd DE mWeb test: DPVs** (slide 9)
    - From List Page:
      - Total: **+134% / +134%** (V1 / V2)
      - Dealer: **+134% / +135%**
      - Private: **+130% / +130%**
    - All traffic sources:
      - Total: **+91% / +91%**
      - Dealer: **+91% / +91%**
      - Private: **+92% / +91%**

  - **2nd DE mWeb test: Enquiries** (slide 9)
    - From List Page:
      - Total: **+8% / +5%** (V1 / V2)
      - Dealer: **+13% / +11%**
      - Private: **No change / -14%**
    - All traffic sources:
      - Total: **+4% / No change**
      - Dealer: **+7% / +5%**
      - Private: **-9% / -11%**

  - **Users with a lead by lead type** (slides 21–23)
    - Overall:
      - Total: **+11% / +9%**
      - Dealer: **+14% / +13%**
      - Private: **No change / -9%**
    - WhatsApp:
      - Total: **+29% / +33%**
      - Dealer: **+29% / +33%**
    - Call:
      - Total: **+14% / +12%**
      - Dealer: **+18% / +14%**
    - Email:
      - Total: **No change / -9%**
      - Dealer: **No change / No change**
    - The deck explicitly says: **“Private emails seem to be VERY problematic.... we need to investigate further to understand why”** (slide 23).

  - **Insurance / Check24 impact** (slide 24)
    - Funnel entries: **-56% / -31%** (V1 / V2)
    - Check24 CVR, visit → result: **+138% / +54%**
    - Results / leads: **-6% / No change**

  - **Finance impact** (slide 25)
    - Total funnel entries: **-36% / -16%** (V1 / V2)
    - Dealer financing funnel entries: **-34% / -13%**
    - Consumer financing funnel entries: **-37% / -18%**
    - CVR entry → lead: **+31% / No change**
    - Total leads: **-16% / -16%**
    - Dealer financing leads: **-16% / -7%**
    - Consumer financing leads: **-16% / -20%**

  - **Summary matrix** (slide 26)
    - Lead growth:
      - Dealer: **Positive / Positive** (V1 / V2)
      - Private: **Neutral / Negative**
    - Check24 Insurance:
      - Conversion (all users): **Negative / Neutral**
      - Conversion rate (from entry): **Positive / Positive**
    - Finance conversions (all users): **Negative / Negative**
    - Go / no-go KPIs: **To be determined** for both variants

- **Outcomes / decisions at this point**
  - The deck states both variants had potential **“No-go”** factors (slide 27).
  - **Finance underperformed** and required iteration (slide 27).
  - The **dealer vs private lead trade-off** required broader alignment (slide 27).
  - **Variant 2** is described as looking **more promising because of Check24 performance** (slide 27).
  - The deck says **Check24 had already verbally agreed to let the team roll out Variant 2** (slide 27).
  - Despite that, go/no-go was **not finalized**; the deck still marks those KPIs as **to be determined** (slide 26).

- **Constraints / open questions**
  - Exact causes of the **private lead loss** were still unclear and needed more investigation (slide 28).
  - The deck explicitly asks whether this is a good moment to conduct **UXR** (slide 28).
  - It warns that **dealer reported metrics**, as currently calculated, would likely **drop significantly** (slide 28).
  - Speaker notes on slide 28 add rollout validation questions about impact on:
    - performance products (**NFM, T50, NWL, Smyle / visibility / CTR**),
    - **MIA** products and reporting,
    - engaged-user metrics,
    - **favorites**,
    - **sharing** between List Page and Detail Page,
    - **Leasing** detail pages / leads,
    - possible **LeasingMarkt** impact.

- **Timeline / next-step details**
  - Planned next steps:
    - finish analysis of the current experiment,
    - assess Declutter impact on **other teams / products**,
    - rerun previous analyses with **deduped lead logic**,
    - run **Declutter mWeb test 3**,
    - begin **desktop** development/testing,
    - begin app UI development needed for **trader integration**, then test on both app platforms (slide 29).
  - Proposed **mWeb test 3** rationale:
    - Var 1: test whether **insurance eats finance leads**,
    - Var 2: use the **more performant** variant from test 2,
    - Var 3: useful for markets with **logos**, but optional if runtime needs to be reduced (slide 30).
  - Desktop plan:
    - the deck says the team **“effectively know[s] nothing”** about response to a decluttered desktop experience,
    - recommends testing **several variants**,
    - especially around the **gallery experience** (slide 31).
  - App plan:
    - **build necessary UI elements, then test**,
    - examples show partner links represented on the right side of the Decluttered List Page card (slide 32).

## Possible facts / inferences

- This deck is primarily about the **DE mobile-web partner-links decision point**, not the whole Declutter program.
  - **Confidence: High**

- The work is operating inside a **Search Funnel** business context rather than as a standalone visual cleanup.
  - Basis: repeated **“Search Funnel Update”** framing plus OKR / partner / funnel metrics.
  - **Confidence: High**

- **UXR** is being considered as a **follow-up diagnostic step** for private-lead loss, not as the original driver of the project.
  - **Confidence: Medium**

- The percentage-change baseline is **probably** a live/control List Page card, but this deck does **not** consistently restate the baseline on the result slides.
  - **Confidence: Medium**

- Variant numbering is **not stable across phases** and should not be treated as one fixed design across the entire project:
  - in the earlier Oct 2024 summary, the winning **“most decluttered”** version is described as lacking partner links (slide 2),
  - but in the Feb 2025 DE-only test, **Variant 2 explicitly has partner links** (slide 7).
  - **Confidence: High**

## My role

- This source does **not** identify you personally by name, role, or ownership.
- What it suggests the core team owned or drove:
  - hypothesis framing,
  - internal alignment,
  - test setup decisions,
  - synthesis of analytics findings,
  - proposals for mWeb / desktop / app follow-up work.
- What appears owned by others:
  - **Consumer Analytics**: analysis / deepdives (explicitly named in slide 6),
  - **Check24 / partner stakeholders**: negotiation / rollout permission around insurance links,
  - broader **AS24 / BSG stakeholders**: trade-off acceptance and rollout alignment.
- Safe read on your personal ownership from this source:
  - **No explicit evidence.**
  - It is useful for showing the team’s decision context, but **not** for proving your individual scope.

## Key evidence

- “**Grow conversion of engaged users by 5%**” (slide 2)
- “**Supporting Big Rock 2025 Seamless results exploration and comparison**” (slide 2)
- “**By reducing the cognitive load / simplifying the information hierarchy on the List Page offers... This will drive more DPVs and enquiries**” (slide 2)
- “**Results showed very strong movement... but the ‘most decluttered’ performed better**” (slide 2)
- “**Variant 2 has the partner links. However, the touch target is limited to the Blue CTA**” (slide 7)
- “**Metric changes are only reported if they are significant at 95%**” (slide 5)
- “**To improve quality of our findings... one unique user lead per unique listing**” (slides 5–6)
- Private lead signal:
  - From List Page enquiries: **Private = No change / -14%** (slide 9)
  - “**Private emails seem to be VERY problematic**” (slide 23)
- “**Both variants have potential ‘No-go’ factors; Finance underperformed**” (slide 27)
- “**Variant 2 ... looks ‘more’ promising because of Check24 performance**” (slide 27)
- “**Check24 has already (verbally) agreed to let us roll-out Variant 2!**” (slide 27)
- “**Exact causes are unclear and require further investigation. Is this a good opportunity to conduct UXR?**” (slide 28)

## Useful for

- **Business context**
- **Problem**
- **Diagnosis**
- **Approach**
- **Key decisions**
- **Tradeoffs**
- **Validation**
- **Strategic importance**

Less useful for:

- **Final outcomes** — this is midstream, not a final rollout readout.
- **My role** — the source does not attribute individual ownership.

## Risks / possible confusion

- This is easy to conflate with the **whole Declutter project**, but most of the concrete evidence is about **one DE mobile-web test phase** focused on **partner-link trade-offs**.
- **Variant numbering is unstable across phases**. Do not assume “Variant 2” means the same exact UI in Oct 2024 and Feb 2025.
- The repeated **“December 19th”** footer is unreliable; the deck itself says incorrect dates came from bad copy/paste (slide 6). Use **19 Feb 2025** from slide 1 as the source date.
- Some lead metrics were still using **repeat enquiries** at meeting time, so raw lift figures were expected to be corrected later.
- The private-lead story is **not resolved** in this deck:
  - earlier DE test private impact is described as unclear,
  - exact value was missing from the prior deepdive,
  - rerun analysis was planned (slides 18–20).
- There is at least one internal source-label inconsistency during the animated build:
  - one build references a **PA deepdive**,
  - later builds reference **CA deepdive**,
  - which fits the deck’s own warning about copy/paste issues.
- The project index flags **S12 + S13 + S14** as a likely **deck-evolution chain**. This matters because:
  - **S12** = internal alignment / unresolved decision context,
  - **S13** = more focused stakeholder cut,
  - **S14** = later historical overview.
    Treat them as overlapping evidence, not independent projects.
- Slide 1 speaker notes contain obvious **template filler** and should not be used as project evidence.

## Confidence

- **High**
- Why:
  - The source is directly about Declutter and contains concrete business framing, test setup details, result metrics, trade-offs, and next-step proposals.
  - It is especially strong for **problem framing, business context, validation, and decision context** in Feb 2025.
  - Reliability is reduced somewhat by:
    - copy/paste/template artifacts,
    - unstable variant numbering across phases,
    - and known caveats in lead calculation / unresolved private-lead analysis.

...

## S13 — 13.presentation-finance-partner-24.02.2025.pptx

# Source Analysis: 13.presentation-finance-partner-24.02.2025

## Relevance

- Supporting
- Why:
  - This source is explicitly about **“Declutter the List Page Card”** and the **DE mWeb experiment v2** with **Check24 insurance** and **Finance links**.
  - It is useful for **business context, tradeoffs, experiment results, rollout questions, and timeline**.
  - It is **not** the core project-definition or core design-rationale document. It is a **partner / finance / rollout decision deck for a later iteration** of the Declutter work.

## Confirmed facts

- Dates
  - Title slide date: **24 Feb 2025**.
  - File metadata shows the deck was modified on **1 Mar 2025**.
  - Slides 17–18 carry a footer date of **01.03.2025**.
  - The deck says the earlier **first 2 mobile web experiments ran in Oct 2024 in DE & IT**.
  - The deck cites a **Consumer Analytics Declutter deepdive from Nov 2024** for prior conclusions.
  - The deck says findings for the current experiment come from a **Consumer Analytics deepdive in Feb 2025**.
  - Planned next-step ETAs:
    - **3 Mar 2025**: finish data analysis of the Declutter mWeb Check24 test
    - **7 Mar 2025**: iterate and launch next experiments in DE and IT
    - **31 Mar 2025**: align with stakeholders on rollout strategy
    - **ongoing**: backlog with CA integration teams on the ONE Marketplace

  - The deck explicitly references the **Check24 negotiation end date as March 31**.
  - The deck also warns: **“Any incorrect dates are a result of the bad copy/paste of this doc editor.”**

- People
  - **Gregory Hamill** appears in author metadata and authored comment threads in the deck.
  - **Miriam Kockler** appears in author metadata and replies in comment threads on finance / revenue assumptions.
  - **Anastasiia Makarenko** appears in author metadata and replies in comment threads.
  - **Andreia Rocha** is referenced in a comment about a spreadsheet used for finance-loss numbers.
  - **Consumer Analytics (CA)** is the named source of experiment data and analysis.
  - Stakeholder groups named for rollout alignment:
    - **Country GMs**
    - **BSG**
    - **Marketing**
    - **Sales**
    - **Customer Success**
    - **M&F**
    - **SSG**
    - **S&P**

- Project names / aliases
  - **Declutter the List Page Card**
  - **Declutter project**
  - **Search Funnel Update**
  - Baseline: **Current List Page card**
  - Variants:
    - **Most Decluttered (no links)**
    - **Most Decluttered (with links)**
    - **Most Decluttered (with Finance)**
    - **Slightly Decluttered (scrollable gallery)**
    - **Slightly Decluttered (gallery preview)**

  - Experiment labels:
    - **2nd mobile web AB test**
    - **3rd mobile web AB test**
    - **1st desktop AB test**

- Goals / business context
  - The deck states: the project aims to **“enhance our visitor’s offer browsing experience by simplifying the information hierarchy on the List Page cards.”**
  - The initiative hypothesis is that **reducing cognitive load / simplifying information hierarchy** should help users browse more easily and find suitable offers, which should drive **more DPVs and enquiries**.
  - It explicitly ties the work to:
    - **Relevant OKR: Grow conversion of engaged users by 5%**
    - **Big Rock 2025: Seamless results exploration and comparison**

  - A core business question in this deck is whether adding back **insurance** and **finance** partner links changes the outcome enough to affect rollout.

- Design decisions / experiment setup
  - The current source phase is about a **DE-only** mWeb test.
  - In the **2nd mobile web AB test**, the **“Most Decluttered (with links)”** variant includes **Finance and Insurance partner links**.
  - The deck states a design limitation in that test: the **touch target was limited to the blue CTA**.
  - Recommendation in this deck:
    - **Iterate on “Most Decluttered (with links)” before rolling out on mWeb**
    - Use it to generate learnings for a **future rollout on all platforms**

  - Proposed next design / test changes:
    - For the **3rd mobile web AB test**, change the **presentation / copy of the partner links to increase touch target**
    - Compare **“Most Decluttered (with links)” vs “Most Decluttered (with Finance)”** to test whether **Insurance cannibalizes Finance leads**

  - Desktop proposal:
    - Start a **1st desktop AB test**
    - Test multiple variants, especially around the **gallery experience**

  - App proposal:
    - Begin building **reusable UI components / necessary UI elements**
    - Then test on **iOS and Android**
    - The slide says these UI elements are needed for **trader integration**

- Validation / methodology
  - The deck says:
    - Only metric changes significant at **95%** are reported.
    - All changes are relative to the **“Current List Page card”**.
    - All reported metrics are from **List Page**, unless otherwise stated.
    - “Total” metrics do **not** count repeat enquiries from the same user to the same listing.
    - Findings are from **Consumer Analytics**.

  - The deck separately notes that the meaning of **“Lead”** is not fully formalized here; it says it **most likely** refers to a **Detail Page lead** rather than Finance or Insurance.

- Metrics: core List Page outcomes from mWeb test 2
  - **Most Decluttered (no links)** vs baseline:
    - **DPVs from List Page: +143%**
    - **Total enquiries from List Page: +9%**
    - **Dealer enquiries from List Page: +13%**
    - **Private enquiries from List Page: no change**

  - **Most Decluttered (with links)** vs baseline:
    - **DPVs from List Page: +144%**
    - **Total enquiries from List Page: +7%**
    - **Dealer enquiries from List Page: +12%**
    - **Private enquiries from List Page: -11%**

  - The summary slide interprets this as:
    - both decluttered variants delivered **double-digit Dealer lead growth**
    - the **with-links** variant introduced a meaningful **Private lead downside**

- Metrics: channel / sub-metric breakdown
  - **Dealer WhatsApp from List Page**
    - no links: **+30%**
    - with links: **+34%**

  - **Calls from List Page**
    - no links:
      - total: **+13%**
      - dealer: **+17%**
      - private: **no change**

    - with links:
      - total: **+9%**
      - dealer: **+14%**
      - private: **-13%**

  - **Email from List Page**
    - no links:
      - total: **no change**
      - dealer: **no change**
      - private: **no change**

    - with links:
      - total: **-8%**
      - dealer: **no change**
      - private: **not significant, but trending negative**

  - Specific note on private email:
    - **Private emails trend: -6%, p-value = 0.06**
    - The slide says if the experiment had run **1–2 more weeks**, the negative private-email effect would likely have become significant.

  - Another specific note:
    - The impact on **AutoMatch emails** reduced **total Dealer leads (all traffic)** for the with-links variant from **+6% to +5%** vs current card.

- Metrics: insurance impact
  - The deck frames the insurance question as whether Declutter helped Check24 or at least maintained parity.
  - **Most Decluttered (no links)**:
    - **Check24 funnel entries: -56%**
    - **Check24 visit-to-result CVR: +138%**
    - **Check24 results / leads: -6%**

  - **Most Decluttered (with links)**:
    - **Check24 funnel entries: -31%**
    - **Check24 visit-to-result CVR: +54%**
    - **Check24 results / leads: no change**

  - The recommendation slide interprets this as **stable Check24 insurance conversions** for the **with-links** variant.

- Metrics: finance impact
  - **Most Decluttered (no links)**:
    - total finance funnel entries: **-36%**
    - dealer financing entries: **-34%**
    - consumer financing entries: **-37%**
    - CVR entry-to-lead: **+31%**
    - total finance leads: **-16%**
    - dealer financing leads: **-16%**
    - consumer financing leads: **-16%**

  - **Most Decluttered (with links)**:
    - total finance funnel entries: **-16%**
    - dealer financing entries: **-13%**
    - consumer financing entries: **-18%**
    - CVR entry-to-lead: **no change**
    - total finance leads: **-16%**
    - dealer financing leads: **-7%**
    - consumer financing leads: **-20%**

  - The deck’s summary interpretation is that **Finance conversions underperformed for both variants** and require iteration.

- Tradeoffs / rollout constraints
  - The deck explicitly asks what tradeoffs the org is willing to accept among:
    - **AS24 Dealer leads**
    - **AS24 Private leads**
    - **Check24 insurance conversions**
    - **Finance conversions**

  - It asks for internal input on:
    - how to improve Finance performance
    - whether to extend the Check24 negotiation beyond **March 31**
    - how to respond to the loss of private leads
    - whether this is a good moment to run **UXR**

  - Rollout concerns listed in slide text / notes:
    - potential KPI impact on **performance products**: **NFM, T50, NWL, Smyle**
    - KPI impact on **MIA products**
    - KPI impact on **engaged users**
    - impact on **sharing**
    - impact on **Leasing Detail Pages / LeasingMarkt**

  - The deck states that **Dealer reported metrics** “will likely drop significantly” under current calculation.
  - It also notes a legal / market constraint:
    - **Logo removal needs to be checked legally per market**

- Revenue / value modeling
  - Slide 17 models German downside if proceeding with **“Most Decluttered (with links)”**:
    - **Dealer financing loss in leads: -7%**
    - **Consumer financing loss in leads: -20%**
    - approx. **5K EUR / month** dealer-financing revenue loss
    - approx. **30K EUR / month** consumer-financing revenue loss
    - total approx. **35K EUR / month**
    - total approx. **396K EUR / year**
    - This slide is explicitly marked as based on the assumption that **all devices have the same impact**

  - The same slide lists additional risks:
    - **Mercedes pilot success**
    - dealer financing leads already very low
    - revenue loss in other countries for financing CPC integrations

  - Slide 18 contains an embedded image modeling upside:
    - **7,747,000 yearly DE dealer leads**
    - **6.0% incremental total leads**
    - **464,820 incremental leads**
    - **15 EUR value per lead**
    - approx. **6.97M EUR yearly incremental lead value**
    - **1.4M EUR yearly Check24 value**
    - modeled **0.20-year payback period**

  - Important caveat:
    - deck comments show the finance-loss numbers were still being challenged and updated

- Preliminary broader upside
  - A later slide says the data is **“very preliminary”** but claims:
    - approx. **+79% uplift** for the engaged-user OKR
    - shown as roughly **14% engaged users in baseline vs 26% in both variations**

- Timeline / sequencing
  - Prior state:
    - first 2 mWeb declutter experiments already run in **DE and IT**
    - “most decluttered” won those earlier tests
    - earlier conclusion: finance conversions were stable even without Finance or Insurance links

  - Current state in this deck:
    - review of the **2nd DE mWeb test** with partner links

  - Planned next sequence:
    - finish analysis
    - run **mWeb test 3**
    - start desktop development / testing
    - build app UI elements, then test
    - align stakeholders on rollout strategy

- Internal uncertainty explicitly documented
  - The appendix says the outcome for **Private leads** in the earlier DE test was **unclear**:
    - exact total private lead growth was not reported in the CA deepdive
    - the team planned to **rerun the analysis** of the first Declutter experiments to verify the signal

## Possible facts / inferences

- This deck was likely intended for **internal finance / partner / rollout alignment**, not as the core product-design readout.
  - Confidence: **High**

- The source captures a **later phase** of the Declutter project:
  - the base declutter concept had already been tested,
  - and this phase is about **reintroducing partner links** and deciding what is acceptable to roll out.
  - Confidence: **High**

- **Gregory Hamill** appears to be driving the decision narrative and presentation edits, and was likely one of the main owners of this workstream.
  - Confidence: **Medium**
  - Reason: strong metadata / comment evidence, but the deck does not explicitly state his role/title.

- **Miriam Kockler** and **Anastasiia Makarenko** were likely contributing finance / business-input assumptions rather than product-design decisions.
  - Confidence: **Medium**

- The team was likely planning a **DE-specific iteration** on partner-link presentation while keeping other markets more similar to current content presentation.
  - Confidence: **Medium**
  - Reason: this appears in comments, not as a finalized slide decision.

- The **slide 17 finance downside numbers were not final** at the time this deck was being edited.
  - Confidence: **High**
  - Reason: comments explicitly question the -20% figure and monthly / yearly consistency.

- Desktop and app slides represent **proposals / next steps**, not confirmed shipped work.
  - Confidence: **High**

## My role

- What this source suggests I personally owned or drove
  - **No direct evidence.**
  - This source does **not** name you, attribute decisions to you, or assign you ownership of the project, experiments, or rollout plan.
  - This source does **not** support claiming that you personally owned the analytics, business-case math, partner negotiation, or final rollout decision.

- What appears to have been owned by others
  - **Consumer Analytics** appears to own the deep-dive analysis.
  - **Gregory Hamill** appears to drive framing, recommendations, and comment-thread follow-ups.
  - **Miriam Kockler** and **Anastasiia Makarenko** appear involved in finance-loss / revenue assumptions.
  - **Andreia Rocha** is referenced as a source for spreadsheet-based finance numbers.
  - Broader rollout alignment appears to involve multiple stakeholder groups across the org.
  - Design work is clearly present in the source (variants, desktop gallery options, app UI elements), but **no owner is named**.

## Key evidence

- “**The Declutter project aims to enhance our visitor’s offer browsing experience by simplifying the information hierarchy on the List Page cards.**”
- “**Relevant OKR: Grow conversion of engaged users by 5%**”
- “**By reducing the cognitive load / simplifying the information hierarchy on the List Page offers… This will drive more DPVs and enquiries**”
- “**“Most Decluttered (with links)” showed significant negative movement for total Private leads, mostly due to Private emails.**”
- “**“Most Decluttered (with links)” had stable Check24 insurance conversions vs our “Live List Page card”**”
- “**Both variants have a potential “No-go” factor; Finance conversions underperformed for both and we should iterate.**”
- “**the touch target is limited to the Blue CTA**”
- “**For all variants, we have changed the presentation (eg copy) of the partner links to increase touch target**”
- “**Check24 has already (verbally) agreed to let us roll-out “Most Decluttered (with links)”**”
- “**Private emails was trending negative… –6% (p-value = 0.06)**”
- “**Dealer reported metrics (as currently calculated) will likely drop significantly. What is our approach here?**”
- “**Any incorrect dates are a result of the bad copy/paste of this doc editor.**”
- Comment evidence showing uncertainty in finance figures:
  - “**How come the Monthly figure is less than the Annual Figure / 12 months?**”
  - “**In Andriea’s spreadsheet, I see the loss as about -13% to -15% for Dealer and Consumer Financing**”
  - “**if we decrease by 7 to 20% that’s harming our product in addition to the revenue loss**”

## Useful for

- **Business context**
- **Problem**
- **Approach**
- **Key decisions**
- **Tradeoffs**
- **Validation**
- **Outcomes**
- **Strategic importance**

Weak for:

- **My role**
- early **diagnosis**
- clean, final **outcome statement** for the whole project

## Risks / possible confusion

- The deck contains several **template / copy-paste artifacts**:
  - generic slide-1 speaker notes about a PPT template
  - repeated **“December 19th”** footer on many slides
  - **“Name of Presentation”** on slides 17–18
  - explicit warning that some dates are wrong

- This source is easy to conflate with:
  - the **broader Declutter / Reduce Cognitive Load project**
  - the **earlier Oct 2024 no-links experiments**
  - later **desktop / app rollout workstreams**

- The source is heavily framed around **Check24 / Finance / revenue tradeoffs**, so it should not be treated as the sole source of truth for the original product problem or design rationale.
- The strongest hard evidence is for **DE mWeb**. Desktop and app content is mostly **proposal-stage**.
- The finance-loss figures on slide 17 were still being debated in comments, so they should be treated as **provisional**.
- The appendix shows that even the team considered some earlier signals—especially **Private leads**—to be **unclear** and worth re-running.
- If other project materials place a core readout in **Q3/Sep 2024**, this deck’s statement that earlier experiments ran in **Oct 2024** should be cross-checked; it may reflect experiment date vs readout date, or simply this deck’s known date noise.

## Confidence

- **Medium**
- Why:
  - Strong source for **business framing, tradeoffs, experiment metrics, organizational alignment, and next-step planning**
  - Weak source for **your personal role**
  - Several parts of the deck show **date noise, template residue, and unresolved finance assumptions**
  - Useful, but it should be paired with a more core Declutter source for final case-study reconstruction

...

## S14 — 14.presentation-final-overview-23.05.2025.pptx

# Source Analysis: 14.presentation-final-overview-23.05.2025

## Relevance

- **Direct**
- Why:
  - The deck is explicitly about **“Declutter the List Page Card”** and includes strategy framing, experiment results, recommendations, and rollout planning.
  - It is not a clean single-project report. It is a **stitched overview / historical journey deck** spanning IT and DE mWeb work plus desktop/app follow-ons.
  - Relative to the source table you shared, this reads more like a **later synthesis / alignment deck** than the likely original core project doc.

## Confirmed facts

- **Dates**
  - File metadata shows the deck was **modified on 23 May 2025**.
  - Internal section/cover slides show **24 Feb 2025**, **25 Feb 2025**, and **03 Mar 2025**.
  - Many slides show **“December 19th”** in the footer, but the deck itself says: **“Any incorrect dates are a result of the bad copy/paste of this doc editor.”** Those footer dates are unreliable (slides 4, 23).
  - Executive-summary next-step ETAs (slide 24):
    - **Finish data analysis of Declutter mWeb Check24 test — 3 Mar 2025**
    - **Iterate and launch next experiments in DE and IT — 7 Mar 2025**
    - **Align with stakeholders on future rollout strategy — 31 Mar 2025**
    - **Build backlog of future ideas with CA integration teams on ONE Marketplace — ongoing**

- **People**
  - **Consumer Analytics (CA)** is explicitly cited as the source of experiment data / deep-dives (slides 4, 23).
  - **Gregory Hamill** appears in PowerPoint change metadata as an active editor on multiple slides in **March–April 2025**.
  - **Check24** is a named external partner/context in the DE with-links experiment.
  - **CA integration teams** are named as collaborators for future backlog building (slide 24).
  - The slide body text does **not** name the user or assign work to the user.

- **Project names / aliases**
  - **Declutter the List Page Card**
  - **Declutter project**
  - **Search Funnel Update**
  - **1st IT mobile web AB test**
  - **2nd mobile web AB test**
  - **Declutter DE Check24 mWeb test 2**
  - **Declutter DE Partner Links test 2**
  - **1st desktop AB test**
  - **iOS and Android approach**

- **Goals / business context**
  - Relevant OKR: **“Grow conversion of engaged users by 5%”** (slide 14).
  - Supporting Big Rock 2025: **“Seamless results exploration and comparison”** (slide 14).
  - Hypothesis: **reducing cognitive load / simplifying the information hierarchy on List Page offers** should help visitors browse more easily and drive **more DPVs and enquiries** (slide 14).
  - End-of-2025 target state: visitors should clearly understand when they are on a **List Page** and find relevant offer details **with low effort** (slide 14).
  - Executive-summary framing: the project aims to **“enhance our visitor’s offer browsing experience by simplifying the information hierarchy on the List Page cards”** (slide 24).

- **Method / measurement notes**
  - Reported metric changes are stated as **95% significant unless otherwise specified** (slides 4, 23).
  - Changes are relative to the **“Current List Page card”** (slides 4, 23).
  - Metrics are from **List Page unless otherwise stated** (slides 4, 23).
  - “Total” metrics exclude **repeat enquiries from the same user to the same listing** (slides 4, 23).
  - The deck itself says **“Lead” most likely refers to a lead from a Detail Page** rather than Finance or Insurance, so even the source acknowledges some label ambiguity (slides 4, 23).

- **Design decisions**
  - IT mWeb test 1 compares:
    - **Slightly Decluttered (no links)**
    - **Most Decluttered (no links)** (slides 2, 15)
  - DE work includes with-links variants:
    - earlier slides use **Most Decluttered (with links)** and **Slightly Decluttered (with links)** (slides 9–10)
    - later DE deep-dive compares **Most Decluttered (no links)** vs **Most Decluttered (with links)** (slides 25–32)
  - DE-only test setup: **“Most Decluttered (with links)”** contains **Finance and Insurance partner links**, but the **touch target is limited to the Blue CTA** (slide 25).
  - Proposed mWeb test 3 changes the **partner-link presentation/copy to increase touch target** (slide 35).
  - Proposed finance-placement variant: **“links, Finance by Price”** to see whether alternate finance placement can close the finance-lead gap, **based on previous UXR** (slide 35).
  - Desktop plan: test several decluttered variants, especially around the **gallery experience** (slide 36).
  - App plan: build the required **UI elements** first, then test on both app platforms; examples include partner-link integration and dark mode (slide 37).

- **Decisions / recommendations**
  - **IT mWeb test 1** recommendation: **iterate on “Most Decluttered (no links)”** and then assess rollout opportunity on mWeb (slide 15).
  - **DE mWeb test 2** recommendation: **iterate on “Most Decluttered (with links)” before rolling out on mWeb** (slide 26).
  - Deck-level executive recommendation:
    - iterate on **“Most Decluttered (with links)”**
    - continue mWeb learning in **DE and IT**
    - begin **desktop** learning
    - build/test for **mobile apps** (slide 24)

- **Metrics**
  - **IT mWeb test 1 narrative summary** (slide 15):
    - total dealer leads from List Page:
      - **+8%** for **Slightly Decluttered**
      - **+12%** for **Most Decluttered**
    - private leads described as **neutral**
    - finance entries underperformed for both variants
    - for **Most Decluttered**:
      - **ad impressions +26%**
      - **ad clicks +16%**
      - **ad conversion rate -4.5%**
  - **IT finance impact** (slide 19):
    - **Total Finance Funnel Entries (List Page + Detail Page)**:
      - **-62%** for **Slightly Decluttered (no links)**
      - **-57%** for **Most Decluttered (no links)**
  - **DE mWeb test 2 narrative summary** (slide 26):
    - both variants showed **similar double-digit growth in total Dealer leads from List Page (+12 to +13%)**
    - **“Most Decluttered (with links)”** showed **significant negative movement for total Private leads**, mostly due to **Private emails**
    - Check24 insurance conversions were **stable vs Live List Page card**
    - Finance conversions underperformed for both variants
  - **DE leads impact** (slides 27–29):
    - **Total Enquiries from List Page**:
      - **+8%** for **Most Decluttered (no links)**
      - **+5%** for **Most Decluttered (with links)**
    - **Total Dealer Enquiries from List Page**:
      - **+13%** no-links
      - **+12%** with-links
    - **Total Private Enquiries from List Page**:
      - **No change** no-links
      - **-14%** with-links
    - Additional DE detail (slide 28):
      - **Dealer WhatsApp from List Page**:
        - **+30%** no-links
        - **+34%** with-links
      - **Total Calls from List Page**:
        - **+13%** no-links
        - **+9%** with-links
      - **Total Email from List Page**:
        - **No change** no-links
        - **-8%** with-links
    - Private-email note (slide 29):
      - numerical change vs Current List Page Card: **-6%**
      - **p-value = 0.06**
      - source says another **1–2 weeks** would likely have made it significant
    - AutoMatch downstream effect (slide 29):
      - total dealer leads from **all traffic** for **Most Decluttered (with links)** fall **from +6% to +5%**
  - **DE insurance / Check24 impact** (slide 31):
    - **Most Decluttered (no links)**:
      - **Funnel Entries +138%**
      - **CVR check24 (visit to result) -56%**
      - **Results (Leads) -6%**
    - **Most Decluttered (with links)**:
      - **Funnel Entries +54%**
      - **CVR -31%**
      - **Results (Leads) No change**
  - **DE finance impact** (slide 32):
    - **Total Funnel Entries**:
      - **-36%** no-links
      - **-16%** with-links
    - **CVR Entry to Lead**:
      - **+31%** no-links
      - **No change** with-links
    - **Total Leads**:
      - **-16%** no-links
      - **-16%** with-links
    - Dealer/consumer-financing sub-metrics on the same slide are also negative.

- **Constraints / trade-offs**
  - The deck explicitly frames competing goals between:
    - **AutoScout dealer leads**
    - **Check24 insurance conversions**
    - **Finance conversions** (slide 25)
  - It explicitly asks what trade-offs the org is willing to accept (slides 25, 33).
  - It says the trade-off between **dealer lead growth** and **private lead growth** requires **internal alignment** (slides 15, 26).
  - Broader-org questions called out in slides / notes:
    - performance products (**NFM, T50, NWL, Smyle**)
    - **MIA** products / reporting
    - engaged users / favorites
    - sharing between List Page and Detail Page
    - **LeasingMarkt** impact
  - It says **dealer reported metrics** as currently calculated will likely drop significantly (slide 33).
  - It says there are **no learnings yet** on desktop (slide 36).

## Possible facts / inferences

- This is likely a **stakeholder-alignment / rollout-decision deck**, not a single experiment report.
  - Confidence: **High**
- The recommendation appears to have **shifted over time**:
  - IT section favors **Most Decluttered (no links)**
  - later DE / executive summary favors **Most Decluttered (with links)**
  - Confidence: **High**
- The work appears to have expanded from **decluttering the list card** into a broader **partner-link / insurance / finance / rollout** problem.
  - Confidence: **High**
- **Gregory Hamill** was likely a key partner / owner in practice, but this source only proves **edit activity**, not job role.
  - Confidence: **Medium**
- The source likely draws on earlier research not included here, because slide 35 explicitly says one finance-placement idea is based on **previous UXR**.
  - Confidence: **High**
- Relative to the source table you shared, this looks more like a **later synthesis deck** than the probable core project source.
  - Confidence: **High**

## My role

- **What this source suggests I personally owned or drove**
  - No direct attribution to the user.
  - No slide names the user or ties specific deliverables to the user.
  - This source alone does **not** support strong claims of personal ownership of strategy, design, analysis, or rollout.
  - Low-confidence possibility only: someone in design/product was involved in variant iteration and cross-platform rollout planning, but this source does not identify who.

- **What appears to have been owned by others**
  - **Consumer Analytics** appears to own experiment analysis / deep-dives.
  - **Check24** is part of the insurance-conversion / rollout discussion.
  - **CA integration teams** are named for future backlog work.
  - **Gregory Hamill** appears as an active editor/stakeholder in metadata, but not with an explicit title in slide content.

## Key evidence

- **Slide 14**
  - “**Grow conversion of engaged users by 5%**”
  - “**Seamless results exploration and comparison**”
  - “**By reducing the cognitive load / simplifying the information hierarchy...**”
  - “**By end of 2025: Our visitors will know when they are, in fact, on a List Page...**”
- **Slide 24**
  - “**The Declutter project aims to enhance our visitor’s offer browsing experience by simplifying the information hierarchy on the List Page cards.**”
  - “**Iterate on ‘Most Decluttered (with links)’...**”
  - rollout on **all platforms**
- **Slide 25**
  - “**Most Decluttered (with links) variant has Finance and Insurance partner links. However, the touch target is limited to the Blue CTA**”
  - “**What are the tradeoffs we are willing to make among these (potentially) competing goals?**”
- **Slide 26**
  - “**Both Decluttered variants have showed similar double digit growth in total Dealer leads from List Page (+12 - +13%).**”
  - “**Most Decluttered (with links) showed significant negative movement for total Private leads, mostly due to Private emails.**”
- **Slide 29**
  - “**Private emails was trending negative... -6% (p-value = 0.06)**”
  - “**from +6% to +5% vs Current List Page card**”
- **Slide 33**
  - “**How does Declutter affect the broader AS24 org? What are the trade-offs we will accept?**”
- **Slides 4 / 23**
  - 95% significance rule
  - CA deep-dive sourcing
  - incorrect-date warning

## Useful for

- **Business context** — strong
- **Problem** — strong
- **Diagnosis** — medium
- **Approach** — strong
- **Key decisions** — very strong
- **Tradeoffs** — very strong
- **Validation** — strong
- **Outcomes** — strong
- **Strategic importance** — very strong
- **Role attribution** — weak

## Risks / possible confusion

- This is a **compiled overview deck**, not a clean single-source narrative.
- The deck itself says some dates are wrong; the repeated **“December 19th”** footer is not reliable.
- It uses **multiple names** for what appears to be related DE work:
  - **Partner Links test #2**
  - **Declutter DE Check24 mWeb test 2**
  - **2nd mobile web AB test**
- The source can look contradictory if read selectively:
  - IT recommendation = **no links**
  - later DE / executive-summary recommendation = **with links**
- There is also an **intermediate-vs-later analysis conflict** inside the deck:
  - the earlier DE **Partner Links test #2** result slide (slide 10) presents a more positive picture
  - later CA deep-dive slides (26–32) show a more mixed outcome with private-lead and finance issues
  - the deck does **not** explain that discrepancy clearly
- It overlaps with adjacent workstreams:
  - **Search Funnel strategy**
  - **Check24 / insurance**
  - **Finance conversion optimization**
  - **desktop/app rollout**
  - **performance-product / MIA / reporting implications**
- Cover-slide speaker notes and creator metadata mention **Arion Franklin**, but those appear to be **template artifacts**, not reliable project-attribution evidence.

## Confidence

- **Medium**
- Why:
  - This is a **directly relevant** source with strong evidence on framing, decisions, trade-offs, metrics, and rollout intent.
  - Reliability is reduced by date errors, stitched-together sections, inconsistent naming, internal result-tension, and weak personal-role attribution.

...

## S15 — 15.uxr-test-canada-imagepositioning-test-q4-2025.png

# Source Analysis: 15.uxr-test-canada-imagepositioning-test-q4-2025

## Relevance

- Adjacent
- The source is clearly in the same design family: it is titled **“Decluttered List Card Image Positioning | Unmoderated User Test | CA | Q4.2025”** and states the background as **“Declutter of the mobile list cards.”**
- It is probably **not** direct evidence for the AutoScout24 case study. The reference index classifies S15 as **“Low-medium - likely adjacent analogue, not core project evidence”** and the triage note says: **“Canada / AutoTrader image-positioning test. Same design theme, but likely a different market/brand and a narrower question.”**
- The scope is much narrower than the likely AS24 project: this source tests **one card-layout variable** on **mobile web** rather than a broader list-page / search-funnel optimization.

## Confirmed facts

- **Dates**
  - Title labels the study as **Q4.2025**.
  - **Field phase:** **5.12.2025** (kept in source format).
  - A section says **“Preliminary insights, shared on the same day as the test was run.”**
- **People**
  - No PM, researcher, designer, author, or collaborator is named.
  - Greg Hamill is not mentioned.
- **Project names / aliases**
  - **“Decluttered List Card Image Positioning | Unmoderated User Test | CA | Q4.2025.”**
  - Background: **“Declutter of the mobile list cards.”**
- **Goals / problem framing**
  - Goal: **“Understand if the structure of the list card is important to users and if they prefer the image on the left or the right side of the list card.”**
  - Research questions explicitly ask:
    - whether users notice the difference,
    - which version they prefer,
    - why they prefer it,
    - and whether this needs **A/B testing** before moving forward.
- **Business context**
  - The document does **not** state a commercial KPI, funnel target, finance target, or rollout target.
  - The decision is framed as a **user-preference / layout-intuition** question, not a performance question.
- **Method / validation**
  - Method: **Unmoderated user test**.
  - Sample:
    - **16 Canadian users**
    - **planning to buy a car within the next 6 months**
    - **ages 26–61**
    - **7 female, 8 male, 1 non-binary**
    - **experts excluded**
  - Platform/device: **mweb** on **Chrome**.
  - The document includes a **“Control for order effects”** section and says the results were **“very similar, independent of the image position a user saw first.”**
- **Design decisions**
  - Tested decision: **image on the left vs image on the right** in mobile list cards.
  - Recommendation: **“implement image on the left”** because it was the more intuitive layout for most users.
  - Secondary recommendation: **“A/B test when there is capacity for it.”**
- **Tradeoffs**
  - Reasons given for preferring **image-left**:
    - image is the most important feature,
    - users read left-to-right and would see the image first,
    - layout seems **“more structured and balanced,”**
    - layout feels **“less cluttered and chaotic.”**
  - Reasons given for preferring **image-right**:
    - some users want to read text first,
    - some want text aligned on the left,
    - some think it looks nicer or more intuitive.
- **Metrics**
  - **5/16** users did **not** realize the difference when seeing both versions one after the other.
  - **11/16** users **did** notice the image-position difference; comments were described as mostly neutral.
  - **11/16** users had a **slight preference** for the picture on the **left**.
  - **5/16** users had a **slight preference** for the picture on the **right**.
- **Outcomes**
  - The source recommends **left-image layout**.
  - It stops short of claiming the question is fully settled; it still recommends **A/B testing** when capacity allows.
- **Constraints / scope**
  - The scope is limited to **mobile list-card image positioning**.
  - The document also records broader list-page issues users mentioned:
    - image feels too small,
    - card feels too big for mobile,
    - card feels **busy / cluttered**,
    - wishlist and saved-search iconography is confusing.

## Possible facts / inferences

- **High confidence:** This was a **fast-turnaround decision input**, not a long-form foundational report. The source says preliminary insights were shared the same day the test ran.
- **High confidence:** The team was using qualitative research to decide whether this question was important enough to justify a later **A/B test**.
- **Medium confidence:** This is likely **AutoTrader Canada**, not AutoScout24. The sample is Canadian, the index explicitly says **Canada / AutoTrader**, and the tested screenshots appear consistent with that.
- **Medium confidence:** This source supports the narrower **“Declutter List Cards”** thread more than the broader **“Declutter the List Page / Search Funnel”** case.
- **Medium confidence:** The change under test was relatively subtle in user perception. Evidence: **5/16** did not notice it, and even among those who did, comments were described as mostly neutral.
- **Medium confidence:** The order-effects section likely shows left-image preference in both exposure orders, but the subgroup counts are less legible than the headline metrics.

## My role

- This source does **not** identify you.
- It does **not** attribute ownership of the work to you.
- It does **not** name any collaborators or partners.
- What this source suggests you personally owned or drove:
  - Nothing directly attributable from this source alone.
- What appears to have been owned by others:
  - Not attributable. It is clearly a UX research artifact, but no owner is named.

## Key evidence

- **“Decluttered List Card Image Positioning | Unmoderated User Test | CA | Q4.2025”**
- **“Declutter of the mobile list cards.”**
- **“Understand if the structure of the list card is important to users and if they prefer the image on the left or the right side of the list card.”**
- **“Does this need to be A/B tested or are we confident to move forward with one of the versions without testing?”**
- **“implement image on the left”**
- **“A/B test when there is capacity for it.”**
- **“5/16 users don’t realise the difference…”**
- **“11/16 users have a slight preference for the picture on the left…”**
- **“more structured and balanced”**
- **“less cluttered and chaotic”**
- **“Several users find the list card rather busy or cluttered and would wish for an even simpler, cleaner layout.”**
- **“The results are very similar, independent of the image position a user saw first.”**

## Useful for

- **Problem**
  - Supporting evidence that mobile list cards could be perceived as busy / cluttered.
- **Diagnosis**
  - Useful for showing that image position mattered somewhat, but the difference was subtle.
- **Approach**
  - Useful as an example of lightweight qualitative validation before or alongside experimentation.
- **Key decisions**
  - Useful for the specific decision to prefer **image-left** over **image-right** on mobile list cards.
- **Tradeoffs**
  - Useful for the concrete tension between **visual-first scanning** and **text-first reading / left alignment**.
- **Validation**
  - Useful for sample definition, qualitative preference counts, and explicit order-effects checking.
- **Not especially useful for**
  - Business context
  - Outcomes
  - Strategic importance  
    because the document does not include KPI or rollout evidence.

## Risks / possible confusion

- Easy to conflate with the core AutoScout24 declutter case because the source uses **“Decluttered List Card”** language and includes clutter-related user feedback.
- This is likely a **different market / brand** and should not be treated as direct proof for AutoScout24.
- It tests **one narrow layout choice** on **mweb**, not the full declutter initiative.
- It is qualitative research, not an A/B test or business-results readout.
- It may overlap conceptually with other adjacent Canada list-card sources, especially the Canada iOS list-card test, but should be kept separate from:
  - AS24 rollout decks,
  - DE/IT/NL experiment results,
  - broader search-funnel narratives.
- The source is a **PNG screenshot of a report**, so some small details are less legible than they would be in the native document.

## Confidence

- Medium
- The source is specific and coherent for one qualitative test, but its usefulness to the final AutoScout24 case study is limited because it appears to be an adjacent Canada / AutoTrader study rather than core project evidence.

...

## S16 — 16.uxr-test-canada-ios-test-q3-2025.png

# Source Analysis: 16.uxr-test-canada-ios-test-q3-2025

## Relevance

- **Adjacent**
- **Why**
  - The source is about **AutoTrader Canada**, not AutoScout24.
  - It focuses on an **iOS list-card test** in **Q3 2025**, not the broader AS24 cross-country rollout.
  - It is still relevant as an analogue because it covers the same design family and the same core tradeoff: **richer list-card preview vs compact card vs downstream detail-view / lead behavior**.
  - The reference index also provisionally treats **S16** as an **adjacent analogue rather than core project evidence**.

## Confirmed facts

- **Dates**
  - The report is labeled **“Trader iOS User Test | Q3 2025.”**
  - **Field phase:** **8th–17th July 2025**.

- **People**
  - No team members, PMs, designers, researchers, or stakeholders are named.
  - The test sample is:
    - **6 Canadian users**
    - **3 male, 3 female**
    - **Age 26–45**
    - **Segment not defined**

- **Project names / aliases**
  - The source title references **“(Slightly) Decluttered List Card | iOS User Test | CA | Q3 2025.”**
  - Variant names visible in the document include:
    - **Slightly Decluttered List Card**
    - **Decluttered List Card**
    - **Gallery Decluttered**
    - **Decluttered Lite**

- **Goals / problem framing**
  - **Project background:** “**New list card designs are being tested in the AutoTrader iOS app.**”
  - **Goal:** “**Evaluate which list card design the Canadian AutoTrader users prefer and why.**”
  - **Research questions** ask:
    - which card is preferred
    - whether users miss information on either card
    - which is more visually appealing
    - which is easier to read
    - which is most helpful for finding a suitable car

- **Design decisions / tradeoffs described**
  - The larger card is preferred because of the **picture gallery / carousel**, which lets users see more detail without leaving the page.
  - The smaller card is described as **clean** and visually appealing, but some users felt it omitted information and pushed them to the detail page.
  - The document explicitly frames a tradeoff between:
    - **more on-card detail and fewer clicks**
    - versus
    - **a longer results page and slower scanning**

- **Validation**
  - The source combines:
    - a **UX user test** with **6 participants**
    - an **A/B/C test** against the current Trader list card

- **Metrics / outcomes**
  - **Overall preference:** **6/6 participants preferred the larger list card**.
  - The report says the main reason was the **picture gallery**.
  - It also says the smaller card generated more leads despite fewer detail views.
  - **A/B/C test summary**
    - “**Both test variants lead to a significant drop in detail page views.**”
    - “**Despite the drop in VDPs, we see an increase in leads for both variants as well.**”
    - “**The smaller card leads to the most leads.**”

  - **Gallery Decluttered**
    - **-29.3% to -29.7%** in **VDP / Detail Views**
    - **+0.1% to +1.1%** in **Dealer Hard Leads**

  - **Decluttered Lite**
    - **-12.0% to -12.5%** in **VDP / Detail Views**
    - **+7.2% to +8.2%** in **Dealer Hard Leads**

  - The next-steps section also states:
    - **“DPVs will go down -14.3% to -18.0% per session based on results.”**

- **Detailed qualitative findings**
  - For the larger / gallery version:
    - “Pictures give detail and help identify relevant search results, which increases search efficiency.”
    - **6/6 users use the picture carousel.**
    - Critical points:
      - one user missed information such as **transmission**
      - bigger cards make the page longer and take more time to scan

  - For the smaller version:
    - “The small card gives a good idea about the car.”
    - “The most important information is there (**4/6**).”
    - “The list card looks clean and visually appealing.”
    - Critical points:
      - **fuel type information is missing**
      - one small picture forces users to go to the detail page
      - one user found it “**not helpful at all**”

- **Decisions / next steps**
  - The recommendation section says:
    - the team should proceed with the **list card with the gallery “from a user perspective.”**

  - The next-steps section says:
    - the **smaller list card** is being built for the **new Trader app**
    - **“Build Decluttered Lite”**
    - build it for the **white label app** now and iterate before launch
    - run a longer follow-up test with **Control, Gallery Decluttered, Decluttered Lite**
    - do further analysis on:
      - swiping within detail page
      - new vs old users
      - number of detail pages per user
      - conversion rate from list page to detail page

- **Constraints / limitations**
  - **Segment not defined**
  - Sample size is **6**
  - The screenshot references separate **Designs** and **Test Script** links, but those artifacts are not included here.

## Possible facts / inferences

- The source is likely a **related analogue**, not direct evidence for the AutoScout24 rollout case.
  **Confidence: High**
- The larger preferred variant likely corresponds to the **gallery-based** version, while the smaller higher-lead variant likely corresponds to **Decluttered Lite**.
  **Confidence: Medium**
- The document suggests the team was willing to accept fewer detail page views if lead generation improved. That logic is stated in the report, but the causal explanation is interpretive rather than directly proven here.
  **Confidence: High**
- The follow-up test plan suggests the team did **not** treat the first performance readout as final. The wording about confirming results and range uncertainty implies unresolved confidence questions.
  **Confidence: Medium**
- The **new Trader app** and **white label app** may be the same delivery stream or closely linked, but the screenshot does not explicitly define that relationship.
  **Confidence: Low**

## My role

- This source does **not** show what I personally owned or drove.
- No personal attribution appears anywhere in the screenshot.
- No collaborators are named.
- What appears to have been owned by others:
  - an unnamed team conducting the user test, A/B/C test, build work, and follow-up analysis

- **Greg Hamill is not mentioned.**

## Key evidence

- “**New list card designs are being tested in the AutoTrader iOS app.**”
- “**Evaluate which list card design the Canadian AutoTrader users prefer and why.**”
- “**After seeing both versions, 6 / 6 participants preferred the larger list card.**”
- “**The main reason for all participants is the picture gallery.**”
- “**Both test variants lead to a significant drop in detail page views.**”
- “**Despite the drop in VDPs, we see an increase in leads for both variants as well.**”
- “**The smaller card leads to the most leads.**”
- “**All users strongly prefer the list card with the gallery. So this is the version we should proceed with from a user perspective.**”
- “**As a next step, the smaller list card is being build for the new Trader app.**”
- **Gallery Decluttered:** **-29.3% to -29.7% VDP/Detail Views**, **+0.1% to +1.1% Dealer Hard Leads**
- **Decluttered Lite:** **-12.0% to -12.5% VDP/Detail Views**, **+7.2% to +8.2% Dealer Hard Leads**

## Useful for

- **Problem**
  - Shows the specific question being studied: what information users need on the list card and what helps them choose a car.

- **Diagnosis**
  - Good evidence for the tension between **detail visibility**, **scanability**, and **missing information**.

- **Approach**
  - Useful for showing that the team compared multiple list-card variants and paired **qualitative user testing** with **A/B/C behavioral data**.

- **Key decisions**
  - Strong example of a split between **stated user preference** and **better lead performance**.

- **Tradeoffs**
  - Very useful for the conflict between **gallery-rich larger cards** and **compact higher-converting cards**.

- **Validation**
  - Useful as mixed-method validation: participant feedback plus VDP / lead metrics.

- **Outcomes**
  - Useful for exact ranges on detail-view decline and dealer hard lead lift.

- **Strategic importance**
  - Weak. The source does not explain why this mattered at company or portfolio level.

## Risks / possible confusion

- Easy to conflate with the AutoScout24 declutter project because the naming is very similar, but this source is **AutoTrader Canada iOS**, not AS24.
- It may overlap with:
  - **S15** (Canada image-positioning test)
  - broader list-card declutter work
  - iOS experimentation generally

- Internal inconsistencies / ambiguities inside this source:
  - The summary says **2/6** users missed fuel type on the small card, while the detailed critical findings say **3/6**.
  - The recommendation says proceed with the **gallery / larger card** from a user perspective, but the next steps focus on building the **smaller card**.
  - Variant naming shifts across sections:
    - **Slightly Decluttered List Card / Decluttered List Card**
    - versus
    - **Gallery Decluttered / Decluttered Lite**

- No ownership, collaborator, or governance details are present.
- No direct link to **Greg Hamill**, **Search Funnel**, or **Buyer Experience** is stated.

## Confidence

- **Medium**
- **Why**
  - The source is concrete on dates, sample, variant names, qualitative reactions, and outcome metrics.
  - It is useful for reconstructing a **design tradeoff**.
  - It is less reliable as core case-study evidence because it is **adjacent rather than direct**, uses a **different brand/market**, and contains a few internal inconsistencies.

...

## S17 — 17.uxr-test-umoderated-q2-2024.png

# Source Analysis: 17.uxr-test-umoderated-q2-2024

## Relevance

- **Direct**
- The source is explicitly titled **“List Page Declutter | Unmoderated User Test | Q2 2024”** and tests **two decluttered list-page variants** against the current list-page pattern.
- It is especially relevant for the **early problem framing, prototype rationale, and qualitative validation** of list-page/card reduction.
- It is **not** a rollout or A/B-test performance source. It is an **early formative / validation** source for **mobile web**.

## Confirmed facts

- **Dates**
  - Field phase: **24.05.2024 – 03.06.2024**
  - Report period: **Q2 2024**

- **People**
  - No project owner, PM, or design owner is named in the visible report content.
  - A person named **Laura Chinellate** appears to be mentioned as the contact for **Contentsquare tracking for experiments**; exact spelling should be verified.

- **Project names / aliases**
  - Report title: **“List Page Declutter | Unmoderated User Test | Q2 2024”**
  - The report consistently uses **“decluttered list page”** framing.
  - It discusses **reduced / minimalistic list cards**, so it is relevant to both **list page declutter** and **list card reduction**.

- **Business / problem framing**
  - The report states: **“12% of AS24 users report a cluttered list page negatively impacting their search experience with us.”**
  - It also states: **“Contentsquare zoning analyses showed that half of our visitors are dropping off from list page before reaching a detail page.”**
  - The stated business/product need is to make browsing search results easier so buyers can quickly find relevant offers.

- **Goal**
  - Stated goal: **“understand the user experience on a decluttered list page.”**

- **Research setup**
  - Method: **unmoderated user test**
  - Platform/device: **Web - mobile**
  - Sample: **N = 10**
    - **Germany-based users who speak English**
    - **5 users** tested **Version 1**
    - **5 users** tested **Version 2**
  - Segment split:
    - Version 1: **3 confident, 1 guidance seeker, 1 urgent**
    - Version 2: **2 confident, 2 guidance seeker, 1 urgent**
  - Recruitment criterion:
    - People **currently looking for a car** and planning to buy within **3 months**

- **Design variants tested**
  - **Version 1**: described as **“a more conservative design approach that is closer to the current list page”**
  - **Version 2**: described as **“a more bold design approach with very reduced list cards”**

- **Research questions**
  - Whether users understand page hierarchy, including filters and number of results
  - Whether users know they are on a **list page** and not a **detail page**
  - How quickly users understand layout and navigation
  - What information is necessary vs removable
  - Interaction with **filter chips**, **sorting**, and **pictures**
  - What information is crucial before deciding to open a detail page
  - Whether users care about seeing **multiple pictures** before going to detail

- **Version 1 findings**
  - **5/5** understood it was a page with multiple car offers
  - **5/5** understood they would need to tap a car to reach the detail page
  - **5/5** said they would continue using the page to search for a car
  - **4/5** said the card had enough information to decide whether to open a detail page
  - **1/5** wanted additional **fuel consumption** info on the card
  - **3/5** noticed **location** on the card, but did not say whether it mattered
  - **5/5** were aware what kind of page they would land on after tapping a card
  - **5/5** said the detail page had enough information to decide whether to **send a lead**
  - **4/5** wanted more pictures already on the list page
  - Reported ideal picture count: **5–10**
  - **3/5** said pictures stood out most in the first impression
  - Users wanted pictures from **all angles** and the **interior**
  - **2/5** understood they would have to tap the picture to see more
  - One user wanted an indicator such as **“2/10”**
  - Favoriting evidence is marked as **unclear**:
    - **2/5** mentioned using the favorite button to save cars for later

- **Version 2 findings**
  - **5/5** understood it was a list page with multiple offers
  - **5/5** understood they would tap a car to reach detail
  - **5/5** said they would continue using the page
  - **5/5** said the cards had enough information
  - **0/5** said they were missing **location** information
  - **5/5** were satisfied with the design
  - **4/5** specifically liked the **clean structure / overview**
  - Positive words users used included: **professional, friendly, modern, structured, good overview, appealing**
  - **3/5** said they would first **favorite** cars they were interested in, then go to detail pages later
  - **1/5** explicitly said the cards made it easy to **compare offers**
  - **3/5** wanted more pictures on the list cards
  - **5/5** understood there would be more pictures on the detail page
  - The report notes that the minimalistic card design may have made users **expect fewer photos**

- **Cross-version conclusions / recommendations**
  - The report explicitly says: **“it is not possible to derive a clear recommendation on which version to move forward with.”**
  - Both versions made users tap cards to go to detail pages.
  - Both versions should be **stress tested with maximum values, badges, and information** to understand design feasibility.
  - The team should align with **relevant list-page stakeholders** to assess **business feasibility** of reductions.
  - Version 2 is treated as directionally stronger if the team wants to drive:
    - **favoriting**
    - more offers **above the fold**
    - easier **offer comparison**
  - The report says list cards need **more than one picture**
    - likely **5–10**
    - from multiple angles and interior
    - users expect to **tap or swipe**
    - the design should indicate that more pictures exist
  - **Price rating tag** is identified as a problem:
    - **4/10** users said it stood out most
    - some users did **not understand what the rating is based on**
    - recommendation: consider a **less prominent position** and remove the **background color**
  - Proposed next-step validation:
    - observe cognitive-load-related behavior in **Contentsquare**
    - run **first-click tests**
      - **n=50** on current page
      - **n=50** on decluttered page
      - tool suggested: **Optimal Workshop**
      - quoted cost: **$249** for a one-month license plus **$9–14 per participant**

- **Timeline details**
  - This is an **early research-phase source** in **Q2 2024**
  - Relevant linked artifacts named in the report:
    - **Discovery board with recommendations for prototype**
    - **Detailed analysis in Miro**
    - **Figma prototype version 1**
    - **Figma prototype version 2**

## Possible facts / inferences

- **This is likely a foundational discovery / formative validation source for the declutter project, before later experimentation and rollout work.**
  - Confidence: **High**

- **This source is specifically about mobile-web list-page/card reduction, not the full later cross-platform rollout.**
  - Confidence: **High**

- **“Reduce cognitive load” was probably not the main original framing at this stage.**
  - Reason: the core framing here is clutter, drop-off, browsing ease, and decision-making; cognitive load appears mainly as a proposed **future measurement / validation method**.
  - Confidence: **High**

- **Version 2 appears directionally favored, but not selected.**
  - Reason: the report says no clear recommendation is possible, while also noting possible advantages of Version 2 for favoriting, comparison, and above-the-fold density.
  - Confidence: **High**

- **There was already an anticipated tradeoff between decluttering and business/stakeholder requirements on the list page.**
  - Reason: the report recommends stress-testing with “maximum values, badges, and information” and aligning with stakeholders on feasibility “from a business perspective.”
  - Confidence: **Medium**

- **This source is probably earlier and narrower than later “Search Funnel / Buyer Experience optimization” descriptions.**
  - Reason: this report does not mention Search Funnel, Buyer Experience, Greg Hamill, finance, ads, partner links, or experiment uplifts.
  - Confidence: **High**

## My role

- **What this source suggests I personally owned or drove**
  - Nothing is directly attributable to you from this source alone.
  - No visible author, owner, presenter, or decision-maker is named.
  - There is no direct basis here to claim that you led the research, owned the prototypes, or made the final decision.

- **What appears to have been owned by others**
  - A research/design team clearly ran or documented an **unmoderated mobile-web user test** comparing two prototypes.
  - **Laura Chinellate** appears to be the person to contact for **Contentsquare experiment tracking** setup, but this does **not** establish project ownership.
  - **Greg Hamill is not mentioned** in this source.

## Key evidence

- “**12% of AS24 users report a cluttered list page negatively impacting their search experience with us.**”
- “**Contentsquare zoning analyses showed that half of our visitors are dropping off from list page before reaching a detail page.**”
- “**version 1 being closer to the current list page and version 2 being more drastically reduced**”
- “**Both versions worked well.**”
- “**it is not possible to derive a clear recommendation on which version to move forward with**”
- “**4/5 users mentioned wanting to see more pictures**” on Version 1
- “**3/5 users mentioned that they’d like to see more pictures**” on Version 2
- “**Potentially version 2 encourages more favoriting behavior**”
- “**version 2 is showing users more offers above the fold**”
- “**4/10 users mentioned that the price rating stood out most to them**”
- “**Some users don’t understand what the rating is based on**”
- “**We could define which Contentsquare parameters can give us insights around cognitive load**”

## Useful for

- **Business context**
- **Problem**
- **Diagnosis**
- **Approach**
- **Key decisions**
- **Tradeoffs**
- **Validation**

Less useful for:

- **Outcomes** beyond directional qualitative findings
- **Strategic importance** unless paired with later decks/results
- **My role** because ownership is not attributed

## Risks / possible confusion

- This is an **early qualitative mobile-web source**, so it should not be conflated with later **desktop / iOS / cross-country A/B-test evidence**.
- It is easy to overstate this as a final direction-setting document. The report explicitly says it **cannot derive a clear recommendation** between the two versions.
- The source is about **AS24 list-page declutter**, but it mixes **page-level** and **card-level** questions. Later sources may use narrower labels such as **declutter list cards**.
- The source does **not** mention:
  - **Greg Hamill**
  - **Search Funnel**
  - **Buyer Experience**
  - finance funnel metrics
  - ad/partner-link tradeoffs
  - rollout plans
  - business uplift / CVR outcomes
- The sample is small (**N=10**) and consists of **Germany-based users who speak English**, so it is strong for early signals but weak for broad generalization.
- “Cognitive load” appears here mainly as a **future measurement idea**, so later project descriptions centered on cognitive load may be broader or later-stage reframings.

## Confidence

- **High**
- Why:
  - The source is **directly about “List Page Declutter”**
  - It contains **explicit dates, sample details, problem framing, variant descriptions, findings, and recommendations**
  - It is highly useful for reconstructing the **origin problem statement** and **early design tradeoffs**
  - Its main limitations are **no clear ownership attribution** and **no business-performance outcomes**

...
