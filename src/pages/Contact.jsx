import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  const empty = { firstName: '', lastName: '', email: '', message: '', website: '' };
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'Grandkonsul contact form' }),
      });
      if (res.ok) {
        setStatus('sent');
        setForm(empty);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setError('Network error. Please check your connection or call +234 812 593 5055.');
      setStatus('error');
    }
  };

  return (
    <>
      <SEO title="Contact Us" description="Get in touch with Grandkonsul for your property development and relocation needs." />
      
      <div className="bg-grand-green dark:bg-[#003d33] pt-32 pb-16 text-center text-white">
        <motion.h1 
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-4xl md:text-5xl font-serif font-bold mb-4"
        >
          Get in Touch
        </motion.h1>
      </div>

      <section className="py-20 bg-grand-light dark:bg-grand-dark">
        <div className="container mx-auto px-6">
          <div className="bg-white dark:bg-white/5 rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-transparent dark:border-white/10">
            
            {/* Contact Information (Left Side) - Adaptive */}
            <div className="bg-grand-green dark:bg-grand-dark text-white p-10 md:w-2/5 flex flex-col justify-between relative transition-colors duration-500">
              <div>
                <h3 className="text-2xl font-serif font-bold text-grand-gold mb-6">Contact Information</h3>
                <p className="text-white/80 dark:text-gray-400 mb-8 leading-relaxed">
                  Ready to start your next project? Reach out to our team of experts today.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-grand-gold mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-white">Visit Us</h4>
                      <p className="text-white/80 dark:text-gray-400 text-sm">
                        Itori, Ewekoro LGA, Abeokuta,<br/>Ogun State, Nigeria
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="text-grand-gold mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-white">Phone</h4>
                      <p className="text-white/80 dark:text-gray-400 text-sm">+44 7846 324245</p>
                      <p className="text-white/80 dark:text-gray-400 text-sm">+234 812 593 5055</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="text-grand-gold mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-white">Email</h4>
                      <p className="text-white/80 dark:text-gray-400 text-sm">info@grandkonsul.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="text-grand-gold mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-white">Hours</h4>
                      <p className="text-white/80 dark:text-gray-400 text-sm">Mon-Fri: 9am - 6pm</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Circle */}
              <div className="hidden md:block w-32 h-32 bg-grand-gold/10 rounded-full absolute bottom-[-50px] left-[-50px]"></div>
            </div>

            {/* Contact Form (Right Side) */}
            <div className="p-10 md:w-3/5">
              {status === 'sent' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <CheckCircle className="text-grand-gold mb-4" size={48} />
                  <h3 className="text-2xl font-serif font-bold text-grand-dark dark:text-white mb-2">Thank you!</h3>
                  <p className="text-gray-600 dark:text-gray-400">We have received your message and will be in touch shortly.</p>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="website" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-sm focus:outline-none focus:border-grand-gold focus:ring-1 focus:ring-grand-gold transition-colors text-grand-dark dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="John" name="firstName" value={form.firstName} onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-sm focus:outline-none focus:border-grand-gold focus:ring-1 focus:ring-grand-gold transition-colors text-grand-dark dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="Doe" name="lastName" value={form.lastName} onChange={handleChange} required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-sm focus:outline-none focus:border-grand-gold focus:ring-1 focus:ring-grand-gold transition-colors text-grand-dark dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="john@example.com" name="email" value={form.email} onChange={handleChange} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-sm focus:outline-none focus:border-grand-gold focus:ring-1 focus:ring-grand-gold transition-colors text-grand-dark dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="How can we help you?" name="message" value={form.message} onChange={handleChange} required></textarea>
                </div>
                {status === 'error' && <p className="text-sm text-red-600 dark:text-red-400" role="alert">{error}</p>}
                <button type="submit" disabled={status === 'sending'} className="disabled:opacity-60 bg-grand-green dark:bg-grand-gold text-white px-8 py-3 rounded-sm font-semibold hover:bg-grand-gold dark:hover:bg-grand-gold/90 transition-colors flex items-center gap-2">
                  {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={18} />
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

