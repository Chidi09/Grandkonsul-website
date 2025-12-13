import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import SEO from '../components/SEO';

const Projects = () => {
  return (
    <>
      <SEO title="Our Projects" description="View Grandkonsul's portfolio of luxury developments and successful relocations." />
      
      <div className="bg-grand-dark pt-32 pb-16 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif font-bold mb-4"
        >
          Our Portfolio
        </motion.h1>
        <p className="text-grand-gold uppercase tracking-widest text-sm font-semibold">
          Excellence in Every Detail
        </p>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/5] cursor-pointer"
              >
                {/* Background Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-grand-green/90 via-grand-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-grand-gold text-xs font-bold uppercase tracking-widest mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

