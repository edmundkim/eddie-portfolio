# New Search Asset Index

This file is the source of truth for the current `content/case-studies/new-search/assets/` folder.
Keep this file aligned with the live folder before using it for editorial planning or page implementation.

## Classification legend

- `approved for page`: in the current approved editorial shortlist
- `optional`: viable backup or optional extra block, but not in the core set
- `excluded`: not recommended for the current page plan
- `undocumented / needs review`: present in the folder, but not vetted enough yet for editorial use

## Current asset inventory

| Filename | Classification | Editorial note |
| --- | --- | --- |
| `.DS_Store` | excluded | Finder metadata only; not a page asset |
| `apps_mockup_dark.png` | approved for page | Approved as the finishing visual at the end of the page |
| `apps_mockup_video.mp4` | optional | Earlier hero mockup export retained as a fallback |
| `apps_mockup_video_2.mov` | optional | Source asset added to the folder, but not recommended as the live web video until exported to a browser-safe format such as `.mp4` |
| `apps_mockup_video_2_encoded.mp4` | optional | Compressed web-safe export generated from `apps_mockup_video_2.mov` for GitHub-safe storage |
| `apps_mockup_video_2.mp4` | optional | Previous web-safe hero export retained as a fallback |
| `apps_mockup_video_light.mp4` | approved for page | Approved hero video asset with a lighter background shown below the hero content and above `Overview` |
| `apps_search_V3_after.png` | approved for page | Approved as the `Key Decisions` after-state paired with `apps_search_v2_failed.png` |
| `apps_search_V3_after_dark_mode.png` | excluded | Superseded by `apps_mockup_dark.png` for the final finishing visual |
| `apps_search_V3_after_fuel.png` | excluded | Too narrow and low-signal for the current page plan |
| `apps_search_V3_after_make_model.png` | optional | Backup make/model asset if the page later needs an app-specific version of the same decision |
| `apps_search_V3_after_price.png` | excluded | Polished, but too generic to earn a slot |
| `apps_search_promo_video.mp4` | excluded | Superseded by later mockup exports for the hero slot |
| `apps_search_v1_baseline.png` | approved for page | Supporting `Key Decisions` asset showing the older app baseline before the rejected intermediate direction |
| `apps_search_v2_failed.png` | approved for page | Approved as the `Key Decisions` rejected-direction asset |
| `apps_trader.png` | excluded | Sister-market reference; not strong enough for the main page |
| `apps_trader_dark.png` | excluded | Decorative sister-market dark variant; redundant |
| `apps_trader_make_model.png` | excluded | Comparative reference only; not part of the core story |
| `desktop_before.png` | approved for page | Approved `Overview` before-state in the reset comparison block |
| `desktop_home_after_modal.png` | excluded | Ambiguous fit and weaker than the approved strategy/context artifact |
| `desktop_search_after.png` | approved for page | Approved `Overview` after-state in the reset comparison block |
| `desktop_search_after_modal.png` | approved for page | Supporting `The Change` asset showing one-decision-at-a-time refinement directly from desktop results |
| `desktop_trader.png` | excluded | Comparative rollout/reference asset, not strong enough as page proof |
| `iOS_search_demo.MP4` | undocumented / needs review | Motion asset present in folder, but not yet reviewed as a page-ready proof element |
| `mweb_search_after.png` | optional | Backup mWeb baseline asset if the page later needs a cleaner mobile-web screen |
| `mweb_search_after_body_type.png` | optional | Approved optional 5th block if the page needs one more supporting interaction asset |
| `mweb_search_after_make_model.png` | approved for page | Approved `The Change` asset for showing earlier make/model entry on mobile web |
| `mweb_search_before.png` | optional | Backup before-state if the hero strategy changes later |
| `new-search-hero-mockup-wide.png` | approved for page | Approved as the homepage featured image for the New Search case-study preview card |
| `search_vision_miro.png` | approved for page | Approved `Strategic Foundation` artifact; wide strategy/context board, not a `The Change` screen |

## Approved page shortlist

- `Hero`: `apps_mockup_video_light.mp4`
- `Homepage featured image`: `new-search-hero-mockup-wide.png`
- `Overview`: `desktop_before.png` + `desktop_search_after.png`
- `Strategic Foundation`: `search_vision_miro.png`
- `The Change`: `mweb_search_after_make_model.png`
- `The Change` support: `desktop_search_after_modal.png`
- `Key Decisions`: `apps_search_v1_baseline.png` + `apps_search_v2_failed.png` + `apps_search_V3_after.png`
- `Finishing visual`: `apps_mockup_dark.png`
- `Optional 5th block`: `mweb_search_after_body_type.png`

`search_vision_miro.png` should be treated as a `Strategic Foundation` / strategic context artifact.
It is not a `The Change` asset, and it should not be used to represent shipped UI behavior.

## Known gaps

- `Outcomes / Impact` still lacks proof-grade artifacts.
- The page still needs at least one non-screen proof element later.
- `Strategic Foundation` may still need a more legible or better-cropped strategy artifact presentation depending on layout.
