import {
  featuredProjects,
  formatFeaturedProjectIndex,
  type HomepageNavMode,
} from "@/components/homepage/content";
import ContactIconLinks from "@/components/homepage/ContactIconLinks";

type NavbarProps = {
  mode?: HomepageNavMode;
};

type NavModeProps = {
  active: boolean;
};

function DefaultNavMode({ active }: NavModeProps) {
  const stateClass = active
    ? "[transform:translateY(0)] opacity-75 transition-[color,opacity,transform] delay-[700ms] duration-700 ease-out"
    : "pointer-events-none opacity-0 transition-[opacity,transform] duration-[450ms] ease-in [transform:translateY(1.25rem)]";

  return (
    <a
      href="#work"
      aria-label="Jump to selected work"
      aria-hidden={!active}
      tabIndex={active ? 0 : -1}
      className={`homepage-type-functional homepage-work-hint absolute bottom-0 left-0 hidden flex-col items-start gap-4 text-[color:var(--homepage-nav-hint)] hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:[outline-color:var(--homepage-nav-hint)] motion-reduce:transition-none motion-reduce:[transform:translateY(0)] lg:flex ${stateClass}`}
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
    ? "[transform:translateX(0)] opacity-100 transition-[opacity,transform] delay-[450ms] duration-900 ease-out"
    : "pointer-events-none opacity-0 transition-[opacity,transform] duration-700 ease-in [transform:translateX(-3.5rem)]";

  return (
    <section
      aria-label="Selected work"
      aria-hidden={!active}
      className={`homepage-type-functional absolute bottom-0 left-0 hidden motion-reduce:transition-none motion-reduce:[transform:translateX(0)] lg:block ${stateClass}`}
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
      className="pointer-events-auto sticky top-4 z-10 hidden h-[calc(100svh-2rem)] w-12 shrink-0 flex-col self-start overflow-visible py-2 sm:top-6 sm:h-[calc(100svh-3rem)] sm:w-14 sm:py-4 md:flex"
    >
      <ContactIconLinks linkClassName="text-[color:var(--homepage-nav-utility)] focus-visible:[outline-color:var(--homepage-nav-utility)]" />

      <div className="relative mt-auto min-h-[7.5rem] w-0 overflow-visible sm:min-h-[8rem] lg:min-h-[13.5rem]">
        <DefaultNavMode active={!isWorkMode} />
        <WorkNavMode active={isWorkMode} />
      </div>
    </nav>
  );
}
