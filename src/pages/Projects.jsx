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
      <section className="bg-grand-dark pt-40 pb-20 px-6">
        <div className="container mx-auto">
          <motion.h1 
             initial={{ opacity: 0, y: 100 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="text-6xl md:text-9xl font-serif font-bold text-grand-light tracking-tighter"
          >
            SELECTED <br/> <span className="text-grand-gold ml-10 md:ml-32">WORKS</span>
          </motion.h1>
          <div className="mt-8 flex justify-end">
             <p className="text-gray-400 max-w-sm text-right uppercase tracking-widest text-xs">
                Scroll to explore our <br/> defining moments in architecture.
             </p>
          </div>
        </div>
      </section>

      {/* --- DESKTOP HORIZONTAL SCROLL AREA --- */}
      {/* We make this container very tall (300vh) to give us 'room' to scroll horizontally */}
      <section ref={targetRef} className="hidden md:block relative h-[300vh] bg-grand-dark">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-20 pl-20">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            {/* End Card */}
            <div className="h-[500px] w-[400px] flex items-center justify-center text-white">
               <h2 className="text-6xl font-serif">Next Project?</h2>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- MOBILE VERTICAL STACK AREA --- */}
      <section className="md:hidden bg-grand-dark pb-20 px-4 flex flex-col gap-16">
        {projects.map((project, index) => (
           <MobileProjectCard key={project.id} project={project} index={index} />
        ))}
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="bg-grand-green py-32 flex justify-center items-center text-center">
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

// --- SUB COMPONENTS ---
const ProjectCard = ({ project }) => {
  return (
    <div className="relative group h-[600px] w-[450px] flex-shrink-0 cursor-pointer">
      <div className="w-full h-full overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>
      
      {/* Floating Title (Outside the image for artistic feel) */}
      <div className="absolute -bottom-12 -left-10 z-20 mix-blend-difference">
         <h3 className="text-6xl font-serif text-white font-bold whitespace-nowrap opacity-50 group-hover:opacity-100 transition-opacity duration-500">
           {project.title}
         </h3>
         <p className="text-grand-gold text-sm uppercase tracking-widest mt-2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           {project.location} — {project.category}
         </p>
      </div>
    </div>
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
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-4xl font-serif text-white mb-2">{project.title}</h3>
      <div className="flex justify-between items-center border-t border-white/20 pt-4">
        <span className="text-grand-gold uppercase text-xs tracking-widest">{project.category}</span>
        <ArrowRight className="text-white" size={20} />
      </div>
    </motion.div>
  );
};

export default Projects;
