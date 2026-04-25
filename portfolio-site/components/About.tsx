import {
  HomepageEyebrow,
  HomepageSection,
} from "@/components/homepage/Section";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-[#EAEDFF]">
      <HomepageSection
        as="div"
        className="py-24"
        contentClassName="grid gap-10 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-12"
      >
        <div>
          <HomepageEyebrow>How I Work</HomepageEyebrow>
        </div>

        <div className="max-w-3xl space-y-6">
          <h2
            id="about-heading"
            className="homepage-type-section-heading"
          >
            I help teams turn ambiguous product problems into clearer decisions,
            then carry that work into what ships.
          </h2>

          <p className="homepage-type-subhead text-[color:var(--color-muted)]">
            My work usually starts by clarifying the real product decision. I
            use research, experiments, and product constraints to make tradeoffs
            visible, then carry that direction through validation, delivery, and
            rollout. In practice, that has meant resetting search foundations,
            simplifying a commercially crowded browse experience, and setting
            clearer standards for how AI should behave in product.
          </p>
        </div>
      </HomepageSection>
    </section>
  );
}
