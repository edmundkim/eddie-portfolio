import Image from "next/image";
import type { CSSProperties } from "react";

import {
  featuredProjects,
  formatFeaturedProjectIndex,
  projectCta,
  type FeaturedProject,
} from "@/components/homepage/content";
import HomepageTextReveal from "@/components/homepage/HomepageTextReveal";
import WorkAssetReveal from "@/components/homepage/WorkAssetReveal";
import WorkSectionHoverArea from "@/components/homepage/WorkSectionHoverArea";

function WorkProject({
  project,
  index,
  isLast,
}: {
  project: FeaturedProject;
  index: number;
  isLast: boolean;
}) {
  const projectHeadingId = `${project.id}-title`;
  const imageStyle = {
    "--homepage-work-image-position":
      project.image?.objectPosition ?? "50% 50%",
  } as CSSProperties;

  return (
    <li
      id={project.id}
      className={`scroll-mt-24 py-12 first:pt-0 sm:py-[4.2rem] ${
        isLast ? "pb-24 sm:pb-[7.2rem]" : ""
      }`}
    >
      <WorkAssetReveal
        aria-hidden={project.image ? undefined : true}
        className="relative mb-12 h-[calc(clamp(18rem,58vw,43.75rem)+100px)] w-full overflow-hidden bg-[color:var(--background)] sm:mb-[3.6rem] md:h-[clamp(18rem,58vw,43.75rem)]"
      >
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            priority={index < 2}
            sizes="100vw"
            className="homepage-work-image object-cover"
            style={imageStyle}
          />
        ) : null}
      </WorkAssetReveal>

      <div className="homepage-shell homepage-core homepage-core--hero">
        <WorkSectionHoverArea
          href={project.href}
          ariaLabel={project.ctaLabel}
          className="py-1 sm:py-1.5 lg:min-h-[26rem]"
        >
          <article
            aria-labelledby={projectHeadingId}
            className="h-full"
          >
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_18rem] lg:gap-12">
              <div className="min-w-0">
                <HomepageTextReveal>
                  <p className="homepage-type-eyebrow text-[color:var(--secondary-text)]">
                    {formatFeaturedProjectIndex(index)}
                  </p>
                </HomepageTextReveal>
                <HomepageTextReveal delay="80ms">
                  <h3
                    id={projectHeadingId}
                    className="homepage-type-project-title mt-4 max-w-3xl"
                  >
                    {project.title}
                  </h3>
                </HomepageTextReveal>
                <HomepageTextReveal delay="160ms">
                  <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <p className="homepage-type-metadata text-[color:var(--color-muted)]">
                      {project.context}
                    </p>
                    <span className="homepage-type-badge inline-flex rounded-full border border-[color:var(--color-line)] px-3 py-1 text-[color:var(--color-muted)]">
                      {project.label}
                    </span>
                  </div>
                </HomepageTextReveal>
              </div>

              <div className="flex flex-col justify-between gap-8 lg:pt-9">
                <HomepageTextReveal delay="220ms">
                  <div className="max-w-xl space-y-4">
                    <p className="homepage-type-body font-medium text-[color:var(--foreground)]">
                      {project.summary}
                    </p>
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
          </article>
        </WorkSectionHoverArea>
      </div>
    </li>
  );
}

export default function Work() {
  return (
    <section
      id="work"
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
