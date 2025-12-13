import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Privacy = () => {
  return (
    <>
      <SEO title="Privacy Policy" description="How Grandkonsul collects and protects your data." />
      
      {/* Header */}
      <div className="bg-grand-green dark:bg-grand-dark pt-40 pb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-grand-gold uppercase tracking-widest text-sm">Last Updated: January 2025</p>
      </div>

      {/* Content */}
      <section className="py-20 bg-grand-light dark:bg-grand-dark">
        <div className="container mx-auto px-6 max-w-4xl bg-white dark:bg-white/5 p-10 md:p-16 rounded-lg shadow-sm border border-transparent dark:border-white/10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-headings:text-grand-dark dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-a:text-grand-gold prose-strong:text-grand-dark dark:prose-strong:text-white prose-li:text-gray-600 dark:prose-li:text-gray-300 prose-h3:text-grand-dark dark:prose-h3:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 max-w-none text-grand-dark dark:text-white"
          >
            <h3>1. Introduction</h3>
            <p>
              Grandkonsul Ltd ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>

            <h3>2. Information We Collect</h3>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
            </ul>

            <h3>3. How We Use Your Information</h3>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
              <li>To perform the contract we are about to enter into or have entered into with you (e.g., Property Development or Relocation Services).</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>To send you communications regarding project updates or service inquiries.</li>
            </ul>

            <h3>4. Data Security</h3>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <h3>5. Contact Us</h3>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at: <br/>
              <strong>Email:</strong> info@grandkonsul.com <br/>
              <strong>Phone:</strong> +44 (0) 123 456 789
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Privacy;

