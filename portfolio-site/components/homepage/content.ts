import type { StaticImageData } from "next/image";

import declutterHeroMockupWide from "@/content/case-studies/declutter-LP/assets/declutter-hero-mockup-wide.png";
import newSearchHeroMockupWide from "@/content/case-studies/new-search/assets/new-search-hero-mockup-wide.png";
import daimlerSubscriptionMockup from "@/content/legacy-projects/daimler-subscription/assets/Clay_Mockup___7_.png";
import smartConnectedCarMockupWide from "@/content/legacy-projects/smart-connected-car-app/assets/smart-connected-car-mockup-wide.png";

export type FeaturedProjectImage = {
  src: StaticImageData;
  alt: string;
  objectPosition?: string;
};

export type FeaturedProject = {
  id: string;
  label: string;
  title: string;
  navTitle: string;
  href: string;
  context: string;
  surface: string;
  summary: string;
  description: string;
  ctaLabel: string;
  image?: FeaturedProjectImage;
};

export type SpeakingTopic = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  imageScale?: number;
};

export type ContactLink = {
  href: string;
  label: string;
  external?: boolean;
};

export type HomepageNavMode = "default" | "work";

export function formatFeaturedProjectIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "declutter-list-page",
    label: "Shipped product",
    title: "Declutter the List Page",
    navTitle: "Declutter the List Page",
    href: "/work/declutter-list-page",
    context: "AutoScout24",
    surface: "Desktop web, mobile web, iOS, and Android",
    ctaLabel: "Open Declutter the List Page project",
    summary:
      "Reworked the vehicle list card so buyers could compare key vehicle signals more clearly.",
    description:
      "Clarified hierarchy, reduced visual noise, and helped align product tradeoffs around what belongs on the browsing surface.",
    image: {
      src: declutterHeroMockupWide,
      alt: "Handheld AutoScout24 mobile web mockup previewing the Declutter case study on the homepage.",
      objectPosition: "58% 50%",
    },
  },
  {
    id: "new-search",
    label: "Search redesign",
    title: "New Search",
    navTitle: "New Search",
    href: "/work/new-search",
    context: "AutoScout24",
    surface: "iOS, Android, desktop web, and mobile web",
    ctaLabel: "Open New Search project",
    summary:
      "Redesigned search and filters to create a clearer product baseline.",
    description:
      "Restructured filter navigation, applied states, and make-model selection so buyers could refine searches with less ambiguity.",
    image: {
      src: newSearchHeroMockupWide,
      alt: "AutoScout24 search-filter mockup previewing the New Search case study on the homepage.",
      objectPosition: "60% 48%",
    },
  },
  {
    id: "strategic-ai-design-leadership",
    label: "AI design standards",
    title: "Strategic AI Design Leadership",
    navTitle: "Strategic AI",
    href: "/work/strategic-ai-design-leadership",
    context: "AutoScout24",
    surface: "AI product standards, early concepts, and internal guidance",
    ctaLabel: "Open Strategic AI Design Leadership project",
    summary:
      "Built reusable standards for how AI should be signalled, explained, reviewed, and controlled in product experiences.",
    description:
      "Owned the Visual AI Framework and internal AI guidance while shaping early product concepts before ad hoc patterns spread.",
  },
  {
    id: "daimler-subscription-concept",
    label: "Concept case study",
    title: "Daimler Vehicle Subscription Concept",
    navTitle: "Daimler Concept",
    href: "/work/daimler-subscription-concept",
    context: "Daimler Mercedes-Benz · Deloitte Digital",
    surface: "Desktop and mobile web",
    ctaLabel: "Open Daimler Vehicle Subscription Concept project",
    summary:
      "Defined a subscription journey for an unfamiliar service model, from selection to account management.",
    description:
      "Led UX definition for acquisition, configuration, checkout, and lifecycle management.",
    image: {
      src: daimlerSubscriptionMockup,
      alt: "Daimler vehicle subscription concept mockup previewing the homepage case study.",
    },
  },
  {
    id: "smart-connected-car-app",
    label: "Connected mobility",
    title: "Smart Connected Car App",
    navTitle: "Smart App",
    href: "/work/smart-connected-car-app",
    context: "smart · Deloitte Digital",
    surface: "Native iOS and Android EV companion app",
    ctaLabel: "Open Smart Connected Car App project",
    summary:
      "Shaped the core EV companion experience for access, status, charging, climate, and remote controls.",
    description:
      "Structured the core app model through research synthesis, flows, prototypes, testing, and delivery support while requirements were still moving.",
    image: {
      src: smartConnectedCarMockupWide,
      alt: "Wide smart connected-car app mockup previewing the homepage case study.",
      objectPosition: "52% 50%",
    },
  },
];

export const projectCta = "Open project";

export const speakingTopics: SpeakingTopic[] = [
  {
    title: "UXDX Berlin panel at SAP",
    description:
      "Panel discussion on how AI is reshaping design practice, collaboration, and productivity, with perspectives from senior leaders across design, consulting, and customer engagement.",
    imageSrc: "/speaking/uxdx-berlin-sap-panel-close.jpg",
    imageAlt:
      "Eddie Kim speaking on a UXDX Berlin panel hosted at SAP about AI, collaboration, and creativity.",
  },
  {
    title: "Beyond Human-Centred Design",
    description:
      "Workshop for senior designers on looking beyond narrow user-centred optimisation to consider longer-term outcomes, system effects, and the wider impact of design decisions.",
    imageSrc: "/speaking/beyond-human-centred-design-workshop.jpg",
    imageAlt:
      "Workshop participants discussing and mapping ideas during the Beyond Human-Centred Design session.",
  },
  {
    title: "University panels on AI and the future of work",
    description:
      "Panel talks for students and early-career professionals on how AI is changing product design, technology, and the future of work, alongside speakers from design, data, and engineering.",
    imageSrc: "/speaking/ue-innovation-hub-panel-close.jpg",
    imageAlt:
      "Eddie Kim speaking on a university innovation hub panel about AI and the future of work.",
    imagePosition: "center 40%",
  },
  {
    title: "Ahead of the Curve: Embracing AI in Your Design Practice",
    description:
      "Talk on how design practitioners and teams can adopt AI more thoughtfully: where it creates leverage, where caution is needed, and how to build practical workflows without losing judgment.",
    imageSrc: "/speaking/techspace-ahead-of-the-curve-close.jpg",
    imageAlt:
      "Eddie Kim presenting a talk on embracing AI in design practice at Techspace.",
    imageScale: 1.2,
  },
];

const emailHref = "mailto:edmundhkim@gmail.com";
const linkedInHref = "https://www.linkedin.com/in/edmundhkim/";

export const contactLinks: ContactLink[] = [
  {
    href: emailHref,
    label: "Email Eddie",
  },
  {
    href: linkedInHref,
    label: "LinkedIn",
    external: true,
  },
];
