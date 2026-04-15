import { useState, useEffect, lazy, Suspense } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { HowWeWork } from './components/HowWeWork';
import { Pricing } from './components/Pricing';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { Toaster } from 'sonner@2.0.3';

// Lazy load modal for better initial load performance
const CaseStudyModal = lazy(() => import('./components/CaseStudyModal').then(module => ({ default: module.CaseStudyModal })));

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<number | null>(null);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add lang attribute for SEO
    document.documentElement.lang = 'en';
  }, []);

  return (
    <div className="text-white" style={{ backgroundColor: '#0B1120' }}>
      <SEOHead />
      <Toaster position="top-right" richColors />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <HowWeWork />
        <Pricing />
        <Portfolio onViewCase={setSelectedCaseStudy} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {selectedCaseStudy !== null && (
        <Suspense fallback={<div className="fixed inset-0 bg-black/50 flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
          <CaseStudyModal
            caseStudyId={selectedCaseStudy}
            onClose={() => setSelectedCaseStudy(null)}
          />
        </Suspense>
      )}
    </div>
  );
}