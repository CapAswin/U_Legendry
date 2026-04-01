import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Increased for ultra smooth
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.2, // Slightly increased
      touchMultiplier: 3, // Increased for better mobile feel
      // normalizeWheel: true, // Normalize wheel events
    });

    // Handle anchor link clicks for smooth scrolling
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a") as HTMLAnchorElement;
      if (link && link.hash && link.hash.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(link.hash);
        if (targetElement) {
          lenis.scrollTo(targetElement, { offset: -80 }); // Offset for navbar
        }
      }
    };

    // Add event listener to document for anchor links
    document.addEventListener("click", handleAnchorClick);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
