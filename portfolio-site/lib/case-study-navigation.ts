export type CaseStudySlug =
  | "declutter-list-page"
  | "new-search"
  | "strategic-ai-design-leadership"
  | "daimler-subscription-concept"
  | "smart-connected-car-app";

export type CaseStudyNavigationItem = {
  slug: CaseStudySlug;
  href: `/work/${string}`;
  title: string;
  context: string;
};

const caseStudyNavigationOrder: CaseStudyNavigationItem[] = [
  {
    slug: "new-search",
    href: "/work/new-search",
    title: "New Search",
    context: "AutoScout24",
  },
  {
    slug: "declutter-list-page",
    href: "/work/declutter-list-page",
    title: "Declutter the List Page",
    context: "AutoScout24",
  },
  {
    slug: "strategic-ai-design-leadership",
    href: "/work/strategic-ai-design-leadership",
    title: "Shaping How AI Should Work in Product",
    context: "AutoScout24",
  },
  {
    slug: "daimler-subscription-concept",
    href: "/work/daimler-subscription-concept",
    title: "Daimler Vehicle Subscription Concept",
    context: "Daimler Mercedes-Benz",
  },
  {
    slug: "smart-connected-car-app",
    href: "/work/smart-connected-car-app",
    title: "Connected Car App for smart",
    context: "smart · Deloitte Digital",
  },
];

export function getCaseStudyNavigation(slug: CaseStudySlug) {
  const currentIndex = caseStudyNavigationOrder.findIndex(
    (caseStudy) => caseStudy.slug === slug,
  );

  if (currentIndex === -1) {
    throw new Error(`Unknown case study slug: ${slug}`);
  }

  return {
    current: caseStudyNavigationOrder[currentIndex],
    previous:
      currentIndex > 0 ? caseStudyNavigationOrder[currentIndex - 1] : null,
    next:
      currentIndex < caseStudyNavigationOrder.length - 1
        ? caseStudyNavigationOrder[currentIndex + 1]
        : null,
  };
}
