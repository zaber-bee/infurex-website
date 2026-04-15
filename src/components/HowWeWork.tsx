import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Search, Palette, Rocket } from 'lucide-react';

export function HowWeWork() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery',
      description: 'We dive deep into your brand, goals, and target market. Understanding your unique value proposition is key.',
      timeline: 'Week 1',
    },
    {
      number: '02',
      icon: Palette,
      title: 'Design & Development',
      description: 'Our team crafts your custom website with premium design and powerful functionality. You\'ll review and approve at every stage.',
      timeline: 'Weeks 2-3',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Go Live + Support',
      description: 'Launch day! We handle everything from deployment to training. Plus, ongoing support to ensure your success.',
      timeline: 'Week 4+',
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0f1624, #0B1120)' }}>
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
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
            initial={{ opacity: 0, y: -50, scale: 0.5 }}
            animate={inView ? { 
              opacity: 1,
              y: 0,
              scale: 1
            } : {}}
            transition={{
              duration: 0.6,
              type: "spring",
              bounce: 0.5
            }}
          >
            HOW WE WORK
          </motion.span>
          <motion.h2 
            className="text-white mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            {["Simple,", "Transparent", "Process"].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-3"
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100, rotate: i % 2 === 0 ? -20 : 20 }}
                animate={inView ? { 
                  opacity: 1, 
                  x: 0,
                  rotate: 0
                } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + i * 0.1,
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            From initial consultation to launch, we make the journey smooth and stress-free. Typical delivery: <motion.span 
              className="text-gold"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >2-4 weeks</motion.span>.
          </motion.p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/10">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center shadow-lg shadow-gold/30">
                    <span className="text-black">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl flex items-center justify-center mb-4">
                      <step.icon className="w-8 h-8 text-gold" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/60 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Timeline Badge */}
                  <div className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full">
                    <span className="text-gold text-sm">{step.timeline}</span>
                  </div>
                </div>

                {/* Arrow indicator for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-6 w-12 h-0.5">
                    <div className="w-full h-full bg-gradient-to-r from-gold/30 to-transparent relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gold rounded-full"></div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center p-8 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 border border-gold/20 rounded-2xl"
        >
          <div className="text-white mb-2">Ready to get started?</div>
          <p className="text-white/60 text-sm">
            Most projects are delivered within 2-4 weeks. Rush delivery available for urgent needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}