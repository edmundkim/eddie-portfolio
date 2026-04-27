import type { ReactNode } from "react";

import {
  HomepageEyebrow,
  HomepageSection,
} from "@/components/homepage/Section";
import HomepageTextReveal from "@/components/homepage/HomepageTextReveal";

type ExperienceRow = {
  label: string;
  value: ReactNode;
  subdued?: boolean;
};

const experienceRows: ExperienceRow[] = [
  {
    label: "AutoScout24",
    value: (
      <>
        Senior Product Designer {"\u2192"}{" "}
        <span className="sm:whitespace-nowrap">
          Principal Product Designer & AI Design Lead
        </span>
      </>
    ),
  },
  {
    label: "Deloitte Digital",
    value: "Experience Designer \u2192 Experience Design Studio Lead",
  },
  {
    label: "Additional experience",
    value:
      "CryptoXpress, Ippon Technologies, No Fixed Address, Anomaly, Publicis Groupe",
    subdued: true,
  },
];

export default function Experience() {
  return (
    <HomepageSection
      id="experience"
      aria-labelledby="experience-heading"
      className="py-24 sm:py-28"
      contentClassName="grid gap-10 md:grid-cols-[14rem_minmax(0,1fr)] md:items-start md:gap-12"
    >
      <div>
        <HomepageTextReveal>
          <HomepageEyebrow>Experience</HomepageEyebrow>
        </HomepageTextReveal>
      </div>

      <div className="max-w-4xl space-y-8">
        <h2 id="experience-heading" className="sr-only">
          Experience
        </h2>
        {experienceRows.map((row, index) => (
          <HomepageTextReveal
            key={row.label}
            delay={`${80 + index * 90}ms`}
          >
            <div className="border-b border-[color:var(--color-line)] pb-8 last:border-b-0 last:pb-0">
              <p
                className={
                  row.subdued
                    ? "homepage-type-utility text-[color:var(--secondary-text)]"
                    : "homepage-type-item-title text-[color:var(--foreground)]"
                }
              >
                {row.label}
              </p>
              <p
                className={
                  row.subdued
                    ? "homepage-type-body mt-3 max-w-3xl text-[color:var(--color-muted)]"
                    : "homepage-type-body mt-3 max-w-3xl font-medium text-[color:var(--color-muted)]"
                }
              >
                {row.value}
              </p>
            </div>
          </HomepageTextReveal>
        ))}
      </div>
    </HomepageSection>
  );
}
