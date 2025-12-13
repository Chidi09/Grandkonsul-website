import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '../data/images';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];

  // Logic: Home is transparent at top, Glass when scrolled. 
  // Other pages are ALWAYS Glass.
  const navbarClasses = isHome && !scrolled
    ? "bg-transparent py-6 border-b border-transparent"
    : "bg-white/80 backdrop-blur-md shadow-sm py-4 border-b border-white/20 supports-[backdrop-filter]:bg-white/60";

  // Text Color Logic
  const textColor = isHome && !scrolled ? "text-white" : "text-grand-dark";
  const logoSrc = isHome && !scrolled ? assets.logo : assets.logoWords;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navbarClasses}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo - Significantly Larger */}
        <Link to="/" className="flex items-center gap-2 z-50 relative">
           <img 
             src={logoSrc} 
             alt="Grandkonsul" 
             className="h-12 md:h-16 object-contain transition-all duration-300" 
           />
           {/* Fallback Text if Logo image is just icon */}
           {isHome && !scrolled && (
             <span className="font-serif text-2xl font-bold text-white tracking-widest hidden lg:block ml-2">
               GRANDKONSUL
             </span>
           )}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.title} 
              to={link.href}
              className={`text-sm font-bold uppercase tracking-widest hover:text-grand-gold transition-colors ${textColor}`}
            >
              {link.title}
            </Link>
          ))}
          
          <Link 
            to="/contact"
            className={`px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
               isHome && !scrolled
                ? "bg-white text-grand-green hover:bg-grand-gold hover:text-white"
                : "bg-grand-green text-white hover:bg-grand-gold"
            }`}
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`md:hidden z-50 ${textColor}`}
        >
          {isOpen ? <X size={32} className="text-grand-dark" /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.title} 
                to={link.href}
                className="text-4xl font-serif font-bold text-grand-dark hover:text-grand-gold transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
