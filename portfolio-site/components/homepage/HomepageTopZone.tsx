"use client";

import { useEffect, useState } from "react";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
import type { HomepageNavMode } from "@/components/homepage/content";

type HomepageHeroTheme = "dark" | "light";

export default function HomepageTopZone() {
  const [navMode, setNavMode] = useState<HomepageNavMode>("default");
  const [heroTheme, setHeroTheme] = useState<HomepageHeroTheme>("dark");

  useEffect(() => {
    const workSection = document.getElementById("work");

    if (!workSection || typeof window === "undefined") {
      return;
    }

    let frameId: number | null = null;

    const updateHomepageState = () => {
      const workSectionTop = workSection.getBoundingClientRect().top;
      const themeLead = Math.min(window.innerHeight * 0.18, 240);
      const hasWorkEnteredThemeZone =
        workSectionTop <= window.innerHeight + themeLead;
      const nextMode = hasWorkEnteredThemeZone ? "work" : "default";
      const nextHeroTheme = hasWorkEnteredThemeZone ? "light" : "dark";

      setNavMode((currentMode) =>
        currentMode === nextMode ? currentMode : nextMode,
      );
      setHeroTheme((currentTheme) =>
        currentTheme === nextHeroTheme ? currentTheme : nextHeroTheme,
      );
    };

    const handleScroll = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        updateHomepageState();
      });
    };

    updateHomepageState();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateHomepageState);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHomepageState);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div
      data-hero-theme={heroTheme}
      className="homepage-zone homepage-zone--dark homepage-zone--dark-top"
    >
      <div className="homepage-zone__overlay pointer-events-none absolute inset-0 z-20">
        <div className="homepage-shell homepage-chrome h-full pt-3 sm:pt-4">
          <Navbar mode={navMode} />
        </div>
      </div>

      <div className="homepage-shell homepage-chrome pt-3 sm:pt-4">
        <Hero />
      </div>
      <Work />
    </div>
  );
}
