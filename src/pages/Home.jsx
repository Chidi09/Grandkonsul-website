import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import SEO from '../components/SEO';
import { assets } from '../data/images';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Fake Preloader
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <>
      <SEO title="Grandkonsul Gardens" description="Luxury Redefined" />
      
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      {!isLoading && (
        <div className="bg-grand-light">
          <HeroSection />
          <MarqueeSection />
          <AboutSection />
          <HorizontalGallery />
          <ServicesSection />
          <CallToAction />
        </div>
      )}
    </>
  );
};

// --- 1. PRELOADER (The "App" Feel) ---
const Preloader = () => (
  <motion.div 
    initial={{ y: 0 }}
    exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
    className="fixed inset-0 z-[100] bg-grand-dark flex items-center justify-center"
  >
    <motion.img 
      src={assets.logo} 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-32 md:w-48"
      alt="Grandkonsul Logo"
    />
  </motion.div>
);

// --- 2. HERO SECTION (Optimized for Mobile & PC) ---
const HeroSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  // Parallax: Moves slower on PC, subtle move on mobile
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={container} className="relative h-[100dvh] w-full overflow-hidden bg-grand-dark">
      
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src={assets.heroBg} 
          className="w-full h-full object-cover object-center scale-110 md:scale-100" 
          alt="Luxury Architecture"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-grand-dark/90 md:to-grand-dark/40"></div>
      </motion.div>

      {/* Content - Added pt-40 for Mobile Spacing */}
      <motion.div 
        style={{ opacity }} 
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-40 md:pt-20"
      >
        {/* Intro Text - Increased margin bottom */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }} 
           animate={{ opacity: 1, y: 0 }} 
           transition={{ delay: 2.2, duration: 0.8 }}
           className="mb-8 md:mb-12"
        >
          <div className="h-[1px] w-12 bg-grand-gold mx-auto mb-6 md:hidden"></div>
          <p className="text-grand-gold uppercase tracking-[0.25em] md:tracking-[0.4em] text-xs md:text-sm font-medium">
            Redefining Luxury Living
          </p>
        </motion.div>
        
        {/* Big Typography - Added gap-2 to stack */}
        <div className="flex flex-col items-center justify-center leading-none gap-2 md:gap-0">
          
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }} 
              animate={{ y: "0%" }} 
              transition={{ delay: 2.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[17vw] md:text-[11vw] font-serif font-bold text-white tracking-tighter mix-blend-overlay md:mix-blend-normal"
            >
              GRAND
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }} 
              animate={{ y: "0%" }} 
              transition={{ delay: 2.45, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[17vw] md:text-[11vw] font-serif font-bold text-grand-gold tracking-tighter"
            >
              KONSUL
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }} 
              animate={{ y: "0%" }} 
              transition={{ delay: 2.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[17vw] md:text-[11vw] font-serif font-bold text-transparent stroke-gold tracking-tighter opacity-80"
            >
              GARDENS
            </motion.h1>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 3.5, duration: 1 }}
          className="absolute bottom-10 left-0 w-full flex flex-col items-center gap-4"
        >
          <span className="text-white/50 text-[10px] uppercase tracking-widest animate-pulse">Scroll to Explore</span>
          <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-grand-gold to-transparent"></div>
        </motion.div>

      </motion.div>
    </section>
  );
};

// --- 3. MARQUEE (Energy) ---
const MarqueeSection = () => {
  return (
    <div className="py-12 bg-grand-dark border-y border-white/10 overflow-hidden">
      <motion.div 
        animate={{ x: "-50%" }} 
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        className="flex gap-10 whitespace-nowrap"
      >
        {[...Array(4)].map((_, i) => (
          <h2 key={i} className="text-8xl font-serif text-white/10 font-bold">
            PREMIUM ESTATES • CORPORATE RELOCATION • JOINT VENTURES •
          </h2>
        ))}
      </motion.div>
    </div>
  );
};

