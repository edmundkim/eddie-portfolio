import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { HTMLAttributes, ReactNode } from "react";

export type CaseStudyFact = {
  label: string;
  value: string;
};

export type CaseStudyFigureGridItem = {
  label: string;
  image: StaticImageData;
  alt: string;
  caption?: string;
  contentClassName?: string;
  imageClassName?: string;
  priority?: boolean;
  preserveWidthOnSmallScreens?: boolean;
};

function joinClassNames(
  ...classNames: Array<string | false | null | undefined>
) {
  return classNames.filter(Boolean).join(" ");
}

export function CaseStudyShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main
      className={joinClassNames(
        "homepage-surface--light min-h-screen overflow-x-clip bg-[color:var(--background)] text-[color:var(--foreground)]",
        className,
      )}
    >
      {children}
    </main>
  );
}

export function CaseStudyHeader({
  backLabel = "Back to work",
}: {
  backLabel?: string;
}) {
  return (
    <header className="border-b border-[color:var(--color-line)]">
      <div className="homepage-shell homepage-core homepage-core--hero flex items-center justify-between gap-6 py-5 sm:py-6">
        <Link
          href="/"
          className="homepage-type-utility text-[color:var(--foreground)] hover:text-[color:var(--accent)] focus-visible:text-[color:var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:[outline-color:var(--accent)]"
        >
          Eddie Kim
        </Link>

        <Link
          href="/#work"
          className="homepage-type-cta text-[color:var(--color-muted)] hover:text-[color:var(--accent)] focus-visible:text-[color:var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:[outline-color:var(--accent)]"
        >
          {backLabel}
        </Link>
      </div>
    </header>
  );
}

export function CaseStudyArticle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={joinClassNames(
        "homepage-shell homepage-core homepage-core--hero py-14 sm:py-20 lg:py-24",
        className,
      )}
    >
      {children}
    </article>
  );
}

export function CaseStudyHero({
  eyebrow,
  title,
  lede,
  secondaryLede,
  facts,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: ReactNode;
  secondaryLede?: ReactNode;
  facts?: readonly CaseStudyFact[];
  children?: ReactNode;
}) {
  return (
    <section className="pb-16 sm:pb-20 lg:pb-24">
      <p className="homepage-type-eyebrow mb-6 text-[color:var(--color-muted)]">
        {eyebrow}
      </p>

      <div className="max-w-[78rem] space-y-7">
        <h1 className="homepage-type-selected-work-title max-w-[72rem] text-[color:var(--foreground)]">
          {title}
        </h1>

        <p className="homepage-type-subhead max-w-[50rem] text-[color:var(--foreground)]">
          {lede}
        </p>

        {secondaryLede ? (
          <p className="homepage-type-body homepage-type-body--responsive max-w-[46rem] text-[color:var(--color-muted)]">
            {secondaryLede}
          </p>
        ) : null}
      </div>

      {facts ? <CaseStudyFactGrid facts={facts} /> : null}
      {children}
    </section>
  );
}

