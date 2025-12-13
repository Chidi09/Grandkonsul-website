import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';
import { services } from '../data/services';

// Service images mapping
const serviceImages = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop",
];

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <>
      <SEO title="Our Services" description="Premium Services" />
      <div className="bg-grand-light min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif font-bold text-grand-green mb-20 tracking-tighter"
          >
            EXPERTISE
          </motion.h1>
          <div className="grid lg:grid-cols-2 gap-10">
            {/* List */}
            <div className="flex flex-col">
              {services.map((service, index) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="group py-10 border-b border-gray-300 cursor-pointer relative z-10"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl md:text-4xl font-serif text-grand-dark group-hover:text-grand-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="text-gray-300 group-hover:text-grand-gold group-hover:rotate-45 transition-all duration-300 transform scale-0 group-hover:scale-125" />
                  </div>
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: hoveredService === index ? 'auto' : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-gray-500 text-lg max-w-md">{service.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Floating Image (Desktop Only) */}
            <div className="hidden lg:block relative h-[600px] w-full sticky top-32">
              <AnimatePresence mode="wait">
                {hoveredService !== null && (
                  <motion.img
                    key={hoveredService}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    src={serviceImages[hoveredService]} 
                    alt={services[hoveredService].title}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
                  />
                )}
                {hoveredService === null && (
                   <div className="absolute inset-0 flex items-center justify-center text-grand-green/10 text-9xl font-serif font-bold">
                     G
                   </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
