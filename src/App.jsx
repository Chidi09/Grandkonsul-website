import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ReactLenis } from '@studio-freight/react-lenis';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Helper to ensure page starts at top when navigating
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <ReactLenis root options={{ 
          lerp: 0.07,         // Lower = smoother/heavier feel (0.1 is standard, 0.05 is very heavy)
          duration: 1.2,      // How long the scroll slide takes
          smoothWheel: true,  // For mouse wheels
          smoothTouch: true,  // For mobile touch
          touchMultiplier: 1.5 // Makes mobile feel more responsive
        }}>
          <Router>
            <div className="noise-overlay"></div>
            <div className="flex flex-col min-h-screen bg-grand-light dark:bg-grand-dark selection:bg-grand-gold selection:text-white transition-colors duration-500">
              <Navbar />
              <ScrollToTop />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </ReactLenis>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;

