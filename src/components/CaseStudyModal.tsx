import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { LuxuryAgentWebsite } from './portfolio-websites/LuxuryAgentWebsite';
import { PropertyShowcaseWebsite } from './portfolio-websites/PropertyShowcaseWebsite';
import { ArchitecturalWebsite } from './portfolio-websites/ArchitecturalWebsite';
import { IDXPortalWebsite } from './portfolio-websites/IDXPortalWebsite';
import { BrandIdentityWebsite } from './portfolio-websites/BrandIdentityWebsite';
import { ListingPageWebsite } from './portfolio-websites/ListingPageWebsite';

interface CaseStudyModalProps {
  caseStudyId: number;
  onClose: () => void;
}

export function CaseStudyModal({ caseStudyId, onClose }: CaseStudyModalProps) {
  // Scroll to contact section when user clicks "I want website like this"
  const handleRequestWebsite = () => {
    onClose();
    setTimeout(() => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  // Map case study IDs to their respective website components
  const renderWebsite = () => {
    switch (caseStudyId) {
      case 1:
        return <LuxuryAgentWebsite onRequestWebsite={handleRequestWebsite} />;
      case 2:
        return <PropertyShowcaseWebsite onRequestWebsite={handleRequestWebsite} />;
      case 3:
        return <ArchitecturalWebsite onRequestWebsite={handleRequestWebsite} />;
      case 4:
        return <IDXPortalWebsite onRequestWebsite={handleRequestWebsite} />;
      case 5:
        return <BrandIdentityWebsite onRequestWebsite={handleRequestWebsite} />;
      case 6:
        return <ListingPageWebsite onRequestWebsite={handleRequestWebsite} />;
      default:
        return <LuxuryAgentWebsite onRequestWebsite={handleRequestWebsite} />;
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Close Button - Fixed Position */}
        <button
          onClick={onClose}
          className="fixed top-6 right-6 z-[60] w-14 h-14 bg-black/80 hover:bg-red-600 border-2 border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group shadow-2xl backdrop-blur-sm"
          aria-label="Close"
        >
          <X className="w-7 h-7 text-white group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Modal Content - Full Screen with Scroll */}
        <motion.div
          className="absolute inset-0 overflow-y-auto"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderWebsite()}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
