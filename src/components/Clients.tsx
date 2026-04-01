import { motion } from "motion/react";
import {
  Hexagon,
  Triangle,
  Circle,
  Square,
  Diamond,
  Star,
  Cloud,
  Zap,
  Globe,
  Cpu,
  Layers,
  Box,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const row1 = [
  { name: "TechCorp Solutions", icon: Hexagon },
  { name: "Global Ventures", icon: Globe },
  { name: "Innovate Labs", icon: Triangle },
  { name: "Prime Industries", icon: Zap },
  { name: "Cloud Dynamics", icon: Cloud },
  { name: "Digital Nexus", icon: Square },
];

const row2 = [
  { name: "Metro Logistics", icon: Circle },
  { name: "Urban Retail", icon: Layers },
  { name: "Smart Systems", icon: Cpu },
  { name: "Elite Brands", icon: Box },
  { name: "Future Tech", icon: Diamond },
  { name: "Premium Services", icon: Star },
];

function LogoItem({ item }: { item: (typeof row1)[0] }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-4 mx-2 sm:mx-4 rounded-xl sm:rounded-2xl grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-105 hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer hover:shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
      <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-black dark:text-white" />
      <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-black dark:text-white whitespace-nowrap">
        {item.name}
      </span>
    </div>
  );
}

export function Clients() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white dark:bg-black overflow-hidden relative">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black dark:text-white mb-4 sm:mb-6">
            Trusted by Leading Brands
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto">
            We've worked with amazing companies worldwide to deliver legendary
            digital experiences.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="relative flex flex-col gap-6 sm:gap-8 md:gap-10">
          {/* Gradient Overlays for smooth entry/exit */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-24 md:w-32 lg:w-64 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-24 md:w-32 lg:w-64 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

          {/* Row 1 */}
          <div className="flex w-max animate-marquee-left pause-on-hover">
            {[...row1, ...row1, ...row1, ...row1].map((item, i) => (
              <LogoItem key={`r1-${i}`} item={item} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex w-max animate-marquee-right pause-on-hover">
            {[...row2, ...row2, ...row2, ...row2].map((item, i) => (
              <LogoItem key={`r2-${i}`} item={item} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
