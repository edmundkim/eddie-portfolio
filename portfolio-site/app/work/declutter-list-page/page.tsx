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
import declutterHeroMockupWide from "../../../content/case-studies/declutter-LP/assets/declutter-hero-mockup-wide.png";
import mwebAfter from "../../../content/case-studies/declutter-LP/assets/declutter-mweb-after.png";
import mwebBefore from "../../../content/case-studies/declutter-LP/assets/declutter-mweb-before.png";
import searchVisionMiro from "../../../content/case-studies/declutter-LP/assets/search_vision_miro.png";

export const metadata: Metadata = {
  title: "Declutter the List Page | Eddie Kim",
  description:
    "Case study on simplifying AutoScout24's list page card across web and app while balancing browsing clarity, dealer leads, partner exposure, and imagery.",
};

const heroFacts = [
  {
    label: "Outcome",
    value: "Rollout forecast: +25% dealer DPVs, +3% dealer leads",
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
  "It also sits upstream of dealer leads, finance and insurance entry points, and media value.",
  "Multiple teams had legitimate claims on limited card space, so simplification meant deprioritising something.",
  "That made the work a marketplace prioritisation problem: decide what the card most needed to do, then defend those choices with evidence.",
];

const roleDetails = [
  {
    title: "What I directly drove",
    items: [
      "Reframed the brief from visual clutter to decision quality on the list page",
      "Led concept exploration and experiment design across declutter level, partner-link treatment, and gallery behaviour",
      "Translated qualitative and quantitative findings into concrete web and app recommendations",
      "Carried the design work through delivery support, QA, and rollout guidance",
    ],
  },
  {
    title: "What stayed shared",
    items: [
      "Worked with product and analytics to evaluate tradeoffs across dealer leads, private leads, DPVs, and partner performance",
      "Helped challenge flattering readouts when reported and actual DPVs diverged, especially in desktop gallery evaluation",
      "Engineering, analytics, and rollout partners owned implementation, deep-dive analysis, and operational rollout",
    ],
  },
];

const keyDecisions = [
  {
    title: "Push the stronger simplification",
    body: "The first mobile-web test showed the more reduced direction was worth backing. The most decluttered variant increased total dealer leads from the list page by 12%, while the slightly decluttered version increased them by 8%, which made simplification a credible product bet rather than a visual preference.",
  },
  {
    title: "Treat partner links as core product tradeoffs",
    body: "Once declutter helped core browsing signals, the harder question became how much finance and insurance exposure the card should keep. Later tests showed private performance, Check24 outcomes, and finance metrics did not all move in the same direction, so the card could not optimise every commercial surface equally.",
  },
  {
    title: "Trust actual progression over flattering proxies",
    body: "Desktop validation exposed a measurement trap: richer gallery behaviour could make reported interaction metrics look healthier while actual dealer DPVs fell. That changed the decision from 'gallery feels richer' to 'which measure best reflects real progression?'",
  },
  {
    title: "Let platforms diverge when the evidence diverged",
    body: "The programme did not support one universal card. Web converged on No Gallery, while apps retained a gallery direction, and finance and insurance placement changed around the constraints and evidence of each platform.",
  },
];

const confirmedOutcomes = [
  {
    label: "Confirmed measured result",
    metric: "+12%",
    summary: "dealer leads from the list page in early IT mWeb",
    body: "In the early IT mobile-web test, the most decluttered no-links variant increased total dealer leads from the list page by 12%. The slightly decluttered version also improved leads by 8%, which made the stronger direction credible enough to keep testing rather than a final programme headline.",
  },
  {
    label: "Confirmed measured result",
    metric: "+6%",
    summary: "actual dealer DPVs in DE desktop No Gallery test",
    body: "Desktop validation clarified the later rollout logic. The No Gallery direction increased actual dealer DPVs by 6% in DE with dealer leads stable, while Gallery variants reduced actual dealer DPVs in both DE (-9%) and IT (-27%).",
  },
];

const supportingOutcomes = [
  {
    label: "Final state",
    title: "The list-card approach was rolled out across markets and platforms",
    body: "The programme ended with a clear rollout logic: mobile web and desktop converged on No Gallery, apps retained a gallery direction, and finance and insurance placement was refined around each platform's needs. The list-card approach was rolled out to all markets on all platforms, giving AutoScout24 a cleaner and more scalable foundation for results browsing.",
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
      "flex min-h-[28rem] items-start justify-start sm:min-h-[32rem]",
    imageClassName: "h-auto max-h-[28rem] w-auto max-w-full sm:max-h-[32rem]",
  },
  {
    label: "After",
    image: mwebAfter,
    alt: "Mobile web list card after declutter with simplified hierarchy and more focused comparison signals.",
    contentClassName:
      "flex min-h-[28rem] items-start justify-start sm:min-h-[32rem]",
    imageClassName: "h-auto max-h-[28rem] w-auto max-w-full sm:max-h-[32rem]",
  },
];

const appCompareImages = [
  {
    label: "Before",
    image: appsBefore,
    alt: "Native app list card before declutter with a denser balance of imagery, details, and controls.",
    contentClassName:
      "flex min-h-[24rem] items-start justify-start sm:min-h-[26rem]",
    imageClassName: "h-auto max-h-[24rem] w-auto max-w-full sm:max-h-[26rem]",
  },
  {
    label: "After",
    image: appsAfter,
    alt: "Native app list card after declutter with a different platform-specific balance of imagery and information.",
    contentClassName:
      "flex min-h-[24rem] items-start justify-start sm:min-h-[26rem]",
    imageClassName: "h-auto max-h-[24rem] w-auto max-w-full sm:max-h-[26rem]",
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
          lede="Across a multi-phase program, I led the design work to simplify AutoScout24's list page card across web and app. That work established a higher-performing list-card direction that made browsing easier, strengthened the search funnel, and created a clearer foundation for rollout decisions across platforms. The harder challenge was balancing that improvement with the needs of partner links, imagery, and other commercial surfaces on the card."
          facts={heroFacts}
        >
          <CaseStudyFigure
            image={declutterHeroMockupWide}
            alt="Wide mockup showing the decluttered AutoScout24 list page experience."
            sizes="120vw"
            priority
            fullBleed
            className="mt-14"
            imageClassName="relative left-1/2 h-auto w-[120vw] max-w-none -translate-x-1/2"
          />
        </CaseStudyHero>

        <CaseStudySection
          eyebrow="Overview"
          title="A list card redesign aimed at faster decisions"
          intro="This was a decision-quality problem on the search funnel, not a visual tidy-up. Internal signals suggested the issue was commercially meaningful rather than proving one single cause: one source reported that 12% of users said clutter hurt the search experience, and Contentsquare zoning showed about half of visitors left the list page before reaching a detail page."
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
              signaled, and later reworking finance and insurance placement
              rather than letting every internal demand stay equally prominent.
            </p>
          </CaseStudyProse>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Visual Proof"
          title="The desktop card made the hierarchy shift obvious"
          intro="Once the problem is clear, the desktop compare makes the core move easy to see: less noise, clearer scanability, and a more disciplined balance between product signals and commercial surfaces."
        >
          <CaseStudyFigureGrid items={desktopCompareImages} />
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

        <CaseStudyFigure
          image={searchVisionMiro}
          alt="Zoomed-out Miro board showing the breadth of the broader search vision work around the list-card redesign."
          sizes="100vw"
          fullBleed
          className="mb-16 sm:mb-20 lg:mb-24"
          imageClassName="h-auto w-full max-w-none"
        />

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
          intro="My role was to lead the design problem across multiple phases: clarify what the card should optimise for, test the riskiest tradeoffs, and help turn repeated findings into a rollout direction."
        >
          <div className="grid gap-5 md:grid-cols-2">
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
          <div className="grid gap-5 md:grid-cols-2">
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
          intro="The clearest honest landing is that stronger declutter made the direction credible early, desktop validation clarified where No Gallery was safer, and the programme ultimately landed as a platform-specific rollout rather than one universal winner."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {confirmedOutcomes.map((outcome, index) => (
              <CaseStudyCard
                key={outcome.summary}
                variant={index === 0 ? "dark" : "soft"}
              >
                <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
                  {outcome.label}
                </p>
                <p className="mt-6 text-5xl font-medium leading-none tracking-[-0.04em] sm:text-6xl">
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
            <CaseStudyCard key={outcome.title}>
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
        >
          <CaseStudyFigureGrid items={mobileWebCompareImages} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Reflection"
          title="What this project clarified"
          intro="Simplification only held up when the team was explicit about what the card should optimise for."
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

        <CaseStudyEndNav currentSlug="declutter-list-page" />
      </CaseStudyArticle>
    </CaseStudyShell>
  );
}
