import type { Metadata } from "next";

import BulletList from "@/components/BulletList";
import {
  CaseStudyArticle,
  CaseStudyCard,
  CaseStudyFigure,
  CaseStudyHeader,
  CaseStudyHero,
  CaseStudyProse,
  CaseStudySection,
  CaseStudyShell,
} from "@/components/case-study/CaseStudy";
import CaseStudyEndNav from "@/components/CaseStudyEndNav";

import strategicAiMockupHero from "../../../content/case-studies/strategic-AI/assets/strategic-ai-mockup-hero.png";

export const metadata: Metadata = {
  title: "Shaping How AI Should Work in Product | Eddie Kim",
  description:
    "Work on AI product direction, reusable communication standards, AI-assisted workflow capability, and cross-team AI design leadership at AutoScout24.",
};

const heroFacts = [
  { label: "Role", value: "Principal Product Designer, AI Design Lead" },
  {
    label: "Owned Directly",
    value:
      "Visual AI Framework, AI guidance for UX, and education paths for AI-assisted workflows",
  },
  {
    label: "Shaped",
    value: "Early AI-assisted product concepts and product direction",
  },
  {
    label: "Aligned",
    value:
      "Senior product, design, and technology leaders on AI-assisted workflow change",
  },
];

const whyItMattered = [
  "Without shared standards, AI cues, labels, and interaction patterns could drift across products.",
  "Teams needed clearer rules for when AI should be obvious to users and what level of review or control it required.",
  "The UX team needed practical education paths for AI-assisted workflows as AI changed product-development and design practice.",
];

const roleScope = [
  {
    title: "Owned directly",
    items: [
      "The Visual AI Framework",
      "AI design guidance and education paths for the UX team",
      "Cross-functional capability work around AI-assisted product-development workflows",
      "AI prototyping capability across the broader product organisation",
    ],
  },
  {
    title: "Shaped through influence",
    items: [
      "Senior design direction on early AI-assisted product concepts",
      "Alignment with senior product, design, and technology leaders on AI-assisted workflow change",
      "Key flows and experience principles on early AI product work",
      "Guidance that shaped decisions beyond direct reporting lines",
    ],
  },
];

const frameworkPrinciples = [
  {
    title: "Visibility scaled with user impact",
    body: "The core rule was simple: AI should become more visible as its effect on user understanding, decisions, and control increases.",
  },
  {
    title: "Different AI behaviours needed different signals",
    body: "The framework distinguished between low-visibility assistance and cases where AI generated, summarised, recommended, personalised in a non-obvious way, or acted on the user's behalf.",
  },
  {
    title: "Controls increased with stakes",
    body: "As AI moved closer to decision-shaping or action-taking, the design needed stronger review, consent, editability, override, and exit.",
  },
];

const leverageAreas = [
  {
    title: "Early product direction",
    body: "Alongside the framework work, I contributed senior design direction to early AI-assisted product concepts. Because the work was still upstream, my contribution focused on flows, principles, and decision criteria before patterns hardened.",
  },
  {
    title: "Internal capability building",
    body: "I also led AI guidance for UX, education paths for AI-assisted workflows, and prototyping capability across the broader product organisation. As part of that, I led cross-functional capability work with senior product, design, and technology leaders on how AI-assisted workflows were changing design practice and product development.",
  },
];

export default function StrategicAiDesignLeadershipPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader />

      <CaseStudyArticle>
        <CaseStudyHero
          eyebrow="AutoScout24 · Strategic AI Design Leadership"
          title="Shaping How AI Should Work in Product"
          lede="At AutoScout24, I owned the Visual AI Framework and the design standards behind it, led UX capability-building around AI-assisted workflows, and contributed senior design direction to early AI-assisted product concepts."
          secondaryLede="The work mattered because teams needed clearer decision criteria for when AI should be visible, what level of review or control it required, and how UX workflows should adapt as AI changed product development."
          facts={heroFacts}
        >
          <CaseStudyFigure
            image={strategicAiMockupHero}
            alt="Full-bleed laptop mockup showing an AI communication framework."
            sizes="100vw"
            priority
            fullBleed
            className="mt-14"
            imageClassName="h-auto w-full"
          />
        </CaseStudyHero>

        <CaseStudySection
          eyebrow="Why This Work Existed"
          title="AI work was accelerating before shared standards existed"
          intro="The challenge was less about one feature and more about preventing inconsistent AI patterns from spreading across the product before there was a reusable model for designing them."
        >
          <BulletList items={whyItMattered} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Role"
          title="What I owned and where I shaped direction"
          intro="I owned the reusable standards work and the AI design guidance behind it. I also led cross-functional capability work around AI-assisted workflows, aligning the work with senior product, design, and technology leaders. On product concepts, my role was senior design direction: helping shape key flows, principles, and tradeoffs alongside other designers and cross-functional partners."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {roleScope.map((group) => (
              <CaseStudyCard key={group.title} title={group.title}>
                <BulletList items={group.items} />
              </CaseStudyCard>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Visual AI Framework"
          title="The most concrete output was a reusable AI communication model"
          intro="The framework turned broad AI principles into a reusable standard teams could use to make more consistent product decisions."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {frameworkPrinciples.map((principle) => (
              <CaseStudyCard key={principle.title} title={principle.title}>
                <p className="homepage-type-body text-[color:var(--color-muted)]">
                  {principle.body}
                </p>
              </CaseStudyCard>
            ))}
          </div>

          <CaseStudyProse>
            <p>
              In practice, subtle assistive behaviour could stay quiet, while
              generated summaries, recommendations, and non-obvious
              personalisation needed clearer labelling and a stronger review
              path.
            </p>
            <p>
              The framework combined a shared AI visibility model with reusable
              signals such as labels, badges, gradients, and icons, plus
              guidance on review and override. It gave teams a clearer basis
              for deciding what needed explicit signalling, what could remain
              lightweight, and when stronger review or control was necessary.
            </p>
          </CaseStudyProse>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Leverage"
          title="The value was in reusable standards and organisational capability"
          intro="This work was less about a single shipped feature and more about giving teams a clearer basis for early AI product decisions and AI-assisted ways of working."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {leverageAreas.map((group) => (
              <CaseStudyCard key={group.title} title={group.title}>
                <p className="homepage-type-body text-[color:var(--color-muted)]">
                  {group.body}
                </p>
              </CaseStudyCard>
            ))}
          </div>

          <CaseStudyCard variant="soft" className="!h-auto">
            <p className="homepage-type-body text-[color:var(--color-muted)]">
              The strongest proof here is in the reusable standards,
              decision-making guidance, and
              capability-building context rather than post-launch metrics. The
              product concepts were still early, so this page is
              intentionally about how the work set direction rather than
              claiming downstream product outcomes.
            </p>
          </CaseStudyCard>
        </CaseStudySection>

        <CaseStudyEndNav currentSlug="strategic-ai-design-leadership" />
      </CaseStudyArticle>
    </CaseStudyShell>
  );
}
