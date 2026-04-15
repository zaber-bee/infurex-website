import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: 'Infurex delivered exactly what I needed - a stunning website that brings in qualified leads daily. Their attention to detail and understanding of the real estate market is unmatched.',
      author: 'Michael Chen',
      role: 'Top Producer, Luxury Properties',
      image: 'https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMGJ1c2luZXNzbWFuJTIwaGVhZHNob3R8ZW58MXx8fHwxNzY2MjM1NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
    },
    {
      quote: 'The team at Infurex transformed my online presence completely. My website now ranks #1 in my area and I\'ve doubled my business in just 6 months. Worth every penny!',
      author: 'Jennifer Martinez',
      role: 'Real Estate Agent & Team Leader',
      image: 'https://images.unsplash.com/photo-1758518729459-235dcaadc611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwaGVhZHNob3R8ZW58MXx8fHwxNzY2MjIwMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
    },
    {
      quote: 'Professional, fast, and they truly understand what real estate agents need. My new website has become my best marketing tool. Clients love the modern design and I love the results.',
      author: 'David Thompson',
      role: 'Realtor, Residential Specialist',
      image: 'https://images.unsplash.com/photo-1548600983-a171dced97f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHN1aXQlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjYyMzU0Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
    },
    {
      quote: 'I was skeptical at first, but Infurex proved me wrong. The website they built is gorgeous and actually converts. I\'m getting leads from people who found me on Google - that never happened before.',
      author: 'Amanda Rodriguez',
      role: 'Broker Associate',
      image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY2MTg3MTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
    },
    {
      quote: 'From start to finish, working with Infurex was seamless. They handled everything and delivered ahead of schedule. My website looks more expensive than what I paid - incredible value.',
      author: 'Robert Williams',
      role: 'Independent Agent',
      image: 'https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWxlJTIwZXhlY3V0aXZlJTIwaGVhZHNob3R8ZW58MXx8fHwxNzY2MjIwMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0B1120, #0f1624)' }}>
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

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
            initial={{ opacity: 0, letterSpacing: "1em" }}
            animate={inView ? { 
              opacity: 1,
              letterSpacing: "0.2em"
            } : {}}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            TESTIMONIALS
          </motion.span>
          <motion.h2 
            className="text-white mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            {["Loved", "by", "Real", "Estate", "Professionals"].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-3"
                initial={{ opacity: 0, rotateY: 90, scale: 0 }}
                animate={inView ? { 
                  opacity: 1, 
                  rotateY: 0,
                  scale: 1
                } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 + i * 0.08,
                  type: "spring",
                  stiffness: 150
                }}
                style={{
                  transformStyle: "preserve-3d"
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p 
            className="text-white/70 text-lg"
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Don't just take our word for it. Here's what our clients have to say about working with Infurex.
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-neutral-900 to-black border border-gold/20 rounded-2xl p-8 lg:p-12">
            {/* Stars */}
            <div className="flex justify-center space-x-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>

            {/* Quote */}
            <div className="text-center mb-8">
              <div className="text-gold mb-4 text-5xl">"</div>
              <p className="text-white/90 text-lg lg:text-xl leading-relaxed italic">
                {currentTestimonial.quote}
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold/30">
                <ImageWithFallback
                  src={currentTestimonial.image}
                  alt={`${currentTestimonial.author} - Real estate professional testimonial`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-white">{currentTestimonial.author}</div>
                <div className="text-white/60 text-sm">{currentTestimonial.role}</div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-gold/10 hover:bg-gold/20 border border-gold/30 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-gold/10 hover:bg-gold/20 border border-gold/30 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-gold w-8' : 'bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gold/10 border border-gold/30 rounded-full">
            <Star className="w-4 h-4 fill-gold text-gold" />
            <span className="text-gold">4.9/5 Average Rating</span>
            <span className="text-white/40">•</span>
            <span className="text-white/60">200+ Happy Clients</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}