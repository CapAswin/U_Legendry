import { motion } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';

const features = [
  {
    id: '01',
    title: 'What is so Special',
    points: [
      'Unique design strategies',
      'High-quality development',
      'Business-focused solutions',
    ],
  },
  {
    id: '02',
    title: 'Our Vision',
    points: [
      'Shape the digital future',
      'Empower global brands',
      'Set new industry standards',
    ],
  },
  {
    id: '03',
    title: 'Our Mission',
    points: [
      'Deliver exceptional ROI',
      'Craft pixel-perfect UIs',
      'Build scalable architectures',
    ],
  },
  {
    id: '04',
    title: 'Our Packages',
    points: [
      'Tailored agency retainers',
      'End-to-end project delivery',
      'Flexible growth sprints',
    ],
  },
];

export function Features() {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <ScrollReveal className="mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Our DNA
          </h2>
          <p className="text-xl text-black/60 dark:text-white/60 max-w-2xl">
            The core principles that drive our process and ensure we deliver legendary results.
          </p>
        </ScrollReveal>

        <div className="flex flex-col">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col md:flex-row items-start md:items-center py-12 border-t border-black/10 dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors duration-500 -mx-6 px-6 md:-mx-12 md:px-12 rounded-3xl"
            >
              <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <span className="text-5xl md:text-6xl font-bold text-black/10 dark:text-white/10 group-hover:text-black dark:group-hover:text-white transition-colors duration-500">
                  {feature.id}
                </span>
              </div>
              
              <div className="w-full md:w-1/3 mb-8 md:mb-0 transform group-hover:translate-x-4 transition-transform duration-500 ease-out">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {feature.title}
                </h3>
              </div>

              <div className="w-full md:w-5/12 md:ml-auto">
                <ul className="space-y-4">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-center text-lg text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors duration-500">
                      <span className="mr-4 text-black/20 dark:text-white/20 group-hover:text-blue-500 transition-colors duration-500">
                        —
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-black/10 dark:border-white/10" />
        </div>
      </div>
    </section>
  );
}
