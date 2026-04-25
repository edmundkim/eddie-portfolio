import type { Metadata } from "next";

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

import heroMockup from "../../../content/legacy-projects/daimler-subscription/assets/Clay_Mockup___7_.png";
import decisionsEvidence from "../../../content/legacy-projects/daimler-subscription/assets/Screenshot+2022-04-11+at+16.11.37.png";
import outcomeEvidence from "../../../content/legacy-projects/daimler-subscription/assets/Screenshot+2022-04-11+at+16.22.34.png";
import flowArtifact from "../../../content/legacy-projects/daimler-subscription/assets/flow_v3.png";
import closingMockup from "../../../content/legacy-projects/daimler-subscription/assets/Mockup.png";

export const metadata: Metadata = {
  title: "Daimler Vehicle Subscription Concept | Eddie Kim",
  description:
    "Greenfield Daimler subscription concept focused on making an unfamiliar service model clearer from selection through lifecycle management.",
};

const heroFacts = [
  {
    label: "Project type",
    value: "Greenfield vehicle subscription concept",
  },
  {
    label: "Role",
    value: "Experience Design Lead, Deloitte Digital Germany",
  },
  {
    label: "Scope",
    value: "Selection through lifecycle management on desktop and mobile web",
  },
  {
    label: "Outcome",
    value:
      "Approved concept, tested with 7 relevant participants, then moved in-house for the subscription experience",
  },
];

const decisionCards = [
  {
    title: "Define the full relationship, not just the signup",
    body: "I scoped the concept from vehicle selection through delivery and lifecycle management so the offer felt like a service, not just a checkout flow. That made the model more concrete for users and more actionable for the client team.",
  },
  {
    title: "Lower the barrier to commitment",
    body: "The acquisition flow minimised upfront data entry, used a focused step-by-step configuration model, and kept a persistent subscription summary visible during decision-making. I also moved mandatory identity verification until after subscription, deliberately trading earlier certainty for a lower barrier to entry.",
  },
  {
    title: "Use testing to tighten high-friction moments",
    body: "Testing pushed specific refinements rather than broad redesign: clearer navigation, payment before review, better step progression, stronger policy visibility, and clearer explanation of lifecycle actions after sign-up.",
  },
];

export default function DaimlerSubscriptionConceptPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader backLabel="Back to portfolio" />

      <CaseStudyArticle>
        <CaseStudyHero
          eyebrow="Daimler Mercedes-Benz · Vehicle Subscription Concept"
          title="Daimler Vehicle Subscription Concept"
          lede="Daimler was exploring a vehicle subscription offer before the model was well understood by consumers or fully defined internally. I led UX definition for a two-month concept that made the service clearer from vehicle selection through lifecycle management, giving the client team a more coherent end-to-end model and surfacing the friction that still needed refinement in user testing."
          facts={heroFacts}
        />

        <CaseStudyFigure
          image={heroMockup}
          alt="Full-width hero mockup showing repeated mobile subscription concept screens from the Daimler vehicle subscription concept."
          sizes="100vw"
          fullBleed
          className="mb-16 sm:mb-20 lg:mb-24"
          imageClassName="h-auto w-full"
        />

        <CaseStudySection
          eyebrow="The Problem"
          title="Clarifying a new subscription model end to end"
          intro="The brief was as much about clarifying the product as designing the interface."
        >
          <CaseStudyProse>
            <p>
              A subscription service sits awkwardly between ownership, leasing,
              and a managed service. If the experience could not quickly explain
              what was included, how commitment worked, and what happened after
              sign-up, the offer would feel risky before a user ever reached
              checkout.
            </p>
            <p>
              The scope therefore went beyond an acquisition funnel. I had to
              define a journey that made the model understandable from vehicle
              selection through delivery and ongoing management while the
              business requirements were still evolving.
            </p>
          </CaseStudyProse>

          <CaseStudyFigure
            label="Scope proof"
            image={flowArtifact}
            alt="High-level Daimler subscription flow showing the acquisition journey, checkout steps, lifecycle management, Mercedes Me management, and dealer management touchpoints."
            caption="This flow made the acquisition path, lifecycle management, and dealer handoffs concrete enough to evaluate as one service model."
            preserveWidthOnSmallScreens
            preservedWidthClassName="min-w-0 sm:min-w-[52rem]"
          />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="My Role"
          title="Leading UX definition with clear ownership boundaries"
          intro="I led UX definition on a small cross-functional concept team and presented the work directly to Daimler and Mercedes-Benz executives."
        >
          <div className="grid gap-5 md:grid-cols-2">
            <CaseStudyCard title="What I owned">
              <p className="homepage-type-body text-[color:var(--color-muted)]">
                As Experience Design Lead at Deloitte Digital Germany, I owned
                research synthesis, competitive review, journey and flow
                definition, wireframes, and executive presentations.
              </p>
            </CaseStudyCard>

            <CaseStudyCard title="What stayed shared">
              <p className="homepage-type-body text-[color:var(--color-muted)]">
                The team included an automotive strategist, systems architect,
                UI designer, and design leadership. The business model, visual
                execution, and any later MVP delivery were shared or outside my
                direct ownership.
              </p>
            </CaseStudyCard>
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Key Decisions"
          title="The most important calls were about clarity and commitment"
          intro="The strongest part of the work was not surface polish. It was choosing how to make an unfamiliar service legible enough that users could understand it and low-friction enough that they could commit."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {decisionCards.map((card) => (
              <CaseStudyCard key={card.title} title={card.title}>
                <p className="homepage-type-body text-[color:var(--color-muted)]">
                  {card.body}
                </p>
              </CaseStudyCard>
            ))}
          </div>

          <CaseStudyFigure
            label="Decision proof"
            image={decisionsEvidence}
            alt="Subscription concept screen showing included services, price summary, five-step progression, and a clear call to configure the subscription."
            caption="The concept kept the offer, included services, and commitment details visible while reducing friction in the path to subscribe."
            className="max-w-4xl"
          />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Outcome"
          title="What changed because of the concept"
          intro="The work gave Daimler a clearer structure for the service and showed where the model was still creating friction."
        >
          <CaseStudyProse>
            <p>
              User testing with seven relevant participants was light but
              useful. It validated the overall direction and surfaced specific
              changes around navigation, payment and review order, policy
              clarity, step progression, and lifecycle communication.
            </p>
            <p>
              The concept was approved by the client and helped inform
              follow-on work that later moved toward an MVP. This phase remained
              pre-launch, so the clearest consequence is that it turned an
              ambiguous service idea into a more concrete, testable direction
              rather than proving market impact.
            </p>
          </CaseStudyProse>

          <CaseStudyFigure
            label="Validation evidence"
            image={outcomeEvidence}
            alt="Testing summary slide showing the six subscription scenarios, overall task completion, and difficulty markers from participant validation."
            caption="Testing showed the direction was understandable overall while still exposing friction in navigation and step clarity."
            className="max-w-4xl"
          />
        </CaseStudySection>

        <CaseStudyFigure
          image={closingMockup}
          alt="Full-width closing mockup showing the Daimler subscription lifecycle dashboard concept."
          sizes="100vw"
          fullBleed
          className="mt-8"
          imageClassName="h-auto w-full"
        />

        <CaseStudyEndNav
          currentSlug="daimler-subscription-concept"
          showDivider={false}
        />
      </CaseStudyArticle>
    </CaseStudyShell>
  );
}
