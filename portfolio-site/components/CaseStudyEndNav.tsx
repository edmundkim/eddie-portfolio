import Link from "next/link";

import {
  getCaseStudyNavigation,
  type CaseStudySlug,
} from "@/lib/case-study-navigation";

type NavigationTileLink = {
  href: string;
  eyebrow: string;
  title: string;
  context: string;
  ariaLabel: string;
  direction: "back" | "forward";
  variant: "primary" | "secondary";
};

function NavigationTile({
  href,
  eyebrow,
  title,
  context,
  ariaLabel,
  direction,
  variant,
}: NavigationTileLink) {
  const isPrimary = variant === "primary";
  const arrowPositionClass = direction === "back" ? "self-start" : "self-end";

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`group flex min-h-56 flex-col justify-between rounded-lg p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:[outline-color:var(--accent)] sm:p-8 ${
        isPrimary
          ? "homepage-zone--dark bg-[#101010] text-[color:var(--foreground)]"
          : "border border-[color:var(--color-line)] bg-transparent text-[color:var(--foreground)] hover:border-[color:var(--accent)]"
      }`}
    >
      <span
        className="homepage-type-eyebrow text-[color:var(--color-muted)]"
      >
        {eyebrow}
      </span>

      <span className="mt-12 block">
        <span className="homepage-type-section-heading homepage-type-section-heading--compact block text-[color:var(--foreground)]">
          {title}
        </span>
        <span className="homepage-type-body mt-3 block text-[color:var(--color-muted)]">
          {context}
        </span>
      </span>

      <span
        aria-hidden="true"
        className={`homepage-type-utility mt-8 inline-flex h-10 w-10 items-center justify-center rounded-full ${
          isPrimary
            ? "bg-[color:var(--foreground)] text-[#101010]"
            : "bg-[color:var(--color-panel)] text-[color:var(--foreground)]"
        } ${arrowPositionClass}`}
      >
        {direction === "back" ? <>&larr;</> : <>&rarr;</>}
      </span>
    </Link>
  );
}

export default function CaseStudyEndNav({
  currentSlug,
}: {
  currentSlug: CaseStudySlug;
}) {
  const { previous, next } = getCaseStudyNavigation(currentSlug);
  const backToWorkHref = "/#work";

  const backwardLink: NavigationTileLink = previous
    ? {
        href: previous.href,
        eyebrow: "Previous case study",
        title: previous.title,
        context: previous.context,
        ariaLabel: `Previous case study: ${previous.title}`,
        direction: "back",
        variant: "secondary",
      }
    : {
        href: backToWorkHref,
        eyebrow: "Back to work",
        title: "Selected Work",
        context: "Return to the homepage case studies",
        ariaLabel: "Back to selected work on the homepage",
        direction: "back",
        variant: "secondary",
      };

  const forwardLink: NavigationTileLink = next
    ? {
        href: next.href,
        eyebrow: "Next case study",
        title: next.title,
        context: next.context,
        ariaLabel: `Next case study: ${next.title}`,
        direction: "forward",
        variant: "primary",
      }
    : {
        href: backToWorkHref,
        eyebrow: "Back to work",
        title: "Selected Work",
        context: "Return to the homepage case studies",
        ariaLabel: "Back to selected work on the homepage",
        direction: "forward",
        variant: "primary",
      };

  return (
    <nav
      aria-label="Case study navigation"
      className="mt-16 border-t border-[color:var(--color-line)] pt-16 sm:mt-20 sm:pt-20"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <NavigationTile {...backwardLink} />
        <NavigationTile {...forwardLink} />
      </div>
    </nav>
  );
}
