import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-grand-dark text-white pt-16 pb-8 border-t border-grand-gold/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 bg-grand-gold rounded-full flex items-center justify-center text-grand-dark font-serif font-bold">G</div>
               <span className="font-serif text-xl font-bold tracking-wide">GRAND<span className="text-grand-gold">KONSUL</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Partner with Grandkonsul for smart property development and hassle-free relocations. Trusted expertise, bespoke service, and a commitment to excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-grand-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-grand-gold transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-grand-gold transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-grand-gold font-serif font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-white transition-colors">Property Development</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Relocation Services</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Joint Venture Engineering</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Service Accommodation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">HMO & Rent to Rent</Link></li>
            </ul>
          </div>

          {/* UK Office */}
          <div>
            <h4 className="text-grand-gold font-serif font-bold mb-6">UK Office</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <MapPin size={18} className="text-grand-gold shrink-0" />
                <span>6391 Elgin St. Celina,<br/>Delaware 10299</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-grand-gold shrink-0" />
                <span>+44 (0) 123 456 789</span>
              </li>
            </ul>
          </div>

          {/* Contact / Nigeria Office */}
          <div>
            <h4 className="text-grand-gold font-serif font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <Mail size={18} className="text-grand-gold shrink-0" />
                <span>info@grandkonsul.com</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-grand-gold shrink-0" />
                <span>+2 237 467 134-98</span>
              </li>
              <li className="mt-4 pt-4 border-t border-gray-800">
                <span className="block text-grand-gold mb-1 text-xs uppercase tracking-wider">Opening Hours</span>
                <span>Mon - Fri: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Grandkonsul Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

