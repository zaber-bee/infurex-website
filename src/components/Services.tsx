import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Button } from './ui/button';
import { Monitor, Code, Search, Check, Home, DollarSign } from 'lucide-react';

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Monitor,
      title: 'Web Design',
      description: 'Stunning, conversion-focused designs that capture your brand and attract premium clients.',
      benefits: [
        'Custom luxury designs',
        'Mobile-first responsive',
        'Brand identity integration',
        'User experience optimization',
      ],
      deliverables: [
        'Desktop & mobile designs',
        'Interactive prototypes',
        'Design system & style guide',
        'Unlimited revisions',
      ],
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Fast, secure, and scalable websites built with cutting-edge technology.',
      benefits: [
        'Lightning-fast performance',
        'SEO-friendly architecture',
        'CMS integration (optional)',
        'IDX/MLS integration',
      ],
      deliverables: [
        'Custom coded website',
        'Cross-browser compatibility',
        'Security & SSL setup',
        'Analytics integration',
      ],
    },
    {
      icon: Search,
      title: 'SEO & Local Listings',
      description: 'Dominate local search and get found by clients actively looking for properties.',
      benefits: [
        'Local SEO optimization',
        'Google My Business setup',
        'Keyword research & strategy',
        'Monthly performance reports',
      ],
      deliverables: [
        'On-page SEO optimization',
        'Local directory listings',
        'Schema markup',
        'Ongoing monitoring',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#0B1120' }}>
      {/* Optimized Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Optimized Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-gold rounded-full blur-3xl opacity-10 will-change-transform"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold rounded-full blur-3xl opacity-10 will-change-transform"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      {/* Real Estate Icons */}
      <motion.div
        className="absolute top-20 left-8 hidden lg:block"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 12, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
        }}
      >
        <Home className="w-10 h-10 text-gold/15" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 hidden lg:block"
        animate={{
          y: [0, -18, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 0.5,
        }}
      >
        <DollarSign className="w-11 h-11 text-gold/18" />
      </motion.div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span 
            className="text-gold tracking-wider text-sm mb-4 block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { 
              opacity: [0.7, 1, 0.7],
              scale: 1 
            } : {}}
            transition={{
              opacity: { duration: 3, repeat: Infinity },
              scale: { duration: 0.5 }
            }}
          >
            OUR SERVICES
          </motion.span>
          <motion.h2 
            className="text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span
              animate={inView ? {
                textShadow: [
                  '0 0 20px rgba(212, 175, 55, 0)',
                  '0 0 20px rgba(212, 175, 55, 0.3)',
                  '0 0 20px rgba(212, 175, 55, 0)',
                ]
              } : {}}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Everything You Need to Dominate Your Market
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-white/70 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            From stunning designs to powerful SEO, we provide complete digital solutions for ambitious real estate agents.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-2">
                {/* Icon & Title */}
                <div className="mb-6">
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="w-7 h-7 text-gold" />
                  </motion.div>
                  <motion.h3 
                    className="text-white mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="text-white/60 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  >
                    {service.description}
                  </motion.p>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <motion.div 
                    className="text-sm text-gold mb-3 tracking-wider"
                    animate={{
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    KEY BENEFITS
                  </motion.div>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start space-x-2 text-white/60 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.2 + idx * 0.05 }}
                      >
                        <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="mb-6 flex-grow">
                  <motion.div 
                    className="text-sm text-gold mb-3 tracking-wider"
                    animate={{
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5 + index * 0.3,
                    }}
                  >
                    DELIVERABLES
                  </motion.div>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start space-x-2 text-white/60 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.2 + idx * 0.05 }}
                      >
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                        <span>{deliverable}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => handleScrollTo('#contact')}
                    variant="outline"
                    className="w-full border-gold/50 text-gold hover:bg-gold hover:text-black transition-all duration-300"
                  >
                    Request a Project
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}