"use client";

import {
  useLayoutEffect,
  useRef,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";

type HomepageTextRevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: string;
};

const revealThreshold = 0.18;

export default function HomepageTextReveal({
  children,
  className,
  delay,
  style,
  ...props
}: HomepageTextRevealProps) {
  const revealRef = useRef<HTMLDivElement>(null);
  const revealStyle = delay
    ? ({
        ...style,
        "--homepage-text-reveal-delay": delay,
      } as CSSProperties)
    : style;

  useLayoutEffect(() => {
    const element = revealRef.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      element.dataset.textRevealState = "visible";
      return;
    }

    element.dataset.textRevealState = "ready";

    let observer: IntersectionObserver | null = null;
    const frameId = window.requestAnimationFrame(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) {
            return;
          }

          element.dataset.textRevealState = "visible";
          observer?.disconnect();
        },
        { threshold: revealThreshold },
      );

      observer.observe(element);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      {...props}
      ref={revealRef}
      className={`homepage-text-reveal ${className ?? ""}`}
      style={revealStyle}
    >
      {children}
    </div>
  );
}
