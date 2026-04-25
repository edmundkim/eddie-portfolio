import type { Metadata } from "next";

import BulletList from "@/components/BulletList";
import {
  CaseStudyArticle,
  CaseStudyCard,
  CaseStudyFigure,
  CaseStudyFigureGrid,
  CaseStudyHeader,
  CaseStudyHero,
  CaseStudyProse,
  CaseStudySection,
  CaseStudyShell,
} from "@/components/case-study/CaseStudy";
import CaseStudyEndNav from "@/components/CaseStudyEndNav";

import appsSearchAfter from "../../../content/case-studies/new-search/assets/apps_search_V3_after.png";
import appsMockupDark from "../../../content/case-studies/new-search/assets/apps_mockup_dark.png";
import appsSearchV1Baseline from "../../../content/case-studies/new-search/assets/apps_search_v1_baseline.png";
import appsSearchV2Intermediate from "../../../content/case-studies/new-search/assets/apps_search_v2_failed.png";
import desktopBefore from "../../../content/case-studies/new-search/assets/desktop_before.png";
import desktopSearchAfter from "../../../content/case-studies/new-search/assets/desktop_search_after.png";
import desktopSearchAfterModal from "../../../content/case-studies/new-search/assets/desktop_search_after_modal.png";
import mwebSearchAfterMakeModel from "../../../content/case-studies/new-search/assets/mweb_search_after_make_model.png";

export const metadata: Metadata = {
  title: "New Search | Eddie Kim",
  description:
    "Case study on resetting AutoScout24's search and filters through a staged app and web baseline, with the clearest proof on iOS.",
};

const appsMockupVideoSrc = "/case-studies/new-search/apps_mockup_video_light.mp4";

const heroFacts = [
  {
    label: "Role",
    value: "Principal Product Designer, Native Apps Design Lead",
  },
  {
    label: "Scope",
    value: "Search across iOS, Android, desktop, and mobile web",
  },
  {
    label: "Reset",
    value: "Triggered by mixed earlier results",
  },
  {
    label: "Evidence",
    value: "Strongest validation on iOS; supporting evidence on Android and web",
  },
];

const heroHighlights = [
  {
    label: "Reset trigger",
    metricLines: ["Earlier", "direction"],
    body: "Earlier validation showed the app search direction was not strong enough, so the team needed a stronger baseline rather than another cleanup pass.",
  },
  {
    label: "First validation",
    metricLines: ["iOS", "signal"],
    body: "iOS was the first clear validation of the new search direction. The redesigned baseline produced a measurable enquiry lift while maintaining downstream engagement, giving the team confidence to roll it out more broadly.",
  },
  {
    label: "Later proof",
    metricLines: ["Broader", "evidence"],
    body: "After iOS, Android and web added supporting evidence for the new direction. Both showed positive signals, though neither matched the strength of the initial iOS validation.",
  },
];

const roleSignals = [
  "I led the app filter-design direction and helped shape the cross-platform baseline with product, research, engineering, and analytics partners.",
  "My strongest direct scope was the app filters experience: information architecture, key UX and UI decisions, and the interaction patterns across iOS and Android for how people set filters and get back to more relevant results.",
  "I shaped the core design concept, helped frame and de-risk the research, and pushed the baseline decisions that mattered most: filter hierarchy, earlier make-and-model entry, clearer completion behaviour, and where platforms should align or diverge.",
  "The cross-platform baseline was collaborative. I later carried that direction into web work with another senior designer and cross-functional partners, while testing, rollout, and business outcomes remained shared team results.",
];

const problemSignals = [
  "Search sat close to one of the marketplace's most valuable moments: moving from browsing to enquiry. When filtering was hard to use, buyers had a harder time finding relevant cars and the path to enquiries weakened.",
  "The reset was triggered by evidence, not preference. Earlier validation showed the existing app direction underperforming on core enquiry signals, which made another cleanup pass hard to justify.",
  "Cross-platform discovery showed the same structural issues repeating across desktop, mobile web, iOS, and Android: filters were hard to find, hard to edit from results, and not clearly organised once applied.",
  "Strategy work later showed that filter engagement on mobile web was shallow. That same work framed New Search as growth work tied to stronger enquiry paths.",
];

