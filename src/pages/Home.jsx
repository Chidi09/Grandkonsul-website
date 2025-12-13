import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';

// --- ANIMATION VARIANTS ---
const textReveal = {
  hidden: { y: "100%" },
  visible: { y: "0%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }
};

const Home = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <>
      <SEO title="Home" description="Grandkonsul - Redefining Luxury Living" />
      
      {/* --- HERO SECTION --- */}
      <section ref={container} className="relative h-screen overflow-hidden bg-grand-green flex flex-col justify-center items-center">
        
        {/* Parallax Background Image */}
        <motion.div 
          style={{ y, scale }}
          className="absolute inset-0 z-0 opacity-40"
        >
           <img 
             src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2500&auto=format&fit=crop" 
             alt="Luxury Home" 
             className="w-full h-full object-cover"
           />
        </motion.div>

        {/* Floating Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-grand-green/20 via-transparent to-grand-green z-10"></div>

        {/* Giant Staggered Typography */}
        <div className="relative z-20 container mx-auto px-4 md:px-8 text-center">
          <div className="overflow-hidden">
            <motion.h1 
              variants={textReveal} initial="hidden" animate="visible"
              className="text-[12vw] leading-[0.85] font-serif font-bold text-white mix-blend-overlay tracking-tighter"
            >
              GRAND
            </motion.h1>
          </div>
          <div className="overflow-hidden">
             <motion.h1 
               variants={textReveal} initial="hidden" animate="visible" transition={{ delay: 0.1 }}
               className="text-[12vw] leading-[0.85] font-serif font-bold text-grand-gold tracking-tighter"
             >
               KONSUL
             </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
            className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6"
          >
            <p className="text-white text-lg font-light tracking-widest uppercase max-w-md text-center md:text-right border-r border-grand-gold/50 pr-6">
              Properties • Relocation <br/> Development
            </p>
            <Link to="/projects" className="group flex items-center gap-4 text-white">
              <span className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-grand-gold group-hover:border-grand-gold transition-all duration-300">
                <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
              </span>
              <span className="text-sm uppercase tracking-widest font-bold group-hover:text-grand-gold transition-colors">Explore Works</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- MARQUEE SECTION (Spam Animation!) --- */}
      <section className="bg-grand-green py-10 overflow-hidden border-t border-white/10">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-10"
        >
          {[...Array(4)].map((_, i) => (
             <h2 key={i} className="text-8xl md:text-9xl font-serif font-bold text-transparent stroke-text opacity-30">
               LUXURY LIVING • PREMIUM SPACES • GLOBAL RELOCATION •
             </h2>
          ))}
        </motion.div>
      </section>

      {/* --- FLOATING IMAGES / ABOUT --- */}
      <section className="py-32 bg-grand-light relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-grand-gold text-sm font-bold uppercase tracking-[0.3em] mb-4"
            >
              The Vision
            </motion.h3>
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif font-bold text-grand-dark mb-10 leading-[0.9]"
            >
              We don't just build.<br/> We <span className="italic text-grand-green">curate.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed mb-8 max-w-md"
            >
              Grandkonsul combines architectural mastery with white-glove relocation services. From the foundation to the front door key, we handle the complex so you can live the exceptional.
            </motion.p>
            
            <Link to="/about" className="inline-block border-b border-grand-dark pb-1 text-grand-dark uppercase tracking-widest text-xs hover:text-grand-gold hover:border-grand-gold transition-colors">
              Read Our Story
            </Link>
          </div>

          <div className="relative">
             <motion.div 
               initial={{ clipPath: 'inset(100% 0 0 0)' }}
               whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
               transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
               className="w-full h-[600px] bg-gray-300"
             >
               <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Luxury Architecture" />
             </motion.div>
             
             {/* Floating Badge */}
             <motion.div 
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
               className="absolute -bottom-10 -left-10 bg-grand-gold w-40 h-40 rounded-full flex items-center justify-center text-white text-center p-4 shadow-xl z-10 hidden md:flex"
             >
               <span className="font-serif text-lg leading-tight">150+<br/><span className="text-xs font-sans tracking-wide uppercase">Projects Delivered</span></span>
             </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
