import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  TrendingUp,
  Search,
  Palette,
  Code,
  Video,
  Smartphone,
  Globe,
  Megaphone,
  BarChart,
  Camera,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const tabs = [
  { id: "marketing", label: "Digital Marketing" },
  { id: "design", label: "Design & Branding" },
  { id: "development", label: "Web Development" },
  { id: "media", label: "Media Production" },
];

const servicesList = [
  // Digital Marketing
  {
    category: "marketing",
    title: "Digital Marketing Strategies",
    desc: "Comprehensive digital marketing campaigns that drive results and ROI",
    icon: TrendingUp,
  },
  {
    category: "marketing",
    title: "Effective SEO Services",
    desc: "Optimize your online presence and climb search engine rankings",
    icon: Search,
  },
  {
    category: "marketing",
    title: "Social Media Marketing",
    desc: "Engage audiences and build brand loyalty across all platforms",
    icon: Megaphone,
  },
  {
    category: "marketing",
    title: "Analytics & Reporting",
    desc: "Data-driven insights to measure campaign performance and growth",
    icon: BarChart,
  },

  // Design & Branding
  {
    category: "design",
    title: "Creative Branding",
    desc: "Develop unique brand identities that resonate with your target audience",
    icon: Palette,
  },
  {
    category: "design",
    title: "Logo Design",
    desc: "Professional logo creation that captures your brand essence",
    icon: Palette,
  },
  {
    category: "design",
    title: "Brand Guidelines",
    desc: "Complete brand style guides for consistent visual communication",
    icon: Palette,
  },

  // Web Development
  {
    category: "development",
    title: "Custom Website Solutions",
    desc: "Tailored websites built with modern technologies and best practices",
    icon: Code,
  },
  {
    category: "development",
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications for iOS and Android",
    icon: Smartphone,
  },
  {
    category: "development",
    title: "E-commerce Solutions",
    desc: "Full-featured online stores with secure payment integration",
    icon: Globe,
  },

  // Media Production
  {
    category: "media",
    title: "Professional Video Production",
    desc: "High-quality video content for marketing, training, and entertainment",
    icon: Video,
  },
  {
    category: "media",
    title: "Photography Services",
    desc: "Professional product, event, and portrait photography",
    icon: Camera,
  },
  {
    category: "media",
    title: "Content Creation",
    desc: "Engaging multimedia content that tells your brand story",
    icon: Video,
  },
];

export function Categories() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const filteredServices = servicesList.filter(
    (item) => item.category === activeTab,
  );

  return (
    <section
      id="services"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <ScrollReveal className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-500 dark:text-neutral-400 font-light">
              Comprehensive digital solutions designed to elevate your brand and
              drive business growth across all platforms.
            </p>
          </ScrollReveal>
        </div>

        {/* Filter Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 border-b border-neutral-200 dark:border-neutral-800 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-sm sm:text-base tracking-wide transition-all duration-300 relative pb-3 sm:pb-4 -mb-3 sm:-mb-4 px-2 ${
                  activeTab === tab.id
                    ? "text-black dark:text-white font-medium"
                    : "text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-px bg-black dark:bg-white"
                  />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Filtered Grid */}
        <ScrollReveal delay={0.2}>
          <motion.div layout className="min-h-[400px]">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12"
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <service.icon
                        className="h-5 w-5 sm:h-6 sm:w-6 text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors duration-300 flex-shrink-0"
                        strokeWidth={1.5}
                      />
                      <h3 className="text-base sm:text-lg font-medium tracking-tight group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed pl-8 sm:pl-10">
                      {service.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
