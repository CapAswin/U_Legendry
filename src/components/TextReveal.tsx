import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { useRef } from 'react';

const text = "We don't just build software. We craft digital legacies. Every pixel, every line of code is meticulously designed to elevate your brand and dominate the market.";

function Word({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) {
  const opacity = useTransform(progress, range, [0, 1]);
  // Glow peaks in the middle of the word's range, then fades out
  const glowOpacity = useTransform(
    progress, 
    [range[0], range[0] + (range[1] - range[0]) / 2, range[1]], 
    [0, 1, 0]
  );
  
  return (
    <span className="relative inline-block">
      {/* Base word (dimmed) */}
      <span className="opacity-20 text-black dark:text-white">{children}</span>
      
      {/* Highlighted word */}
      <motion.span 
        style={{ opacity }} 
        className="absolute left-0 top-0 text-black dark:text-white"
      >
        {children}
      </motion.span>
      
      {/* Glowing word */}
      <motion.span 
        style={{ opacity: glowOpacity }} 
        className="absolute left-0 top-0 text-blue-600 dark:text-blue-400 blur-[12px] select-none"
        aria-hidden="true"
      >
        {children}
      </motion.span>
    </span>
  );
}

export function TextReveal() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to finish early, leaving the rest of the scroll as a "pause"
  const textProgress = useTransform(scrollYProgress, [0, 0.75], [0, 1]);

  const words = text.split(" ");
  const totalWords = words.length;

  // Cinematic effects
  const scale = useTransform(textProgress, [0, 1], [0.95, 1]);
  const sectionOpacity = useTransform(textProgress, [0, 0.15], [0.2, 1]);

  return (
    <div className="relative w-full bg-white dark:bg-black">
      {/* Premium Dotted Line Separator */}
      <div className="absolute top-0 left-0 w-full flex justify-center z-10">
        <div className="w-full max-w-7xl mx-6 md:mx-12 lg:mx-24 border-t-[2px] border-dotted border-black/20 dark:border-white/20" />
      </div>

      {/* Sticky Scroll Container */}
      <section ref={targetRef} className="h-[400vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center px-6 md:px-24 overflow-hidden">
          <motion.p 
            style={{ scale, opacity: sectionOpacity }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter max-w-5xl leading-[1.15] flex flex-wrap gap-x-3 md:gap-x-4 lg:gap-x-5"
          >
            {words.map((word, i) => {
              // Calculate the range for this specific word
              const start = i / totalWords;
              // Slightly overlap the glow timing for a more fluid effect
              const end = start + (1.2 / totalWords);
              
              return (
                <Word key={i} progress={textProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </motion.p>
        </div>
      </section>
    </div>
  );
}
