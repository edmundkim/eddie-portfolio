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

import heroMockup from "../../../content/legacy-projects/smart-connected-car-app/assets/smart-connected-car-mockup-spashl-wide.png";
import conceptDirection from "../../../content/legacy-projects/smart-connected-car-app/assets/Frame+16.png";
import conceptScreens from "../../../content/legacy-projects/smart-connected-car-app/assets/Frame+18.png";
import flowArtifact from "../../../content/legacy-projects/smart-connected-car-app/assets/flow_v4.png";
import geofenceFlow from "../../../content/legacy-projects/smart-connected-car-app/assets/geofence_workspace_v2.png";
import journeyMap from "../../../content/legacy-projects/smart-connected-car-app/assets/Smart_user_journey_map+(1).png";
import productContextVisual from "../../../content/legacy-projects/smart-connected-car-app/assets/smart-connected-car-mockup-wide.png";
import researchPrioritization from "../../../content/legacy-projects/smart-connected-car-app/assets/Screenshot+2022-04-01+at+19.14.44.png";
import testingMatrix from "../../../content/legacy-projects/smart-connected-car-app/assets/Screenshot+2022-04-04+at+00.34.54.png";
import vehiclePairingFlow from "../../../content/legacy-projects/smart-connected-car-app/assets/vehicle_pairing_playground_v2__1_.png";

export const metadata: Metadata = {
  title: "smart Connected Car App Design | Eddie Kim",
  description:
    "Supporting case study on shaping smart's native EV companion app from early research into structured, tested, implementation-ready UX.",
};

const heroFacts = [
  {
    label: "Project type",
    value: "Native iOS and Android connected-car companion app",
  },
  {
    label: "Role",
    value: "Experience Design Lead, Deloitte Digital Germany",
  },
  {
    label: "Scope",
    value: "Research synthesis, IA, flows, prototypes, testing, and delivery support",
  },
  {
    label: "Stage",
    value: "Pre-launch engagement; app later shipped after my involvement",
  },
];

const constraints = [
  "The vehicle was still being defined, so the app had to give shape to access, status, remote-control, and ownership moments before every hardware behaviour was fixed.",
  "smart was phasing out the physical key, making pairing, access, phone-key behaviour, and remote commands trust-critical parts of the experience.",
  "EV drivers needed confidence around charging, climate, readiness, and vehicle status, not a feature drawer that hid the most important signals.",
  "Requirements shifted during implementation, with partner and backend integrations across public charging, wall box charging, maps, and internal infrastructure.",
];

const roleScope = [
  {
    title: "What I led",
    items: [
      "Research synthesis from EV-owner interviews, survey input, and connected-car landscape analysis",
      "Information architecture, navigation, user flows, wireframes, and prototypes for core vehicle moments",
      "Testing plans, scripts, facilitation, synthesis, and design iteration",
      "Implementation support through flow artefacts, requirements clarification, and prioritisation conversations",
    ],
  },
  {
    title: "How the work created leverage",
    items: [
      "smart product owners used the artefacts to connect business priorities with user needs and delivery constraints",
      "Engineering, QA, scrum, and Deloitte delivery teams used flows to discuss states, dependencies, and edge cases before build",
      "Final UI, technical implementation, QA, and release readiness remained shared across the broader design, engineering, and delivery team",
    ],
  },
];

const researchSignals = [
  "I sourced and interviewed five EV owners across Europe to understand how they managed charging, range anxiety, vehicle status, and control.",
  "Survey input from EV communities helped prioritise planned features from a user perspective rather than relying only on internal assumptions.",
  "A landscape review of 14 connected-car apps clarified feature coverage, navigation patterns, and expectation gaps in the market.",
  "The research pointed toward a practical core: drivers needed better visibility and control over when, where, and how their vehicle would be charged and ready.",
];

const researchDirection = [
  "Vehicle status and charging had to sit closer to the front of the experience because they shaped driver confidence.",
  "Climate and remote controls needed clearer hierarchy and feedback because users were acting on a vehicle they could not always see.",
  "The IA needed to group the broad feature set around driver jobs rather than internal workstreams or partner systems.",
];

const productDecisionCards = [
  {
    title: "Make vehicle status the home-screen anchor",
    body: "EV drivers needed fast confidence in battery, range, charging, and readiness. The home and IA work treated status as a primary surface rather than a detail users had to hunt for, supported by the journey map, IA flow, and home-screen concept iterations.",
  },
  {
    title: "Treat charging as a confidence journey, not a utility",
    body: "Research emphasised control over when, where, and how charging happened, plus pain around limited visibility. Charging stayed in primary navigation and was explored alongside status, cost, range, public charging, and vehicle readiness.",
  },
  {
    title: "Separate frequent remote actions from deeper controls",
    body: "The planned scope could easily become a dense control drawer. Concept-to-wireframe iterations simplified the default interface and moved lower-frequency controls into more appropriate sections, supported by the home and controls screen evolution.",
  },
  {
    title: "Turn pairing, geofence, and edge-state logic into buildable flows",
    body: "Vehicle activation, phone-key pairing, geofencing, and remote commands relied on clear sequences, states, and error paths. Detailed flow artefacts gave product owners, developers, and QA a shared model for discussion and implementation.",
  },
];

