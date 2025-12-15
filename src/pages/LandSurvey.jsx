import { motion } from 'framer-motion';
import { FileText, Map, CheckCircle2, Download, Ruler, Compass, Users, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { assets } from '../data/images';

const LandSurvey = () => {
  // Data extracted directly from your uploaded PDF text layers
  const featuredSurveys = [
    { 
      title: "Grandkonsul Survey Team", 
      subtitle: "Papalanto/Sagamu Road Scheme",
      image: assets.surveys.pcg,
      location: "Moose/Ijoko Village, via Papalanto, Ifo LGA, Ogun State",
      area: "44.558 Hectares (110.106 Acres)",
      planNo: "OG/1068/2023/0",
      surveyor: "Grandkonsul Survey Team",
      desc: "Full perimeter survey showing boundary lines, coordinates (760521mN / 530519mE), and road access points.",
      files: [
        { name: "PCG NIG LTD ALONG PAPA-SAGAMU ROAD ENCHR wth nbd ff.pdf", label: "Land Survey" }
      ]
    },
    { 
      title: "Grandkonsul Survey Team", 
      subtitle: "Land Encroachment Map",
      image: assets.surveys.olowofela,
      location: "Erunbe Stream Axis, Ewekoro LGA",
      area: "31.622 Hectares (78.137 Acres)",
      planNo: "Satellite Mapping",
      surveyor: "Grandkonsul Survey Team",
      desc: "Topographical map detailing the Erunbe stream path and seasonal water flow boundaries.",
      files: [
        { name: "MS.LAIDE OLOWOFELA LAND ENCRO.pdf", label: "Land Survey" },
        { name: "plan shewing the difference in stream path.pdf", label: "Stream Path Plan" }
      ]
    }
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
    </>
  );
};

export default LandSurvey;

