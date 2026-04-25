import Image from "next/image";
import Link from "next/link";

import {
  featuredProjects,
  formatFeaturedProjectIndex,
  projectCta,
  type FeaturedProject,
} from "@/components/homepage/content";

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

  return (
    <li
      id={project.id}
      className={`scroll-mt-24 py-12 first:pt-0 sm:py-[4.2rem] ${
        isLast ? "pb-24 sm:pb-[7.2rem]" : ""
      }`}
    >
      <div
        aria-hidden={project.image ? undefined : true}
        className="relative mb-12 h-[clamp(18rem,58vw,43.75rem)] w-full overflow-hidden bg-[color:var(--color-panel)] sm:mb-[3.6rem]"
      >
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            priority={index < 2}
            sizes="100vw"
            className={`object-cover ${index === 0 ? "translate-y-[5%] scale-120" : ""}`}
            style={{ objectPosition: project.image.objectPosition }}
          />
        ) : null}
      </div>

      <div className="homepage-shell homepage-core homepage-core--hero">
        <article
          aria-labelledby={projectHeadingId}
          className="py-1 sm:py-1.5 lg:min-h-[26rem]"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_18rem] lg:gap-12">
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <p className="homepage-type-metadata text-[color:var(--color-muted)]">
                  {project.context}
                </p>
                <span className="homepage-type-badge inline-flex rounded-full border border-[color:var(--color-line)] px-3 py-1 text-[color:var(--color-muted)]">
                  {project.label}
                </span>
              </div>

              <p className="homepage-type-eyebrow mt-10 text-[color:var(--secondary-text)]">
                {formatFeaturedProjectIndex(index)}
              </p>
              <h3
                id={projectHeadingId}
                className="homepage-type-project-title mt-4 max-w-3xl"
              >
                {project.title}
              </h3>
            </div>

            <div className="flex flex-col justify-between gap-8 lg:pt-16">
              <div>
                <p className="homepage-type-subhead text-[color:var(--foreground)]">
                  {project.summary}
                </p>
                <p className="homepage-type-body mt-6 text-[color:var(--color-muted)]">
                  {project.description}
                </p>
              </div>

              <div>
                <Link
                  href={project.href}
                  className="homepage-type-cta inline-flex items-center gap-3 text-[color:var(--accent)] transition-colors duration-200 hover:text-[color:var(--foreground)] focus-visible:text-[color:var(--foreground)] focus-visible:outline-none"
                >
                  <span>{projectCta}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
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
        Selected works
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
