"use client";

import Link from "next/link";
import type { CSSProperties, PointerEvent, ReactNode } from "react";

type WorkSectionHoverAreaProps = {
  href: string;
  ariaLabel: string;
  className?: string;
  children: ReactNode;
};

const hoverStyle = {
  "--work-hover-x": "50%",
  "--work-hover-y": "50%",
} as CSSProperties;

function setPointerPosition(event: PointerEvent<HTMLAnchorElement>) {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();

  target.style.setProperty("--work-hover-x", `${event.clientX - rect.left}px`);
  target.style.setProperty("--work-hover-y", `${event.clientY - rect.top}px`);
}

export default function WorkSectionHoverArea({
  href,
  ariaLabel,
  className,
  children,
}: WorkSectionHoverAreaProps) {
  const handlePointerEnter = (event: PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType === "touch") {
      return;
    }

    setPointerPosition(event);
    event.currentTarget.dataset.hoverActive = "true";
  };

  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType === "touch") {
      return;
    }

    setPointerPosition(event);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLAnchorElement>) => {
    event.currentTarget.dataset.hoverActive = "false";
  };

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      data-hover-active="false"
      className={`work-section-hover-area relative block w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:[outline-color:var(--accent)] ${className ?? ""}`}
      style={hoverStyle}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerCancel={handlePointerLeave}
    >
      {children}
      <span
        aria-hidden="true"
        className="work-section-hover-area__cursor homepage-type-functional pointer-events-none"
      >
        VIEW
      </span>
    </Link>
  );
}
