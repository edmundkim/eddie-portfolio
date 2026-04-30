import Image from "next/image";

import ContactIconLinks from "@/components/homepage/ContactIconLinks";
import { featuredProjects } from "@/components/homepage/content";

export default function Hero() {
  const firstProject = featuredProjects[0];

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      aria-describedby="hero-summary"
      className="homepage-core homepage-core--hero relative flex-1 pt-[18px] sm:pt-[14px] md:pt-[30px]"
    >
      <div className="homepage-content-width relative flex min-h-[calc(128svh-4rem)] flex-col justify-between gap-24 pb-16 pt-0 sm:min-h-[calc(134svh-5rem)] sm:gap-28 sm:pb-20 md:pt-28 lg:min-h-[calc(140svh-6rem)] lg:gap-32 lg:pb-24 lg:pt-36">
        <header className="max-w-[82rem]">
          <ContactIconLinks
            className="mb-14 flex flex-col items-start gap-7 md:hidden"
            linkLayoutClassName="h-8 w-8 justify-start"
            linkClassName="homepage-hero-theme-text text-[color:var(--hero-name)] focus-visible:[outline-color:var(--hero-name)]"
          />

          <p className="homepage-hero-theme-text homepage-type-hero-name text-[color:var(--hero-name)]">
            Eddie Kim
          </p>

          <h1
            id="hero-heading"
            className="homepage-hero-theme-text homepage-type-display mt-10 max-w-[82rem] text-[color:var(--hero-heading)] sm:mt-12"
          >
            <span className="block">I design search,</span>{" "}
            <span className="block">discovery, and</span>{" "}
            <span className="block">AI product systems</span>{" "}
            <span className="block">for complex</span>{" "}
            <span className="block">marketplaces.</span>
          </h1>
        </header>

        <div className="flex max-w-[72rem] flex-col gap-12 sm:gap-14">
          <div>
            <p className="homepage-hero-theme-text homepage-type-display max-w-[21rem] text-[color:var(--hero-supporting)] sm:max-w-[70rem]">
              <span className="block">Principal Product</span>{" "}
              <span className="block">Designer and</span>{" "}
              <span className="block">AI Design Lead at</span>{" "}
              <span className="block">AutoScout24</span>
            </p>

            <p
              id="hero-summary"
              className="homepage-hero-theme-text homepage-type-subhead mt-12 max-w-[20rem] text-[color:var(--hero-summary)] sm:mt-14 sm:max-w-[42rem]"
            >
              I help teams turn messy product systems into clearer user
              decisions, measurable marketplace outcomes, and responsible AI
              patterns that can scale across web and app for a marketplace with
              over 30M monthly users.
            </p>
          </div>

          <div className="w-full max-w-[21.6rem]">
            <div className="overflow-hidden bg-[rgba(251,251,251,0.08)]">
              <Image
                src="/headshot.jpg"
                alt="Portrait of Eddie Kim"
                width={2854}
                height={3805}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {firstProject ? (
          <div id="work" className="scroll-mt-8 sm:scroll-mt-10">
            <div
              id={firstProject.id}
              className="mt-5 max-w-[82rem] scroll-mt-8 sm:mt-6 sm:scroll-mt-10 lg:mt-7"
            >
              <p className="homepage-type-selected-work-date text-[#101010]">
                {firstProject.period}
              </p>
              <p className="homepage-type-project-title mt-4 max-w-4xl text-[#101010] sm:mt-5">
                {firstProject.context}
              </p>
              <p className="homepage-type-project-title mt-1 max-w-4xl text-[color:var(--selected-work-project)] sm:mt-2">
                {firstProject.displayTitle}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
