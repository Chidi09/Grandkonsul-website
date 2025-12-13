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
      
      {/* 1. Background Image (Parallax) */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src={assets.heroBg} 
          className="w-full h-full object-cover object-center scale-110 md:scale-100" // Slight zoom on mobile to avoid edges
          alt="Luxury Architecture"
        />
        {/* gradient overlay: darker on mobile for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-grand-dark/90 md:to-grand-dark/40"></div>
      </motion.div>

      {/* 2. Content Container */}
      <motion.div 
        style={{ opacity }} 
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20 md:pt-0"
      >
        {/* Intro Text */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }} 
           animate={{ opacity: 1, y: 0 }} 
           transition={{ delay: 2.2, duration: 0.8 }}
           className="mb-6 md:mb-10"
        >
          <div className="h-[1px] w-12 bg-grand-gold mx-auto mb-4 md:hidden"></div> {/* Mobile accent line */}
          <p className="text-grand-gold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-base font-medium">
            Redefining Luxury Living
          </p>
        </motion.div>
        
        {/* BIG TYPOGRAPHY STACK */}
        <div className="flex flex-col items-center justify-center leading-none">
          
          {/* Line 1: GRAND (Solid White) */}
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }} 
              animate={{ y: "0%" }} 
              transition={{ delay: 2.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[18vw] md:text-[11vw] font-serif font-bold text-white tracking-tighter mix-blend-overlay md:mix-blend-normal"
            >
              GRAND
            </motion.h1>
          </div>
          {/* Line 2: KONSUL (Gold) */}
          <div className="overflow-hidden -mt-2 md:-mt-4">
            <motion.h1 
              initial={{ y: "100%" }} 
              animate={{ y: "0%" }} 
              transition={{ delay: 2.45, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[18vw] md:text-[11vw] font-serif font-bold text-grand-gold tracking-tighter"
            >
              KONSUL
            </motion.h1>
          </div>
          {/* Line 3: GARDENS (Outline) */}
          <div className="overflow-hidden -mt-2 md:-mt-4">
            <motion.h1 
              initial={{ y: "100%" }} 
              animate={{ y: "0%" }} 
              transition={{ delay: 2.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[18vw] md:text-[11vw] font-serif font-bold text-transparent stroke-gold tracking-tighter opacity-80"
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
          className="absolute bottom-12 md:bottom-10 left-0 w-full flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-[10px] uppercase tracking-widest animate-pulse">Scroll to Explore</span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-grand-gold to-transparent"></div>
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
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <>
      {/* DESKTOP VIEW: Horizontal Scroll (Hidden on Mobile) */}
      <section ref={targetRef} className="hidden md:block relative h-[300vh] bg-grand-dark">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x, willChange: "transform" }} className="flex gap-20 pl-20">
            <div className="flex-shrink-0 w-[30vw] flex flex-col justify-center">
               <h2 className="text-white text-8xl font-serif font-bold leading-tight">
                 Selected <br/> <span className="text-grand-gold">Works</span>
               </h2>
               <p className="text-gray-400 mt-6 max-w-md">Swipe to explore our architectural landmarks.</p>
            </div>
            {assets.projects.map((project, i) => (
              <div key={i} className="relative h-[70vh] w-[40vw] flex-shrink-0 group overflow-hidden cursor-pointer">
                <img src={project.src} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-grand-gold uppercase tracking-widest text-xs mb-2">{project.loc}</p>
                  <h3 className="text-white text-4xl font-serif font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MOBILE VIEW: Vertical Stack (Hidden on Desktop) */}
      <section className="md:hidden bg-grand-dark py-20 px-6">
        <h2 className="text-white text-5xl font-serif font-bold leading-tight mb-10">
           Selected <br/> <span className="text-grand-gold">Works</span>
        </h2>
        <div className="flex flex-col gap-12">
          {assets.projects.map((project, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              key={i} 
              className="group"
            >
              <div className="h-[400px] w-full overflow-hidden rounded-sm mb-4">
                <img src={project.src} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <p className="text-grand-gold uppercase tracking-widest text-xs mb-1">{project.loc}</p>
              <h3 className="text-white text-3xl font-serif font-bold">{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

// --- 6. SERVICES (Accordion on PC, Snap Slider on Mobile) ---
const ServicesSection = () => {
  const [active, setActive] = useState(0);

  const services = [
    { title: "Property Development", img: assets.services.development, desc: "From breaking ground to ribbon cutting, we manage complex construction with precision." },
    { title: "Corporate Relocation", img: assets.services.relocation, desc: "Seamless movement of staff and executives across borders." },
    { title: "Joint Ventures", img: assets.services.handshake, desc: "Partner with us to unlock the true potential of your land assets." },
    { title: "HMO & Management", img: assets.services.coLiving, desc: "High-yield multi-occupancy solutions designed for modern living." },
  ];

  return (
    <section className="py-20 md:py-32 bg-grand-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-grand-green mb-10 md:mb-16 text-center">Our Expertise</h2>
        
        {/* DESKTOP: Accordion */}
        <div className="hidden md:flex flex-row gap-4 h-[80vh]">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              onClick={() => setActive(i)}
              animate={{ flex: active === i ? 3 : 1 }}
              className="relative overflow-hidden rounded-lg cursor-pointer transition-all duration-700 ease-[0.22, 1, 0.36, 1]"
            >
              <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className={`absolute inset-0 ${active === i ? 'bg-black/30' : 'bg-black/60'} transition-colors duration-500`}></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                 <h3 className={`font-serif font-bold text-white transition-all duration-500 ${active === i ? 'text-4xl mb-4' : 'text-2xl -rotate-90 origin-bottom-left translate-x-8'}`}>
                   {s.title}
                 </h3>
                 <AnimatePresence>
                   {active === i && (
                     <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-gray-200 max-w-md">
                       {s.desc}
                     </motion.p>
                   )}
                 </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE: Horizontal Snap Slider */}
        <div className="md:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory pb-8 -mx-6 px-6 no-scrollbar">
          {services.map((s, i) => (
            <div key={i} className="snap-center shrink-0 w-[85vw] relative h-[400px] rounded-lg overflow-hidden">
               <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-6">
                 <h3 className="text-2xl font-serif font-bold text-white mb-2">{s.title}</h3>
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
