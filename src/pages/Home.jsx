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

// --- 2. HERO SECTION (Parallax + Reveal) ---
const HeroSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={container} className="relative h-screen w-full overflow-hidden bg-grand-dark">
      {/* Background Image (Parallax) */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img src={assets.heroBg} alt="Luxury Architecture" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-grand-dark"></div>
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.p 
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2 }}
           className="text-grand-gold uppercase tracking-[0.3em] text-sm md:text-base mb-6"
        >
          Welcome to
        </motion.p>
        
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }} animate={{ y: "0%" }} transition={{ delay: 2.3, duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="text-[12vw] leading-[0.8] font-serif font-bold text-white tracking-tighter"
          >
            GRANDKONSUL
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }} animate={{ y: "0%" }} transition={{ delay: 2.4, duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="text-[12vw] leading-[0.8] font-serif font-bold text-transparent stroke-gold tracking-tighter"
          >
            GARDENS
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }}
          className="absolute bottom-10 animate-bounce text-white"
        >
          <ArrowDown size={32} />
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

// --- 4. ABOUT / VISION (Pin Zoom Effect) ---
const AboutSection = () => {
  return (
    <section className="py-32 bg-grand-light text-grand-dark relative">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="text-grand-gold uppercase tracking-widest font-bold mb-4">Our Philosophy</h3>
          <h2 className="text-5xl md:text-7xl font-serif font-bold leading-none mb-8">
            We don't just build.<br/>We <span className="text-grand-green italic">curate.</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Grandkonsul Gardens represents the pinnacle of luxury living and strategic property development. From the architectural blueprint to the velvet sofa in the lobby, we obsess over details so you don't have to.
          </p>
          <div className="flex gap-4">
             <div className="text-center">
                <h4 className="text-4xl font-serif font-bold text-grand-gold">150+</h4>
                <p className="text-xs uppercase tracking-wider">Projects</p>
             </div>
             <div className="w-px bg-gray-300 h-12"></div>
             <div className="text-center">
                <h4 className="text-4xl font-serif font-bold text-grand-gold">$50M+</h4>
                <p className="text-xs uppercase tracking-wider">Asset Value</p>
             </div>
          </div>
        </div>
        
        {/* The Image Tilt */}
        <div className="relative">
          <motion.div 
            whileHover={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[600px] overflow-hidden rounded-lg shadow-2xl relative"
          >
            <img src={assets.velvetSofa} alt="Luxury Interior" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>
          {/* Floating Card */}
          <div className="absolute -bottom-10 -left-10 bg-grand-green text-white p-8 max-w-xs shadow-xl hidden md:block">
            <p className="font-serif italic text-lg">"Excellence is not an act, but a habit."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 5. HORIZONTAL GALLERY (Showcase) ---
const HorizontalGallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-grand-dark">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x, willChange: "transform" }} className="flex gap-10 pl-10 md:pl-20">
          <div className="flex-shrink-0 w-[30vw] flex flex-col justify-center">
             <h2 className="text-white text-6xl md:text-8xl font-serif font-bold leading-tight">
               Selected <br/> <span className="text-grand-gold">Works</span>
             </h2>
             <p className="text-gray-400 mt-6 max-w-md">Swipe to explore our architectural landmarks across Nigeria and the UK.</p>
          </div>
          
          {assets.projects.map((project, i) => (
            <div key={i} className="relative h-[70vh] w-[80vw] md:w-[40vw] flex-shrink-0 group overflow-hidden cursor-pointer">
              <img src={project.src} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-grand-gold uppercase tracking-widest text-xs mb-2">{project.loc}</p>
                <h3 className="text-white text-3xl md:text-4xl font-serif font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- 6. SERVICES (Accordion Style) ---
const ServicesSection = () => {
  const [active, setActive] = useState(0);

  const services = [
    { title: "Property Development", img: assets.services.development, desc: "From breaking ground to ribbon cutting, we manage complex construction with precision." },
    { title: "Corporate Relocation", img: assets.services.relocation, desc: "Seamless movement of staff and executives across borders." },
    { title: "Joint Ventures", img: assets.services.handshake, desc: "Partner with us to unlock the true potential of your land assets." },
    { title: "HMO & Management", img: assets.services.coLiving, desc: "High-yield multi-occupancy solutions designed for modern living." },
  ];

  return (
    <section className="py-32 bg-grand-light">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-serif font-bold text-grand-green mb-16 text-center">Our Expertise</h2>
        
        <div className="flex flex-col md:flex-row gap-4 h-[80vh]">
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
                 <h3 className={`font-serif font-bold text-white transition-all duration-500 ${active === i ? 'text-4xl mb-4' : 'text-2xl rotate-0 md:-rotate-90 md:origin-bottom-left md:translate-x-8'}`}>
                   {s.title}
                 </h3>
                 <AnimatePresence>
                   {active === i && (
                     <motion.p 
                       initial={{ opacity: 0, height: 0 }} 
                       animate={{ opacity: 1, height: 'auto' }}
                       exit={{ opacity: 0, height: 0 }}
                       className="text-gray-200 max-w-md"
                     >
                       {s.desc}
                     </motion.p>
                   )}
                 </AnimatePresence>
              </div>
            </motion.div>
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
