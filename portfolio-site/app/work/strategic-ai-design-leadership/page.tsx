import type { Metadata } from "next";

import BulletList from "@/components/BulletList";
import {
  CaseStudyArticle,
  CaseStudyCard,
  CaseStudyHeader,
  CaseStudyHero,
  CaseStudyProse,
  CaseStudySection,
  CaseStudyShell,
} from "@/components/case-study/CaseStudy";
import CaseStudyEndNav from "@/components/CaseStudyEndNav";

export const metadata: Metadata = {
  title: "Shaping How AI Should Work in Product | Eddie Kim",
  description:
    "Work on AI product direction, reusable communication standards, agentic-coding capability, and cross-team AI design leadership at AutoScout24.",
};

const heroFacts = [
  { label: "Role", value: "Principal Product Designer, AI Design Lead" },
  {
    label: "Owned Directly",
    value:
      "Visual AI Framework, AI guidance for UX, and agentic-coding education paths",
  },
  {
    label: "Shaped",
    value:
      "Early AI concepts and prototypes, including conversational AI and lead enrichment",
  },
  {
    label: "Aligned",
    value: "CPO and senior stakeholders on AI-driven workflow change",
  },
];

const whyItMattered = [
  "Without shared standards, AI cues, labels, and interaction patterns could drift across products.",
  "Teams needed clearer rules for when AI should be obvious to users and what level of review or control it required.",
  "The UX team needed practical education paths for agentic coding as AI changed product-development and design workflows.",
];

const roleScope = [
  {
    title: "Owned directly",
    items: [
      "The Visual AI Framework",
      "AI design guidance and education paths for the UX team",
      "A taskforce shaping agentic-coding capability and AI-assisted workflow change",
      "AI prototyping capability across the broader product organisation",
    ],
  },
  {
    title: "Shaped through influence",
    items: [
      "Senior design direction on two early AI concepts: conversational AI and AI-assisted lead enrichment",
      "Alignment with the CPO and senior stakeholders on AI-driven workflow change",
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
    body: "Alongside the framework work, I contributed senior design direction on two early AI efforts: a conversational AI concept and a concept for AI-assisted lead enrichment. Because both were still in concept and prototype stage, the contribution was upstream: shaping flows, principles, and decision criteria before patterns hardened.",
  },
  {
    title: "Internal capability building",
    body: "I also led AI guidance for UX, education paths for agentic coding, and prototyping capability across the broader product organisation. As part of that, I led a taskforce aligned with the CPO and senior stakeholders on how AI-assisted workflows were changing design practice and product development.",
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
          lede="At AutoScout24, I owned the Visual AI Framework and the design standards behind it, led UX capability-building work around agentic coding, and contributed senior design direction to two early AI concepts: conversational AI and a concept for AI-assisted lead enrichment."
          secondaryLede="The work mattered because teams needed clearer decision criteria for when AI should be visible, what level of review or control it required, and how UX workflows should adapt as AI changed product development."
          facts={heroFacts}
        />

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
          intro="I owned the reusable standards work and the AI design guidance behind it. I also led the taskforce shaping UX education paths for agentic coding, aligning that capability work with the CPO and senior stakeholders. On product concepts, my role was senior design direction: helping shape key flows, principles, and tradeoffs alongside other designers and cross-functional partners."
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
              The framework combined an AI presence scale with reusable signals
              such as labels, badges, gradients, and icons, plus guidance on
              review and override. It gave teams a clearer basis for deciding
              what needed explicit signalling, what could remain lightweight,
              and when stronger review or control was necessary.
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
              decision-making guidance, taskforce leadership, and
              capability-building context rather than post-launch metrics. The
              named AI initiatives were still early, so this page is
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
