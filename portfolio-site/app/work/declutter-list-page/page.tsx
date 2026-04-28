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

import appsAfter from "../../../content/case-studies/declutter-LP/assets/declutter-apps-after.png";
import appsBefore from "../../../content/case-studies/declutter-LP/assets/declutter-apps-before.png";
import desktopAfter from "../../../content/case-studies/declutter-LP/assets/declutter-desktop-after.png";
import desktopBefore from "../../../content/case-studies/declutter-LP/assets/declutter-desktop-before.png";
import desktopMacbookClean from "../../../content/case-studies/declutter-LP/assets/declutter-desktop-macbook-clean.png";
import declutterHeroMockupWide from "../../../content/case-studies/declutter-LP/assets/declutter-hero-mockup-wide-red.png";
import mwebAfter from "../../../content/case-studies/declutter-LP/assets/declutter-mweb-after.png";
import mwebBefore from "../../../content/case-studies/declutter-LP/assets/declutter-mweb-before.png";

export const metadata: Metadata = {
  title: "Declutter the List Page | Eddie Kim",
  description:
    "Case study on simplifying AutoScout24's list-page card across web and app while balancing browsing clarity, commercial constraints, imagery, and rollout quality.",
};

const heroFacts = [
  {
    label: "Outcome",
    value:
      "Validated through testing and analysis across buyer progression and enquiry behaviour",
  },
  { label: "Company", value: "AutoScout24" },
  {
    label: "Role",
    value: "Senior Product Designer to Principal Product Designer",
  },
  { label: "Scope", value: "mWeb, desktop, iOS, Android" },
];

const whyItMattered = [
  "The list card shapes what buyers notice, what they open, and how quickly they can compare offers.",
  "It also sits upstream of high-value browsing, enquiry, and commercial entry points.",
  "Multiple teams had legitimate claims on limited card space, so simplification meant deprioritising something.",
  "That made the work a marketplace prioritisation problem: decide what the card most needed to do, then defend those choices with evidence.",
];

const roleDetails = [
  {
    title: "What I directly drove",
    items: [
      "Reframed the brief from visual clutter to decision quality on the list page",
      "Led concept exploration and validation planning across information density, commercial entry points, and image behaviour",
      "Translated research and measurement signals into concrete web and app recommendations",
      "Supported delivery, QA, and rollout decisions with product and engineering partners",
    ],
  },
  {
    title: "What stayed shared",
    items: [
      "Worked with product and analytics to evaluate tradeoffs across browsing progression, enquiry quality, and commercial surfaces",
      "Helped challenge proxy engagement signals when they did not reflect meaningful progression",
      "Engineering, analytics, and rollout partners owned implementation, deeper analysis, and operational rollout",
    ],
  },
];

const keyDecisions = [
  {
    title: "Back the stronger simplification",
    body: "Early validation showed the more reduced direction was worth pursuing. That shifted the discussion from visual preference to product judgment: how far could we simplify the card while preserving the signals buyers and the business still needed?",
  },
  {
    title: "Treat commercial entry points as product tradeoffs",
    body: "Once declutter helped core browsing signals, the harder question became how much space adjacent commercial surfaces should keep. The card could not optimise every buyer and business need equally, so each entry point had to earn its prominence.",
  },
  {
    title: "Trust actual progression over flattering proxies",
    body: "Follow-up validation exposed a measurement trap: richer on-card interaction could make engagement look healthier without clearly improving meaningful progression. That changed the decision from 'this feels richer' to 'which measure best reflects real buyer progress?'",
  },
  {
    title: "Let platforms diverge when the evidence diverged",
    body: "The programme did not support one universal card. Web and native apps needed different balances of image emphasis, detail, and action density while still following the same product principles.",
  },
];

const confirmedOutcomes = [
  {
    label: "Measured signal",
    metric: "Positive signal",
    summary: "the more reduced direction moved progression signals in the right direction",
    body: "Early A/B testing gave the team confidence to keep pushing the simpler direction while continuing to validate the commercial tradeoffs around the card.",
  },
  {
    label: "Decision quality",
    metric: "Progression signal",
    summary: "follow-up validation favoured a simpler web treatment",
    body: "Later analysis showed that richer on-card interaction could look healthy in proxy metrics without clearly improving meaningful progression. That pushed the team toward a simpler web approach and a different app balance.",
  },
];

const supportingOutcomes = [
  {
    label: "Final state",
    title: "The list-card approach was rolled out across markets and platforms",
    body: "The key outcome was not one universal winning card, but a clearer platform-specific direction for how much information the list card should carry. It rolled out across multiple markets and platforms, giving AutoScout24 a cleaner and more scalable foundation for results browsing without pretending one pattern should serve every surface equally.",
  },
];

