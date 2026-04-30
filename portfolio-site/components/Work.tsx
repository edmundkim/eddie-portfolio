import Image from "next/image";
import type { CSSProperties } from "react";

import {
  featuredProjects,
  projectCta,
  type FeaturedProject,
} from "@/components/homepage/content";
import HomepageTextReveal from "@/components/homepage/HomepageTextReveal";
import WorkAssetReveal from "@/components/homepage/WorkAssetReveal";
import WorkSectionHoverArea from "@/components/homepage/WorkSectionHoverArea";

function WorkConfidentialityNote() {
  return (
    <HomepageTextReveal delay="360ms">
      <aside
        aria-label="Confidentiality note"
        className="mt-12 border-t border-[color:var(--color-line)] pt-6 sm:mt-16"
      >
        <p className="homepage-type-metadata max-w-2xl text-[color:var(--color-muted)] lg:ml-auto lg:max-w-xl">
          Some metrics and AI product details are generalized or withheld to
          respect confidentiality, but the case studies show the decision
          logic, validation methods, and product outcomes I can discuss in
          interviews.
        </p>
      </aside>
    </HomepageTextReveal>
  );
}

function WorkProject({
  project,
  index,
  isLast,
}: {
  project: FeaturedProject;
  index: number;
  isLast: boolean;
}) {
  const isFirstProject = index === 0;
  const projectHeadingId = `${project.id}-title`;
  const contentBandSpacing = isLast
    ? "pt-12 pb-24 sm:pt-[4.2rem] sm:pb-[7.2rem]"
    : "py-12 sm:py-[4.2rem]";
  const imageStyle = {
    "--homepage-work-image-background":
      project.image?.backgroundColor ?? "#FBFBFB",
    "--homepage-work-image-position":
      project.image?.objectPosition ?? "50% 50%",
  } as CSSProperties;

  return (
    <li
      id={isFirstProject ? undefined : project.id}
      className="scroll-mt-24 bg-[#FBFBFB]"
    >
      <article
        {...(isFirstProject
          ? { "aria-label": `${project.context}, ${project.displayTitle}` }
          : { "aria-labelledby": projectHeadingId })}
      >
        {isFirstProject ? null : (
          <header className="bg-[#FBFBFB] py-12 sm:py-16 lg:py-20">
            <div className="homepage-shell homepage-core homepage-core--hero">
              <HomepageTextReveal>
                <p className="homepage-type-selected-work-date text-[color:var(--color-muted)]">
                  {project.period}
                </p>
              </HomepageTextReveal>
              <HomepageTextReveal delay="80ms">
                <p className="homepage-type-project-title mt-4 max-w-4xl text-[color:var(--foreground)] sm:mt-5">
                  {project.context}
                </p>
              </HomepageTextReveal>
              <HomepageTextReveal delay="160ms">
                <h3
                  id={projectHeadingId}
                  className="homepage-type-project-title mt-1 max-w-4xl text-[color:var(--selected-work-project)] sm:mt-2"
                >
                  {project.displayTitle}
                </h3>
              </HomepageTextReveal>
            </div>
          </header>
        )}

        <WorkAssetReveal
          id={index === 0 ? "work-theme-trigger" : undefined}
          aria-hidden={project.image ? undefined : true}
          className="relative h-[calc(clamp(18rem,58vw,43.75rem)+100px)] w-full overflow-hidden bg-[color:var(--homepage-work-image-background)] md:h-[clamp(18rem,58vw,43.75rem)]"
          style={imageStyle}
          variant={project.id === "new-search" ? "fade" : "unveil"}
        >
          {project.image ? (
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              priority={index < 2}
              sizes="100vw"
              className="homepage-work-image object-cover"
            />
          ) : null}
        </WorkAssetReveal>

        <div className={`bg-[#F6F6F6] ${contentBandSpacing}`}>
          <div className="homepage-shell homepage-core homepage-core--hero">
            <WorkSectionHoverArea
              href={project.href}
              ariaLabel={project.ctaLabel}
              className="py-1 sm:py-1.5 lg:min-h-[26rem]"
            >
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_18rem] lg:gap-12">
                <div className="min-w-0">
                  <HomepageTextReveal delay="160ms">
                    <div className="max-w-3xl">
                      <p className="homepage-type-subhead font-medium text-[color:var(--foreground)]">
                        {project.summary}
                      </p>
                      <div className="mt-7">
                        <span className="homepage-type-badge inline-flex rounded-full border border-[color:var(--color-line)] px-3 py-1 text-[color:var(--color-muted)]">
                          {project.label}
                        </span>
                      </div>
                    </div>
                  </HomepageTextReveal>
                </div>

                <div className="flex flex-col justify-between gap-8">
                  <HomepageTextReveal delay="220ms">
                    <div className="max-w-xl space-y-4">
                      <p className="homepage-type-body text-[color:var(--color-muted)]">
                        <span className="font-medium text-[color:var(--foreground)]">
                          Surface:
                        </span>{" "}
                        {project.surface}
                      </p>
                      <p className="homepage-type-body text-[color:var(--color-muted)]">
                        {project.description}
                      </p>
                    </div>
                  </HomepageTextReveal>

                  <HomepageTextReveal delay="300ms">
                    <span className="homepage-type-cta inline-flex items-center gap-3 text-[color:var(--accent)] transition-colors duration-200">
                      <span>{projectCta}</span>
                      <span aria-hidden="true">↗</span>
                    </span>
                  </HomepageTextReveal>
                </div>
              </div>
            </WorkSectionHoverArea>

            {isLast ? <WorkConfidentialityNote /> : null}
          </div>
        </div>
      </article>
    </li>
  );
}

export default function Work() {
  return (
    <section
      aria-labelledby="work-heading"
      className="homepage-surface--light"
    >
      <h2 id="work-heading" className="sr-only">
        Selected Work
      </h2>

      <ol className="m-0 list-none p-0">
        {featuredProjects.map((project, index) => (
          <WorkProject
            key={project.id}
            project={project}
            index={index}
            isLast={index === featuredProjects.length - 1}
          />
        ))}
      </ol>
    </section>
  );
}
