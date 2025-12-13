import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '../data/images';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll Handler
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu and lock/unlock body scroll
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
  ];

  const navbarClasses = scrolled
    ? "bg-white/80 dark:bg-grand-dark/80 backdrop-blur-xl shadow-sm py-4 border-b border-white/20 dark:border-white/10 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-grand-dark/60"
    : "bg-transparent py-6 border-b border-transparent";

  const textColor = scrolled 
    ? "text-gold-outline dark:text-white" 
    : "text-gold-outline dark:text-white";
  const logoSrc = scrolled ? assets.logoWords : assets.logo;
  // Use specific dark color for menu button when scrolled to ensure visibility
  const menuButtonColor = scrolled 
    ? "text-gold-outline dark:text-white" 
    : "text-gold-outline dark:text-white";

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navbarClasses}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50 relative">
             <img 
               src={logoSrc} 
               alt="Grandkonsul" 
               className="h-12 md:h-16 object-contain transition-all duration-300" 
             />
             {!scrolled && (
               <span className="font-serif text-2xl font-bold text-gold-outline dark:text-white tracking-widest hidden lg:block ml-2">
                 GRANDKONSUL
               </span>
             )}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.title} 
                to={link.href}
                className={`text-sm font-bold uppercase tracking-widest hover:text-grand-gold transition-colors ${textColor}`}
              >
                {link.title}
              </Link>
            ))}
            
            <ThemeToggle />
            
            <Link 
              to="/contact"
              className={`px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-grand-gold/20 hover:scale-105 active:scale-95 ${
                 scrolled
                  ? "bg-grand-green text-white hover:bg-grand-gold dark:bg-grand-green dark:hover:bg-grand-gold"
                  : "bg-white text-grand-green hover:bg-grand-gold hover:text-white"
              }`}
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`md:hidden z-50 relative ${menuButtonColor}`}
          >
             {/* Note: We handle the Close Icon inside the Portal, this is just the Open Icon */}
             <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* --- PORTAL FOR MOBILE MENU (TELEPORTS TO BODY) --- */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
              animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
              exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              // z-[9999] ensures it is above EVERYTHING
              className="fixed inset-0 bg-white/95 dark:bg-grand-dark/95 backdrop-blur-2xl z-[9999] flex flex-col items-center justify-center gap-8 h-[100dvh] w-screen"
            >
              {/* Close Button Inside Portal */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-grand-dark dark:text-white p-2"
              >
                <X size={32} />
              </button>
              
              {/* Theme Toggle in Mobile Menu */}
              <div className="absolute top-6 left-6">
                <ThemeToggle />
              </div>

              {/* Links */}
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <Link 
                    to={link.href} 
                    className="text-4xl font-serif font-bold text-grand-dark dark:text-white hover:text-grand-gold transition-colors"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body // This attaches the menu directly to the <body> tag
      )}
    </>
  );
};

export default Navbar;
