"use client";

import {
  useLayoutEffect,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";

type WorkAssetRevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: "fade" | "unveil";
};

const unveilRevealThreshold = 0.24;
const fadeRevealThreshold = 0.42;

export default function WorkAssetReveal({
  children,
  className,
  variant = "unveil",
  ...props
}: WorkAssetRevealProps) {
  const revealRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = revealRef.current;
    const revealThreshold =
      variant === "fade" ? fadeRevealThreshold : unveilRevealThreshold;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      element.dataset.revealState = "visible";
      return;
    }

    element.dataset.revealState = "ready";

    let observer: IntersectionObserver | null = null;
    const frameId = window.requestAnimationFrame(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) {
            return;
          }

          element.dataset.revealState = "visible";
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
  }, [variant]);

  return (
    <div
      {...props}
      ref={revealRef}
      data-reveal-variant={variant}
      className={`homepage-work-asset-reveal ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
