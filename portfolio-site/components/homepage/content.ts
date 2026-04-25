import type { StaticImageData } from "next/image";

import declutterHeroMockupWide from "@/content/case-studies/declutter-LP/assets/declutter-hero-mockup-wide.png";
import newSearchHeroMockupWide from "@/content/case-studies/new-search/assets/new-search-hero-mockup-wide.png";
import daimlerSubscriptionMockup from "@/content/legacy-projects/daimler-subscription/assets/Clay_Mockup___7_.png";

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
  summary: string;
  description: string;
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
    summary:
      "Simplified a high-leverage browse surface across web and app so buyers could make faster, clearer decisions.",
    description:
      "Simplified the list page card across web and app to improve buyer decision-making on a high-leverage browse surface, with the first mobile-web test increasing dealer leads by 12%.",
    image: {
      src: declutterHeroMockupWide,
      alt: "Handheld AutoScout24 mobile web mockup previewing the Declutter case study on the homepage.",
      objectPosition: "58% 50%",
    },
  },
  {
    id: "new-search",
    label: "Cross-platform reset",
    title: "New Search",
    navTitle: "New Search",
    href: "/work/new-search",
    context: "AutoScout24",
    summary:
      "Reset search and filters across app and web after a weaker earlier direction had started to lose confidence.",
    description:
      "Reset search and filters across app and web after a weaker earlier direction, with the clearest validation on iOS, narrower Android evidence, and a later web baseline launch.",
    image: {
      src: newSearchHeroMockupWide,
      alt: "AutoScout24 search-filter mockup previewing the New Search case study on the homepage.",
      objectPosition: "60% 48%",
    },
  },
  {
    id: "strategic-ai-design-leadership",
    label: "AI leadership",
    title: "Strategic AI Design Leadership",
    navTitle: "Strategic AI",
    href: "/work/strategic-ai-design-leadership",
    context: "AutoScout24",
    summary:
      "Built a reusable standard for how AI should be signalled, explained, and controlled inside product experiences.",
    description:
      "Owned the Visual AI Framework and internal AI guidance while shaping early product concepts, helping teams make AI interactions more legible, safer, and easier to scale.",
  },
  {
    id: "daimler-subscription-concept",
    label: "Concept case study",
    title: "Daimler Vehicle Subscription Concept",
    navTitle: "Daimler Concept",
    href: "/work/daimler-subscription-concept",
    context: "Daimler Mercedes-Benz · Deloitte Digital",
    summary:
      "A two-month concept engagement to make a new vehicle subscription model easier to understand, configure, and manage across the full web journey.",
    description:
      "Led UX definition for a greenfield subscription concept spanning acquisition and lifecycle management across desktop and mobile web, turning an unfamiliar service model into a clearer, testable end-to-end journey.",
    image: {
      src: daimlerSubscriptionMockup,
      alt: "Daimler vehicle subscription concept mockup previewing the homepage case study.",
    },
  },
];

export const projectCta = "Open case study";

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
