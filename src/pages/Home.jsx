import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Building2, Globe, Users, Home as HomeIcon, Key, Briefcase, CheckCircle2 } from 'lucide-react';
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
          <ServicesOverview />
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

// --- 2. HERO SECTION (Mobile-Optimized with CSS Animations) ---
const HeroSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  // Aggressive Parallax for Mobile Depth
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]); // Text moves faster than BG
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={container} className="relative h-[100dvh] w-full overflow-hidden bg-grand-dark">
      
      {/* 1. CINEMATIC BACKGROUND (Ken Burns CSS) */}
      {/* We use a div for the animation to avoid interfering with the parallax motion div */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="w-full h-full animate-ken-burns">
           <img 
             src={assets.heroBg} 
             className="w-full h-full object-cover object-center" 
             alt="Luxury Architecture"
           />
        </div>
        {/* Dark gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-grand-dark/90"></div>
      </motion.div>

      {/* 2. CSS PARTICLES (Lightweight for Mobile) */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {/* Manually placed particles to avoid JS loop calculation overhead */}
        <div className="particle w-1 h-1 top-[20%] left-[10%]" style={{ animationDelay: '0s' }}></div>
        <div className="particle w-2 h-2 top-[50%] left-[20%]" style={{ animationDelay: '1s' }}></div>
        <div className="particle w-1 h-1 top-[30%] left-[80%]" style={{ animationDelay: '2s' }}></div>
        <div className="particle w-1.5 h-1.5 top-[70%] left-[60%]" style={{ animationDelay: '3s' }}></div>
        <div className="particle w-1 h-1 top-[15%] left-[50%]" style={{ animationDelay: '4s' }}></div>
        <div className="particle w-2 h-2 top-[85%] left-[30%]" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* 3. CONTENT */}
      <motion.div 
        style={{ opacity, y: textY }} 
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20"
      >
        {/* Intro */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }} 
           animate={{ opacity: 1, scale: 1 }} 
           transition={{ delay: 2.2, duration: 0.8 }}
           className="mb-8"
        >
          <div className="h-[1px] w-12 bg-grand-gold mx-auto mb-6 md:hidden shadow-[0_0_10px_#c5a059]"></div>
          <p className="text-grand-gold uppercase tracking-[0.3em] text-xs font-bold drop-shadow-md">
            Redefining Luxury Living
          </p>
        </motion.div>
        
        {/* TYPOGRAPHY STACK */}
        <div className="flex flex-col items-center justify-center leading-none gap-2">
          
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }} 
              animate={{ y: "0%" }} 
              transition={{ delay: 2.3, duration: 1, ease: "easeOut" }}
              className="text-[17vw] md:text-[11vw] font-serif font-bold text-white tracking-tighter mix-blend-overlay"
            >
              GRAND
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }} 
              animate={{ y: "0%" }} 
              transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
              className="text-[17vw] md:text-[11vw] font-serif font-bold text-grand-gold tracking-tighter text-shimmer drop-shadow-2xl"
            >
              KONSUL
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }} 
              animate={{ y: "0%" }} 
              transition={{ delay: 2.7, duration: 1, ease: "easeOut" }}
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
          className="absolute bottom-12 left-0 w-full flex flex-col items-center gap-3"
        >
          <span className="text-white/50 text-[10px] uppercase tracking-widest animate-pulse">Scroll to Explore</span>
          <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-grand-gold to-transparent shadow-[0_0_8px_#c5a059]"></div>
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

// --- 5. HORIZONTAL GALLERY (SHORTENED to 3) ---
const HorizontalGallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); // Adjusted scroll distance since fewer items

  // Only take the first 3 projects
  const selectedProjects = assets.projects.slice(0, 3);

  return (
    <>
      {/* DESKTOP VIEW */}
      <section ref={targetRef} className="hidden md:block relative h-[250vh] bg-grand-dark">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-32 pl-20 pr-40">
            <div className="flex-shrink-0 w-[25vw] flex flex-col justify-center z-10">
               <div className="h-1 w-20 bg-grand-gold mb-8"></div>
               <h2 className="text-white text-7xl font-serif font-bold leading-none">Selected <br/> <span className="stroke-gold">Works</span></h2>
               <p className="text-gray-400 mt-8 text-lg max-w-xs leading-relaxed">A preview of our defining moments in architecture.</p>
            </div>

            {selectedProjects.map((project, i) => (
              <div key={i} className="relative h-[65vh] w-[35vw] flex-shrink-0 group cursor-pointer">
                <div className="w-full h-full overflow-hidden relative rounded-sm">
                  <img src={project.src} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="absolute -bottom-14 left-0">
                   <h3 className="text-4xl font-serif text-white font-bold opacity-60 group-hover:opacity-100 transition-opacity duration-500">{project.title}</h3>
                </div>
                <div className="absolute top-4 right-4 text-grand-gold font-serif text-6xl opacity-0 group-hover:opacity-20 transition-opacity duration-500">0{i + 1}</div>
              </div>
            ))}
            
            {/* CTA */}
            <div className="flex-shrink-0 w-[30vw] flex items-center justify-center">
              <a href="/projects" className="group flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-grand-gold group-hover:border-grand-gold transition-all duration-500">
                  <ArrowUpRight className="text-white h-8 w-8 group-hover:scale-125 transition-transform" />
                </div>
                <span className="text-white font-serif text-2xl group-hover:text-grand-gold transition-colors">View All Projects</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MOBILE VIEW */}
      <section className="md:hidden bg-grand-dark py-20 px-6">
        <h2 className="text-white text-5xl font-serif font-bold leading-tight mb-12">Selected <br/> <span className="text-grand-gold">Works</span></h2>
        <div className="flex flex-col gap-16">
          {selectedProjects.map((project, i) => (
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} key={i} className="group">
              <div className="h-[400px] w-full overflow-hidden rounded-sm mb-6 relative">
                <img src={project.src} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full"><span className="text-white/80 text-xs uppercase tracking-widest">0{i + 1}</span></div>
              </div>
              <h3 className="text-white text-3xl font-serif font-bold">{project.title}</h3>
            </motion.div>
          ))}
          <a href="/projects" className="block w-full py-4 text-center border border-grand-gold text-grand-gold mt-4 rounded-sm uppercase tracking-widest font-bold text-sm">View Full Portfolio</a>
        </div>
      </section>
    </>
  );
};

