import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.7,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 2.2,
    });

    // Handle anchor link clicks for smooth scrolling
    const handleAnchorClick = (e: Event) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      const link = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash) return;

      e.preventDefault();

      if (hash === "#" || hash === "#hero") {
        lenis.scrollTo(0, {
          duration: 1.8,
          lerp: 0.08,
        });
        return;
      }

      const targetElement = document.querySelector(hash);
      if (targetElement instanceof HTMLElement) {
        lenis.scrollTo(targetElement, {
          offset: -80,
          duration: 1.8,
          lerp: 0.08,
        });
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
