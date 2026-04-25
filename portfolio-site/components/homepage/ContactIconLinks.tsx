import { contactLinks } from "@/components/homepage/content";

const emailLink =
  contactLinks.find((link) => link.label === "Email Eddie")?.href ??
  "mailto:edmundhkim@gmail.com";
const linkedInLink = contactLinks.find((link) => link.label === "LinkedIn");

const contactIconLinkClass =
  "flex items-center transition-[color,opacity] duration-200 hover:opacity-65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none";

type ContactIconLinksProps = {
  className?: string;
  linkClassName: string;
  linkLayoutClassName?: string;
};

export default function ContactIconLinks({
  className = "flex flex-col items-start gap-4",
  linkClassName,
  linkLayoutClassName = "h-8 w-8 justify-center",
}: ContactIconLinksProps) {
  const iconLinkClassName = `${contactIconLinkClass} ${linkLayoutClassName} ${linkClassName}`;

  return (
    <div className={className}>
      <a
        href={emailLink}
        aria-label="Get in touch by email"
        className={iconLinkClassName}
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
          className={iconLinkClassName}
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
  );
}
