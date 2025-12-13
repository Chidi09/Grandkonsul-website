import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { assets } from '../data/images';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  // Menu Animation Variants
  const menuVars = {
    initial: { scaleY: 0 },
    animate: { scaleY: 1, transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] } },
    exit: { scaleY: 0, transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  const linkVars = {
    initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
    open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] } }
  };

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header className={clsx(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500",
      scrolled || isOpen ? "py-4" : "py-8"
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="relative z-50 flex items-center group">
          <img 
            src={assets.logoWords} 
            alt="Grandkonsul" 
            className={clsx("h-16 md:h-20 lg:h-24 transition-opacity duration-300", isOpen ? "opacity-100" : (scrolled ? "opacity-100" : "opacity-100 mix-blend-difference"))}
          />
        </Link>

        {/* Desktop Menu - Minimalist */}
        <div className="hidden md:flex items-center gap-12">
           {navLinks.map((link) => (
             <Link key={link.title} to={link.href} className="relative group overflow-hidden">
                <span className={clsx("block text-sm font-medium tracking-widest transition-transform duration-300 group-hover:-translate-y-full", scrolled ? "text-grand-dark" : "text-white mix-blend-difference")}>
                  {link.title}
                </span>
                <span className="absolute top-0 left-0 block text-sm font-medium tracking-widest text-grand-gold transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                  {link.title}
                </span>
             </Link>
           ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden relative z-50 text-grand-gold focus:outline-none"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* FULL SCREEN MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-grand-green origin-top h-screen flex flex-col justify-center px-8 z-40"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.div
                    variants={linkVars}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link 
                      to={link.href} 
                      className="text-5xl md:text-7xl font-serif font-bold text-white hover:text-grand-gold transition-colors"
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
            
            <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
               className="absolute bottom-10 left-8 text-white/50 text-sm"
            >
               <p>Lagos • London • Dubai</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