const experienceChanges = [
  "The work moved away from patching the old flow and toward a clearer main filter overview that grouped filters more deliberately, surfaced what was already selected, and let people drill into one decision at a time.",
  "Important narrowing decisions were brought forward. Make and model moved earlier in the flow, making one of the highest-value choices easier to reach and setting up a broader rethink of how buyers express vehicle intent as the underlying data became more nuanced.",
  "Completion also became easier to interpret. The stronger app interaction made filter changes feel more deliberate and easier to review before people returned to results.",
  "The baseline was then adapted rather than cloned: Android moved toward platform-appropriate save behaviour with extra clarity work still needed, while web launched a narrower baseline first and deferred richer enhancements until later.",
];

const taxonomyWorkstream = {
  title: "New Make/Model Taxonomy and Filter Experience",
  paragraphs: [
    "As part of the broader New Search reset, I helped shape a new make-and-model experience for more nuanced vehicle data. The legacy interaction assumed buyers could move cleanly from make to model, but that stopped scaling once deeper distinctions started to matter.",
    "This was not just a filter redesign. It was a mental-model and intent-expression problem: how to expose a richer structure without overwhelming people. I explored how search, drilldown, grouped dimensions, and clearer selection management could make the system feel clearer rather than heavier. The work is still evolving, so I treat it as strategically important work in progress rather than a neat resolved win.",
  ],
};

const decisionCards = [
  {
    title: "Reset the baseline instead of polishing a weak direction",
    body: "Earlier app validation weakened confidence in the existing direction, so polishing it further would have been the wrong bet. We reset the baseline instead: simplify the filter model, reduce structural complexity, and create something the team could validate and extend more reliably.",
  },
  {
    title: "Validate the new direction where the proof was strongest",
    body: "iOS became the first clean proof point. The redesigned baseline outperformed the previous direction on enquiry signals while maintaining downstream engagement. We kept the nuance: this was a credible win rather than a claim that every KPI improved.",
  },
  {
    title: "Adapt the baseline by platform and ship web in stages",
    body: "We did not force one interaction everywhere. Android evidence supported the same direction more narrowly, with additional clarity work still needed. Web came later as an intentionally narrower baseline, supported by a positive lead signal and stable downstream engagement rather than a broad claim that every surface improved equally.",
  },
];

const platformSignals = [
  {
    label: "iOS",
    metric: "Strongest validation",
    body: "iOS is the clearest proof point. The redesigned baseline outperformed the previous direction on enquiry signals while maintaining downstream engagement, then rolled out more broadly.",
  },
  {
    label: "Android",
    metric: "Supporting signal",
    body: "Android supports the same direction, but more narrowly. Research and validation favoured platform-appropriate save behaviour, while the visible evidence remains positive but less complete than the iOS story.",
  },
  {
    label: "Web",
    metric: "Phased baseline",
    body: "Web came later as a simpler baseline launch. Post-launch analysis indicated a positive lead signal on desktop while mobile web and downstream engagement stayed broadly stable. That supports the launch story, but it remains narrower evidence than the app validation.",
  },
];

const heroComparisonImages = [
  {
    label: "Before reset",
    image: desktopBefore,
    alt: "Desktop results page before the New Search reset, with a longer filter rail and weaker visual hierarchy.",
    caption: "Longer filter rail and weaker hierarchy on results.",
    priority: true,
  },
  {
    label: "Reset baseline",
    image: desktopSearchAfter,
    alt: "Desktop results page after the New Search reset, with a clearer filter model and stronger applied-state control.",
    caption: "Clearer filter model and stronger control from results.",
    priority: true,
  },
];

const decisionComparisonImages = [
  {
    label: "Legacy baseline",
    image: appsSearchV1Baseline,
    alt: "An older app search baseline with broader filter clutter, heavier visual noise, and weaker structure.",
    caption: "The older app baseline carried heavier noise and weaker structure.",
    contentClassName:
      "flex min-h-[28rem] items-start justify-center sm:min-h-[32rem]",
    imageClassName:
      "h-auto max-h-[26rem] !w-auto max-w-full sm:max-h-[30rem]",
  },
  {
    label: "Intermediate direction",
    image: appsSearchV2Intermediate,
    alt: "An intermediate app search direction with layered filter cards that still carried structural friction.",
    caption: "An intermediate direction that still carried structural friction.",
    contentClassName:
      "flex min-h-[28rem] items-start justify-center sm:min-h-[32rem]",
    imageClassName:
      "h-auto max-h-[26rem] !w-auto max-w-full sm:max-h-[30rem]",
  },
  {
    label: "Stronger baseline",
    image: appsSearchAfter,
    alt: "The stronger app search baseline with a clearer filter overview and simpler hierarchy.",
    caption: "The clearer baseline the team could validate and extend.",
    contentClassName:
      "flex min-h-[28rem] items-start justify-center sm:min-h-[32rem]",
    imageClassName:
      "h-auto max-h-[26rem] !w-auto max-w-full sm:max-h-[30rem]",
  },
];

