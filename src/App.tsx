/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense, useEffect } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SmoothScroll } from "./components/SmoothScroll";

const TextReveal = lazy(() =>
  import("./components/TextReveal").then((module) => ({
    default: module.TextReveal,
  })),
);
const Features = lazy(() =>
  import("./components/Features").then((module) => ({
    default: module.Features,
  })),
);
const Clients = lazy(() =>
  import("./components/Clients").then((module) => ({
    default: module.Clients,
  })),
);
const Projects = lazy(() =>
  import("./components/Projects").then((module) => ({
    default: module.Projects,
  })),
);
const Categories = lazy(() =>
  import("./components/Categories").then((module) => ({
    default: module.Categories,
  })),
);
const Team = lazy(() =>
  import("./components/Team").then((module) => ({
    default: module.Team,
  })),
);
const Footer = lazy(() =>
  import("./components/Footer").then((module) => ({
    default: module.Footer,
  })),
);

// Simple separator component for visual breaks between sections
const SectionSeparator = () => (
  <div className="w-full border-t-2 border-dotted border-black/20 dark:border-white/20" />
);

function SectionSkeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-black/[0.03] dark:bg-white/[0.04] ${className}`}
      aria-hidden="true"
    />
  );
}

export default function App() {
  useEffect(() => {
    const preloadSections = () => {
      void import("./components/TextReveal");
      void import("./components/Features");
      void import("./components/Clients");
      void import("./components/Projects");
      void import("./components/Categories");
      void import("./components/Team");
      void import("./components/Footer");
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(preloadSections, {
        timeout: 1800,
      });

      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.setTimeout(preloadSections, 1200);
    return () => globalThis.clearTimeout(timeoutId);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="ulegendary-theme">
      <SmoothScroll>
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-blue-500/30 font-sans antialiased">
          <Navbar />
          <main>
            <Hero />
            <SectionSeparator />
            <Suspense fallback={<SectionSkeleton className="h-[160vh]" />}>
              <TextReveal />
            </Suspense>
            <SectionSeparator />
            <Suspense fallback={<SectionSkeleton className="h-[60vh]" />}>
              <Features />
            </Suspense>
            <SectionSeparator />
            <Suspense fallback={<SectionSkeleton className="h-[50vh]" />}>
              <Clients />
            </Suspense>
            <SectionSeparator />
            <Suspense fallback={<SectionSkeleton className="h-[90vh]" />}>
              <Projects />
            </Suspense>
            <SectionSeparator />
            <Suspense fallback={<SectionSkeleton className="h-[70vh]" />}>
              <Categories />
            </Suspense>
            <SectionSeparator />
            <Suspense fallback={<SectionSkeleton className="h-[60vh]" />}>
              <Team />
            </Suspense>
          </main>
          <SectionSeparator />
          <Suspense fallback={<SectionSkeleton className="h-[40vh]" />}>
            <Footer />
          </Suspense>
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}
