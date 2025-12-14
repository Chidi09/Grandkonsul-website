import { motion } from 'framer-motion';
import { FileText, Map, CheckCircle2, Download, Ruler, Compass, Users, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { assets } from '../data/images';

const LandSurvey = () => {
  // Data extracted directly from your uploaded PDF text layers
  const featuredSurveys = [
    { 
      title: "P.C.G Nigeria Limited", 
      subtitle: "Papalanto/Sagamu Road Scheme",
      image: assets.surveys.pcg,
      location: "Moose/Ijoko Village, via Papalanto, Ifo LGA, Ogun State",
      area: "44.558 Hectares (110.106 Acres)",
      planNo: "OG/1068/2023/0",
      surveyor: "Adebowale A. (fnis)",
      desc: "Full perimeter survey showing boundary lines, coordinates (760521mN / 530519mE), and road access points.",
      files: [
        { name: "PCG NIG LTD ALONG PAPA-SAGAMU ROAD ENCHR wth nbd ff.pdf", label: "Land Survey" }
      ]
    },
    { 
      title: "Ms. Laide Olowofela", 
      subtitle: "Land Encroachment Map",
      image: assets.surveys.olowofela,
      location: "Erunbe Stream Axis, Ewekoro LGA",
      area: "31.622 Hectares (78.137 Acres)",
      planNo: "Satellite Mapping",
      surveyor: "Registered Surveyor",
      desc: "Topographical map detailing the Erunbe stream path and seasonal water flow boundaries.",
      files: [
        { name: "MS.LAIDE OLOWOFELA LAND ENCRO.pdf", label: "Land Survey" },
        { name: "plan shewing the difference in stream path.pdf", label: "Stream Path Plan" }
      ]
    },
    { 
      title: "Uchenna Adedayo Ubachukwu", 
      subtitle: "Olorunsogo Village Scheme",
      image: assets.surveys.uchenna,
      location: "Off Sagamu/Papalanto Expressway, Ewekoro LGA",
      area: "41.953 Hectares (103.665 Acres)",
      planNo: "Zone 31 UTM",
      surveyor: "Registered Surveyor",
      desc: "Detailed survey of Olowofela/Aromokun Village showing pipeline setbacks and road networks.",
      files: [
        { name: "plan shewing the difference in stream path.pdf", label: "Stream Path Plan" }
      ]
    }
  ];

  const documents = [
    { title: "Receipt of Payment", desc: "Official proof of your investment." },
    { title: "Deed of Assignment", desc: "Legal transfer of ownership rights." },
    { title: "Registered Survey", desc: "Government-approved land mapping." },
    { title: "Certificate of Occupancy", desc: "State-issued land title (C of O)." }
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
          We believe in absolute transparency. Review the verified survey plans and legal documentation for our prime developments.
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
              <div key={i} className="bg-white dark:bg-white/5 rounded-xl shadow-sm border border-gray-100 dark:border-white/10 hover:border-grand-gold transition-all duration-300 overflow-hidden flex flex-col group">
                {/* ACTUAL SURVEY IMAGE */}
                <div className="h-64 bg-gray-200 dark:bg-black/20 overflow-hidden relative cursor-pointer border-b border-gray-100 dark:border-white/10">
                   <img 
                     src={survey.image} 
                     alt={survey.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 img-adaptive" 
                   />
                   {/* Overlay Icon */}
                   <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <ZoomIn className="text-white w-10 h-10" />
                   </div>
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
                      <Compass size={18} className="text-grand-green shrink-0" />
                      <span className="leading-relaxed">{survey.location}</span>
                    </div>
                    <div className="flex gap-3">
                      <Ruler size={18} className="text-grand-green shrink-0" />
                      <span><strong>Area:</strong> {survey.area}</span>
                    </div>
                    {survey.planNo && (
                      <div className="flex gap-3">
                        <FileText size={18} className="text-grand-green shrink-0" />
                        <span><strong>Plan No:</strong> {survey.planNo}</span>
                      </div>
                    )}
                    <div className="flex gap-3">
                      <Users size={18} className="text-grand-green shrink-0" />
                      <span><strong>Surveyor:</strong> {survey.surveyor}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-white/10">
                    <p className="text-xs text-gray-400 dark:text-gray-500 italic leading-relaxed">
                      "{survey.desc}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DOCUMENTATION LIST --- */}
      <section className="py-20 bg-white dark:bg-grand-dark transition-colors duration-500">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-grand-gold text-white rounded-lg"><FileText size={24} /></div>
            <h2 className="text-3xl font-serif font-bold text-grand-dark dark:text-white">Legal Documentation</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc, i) => (
              <div key={i} className="group relative bg-grand-light dark:bg-white/5 p-6 rounded-xl border border-transparent hover:border-grand-gold transition-all duration-300">
                <div className="w-full aspect-[1/1.4] bg-white dark:bg-black/20 rounded border border-gray-200 dark:border-white/10 mb-6 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
                   <div className="absolute inset-0 bg-grand-gold/5 group-hover:bg-grand-gold/10 transition-colors"></div>
                   <FileText size={40} className="text-grand-gold/50 mb-2" />
                   <span className="text-[10px] uppercase font-bold text-grand-dark/30 dark:text-white/30 text-center px-4">{doc.title}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-grand-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-grand-dark dark:text-white text-sm">{doc.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{doc.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LandSurvey;