export default function NewSearchPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader />

      <CaseStudyArticle>
        <CaseStudyHero
          eyebrow="Case Study · AutoScout24 · Search & Discovery"
          title="New Search"
          lede="New Search was a strategic reset of one of AutoScout24's most important journeys. I led the app filter-design direction and helped shape the cross-platform baseline so buyers could find relevant cars with less ambiguity, while the business gained a stronger path to enquiries and a clearer foundation for future search improvements."
          facts={heroFacts}
        >
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {heroHighlights.map((item, index) => (
              <CaseStudyCard
                key={item.label}
                variant={index === 0 ? "dark" : "soft"}
              >
                <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                  {item.label}
                </p>
                <p className="homepage-type-section-heading mt-5 text-[color:var(--foreground)]">
                  {item.metricLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <p className="homepage-type-body mt-5 text-[color:var(--color-muted)]">
                  {item.body}
                </p>
              </CaseStudyCard>
            ))}
          </div>

          <CaseStudyFigure className="mt-14" framed={false}>
            <video
              className="mx-auto h-auto w-full max-w-[33rem]"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster={appsSearchAfter.src}
            >
              <source src={appsMockupVideoSrc} type="video/mp4" />
            </video>
          </CaseStudyFigure>
        </CaseStudyHero>

        <CaseStudySection
          eyebrow="Overview"
          title="A staged reset, not one clean launch"
          intro="This initiative moved through different levels of proof by platform, so the case study works best as one programme with uneven evidence rather than one uniform redesign story."
          className="border-t-0"
        >
          <CaseStudyProse>
            <p>
              A weaker app direction forced the reset. iOS became the first
              clear validation point, Android moved through research and
              validation, and web launched later as a narrower baseline.
            </p>

            <p>
              That sequencing mattered. The goal was not to force identical
              behaviour across surfaces, but to establish a search model each
              platform could support credibly and then ship where the evidence
              was strong enough.
            </p>
          </CaseStudyProse>

          <div className="space-y-6">
            <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
              Reset at a glance
            </p>

            <div className="space-y-8 sm:space-y-10">
              {heroComparisonImages.map((item) => (
                <CaseStudyFigure
                  key={`${item.label}-${item.alt}`}
                  label={item.label}
                  image={item.image}
                  alt={item.alt}
                  caption={item.caption}
                  priority={item.priority}
                  framed={false}
                />
              ))}
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Strategic Foundation"
          title="The reset originated in a strategic vision for the buyer experience"
          intro="New Search did not start as an isolated UI redesign. It came out of earlier strategic work that clarified what the buyer journey needed to do better across search and decision-making surfaces."
        >
          <CaseStudyProse>
            <p>
              Before this reset moved into execution, I was part of the
              upstream buyer-side vision work that helped reframe the experience
              around guidance, selection, and trust. That work brought together
              research synthesis, market review, concept development, and
              stakeholder alignment across search, list, and detail surfaces. It
              gave the team a clearer strategic foundation for what a stronger
              buyer journey should do, and New Search became one of the
              clearest downstream expressions of that direction.
            </p>

            <p>
              For this case study, I am not treating that broader work as a
              separate product launch or claiming sole ownership of it. I am
              including it because it materially shaped the problem framing,
              design principles, and cross-platform baseline decisions that
              followed.
            </p>
          </CaseStudyProse>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="The Problem"
          title="Why search needed a reset"
          intro="This was not a cosmetic redesign. Friction in search was affecting both the buyer experience and a key commercial funnel, and the existing direction no longer had the evidence to justify incremental improvement."
        >
          <BulletList items={problemSignals} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="The Change"
          title="What changed in the baseline"
          intro="The high-value changes were structural: clearer filter hierarchy, stronger entry points to high-value choices, and interaction patterns the team could actually validate and roll out without hiding the complexity buyers actually needed."
        >
          <div className="space-y-10">
            <BulletList items={experienceChanges} />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
              <div>
                <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                  Important workstream
                </p>
                <h3 className="homepage-type-item-title mt-4 max-w-3xl text-[color:var(--foreground)]">
                  {taxonomyWorkstream.title}
                </h3>
                <div className="homepage-type-body mt-5 max-w-3xl space-y-4 text-[color:var(--color-muted)]">
                  {taxonomyWorkstream.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <CaseStudyFigure
                label="Concrete decision"
                image={mwebSearchAfterMakeModel}
                alt="Mobile web make and model selection flow showing how the reset brought a high-value filtering decision earlier in the experience."
                caption="On mobile web, make and model moved earlier into a clearer selection flow."
                imageClassName="h-auto max-h-[30rem] !w-auto max-w-full"
                mediaClassName="flex items-start justify-center"
              />
            </div>

            <CaseStudyFigure
              label="Desktop interaction state"
              image={desktopSearchAfterModal}
              alt="Desktop results page with a focused filter modal open, showing one decision at a time without forcing the buyer to manage the full filter set at once."
              caption="On desktop results, buyers could refine one filter in context instead of managing the full filter set at once."
            />
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="My Role"
          title="What I directly drove"
          intro="My contribution was strongest in shaping the direction of the baseline and the decisions around it, not in claiming sole ownership of every validation or launch result."
        >
          <BulletList items={roleSignals} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Key Decisions"
          title="Three decisions changed the trajectory"
          intro="This is the clearest representation of the work: when to reset, where to trust the evidence, and where not to flatten real platform differences."
        >
          <div className="space-y-10">
            <div className="space-y-6">
              <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                Decision 01 in practice
              </p>
              <h3 className="homepage-type-item-title max-w-3xl text-[color:var(--foreground)]">
                Legacy baseline, intermediate direction, stronger reset
              </h3>
              <p className="homepage-type-body max-w-3xl text-[color:var(--color-muted)]">
                The reset was not a cosmetic tune-up. The team moved beyond the
                older baseline, stepped away from a weaker intermediate
                direction, and established a clearer baseline it could validate
                and extend.
              </p>

              <CaseStudyFigureGrid items={decisionComparisonImages} />
            </div>

            <div className="overflow-hidden rounded-lg border border-[color:var(--color-line)]">
              {decisionCards.map((card, index) => (
                <div
                  key={card.title}
                  className="grid gap-5 border-b border-[color:var(--color-line)] px-6 py-7 last:border-b-0 sm:px-8 lg:grid-cols-[5.5rem_minmax(0,1fr)] lg:gap-8"
                >
                  <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <div className="space-y-3">
                    <h3 className="homepage-type-item-title max-w-2xl text-[color:var(--foreground)]">
                      {card.title}
                    </h3>
                    <p className="homepage-type-body max-w-3xl text-[color:var(--color-muted)]">
                      {card.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Outcomes / Impact"
          title="A stronger baseline, validated first on iOS"
          intro="The outcome here is not that every platform improved in the same way. It is that New Search established a stronger baseline, proved it most clearly on iOS, and then extended across Android and web with more limited evidence."
        >
          <CaseStudyCard variant="soft" className="!h-auto">
            <div className="space-y-8">
              {platformSignals.map((item, index) => (
                <div
                  key={item.label}
                  className={
                    index < platformSignals.length - 1
                      ? "border-b border-[color:var(--color-line)] pb-8"
                      : ""
                  }
                >
                  <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                    {item.label}
                  </p>
                  <p className="homepage-type-section-heading homepage-type-section-heading--compact mt-3 text-[color:var(--foreground)]">
                    {item.metric}
                  </p>
                  <p className="homepage-type-body mt-3 text-[color:var(--color-muted)]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </CaseStudyCard>

          <CaseStudyProse>
            <p>
              Broader strategy work around New Search modelled larger upside and
              tied the programme to stronger enquiry paths, but I treat that as
              business-case context rather than delivered outcome. The honest
              takeaway is a staged reset with one strong proof point and two
              narrower follow-through stories.
            </p>
          </CaseStudyProse>
        </CaseStudySection>

        <CaseStudyFigure
          image={appsMockupDark}
          alt="Dark app mockup used as the closing visual for the New Search case study."
          sizes="100vw"
          fullBleed
          className="bg-[#101010]"
          imageClassName="h-auto w-full"
        />

        <CaseStudyEndNav currentSlug="new-search" />
      </CaseStudyArticle>
    </CaseStudyShell>
  );
}
