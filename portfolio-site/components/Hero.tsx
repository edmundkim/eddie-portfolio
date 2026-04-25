import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      aria-describedby="hero-summary"
      className="homepage-core homepage-core--hero relative flex-1"
    >
      <div className="homepage-content-width relative flex min-h-[calc(148svh-4rem)] flex-col justify-between gap-24 pb-[900px] pt-24 sm:min-h-[calc(154svh-5rem)] sm:gap-28 sm:pt-28 lg:min-h-[calc(166svh-6rem)] lg:gap-32 lg:pt-36">
        <header className="max-w-[82rem]">
          <p className="homepage-hero-theme-text homepage-type-hero-name text-[color:var(--hero-name)]">
            Eddie Kim
          </p>

          <h1
            id="hero-heading"
            className="homepage-hero-theme-text homepage-type-display mt-10 max-w-[82rem] text-[color:var(--hero-heading)] sm:mt-12"
          >
            I lead product design for search, discovery, and AI at marketplace
            scale.
          </h1>
        </header>

        <div className="flex max-w-[72rem] flex-col gap-12 sm:gap-14">
          <div>
            <p className="homepage-hero-theme-text homepage-type-display max-w-[70rem] text-[color:var(--hero-supporting)]">
              Principal Product Designer and AI Design Lead at AutoScout24
            </p>

            <p
              id="hero-summary"
              className="homepage-hero-theme-text homepage-type-subhead mt-12 max-w-[42rem] text-[color:var(--hero-summary)] sm:mt-14"
            >
              At AutoScout24, I shape buyer experience across web and app,
              improving how over 30M monthly users search, compare, and
              enquire, while helping teams build clearer, more effective
              product experiences.
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

        <div className="pointer-events-none absolute inset-x-0 bottom-9">
          <div className="max-w-[82rem]">
            <p className="homepage-type-work-marker flex flex-wrap items-baseline gap-x-3 gap-y-2 text-[#101010]">
              <span>Selected works</span>
              <span
                aria-hidden="true"
                className="homepage-type-work-marker-icon"
              >
                ↓
              </span>
            </p>

            <div className="mt-14">
              <p className="homepage-type-selected-work-date text-[#101010]">
                2022-present
              </p>
              <p className="homepage-hero-theme-text homepage-type-selected-work-title mt-4 text-[color:var(--selected-work-meta)] sm:mt-5">
                AutoScout24
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
