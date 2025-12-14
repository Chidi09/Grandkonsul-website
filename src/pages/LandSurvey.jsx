import { motion } from 'framer-motion';
import { FileText, Map, CheckCircle2, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const LandSurvey = () => {
  const documents = [
    { title: "Receipt of Payment", desc: "Official proof of your investment." },
    { title: "Deed of Assignment", desc: "Legal transfer of ownership rights." },
    { title: "Registered Survey", desc: "Government-approved land mapping." },
    { title: "Certificate of Occupancy", desc: "State-issued land title (C of O)." }
  ];

  const featuredSurveys = [
    { 
      title: "Olowofela / Aromokun Village", 
      location: "Ewekoro LGA, Ogun State", 
      area: "31.622 Hectares",
      files: [
        { name: "MS.LAIDE OLOWOFELA LAND ENCRO.pdf", label: "Land Survey" },
        { name: "plan shewing the difference in stream path.pdf", label: "Stream Path Plan" }
      ]
    },
    { 
      title: "PCG Nigeria Limited", 
      location: "Papa-Sagamu Road, Ifo LGA", 
      area: "44.558 Hectares",
      files: [
        { name: "PCG NIG LTD ALONG PAPA-SAGAMU ROAD ENCHR wth nbd ff.pdf", label: "Land Survey" }
      ]
    }
  ];

  const otherDocuments = [
    { name: "Estate Development Presentation.pdf", label: "Estate Development Presentation" },
    { name: "Nexus - Conceptual layout- 09-05-24.pdf", label: "Nexus Conceptual Layout" },
    { name: "Staff Acc + Guest House Proposal 211124.pdf", label: "Staff Accommodation Proposal" }
  ];

  return (
    <>
      <SEO title="Land Survey & Documentation" description="Verified land surveys and legal documentation for Grandkonsul properties." />
      
      {/* Header */}
      <div className="bg-grand-dark pt-40 pb-20 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
        >
          Land Survey <span className="text-grand-gold">&</span> Documentation
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Transparency is our core value. View our verified survey plans and the complete legal documentation package we provide with every purchase.
        </p>
      </div>

      {/* --- FEATURED SURVEY PLANS --- */}
      <section className="py-20 bg-grand-light dark:bg-grand-dark transition-colors duration-500">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-grand-green dark:bg-grand-gold text-white rounded-lg"><Map size={24} /></div>
            <h2 className="text-3xl font-serif font-bold text-grand-dark dark:text-white">Featured Survey Plans</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {featuredSurveys.map((survey, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-white/5 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-white/10 hover:border-grand-gold transition-all duration-300"
              >
                {/* DOWNLOADABLE SURVEY PLANS */}
                <div className="w-full mb-6 space-y-3">
                  {survey.files.map((file, fileIndex) => (
                    <a
                      key={fileIndex}
                      href={`/${encodeURIComponent(file.name)}`}
                      download
                      className="w-full bg-gray-100 dark:bg-white/10 rounded-lg p-4 flex items-center justify-between border border-gray-200 dark:border-white/20 hover:border-grand-gold hover:bg-gray-200 dark:hover:bg-white/20 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-grand-green dark:bg-grand-gold rounded">
                          <FileText size={20} className="text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-grand-dark dark:text-white text-sm">{file.label}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">PDF Document</p>
                        </div>
                      </div>
                      <Download size={20} className="text-grand-gold group-hover:translate-y-1 transition-transform" />
                    </a>
                  ))}
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-grand-dark dark:text-white mb-2">{survey.title}</h3>
                <div className="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <p><strong>Location:</strong> {survey.location}</p>
                  <p><strong>Area:</strong> {survey.area}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DOCUMENTATION CHECKLIST --- */}
      <section className="py-20 bg-white dark:bg-grand-dark transition-colors duration-500">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-grand-gold text-white rounded-lg"><FileText size={24} /></div>
            <h2 className="text-3xl font-serif font-bold text-grand-dark dark:text-white">Standard Documentation</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-grand-light dark:bg-white/5 p-6 rounded-xl border border-transparent hover:border-grand-gold transition-all duration-300"
              >
                {/* DOCUMENT PREVIEW */}
                <div className="w-full aspect-[1/1.4] bg-white dark:bg-black/20 rounded border border-gray-200 dark:border-white/10 mb-6 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
                   <div className="absolute inset-0 bg-grand-gold/5 transition-colors"></div>
                   <FileText size={40} className="text-grand-gold/50 mb-2" />
                   <span className="text-[10px] uppercase font-bold text-grand-dark/30 dark:text-white/30 text-center px-4">
                     {doc.title} Preview
                   </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-grand-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-grand-dark dark:text-white">{doc.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{doc.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 dark:text-gray-400 mb-6">Need to verify a specific allocation? Contact our legal team.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-grand-dark dark:bg-white text-white dark:text-grand-dark px-8 py-3 rounded-full font-bold hover:bg-grand-gold transition-colors">
              Request Verification
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* --- ADDITIONAL DOCUMENTS --- */}
      <section className="py-20 bg-grand-light dark:bg-grand-dark transition-colors duration-500">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-grand-gold text-white rounded-lg"><FileText size={24} /></div>
            <h2 className="text-3xl font-serif font-bold text-grand-dark dark:text-white">Additional Documents</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {otherDocuments.map((doc, i) => (
              <motion.a
                key={i}
                href={`/${encodeURIComponent(doc.name)}`}
                download
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10 hover:border-grand-gold transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-grand-green/10 dark:bg-grand-gold/20 rounded-lg">
                    <FileText size={24} className="text-grand-green dark:text-grand-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-grand-dark dark:text-white text-sm leading-tight mb-1">{doc.label}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">PDF Document</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-white/10">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Click to download</span>
                  <Download size={18} className="text-grand-gold group-hover:translate-y-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LandSurvey;

