import { motion } from 'framer-motion';
import { FileText, Map, CheckCircle2, Download, Ruler, Compass, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const LandSurvey = () => {
  // Real data extracted from PDFs
  const featuredSurveys = [
    { 
      title: "PCG Nigeria Limited", 
      subtitle: "Papalanto/Sagamu Road Scheme",
      location: "Moose/Ijoko Village, via Papalanto, Ifo Local Govt. Area, Ogun State",
      area: "44.558 Hectares (110.106 Acres)",
      planNo: "OG/1068/2023/0",
      surveyor: "Adebowale A. (fnis)",
      desc: "Comprehensive survey plan showing property boundaries along the Papa-Sagamu Road axis.",
      files: [
        { name: "PCG NIG LTD ALONG PAPA-SAGAMU ROAD ENCHR wth nbd ff.pdf", label: "Land Survey" }
      ]
    },
    { 
      title: "Olowofela / Aromokun Village", 
      subtitle: "Uchenna Adedayo Ubachukwu Scheme",
      location: "Off Sagamu/Papalanto Expressway, Ewekoro Local Govt. Area",
      area: "41.953 Hectares (103.665 Acres)",
      planNo: "Scale 1:5000",
      surveyor: "Registered Surveyor",
      desc: "Detailed mapping of the Olowofela and Aromokun village expanse, via Olorunsogo Village.",
      files: [
        { name: "MS.LAIDE OLOWOFELA LAND ENCRO.pdf", label: "Land Survey" },
        { name: "plan shewing the difference in stream path.pdf", label: "Stream Path Plan" }
      ]
    },
    { 
      title: "Project Nexus Development", 
      subtitle: "Itori, Ogun State",
      location: "Itori, Ogun State",
      area: "19,449.577 SQM",
      planNo: "Sheet A101",
      surveyor: "James Cubitt Resources",
      desc: "Conceptual layout for a residential zone featuring bungalows and apartment blocks.",
      files: [
        { name: "Nexus - Conceptual layout- 09-05-24.pdf", label: "Conceptual Layout" }
      ]
    }
  ];

  const otherDocuments = [
    { name: "Estate Development Presentation.pdf", label: "Estate Development Presentation" },
    { name: "Staff Acc + Guest House Proposal 211124.pdf", label: "Staff Accommodation Proposal" }
  ];

  return (
    <>
      <SEO title="Land Survey & Documentation" description="Verified land surveys and legal documentation for Grandkonsul properties." />
      
      {/* Header */}
      <div className="bg-grand-green dark:bg-grand-dark pt-40 pb-20 text-center px-6 transition-colors duration-500">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
        >
          Technical <span className="text-grand-gold">Data</span>
        </motion.h1>
        <p className="text-gray-100 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          We believe in absolute transparency. Review the specific survey plans, hectares, and technical coordinates for our prime developments.
        </p>
      </div>

      {/* --- DETAILED SURVEY PLANS --- */}
      <section className="py-20 bg-grand-light dark:bg-grand-gray transition-colors duration-500">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-grand-green text-white rounded-lg"><Map size={24} /></div>
            <h2 className="text-3xl font-serif font-bold text-grand-dark dark:text-white">Verified Survey Plans</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {featuredSurveys.map((survey, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-white/5 rounded-xl shadow-sm border border-gray-100 dark:border-white/10 hover:border-grand-gold transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Visual Placeholder */}
                <div className="h-48 bg-gray-200 dark:bg-black/20 flex flex-col items-center justify-center border-b border-gray-100 dark:border-white/10 group cursor-pointer relative">
                   <Map size={40} className="text-gray-400 dark:text-gray-500 mb-2 group-hover:scale-110 transition-transform" />
                   <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">View Plan Image</span>
                   <div className="absolute inset-0 bg-grand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-serif font-bold text-grand-dark dark:text-white mb-1">{survey.title}</h3>
                  <p className="text-grand-gold text-xs font-bold uppercase tracking-wider mb-4">{survey.subtitle}</p>
                  
                  {/* DOWNLOADABLE SURVEY PLANS */}
                  <div className="w-full mb-6 space-y-3">
                    {survey.files.map((file, fileIndex) => (
                      <a
                        key={fileIndex}
                        href={`/${encodeURIComponent(file.name)}`}
                        download
                        className="w-full bg-gray-100 dark:bg-white/10 rounded-lg p-3 flex items-center justify-between border border-gray-200 dark:border-white/20 hover:border-grand-gold hover:bg-gray-200 dark:hover:bg-white/20 transition-all group"
                      >
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 bg-grand-green dark:bg-grand-gold rounded">
                            <FileText size={16} className="text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-grand-dark dark:text-white text-xs">{file.label}</p>
                          </div>
                        </div>
                        <Download size={16} className="text-grand-gold group-hover:translate-y-1 transition-transform" />
                      </a>
                    ))}
                  </div>
                  
                  <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300 flex-grow">
                    <div className="flex gap-3">
                      <Compass size={18} className="text-grand-green shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{survey.location}</span>
                    </div>
                    <div className="flex gap-3">
                      <Ruler size={18} className="text-grand-green shrink-0 mt-0.5" />
                      <span><strong>Area:</strong> {survey.area}</span>
                    </div>
                    {survey.planNo && (
                      <div className="flex gap-3">
                        <FileText size={18} className="text-grand-green shrink-0 mt-0.5" />
                        <span><strong>Plan No:</strong> {survey.planNo}</span>
                      </div>
                    )}
                    <div className="flex gap-3">
                      <Users size={18} className="text-grand-green shrink-0 mt-0.5" />
                      <span><strong>Surveyor:</strong> {survey.surveyor}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-white/10">
                    <p className="text-xs text-gray-400 dark:text-gray-500 italic leading-relaxed">
                      "{survey.desc}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 bg-white dark:bg-grand-dark transition-colors duration-500">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-2xl font-serif font-bold text-grand-dark dark:text-white mb-6">Need Legal Verification?</h2>
           <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
             Our legal team can walk you through the Deed of Assignment, C of O, and Receipt of Payment processes.
           </p>
           <Link to="/contact" className="inline-block bg-grand-gold text-white px-8 py-3 rounded-full font-bold hover:bg-grand-green transition-colors">
             Contact Legal Team
           </Link>
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