// --- 4. ABOUT / VISION (Fixing the Sofa Crop) ---
const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 bg-grand-light text-grand-dark relative">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-grand-gold uppercase tracking-widest font-bold mb-4 text-sm md:text-base">Our Philosophy</h3>
          <h2 className="text-4xl md:text-7xl font-serif font-bold leading-none mb-6 md:mb-8">
            We don't just build.<br/>We <span className="text-grand-green italic">curate.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            Grandkonsul Gardens represents the pinnacle of luxury living. From the architectural blueprint to the velvet sofa in the lobby, we obsess over details so you don't have to.
          </p>
          <div className="flex gap-4">
             <div className="text-center">
                <h4 className="text-3xl md:text-4xl font-serif font-bold text-grand-gold">150+</h4>
                <p className="text-[10px] md:text-xs uppercase tracking-wider">Projects</p>
             </div>
             <div className="w-px bg-gray-300 h-10 md:h-12"></div>
             <div className="text-center">
                <h4 className="text-3xl md:text-4xl font-serif font-bold text-grand-gold">$50M+</h4>
                <p className="text-[10px] md:text-xs uppercase tracking-wider">Asset Value</p>
             </div>
          </div>
        </div>
        
        {/* FIX: Changed h-[600px] to h-64 md:h-[600px] for better mobile aspect ratio */}
        <div className="relative order-1 md:order-2 mb-8 md:mb-0">
          <motion.div 
            whileHover={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="w-full h-64 md:h-[600px] overflow-hidden rounded-lg shadow-2xl relative"
          >
            <img src={assets.velvetSofa} alt="Luxury Interior" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- 5. HORIZONTAL GALLERY (Separate Mobile/PC Logic) ---
const HorizontalGallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  // Controls the horizontal slide of the container
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <>
      {/* DESKTOP VIEW: Parallax Horizontal Scroll */}
      <section ref={targetRef} className="hidden md:block relative h-[300vh] bg-grand-dark">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          
          <motion.div style={{ x }} className="flex gap-32 pl-20 pr-40">
            
            {/* Title Card */}
            <div className="flex-shrink-0 w-[25vw] flex flex-col justify-center z-10">
               <div className="h-1 w-20 bg-grand-gold mb-8"></div>
               <h2 className="text-white text-7xl font-serif font-bold leading-none">
                 Selected <br/> <span className="stroke-gold">Works</span>
               </h2>
               <p className="text-gray-400 mt-8 text-lg max-w-xs leading-relaxed">
                 A curation of our defining moments in architecture and development.
               </p>
            </div>

            {/* Project Cards */}
            {assets.projects.map((project, i) => (
              <div key={i} className="relative h-[65vh] w-[35vw] flex-shrink-0 group cursor-pointer">
                
                {/* Image Container with Overflow Hidden */}
                <div className="w-full h-full overflow-hidden relative rounded-sm">
                  {/* The Image (Scales up on hover for a subtle breath effect) */}
                  <img 
                    src={project.src} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  {/* Dark Overlay that vanishes on hover */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                
                {/* Clean Title - Removed Location */}
                <div className="absolute -bottom-14 left-0">
                   <h3 className="text-4xl font-serif text-white font-bold opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                     {project.title}
                   </h3>
                </div>
                
                {/* Hover Number */}
                <div className="absolute top-4 right-4 text-grand-gold font-serif text-6xl opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  0{i + 1}
                </div>
              </div>
            ))}
            
            {/* CTA at the end of scroll */}
            <div className="flex-shrink-0 w-[30vw] flex items-center justify-center">
              <Link to="/projects" className="group flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-grand-gold group-hover:border-grand-gold transition-all duration-500">
                  <ArrowUpRight className="text-white h-8 w-8 group-hover:scale-125 transition-transform" />
                </div>
                <span className="text-white font-serif text-2xl group-hover:text-grand-gold transition-colors">View All Projects</span>
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

      {/* MOBILE VIEW: Vertical Stack (Cleaned up) */}
      <section className="md:hidden bg-grand-dark py-20 px-6">
        <h2 className="text-white text-5xl font-serif font-bold leading-tight mb-12">
           Selected <br/> <span className="text-grand-gold">Works</span>
        </h2>
        <div className="flex flex-col gap-16">
          {assets.projects.map((project, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              key={i} 
              className="group"
            >
              <div className="h-[450px] w-full overflow-hidden rounded-sm mb-6 relative">
                <img src={project.src} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">
                  <span className="text-white/80 text-xs uppercase tracking-widest">0{i + 1}</span>
                </div>
              </div>
              <h3 className="text-white text-3xl font-serif font-bold">{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

// --- 6. SERVICES (Bento Grid on PC, Snap Slider on Mobile) ---
const ServicesSection = () => {
  // Expanded Professional Content
  const services = [
    { 
      title: "Property Development", 
      img: assets.services.development, 
      desc: "We oversee the entire lifecycle of luxury real estate creation. From initial land acquisition and architectural conceptualization to construction management and final handover, our team ensures precision, quality, and strict adherence to timelines." 
    },
    { 
      title: "Relocation Services", 
      img: assets.services.relocation, 
      desc: "Relocating is more than just moving boxes. We provide comprehensive support for individuals and corporations, managing logistics, settling-in services, and cultural orientation to ensure a smooth transition into your new environment." 
    },
    { 
      title: "Joint Ventures", 
      img: assets.services.handshake, 
      desc: "Maximize the potential of your land assets through strategic partnerships. We bring the capital, technical expertise, and development experience needed to transform underutilized property into high-yield real estate assets." 
    },
    { 
      title: "Service Accommodation", 
      img: assets.luxuryInterior, 
      desc: "Experience the comfort of home with the luxury of a hotel. Our fully furnished, high-specification apartments offer flexible short-term living solutions for business travelers and expatriates seeking style and convenience." 
    },
    { 
      title: "HMO & Management", 
      img: assets.services.coLiving, 
      desc: "We specialize in the development and management of Houses of Multiple Occupancy (HMO), optimizing rental yields for investors while providing safe, modern, and community-focused living spaces for tenants." 
    },
    { 
      title: "Rent to Rent", 
      img: assets.services.meeting, 
      desc: "A hassle-free solution for landlords seeking financial certainty. We lease your property long-term, handle all maintenance and tenant management, and provide you with guaranteed fixed rental income every month." 
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-grand-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-grand-green mb-6 text-center">Our Expertise</h2>
        <div className="w-24 h-1 bg-grand-gold mx-auto mb-16"></div>
        
        {/* DESKTOP: BENTO GRID (Normal, Beautiful, Professional) */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[500px] overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Image Background */}
              <img 
                src={s.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={s.title}
              />
              
              {/* Gradient Overlay (Darkens on Hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:bg-black/60 transition-colors duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                 {/* Icon/Line Decorative */}
                 <div className="w-12 h-1 bg-grand-gold mb-6 transform origin-left transition-all duration-500 group-hover:w-20"></div>
                 
                 <h3 className="font-serif font-bold text-white text-3xl mb-4 group-hover:-translate-y-2 transition-transform duration-500">
                   {s.title}
                 </h3>
                 
                 {/* Text reveals on hover (or stays visible but muted if preferred) */}
                 <p className="text-gray-300 text-sm leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                   {s.desc}
                 </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE: Snap Slider (Unchanged as you liked it) */}
        <div className="md:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory pb-8 -mx-6 px-6 no-scrollbar">
          {services.map((s, i) => (
            <div key={i} className="snap-center shrink-0 w-[85vw] relative h-[450px] rounded-lg overflow-hidden">
               <img src={s.img} className="absolute inset-0 w-full h-full object-cover" alt={s.title} />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-6">
                 <h3 className="text-3xl font-serif font-bold text-white mb-3">{s.title}</h3>
                 <p className="text-gray-200 text-sm leading-relaxed">{s.desc}</p>
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// --- 7. CTA ---
const CallToAction = () => (
  <section className="py-32 bg-grand-green text-center px-6">
    <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8">
      Ready to make your move?
    </h2>
    <div className="flex justify-center gap-6 flex-wrap">
       <Link to="/contact" className="bg-grand-gold text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-grand-green transition-all duration-300">
         Start a Project
       </Link>
       <Link to="/services" className="border border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-grand-green transition-all duration-300">
         Learn More
       </Link>
    </div>
  </section>
);

export default Home;
