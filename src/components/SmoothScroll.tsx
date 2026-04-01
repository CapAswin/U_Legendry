import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Check if device is mobile
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const lenis = new Lenis({
      // Duration controls scroll smoothness - shorter = faster feel
      duration: isMobile ? 1.0 : 1.5,
      // Advanced easing for butter-smooth scrolling
      easing: (t) => {
        // Custom easing: exponential ease-out for ultimate smoothness
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      },
      orientation: "vertical",
      gestureOrientation: "vertical",
      // Enable smooth mouse wheel scrolling
      smoothWheel: true,
      // Smoothing factor - how much to smooth consecutive frames
      smoothTouch: true,
      // Multipliers for different input types
      wheelMultiplier: isMobile ? 0.8 : 1,
      touchMultiplier: isMobile ? 1.5 : 1.2,
      // Infinite momentum for ultra-smooth feel
      infinite: false,
      // Auto-detect device capabilities
      autoRaf: false,
    });

    // Advanced RAF loop with time management for consistent smoothness
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