const desktopCompareImages = [
  {
    label: "Before",
    image: desktopBefore,
    alt: "Desktop list card before declutter with more competing information and weaker hierarchy.",
  },
  {
    label: "After",
    image: desktopAfter,
    alt: "Desktop list card after declutter with clearer hierarchy and simplified information layout.",
  },
];

const mobileWebCompareImages = [
  {
    label: "Before",
    image: mwebBefore,
    alt: "Mobile web list card before declutter with denser content and more visual competition.",
    contentClassName:
      "flex min-h-[28rem] items-start justify-center sm:min-h-[32rem]",
    imageClassName:
      "h-auto max-h-[28rem] !w-auto max-w-full sm:max-h-[32rem]",
  },
  {
    label: "After",
    image: mwebAfter,
    alt: "Mobile web list card after declutter with simplified hierarchy and more focused comparison signals.",
    contentClassName:
      "flex min-h-[28rem] items-start justify-center sm:min-h-[32rem]",
    imageClassName:
      "h-auto max-h-[28rem] !w-auto max-w-full sm:max-h-[32rem]",
  },
];

const appCompareImages = [
  {
    label: "Before",
    image: appsBefore,
    alt: "Native app list card before declutter with a denser balance of imagery, details, and controls.",
    contentClassName:
      "flex min-h-[24rem] items-start justify-center sm:min-h-[26rem]",
    imageClassName:
      "h-auto max-h-[24rem] !w-auto max-w-full sm:max-h-[26rem]",
  },
  {
    label: "After",
    image: appsAfter,
    alt: "Native app list card after declutter with a different platform-specific balance of imagery and information.",
    contentClassName:
      "flex min-h-[24rem] items-start justify-center sm:min-h-[26rem]",
    imageClassName:
      "h-auto max-h-[24rem] !w-auto max-w-full sm:max-h-[26rem]",
  },
];

