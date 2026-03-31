import { motion } from 'motion/react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const team = [
  {
    name: 'Elena Rostova',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    bio: 'Visionary designer with a passion for minimal aesthetics.',
  },
  {
    name: 'Marcus Chen',
    role: 'Lead Engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
    bio: 'Full-stack architect specializing in high-performance systems.',
  },
  {
    name: 'Sophia Patel',
    role: 'Product Strategist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop',
    bio: 'Data-driven product leader focused on user growth.',
  },
  {
    name: 'Julian Vance',
    role: 'UX Researcher',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop',
    bio: 'Empathy-first researcher uncovering deep user insights.',
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32 px-6 md:px-12 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="mb-16 md:mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-black dark:text-white">
            The Minds Behind the Magic
          </h2>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 font-light max-w-2xl mx-auto">
            A collective of designers, engineers, and strategists building the future.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-6 h-40 w-40 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <a href="#" className="text-white hover:text-neutral-300 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-white hover:text-neutral-300 transition-colors">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-white hover:text-neutral-300 transition-colors">
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-xl font-medium text-black dark:text-white mb-1 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">
                  {member.role}
                </p>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-[220px] font-light leading-relaxed opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
