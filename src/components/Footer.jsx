import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import { assets } from '../data/images';

const Footer = () => {
  return (
    <footer className="bg-grand-dark text-white pt-20 pb-10 border-t border-grand-gold/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-4 mb-8">
               <img src={assets.logo} alt="Grandkonsul Logo" className="h-12 w-auto" />
               <span className="font-serif text-2xl font-bold tracking-wide">GRAND<span className="text-grand-gold">KONSUL</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Partner with Grandkonsul for smart property development and hassle-free relocations. Trusted expertise, bespoke service, and a commitment to excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-grand-gold hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-grand-gold hover:text-white transition-all"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-grand-gold hover:text-white transition-all"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Quick Links (Replaces long service list) */}
          <div>
            <h4 className="text-grand-gold font-serif font-bold mb-8 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white hover:translate-x-2 transition-all inline-block">Home</Link></li>
              <li><Link to="/about" className="hover:text-white hover:translate-x-2 transition-all inline-block">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white hover:translate-x-2 transition-all inline-block">Our Services</Link></li>
              <li><Link to="/projects" className="hover:text-white hover:translate-x-2 transition-all inline-block">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-white hover:translate-x-2 transition-all inline-block">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-grand-gold font-serif font-bold mb-8 text-lg">Contact Us</h4>
            <ul className="space-y-6 text-sm text-gray-400">
              <li className="flex gap-4 items-start">
                <MapPin size={20} className="text-grand-gold shrink-0 mt-1" />
                <span>6391 Elgin St. Celina,<br/>Delaware 10299</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone size={20} className="text-grand-gold shrink-0" />
                <span>+44 (0) 123 456 789</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail size={20} className="text-grand-gold shrink-0" />
                <span>info@grandkonsul.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
          <p>&copy; {new Date().getFullYear()} Grandkonsul Ltd. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
