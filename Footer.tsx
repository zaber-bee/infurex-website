import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import infurexLogo from 'figma:asset/7bc953bb21690b66722742cabbf656578993344b.png';

export function Footer() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Web Design',
    'Web Development',
    'SEO Optimization',
    'Local Listings',
    'IDX Integration',
    'Branding',
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61572375227568', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/_infurex._.marketing/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jaber-hossain-297233372/', label: 'LinkedIn' },
  ];

  return (
    <footer className="border-t border-white/10" style={{ background: 'linear-gradient(to bottom, #0B1120, #0f1624)' }}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Top Section - Free Audit CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-8 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border border-gold/30 rounded-2xl text-center"
        >
          <h3 className="text-white mb-3">Get a Free Website Audit</h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            See how your current website stacks up. We'll analyze your site and send you a detailed report with actionable insights.
          </p>
          <Button
            onClick={() => handleScrollTo('#contact')}
            className="bg-gold hover:bg-gold-dark text-black"
          >
            Request Free Audit
          </Button>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={infurexLogo} 
                alt="Infurex Logo" 
                className="w-10 h-10 object-contain"
                style={{ mixBlendMode: 'lighten' }}
              />
              <span className="text-xl text-white tracking-wider">INFUREX</span>
            </div>
            <p className="text-white/60 mb-4 leading-relaxed">
              Premium websites and digital marketing solutions exclusively for real estate professionals.
            </p>
            <a 
              href="https://infurex.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors text-sm"
            >
              www.infurex.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleScrollTo(link.href); }}
                    className="text-white/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleScrollTo('#services'); }}
                    className="text-white/60 hover:text-gold transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:infurexmarketing@gmail.com"
                className="flex items-center space-x-2 text-white/60 hover:text-gold transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>infurexmarketing@gmail.com</span>
              </a>
              <p className="text-white/60 text-sm">
                Bangladesh
              </p>
              <div className="pt-2">
                <p className="text-white/40 text-xs mb-3">Follow us</p>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-9 h-9 bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold/30 rounded-lg flex items-center justify-center transition-all duration-300 group"
                    >
                      <social.icon className="w-4 h-4 text-white/60 group-hover:text-gold transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/40 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Infurex. All rights reserved. Built for real estate excellence.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/40 hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Notes Section - Hidden but included for handoff */}
      <div className="hidden" data-developer-notes>
        {/* Color Tokens:
          - Primary Background: #0B1120 (navy)
          - Rose Gold Primary: #D4A574 (rose gold)
          - Gold Light: #E8C4A0
          - Gold Dark: #B8895E
          - Neutral Dark: #171717 (neutral-950)
          - Neutral Mid: #262626 (neutral-900)
        */}
        {/* Typography Scale:
          - H1: 3.75rem (60px) desktop, 2.25rem (36px) mobile
          - H2: 3rem (48px) desktop, 2rem (32px) mobile
          - H3: 1.875rem (30px)
          - H4: 1.5rem (24px)
          - Body: 1rem (16px)
          - Small: 0.875rem (14px)
        */}
        {/* Spacing:
          - Section padding: py-24 lg:py-32
          - Container: container mx-auto px-4 lg:px-8
          - Grid gaps: gap-8 lg:gap-12
        */}
        {/* Animation Recommendations:
          - Use Framer Motion for scroll animations
          - Lottie for hero background animation
          - Entrance animations: fade + slide, duration 0.8s
          - Stagger delays: 0.2s increments
        */}
        {/* Build Recommendations:
          - Framework: Next.js 14+
          - Styling: Tailwind CSS v4
          - Forms: React Hook Form + Zod validation
          - Analytics: Google Analytics 4
          - Performance: Image optimization, lazy loading
        */}
      </div>
    </footer>
  );
}