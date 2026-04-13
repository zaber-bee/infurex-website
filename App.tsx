import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { HowWeWork } from './components/HowWeWork';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Toaster } from 'sonner@2.0.3';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<number | null>(null);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="text-white" style={{ backgroundColor: '#0B1120' }}>
      <Toaster position="top-right" richColors />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <HowWeWork />
      <Portfolio onViewCase={setSelectedCaseStudy} />
      <Testimonials />
      <Contact />
      <Footer />
      
      {selectedCaseStudy !== null && (
        <CaseStudyModal
          caseStudyId={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </div>
  );
}