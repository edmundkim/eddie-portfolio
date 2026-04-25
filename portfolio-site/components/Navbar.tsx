import {
  contactLinks,
  featuredProjects,
  formatFeaturedProjectIndex,
  type HomepageNavMode,
} from "@/components/homepage/content";

const emailLink =
  contactLinks.find((link) => link.label === "Email Eddie")?.href ??
  "mailto:edmundhkim@gmail.com";
const linkedInLink = contactLinks.find((link) => link.label === "LinkedIn");
const utilityIconClass =
  "flex h-8 w-8 items-center justify-center text-[color:var(--homepage-nav-utility)] transition-[color,opacity] duration-200 hover:opacity-65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:[outline-color:var(--homepage-nav-utility)] motion-reduce:transition-none";

type NavbarProps = {
  mode?: HomepageNavMode;
};

type NavModeProps = {
  active: boolean;
};

function DefaultNavMode({ active }: NavModeProps) {
  const stateClass = active
    ? "translate-y-0 opacity-75 transition-[color,opacity,transform] duration-300"
    : "pointer-events-none translate-y-3 opacity-0 transition-none";

  return (
    <a
      href="#work"
      aria-label="Jump to selected work"
      aria-hidden={!active}
      tabIndex={active ? 0 : -1}
      className={`homepage-type-functional homepage-work-hint absolute bottom-0 left-0 hidden flex-col items-start gap-4 text-[color:var(--homepage-nav-hint)] hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:[outline-color:var(--homepage-nav-hint)] motion-reduce:translate-y-0 motion-reduce:transition-none lg:flex ${stateClass}`}
    >
      <span className="text-[11px] font-medium uppercase tracking-[0.28em] opacity-72">
        Work
      </span>
      <span
        aria-hidden="true"
        className="homepage-work-hint__line relative h-[4.5rem] w-px overflow-hidden bg-[color:var(--homepage-nav-hint-line)] transition-colors duration-300 motion-reduce:transition-none"
      />
    </a>
  );
}

function WorkNavMode({ active }: NavModeProps) {
  const stateClass = active
    ? "translate-y-0 opacity-100 transition-transform duration-500 ease-out"
    : "pointer-events-none translate-y-8 opacity-0 transition-none";

  return (
    <section
      aria-label="Selected work"
      aria-hidden={!active}
      className={`homepage-type-functional absolute bottom-0 left-0 hidden motion-reduce:translate-y-0 motion-reduce:transition-none lg:block ${stateClass}`}
    >
      <ol className="m-0 hidden w-[8.5rem] list-none space-y-3 p-0 lg:block xl:hidden">
        {featuredProjects.map((project, index) => {
          const isActive = active;

          return (
            <li key={project.id}>
              <a
                href={`#${project.id}`}
                tabIndex={isActive ? 0 : -1}
                className="grid grid-cols-[1.2rem_minmax(0,1fr)] items-baseline gap-2 text-[#000BFF] transition-opacity duration-200 hover:opacity-70 focus-visible:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#000BFF] motion-reduce:transition-none"
              >
                <span className="text-[10px] font-medium uppercase leading-none tracking-[0.2em] opacity-60">
                  {formatFeaturedProjectIndex(index)}
                </span>
                <span className="text-[0.86rem] leading-[1.15] tracking-[-0.01em]">
                  {project.navTitle}
                </span>
              </a>
            </li>
          );
        })}
      </ol>

      <ol className="m-0 hidden w-[13.5rem] list-none space-y-4 p-0 xl:block">
        {featuredProjects.map((project, index) => {
          const isActive = active;

          return (
            <li key={project.id}>
              <a
                href={`#${project.id}`}
                tabIndex={isActive ? 0 : -1}
                className="grid grid-cols-[1.35rem_minmax(0,1fr)] items-baseline gap-3 text-[#000BFF] transition-opacity duration-200 hover:opacity-70 focus-visible:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#000BFF] motion-reduce:transition-none"
              >
                <span className="text-[11px] font-medium uppercase leading-none tracking-[0.24em] opacity-60">
                  {formatFeaturedProjectIndex(index)}
                </span>
                <span className="text-[1.05rem] leading-[1.25] tracking-[-0.02em]">
                  {project.navTitle}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default function Navbar({ mode = "default" }: NavbarProps) {
  const isWorkMode = mode === "work";

  return (
    <nav
      aria-label="Homepage utility navigation"
      data-nav-mode={mode}
      className="pointer-events-auto sticky top-4 z-10 flex h-[calc(100svh-2rem)] w-12 shrink-0 flex-col self-start overflow-visible py-2 sm:top-6 sm:h-[calc(100svh-3rem)] sm:w-14 sm:py-4"
    >
      <div className="flex flex-col items-start gap-4">
        <a
          href={emailLink}
          aria-label="Get in touch by email"
          className={utilityIconClass}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-[1.32rem] w-[1.32rem]"
            fill="currentColor"
          >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.93 5.49a3 3 0 0 1-3.14 0L1.5 8.67Z" />
            <path d="M22.5 6.91v-.16a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.16l9.71 5.97a1.5 1.5 0 0 0 1.58 0l9.71-5.97Z" />
          </svg>
        </a>

        {linkedInLink ? (
          <a
            href={linkedInLink.href}
            aria-label="Visit Eddie on LinkedIn"
            className={utilityIconClass}
            target={linkedInLink.external ? "_blank" : undefined}
            rel={linkedInLink.external ? "noreferrer" : undefined}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-[1.21rem] w-[1.21rem]"
              fill="currentColor"
            >
              <path d="M7.12 20.45H3.56V9h3.56v11.45ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28Z" />
            </svg>
          </a>
        ) : null}
      </div>

      <div className="relative mt-auto min-h-[7.5rem] w-0 overflow-visible sm:min-h-[8rem] lg:min-h-[13.5rem]">
        <DefaultNavMode active={!isWorkMode} />
        <WorkNavMode active={isWorkMode} />
      </div>
    </nav>
  );
}
