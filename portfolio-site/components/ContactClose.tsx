import { contactLinks } from "@/components/homepage/content";

export default function ContactClose() {
  const primaryContactLink =
    contactLinks.find((link) => link.label === "Email Eddie") ??
    contactLinks[0];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="homepage-shell homepage-core pb-24 pt-16 sm:pb-28 sm:pt-20"
    >
      <div>
        <a
          href={primaryContactLink.href}
          aria-label="Get in touch with Eddie by email"
          className="flex min-h-[21rem] items-center justify-center overflow-hidden rounded-[2rem] bg-[#E7E6E1] px-7 py-8 text-center text-[color:var(--accent)] transition-colors duration-300 [margin-inline:max(-2.5rem,calc(var(--homepage-edge-gap)-var(--homepage-content-inset)))] hover:bg-[color:var(--accent)] hover:text-white focus-visible:bg-[color:var(--accent)] focus-visible:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:[outline-color:var(--accent)] motion-reduce:transition-none sm:min-h-[26rem] sm:rounded-[2.5rem] sm:px-10 sm:py-10 lg:-mx-10 lg:min-h-[31rem] lg:w-[calc(100%+5rem)] lg:px-14 lg:py-12"
        >
          <div className="flex -translate-y-5 flex-col items-center gap-4 sm:gap-5 lg:gap-6">
            <div className="flex flex-col items-center gap-4 sm:gap-5">
              <span
                aria-hidden="true"
                className="text-[2.35rem] leading-none sm:text-[2.8rem]"
              >
                ✌︎
              </span>
              <h2
                id="contact-heading"
                className="homepage-type-item-title text-current"
              >
                Think we vibe?
              </h2>
            </div>

            <span className="block max-w-full [font-family:var(--homepage-font-display)] text-[3.85rem] font-semibold leading-[0.86] tracking-normal text-current sm:text-[5.85rem] md:text-[7rem] lg:text-[8.8rem] xl:text-[11rem] 2xl:text-[12.25rem]">
              Get in touch
            </span>
          </div>
        </a>

        <p className="homepage-type-subhead mx-auto mt-8 max-w-2xl text-center text-[color:var(--foreground)]">
          Open to collaboration and speaking opportunities.
        </p>

        <ul className="homepage-type-utility m-0 mt-6 flex list-none flex-wrap justify-center gap-x-6 gap-y-3 p-0">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : undefined)}
                className="group relative inline-flex items-center pb-1 text-[color:var(--color-muted)] transition-colors duration-200 hover:text-[color:var(--foreground)] focus-visible:text-[color:var(--foreground)] focus-visible:outline-none"
              >
                <span>{link.label}</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[color:var(--foreground)] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
