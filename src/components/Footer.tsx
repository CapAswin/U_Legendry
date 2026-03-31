import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import { ScrollReveal } from './ScrollReveal';

export function Footer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end']
  });

  const x = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <footer ref={ref} className="relative overflow-hidden bg-black text-white py-24 md:py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16 md:mb-24">
          <div className="lg:col-span-2">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              Let's build<br />something legendary.
            </h2>
            <a
              href="mailto:hello@ulegendary.com"
              className="inline-flex items-center gap-2 text-2xl font-medium hover:text-blue-400 transition-colors group"
            >
              hello@ulegendary.com
              <ArrowUpRight className="h-6 w-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white/50 uppercase tracking-widest">
              Socials
            </h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-xl hover:text-blue-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="text-xl hover:text-blue-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="text-xl hover:text-blue-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-xl hover:text-blue-400 transition-colors">Dribbble</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white/50 uppercase tracking-widest">
              Location
            </h3>
            <address className="not-italic text-xl text-white/80 space-y-2">
              <p>123 Innovation Drive</p>
              <p>Suite 400</p>
              <p>San Francisco, CA 94107</p>
            </address>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Ulegendary Agency. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </ScrollReveal>
      </div>

      {/* Background Typography */}
      <motion.div style={{ x }} className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none flex justify-center translate-y-1/4">
        <span className="text-[14vw] font-bold tracking-tighter leading-none whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5">
          ULEGENDRY
        </span>
      </motion.div>
    </footer>
  );
}
