/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TextReveal } from "./components/TextReveal";
import { Features } from "./components/Features";
import { Clients } from "./components/Clients";
import { Projects } from "./components/Projects";
import { Categories } from "./components/Categories";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";
import { SmoothScroll } from "./components/SmoothScroll";

// Simple separator component for visual breaks between sections
const SectionSeparator = () => (
  <div className="w-full border-t-2 border-dotted border-black/20 dark:border-white/20" />
);

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ulegendary-theme">
      <SmoothScroll>
        {/* Main app container with dark theme as default */}
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-blue-500/30 font-sans antialiased">
          <Navbar />
          <main>
            {/* Hero section - main landing area */}
            <Hero />
            <SectionSeparator />

            {/* Text reveal animation section */}
            <TextReveal />
            <SectionSeparator />

            {/* Features showcase */}
            <Features />
            <SectionSeparator />

            {/* Client testimonials or logos */}
            <Clients />
            <SectionSeparator />

            {/* Portfolio projects */}
            <Projects />
            <SectionSeparator />

            {/* Service categories */}
            <Categories id="services" />
            <SectionSeparator />

            {/* Team members */}
            <Team />
          </main>
          <SectionSeparator />

          {/* Footer with contact info */}
          <Footer />
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}
