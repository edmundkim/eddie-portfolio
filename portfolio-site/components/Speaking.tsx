import Image from "next/image";

import {
  HomepageEyebrow,
  HomepageSection,
} from "@/components/homepage/Section";
import { speakingTopics } from "@/components/homepage/content";

export default function Speaking() {
  return (
    <section
      id="speaking"
      aria-labelledby="speaking-heading"
      className="bg-[#F1F1F1]"
    >
      <HomepageSection as="div" className="py-28 sm:py-32">
        <div className="max-w-3xl">
          <HomepageEyebrow className="mb-4">Speaking</HomepageEyebrow>
          <h2
            id="speaking-heading"
            className="homepage-type-section-heading"
          >
            Selected talks on AI, design judgment, and how teams adapt
          </h2>
          <p className="homepage-type-subhead mt-6 max-w-2xl text-[color:var(--color-muted)]">
            I speak about how AI is changing design work in practice: where
            judgment still matters, how teams adapt, and how to adopt new tools
            without losing clarity, quality, or intent.
          </p>
        </div>

        <ul className="m-0 mt-20 list-none space-y-24 p-0 sm:mt-24 sm:space-y-28 lg:space-y-32">
          {speakingTopics.map((topic) => (
            <li key={topic.title}>
              <article className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,32rem)] lg:items-center lg:gap-16">
                <div className="max-w-2xl">
                  <h3 className="homepage-type-item-title text-[color:var(--foreground)]">
                    {topic.title}
                  </h3>
                  <p className="homepage-type-body homepage-type-body--responsive mt-5 text-[color:var(--color-muted)]">
                    {topic.description}
                  </p>
                </div>

                <div className="overflow-hidden bg-[color:var(--color-panel)]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={topic.imageSrc}
                      alt={topic.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 32rem, 100vw"
                      className="object-cover"
                      style={{
                        objectPosition: topic.imagePosition,
                        transform: topic.imageScale
                          ? `scale(${topic.imageScale})`
                          : undefined,
                      }}
                    />
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </HomepageSection>
    </section>
  );
}
