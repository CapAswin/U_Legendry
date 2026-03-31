import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const projects = [
  {
    id: 1,
    title: 'Nexus Platform',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    description: 'A revolutionary data analytics dashboard built for enterprise scale.',
  },
  {
    id: 2,
    title: 'Aura E-Commerce',
    category: 'Digital Retail',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    description: 'High-conversion storefront with immersive 3D product previews.',
  },
  {
    id: 3,
    title: 'Lumina App',
    category: 'Mobile Experience',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
    description: 'Award-winning fitness tracking application with social features.',
  },
  {
    id: 4,
    title: 'Vanguard AI',
    category: 'Artificial Intelligence',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    description: 'Next-generation machine learning interface for creative workflows.',
  },
];

export function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Add spring physics for buttery smooth scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  // Translate by -50% of the w-max container to reveal all cards
  const x = useTransform(smoothProgress, [0, 1], ['0%', '-50%']);

  if (isMobile) {
    return (
      <section id="projects" className="py-24 px-6 bg-white dark:bg-black">
        <ScrollReveal className="mb-12">
          <h2 className="text-5xl font-bold tracking-tighter text-black dark:text-white mb-4">
            Selected Works
          </h2>
          <p className="text-lg text-black/60 dark:text-white/60">
            A curated collection of our most impactful digital experiences.
          </p>
        </ScrollReveal>
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-[60vh] w-full overflow-hidden rounded-[2.5rem] bg-white dark:bg-black shadow-2xl border border-black/5 dark:border-white/10"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 transition-opacity duration-500" />
              
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute top-6 right-8 z-20">
                <span className="text-5xl font-black text-white/20 tracking-tighter">
                  0{index + 1}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-20 p-8 flex flex-col justify-end h-full">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-base text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.description}
                  </p>
                </div>

                <div className="absolute bottom-8 right-8 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-200">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={targetRef} id="projects" className="relative h-[400vh] bg-white dark:bg-black pt-24 md:pt-32 pb-24 md:pb-32">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <ScrollReveal className="px-10 md:px-24 mb-10 md:mb-16">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black dark:text-white mb-4">
            Selected Works
          </h2>
          <p className="text-xl text-black/60 dark:text-white/60 max-w-md">
            A curated collection of our most impactful digital experiences.
          </p>
        </ScrollReveal>

        <motion.div style={{ x }} className="flex gap-8 px-10 md:px-24 w-max">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative h-[50vh] w-[80vw] md:h-[65vh] md:w-[45vw] overflow-hidden rounded-[2.5rem] bg-white dark:bg-black shadow-2xl flex-shrink-0 border border-black/5 dark:border-white/10"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 transition-opacity duration-500" />
              
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute top-8 right-10 z-20">
                <span className="text-6xl md:text-8xl font-black text-white/20 tracking-tighter">
                  0{index + 1}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-12 flex flex-col justify-end h-full">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md mb-6">
                    {project.category}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-lg text-white/70 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.description}
                  </p>
                </div>

                <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-200">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black hover:scale-110 transition-transform cursor-pointer">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
