import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';

interface PortfolioProps {
  onViewCase: (id: number) => void;
}

export function Portfolio({ onViewCase }: PortfolioProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'For Agents', 'Landing Pages', 'IDX'];

  const portfolioItems = [
    {
      id: 1,
      title: 'Luxury Agent Portfolio',
      category: 'For Agents',
      image: 'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NjI2MTI4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Luxury real estate agent portfolio website',
    },
    {
      id: 2,
      title: 'Modern Property Showcase',
      category: 'Landing Pages',
      image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyNjk1Mjk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Modern property landing page design',
    },
    {
      id: 3,
      title: 'Architectural Masterpiece',
      category: 'For Agents',
      image: 'https://images.unsplash.com/photo-1627141234469-24711efb373c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBob3VzZXxlbnwxfHx8fDE3NjI2Mzg0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Modern architecture real estate website',
    },
    {
      id: 4,
      title: 'Premium Estate Portal',
      category: 'IDX',
      image: 'https://images.unsplash.com/photo-1527665830090-864a163d49ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYW5zaW9uJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYyNzE4ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Premium real estate IDX integration website',
    },
    {
      id: 5,
      title: 'Realtor Brand Identity',
      category: 'For Agents',
      image: 'https://images.unsplash.com/photo-1652878530627-cc6f063e3947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyNjc3NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Real estate agent brand identity website',
    },
    {
      id: 6,
      title: 'High-End Listing Page',
      category: 'Landing Pages',
      image: 'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NjI2MTI4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'High-end property listing page',
    },
  ];

  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 lg:py-32" style={{ backgroundColor: '#0B1120' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="text-gold tracking-wider text-sm mb-4 block">PORTFOLIO</span>
          <h2 className="text-white mb-6">
            Websites That Convert & Impress
          </h2>
          <p className="text-white/70 text-lg">
            Explore our recent work and see how we've helped real estate agents stand out and succeed.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gold text-black'
                  : 'bg-white/5 text-white/60 border border-white/10 hover:border-gold/30 hover:text-gold'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => onViewCase(item.id)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 transition-all duration-300 group-hover:border-gold/30 group-hover:shadow-2xl group-hover:shadow-gold/20">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Hover Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <ExternalLink className="w-6 h-6 text-black" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-gold text-sm mb-1 tracking-wider">{item.category}</div>
                  <h3 className="text-white">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center text-white/60 text-sm"
        >
          Click any project to view the full case study
        </motion.div>
      </div>
    </section>
  );
}