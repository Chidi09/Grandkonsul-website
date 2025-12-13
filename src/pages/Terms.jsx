import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Terms = () => {
  return (
    <>
      <SEO title="Terms of Service" description="Rules and regulations for using Grandkonsul's website." />
      
      {/* Header */}
      <div className="bg-grand-green dark:bg-grand-dark pt-40 pb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-grand-gold uppercase tracking-widest text-sm">Last Updated: January 2025</p>
      </div>

      {/* Content */}
      <section className="py-20 bg-grand-light dark:bg-grand-dark">
        <div className="container mx-auto px-6 max-w-4xl bg-white dark:bg-white/5 p-10 md:p-16 rounded-lg shadow-sm border border-transparent dark:border-white/10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-headings:text-grand-dark dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-a:text-grand-gold prose-strong:text-grand-dark dark:prose-strong:text-white prose-h3:text-grand-dark dark:prose-h3:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 max-w-none text-grand-dark dark:text-white"
          >
            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>

            <h3>2. Intellectual Property</h3>
            <p>
              The Site and its original content, features, and functionality are owned by Grandkonsul Ltd and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>

            <h3>3. Use of Services</h3>
            <p>
              Our services, including Property Development, Relocation, and Joint Ventures, are subject to specific contracts signed offline. The information provided on this website is for general informational purposes and does not constitute a binding offer until a formal agreement is executed.
            </p>

            <h3>4. Limitation of Liability</h3>
            <p>
              In no event shall Grandkonsul Ltd, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>

            <h3>5. Governing Law</h3>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United Kingdom and Nigeria, without regard to its conflict of law provisions.
            </p>

            <h3>6. Changes to Terms</h3>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Terms;

