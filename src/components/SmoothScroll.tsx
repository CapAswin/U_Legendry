import { useEffect, ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean };
      }
    ).connection;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      connection?.saveData
    ) {
      return;
    }

    let rafId = 0;
    let idleId: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let canceled = false;
    let lenisInstance: {
      destroy: () => void;
      raf: (time: number) => void;
      scrollTo: (
        target: number | HTMLElement,
        options?: Record<string, unknown>,
      ) => void;
    } | null = null;

    const handleAnchorClick = (e: Event) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      const link = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash) return;

      e.preventDefault();

      const fallbackScroll = (scrollTarget: number | HTMLElement) => {
        if (typeof scrollTarget === "number") {
          window.scrollTo({ top: scrollTarget, behavior: "smooth" });
          return;
        }

        scrollTarget.scrollIntoView({ behavior: "smooth", block: "start" });
      };

      if (hash === "#" || hash === "#hero") {
        if (lenisInstance) {
          lenisInstance.scrollTo(0, { duration: 1.2 });
        } else {
          fallbackScroll(0);
        }
        return;
      }

      const targetElement = document.querySelector(hash);
      if (targetElement instanceof HTMLElement) {
        if (lenisInstance) {
          lenisInstance.scrollTo(targetElement, {
            offset: -80,
            duration: 1.2,
          });
        } else {
          fallbackScroll(targetElement);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    const initialize = async () => {
      const { default: Lenis } = await import("lenis");
      if (canceled) return;

      lenisInstance = new Lenis({
        duration: 1.25,
        easing: (t) => 1 - Math.pow(1 - t, 4),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.05,
        touchMultiplier: 1.8,
      });

      const raf = (time: number) => {
        lenisInstance?.raf(time);
        rafId = window.requestAnimationFrame(raf);
      };

      rafId = window.requestAnimationFrame(raf);
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(() => {
        void initialize();
      });
    } else {
      timeoutId = globalThis.setTimeout(() => {
        void initialize();
      }, 250);
    }

    return () => {
      canceled = true;
      document.removeEventListener("click", handleAnchorClick);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      if (idleId !== null && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== null) {
        globalThis.clearTimeout(timeoutId);
      }
      lenisInstance?.destroy();
    };
  }, []);

  return <>{children}</>;
}
