import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { projects } from '../data/projects';

const Projects = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Desktop: Transform vertical scroll into horizontal movement
  // We move the X axis from 1% to -95% of the total width
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

  return (
    <>
      <SEO title="Our Work" description="Curated Portfolio" />
      
      {/* --- TITLE SECTION --- */}
      <section className="bg-grand-light dark:bg-grand-dark pt-40 pb-20 px-6">
        <div className="container mx-auto">
          <motion.h1 
             initial={{ opacity: 0, y: 100 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="text-6xl md:text-9xl font-serif font-bold text-grand-dark dark:text-white tracking-tighter"
          >
            SELECTED <br/> <span className="text-grand-gold ml-10 md:ml-32">WORKS</span>
          </motion.h1>
          <div className="mt-8 flex justify-end">
             <p className="text-gray-600 dark:text-gray-400 max-w-sm text-right uppercase tracking-widest text-xs">
                Scroll to explore our <br/> defining moments in architecture.
             </p>
          </div>
        </div>
      </section>

      {/* --- DESKTOP HORIZONTAL SCROLL AREA --- */}
      {/* We make this container very tall (300vh) to give us 'room' to scroll horizontally */}
      <section ref={targetRef} className="hidden md:block relative h-[300vh] bg-grand-light dark:bg-grand-dark">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          
          {/* Increased gap from gap-20 to gap-40 (10rem spacing) */}
          <motion.div style={{ x, willChange: "transform" }} className="flex gap-40 pl-20 pr-40">
            
            {/* Title Card */}
            <div className="flex-shrink-0 w-[30vw] flex flex-col justify-center">
               <h2 className="text-grand-dark dark:text-white text-8xl font-serif font-bold leading-tight">
                 Selected <br/> <span className="text-grand-gold">Works</span>
               </h2>
               <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-md">Swipe to explore our architectural landmarks.</p>
            </div>
            {/* Project Cards */}
            {projects.map((project, i) => (
              <div key={project.id} className="relative h-[70vh] w-[450px] flex-shrink-0 group cursor-pointer">
                {/* Image Container */}
                <div className="w-full h-full overflow-hidden relative border-r border-gray-200 dark:border-white/10">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 img-adaptive"
                  />
                  <div className="absolute inset-0 bg-black/30 dark:bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                
                {/* Text: Moved to left-0 (aligned with image) and added width constraint */}
                <div className="absolute -bottom-16 left-0 w-[150%] pointer-events-none">
                   <h3 className="text-5xl font-serif text-grand-dark dark:text-white font-bold opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                     {project.title}
                   </h3>
                </div>
              </div>
            ))}
            
            {/* End padding */}
            <div className="w-[20vw]"></div> 
          </motion.div>
        </div>
      </section>

      {/* --- MOBILE VERTICAL STACK AREA --- */}
      <section className="md:hidden bg-grand-light dark:bg-grand-dark pb-20 px-4 flex flex-col gap-16">
        {projects.map((project, index) => (
           <MobileProjectCard key={project.id} project={project} index={index} />
        ))}
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="bg-grand-green dark:bg-[#003d33] py-32 flex justify-center items-center text-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Have a vision?</h2>
          <Link to="/contact" className="inline-block border border-grand-gold text-grand-gold px-10 py-4 rounded-full hover:bg-grand-gold hover:text-grand-dark transition-all duration-300 uppercase tracking-widest text-sm">
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  );
};


const MobileProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="aspect-[4/5] w-full overflow-hidden mb-4">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover img-adaptive" />
      </div>
      <h3 className="text-4xl font-serif text-grand-dark dark:text-white mb-2">{project.title}</h3>
      <div className="flex justify-between items-center border-t border-gray-200 dark:border-white/20 pt-4">
        <span className="text-grand-gold uppercase text-xs tracking-widest">{project.category}</span>
        <ArrowRight className="text-grand-dark dark:text-white" size={20} />
      </div>
    </motion.div>
  );
};

export default Projects;
