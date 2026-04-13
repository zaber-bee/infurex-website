# Infurex — Premium Website for Real Estate Agents

A modern, conversion-focused website built for Infurex, a digital marketing and web design agency specializing in real estate professionals.

![Infurex Preview](preview.jpg)

---

## ✨ Features

### 🎨 Design
- **Black & Gold Aesthetic**: Luxurious color palette with deep black (#000000) and warm gold (#D4AF37) accents
- **Premium Typography**: Modern, bold headlines with clean sans-serif body text
- **Smooth Animations**: Fade/slide on scroll, interactive hover states, animated backgrounds
- **Fully Responsive**: Mobile-first design that looks stunning on all devices

### 🧩 Sections
1. **Hero** — Compelling headline, dual CTAs, trust badges, and animated background
2. **About** — Company mission with 3 key features (Design, Performance, SEO)
3. **Services** — Three core offerings with benefits and deliverables
4. **How We Work** — Simple 3-step process with timeline
5. **Portfolio** — Filterable grid of case studies (All / For Agents / Landing Pages / IDX)
6. **Testimonials** — Carousel with 5 client reviews
7. **Contact** — Comprehensive inquiry form with quick contact info
8. **Footer** — Free audit CTA, quick links, social icons

### 🎯 Key Features
- ✅ Sticky navigation with smooth scrolling
- ✅ Mobile hamburger menu
- ✅ Case study modal overlays
- ✅ Portfolio filtering system
- ✅ Testimonial carousel with manual navigation
- ✅ Toast notifications for form submissions
- ✅ Accessible semantic HTML
- ✅ SEO-optimized structure
- ✅ No visible pricing (as requested)

---

## 🚀 Quick Start

This is a React + TypeScript application built with:
- **React**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS v4**: Styling
- **Motion (Framer Motion)**: Animations
- **ShadCN/UI**: Component library
- **Lucide React**: Icons
- **Sonner**: Toast notifications

### Installation

The app is ready to use in Figma Make. For local development:

```bash
# Install dependencies (if needed)
npm install

# Run development server
npm run dev
```

---

## 📁 Project Structure

```
/
├── App.tsx                       # Main application
├── components/
│   ├── Navigation.tsx            # Sticky header
│   ├── Hero.tsx                  # Hero section
│   ├── About.tsx                 # About + features
│   ├── Services.tsx              # Service offerings
│   ├── HowWeWork.tsx             # Process timeline
│   ├── Portfolio.tsx             # Project grid
│   ├── CaseStudyModal.tsx        # Case study overlay
│   ├── Testimonials.tsx          # Client reviews
│   ├── Contact.tsx               # Contact form
│   ├── Footer.tsx                # Footer section
│   └── ui/                       # ShadCN components
├── styles/
│   └── globals.css               # Global styles + tokens
├── DEVELOPER_NOTES.md            # Technical documentation
├── COPY_AND_SEO.md               # Content & SEO guide
├── COMPONENT_VARIANTS.md         # Component reusability
└── README.md                     # This file
```

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Deep Black** | `#000000` | Primary background |
| **Gold** | `#D4AF37` | Primary accent, CTAs |
| **Gold Light** | `#F4D03F` | Highlights, gradients |
| **Gold Dark** | `#B8941C` | Hover states |
| **White** | `#FFFFFF` | Primary text |
| **White/70** | `rgba(255,255,255,0.7)` | Secondary text |

---

## 📱 Responsive Breakpoints

| Breakpoint | Size | Usage |
|------------|------|-------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |

---

## 🎭 Key Components

### Navigation
Sticky header that becomes solid on scroll, with mobile hamburger menu.

### Hero
Full-screen section with:
- Large headline with gold gradient accent
- Subheadline explaining the value proposition
- Primary CTA: "Get a Demo" (gold button)
- Secondary CTA: "View Portfolio" (outline button)
- Trust badges and floating stats

### Services
Three service cards:
1. **Web Design** — Custom luxury designs
2. **Web Development** — Fast, scalable websites
3. **SEO & Local Listings** — Dominate local search

Each card includes:
- Icon
- Description
- Key benefits list
- Deliverables list
- CTA button

### Portfolio
Grid layout with filtering:
- Filter tabs: All / For Agents / Landing Pages / IDX
- Clickable items that open case study modals
- Hover effects with gold glow

### Testimonials
Carousel featuring:
- 5-star ratings
- Client photos
- Full testimonials
- Navigation arrows and dot indicators

### Contact Form
Comprehensive form with:
- Name, Email, Phone (required)
- Company, Project Type, Budget (optional)
- Message textarea
- File upload UI
- Success toast notification

---

## 🔍 SEO

### Meta Tags
```html
<title>Infurex — Web Design & SEO for Real Estate Agents</title>
<meta name="description" content="Infurex builds premium websites and SEO strategies for real estate agents to attract leads and close sales. Fast, modern, tailored." />
```

### Heading Structure
- **H1**: "Premium Websites for Real Estate Agents" (Hero)
- **H2**: Section titles (About, Services, Portfolio, etc.)
- **H3**: Card and subsection titles
- **H4**: Supporting headings

### Alt Text Examples
All images include descriptive alt text:
- "Premium real estate agent portfolio website design"
- "Modern luxury property showcase - Infurex case study"
- "Real estate professional headshot - client testimonial"

See [COPY_AND_SEO.md](COPY_AND_SEO.md) for complete SEO guidelines.

---

## 📖 Documentation

### For Developers
See [DEVELOPER_NOTES.md](DEVELOPER_NOTES.md) for:
- Design system tokens
- Component architecture
- Animation patterns
- Build recommendations
- Performance optimization
- Accessibility checklist
- Deployment guide

### For Content Writers
See [COPY_AND_SEO.md](COPY_AND_SEO.md) for:
- All website copy
- Meta tags and descriptions
- SEO keywords
- Testimonial templates
- Email sequences
- Social media copy

### For Designers
See [COMPONENT_VARIANTS.md](COMPONENT_VARIANTS.md) for:
- Component variants
- Animation presets
- Color utilities
- Layout patterns
- Interactive states
- Export guide

---

## 🎯 Call-to-Actions

### Primary CTAs
- **"Get a Demo"** — Main conversion goal
- **"Request a Project"** — Service inquiry
- **"Book a Call"** — Direct scheduling

### Secondary CTAs
- **"View Portfolio"** — Portfolio navigation
- **"Request Free Audit"** — Lead magnet

---

## 📋 Conversion Features

### Trust Signals
- ✅ "Built for Realtors" badge
- ✅ "5-Star Rated" indicator
- ✅ "200+ Websites Launched" stat
- ✅ "98% Client Satisfaction" metric
- ✅ "2-4 Weeks Delivery" timeline

### Social Proof
- 5 detailed client testimonials
- Portfolio of real estate projects
- Before/after metrics in case studies
- Client photos and roles

### Lead Capture
- Multiple CTA placements
- Comprehensive contact form
- Quick contact sidebar
- Calendar integration option
- Fast response time promise

---

## 🚀 Next Steps

### To Complete the Website
1. Replace placeholder images with real assets
2. Update contact information (email, phone)
3. Add real client testimonials and photos
4. Connect contact form to backend/email service
5. Set up Google Analytics
6. Add Lottie animations (optional)
7. Test on multiple devices
8. Run Lighthouse audit

### For Production
- Deploy to Vercel/Netlify
- Set up custom domain (infurex.com)
- Configure SSL certificate
- Set up email forwarding
- Add social media links
- Create OG images for sharing
- Submit sitemap to Google

---

## 🔗 Important Links

- **Website**: [infurex.com](https://infurex.com)
- **Email**: hello@infurex.com
- **Phone**: (555) 123-4567
- **Location**: Los Angeles, CA

### Social Media
- Facebook: [facebook.com/infurex](#)
- Instagram: [@infurex](#)
- LinkedIn: [linkedin.com/company/infurex](#)
- Twitter: [@infurex](#)

---

## 📝 Notes

### Current Limitations
- Form submission shows toast only (no backend integration yet)
- All case studies show same mock data
- Portfolio filter shows all items regardless of selection (needs categorization)
- Testimonial images use placeholders
- File upload is UI-only

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 📄 License

© 2024 Infurex. All rights reserved.  
Built for real estate excellence.

---

## 🙏 Credits

**Built with**:
- React + TypeScript
- Tailwind CSS
- Motion (Framer Motion)
- ShadCN/UI Components
- Lucide Icons
- Unsplash Images

**Design Philosophy**:
Premium, conversion-focused, accessible, and built specifically for real estate professionals.

---

## 💡 Support

For questions, customization requests, or technical support:

- 📧 Email: dev@infurex.com
- 📖 Documentation: Full guides in `/DEVELOPER_NOTES.md`
- 🎨 Design System: See `/styles/globals.css`

---

**Version**: 1.0  
**Last Updated**: November 9, 2024  
**Status**: Ready for Production (pending content updates)
