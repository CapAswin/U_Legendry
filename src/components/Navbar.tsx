"use client";

import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemTheme === 'dark' ? 'light' : 'dark');
    } else {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-4 px-4 md:px-8 transition-all duration-500">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'pointer-events-auto flex items-center justify-between w-full transition-all duration-500',
          scrolled
            ? 'max-w-4xl px-6 py-3 bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.05)]'
            : 'max-w-7xl px-2 py-2 bg-transparent border border-transparent rounded-none shadow-none'
        )}
      >
        <div className="text-2xl font-bold tracking-tighter text-black dark:text-white">
          Ulegendary.
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-black/70 dark:text-white/70">
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
          <a href="#categories" className="hover:text-black dark:hover:text-white transition-colors">Categories</a>
          <a href="#team" className="hover:text-black dark:hover:text-white transition-colors">Team</a>
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
        >
          <Sun className="h-5 w-5 hidden dark:block text-white" />
          <Moon className="h-5 w-5 block dark:hidden text-black" />
        </button>
      </motion.nav>
    </div>
  );
}
