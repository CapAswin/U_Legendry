import { motion } from "motion/react";
import { ScrollReveal } from "./ScrollReveal";

const features = [
  {
    id: "01",
    title: "Our Mission",
    points: [
      "Provide quality & affordable IT Solutions",
      "Deliver exceptional digital experiences",
      "Empower businesses with innovative technology",
    ],
  },
  {
    id: "02",
    title: "Our Vision",
    points: [
      "Become the leading web design company globally",
      "Set new standards in digital marketing excellence",
      "Drive digital transformation for businesses worldwide",
    ],
  },
  {
    id: "03",
    title: "Our Expertise",
    points: [
      "Web design, software development, digital marketing",
      "Web hosting & graphic design services",
      "Serving clients in Dubai, UAE, UK, USA",
    ],
  },
  {
    id: "04",
    title: "Why Choose Us",
    points: [
      "Established in 2015 with proven track record",
      "Professional IT team with diverse expertise",
      "Quality solutions that deliver real results",
    ],
  },
];

export function Features() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <ScrollReveal className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter mb-4 sm:mb-6">
            Our DNA
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black/60 dark:text-white/60 max-w-2xl">
            The core principles that drive our process and ensure we deliver
            legendary results.
          </p>
        </ScrollReveal>

        <div className="flex flex-col">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col md:flex-row items-start md:items-center py-8 sm:py-10 md:py-12 border-t border-black/10 dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors duration-500 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12 rounded-2xl sm:rounded-3xl"
            >
              <div className="w-full md:w-1/4 mb-4 sm:mb-6 md:mb-0">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-black/10 dark:text-white/10 group-hover:text-black dark:group-hover:text-white transition-colors duration-500">
                  {feature.id}
                </span>
              </div>

              <div className="w-full md:w-1/3 mb-6 sm:mb-8 md:mb-0 transform group-hover:translate-x-2 sm:group-hover:translate-x-4 transition-transform duration-500 ease-out">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                  {feature.title}
                </h3>
              </div>

              <div className="w-full md:w-5/12 md:ml-auto">
                <ul className="space-y-3 sm:space-y-4">
                  {feature.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm sm:text-base lg:text-lg text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors duration-500"
                    >
                      <span className="mr-3 sm:mr-4 mt-1 text-black/20 dark:text-white/20 group-hover:text-blue-500 transition-colors duration-500">
                        -
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
