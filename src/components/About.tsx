import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Palette, Zap, TrendingUp, Home, DollarSign } from 'lucide-react';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Palette,
      title: 'Premium Design',
      description: 'Stand out with custom, luxury websites that reflect your brand and attract high-value clients.',
    },
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Fast-loading, optimized websites that convert visitors into leads. Every millisecond counts.',
    },
    {
      icon: TrendingUp,
      title: 'SEO & Rankings',
      description: 'Dominate local search with our proven SEO strategies. Be found by ready-to-buy clients.',
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0B1120, #0f1624)' }}>
      {/* Optimized Decorative Elements */}
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

      {/* Real Estate Icons */}
      <motion.div
        className="absolute top-24 right-12 hidden lg:block"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        <Home className="w-10 h-10 text-gold/15" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-16 hidden lg:block"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 0.5,
        }}
      >
        <DollarSign className="w-12 h-12 text-gold/18" />
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
            initial={{ opacity: 0, x: -100, rotate: -10 }}
            animate={inView ? { 
              opacity: 1,
              x: 0,
              rotate: 0
            } : {}}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0.4
            }}
          >
            ABOUT INFUREX
          </motion.span>
          <motion.h2 
            className="text-white mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Animate each word separately */}
            {["Your", "Partner", "in", "Real", "Estate", "Digital", "Excellence"].map((word, i) => (
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
                  delay: 0.2 + i * 0.08,
                  type: "spring",
                  stiffness: 100
                }}
                style={{
                  backgroundImage: i === 4 || i === 5 ? 'linear-gradient(90deg, #D4A574 0%, #E8C4A0 50%, #D4A574 100%)' : 'none',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: i === 4 || i === 5 ? 'text' : 'none',
                  backgroundClip: i === 4 || i === 5 ? 'text' : 'none',
                  WebkitTextFillColor: i === 4 || i === 5 ? 'transparent' : 'inherit',
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p 
            className="text-white/70 text-lg"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={inView ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            At <motion.span 
              className="text-gold"
              animate={{
                textShadow: [
                  '0 0 10px rgba(212, 175, 55, 0)',
                  '0 0 10px rgba(212, 175, 55, 0.5)',
                  '0 0 10px rgba(212, 175, 55, 0)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >Infurex.com</motion.span>, we specialize in crafting premium digital experiences exclusively for real estate professionals. 
            Our mission is to empower agents with cutting-edge websites and marketing tools that drive results, not just traffic.
          </motion.p>
        </motion.div>

        {/* Why Choose Us - Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/10">
                {/* Icon */}
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-8 h-8 text-gold" />
                </motion.div>

                {/* Content */}
                <motion.h3 
                  className="text-white mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-white/60"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                >
                  {feature.description}
                </motion.p>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 border border-gold/20 rounded-2xl"
        >
          {[
            { value: '200+', label: 'Websites Launched' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '2-4 Weeks', label: 'Avg. Delivery' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <motion.div 
                className="text-gold mb-2"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}