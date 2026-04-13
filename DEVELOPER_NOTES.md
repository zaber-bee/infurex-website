# Infurex Website - Developer Documentation

## Overview
Premium website for Infurex — a digital marketing & web design agency targeting real estate agents. Built with React, TypeScript, Tailwind CSS, and Motion (Framer Motion).

---

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--background: #000000 (Deep Black)
--gold: #D4AF37 (Luxurious Gold)
--gold-light: #F4D03F (Light Gold Accent)
--gold-dark: #B8941C (Dark Gold for Hovers)

/* Neutral Colors */
--neutral-950: #171717
--neutral-900: #262626
--white: #FFFFFF
```

### Typography Scale
```css
/* Desktop */
H1: 60px (3.75rem) - Hero headlines
H2: 48px (3rem) - Section titles
H3: 30px (1.875rem) - Card titles
H4: 24px (1.5rem) - Subsections
Body: 16px (1rem) - Default text
Small: 14px (0.875rem) - Supporting text

/* Mobile */
H1: 36px (2.25rem)
H2: 32px (2rem)
```

### Spacing Scale
```
Section Padding: py-24 lg:py-32 (96px / 128px)
Container: container mx-auto px-4 lg:px-8
Grid Gaps: gap-8 lg:gap-12 (32px / 48px)
Card Padding: p-6 lg:p-8 (24px / 32px)
```

---

## 📁 Project Structure

```
/
├── App.tsx                          # Main application entry
├── components/
│   ├── Navigation.tsx               # Sticky header with mobile menu
│   ├── Hero.tsx                     # Hero section with CTAs
│   ├── About.tsx                    # About section with feature cards
│   ├── Services.tsx                 # Service offerings (3 cards)
│   ├── HowWeWork.tsx                # 3-step process timeline
│   ├── Portfolio.tsx                # Filterable portfolio grid
│   ├── CaseStudyModal.tsx           # Case study overlay
│   ├── Testimonials.tsx             # Testimonial carousel
│   ├── Contact.tsx                  # Contact form + info
│   ├── Footer.tsx                   # Footer with links & CTA
│   └── ui/                          # ShadCN components
├── styles/
│   └── globals.css                  # Global styles + tokens
└── DEVELOPER_NOTES.md               # This file
```

---

## 🚀 Component Library

### Hero Component
**Purpose**: First impression with headline, subheadline, dual CTAs, and trust badges
**Props**: None
**Features**:
- Animated gradient background
- Floating stats cards
- Scroll indicator
- Mobile-responsive layout

### Services Component
**Purpose**: Showcase 3 core services with benefits and deliverables
**Props**: None
**Services**:
1. Web Design
2. Web Development
3. SEO & Local Listings

### Portfolio Component
**Purpose**: Display work samples with filtering
**Props**: `onViewCase: (id: number) => void`
**Features**:
- Filter: All / For Agents / Landing Pages / IDX
- Masonry grid layout
- Click to open case study modal

### Testimonials Component
**Purpose**: Social proof carousel
**Props**: None
**Features**:
- Manual navigation (prev/next)
- Dot indicators
- Auto-rotating option (can be added)
- 5 sample testimonials

### Contact Component
**Purpose**: Lead capture form with validation
**Props**: None
**Form Fields**:
- Name, Email, Phone (required)
- Company, Project Type, Budget (optional)
- Message, File Upload
**Success**: Toast notification

---

## 🎭 Animation System

### Motion (Framer Motion) Patterns

**Fade + Slide In (Section Entry)**
```tsx
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

**Staggered Children**
```tsx
transition={{ duration: 0.8, delay: index * 0.2 }}
```

**Hover Scale**
```tsx
whileHover={{ scale: 1.05 }}
transition={{ duration: 0.3 }}
```

**Scroll-triggered Animations**
Use `react-intersection-observer` to trigger animations on scroll:
```tsx
const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
animate={inView ? { opacity: 1, y: 0 } : {}}
```

---

## 📱 Responsive Breakpoints

```css
/* Tailwind Breakpoints */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

### Mobile-First Approach
All layouts use mobile-first design. Desktop enhancements use `lg:` prefix.

**Example**:
```tsx
className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
// Mobile: 1 column
// Tablet: 2 columns
// Desktop: 3 columns
```

---

## 🔧 Development Guidelines

### Build Recommendations
- **Framework**: Next.js 14+ (for production)
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion)
- **Forms**: React Hook Form + Zod validation
- **Images**: Next.js Image optimization
- **Analytics**: Google Analytics 4
- **Performance**: Lazy loading, code splitting

### Image Assets Needed
```
/public/images/
├── hero/
│   ├── hero-mockup.png           # Website mockup
│   └── hero-background.mp4       # Optional animated background
├── portfolio/
│   ├── project-1.jpg             # 6+ portfolio items
│   └── ...
├── testimonials/
│   ├── client-1.jpg              # 5+ client photos
│   └── ...
└── logo/
    ├── infurex-logo.svg
    └── infurex-icon.svg
