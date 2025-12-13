import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '../data/images';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if we are on the Home page (transparent header) or other pages (solid header)
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

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled || !isHome ? "bg-white shadow-md py-3" : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo - Larger and positioned higher */}
        <Link to="/" className="flex items-center gap-2 z-50 -mt-2">
           {/* Swap logo based on background color for visibility */}
           <img 
             src={scrolled || !isHome ? assets.logoWords : assets.logoWords} 
             alt="Grandkonsul" 
             className="h-20 md:h-28 lg:h-32 object-contain" // Much larger logo
           />
           {/* If on home and not scrolled, show text manually if logo image doesn't have words */}
           {!scrolled && isHome && (
             <span className="font-serif text-xl font-bold text-white tracking-widest hidden md:block">
               GRANDKONSUL
             </span>
           )}
        </Link>

        {/* Desktop Menu - Simplified & Visible */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.title} 
              to={link.href}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-grand-gold ${
                scrolled || !isHome ? "text-grand-dark" : "text-white"
              }`}
            >
              {link.title}
            </Link>
          ))}
          
          <Link 
            to="/contact"
            className={`px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
              scrolled || !isHome 
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
          className={`md:hidden z-50 ${scrolled || !isHome ? "text-grand-dark" : "text-white"}`}
        >
          {isOpen ? <X size={28} className="text-grand-dark" /> : <Menu size={28} />}
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
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.title} 
                to={link.href}
                className="text-3xl font-serif font-bold text-grand-dark hover:text-grand-gold transition-colors"
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
