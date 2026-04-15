import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Home, Award, TrendingUp, Phone, Mail, MapPin, Star, Users, Clock, CheckCircle } from 'lucide-react';

interface LuxuryAgentWebsiteProps {
  onRequestWebsite: () => void;
}

export function LuxuryAgentWebsite({ onRequestWebsite }: LuxuryAgentWebsiteProps) {
  const properties = [
    {
      image: 'https://images.unsplash.com/photo-1758612853656-def5033bccb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBtYW5zaW9uJTIwZXh0ZXJpb3IlMjBuaWdodHxlbnwxfHx8fDE3NzYwNzUwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$8,500,000',
      address: 'Beverly Hills Estate',
      beds: 6,
      baths: 7,
      sqft: '12,450',
    },
    {
      image: 'https://images.unsplash.com/photo-1760611656071-a8bef0578874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBpbnRlcmlvciUyMGxpdmluZ3xlbnwxfHx8fDE3NzYwMTgxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$12,900,000',
      address: 'Manhattan Penthouse',
      beds: 5,
      baths: 6,
      sqft: '9,200',
    },
    {
      image: 'https://images.unsplash.com/photo-1771192442016-d4c78d5729eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMHBvb2wlMjBhZXJpYWx8ZW58MXx8fHwxNzc2MDc1MDU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$15,200,000',
      address: 'Malibu Oceanfront Villa',
      beds: 8,
      baths: 9,
      sqft: '15,800',
    },
  ];

  const stats = [
    { icon: Home, value: '$420M+', label: 'Total Sales Volume' },
    { icon: Award, value: '250+', label: 'Properties Sold' },
    { icon: TrendingUp, value: '98%', label: 'List-to-Sale Ratio' },
    { icon: Star, value: '15 Years', label: 'Experience' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-white">
      {/* Sticky Request Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          onClick={onRequestWebsite}
          className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-6 text-lg shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300"
        >
          I Want Website Like This
        </Button>
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            SARAH MITCHELL
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
            <a href="#properties" className="hover:text-amber-400 transition-colors">Properties</a>
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>
          <Button className="hidden md:block bg-amber-600 hover:bg-amber-700">Schedule Viewing</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758612853656-def5033bccb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBtYW5zaW9uJTIwZXh0ZXJpb3IlMjBuaWdodHxlbnwxfHx8fDE3NzYwNzUwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury mansion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <div className="text-amber-400 text-lg mb-4 tracking-widest">LUXURY REAL ESTATE SPECIALIST</div>
            <h1 className="text-6xl lg:text-8xl mb-6 leading-tight">
              Extraordinary<br />Homes For<br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Extraordinary Lives
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              Representing the finest properties in Beverly Hills, Malibu, and beyond. 
              With over 15 years of experience and $420M+ in sales, I deliver exceptional results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 px-8 py-6 text-lg">
                View Exclusive Listings
              </Button>
              <Button variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-8 py-6 text-lg">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-amber-400 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-neutral-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-24 bg-neutral-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-amber-400 text-sm tracking-widest mb-4">EXCLUSIVE LISTINGS</div>
            <h2 className="text-5xl mb-6">Featured Properties</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Discover a curated selection of the world's most prestigious homes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <ImageWithFallback
                    src={property.image}
                    alt={property.address}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 px-4 py-2 rounded-full text-sm font-bold">
                    NEW LISTING
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="text-3xl font-bold text-amber-400 mb-2">{property.price}</div>
                <div className="text-xl mb-3">{property.address}</div>
                <div className="flex items-center space-x-6 text-white/60">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.sqft} sqft</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 px-8 py-6">
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1770199105692-9e52ff137cad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVhbCUyMGVzdGF0ZSUyMGFnZW50JTIwcHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MXx8fHwxNzc2MDc1MDUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Sarah Mitchell"
                className="w-full h-[600px] object-cover rounded-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-amber-400 text-sm tracking-widest mb-4">ABOUT SARAH</div>
              <h2 className="text-5xl mb-6">Your Trusted Partner in Luxury Real Estate</h2>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                With over 15 years of experience representing the world's most discerning buyers and sellers, 
                I've built my reputation on integrity, discretion, and exceptional results.
              </p>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                My intimate knowledge of luxury markets, combined with cutting-edge marketing strategies 
                and a vast network of high-net-worth clients, ensures your property receives the attention it deserves.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Member, Institute for Luxury Home Marketing',
                  'Certified Luxury Home Marketing Specialist',
                  'Top 1% of Agents Nationwide',
                  'Featured in Forbes & The Wall Street Journal',
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0" />
                    <span className="text-white/80">{achievement}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 px-8 py-6">
                Let's Connect
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-neutral-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="text-amber-400 text-sm tracking-widest mb-4">GET IN TOUCH</div>
              <h2 className="text-5xl mb-6">Let's Find Your Dream Home</h2>
              <p className="text-white/70 text-lg">
                Schedule a private consultation to discuss your real estate goals
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Phone, label: 'Phone', value: '+1 (310) 555-0123' },
                { icon: Mail, label: 'Email', value: 'sarah@luxuryestates.com' },
                { icon: MapPin, label: 'Office', value: 'Beverly Hills, CA' },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-neutral-800/50 border border-amber-400/20 rounded-xl p-6 text-center"
                >
                  <contact.icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                  <div className="text-white/60 text-sm mb-1">{contact.label}</div>
                  <div className="text-white">{contact.value}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-800/30 border border-amber-400/20 rounded-2xl p-8"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:border-amber-400 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:border-amber-400 focus:outline-none"
                />
                <textarea
                  placeholder="Tell me about your dream property..."
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:border-amber-400 focus:outline-none resize-none"
                ></textarea>
                <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 py-6 text-lg">
                  Schedule Consultation
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            SARAH MITCHELL
          </div>
          <p className="text-white/60 mb-6">Luxury Real Estate Specialist</p>
          <p className="text-white/40 text-sm">
            © 2026 Sarah Mitchell Real Estate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
