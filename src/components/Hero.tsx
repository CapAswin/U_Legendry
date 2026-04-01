"use client";

/**
 * Hero section with compositor-friendly CSS animations only.
 * This keeps the initial route off the heavy motion runtime path.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black pt-10 sm:pt-8"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_38%),radial-gradient(circle_at_80%_30%,_rgba(168,85,247,0.14),_transparent_34%),linear-gradient(180deg,_rgba(255,255,255,0.96)_0%,_rgba(239,246,255,0.92)_45%,_rgba(255,255,255,1)_100%)] dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),_transparent_40%),radial-gradient(circle_at_80%_30%,_rgba(168,85,247,0.24),_transparent_36%),radial-gradient(circle_at_50%_100%,_rgba(236,72,153,0.16),_transparent_34%),linear-gradient(180deg,_#020617_0%,_#050816_45%,_#000000_100%)]"
      />

      <div className="hero-stage relative z-10 flex flex-col items-center justify-center text-center px-5 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="hero-badge inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium text-black/80 dark:text-white/80 mb-6 sm:mb-8 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
          Established 2015
        </div>

        <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight text-black dark:text-white max-w-[92vw] sm:max-w-3xl leading-tight md:leading-[1.05] mb-4 sm:mb-6">
          Ultimate{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Legendary
          </span>{" "}
          Marketing.
        </h1>

        <p className="hero-copy mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-black/70 dark:text-white/70 max-w-[90vw] sm:max-w-2xl font-medium leading-relaxed md:leading-loose">
          Established in 2015, we're on a mission to provide quality &
          affordable IT Solutions. Soon became one of the leading web design
          companies in Dubai, UAE, UK, USA. Our IT professionals successfully
          deliver best web design, software development, digital marketing, web
          hosting & graphic design services to our customers.
        </p>

        <div className="hero-actions mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <a
            href="#services"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(255,255,255,0.1)] text-sm sm:text-base will-change-transform"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-black/10 dark:border-white/10 text-black dark:text-white font-semibold tracking-wide hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 text-sm sm:text-base"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-sky-400/20 rounded-full blur-[128px] mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-violet-400/18 rounded-full blur-[128px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500/20 dark:bg-fuchsia-400/16 rounded-full blur-[128px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
}
