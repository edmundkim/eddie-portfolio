"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
import type { HomepageNavMode } from "@/components/homepage/content";

type HomepageHeroTheme = "dark" | "light";

export default function HomepageTopZone() {
  const [navMode, setNavMode] = useState<HomepageNavMode>("default");
  const [heroTheme, setHeroTheme] = useState<HomepageHeroTheme>("dark");
  const [isVisualThemeActive, setIsVisualThemeActive] = useState(false);
  const isVisualThemeActiveRef = useRef(false);
  const isWorkNavActiveRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let frameId: number | null = null;
    const themeExitBuffer = 120;

    const updateHomepageState = () => {
      const workThemeTrigger = document.getElementById("work-theme-trigger");

      if (!workThemeTrigger) {
        return;
      }

      const workTriggerTop = workThemeTrigger.getBoundingClientRect().top;
      const themeEnterOffset = window.innerHeight;
      const themeExitOffset = window.innerHeight + themeExitBuffer;
      const useVisualTheme = isVisualThemeActiveRef.current
        ? workTriggerTop <= themeExitOffset
        : workTriggerTop <= themeEnterOffset;
      const useWorkNav = isWorkNavActiveRef.current
        ? workTriggerTop <= themeExitOffset
        : workTriggerTop <= themeEnterOffset;
      const nextMode = useWorkNav ? "work" : "default";
      const nextHeroTheme = useVisualTheme ? "light" : "dark";

      isVisualThemeActiveRef.current = useVisualTheme;
      isWorkNavActiveRef.current = useWorkNav;

      setIsVisualThemeActive((currentState) =>
        currentState === useVisualTheme ? currentState : useVisualTheme,
      );
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

  const topZoneStyle = {
    "--homepage-work-background-opacity": isVisualThemeActive ? "1" : "0",
  } as CSSProperties;

  return (
    <div
      data-hero-theme={heroTheme}
      style={topZoneStyle}
      className="homepage-zone homepage-zone--dark homepage-zone--dark-top"
    >
      <div
        aria-hidden="true"
        className="homepage-zone__work-background"
      />

      <div className="homepage-zone__overlay pointer-events-none absolute inset-0 z-20">
        <div className="homepage-shell homepage-chrome h-full pt-3 sm:pt-4">
          <Navbar mode={navMode} />
        </div>
      </div>

      <div className="homepage-shell px-0 pt-3 sm:pt-4 md:px-[var(--homepage-edge-gap)]">
        <Hero />
      </div>
      <Work />
    </div>
  );
}
