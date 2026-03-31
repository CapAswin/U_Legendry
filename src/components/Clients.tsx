import { motion } from 'motion/react';
import { Hexagon, Triangle, Circle, Square, Diamond, Star, Cloud, Zap, Globe, Cpu, Layers, Box } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const row1 = [
  { name: 'Acme Corp', icon: Hexagon },
  { name: 'GlobalTech', icon: Globe },
  { name: 'Nexus', icon: Triangle },
  { name: 'Stark Ind.', icon: Zap },
  { name: 'Umbrella', icon: Cloud },
  { name: 'Initech', icon: Square },
];

const row2 = [
  { name: 'Soylent', icon: Circle },
  { name: 'Massive Dynamic', icon: Layers },
  { name: 'Cyberdyne', icon: Cpu },
  { name: 'Hooli', icon: Box },
  { name: 'Pied Piper', icon: Diamond },
  { name: 'Wayne Ent.', icon: Star },
];

function LogoItem({ item }: { item: typeof row1[0] }) {
  return (
    <div className="flex items-center gap-3 px-8 py-4 mx-4 rounded-2xl grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer hover:shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
      <item.icon className="w-8 h-8 text-black dark:text-white" />
      <span className="text-2xl font-bold tracking-tight text-black dark:text-white whitespace-nowrap">
        {item.name}
      </span>
    </div>
  );
}

export function Clients() {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-black overflow-hidden relative">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-6 md:px-24 mb-16 md:mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black dark:text-white mb-6">
            Trusted by Leading Brands
          </h2>
          <p className="text-lg md:text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto">
            We’ve worked with amazing companies worldwide to deliver legendary digital experiences.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="relative flex flex-col gap-10">
          {/* Gradient Overlays for smooth entry/exit */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

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
