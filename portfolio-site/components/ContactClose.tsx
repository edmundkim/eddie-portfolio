import { HomepageSection } from "@/components/homepage/Section";
import { contactLinks } from "@/components/homepage/content";

export default function ContactClose() {
  return (
    <HomepageSection
      id="contact"
      aria-labelledby="contact-heading"
      className="pb-24 pt-20 sm:pt-24"
    >
      <div className="max-w-3xl">
        <h2
          id="contact-heading"
          className="homepage-type-section-heading homepage-type-section-heading--compact"
        >
          Email is the simplest way to continue the conversation.
        </h2>

        <p className="homepage-type-subhead mt-6 max-w-2xl text-[color:var(--color-muted)]">
          I welcome design leadership conversations and speaking invitations.
        </p>

        <ul className="homepage-type-utility m-0 mt-8 flex list-none flex-wrap gap-x-6 gap-y-3 p-0">
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
    </HomepageSection>
  );
}
