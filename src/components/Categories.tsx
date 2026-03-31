import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingCart, Shirt, Sofa, CreditCard, Package, Droplet, Scroll, 
  Pill, Dog, Stethoscope, FlaskConical, Pizza, Utensils, 
  GraduationCap, BookOpen, Bus, Truck, Scale, Building2, 
  ShieldCheck, Briefcase, Server, CalendarDays, Calculator, 
  Smartphone, Tractor 
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const tabs = [
  { id: 'retail', label: 'Retail & Sales' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'food', label: 'Food & Hospitality' },
  { id: 'education', label: 'Education' },
  { id: 'logistics', label: 'Logistics' },
  { id: 'business', label: 'Business & Services' },
];

const softwareList = [
  // Retail
  { category: 'retail', title: 'Retail POS', desc: 'Smart billing and inventory system for retail stores', icon: ShoppingCart },
  { category: 'retail', title: 'Shoes / Garments', desc: 'Inventory and sales management for apparel', icon: Shirt },
  { category: 'retail', title: 'Furniture Store', desc: 'Manage large inventory and custom orders', icon: Sofa },
  { category: 'retail', title: 'Instalment Shop', desc: 'Track payments and customer credit easily', icon: CreditCard },
  { category: 'retail', title: 'Wholesale Distribution', desc: 'Bulk order tracking and supply chain management', icon: Package },
  { category: 'retail', title: 'R.O Distribution', desc: 'Water purification and distribution tracking', icon: Droplet },
  { category: 'retail', title: 'Roll Stock (ERP)', desc: 'Curtain and hardware roll stock management', icon: Scroll },
  
  // Healthcare
  { category: 'healthcare', title: 'Pharmacy Store', desc: 'Medicine inventory and expiry tracking', icon: Pill },
  { category: 'healthcare', title: 'Veterinary Store', desc: 'Pet care products and medical supplies', icon: Dog },
  { category: 'healthcare', title: 'Clinic / Hospital', desc: 'Patient management and appointment scheduling', icon: Stethoscope },
  { category: 'healthcare', title: 'Laboratory', desc: 'Test results and diagnostic reporting', icon: FlaskConical },
  
  // Food
  { category: 'food', title: 'Pizza Home Delivery', desc: 'Order tracking and delivery management', icon: Pizza },
  { category: 'food', title: 'Restaurant / Motel', desc: 'Table booking, billing, and room management', icon: Utensils },
  
  // Education
  { category: 'education', title: 'School / University', desc: 'Student records, fees, and academic tracking', icon: GraduationCap },
  { category: 'education', title: 'Madrasa (Jamia)', desc: 'Specialized management for Islamic institutions', icon: BookOpen },
  
  // Logistics
  { category: 'logistics', title: 'Bus Service', desc: 'Ticketing, routes, and fleet management', icon: Bus },
  { category: 'logistics', title: 'Transport / Logistic', desc: 'Cargo tracking and dispatch operations', icon: Truck },
  
  // Business
  { category: 'business', title: 'Lawyer', desc: 'Case management and client billing', icon: Scale },
  { category: 'business', title: 'Real Estate', desc: 'Property listings and tenant management', icon: Building2 },
  { category: 'business', title: 'Security Guard', desc: 'Shift scheduling and patrol tracking', icon: ShieldCheck },
  { category: 'business', title: 'Freelancing', desc: 'Project tracking and invoicing', icon: Briefcase },
  { category: 'business', title: 'Hosting (WHMCS)', desc: 'Domain and server billing automation', icon: Server },
  { category: 'business', title: 'Event Management', desc: 'Ticketing, scheduling, and attendee tracking', icon: CalendarDays },
  { category: 'business', title: 'Payroll Solutions', desc: 'Employee salary and tax automation', icon: Calculator },
  { category: 'business', title: 'Mobile Load & Bills', desc: 'Utility billing and mobile top-up tracking', icon: Smartphone },
  { category: 'business', title: 'Farm House / Cattle', desc: 'Livestock and agricultural management', icon: Tractor },
];

export function Categories() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const filteredSoftware = softwareList.filter(item => item.category === activeTab);

  return (
    <section id="categories" className="py-24 md:py-32 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <ScrollReveal className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Industry Solutions
            </h2>
            <p className="text-lg text-neutral-500 dark:text-neutral-400 font-light">
              Tailored software categories designed to streamline operations and accelerate growth across every sector.
            </p>
          </ScrollReveal>
        </div>

        {/* Filter Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-6 md:gap-8 mb-16 border-b border-neutral-200 dark:border-neutral-800 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-sm tracking-wide transition-all duration-300 relative pb-4 -mb-4 ${
                  activeTab === tab.id
                    ? 'text-black dark:text-white font-medium'
                    : 'text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white'
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
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12"
              >
                {filteredSoftware.map((software, index) => (
                  <motion.div
                    key={software.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-3">
                      <software.icon className="h-5 w-5 text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                      <h3 className="text-lg font-medium tracking-tight group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                        {software.title}
                      </h3>
                    </div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed pl-8">
                      {software.desc}
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
