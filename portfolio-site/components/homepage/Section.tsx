import type { HTMLAttributes, ReactNode } from "react";

type HomepageSectionProps = HTMLAttributes<HTMLElement> & {
  as?: "div" | "section";
  contentClassName?: string;
};

type HomepageEyebrowProps = {
  as?: "p" | "span";
  children: ReactNode;
  className?: string;
};

function joinClassNames(
  ...classNames: Array<string | false | null | undefined>
) {
  return classNames.filter(Boolean).join(" ");
}

export function HomepageSection({
  as: Component = "section",
  className,
  contentClassName,
  children,
  ...props
}: HomepageSectionProps) {
  return (
    <Component
      className={joinClassNames("homepage-shell homepage-core", className)}
      {...props}
    >
      <div className={joinClassNames("homepage-content-width", contentClassName)}>
        {children}
      </div>
    </Component>
  );
}

export function HomepageEyebrow({
  as: Component = "p",
  children,
  className,
}: HomepageEyebrowProps) {
  return (
    <Component
      className={joinClassNames(
        "homepage-type-eyebrow text-[color:var(--color-muted)]",
        className,
      )}
    >
      {children}
    </Component>
  );
}
