"use client";

import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      setTheme(systemTheme === "dark" ? "light" : "dark");
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] flex justify-center pointer-events-none pt-2 sm:pt-4 px-2 sm:px-4 md:px-8 transition-all duration-500 bg-white dark:bg-black">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "pointer-events-auto flex items-center justify-between w-full transition-all duration-500 animate-float",
          scrolled
            ? "w-full sm:max-w-4xl px-3 sm:px-4 py-2 bg-white dark:bg-black backdrop-blur-xl border border-black/15 dark:border-white/20 rounded-xl sm:rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_16px_50px_rgba(0,0,0,0.6)]"
            : "w-full sm:max-w-6xl lg:max-w-7xl px-2 py-2 bg-transparent border border-transparent rounded-none shadow-none",
        )}
      >
        <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter text-black dark:text-white/95">
          ULEGENDRY.
        </div>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium text-black/80 dark:text-white/90">
          <a
            href="#services"
            className="hover:text-black dark:hover:text-white/100 transition-colors"
          >
            Our Services
          </a>
          <a
            href="#projects"
            className="hover:text-black dark:hover:text-white/100 transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#projects"
            className="hover:text-black dark:hover:text-white/100 transition-colors"
          >
            Insights
          </a>
          <a
            href="#contact"
            className="hover:text-black dark:hover:text-white/100 transition-colors"
          >
            Contact
          </a>
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
        >
          <Sun className="h-4 w-4 sm:h-5 sm:w-5 hidden dark:block text-white" />
          <Moon className="h-4 w-4 sm:h-5 sm:w-5 block dark:hidden text-black" />
        </button>
      </motion.nav>
    </div>
  );
}
