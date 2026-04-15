import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Button } from './ui/button';
import { Check, Star, Zap, Crown } from 'lucide-react';

export function Pricing() {
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

  const packages = [
    {
      icon: Star,
      name: 'Essential',
      tagline: 'Perfect for new agents',
      description: 'Get started with a professional online presence that converts.',
      features: [
        '5-page custom website',
        'Mobile-responsive design',
        'Contact form integration',
        'Basic SEO setup',
        'Social media integration',
        'Google Analytics',
        '30-day support',
        'Free SSL certificate',
      ],
      highlighted: false,
    },
    {
      icon: Zap,
      name: 'Professional',
      tagline: 'Most popular choice',
      description: 'Everything you need to dominate your local market.',
      features: [
        'Everything in Essential',
        '10-page custom website',
        'IDX/MLS integration',
        'Advanced SEO optimization',
        'Blog setup & design',
        'Lead capture system',
        'Email marketing integration',
        '90-day priority support',
        'Monthly performance reports',
        'Google My Business setup',
      ],
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      icon: Crown,
      name: 'Premium',
      tagline: 'For top producers',
      description: 'The ultimate package for agents who want to stand out.',
      features: [
        'Everything in Professional',
        'Unlimited pages',
        'Custom animations & interactions',
        'Video backgrounds',
        'Advanced lead automation',
        'CRM integration',
        'Multi-language support (optional)',
        'Dedicated account manager',
        '1-year priority support',
        'Quarterly strategy calls',
        'Ongoing SEO optimization',
        'A/B testing & conversion optimization',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0f1624, #0B1120)' }}>
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl will-change-transform"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl will-change-transform"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />
      </div>

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
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { 
              opacity: 1,
              scale: 1
            } : {}}
            transition={{
              duration: 0.6,
              type: "spring",
              bounce: 0.5
            }}
          >
            PRICING PACKAGES
          </motion.span>
          <motion.h2 
            className="text-white mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            {["Choose", "Your", "Success", "Package"].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-3"
                initial={{ opacity: 0, y: 50, rotateX: 90 }}
                animate={inView ? { 
                  opacity: 1, 
                  y: 0,
                  rotateX: 0
                } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 + i * 0.08,
                  type: "spring",
                  stiffness: 120
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p 
            className="text-white/70 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Flexible packages designed exclusively for real estate professionals. All packages include custom design, fast delivery, and ongoing support.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`relative ${pkg.highlighted ? 'lg:-mt-4' : ''}`}
            >
              {/* Most Popular Badge */}
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-gold to-gold-dark text-black text-sm font-bold px-6 py-2 rounded-full shadow-lg shadow-gold/30">
                    {pkg.badge}
                  </div>
                </div>
              )}

              <div 
                className={`bg-gradient-to-br from-neutral-900 to-black border rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-2 ${
                  pkg.highlighted 
                    ? 'border-gold/50 shadow-xl shadow-gold/20' 
                    : 'border-white/10'
                }`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br rounded-xl flex items-center justify-center mb-4 ${
                      pkg.highlighted 
                        ? 'from-gold/30 to-gold/10' 
                        : 'from-gold/20 to-gold/5'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <pkg.icon className={`w-8 h-8 ${pkg.highlighted ? 'text-gold' : 'text-gold/80'}`} />
                  </motion.div>
                  
                  <h3 className="text-white mb-2">{pkg.name}</h3>
                  <p className="text-gold text-sm mb-3">{pkg.tagline}</p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8 flex-grow">
                  <div className="text-sm text-gold mb-4 tracking-wider font-semibold">
                    WHAT'S INCLUDED
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start space-x-3 text-white/70 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 + idx * 0.03 }}
                      >
                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.highlighted ? 'text-gold' : 'text-gold/70'}`} />
                        <span>{feature}</span>
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
                    className={`w-full transition-all duration-300 ${
                      pkg.highlighted
                        ? 'bg-gradient-to-r from-gold to-gold-dark text-black hover:shadow-lg hover:shadow-gold/30'
                        : 'border-gold/50 text-gold hover:bg-gold hover:text-black'
                    }`}
                    variant={pkg.highlighted ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 border border-gold/20 rounded-2xl p-8">
            <h3 className="text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-white/70 mb-6">
              Have unique requirements? We offer fully customized packages tailored to your specific needs. 
              Schedule a free consultation to discuss your vision.
            </p>
            <Button
              onClick={() => handleScrollTo('#contact')}
              variant="outline"
              className="border-gold/50 text-gold hover:bg-gold hover:text-black transition-all duration-300"
            >
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