export default function DeclutterListPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader />

      <CaseStudyArticle>
        <CaseStudyHero
          eyebrow="Case Study · AutoScout24 · Search & Discovery"
          title="Declutter the List Page"
          lede="Across a multi-phase programme, I led the design work to simplify AutoScout24's list-page card across web and app. The work improved browsing clarity, gave teams a stronger basis for rollout decisions, and showed where web and native apps needed different treatments. The harder challenge was not removing UI alone, but improving decision quality: deciding which buyer, commercial, and platform needs deserved limited card space."
          facts={heroFacts}
        >
          <CaseStudyFigure
            image={declutterHeroMockupWide}
            alt="Wide mockup showing the decluttered AutoScout24 list page experience."
            sizes="(max-width: 767px) 1500px, 120vw"
            priority
            fullBleed
            className="mt-14"
            mediaClassName="relative h-[600px] overflow-hidden md:h-auto md:overflow-visible"
            imageClassName="absolute left-1/2 top-1/2 !h-full !w-auto max-w-none -translate-x-1/2 -translate-y-1/2 md:relative md:top-auto md:!h-auto md:!w-[120vw] md:translate-y-0"
          />
        </CaseStudyHero>

        <CaseStudySection
          eyebrow="Overview"
          title="A list card redesign aimed at faster decisions"
          intro="This was a decision-quality problem in the search funnel, not a visual tidy-up. Research and behavioural analysis pointed to a commercially meaningful issue: buyers were working too hard to scan, compare, and decide which offers deserved a closer look."
          className="border-t-0"
        >
          <CaseStudyProse>
            <p>
              Early research pointed to the same pattern from multiple angles:
              too many elements competing for attention, unclear hierarchy, and
              weak visual cues for what deserved a closer look.
            </p>
            <p>
              The list page still had to do three jobs well: make it clear that
              users were browsing a list, signal that opening a card was the
              route to richer detail, and provide enough context to compare
              offers quickly.
            </p>
            <p>
              In practice, that meant reducing information density, showing
              more offers above the fold, clarifying what the image area
              signalled, and later reworking commercial entry points rather
              than letting every internal demand stay equally prominent.
            </p>
            <p>
              The work was tested through A/B experiments and follow-up
              analysis across buyer progression and enquiry behaviour. Exact
              values are not included publicly, so the case focuses on the
              validation method, decision logic, and rollout direction.
            </p>
          </CaseStudyProse>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Visual Proof"
          title="The desktop card made the hierarchy shift obvious"
          intro="Once the problem is clear, the desktop compare makes the core move easy to see: less noise, clearer scanability, and a more disciplined balance between product signals and commercial surfaces."
        >
          <div className="space-y-8 sm:space-y-10">
            {desktopCompareImages.map((item) => (
              <CaseStudyFigure
                key={`${item.label}-${item.alt}`}
                label={item.label}
                image={item.image}
                alt={item.alt}
              />
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Strategic Context"
          title="This work sat inside a broader buyer reset"
          intro="The list-card redesign mattered partly because it was one downstream expression of a wider effort to improve how buyers moved from search results to confident decisions."
        >
          <CaseStudyProse>
            <p>
              This work did not start as an isolated card cleanup. It sat inside
              a broader buyer-side effort to improve guidance, selection, and
              trust across search and decision-making surfaces. That context
              helped clarify why the list page mattered so much: if buyers could
              not scan, compare, and progress confidently from results,
              improvements elsewhere in the journey would have limited effect.
            </p>
            <p>
              For this case study, I am not treating that broader work as the
              main story. I am including it only as context for why simplifying
              the list card became an important product decision, not just a
              visual one.
            </p>
          </CaseStudyProse>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Why This Mattered"
          title="This was a marketplace prioritisation problem"
          intro="A small change on the list card could move much more than aesthetics."
        >
          <BulletList items={whyItMattered} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="My Role"
          title="What I directly drove, and what stayed shared"
          intro="My role was to lead the design problem across multiple phases: clarify what the card should optimise for, validate the riskiest tradeoffs, and help turn repeated findings into a rollout direction."
        >
          <div className="grid gap-5 2xl:grid-cols-2">
            {roleDetails.map((group) => (
              <CaseStudyCard key={group.title} title={group.title}>
                <BulletList items={group.items} />
              </CaseStudyCard>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Key Decisions"
          title="The most important calls were about evidence and priorities"
          intro="What made the work consequential was not a cleaner layout on its own. It was deciding what evidence to trust and what the card should prioritise on each platform."
        >
          <div className="grid gap-5 2xl:grid-cols-2">
            {keyDecisions.map((decision) => (
              <CaseStudyCard key={decision.title} title={decision.title}>
                <p className="homepage-type-body text-[color:var(--color-muted)]">
                  {decision.body}
                </p>
              </CaseStudyCard>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Platform Divergence"
          title="Apps kept a different balance of imagery and information"
          intro="The programme did not end with one universal card. The app direction retained a different mix of image emphasis and details, which is why it belongs next to the platform-divergence story rather than at the top of the case study."
        >
          <CaseStudyFigureGrid items={appCompareImages} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Outcome / Impact"
          title="What the evidence supports"
          intro="The clearest honest landing is that stronger declutter produced positive validation signals, follow-up analysis clarified where simpler web behaviour was safer, and the programme ultimately landed as a platform-specific rollout rather than one universal winner."
        >
          <div className="grid gap-5 2xl:grid-cols-2">
            {confirmedOutcomes.map((outcome, index) => (
              <CaseStudyCard
                key={outcome.summary}
                variant={index === 0 ? "dark" : "soft"}
              >
                <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                  {outcome.label}
                </p>
                <p className="mt-6 text-3xl font-medium leading-tight sm:text-4xl">
                  {outcome.metric}
                </p>
                <p className="homepage-type-subhead mt-4 text-[color:var(--foreground)]">
                  {outcome.summary}
                </p>
                <p className="homepage-type-body mt-6 text-[color:var(--color-muted)]">
                  {outcome.body}
                </p>
              </CaseStudyCard>
            ))}
          </div>

          {supportingOutcomes.map((outcome) => (
            <CaseStudyCard key={outcome.title} className="!h-auto">
              <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                {outcome.label}
              </p>
              <h3 className="homepage-type-item-title mt-5 text-[color:var(--foreground)]">
                {outcome.title}
              </h3>
              <p className="homepage-type-body mt-5 text-[color:var(--color-muted)]">
                {outcome.body}
              </p>
            </CaseStudyCard>
          ))}
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Mobile Web"
          title="The same declutter logic had to hold up in tighter space"
          intro="On mobile web, the challenge was not only reducing clutter but deciding which signals deserved the limited space. The reduced card made the key comparison cues easier to read without treating every element as equally important."
          className="py-10 sm:py-20 lg:py-24"
          contentClassName="space-y-6 sm:space-y-8"
        >
          <CaseStudyFigureGrid items={mobileWebCompareImages} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Reflection"
          title="What this project clarified"
          intro="Simplification only held up when the team was explicit about what the card should optimise for."
          className="py-10 sm:py-20 lg:py-24"
          contentClassName="space-y-6 sm:space-y-8"
        >
          <CaseStudyProse>
            <p>
              The most useful lesson was that high-traffic marketplace surfaces
              do not get simpler by removing elements alone. They improve when
              the team is clear about the decision the surface needs to support,
              uses the right measures to judge progress, and lets platforms
              diverge when the tradeoffs genuinely differ.
            </p>
          </CaseStudyProse>
        </CaseStudySection>

        <CaseStudyFigure
          image={desktopMacbookClean}
          alt="Forward-facing MacBook mockup showing the decluttered AutoScout24 desktop list page."
          sizes="(min-width: 1280px) 64rem, 100vw"
          framed={false}
        />

        <CaseStudyEndNav currentSlug="declutter-list-page" showDivider={false} />
      </CaseStudyArticle>
    </CaseStudyShell>
  );
}
