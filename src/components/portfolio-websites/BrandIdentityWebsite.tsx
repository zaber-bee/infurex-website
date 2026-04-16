import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Phone, Mail, Instagram, Facebook, Linkedin, MapPin, Star, Award } from 'lucide-react';

interface BrandIdentityWebsiteProps {
  onRequestWebsite: () => void;
}

export function BrandIdentityWebsite({ onRequestWebsite }: BrandIdentityWebsiteProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50 text-neutral-900">
      {/* Sticky Request Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          onClick={onRequestWebsite}
          className="bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 text-white px-8 py-6 text-lg shadow-2xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300"
        >
          I Want Website Like This
        </Button>
      </motion.div>

      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-serif italic text-rose-600">Amanda Foster</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-rose-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-rose-600 transition-colors">About</a>
            <a href="#services" className="hover:text-rose-600 transition-colors">Services</a>
            <a href="#contact" className="hover:text-rose-600 transition-colors">Contact</a>
          </div>
          <Button className="hidden md:block bg-rose-600 hover:bg-rose-700">Get in Touch</Button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-rose-100 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="text-rose-600 mb-4 tracking-widest text-sm">YOUR TRUSTED REAL ESTATE PARTNER</div>
              <h1 className="text-6xl lg:text-7xl mb-6 font-serif">
                Making Your<br />
                <span className="text-rose-600 italic">Dream Home</span><br />
                A Reality
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                With a personal touch and deep local market knowledge, I'm here to guide you 
                through every step of your home buying or selling journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-rose-600 hover:bg-rose-700 px-8 py-6 text-lg">
                  Let's Work Together
                </Button>
                <Button variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg">
                  View My Listings
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1585240975858-7264fd020798?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZWFsdG9yJTIwaGVhZHNob3QlMjB3b21hbnxlbnwxfHx8fDE3NzYwNzUxOTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Amanda Foster"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-neutral-700 italic">"Amanda made our dream home a reality!"</p>
                <p className="text-neutral-500 text-sm mt-2">- Happy Homeowners</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl mb-6 font-serif">About Amanda</h2>
              <div className="w-24 h-1 bg-rose-600 mx-auto mb-8"></div>
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                As a lifelong resident of our beautiful community, I bring insider knowledge and genuine 
                passion to every transaction. My approach is simple: listen carefully, communicate clearly, 
                and work tirelessly on your behalf.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  { icon: Award, value: '150+', label: 'Homes Sold' },
                  { icon: Star, value: '5-Star', label: 'Client Rating' },
                  { icon: MapPin, value: 'Local', label: 'Expert' },
                ].map((stat, index) => (
                  <div key={index} className="bg-rose-50 rounded-xl p-6">
                    <stat.icon className="w-10 h-10 text-rose-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-rose-600 mb-2">{stat.value}</div>
                    <div className="text-neutral-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gradient-to-br from-rose-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-6 font-serif">How I Can Help</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Personalized service tailored to your unique needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'For Buyers',
               desc: "From first-time buyers to seasoned investors, I'll help you find and secure the perfect property.",
                features: ['Market Analysis', 'Property Tours', 'Negotiation Support', 'Closing Assistance'],
              },
              {
                title: 'For Sellers',
                desc: 'Get top dollar for your home with professional marketing and strategic pricing.',
                features: ['Home Staging Advice', 'Professional Photography', 'Targeted Marketing', 'Price Optimization'],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-3xl font-serif text-rose-600 mb-4">{service.title}</h3>
                <p className="text-neutral-700 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-neutral-600">
                      <div className="w-2 h-2 bg-rose-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-5xl mb-6 font-serif">Let's Connect</h2>
              <p className="text-xl text-neutral-600">
                Ready to start your real estate journey? I'd love to hear from you!
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Phone, label: '(555) 123-4567' },
                { icon: Mail, label: 'amanda@fosterhomes.com' },
                { icon: MapPin, label: 'Downtown Office' },
              ].map((contact, index) => (
                <div key={index} className="bg-rose-50 rounded-xl p-6 text-center">
                  <contact.icon className="w-8 h-8 text-rose-600 mx-auto mb-3" />
                  <div className="text-neutral-700">{contact.label}</div>
                </div>
              ))}
            </div>

            <form className="bg-gradient-to-br from-rose-50 to-white rounded-2xl p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white border border-rose-200 rounded-lg px-4 py-3 focus:border-rose-600 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white border border-rose-200 rounded-lg px-4 py-3 focus:border-rose-600 focus:outline-none"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-white border border-rose-200 rounded-lg px-4 py-3 focus:border-rose-600 focus:outline-none"
              />
              <textarea
                placeholder="Tell me about your real estate needs..."
                rows={4}
                className="w-full bg-white border border-rose-200 rounded-lg px-4 py-3 focus:border-rose-600 focus:outline-none resize-none"
              ></textarea>
              <Button className="w-full bg-rose-600 hover:bg-rose-700 py-6 text-lg">
                Send Message
              </Button>
            </form>

            <div className="flex justify-center space-x-6 mt-8">
              {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center hover:bg-rose-600 hover:text-white transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-rose-600 text-white text-center">
        <div className="text-2xl font-serif italic mb-4">Amanda Foster</div>
        <p className="text-rose-100">Your Trusted Real Estate Partner</p>
      </footer>
    </div>
  );
}
