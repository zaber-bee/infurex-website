import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Bed, Bath, Ruler, MapPin, Car, Waves, Home, Calendar, Play } from 'lucide-react';

interface PropertyShowcaseWebsiteProps {
  onRequestWebsite: () => void;
}

export function PropertyShowcaseWebsite({ onRequestWebsite }: PropertyShowcaseWebsiteProps) {
  const features = [
    { icon: Bed, label: '5 Bedrooms', desc: 'Spacious suites' },
    { icon: Bath, label: '6 Bathrooms', desc: 'Luxury finishes' },
    { icon: Ruler, label: '8,500 sqft', desc: 'Living space' },
    { icon: MapPin, label: 'Malibu Beach', desc: 'Prime location' },
    { icon: Car, label: '3-Car Garage', desc: 'Plus storage' },
    { icon: Waves, label: 'Infinity Pool', desc: 'Ocean views' },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1772064901543-fb4a5d9f4736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaGZyb250JTIwcHJvcGVydHklMjBzdW5zZXR8ZW58MXx8fHwxNzc2MDc1MTI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1760072513457-651955c7074d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwbWFyYmxlJTIwaXNsYW5kfGVufDF8fHx8MTc3NjA3NTEyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1758448755969-8791367cf5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXN0ZXIlMjBiZWRyb29tJTIwc3VpdGV8ZW58MXx8fHwxNzc2MDc1MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1771192442016-d4c78d5729eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMHBvb2wlMjBhZXJpYWx8ZW58MXx8fHwxNzc2MDc1MDU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Sticky Request Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          onClick={onRequestWebsite}
          className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-6 text-lg shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
        >
          I Want Website Like This
        </Button>
      </motion.div>

      {/* Hero Section - Full Screen Video Background Style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1772064901543-fb4a5d9f4736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaGZyb250JTIwcHJvcGVydHklMjBzdW5zZXR8ZW58MXx8fHwxNzc2MDc1MTI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Beachfront luxury property"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              JUST LISTED
            </div>
            <h1 className="text-6xl lg:text-8xl mb-6 leading-tight">
              Oceanfront<br />Paradise
            </h1>
            <div className="text-5xl lg:text-6xl font-bold text-blue-400 mb-8">
              $18,950,000
            </div>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              An architectural masterpiece where contemporary design meets coastal elegance. 
              Experience unparalleled luxury living with breathtaking Pacific Ocean views.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Private Tour
            </Button>
            <Button variant="outline" className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20 px-10 py-6 text-lg">
              <Play className="w-5 h-5 mr-2" />
              Watch Video Tour
            </Button>
          </motion.div>
        </div>

        {/* Floating Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-12 left-12 hidden lg:block"
        >
          <div className="bg-white/95 backdrop-blur rounded-2xl p-6 shadow-2xl">
            <div className="text-sm text-neutral-500 mb-1">Address</div>
            <div className="text-lg font-bold">1234 Pacific Coast Highway</div>
            <div className="text-neutral-600">Malibu, CA 90265</div>
          </div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <feature.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <div className="font-bold text-lg mb-1">{feature.label}</div>
                <div className="text-neutral-500 text-sm">{feature.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Description */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl mb-6">Property Overview</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-neutral-700 leading-relaxed space-y-6"
            >
              <p>
                Welcome to a residence that redefines coastal luxury. This stunning 8,500 square foot masterpiece 
                seamlessly blends indoor and outdoor living with floor-to-ceiling glass walls that frame the endless 
                Pacific Ocean horizon.
              </p>
              <p>
                Every detail has been meticulously crafted, from the Italian marble floors to the custom chef's kitchen 
                featuring Miele appliances. The open-concept living spaces flow effortlessly to expansive terraces, 
                perfect for entertaining or quiet contemplation.
              </p>
              <p>
                The primary suite is a private sanctuary with a spa-inspired bathroom, dual walk-in closets, and a 
                private ocean-view balcony. Four additional en-suite bedrooms ensure luxury and privacy for family 
                and guests alike.
              </p>
              <p>
                Resort-style amenities include an infinity-edge pool with spa, outdoor kitchen, fire pit lounge, 
                home theater, wine cellar, and fitness center. Direct beach access completes this extraordinary property.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 grid md:grid-cols-2 gap-6"
            >
              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Interior Features</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Smart home automation system</li>
                  <li>• Custom millwork throughout</li>
                  <li>• Lutron lighting & Crestron AV</li>
                  <li>• 14' ceilings in main living areas</li>
                  <li>• Imported Italian marble & hardwood</li>
                  <li>• Chef's kitchen with Miele appliances</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Exterior Features</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>• 75 feet of ocean frontage</li>
                  <li>• Infinity pool & spa with automation</li>
                  <li>• Outdoor kitchen & BBQ island</li>
                  <li>• Multiple entertaining terraces</li>
                  <li>• Landscaped gardens with lighting</li>
                  <li>• Private beach access</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-6">Photo Gallery</h2>
            <p className="text-neutral-600 text-lg">Experience the beauty of this exceptional property</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-video overflow-hidden rounded-2xl group cursor-pointer"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Property view ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-16 h-16 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-5xl mb-6">Schedule Your Private Tour</h2>
              <p className="text-blue-100 text-lg">
                Experience this exceptional property in person. Limited showings available.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                />
                <select className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:border-white focus:outline-none">
                  <option value="" className="text-neutral-900">Preferred Tour Time</option>
                  <option value="morning" className="text-neutral-900">Morning (9AM - 12PM)</option>
                  <option value="afternoon" className="text-neutral-900">Afternoon (12PM - 4PM)</option>
                  <option value="evening" className="text-neutral-900">Evening (4PM - 7PM)</option>
                </select>
                <textarea
                  placeholder="Additional information or questions..."
                  rows={4}
                  className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/60 focus:border-white focus:outline-none resize-none"
                ></textarea>
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 py-6 text-lg font-bold">
                  Request Private Showing
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-center text-blue-100 text-sm"
            >
              <p>Qualified buyers only. Proof of funds required for showing.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-neutral-900 text-white text-center">
        <div className="container mx-auto px-6">
          <div className="text-2xl font-bold mb-4">Premium Coastal Living</div>
          <p className="text-white/60 mb-6">Listed by Marcus Johnson Properties</p>
          <p className="text-white/40 text-sm">
            © 2026 Marcus Johnson Properties. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
