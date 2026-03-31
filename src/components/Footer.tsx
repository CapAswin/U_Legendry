import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { ScrollReveal } from "./ScrollReveal";

/**
 * Footer component with scroll-based animations and contact info
 * Features parallax background text and responsive layout
 */
export function Footer() {
  // Ref to track the footer's position for scroll animations
  const footerRef = useRef<HTMLDivElement>(null);

  // Hook into scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  // Transform scroll progress into horizontal movement for background text
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-black text-white py-24 md:py-32 px-6 md:px-24"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-16 md:mb-24">
          <div className="lg:col-span-2">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              Let's create
              <br />
              something legendary.
            </h2>
            <a
              href="mailto:info@ulegendary.com"
              className="inline-flex items-center gap-2 text-2xl font-medium hover:text-blue-400 transition-colors group"
            >
              info@ulegendary.com
              <ArrowUpRight className="h-6 w-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <div className="mt-4 space-y-2">
              <p className="text-xl text-white/80">Phone:</p>
              <p className="text-lg">+971 55 411 8178</p>
              <p className="text-lg">+971 4 577 4866</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white/50 uppercase tracking-widest">
              Top Services
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-xl hover:text-blue-400 transition-colors"
                >
                  Digital Marketing Strategies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl hover:text-blue-400 transition-colors"
                >
                  Effective SEO Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl hover:text-blue-400 transition-colors"
                >
                  Creative Branding & Interiors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl hover:text-blue-400 transition-colors"
                >
                  Custom Website & App Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl hover:text-blue-400 transition-colors"
                >
                  Professional Video & Photography
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white/50 uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-xl hover:text-blue-400 transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl hover:text-blue-400 transition-colors"
                >
                  Insights & Articles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl hover:text-blue-400 transition-colors"
                >
                  Get in Touch
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl hover:text-blue-400 transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl hover:text-blue-400 transition-colors"
                >
                  Join Our Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white/50 uppercase tracking-widest">
              Contact Details
            </h3>
            <address className="not-italic text-xl text-white/80 space-y-2">
              <p>Office # 803 - 8th Floor</p>
              <p>White Swan Building</p>
              <p>Trade Centre District, Sheikh Zayed Road</p>
              <p>Dubai, United Arab Emirates</p>
            </address>
          </div>
        </ScrollReveal>

        <ScrollReveal
          delay={0.2}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-white/50 text-sm"
        >
          <p>
            &copy; {new Date().getFullYear()} Ultimate Legendary Marketing
            Services Via Social Media Est. All rights reserved.
          </p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Parallax background typography effect - moves horizontally as user scrolls */}
      <motion.div
        style={{ x: backgroundX }}
        className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none flex justify-center translate-y-1/4"
      >
        <span className="text-[14vw] font-bold tracking-tighter leading-none whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5">
          ULEGENDRY
        </span>
      </motion.div>
    </footer>
  );
}
