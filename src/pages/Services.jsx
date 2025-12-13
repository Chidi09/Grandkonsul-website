import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';
import { assets } from '../data/images';

// Map titles to images from your assets file
const servicesData = [
  { id: 1, title: "Property Development", desc: "End-to-end management of residential and commercial construction.", image: assets.services.development },
  { id: 2, title: "Relocation Services", desc: "Corporate and personal relocation logistics and settling-in services.", image: assets.services.relocation },
  { id: 3, title: "Joint Venture Engineering", desc: "Strategic partnerships to maximize land value and ROI.", image: assets.services.handshake },
  { id: 4, title: "Service Accommodation", desc: "Premium short-stay apartments for professionals.", image: assets.services.coLiving },
  { id: 5, title: "HMO & Management", desc: "High-yield multi-occupancy housing solutions.", image: assets.services.meeting },
  { id: 6, title: "Rent to Rent", desc: "Guaranteed rent schemes for landlords.", image: assets.luxuryInterior }
];

const Services = () => {
  const [hoveredService, setHoveredService] = useState(0); // Default to first service

  return (
    <>
      <SEO title="Our Services" description="Premium Services" />

      {/* Changed bg-grand-light to bg-grand-dark for the header section */}
      <div className="bg-grand-dark min-h-screen pt-40 pb-20">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif font-bold text-white mb-10 md:mb-20 tracking-tighter"
          >
            EXPERTISE
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* List */}
            <div className="flex flex-col">
              {servicesData.map((service, index) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredService(index)}
                  // Changed border color to white/20 for visibility on dark bg
                  className="group py-8 md:py-10 border-b border-white/20 cursor-pointer relative z-10"
                >
                  <div className="flex justify-between items-center">
                    <h3 className={`text-2xl md:text-4xl font-serif transition-colors duration-300 ${
                      hoveredService === index ? "text-grand-gold" : "text-white"
                    }`}>
                      {service.title}
                    </h3>
                    <ArrowUpRight className={`transition-all duration-300 transform ${
                      hoveredService === index ? "text-grand-gold rotate-45 scale-125" : "text-gray-500 scale-100"
                    }`} />
                  </div>
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: hoveredService === index ? 'auto' : 0,
                      opacity: hoveredService === index ? 1 : 0 
                    }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-gray-400 text-base md:text-lg max-w-md">{service.desc}</p>
                    {/* Mobile Only Image */}
                    <div className="block lg:hidden mt-4 h-48 w-full rounded-lg overflow-hidden">
                      <img src={service.image} className="w-full h-full object-cover" alt={service.title} />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Floating Image (Desktop) */}
            <div className="hidden lg:block relative h-[600px] w-full sticky top-32 rounded-lg overflow-hidden shadow-2xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={hoveredService}
                  src={servicesData[hoveredService].image} 
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Service Preview"
                />
              </AnimatePresence>
               <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                 <p className="text-white font-serif text-2xl">{servicesData[hoveredService].title}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