export function CaseStudyFactGrid({
  facts,
  className,
}: {
  facts: readonly CaseStudyFact[];
  className?: string;
}) {
  return (
    <dl
      className={joinClassNames(
        "mt-12 grid border-t border-[color:var(--color-line)] sm:grid-cols-2 xl:grid-cols-4",
        className,
      )}
    >
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="border-b border-[color:var(--color-line)] py-5 sm:py-6 sm:pr-8"
        >
          <dt className="homepage-type-eyebrow text-[color:var(--color-muted)]">
            {fact.label}
          </dt>
          <dd className="homepage-type-body mt-3 text-[color:var(--foreground)]">
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function CaseStudySection({
  eyebrow,
  title,
  intro,
  children,
  className,
  contentClassName,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <section
      className={joinClassNames(
        "border-t border-[color:var(--color-line)] py-16 sm:py-20 lg:py-24",
        className,
      )}
    >
      <div className="grid gap-8 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-12">
        <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
          {eyebrow}
        </p>

        <div className={joinClassNames("space-y-8", contentClassName)}>
          <div className="space-y-4">
            <h2 className="homepage-type-section-heading max-w-[48rem] text-[color:var(--foreground)]">
              {title}
            </h2>
            {intro ? (
              <p className="homepage-type-subhead max-w-[50rem] text-[color:var(--color-muted)]">
                {intro}
              </p>
            ) : null}
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}

export function CaseStudyCard({
  eyebrow,
  title,
  children,
  variant = "outline",
  className,
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  variant?: "outline" | "soft" | "dark";
  className?: string;
}) {
  const variantClassName =
    variant === "dark"
      ? "homepage-zone--dark border-transparent bg-[#101010] text-[color:var(--foreground)]"
      : variant === "soft"
        ? "border-[color:var(--color-line)] bg-[color:var(--color-panel)] text-[color:var(--foreground)]"
        : "border-[color:var(--color-line)] bg-transparent text-[color:var(--foreground)]";

  return (
    <div
      className={joinClassNames(
        "h-full rounded-lg border p-6 sm:p-7",
        variantClassName,
        className,
      )}
    >
      {eyebrow ? (
        <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h3
          className={joinClassNames(
            "homepage-type-item-title text-[color:var(--foreground)]",
            eyebrow ? "mt-5" : "",
          )}
        >
          {title}
        </h3>
      ) : null}
      <div className={title || eyebrow ? "mt-5" : ""}>{children}</div>
    </div>
  );
}

export function CaseStudyFigure({
  label,
  image,
  alt = "",
  caption,
  children,
  fullBleed = false,
  framed = true,
  preserveWidthOnSmallScreens = false,
  sizes = "(min-width: 1280px) 60rem, (min-width: 1024px) calc(100vw - 24rem), 100vw",
  priority,
  className,
  mediaClassName,
  imageClassName,
}: {
  label?: string;
  image?: StaticImageData;
  alt?: string;
  caption?: ReactNode;
  children?: ReactNode;
  fullBleed?: boolean;
  framed?: boolean;
  preserveWidthOnSmallScreens?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
  mediaClassName?: string;
  imageClassName?: string;
}) {
  const media = children ?? (
    image ? (
      <Image
        src={image}
        alt={alt}
        sizes={sizes}
        priority={priority}
        className={joinClassNames("h-auto w-full", imageClassName)}
      />
    ) : null
  );

  if (fullBleed) {
    return (
      <figure
        className={joinClassNames(
          "relative left-1/2 w-screen max-w-none -translate-x-1/2 overflow-hidden",
          className,
        )}
      >
        <div className={mediaClassName}>{media}</div>
        {caption ? (
          <figcaption className="homepage-shell homepage-core homepage-core--hero homepage-type-metadata mt-4 text-[color:var(--color-muted)]">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className={joinClassNames("space-y-3", className)}>
      {label ? (
        <p className="homepage-type-eyebrow text-[color:var(--color-muted)]">
          {label}
        </p>
      ) : null}

      {preserveWidthOnSmallScreens ? (
        <div
          className={joinClassNames(
            "overflow-x-auto",
            framed ? "bg-[color:var(--color-panel)]" : "",
            mediaClassName,
          )}
        >
          <div className={joinClassNames("min-w-[52rem]", framed ? "p-3 sm:p-4" : "")}>
            {media}
          </div>
        </div>
      ) : (
        <div
          className={joinClassNames(
            framed ? "bg-[color:var(--color-panel)] p-3 sm:p-4" : "",
            mediaClassName,
          )}
        >
          {media}
        </div>
      )}

      {caption ? (
        <figcaption className="homepage-type-metadata max-w-3xl text-[color:var(--color-muted)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function CaseStudyFigureGrid({
  items,
  className,
}: {
  items: readonly CaseStudyFigureGridItem[];
  className?: string;
}) {
  return (
    <div
      className={joinClassNames(
        items.length === 3
          ? "grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          : "grid gap-5 md:grid-cols-2",
        className,
      )}
    >
      {items.map((item) => (
        <CaseStudyFigure
          key={`${item.label}-${item.alt}`}
          label={item.label}
          image={item.image}
          alt={item.alt}
          caption={item.caption}
          mediaClassName={item.contentClassName}
          imageClassName={item.imageClassName}
          priority={item.priority}
          preserveWidthOnSmallScreens={item.preserveWidthOnSmallScreens}
        />
      ))}
    </div>
  );
}

export function CaseStudyProse({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={joinClassNames(
        "homepage-type-body homepage-type-body--responsive max-w-[50rem] space-y-5 text-[color:var(--color-muted)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
