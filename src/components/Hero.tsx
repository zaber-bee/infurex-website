import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, TrendingUp, Shield, Star, Sparkles, Home, DollarSign } from 'lucide-react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Enhanced parallax effects for laptop - moves from hero to about section
  const laptopY = useTransform(scrollY, [0, 800], [0, 600]);
  const laptopOpacity = useTransform(scrollY, [0, 300, 700, 800], [1, 1, 0.7, 0]);
  const laptopScale = useTransform(scrollY, [0, 800], [1, 0.6]);
  const laptopRotate = useTransform(scrollY, [0, 800], [0, -5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustBadges = [
    { icon: Award, text: 'Built for Realtors' },
    { icon: TrendingUp, text: 'High Converting' },
    { icon: Shield, text: 'Premium Quality' },
    { icon: Star, text: '5-Star Rated' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Optimized Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />

        {/* Reduced Floating Particles for Performance - 10 instead of 20 */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Real Estate Icons - Home & Cash */}
        <motion.div
          className="absolute top-20 left-10 hidden lg:block"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          <Home className="w-12 h-12 text-gold/20" />
        </motion.div>

        <motion.div
          className="absolute top-32 right-16 hidden lg:block"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: 0.5,
          }}
        >
          <DollarSign className="w-14 h-14 text-gold/25" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-20 hidden lg:block"
          animate={{
            y: [0, -25, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 1,
          }}
        >
          <DollarSign className="w-10 h-10 text-gold/20" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 right-24 hidden lg:block"
          animate={{
            y: [0, -18, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            delay: 1.5,
          }}
        >
          <Home className="w-11 h-11 text-gold/22" />
        </motion.div>

        {/* Optimized Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl opacity-20 will-change-transform"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl opacity-10 will-change-transform"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block"
              >
                <span className="px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm tracking-wider inline-flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Premium Digital Marketing
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-white leading-tight"
              >
                <motion.span
                  animate={{ 
                    textShadow: [
                      '0 0 20px rgba(212, 175, 55, 0)',
                      '0 0 20px rgba(212, 175, 55, 0.3)',
                      '0 0 20px rgba(212, 175, 55, 0)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Premium Websites for{' '}
                </motion.span>
                <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                  Real Estate Agents
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white/70 text-lg lg:text-xl max-w-xl"
              >
                Modern, high-converting websites + SEO to help agents sell faster. 
                Stand out in your market with premium design and technology.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => handleScrollTo('#contact')}
                  className="bg-gold hover:bg-gold-dark text-black transition-all duration-300 px-8 shadow-lg shadow-gold/20 relative overflow-hidden group"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                  <span className="relative">Get a Demo</span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => handleScrollTo('#portfolio')}
                  variant="outline"
                  className="border-gold/50 text-gold hover:bg-gold/10 transition-all duration-300 px-8"
                >
                  View Portfolio
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8"
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-300 cursor-pointer"
                >
                  <badge.icon className="w-5 h-5 text-gold" />
                  <span className="text-xs text-white/60 text-center">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Laptop Mockup with Scroll Animation */}
          <div className="relative lg:min-h-[600px]">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
              style={{
                y: laptopY,
                opacity: laptopOpacity,
                scale: laptopScale,
                rotateX: laptopRotate,
              }}
            >
              <div className="relative">
                {/* Glowing Background Effect */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-gold-light/20 rounded-3xl blur-2xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />

                {/* Laptop Frame */}
                <motion.div
                  className="relative rounded-2xl overflow-hidden border-2 border-gold/30 shadow-2xl shadow-gold/30 bg-neutral-900"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Laptop Screen Bezel */}
                  <div className="p-3 bg-gradient-to-b from-neutral-800 to-neutral-900">
                    {/* Screen Content - Real Estate Website */}
                    <div className="relative rounded-lg overflow-hidden bg-black aspect-[16/10]">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1756342613984-75154edc49b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NjI5MzYwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Luxury real estate website showcase"
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                      
                      {/* Animated Scan Line - hide on mobile for performance */}
                      <motion.div
                        className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent hidden lg:block"
                        animate={{ y: [0, 300] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />

                      {/* Browser Chrome */}
                      <div className="absolute top-0 left-0 right-0 h-8 bg-neutral-800/90 backdrop-blur-sm flex items-center px-3 space-x-2">
                        <div className="flex space-x-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex-1 mx-4 h-5 bg-black/50 rounded text-xs flex items-center px-2 text-white/40">
                          <span className="text-gold/60">🔒</span>
                          <span className="ml-1">premiumrealestate.com</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Laptop Base */}
                  <div className="h-3 bg-gradient-to-b from-neutral-700 to-neutral-800 rounded-b-xl"></div>
                  <div className="h-1.5 bg-neutral-900 rounded-b-2xl mx-auto w-2/3"></div>
                </motion.div>

                {/* Floating Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  className="absolute -bottom-6 -left-6 bg-black/90 backdrop-blur-sm border border-gold/30 rounded-xl p-4 shadow-xl z-10"
                >
                  <motion.div
                    className="text-gold mb-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    500%
                  </motion.div>
                  <div className="text-xs text-white/60 whitespace-nowrap">Avg. Lead Increase</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="absolute -top-6 -right-6 bg-black/90 backdrop-blur-sm border border-gold/30 rounded-xl p-4 shadow-xl z-10"
                >
                  <motion.div
                    className="text-gold mb-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    2-4 Weeks
                  </motion.div>
                  <div className="text-xs text-white/60 whitespace-nowrap">Delivery Time</div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-1/4 -right-10 w-16 h-16 border-2 border-gold/30 rounded-full"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity },
                  }}
                />
                <motion.div
                  className="absolute bottom-1/4 -left-10 w-12 h-12 border-2 border-gold/30 rounded-lg"
                  animate={{
                    rotate: -360,
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2.5, repeat: Infinity },
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center pt-2 relative overflow-hidden cursor-pointer"
          whileHover={{ borderColor: 'rgba(212, 175, 55, 0.6)' }}
          onClick={() => handleScrollTo('#about')}
        >
          <motion.div
            className="w-1 h-2 bg-gold rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
        <motion.p
          className="text-gold/60 text-xs mt-2 text-center"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll Down
        </motion.p>
      </motion.div>
    </section>
  );
}