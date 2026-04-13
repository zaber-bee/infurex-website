import { motion, AnimatePresence } from 'motion/react';
import { X, TrendingUp, Users, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CaseStudyModalProps {
  caseStudyId: number;
  onClose: () => void;
}

export function CaseStudyModal({ caseStudyId, onClose }: CaseStudyModalProps) {
  // Case study data mapped to each portfolio item
  const caseStudies: Record<number, any> = {
    1: {
      title: 'Luxury Agent Portfolio',
      client: 'Sarah Mitchell Real Estate',
      category: 'For Agents',
      image: 'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NjI2MTI4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'Sarah needed a website that would match the luxury properties she represents. Her old site was outdated and didn\'t reflect her premium brand, resulting in lost opportunities with high-value clients.',
      solution: 'We designed and developed a sophisticated website with high-end visuals, seamless property showcases, and integrated IDX for real-time listings. The design emphasized elegance while maintaining excellent user experience and mobile responsiveness.',
      results: [
        { metric: '425%', label: 'Increase in Web Leads', icon: TrendingUp },
        { metric: '12,500+', label: 'Monthly Visitors', icon: Users },
        { metric: '3 Weeks', label: 'Delivery Time', icon: Clock },
      ],
      technologies: ['Next.js', 'Tailwind CSS', 'IDX Integration', 'CMS'],
      testimonial: {
        quote: 'Infurex transformed my online presence completely. The website is stunning and I\'m getting quality leads every day. Best investment I\'ve made in my business.',
        author: 'Sarah Mitchell',
        role: 'Luxury Real Estate Agent',
        initial: 'S',
      },
    },
    2: {
      title: 'Modern Property Showcase',
      client: 'Marcus Johnson Properties',
      category: 'Landing Pages',
      image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyNjk1Mjk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'Marcus wanted a high-converting landing page for his premium property listings that could capture leads from social media ads and showcase properties with stunning visuals.',
      solution: 'We created a conversion-optimized landing page with immersive property galleries, video tours, virtual staging capabilities, and a streamlined contact form with calendar integration for instant bookings.',
      results: [
        { metric: '380%', label: 'Conversion Rate Boost', icon: TrendingUp },
        { metric: '8,200+', label: 'Quality Leads', icon: Users },
        { metric: '2 Weeks', label: 'Launch Time', icon: Clock },
      ],
      technologies: ['React', 'Framer Motion', 'Video Optimization', 'Lead Capture'],
      testimonial: {
        quote: 'The landing page exceeded all expectations. My ad campaigns now convert at 3x the rate, and the booking calendar feature saves me hours every week.',
        author: 'Marcus Johnson',
        role: 'Property Specialist',
        initial: 'M',
      },
    },
    3: {
      title: 'Architectural Masterpiece',
      client: 'Elena Rodriguez Estates',
      category: 'For Agents',
      image: 'https://images.unsplash.com/photo-1627141234469-24711efb373c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBob3VzZXxlbnwxfHx8fDE3NjI2Mzg0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'Elena specializes in architecturally significant homes and needed a website that could highlight unique design features and appeal to discerning buyers with sophisticated taste.',
      solution: 'We built a visually striking website featuring large-scale imagery, interactive floor plans, architect information sections, and detailed property stories that emphasize architectural heritage and design excellence.',
      results: [
        { metric: '510%', label: 'Traffic Growth', icon: TrendingUp },
        { metric: '15,800+', label: 'Monthly Impressions', icon: Users },
        { metric: '4 Weeks', label: 'Build Duration', icon: Clock },
      ],
      technologies: ['Next.js', 'Three.js', '3D Tours', 'Advanced SEO'],
      testimonial: {
        quote: 'Finally, a website that does justice to the extraordinary properties I represent. My clients are impressed before they even schedule a viewing.',
        author: 'Elena Rodriguez',
        role: 'Architectural Real Estate Specialist',
        initial: 'E',
      },
    },
    4: {
      title: 'Premium Estate Portal',
      client: 'David Chen Realty Group',
      category: 'IDX',
      image: 'https://images.unsplash.com/photo-1527665830090-864a163d49ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYW5zaW9uJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYyNzE4ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'David\'s team needed a comprehensive IDX solution that could handle thousands of listings while maintaining fast performance and providing advanced search filters for luxury estate buyers.',
      solution: 'We developed a robust IDX-integrated platform with smart search algorithms, saved searches, property alerts, map-based search, and a sophisticated CRM integration for automated lead nurturing.',
      results: [
        { metric: '650%', label: 'Lead Quality Increase', icon: TrendingUp },
        { metric: '25,000+', label: 'Property Views/Month', icon: Users },
        { metric: '6 Weeks', label: 'Implementation', icon: Clock },
      ],
      technologies: ['Custom IDX', 'ElasticSearch', 'CRM Integration', 'Mobile App'],
      testimonial: {
        quote: 'This platform revolutionized how our team operates. The IDX integration is seamless and our leads are more qualified than ever before.',
        author: 'David Chen',
        role: 'Broker & Team Leader',
        initial: 'D',
      },
    },
    5: {
      title: 'Realtor Brand Identity',
      client: 'Amanda Foster Homes',
      category: 'For Agents',
      image: 'https://images.unsplash.com/photo-1652878530627-cc6f063e3947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyNjc3NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'Amanda was launching her personal real estate brand and needed a complete digital identity - from logo to website - that would position her as a trusted local expert.',
      solution: 'We created a comprehensive brand identity including logo design, color palette, photography style guide, and a website that showcases her personality, local market expertise, and client testimonials.',
      results: [
        { metric: '290%', label: 'Social Engagement', icon: TrendingUp },
        { metric: '6,400+', label: 'Profile Views', icon: Users },
        { metric: '3 Weeks', label: 'Brand Launch', icon: Clock },
      ],
      technologies: ['WordPress', 'Brand Guidelines', 'Photography', 'Social Integration'],
      testimonial: {
        quote: 'Infurex didn\'t just build me a website - they built my entire brand. I feel confident and professional in every client interaction now.',
        author: 'Amanda Foster',
        role: 'Independent Real Estate Agent',
        initial: 'A',
      },
    },
    6: {
      title: 'High-End Listing Page',
      client: 'Robert Williams Luxury Homes',
      category: 'Landing Pages',
      image: 'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NjI2MTI4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'Robert needed a dedicated showcase page for an exclusive $12M estate that would attract international buyers and create a sense of urgency and exclusivity.',
      solution: 'We designed a cinematic single-property landing page with drone video footage, interactive 3D walkthroughs, neighborhood highlights, investment analysis, and private inquiry forms for qualified buyers only.',
      results: [
        { metric: '180', label: 'Qualified Inquiries', icon: TrendingUp },
        { metric: '45,000+', label: 'International Views', icon: Users },
        { metric: '10 Days', label: 'Quick Turnaround', icon: Clock },
      ],
      technologies: ['Webflow', 'Matterport 3D', 'Video Production', 'Multilingual'],
      testimonial: {
        quote: 'The listing page positioned this property perfectly for the luxury market. We closed at asking price within 60 days with multiple competitive offers.',
        author: 'Robert Williams',
        role: 'Luxury Property Specialist',
        initial: 'R',
      },
    },
  };

  const caseStudy = caseStudies[caseStudyId] || caseStudies[1];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(11, 17, 32, 0.95)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal Content */}
        <motion.div
          className="relative bg-gradient-to-br from-neutral-900 to-black border border-gold/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/80 hover:bg-gold/20 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 group"
          >
            <X className="w-5 h-5 text-white group-hover:text-gold transition-colors" />
          </button>

          {/* Hero Image */}
          <div className="relative h-64 lg:h-96 overflow-hidden rounded-t-2xl">
            <ImageWithFallback
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-gold text-sm mb-2 tracking-wider">{caseStudy.category}</div>
              <h2 className="text-white">{caseStudy.title}</h2>
              <p className="text-white/70 mt-2">{caseStudy.client}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 lg:p-8 space-y-8">
            {/* Challenge */}
            <div>
              <h3 className="text-gold mb-3">The Challenge</h3>
              <p className="text-white/70 leading-relaxed">{caseStudy.challenge}</p>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-gold mb-3">Our Solution</h3>
              <p className="text-white/70 leading-relaxed">{caseStudy.solution}</p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-gold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-gold mb-4">Results & Impact</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {caseStudy.results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 rounded-xl p-6 text-center"
                  >
                    <result.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                    <div className="text-gold mb-1">{result.metric}</div>
                    <div className="text-white/60 text-sm">{result.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-neutral-800/50 to-black border border-gold/20 rounded-xl p-6">
              <div className="text-gold mb-4 text-4xl">"</div>
              <p className="text-white/80 italic mb-4 leading-relaxed">
                {caseStudy.testimonial.quote}
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center">
                  <span className="text-black">{caseStudy.testimonial.initial}</span>
                </div>
                <div>
                  <div className="text-white">{caseStudy.testimonial.author}</div>
                  <div className="text-white/60 text-sm">{caseStudy.testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}