```

### Lottie Animation Placeholders
1. **Hero Background**: Subtle animated shapes or particles
2. **Service Icons**: Animated icons for each service card
3. **Loading States**: Spinner for form submission

**How to Add**:
```tsx
import Lottie from 'lottie-react';
import animationData from './animations/hero-bg.json';

<Lottie animationData={animationData} loop={true} />
```

---

## 🔍 SEO Optimization

### Meta Tags (Add to index.html or Next.js Head)
```html
<title>Infurex — Web Design & SEO for Real Estate Agents</title>
<meta name="description" content="Infurex builds premium websites and SEO strategies for real estate agents to attract leads and close sales. Fast, modern, tailored." />
<meta name="keywords" content="real estate web design, realtor websites, IDX integration, real estate SEO, agent websites" />
<meta property="og:title" content="Infurex — Premium Websites for Real Estate Agents" />
<meta property="og:description" content="Modern, high-converting websites + SEO to help agents sell faster." />
<meta property="og:image" content="/og-image.jpg" />
<meta name="twitter:card" content="summary_large_image" />
```

### Heading Structure (SEO)
```
H1: "Premium Websites for Real Estate Agents" (Hero)
H2: Section titles (About, Services, Portfolio, etc.)
H3: Card/item titles
H4: Subsections
```

### Image Alt Text Examples
```tsx
alt="Premium real estate agent portfolio website design"
alt="Modern luxury property showcase - Infurex case study"
alt="Real estate SEO dashboard showing traffic increase"
```

---

## 🔌 Integration Notes

### Contact Form Backend
The contact form currently shows a success toast. For production:

1. **Option A: Formspree / Netlify Forms**
```tsx
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

2. **Option B: API Route (Next.js)**
```tsx
const response = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData),
});
```

3. **Option C: Email Service (SendGrid, Mailgun)**
```tsx
// Server-side only
await sendgrid.send({
  to: 'hello@infurex.com',
  from: formData.email,
  subject: 'New Project Inquiry',
  html: emailTemplate,
});
```

### Analytics
```tsx
// Add to <head> or _app.tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

---

## 🎯 Performance Optimization

### Image Optimization
```tsx
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="..."
  width={1200}
  height={800}
  priority // For above-fold images
  placeholder="blur"
/>
```

### Lazy Loading
```tsx
// Lazy load sections below the fold
const Portfolio = lazy(() => import('./components/Portfolio'));
const Testimonials = lazy(() => import('./components/Testimonials'));

<Suspense fallback={<LoadingSpinner />}>
  <Portfolio />
</Suspense>
```

### Code Splitting
Motion animations are already code-split. Ensure heavy libraries are imported dynamically.

---

## 📋 Accessibility Checklist

- [x] Semantic HTML (header, nav, main, section, footer)
- [x] ARIA labels for icon buttons
- [x] Keyboard navigation support
- [x] Focus visible states
- [x] Alt text for all images
- [x] Color contrast (WCAG AA compliant)
- [x] Screen reader friendly forms
- [ ] Skip to main content link (add if needed)

---

## 🚢 Deployment Checklist

### Pre-Launch
- [ ] Replace placeholder images with real assets
- [ ] Update contact email and phone numbers
- [ ] Add real client testimonials and photos
- [ ] Integrate analytics (GA4)
- [ ] Connect contact form to backend
- [ ] Set up domain (infurex.com)
- [ ] SSL certificate
- [ ] Favicon and social share images
- [ ] Test on multiple devices/browsers
- [ ] Run Lighthouse audit (aim for 90+ scores)

### Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://infurex.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
SENDGRID_API_KEY=SG.xxxxx
```

---

## 🧪 Testing

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Device Testing
- iPhone 12/13/14 (iOS Safari)
- Samsung Galaxy S21 (Chrome Android)
- iPad Pro (Safari)
- Desktop 1920px, 1440px, 1366px

### Performance Targets
- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

---

## 💡 Future Enhancements

### Phase 2 Features
1. **Blog Section**: SEO-driven content marketing
2. **Portfolio CMS**: Admin panel to add/edit projects
3. **Pricing Calculator**: Interactive tool for estimates
4. **Live Chat**: WhatsApp or Intercom integration
5. **Client Portal**: Login area for project tracking
6. **Multi-language Support**: Spanish translation

### Potential Integrations
- **CRM**: HubSpot, Salesforce integration
- **Scheduling**: Calendly embedded in modal
- **Payment**: Stripe for deposits
- **IDX Search**: Real estate MLS integration demo

---

## 🐛 Known Issues & Limitations

### Current Limitations
1. Form submissions show toast only (no backend integration)
2. Case studies use mock data (all show same content)
3. Portfolio filter shows all items (needs real categorization)
4. Testimonial images use placeholder (need real client photos)
5. File upload in form is UI-only (no actual upload)

### Browser Quirks
- **Safari**: Backdrop blur may have performance impact on older devices
- **Mobile Chrome**: Smooth scroll behavior may not work on Android < 12

---

## 📞 Support

For questions or issues:
- **Email**: dev@infurex.com
- **Documentation**: https://docs.infurex.com
- **Design Files**: Figma link here

---

## 📝 License

© 2024 Infurex. All rights reserved.
Built with ❤️ for real estate excellence.