// --- 6. SERVICES OVERVIEW (ICONS ONLY) ---
const ServicesOverview = () => {
  const services = [
    { title: "Property Development", icon: Building2, desc: "End-to-end construction management." },
    { title: "Relocation Services", icon: Globe, desc: "Seamless corporate & personal moves." },
    { title: "Joint Ventures", icon: Users, desc: "Strategic land partnerships." },
    { title: "Service Accommodation", icon: Briefcase, desc: "Premium short-stay solutions." },
    { title: "HMO Management", icon: HomeIcon, desc: "High-yield multi-occupancy housing." },
    { title: "Rent to Rent", icon: Key, desc: "Guaranteed income for landlords." },
  ];

  return (
    <section className="py-20 bg-grand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-grand-green mb-4">Our Expertise</h2>
          <div className="w-16 h-1 bg-grand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.a 
              href="/services"
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-grand-gold/20 group"
            >
              <div className="w-14 h-14 bg-grand-green/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-grand-gold group-hover:text-white transition-colors text-grand-green">
                <s.icon size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-grand-dark mb-3 group-hover:text-grand-gold transition-colors">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 7. CTA (With Documents List) ---
const CallToAction = () => {
  const documents = [
    "Receipt of Payment",
    "Deed of Assignment",
    "Registered Survey",
    "Certificate of Occupancy (C of O)"
  ];

  return (
    <section className="py-20 md:py-32 bg-grand-green text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Sales Pitch */}
          <div className="text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-7xl font-serif font-bold mb-6">
                Buy an Apartment <span className="text-grand-gold">Now.</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
                Secure your future with Grandkonsul Gardens. We prioritize transparency and legality, ensuring your investment is safe, documented, and delivered on time.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                <a href="/contact" className="bg-grand-gold text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-grand-green transition-all duration-300 shadow-lg hover:shadow-grand-gold/50">
                  Secure Your Unit
                </a>
                <a href="/projects" className="border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-grand-green transition-all duration-300">
                  View Availability
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Documents Checklist (The "Trust" Badge) */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-2xl">
            <h3 className="text-2xl font-serif font-bold mb-2">What we offer alongside</h3>
            <p className="text-grand-gold text-sm uppercase tracking-widest mb-8">Verified Documentation</p>
            
            <ul className="space-y-6">
              {documents.map((doc, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-full bg-grand-gold/20 flex items-center justify-center text-grand-gold group-hover:bg-grand-gold group-hover:text-white transition-colors">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                    {doc}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Trust Note */}
            <div className="mt-8 pt-8 border-t border-white/10 text-xs text-gray-400 leading-relaxed">
              * All documents are processed immediately upon purchase completion and verified by our legal team.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
