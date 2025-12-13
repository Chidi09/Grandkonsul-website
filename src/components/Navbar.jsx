import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '../data/images';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll Handler (Universal)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];

  // Logic: Always transparent at top, Glass when scrolled.
  const navbarClasses = scrolled
    ? "bg-white/80 backdrop-blur-xl shadow-sm py-4 border-b border-white/20 supports-[backdrop-filter]:bg-white/60" // iOS Liquid Glass
    : "bg-transparent py-6 border-b border-transparent"; // Clean transparent

  // Text Logic: White at top, Dark when scrolled
  const textColor = scrolled ? "text-grand-dark" : "text-white";
  const logoSrc = scrolled ? assets.logoWords : assets.logo;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navbarClasses}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50 relative">
           <img 
             src={logoSrc} 
             alt="Grandkonsul" 
             className="h-12 md:h-16 object-contain transition-all duration-300" 
           />
           {/* Fallback Text */}
           {!scrolled && (
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
            className={`px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-grand-gold/20 hover:scale-105 active:scale-95 ${
               scrolled
                ? "bg-grand-green text-white hover:bg-grand-gold"
                : "bg-white text-grand-green hover:bg-grand-gold hover:text-white"
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

      {/* iOS Style Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // iOS Spring ease
            className="fixed inset-0 bg-white/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <Link 
                  to={link.href} 
                  className="text-4xl font-serif font-bold text-grand-dark hover:text-grand-gold transition-colors"
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
