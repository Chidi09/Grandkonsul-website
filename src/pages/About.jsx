import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about Grandkonsul's mission to shape how you move and live through expert property development." 
      />
      
      {/* --- Page Header --- */}
      <div className="bg-grand-green pt-32 pb-16 text-center text-white relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif font-bold mb-4 relative z-10"
        >
          Who We Are
        </motion.h1>
        <p className="text-grand-gold uppercase tracking-widest text-sm font-semibold relative z-10">
          Shaping Spaces, Connecting Lives
        </p>
      </div>

      {/* --- The Story Section --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif font-bold text-grand-green mb-6">
              We Shape How You <span className="text-grand-gold">Move and Live</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              With deep roots in property development and relocation services, our mission is to deliver excellence through thoughtful planning, reliable execution, and a client-first mindset.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether it's helping families settle into new homes, supporting companies with seamless staff relocations, or managing ground-up construction projects, we bring vision and value to every project. We are not just builders; we are partners in your journey.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-full h-[400px] bg-gray-200 rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop" 
                alt="Corporate Office" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Gold border accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-grand-gold -z-10 rounded-sm"></div>
          </motion.div>
        </div>
      </section>

      {/* --- Mission & Vision (Dark Section) --- */}
      <section className="py-20 bg-grand-dark text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 border-l-4 border-grand-gold backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4 text-grand-gold">
                <Target size={32} />
                <h3 className="text-2xl font-serif font-bold">Our Mission</h3>
              </div>
              <h4 className="text-xl font-medium mb-3">Solutions built for life and movement</h4>
              <p className="text-gray-400 leading-relaxed">
                To provide exceptional property development and relocation solutions that enhance lives, build communities, and deliver lasting value — guided by integrity, innovation, and a deep understanding of our clients' needs.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 p-8 border-l-4 border-grand-gold backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4 text-grand-gold">
                <Eye size={32} />
                <h3 className="text-2xl font-serif font-bold">Our Vision</h3>
              </div>
              <h4 className="text-xl font-medium mb-3">Shaping spaces. Connecting lives.</h4>
              <p className="text-gray-400 leading-relaxed">
                To be a trusted leader in property and relocation services across Africa and beyond — known for excellence, reliability, and a personalized approach to every project we deliver.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- Core Values --- */}
      <section className="py-20 bg-grand-light">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-grand-green">What We Stand For</h2>
          <div className="w-20 h-1 bg-grand-gold mx-auto mt-4"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow rounded-lg text-center">
            <div className="w-16 h-16 bg-grand-green/10 text-grand-green rounded-full flex items-center justify-center mx-auto mb-6">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Expertise that Delivers</h3>
            <p className="text-gray-600">Decades of combined experience ensuring every detail is handled with professional precision.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow rounded-lg text-center">
            <div className="w-16 h-16 bg-grand-green/10 text-grand-green rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Personalized Service</h3>
            <p className="text-gray-600">We listen, adapt, and tailor our solutions to fit the unique lifestyle and goals of every client.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow rounded-lg text-center">
            <div className="w-16 h-16 bg-grand-green/10 text-grand-green rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Integrity & Trust</h3>
            <p className="text-gray-600">Transparency is key. We build lasting relationships founded on honesty and ethical practices.</p>
          </motion.div>

        </motion.div>
      </section>

      {/* --- Stats Banner --- */}
      <section className="py-16 bg-grand-green text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            <div>
              <p className="text-4xl md:text-5xl font-serif font-bold text-grand-gold mb-2">10+</p>
              <p className="text-sm tracking-wider uppercase">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif font-bold text-grand-gold mb-2">98</p>
              <p className="text-sm tracking-wider uppercase">Satisfied Clients</p>
            </div>
             <div>
              <p className="text-4xl md:text-5xl font-serif font-bold text-grand-gold mb-2">150</p>
              <p className="text-sm tracking-wider uppercase">Completed Projects</p>
            </div>
             <div>
              <p className="text-4xl md:text-5xl font-serif font-bold text-grand-gold mb-2">12+</p>
              <p className="text-sm tracking-wider uppercase">Countries Reached</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

