import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Bed, Bath, Ruler, Calendar, Download, Share2, Play, ChevronRight, Check } from 'lucide-react';

interface ListingPageWebsiteProps {
  onRequestWebsite: () => void;
}

export function ListingPageWebsite({ onRequestWebsite }: ListingPageWebsiteProps) {
  const amenities = [
    'Ocean-to-Intracoastal Views',
    'Private Beach Access',
    'Infinity Edge Pool & Spa',
    'Chef\'s Kitchen - Gaggenau',
    'Smart Home Automation',
    'Private Elevator',
    'Wine Cellar - 1,000 Bottles',
    'Home Theater',
    'Fitness Center',
    'Massage Room',
    'Outdoor Kitchen',
    '4-Car Garage',
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1758612853656-def5033bccb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBtYW5zaW9uJTIwZXh0ZXJpb3IlMjBuaWdodHxlbnwxfHx8fDE3NzYwNzUwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1760072513457-651955c7074d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwbWFyYmxlJTIwaXNsYW5kfGVufDF8fHx8MTc3NjA3NTEyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1758448755969-8791367cf5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXN0ZXIlMjBiZWRyb29tJTIwc3VpdGV8ZW58MXx8fHwxNzc2MDc1MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1771192442016-d4c78d5729eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMHBvb2wlMjBhZXJpYWx8ZW58MXx8fHwxNzc2MDc1MDU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky Request Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          onClick={onRequestWebsite}
          className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-black px-8 py-6 text-lg font-bold shadow-2xl shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-300"
        >
          I Want Website Like This
        </Button>
      </motion.div>

      {/* Cinematic Hero */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758612853656-def5033bccb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBtYW5zaW9uJTIwZXh0ZXJpb3IlMjBuaWdodHxlbnwxfHx8fDE3NzYwNzUwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        </div>

        {/* Floating Nav */}
        <nav className="absolute top-0 w-full z-40">
          <div className="container mx-auto px-6 py-6 flex items-center justify-between">
            <div className="text-yellow-500 tracking-[0.3em] text-sm">EXCLUSIVE OFFERING</div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Download className="w-4 h-4 mr-2" />
                Brochure
              </Button>
            </div>
          </div>
        </nav>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block bg-yellow-500/20 border border-yellow-500/50 text-yellow-500 px-6 py-2 rounded-full text-sm mb-8">
              JUST LISTED
            </div>
            <h1 className="text-7xl lg:text-9xl mb-6 leading-none">
              1234 Ocean<br />Boulevard
            </h1>
            <div className="text-6xl lg:text-7xl font-bold text-yellow-500 mb-6">
              $12,000,000
            </div>
            <p className="text-2xl text-white/80 mb-12 max-w-3xl">
              An unprecedented masterpiece of modern coastal architecture
            </p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-12 py-8 text-xl font-bold">
              <Play className="w-6 h-6 mr-3" />
              Watch Property Tour
            </Button>
          </motion.div>
        </div>

        {/* Quick Stats Bar */}
        <div className="absolute bottom-0 w-full z-10">
          <div className="container mx-auto px-6 py-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { icon: Bed, value: '6', label: 'Bedrooms' },
                  { icon: Bath, value: '8', label: 'Bathrooms' },
                  { icon: Ruler, value: '11,450', label: 'Sq Ft' },
                  { icon: Calendar, value: '2026', label: 'Built' },
                ].map((stat, index) => (
                  <div key={index}>
                    <stat.icon className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Description */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="text-yellow-500 text-sm tracking-[0.3em] mb-6">PROPERTY DESCRIPTION</div>
              <h2 className="text-6xl mb-8 leading-tight">
                A Rare Oceanfront<br />Sanctuary
              </h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-xl text-white/80 leading-relaxed mb-6">
                  Perched majestically along 150 feet of pristine oceanfront, this architectural tour de force 
                  represents the pinnacle of luxury coastal living. Designed by internationally acclaimed architect 
                  Richard Meier, every detail has been meticulously crafted to create an unparalleled living experience.
                </p>
                <p className="text-xl text-white/80 leading-relaxed mb-6">
                  Floor-to-ceiling windows frame breathtaking panoramic ocean views from virtually every room, 
                  while the seamless indoor-outdoor design celebrates the natural beauty of the coastline. 
                  Soaring 20-foot ceilings and museum-quality finishes create an atmosphere of refined elegance.
                </p>
                <p className="text-xl text-white/80 leading-relaxed">
                  This is more than a home—it's a legacy property for the most discerning buyer who appreciates 
                  world-class architecture, uncompromising quality, and absolute privacy.
                </p>
              </div>
            </motion.div>

            {/* Amenities Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl mb-8">Amenities & Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/5 rounded-lg p-4 border border-white/10">
                    <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-white/90">{amenity}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-6xl mb-4">Visual Gallery</h2>
            <p className="text-white/60 text-xl">Experience the extraordinary details</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-video overflow-hidden rounded-xl group cursor-pointer"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-20 h-20 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Schedule Viewing */}
      <section className="py-24 bg-gradient-to-br from-yellow-600 to-yellow-500 text-black">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-6xl mb-6">Private Showing</h2>
            <p className="text-2xl mb-8 text-black/80">
              This exclusive property is shown by appointment only to pre-qualified buyers
            </p>

            <form className="bg-black/10 backdrop-blur rounded-2xl p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-white/90 border-0 rounded-lg px-4 py-4 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white/90 border-0 rounded-lg px-4 py-4 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-white/90 border-0 rounded-lg px-4 py-4 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <select className="w-full bg-white/90 border-0 rounded-lg px-4 py-4 text-black focus:outline-none focus:ring-2 focus:ring-black">
                <option>Preferred Viewing Time</option>
                <option>Weekday Morning</option>
                <option>Weekday Afternoon</option>
                <option>Weekend</option>
              </select>
              <Button className="w-full bg-black hover:bg-neutral-900 text-white py-6 text-lg font-bold">
                Request Private Showing
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </form>

            <p className="text-black/70 text-sm mt-6">
              * Proof of funds or pre-approval required for all showings
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10 text-center">
        <div className="text-2xl font-bold mb-4 text-yellow-500">Robert Williams Luxury Homes</div>
        <p className="text-white/60">Exclusively Marketing the Finest Properties</p>
      </footer>
    </div>
  );
}
