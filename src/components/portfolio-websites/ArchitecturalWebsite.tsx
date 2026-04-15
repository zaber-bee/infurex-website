import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Building2, Compass, Layers, Award, FileText, Camera } from 'lucide-react';

interface ArchitecturalWebsiteProps {
  onRequestWebsite: () => void;
}

export function ArchitecturalWebsite({ onRequestWebsite }: ArchitecturalWebsiteProps) {
  const portfolioItems = [
    {
      title: 'Modern Concrete Villa',
      architect: 'Tadao Ando',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1643036624745-dfb1a6dbedac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMG1vZGVybiUyMGFyY2hpdGVjdHVyZSUyMG1pbmltYWx8ZW58MXx8fHwxNzc2MDc1MTk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Minimalist White House',
      architect: 'Richard Meier',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1664813953289-7c3350f040e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwd2hpdGV8ZW58MXx8fHwxNzc2MDc1MTI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Contemporary Masterpiece',
      architect: 'Zaha Hadid Architects',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1558969763-1e911dcd91e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBob3VzZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzYwNzUwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Sticky Request Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          onClick={onRequestWebsite}
          className="bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-black hover:to-neutral-900 text-white px-8 py-6 text-lg shadow-2xl shadow-neutral-900/30 hover:shadow-neutral-900/50 transition-all duration-300"
        >
          I Want Website Like This
        </Button>
      </motion.div>

      {/* Minimal Header */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-neutral-200 z-40">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-2xl font-light tracking-[0.3em]">ELENA RODRIGUEZ</div>
          <div className="hidden md:flex space-x-12 text-sm tracking-wider">
            <a href="#portfolio" className="hover:text-neutral-500 transition-colors">PORTFOLIO</a>
            <a href="#philosophy" className="hover:text-neutral-500 transition-colors">PHILOSOPHY</a>
            <a href="#contact" className="hover:text-neutral-500 transition-colors">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero - Minimalist */}
      <section className="pt-32 pb-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-5xl"
          >
            <div className="text-sm tracking-[0.3em] text-neutral-400 mb-6">ARCHITECTURAL REAL ESTATE</div>
            <h1 className="text-7xl lg:text-9xl font-light leading-none mb-8">
              Where Design<br />Meets Legacy
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl leading-relaxed mb-12">
              Specializing in architecturally significant homes that transcend mere property—
              these are works of art, created by the world's most visionary architects.
            </p>
            <Button className="bg-neutral-900 hover:bg-black text-white px-10 py-6">
              Explore Collection
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Large Image Feature */}
      <section className="py-0">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[70vh] overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1643036624745-dfb1a6dbedac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMG1vZGVybiUyMGFyY2hpdGVjdHVyZSUyMG1pbmltYWx8ZW58MXx8fHwxNzc2MDc1MTk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Architectural masterpiece"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-sm tracking-[0.3em] text-neutral-400 mb-4">CURRENT LISTINGS</div>
            <h2 className="text-6xl font-light">Architectural Portfolio</h2>
          </motion.div>

          <div className="space-y-32">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div>
                      <div className="text-sm tracking-[0.3em] text-neutral-400 mb-4">
                        {item.year} — {item.architect}
                      </div>
                      <h3 className="text-5xl font-light mb-6">{item.title}</h3>
                      <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                        A rare opportunity to own a piece of architectural history. This meticulously preserved 
                        residence showcases the architect's signature style—clean lines, natural materials, 
                        and a seamless connection between interior and exterior spaces.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Button className="bg-neutral-900 hover:bg-black text-white">
                          <FileText className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        <Button variant="outline" className="border-neutral-300">
                          <Camera className="w-4 h-4 mr-2" />
                          Photo Gallery
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">
                      <div className="text-sm tracking-[0.3em] text-neutral-400 mb-4">
                        {item.year} — {item.architect}
                      </div>
                      <h3 className="text-5xl font-light mb-6">{item.title}</h3>
                      <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                        An extraordinary example of modernist architecture, this residence represents the pinnacle 
                        of design excellence. Every detail reflects the architect's vision and commitment to 
                        timeless beauty.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Button className="bg-neutral-900 hover:bg-black text-white">
                          <FileText className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        <Button variant="outline" className="border-neutral-300">
                          <Camera className="w-4 h-4 mr-2" />
                          Photo Gallery
                        </Button>
                      </div>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden order-1 lg:order-2">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 bg-neutral-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-sm tracking-[0.3em] text-neutral-400 mb-6">MY APPROACH</div>
              <h2 className="text-6xl font-light mb-12">Design Philosophy</h2>
              <div className="grid md:grid-cols-3 gap-12 mb-16">
                {[
                  { icon: Building2, title: 'Heritage', desc: 'Preserving architectural legacy' },
                  { icon: Compass, title: 'Vision', desc: 'Understanding timeless design' },
                  { icon: Layers, title: 'Detail', desc: 'Appreciating craftsmanship' },
                ].map((item, index) => (
                  <div key={index}>
                    <item.icon className="w-12 h-12 mx-auto mb-4 text-neutral-400" />
                    <h3 className="text-2xl font-light mb-3">{item.title}</h3>
                    <p className="text-neutral-400">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xl text-neutral-300 leading-relaxed">
                "Architecture is not about form following function. It's about the creation of 
                environments that elevate the human experience. My role is to connect visionary 
                buyers with homes that inspire, challenge, and endure."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-sm tracking-[0.3em] text-neutral-400 mb-6">GET IN TOUCH</div>
              <h2 className="text-6xl font-light mb-12">Let's Discuss Your Vision</h2>
              
              <form className="space-y-6 text-left">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-b border-neutral-300 pb-4 text-lg focus:border-neutral-900 focus:outline-none bg-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-b border-neutral-300 pb-4 text-lg focus:border-neutral-900 focus:outline-none bg-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full border-b border-neutral-300 pb-4 text-lg focus:border-neutral-900 focus:outline-none bg-transparent"
                />
                <textarea
                  placeholder="Tell me about your architectural interests..."
                  rows={4}
                  className="w-full border-b border-neutral-300 pb-4 text-lg focus:border-neutral-900 focus:outline-none bg-transparent resize-none"
                ></textarea>
                <Button className="w-full bg-neutral-900 hover:bg-black text-white py-6 text-lg mt-8">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-neutral-900 text-neutral-400 text-center">
        <div className="text-sm tracking-[0.3em] mb-4">ELENA RODRIGUEZ ESTATES</div>
        <p className="text-neutral-600">Architectural Real Estate Specialist</p>
      </footer>
    </div>
  );
}
