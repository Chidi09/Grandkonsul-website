import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { assets } from '../data/images';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(0);

  // LONG, DETAILED CONTENT
  const services = [
    { 
      title: "Property Development", 
      img: assets.services.development, 
      desc: "We oversee the entire lifecycle of luxury real estate creation. From initial land acquisition and architectural conceptualization to construction management and final handover, our team ensures precision, quality, and strict adherence to timelines. We build spaces that define the future of living." 
    },
    { 
      title: "Relocation Services", 
      img: assets.services.relocation, 
      desc: "Relocating is more than just moving boxes; it's about moving lives. We provide comprehensive support for individuals and corporations, managing logistics, settling-in services, school searches, and cultural orientation to ensure a smooth transition into your new environment." 
    },
    { 
      title: "Joint Ventures", 
      img: assets.services.handshake, 
      desc: "Maximize the potential of your land assets through strategic partnerships. We bring the capital, technical expertise, and development experience needed to transform underutilized property into high-yield real estate assets, ensuring fair and transparent returns for all parties." 
    },
    { 
      title: "Service Accommodation", 
      img: assets.cubeHouse, 
      desc: "Experience the comfort of home with the luxury of a hotel. Our fully furnished, high-specification apartments offer flexible short-term living solutions for business travelers and expatriates seeking style, convenience, and privacy in prime locations." 
    },
    { 
      title: "HMO & Management", 
      img: assets.services.meeting, 
      desc: "We specialize in the development and management of Houses of Multiple Occupancy (HMO), optimizing rental yields for investors while providing safe, modern, and community-focused living spaces for tenants. Our management ensures compliance and high occupancy rates." 
    },
    { 
      title: "Rent to Rent", 
      img: assets.services.coLiving, 
      desc: "A hassle-free solution for landlords seeking financial certainty. We lease your property long-term, handle all maintenance and tenant management, and provide you with guaranteed fixed rental income every month, removing the stress of voids and arrears." 
    }
  ];

  return (
    <>
      <SEO title="Our Services" description="Premium Services" />

      <div className="bg-grand-dark min-h-screen pt-40 pb-20">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif font-bold text-white mb-10 md:mb-20 tracking-tighter"
          >
            EXPERTISE
          </motion.h1>

          {/* --- DESKTOP VIEW (Bento Grid) --- */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[500px] overflow-hidden rounded-lg cursor-pointer bg-grand-light"
              >
                <img src={s.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={s.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:bg-black/60 transition-colors duration-500"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                   <div className="w-12 h-1 bg-grand-gold mb-6 transform origin-left transition-all duration-500 group-hover:w-20"></div>
                   <h3 className="font-serif font-bold text-white text-3xl mb-4 group-hover:-translate-y-2 transition-transform duration-500">{s.title}</h3>
                   <p className="text-gray-300 text-sm leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- MOBILE VIEW (Responsive Stack - Fixed Cropping) --- */}
          <div className="md:hidden flex flex-col gap-12">
            {services.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                {/* IMAGE FIX: 
                   1. 'aspect-video' forces a 16:9 widescreen ratio. 
                   2. 'h-auto' allows it to scale naturally. 
                   3. No more aggressive cropping.
                */}
                <div className="w-full aspect-video relative">
                   <img src={s.img} className="w-full h-full object-cover" alt={s.title} />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50"></div>
                </div>

                {/* TEXT CONTENT */}
                <div className="p-8">
                  <div className="w-10 h-1 bg-grand-gold mb-4"></div>
                  <h3 className="text-2xl font-serif font-bold text-grand-dark mb-4">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Services;
