import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1280&fm=webp",
    imageSmall:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=75&w=640&fm=webp",
    description:
      "Custom e-commerce solution with integrated payment systems and inventory management.",
  },
  {
    id: 2,
    title: "Brand Identity Redesign",
    category: "Branding & Design",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1280&fm=webp",
    imageSmall:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=75&w=640&fm=webp",
    description:
      "Complete brand overhaul including logo, website, and marketing materials for a tech startup.",
  },
  {
    id: 3,
    title: "Mobile App Launch",
    category: "App Development",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1280&fm=webp",
    imageSmall:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=75&w=640&fm=webp",
    description:
      "Cross-platform mobile application for a fitness and wellness company with social features.",
  },
  {
    id: 4,
    title: "SEO Campaign Success",
    category: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1280&fm=webp",
    imageSmall:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=75&w=640&fm=webp",
    description:
      "Comprehensive SEO strategy that increased organic traffic by 300% within 6 months.",
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
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Add spring physics for buttery smooth scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  // Translate by -50% of the w-max container to reveal all cards
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);

  if (isMobile) {
    return (
      <section
        id="projects"
        className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-white dark:bg-black"
      >
        <ScrollReveal className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black dark:text-white mb-4">
            Selected Works
          </h2>
          <p className="text-base sm:text-lg text-black/60 dark:text-white/60">
            A curated collection of our most impactful digital experiences.
          </p>
        </ScrollReveal>
        <div className="flex flex-col gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative h-[50vh] sm:h-[60vh] w-full overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-white dark:bg-black shadow-2xl border border-black/5 dark:border-white/10"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 transition-opacity duration-500" />

              <img
                src={project.image}
                srcSet={`${project.imageSmall} 640w, ${project.image} 1280w`}
                sizes="(max-width: 768px) 100vw, 90vw"
                alt={project.title}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
                decoding="async"
                width="1280"
                height="960"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute top-4 sm:top-6 right-4 sm:right-8 z-20">
                <span className="text-4xl sm:text-5xl font-black text-white/20 tracking-tighter">
                  0{index + 1}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-6 md:p-8 flex flex-col justify-end h-full">
                <div className="transform translate-y-6 sm:translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-white backdrop-blur-md mb-3 sm:mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.description}
                  </p>
                </div>

                <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-200">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white text-black">
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
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
    <section
      ref={targetRef}
      id="projects"
      className="relative h-[400vh] bg-white dark:bg-black pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-32"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <ScrollReveal className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 mb-6 sm:mb-8 md:mb-10 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-black dark:text-white mb-4">
            Selected Works
          </h2>
          <p className="text-lg sm:text-xl text-black/60 dark:text-white/60 max-w-md">
            A curated collection of our most impactful digital experiences.
          </p>
        </ScrollReveal>

        <motion.div
          style={{ x }}
          className="flex gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 w-max"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] xl:h-[65vh] w-[70vw] sm:w-[75vw] md:w-[80vw] lg:w-[40vw] xl:w-[45vw] overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-white dark:bg-black shadow-2xl flex-shrink-0 border border-black/5 dark:border-white/10"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 transition-opacity duration-500" />

              <img
                src={project.image}
                srcSet={`${project.imageSmall} 640w, ${project.image} 1280w`}
                sizes="(max-width: 1024px) 80vw, 45vw"
                alt={project.title}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
                decoding="async"
                width="1280"
                height="960"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute top-6 sm:top-8 right-6 sm:right-10 z-20">
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white/20 tracking-tighter">
                  0{index + 1}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-end h-full">
                <div className="transform translate-y-6 sm:translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 text-sm font-medium text-white backdrop-blur-md mb-4 sm:mb-6">
                    {project.category}
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-base sm:text-lg text-white/70 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.description}
                  </p>
                </div>

                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 xl:bottom-12 right-4 sm:right-6 md:right-8 lg:right-10 xl:right-12 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-200">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-white text-black hover:scale-110 transition-transform cursor-pointer">
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
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
