import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Search, MapPin, Bed, Bath, DollarSign, Filter, Heart, Grid, Map as MapIcon } from 'lucide-react';

interface IDXPortalWebsiteProps {
  onRequestWebsite: () => void;
}

export function IDXPortalWebsite({ onRequestWebsite }: IDXPortalWebsiteProps) {
  const properties = [
    {
      image: 'https://images.unsplash.com/photo-1758612853656-def5033bccb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBtYW5zaW9uJTIwZXh0ZXJpb3IlMjBuaWdodHxlbnwxfHx8fDE3NzYwNzUwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$4,200,000',
      address: '123 Luxury Lane, Beverly Hills, CA',
      beds: 5,
      baths: 6,
      sqft: 6500,
      status: 'New',
    },
    {
      image: 'https://images.unsplash.com/photo-1760611656071-a8bef0578874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBpbnRlcmlvciUyMGxpdmluZ3xlbnwxfHx8fDE3NzYwMTgxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$2,850,000',
      address: '456 Ocean View Dr, Malibu, CA',
      beds: 4,
      baths: 5,
      sqft: 5200,
      status: 'Hot',
    },
    {
      image: 'https://images.unsplash.com/photo-1558969763-1e911dcd91e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBob3VzZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzYwNzUwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$3,995,000',
      address: '789 Hillside Rd, Los Angeles, CA',
      beds: 6,
      baths: 7,
      sqft: 7800,
      status: 'New',
    },
    {
      image: 'https://images.unsplash.com/photo-1771192442016-d4c78d5729eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMHBvb2wlMjBhZXJpYWx8ZW58MXx8fHwxNzc2MDc1MDU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$5,750,000',
      address: '321 Paradise Blvd, Santa Monica, CA',
      beds: 7,
      baths: 8,
      sqft: 9200,
      status: 'Featured',
    },
    {
      image: 'https://images.unsplash.com/photo-1772064901543-fb4a5d9f4736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaGZyb250JTIwcHJvcGVydHklMjBzdW5zZXR8ZW58MXx8fHwxNzc2MDc1MTI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$6,900,000',
      address: '654 Coastal Hwy, Newport Beach, CA',
      beds: 6,
      baths: 7,
      sqft: 8400,
      status: 'New',
    },
    {
      image: 'https://images.unsplash.com/photo-1760072513457-651955c7074d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwbWFyYmxlJTIwaXNsYW5kfGVufDF8fHx8MTc3NjA3NTEyNXww&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$1,995,000',
      address: '987 Canyon Dr, Pasadena, CA',
      beds: 4,
      baths: 4,
      sqft: 4200,
      status: 'Hot',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-neutral-900">
      {/* Sticky Request Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          onClick={onRequestWebsite}
          className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white px-8 py-6 text-lg shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
        >
          I Want Website Like This
        </Button>
      </motion.div>

      {/* Header */}
      <nav className="sticky top-0 bg-white border-b border-neutral-200 shadow-sm z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              DAVID CHEN REALTY
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#search" className="hover:text-indigo-600 transition-colors">Search</a>
              <a href="#featured" className="hover:text-indigo-600 transition-colors">Featured</a>
              <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
              <Button className="bg-indigo-600 hover:bg-indigo-700">Sign In</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Search Section */}
      <section id="search" className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl mb-6">Find Your Dream Property</h1>
            <p className="text-xl text-indigo-100">Search thousands of luxury listings updated in real-time</p>
          </motion.div>

          {/* Advanced Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-4 gap-4 mb-4">
              <div className="md:col-span-2">
                <label className="text-neutral-600 text-sm mb-2 block">Location</label>
                <div className="flex items-center bg-neutral-50 rounded-lg px-4 py-3 border border-neutral-200">
                  <MapPin className="w-5 h-5 text-neutral-400 mr-2" />
                  <input
                    type="text"
                    placeholder="City, Neighborhood, or ZIP"
                    className="bg-transparent flex-1 focus:outline-none text-neutral-900"
                  />
                </div>
              </div>
              <div>
                <label className="text-neutral-600 text-sm mb-2 block">Min Price</label>
                <div className="flex items-center bg-neutral-50 rounded-lg px-4 py-3 border border-neutral-200">
                  <DollarSign className="w-5 h-5 text-neutral-400 mr-2" />
                  <input type="text" placeholder="No Min" className="bg-transparent flex-1 focus:outline-none text-neutral-900" />
                </div>
              </div>
              <div>
                <label className="text-neutral-600 text-sm mb-2 block">Max Price</label>
                <div className="flex items-center bg-neutral-50 rounded-lg px-4 py-3 border border-neutral-200">
                  <DollarSign className="w-5 h-5 text-neutral-400 mr-2" />
                  <input type="text" placeholder="No Max" className="bg-transparent flex-1 focus:outline-none text-neutral-900" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <select className="bg-neutral-50 rounded-lg px-4 py-3 border border-neutral-200 text-neutral-900 focus:outline-none">
                <option>Beds (Any)</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
                <option>5+</option>
              </select>
              <select className="bg-neutral-50 rounded-lg px-4 py-3 border border-neutral-200 text-neutral-900 focus:outline-none">
                <option>Baths (Any)</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
              <select className="bg-neutral-50 rounded-lg px-4 py-3 border border-neutral-200 text-neutral-900 focus:outline-none">
                <option>Property Type</option>
                <option>House</option>
                <option>Condo</option>
                <option>Townhouse</option>
                <option>Land</option>
              </select>
              <Button variant="outline" className="border-neutral-300">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700 py-6">
                <Search className="w-5 h-5 mr-2" />
                Search Properties
              </Button>
              <Button variant="outline" className="border-neutral-300 px-8">
                <MapIcon className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-neutral-300 px-8">
                <Grid className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Properties Grid */}
      <section id="featured" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl mb-2">Featured Properties</h2>
              <p className="text-neutral-600">Showing 6,847 results in Los Angeles County</p>
            </div>
            <select className="bg-white border border-neutral-300 rounded-lg px-4 py-2">
              <option>Newest First</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Recently Updated</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={property.image}
                    alt={property.address}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {property.status}
                  </div>
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-neutral-600" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-indigo-600 mb-3">{property.price}</div>
                  <div className="flex items-center text-neutral-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.address}</span>
                  </div>
                  <div className="flex items-center space-x-6 text-neutral-700">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.baths} Baths</span>
                    </div>
                    <div className="text-sm">{property.sqft.toLocaleString()} sqft</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-indigo-600 hover:bg-indigo-700 px-12 py-6 text-lg">
              Load More Properties
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Get instant access to new listings, price changes, and market insights
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-indigo-600 hover:bg-indigo-50 px-10 py-6 text-lg">
              Create Free Account
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-neutral-900 text-white text-center">
        <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          DAVID CHEN REALTY
        </div>
        <p className="text-neutral-400">Premium Real Estate Platform</p>
      </footer>
    </div>
  );
}
