"use client";

import {
  useLayoutEffect,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";

type WorkAssetRevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

const revealThreshold = 0.24;

export default function WorkAssetReveal({
  children,
  className,
  ...props
}: WorkAssetRevealProps) {
  const revealRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = revealRef.current;

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
  }, []);

  return (
    <div
      {...props}
      ref={revealRef}
      className={`homepage-work-asset-reveal ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