const deliveryCards = [
  {
    title: "Flows made risk visible",
    body: "Pairing, geofencing, charging, climate, and remote controls depended on state changes across the app, vehicle, account, and backend systems. Flow artefacts made those dependencies easier to review before build.",
  },
  {
    title: "Concepts tested hierarchy",
    body: "Early home, charging, and climate directions were pulled into wireframes and click dummies, then refined with product-owner feedback, technical feasibility checks, and user testing.",
  },
  {
    title: "Testing sharpened comprehension",
    body: "Testing helped the team challenge assumptions, simplify dense areas, clarify controls, and move features into places where users were more likely to understand them in the context of the vehicle.",
  },
];

const mobileSafePreservedWidthClassName = "min-w-0";

export default function SmartConnectedCarAppPage() {
  return (
    <CaseStudyShell>
      <CaseStudyHeader backLabel="Back to portfolio" />

      <CaseStudyArticle>
        <CaseStudyHero
          eyebrow="smart · Connected Car Mobile App"
          title="smart Connected Car App Design"
          lede="As Experience Design Lead at Deloitte Digital, I helped shape smart's native iOS and Android EV companion app for vehicle access, status, charging, climate, and controls while vehicle, backend, and partner dependencies were still moving."
          secondaryLede="This is an earlier, pre-launch supporting case. Its value is the product design path: turning an ambiguous connected-EV ecosystem into structured, tested, implementation-ready UX that product, engineering, QA, and delivery teams could align around."
          facts={heroFacts}
        />

        <CaseStudyFigure
          image={heroMockup}
          alt="Wide dark hero mockup with a hand holding a phone showing a bright yellow smart splash screen."
          sizes="100vw"
          fullBleed
          priority
          className="bg-[#1f1f1f]"
          imageClassName="h-auto w-full"
        />

        <CaseStudySection
          eyebrow="The Problem"
          title="Design the companion app before the car existed"
          intro="The brief was not only to design screens. The team needed a coherent product model for pairing, access, remote commands, charging, climate, status, service, and account management around a future electric vehicle and its surrounding systems."
        >
          <BulletList items={constraints} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="My Role"
          title="Lead the UX work that product and delivery teams could use"
          intro="I worked on a year-long programme with Deloitte Digital Germany and Portugal, smart product owners, engineering, QA, scrum, and delivery partners. My role was to turn research, requirements, and shifting constraints into UX artefacts the team could make decisions from."
        >
          <div className="grid gap-5 2xl:grid-cols-2">
            {roleScope.map((group) => (
              <CaseStudyCard key={group.title} title={group.title}>
                <BulletList items={group.items} />
              </CaseStudyCard>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Research"
          title="Start with how EV drivers manage control and confidence"
          intro="The research work turned a broad connected-car brief into clearer user needs around range, charging, reliability, visibility, and readiness. It informed direction rather than proving market outcomes."
        >
          <BulletList items={researchSignals} />

          <div className="max-w-[50rem] border-t border-[color:var(--color-line)] pt-6">
            <h3 className="homepage-type-item-title text-[color:var(--foreground)]">
              What research changed
            </h3>
            <div className="mt-5">
              <BulletList items={researchDirection} />
            </div>
          </div>

          <CaseStudyFigure
            label="prioritisation"
            image={researchPrioritization}
            alt="Feature prioritisation table for the smart app showing planned functionality scored and ranked from a user perspective."
            caption="The prioritisation table turned survey input into product-discussion material, helping compare user desirability across planned functionality before IA and roadmap conversations."
            preserveWidthOnSmallScreens
            preservedWidthClassName={mobileSafePreservedWidthClassName}
          />

          <CaseStudyFigure
            label="journey map"
            image={journeyMap}
            alt="Journey map for a smart connected-car driver showing actions, touchpoints, expectations, and emotional notes across charging, access, control, and lifecycle moments."
            caption="The journey map showed that access, charging, status, service, and ownership moments needed to be considered as one connected driver journey, not as unrelated feature areas."
            preserveWidthOnSmallScreens
            preservedWidthClassName={mobileSafePreservedWidthClassName}
          />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Product Decisions"
          title="Key Product Decisions"
          intro="The central design move was to make the app navigable around the driver's recurring jobs while giving product, engineering, QA, and delivery partners enough structure to discuss states, dependencies, and implementation risk."
        >
          <div className="overflow-hidden border-y border-[color:var(--color-line)]">
            {productDecisionCards.map((card, index) => (
              <div
                key={card.title}
                className="grid gap-4 border-b border-[color:var(--color-line)] py-7 last:border-b-0 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6"
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

          <CaseStudyFigure
            label="IA proof"
            image={flowArtifact}
            alt="High-level flow for the smart connected-car app showing entry states, authenticated and unauthenticated experiences, tab navigation, vehicle control, phone key, climate, charging, account, service, and map areas."
            caption="The high-level flow made product complexity visible: entry states, authenticated and unauthenticated paths, primary navigation, and backend-dependent feature areas could be discussed in one shared map."
            preserveWidthOnSmallScreens
            preservedWidthClassName={mobileSafePreservedWidthClassName}
          />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Delivery"
          title="Move from concepts to flows the team could build"
          intro="The work became concrete through state diagrams, wireframes, click dummies, and concept screens for high-risk flows such as pairing, geofencing, charging, climate, and remote vehicle control."
        >
          <div className="grid gap-5 2xl:grid-cols-3">
            {deliveryCards.map((card) => (
              <CaseStudyCard key={card.title} title={card.title}>
                <p className="homepage-type-body text-[color:var(--color-muted)]">
                  {card.body}
                </p>
              </CaseStudyCard>
            ))}
          </div>

          <div className="grid gap-8">
            <CaseStudyFigure
              label="Pairing flow"
              image={vehiclePairingFlow}
              alt="Vehicle activation flow showing in-car steps, login, QR code scanning, pairing, error handling, and successful vehicle connection states."
              caption="The pairing flow turned access into an implementation conversation: account, vehicle, QR and in-car steps, error handling, and success states had to line up for users to trust the connection."
              preserveWidthOnSmallScreens
              preservedWidthClassName={mobileSafePreservedWidthClassName}
            />

            <CaseStudyFigure
              label="Geofence flow"
              image={geofenceFlow}
              alt="Geofence workspace showing map selection, list management, edit states, notification preferences, and successful geofence creation."
              caption="The geofence artefact made location and notification logic concrete, including saved places, edit states, preferences, and success moments that could not be understood from isolated screens."
              preserveWidthOnSmallScreens
              preservedWidthClassName={mobileSafePreservedWidthClassName}
            />
          </div>

          <CaseStudyFigure
            label="Concept development"
            image={conceptDirection}
            alt="Three smart app mobile screen directions showing a home/control screen evolving into later vehicle dashboard concepts."
            caption="The home experience was simplified from a denser dashboard of feature tiles toward a clearer status and control surface, making the most important vehicle signals easier to scan."
            preserveWidthOnSmallScreens
            preservedWidthClassName={mobileSafePreservedWidthClassName}
          />

          <CaseStudyFigure
            label="Core screens"
            image={conceptScreens}
            alt="Three smart app mobile wireframes showing home, charging, and climate control concepts."
            caption="The home, charging, and climate concepts show how everyday driver confidence shaped core surfaces rather than sitting behind secondary navigation."
            preserveWidthOnSmallScreens
            preservedWidthClassName={mobileSafePreservedWidthClassName}
          />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Outcome"
          title="A pre-launch product direction moved into implementation"
          intro="My engagement ended before public launch, so I do not claim post-launch impact. The work moved from discovery into implementation, and the app later shipped after my involvement."
        >
          <CaseStudyProse>
            <p>
              The value of this case study is the product design path: turning
              an ambiguous connected-EV ecosystem into structured, tested,
              buildable UX across access, status, charging, climate, controls,
              and service moments.
            </p>
            <p>
              The programme reached implementation with a coherent native-app
              structure, detailed flows, prototypes, and testing inputs that
              helped the team clarify product behaviour before the experience
              reached users publicly.
            </p>
            <p>
              Because I was not involved after release, this page intentionally
              avoids adoption, business-impact, or post-launch quality claims.
            </p>
          </CaseStudyProse>

          <CaseStudyFigure
            label="Testing evidence"
            image={testingMatrix}
            alt="Testing results matrix for the smart app showing task outcomes, observations, and recommendations for core app scenarios."
            caption="The testing synthesis converted observed task outcomes into follow-up decisions around navigation, comprehension, and control clarity before the work continued into implementation."
            className="max-w-4xl"
          />
        </CaseStudySection>

        <CaseStudyFigure
          image={productContextVisual}
          alt="Wide black-and-white car interior mockup with a phone at the right edge showing a dark map interface and nearby charging stations."
          sizes="100vw"
          fullBleed
          imageClassName="h-auto w-full"
        />

        <CaseStudyEndNav currentSlug="smart-connected-car-app" />
      </CaseStudyArticle>
    </CaseStudyShell>
  );
}
