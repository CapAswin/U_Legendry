"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/**
 * Hero section component with scroll-based parallax and entrance animations
 * Features animated background blobs and call-to-action buttons
 */
export function Hero() {
  // Reference for the hero section to track scroll position
  const heroSectionRef = useRef<HTMLElement>(null);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: heroSectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect: move content up as user scrolls
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Fade out effect as user scrolls down
  const fadeOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={heroSectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black"
    >
      <motion.div
        style={{ y: parallaxY, opacity: fadeOpacity }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
      >
        {/* Animated badge showing we're live/active */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium text-black/80 dark:text-white/80 mb-6 sm:mb-8 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
          Established 2015
        </motion.div>

        {/* Main headline with gradient text effect */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight text-black dark:text-white max-w-[92vw] sm:max-w-3xl leading-tight md:leading-[1.05] mb-4 sm:mb-6"
        >
          Ultimate{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Legendary
          </span>{" "}
          Marketing.
        </motion.h1>

        {/* Subtitle describing our services */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-black/70 dark:text-white/70 max-w-[90vw] sm:max-w-2xl font-medium leading-relaxed md:leading-loose"
        >
          Established in 2015, we're on a mission to provide quality &
          affordable IT Solutions. Soon became one of the leading web design
          companies in Dubai, UAE, UK, USA. Our IT professionals successfully
          deliver best web design, software development, digital marketing, web
          hosting & graphic design services to our customers.
        </motion.p>

        {/* Call-to-action buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
        >
          <a
            href="#services"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(255,255,255,0.1)] text-sm sm:text-base"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-black/10 dark:border-white/10 text-black dark:text-white font-semibold tracking-wide hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 text-sm sm:text-base"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Animated background blobs for visual interest */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-[128px] mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-[128px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500/20 dark:bg-pink-500/10 rounded-full blur-[128px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
}
