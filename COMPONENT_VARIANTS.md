# Component Variants & Export Guide

This document outlines variant states for each component, making it easy to reuse and customize components across different pages or projects.

---

## 🧩 Navigation Component

**File**: `/components/Navigation.tsx`

### Variants

#### Default (Current)
```tsx
<Navigation />
```
- Sticky header
- Transparent on top, solid on scroll
- Mobile hamburger menu
- Gold CTA button

#### Props for Customization
```tsx
interface NavigationProps {
  transparent?: boolean;      // Always transparent (no scroll effect)
  hideOnScroll?: boolean;      // Hide when scrolling down
  variant?: 'light' | 'dark';  // Light or dark theme
  ctaText?: string;            // Custom CTA text
  ctaLink?: string;            // Custom CTA destination
}
```

#### Usage Examples
```tsx
// Always transparent
<Navigation transparent={true} />

// Light theme (for dark backgrounds)
<Navigation variant="light" />

// Custom CTA
<Navigation ctaText="Get Started" ctaLink="#signup" />
```

---

## 🎯 Hero Component

**File**: `/components/Hero.tsx`

### Variants

#### Default (Current)
```tsx
<Hero />
```
- Full-screen hero
- Headline + subheadline
- Dual CTAs
- Trust badges
- Right-side image

#### Props for Customization
```tsx
interface HeroProps {
  variant?: 'default' | 'minimal' | 'centered';
  headline?: string;
  subheadline?: string;
  primaryCTA?: { text: string; link: string };
  secondaryCTA?: { text: string; link: string };
  showTrustBadges?: boolean;
  backgroundImage?: string;
}
```

#### Variant Examples

**Minimal Hero** (Text only, no images)
```tsx
<Hero 
  variant="minimal"
  headline="Welcome Back"
  subheadline="Continue where you left off"
  showTrustBadges={false}
/>
```

**Centered Hero** (All content centered)
```tsx
<Hero 
  variant="centered"
  headline="404 - Page Not Found"
  primaryCTA={{ text: "Go Home", link: "/" }}
/>
```

---

## 📊 Service Card Component

**File**: `/components/Services.tsx` (extract into `/components/ServiceCard.tsx`)

### Component Structure
```tsx
interface ServiceCardProps {
  icon: React.ComponentType;
  title: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  ctaText?: string;
  ctaLink?: string;
  variant?: 'default' | 'compact' | 'featured';
}
```

### Variant Examples

**Default** (Current implementation)
```tsx
<ServiceCard
  icon={Monitor}
  title="Web Design"
  description="Stunning, conversion-focused designs..."
  benefits={['Custom luxury designs', '...']}
  deliverables={['Desktop & mobile designs', '...']}
  ctaText="Request a Project"
/>
```

**Compact** (For sidebar or smaller spaces)
```tsx
<ServiceCard
  variant="compact"
  icon={Code}
  title="Web Development"
  description="Fast, secure, and scalable websites."
  ctaText="Learn More"
/>
```

**Featured** (Highlighted service)
```tsx
<ServiceCard
  variant="featured"
  icon={Search}
  title="SEO & Marketing"
  description="Dominate local search..."
  benefits={['...']}
  deliverables={['...']}
  ctaText="Get Started"
/>
```

---

## 🖼️ Portfolio Item Component

**File**: `/components/Portfolio.tsx` (extract into `/components/PortfolioItem.tsx`)

### Component Structure
```tsx
interface PortfolioItemProps {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
  onClick: (id: number) => void;
  variant?: 'default' | 'large' | 'minimal';
}
```

### Variant Examples

**Default** (Current)
```tsx
<PortfolioItem
  id={1}
  title="Luxury Agent Portfolio"
  category="For Agents"
  image="/images/portfolio-1.jpg"
  alt="..."
  onClick={handleViewCase}
/>
```

**Large** (Featured project)
```tsx
<PortfolioItem
  variant="large"
  id={1}
  title="Featured: Modern Estate"
  category="For Agents"
  image="/images/featured.jpg"
  // Takes up 2 columns in grid
/>
```

**Minimal** (List view)
```tsx
<PortfolioItem
  variant="minimal"
  id={1}
  title="Project Title"
  category="Category"
  // Shows as list item instead of card
/>
```

---

## 💬 Testimonial Card Component

**File**: `/components/Testimonials.tsx` (extract into `/components/TestimonialCard.tsx`)

### Component Structure
```tsx
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
  rating?: number;
  variant?: 'default' | 'compact' | 'featured';
}
```

### Variant Examples

**Default** (Carousel card)
```tsx
<TestimonialCard
  quote="Infurex delivered exactly what I needed..."
  author="Michael Chen"
  role="Top Producer"
  image="/testimonials/michael.jpg"
  rating={5}
/>
```

**Compact** (For sidebar)
```tsx
<TestimonialCard
  variant="compact"
  quote="Amazing service!"
  author="Sarah M."
  rating={5}
/>
```

**Featured** (Highlight a specific testimonial)
```tsx
<TestimonialCard
  variant="featured"
  quote="Working with Infurex was transformative..."
  author="Jennifer Martinez"
  role="Real Estate Agent & Team Leader"
  image="/testimonials/jennifer.jpg"
  rating={5}
/>
```

---

## 📝 Contact Form Component

**File**: `/components/Contact.tsx` (extract into `/components/ContactForm.tsx`)

### Component Structure
```tsx
interface ContactFormProps {
  variant?: 'default' | 'inline' | 'modal';
  showContactInfo?: boolean;
  onSubmit?: (data: FormData) => void;
  submitButtonText?: string;
}
```

### Variant Examples

**Default** (Current)
```tsx
<ContactForm 
  variant="default"
  showContactInfo={true}
/>
```

**Inline** (Embedded in page)
```tsx
<ContactForm 
  variant="inline"
  submitButtonText="Send Message"
  showContactInfo={false}
/>
```

**Modal** (Popup form)
```tsx
<ContactForm 
  variant="modal"
  onSubmit={handleSubmit}
  submitButtonText="Submit"
/>
```

---

## 🎨 Button Component (Using ShadCN)

**File**: `/components/ui/button.tsx`

### Available Variants
```tsx
// Primary Gold Button
<Button className="bg-gold hover:bg-gold-dark text-black">
  Get a Demo
</Button>

// Outline Gold Button
<Button 
  variant="outline" 
  className="border-gold/50 text-gold hover:bg-gold/10"
>
  View Portfolio
</Button>

// Ghost Button
<Button variant="ghost" className="text-gold hover:bg-gold/10">
  Learn More
</Button>

// Destructive Button
<Button variant="destructive">
  Delete
</Button>

// Link Button
<Button variant="link" className="text-gold">
  Read More →
</Button>
```

### Size Variants
```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Icon /></Button>
```

---

## 📦 Card Component (Using ShadCN)

**File**: `/components/ui/card.tsx`

### Basic Usage
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Styled Variants

**Gold Accent Card**
```tsx
<Card className="bg-gradient-to-br from-neutral-900 to-black border-gold/20 hover:border-gold/30">
  {/* Content */}
</Card>
```

**Featured Card**
```tsx
<Card className="bg-gradient-to-br from-gold/10 to-gold/5 border-gold/30">
  {/* Content */}
</Card>
```

---

## 🎭 Animation Presets

### Fade In
```tsx
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 }
};

<motion.div {...fadeIn}>
  {/* Content */}
</motion.div>
```

### Slide Up
```tsx
const slideUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

<motion.div {...slideUp}>
  {/* Content */}
</motion.div>
```

### Slide In (Left)
```tsx
const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

<motion.div {...slideInLeft}>
  {/* Content */}
</motion.div>
```

### Scale In
```tsx
const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 }
};

<motion.div {...scaleIn}>
  {/* Content */}
</motion.div>
```

### Stagger Children
```tsx
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

<motion.div variants={staggerContainer} initial="initial" animate="animate">
  {items.map((item) => (
    <motion.div key={item.id} variants={staggerItem}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

## 🎨 Color Utility Classes

### Background Colors
```tsx
// Black backgrounds
className="bg-black"
className="bg-neutral-950"
className="bg-neutral-900"

// Gold backgrounds
className="bg-gold"
className="bg-gold-light"
className="bg-gold-dark"
className="bg-gold/10"  // 10% opacity

// Gradients
className="bg-gradient-to-r from-gold to-gold-light"
className="bg-gradient-to-br from-neutral-900 to-black"
```

### Text Colors
```tsx
// White text
className="text-white"
className="text-white/80"  // 80% opacity
className="text-white/60"

// Gold text
className="text-gold"
className="text-gold-light"
className="text-gold-dark"

// Gradient text
className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent"
```

### Border Colors
```tsx
className="border-gold"
className="border-gold/20"
className="border-white/10"

// Hover states
className="border-white/10 hover:border-gold/30"
```

---

## 📐 Layout Utilities

### Container
```tsx
className="container mx-auto px-4 lg:px-8"
// Centered container with responsive padding
```

### Grid Layouts
```tsx
// Responsive grid
className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"

// Auto-fit grid
className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6"
```

### Flexbox
```tsx
// Centered content
className="flex items-center justify-center"

// Space between
className="flex items-center justify-between"

// Column layout
className="flex flex-col space-y-4"
```

---

## 🎯 Interactive States

### Hover Effects
```tsx
// Scale on hover
className="transition-transform hover:scale-105"

// Translate up
className="transition-transform hover:-translate-y-2"

// Color change
className="text-white/60 hover:text-gold transition-colors"

// Border glow
className="border-white/10 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/10"
```

### Focus States
```tsx
className="focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black"
```

### Active States
```tsx
className="active:scale-95"
```

---

## 📱 Responsive Utilities

### Show/Hide on Breakpoints
```tsx
// Hide on mobile, show on desktop
className="hidden lg:block"

// Show on mobile, hide on desktop
className="block lg:hidden"

// Different layouts
className="flex-col lg:flex-row"
```

### Responsive Spacing
```tsx
className="p-4 lg:p-8"
className="space-y-4 lg:space-y-8"
className="gap-4 lg:gap-12"
```

### Responsive Typography
```tsx
className="text-sm lg:text-base"
className="text-2xl lg:text-4xl"
```

---

## 🎨 Shadow Effects

### Box Shadows
```tsx
// Subtle shadow
className="shadow-lg"

// Gold glow
className="shadow-xl shadow-gold/20"

// Hover shadow
className="hover:shadow-2xl hover:shadow-gold/10"
```

### Drop Shadows
```tsx
className="drop-shadow-lg"
className="drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
```

---

## 🔄 Loading States

### Spinner
```tsx
<div className="flex items-center justify-center p-8">
  <div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
</div>
```

### Skeleton
```tsx
<div className="animate-pulse space-y-4">
  <div className="h-4 bg-white/10 rounded w-3/4"></div>
  <div className="h-4 bg-white/10 rounded w-1/2"></div>
</div>
```

### Pulse
```tsx
<div className="animate-pulse bg-gold/20 rounded-lg p-6">
  Loading...
</div>
```

---

## 📋 Form Variants

### Input Styles
```tsx
// Default
<Input className="bg-black/50 border-white/10 text-white focus:border-gold" />

// Gold focus
<Input className="bg-transparent border-gold/30 text-white focus:border-gold focus:ring-gold" />

// Minimal
<Input className="bg-transparent border-0 border-b-2 border-white/20 rounded-none focus:border-gold" />
```

### Select Styles
```tsx
<Select>
  <SelectTrigger className="bg-black/50 border-white/10 text-white focus:border-gold">
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
  </SelectContent>
</Select>
```

---

## 🎁 Export Guide

### How to Extract Components

1. **Create new component file**:
```bash
touch /components/ServiceCard.tsx
```

2. **Move component logic**:
```tsx
// ServiceCard.tsx
export interface ServiceCardProps {
  icon: React.ComponentType;
  title: string;
  // ... other props
}

export function ServiceCard({ icon: Icon, title, ... }: ServiceCardProps) {
  return (
    <div className="...">
      {/* Component JSX */}
    </div>
  );
}
```

3. **Import in parent**:
```tsx
// Services.tsx
import { ServiceCard } from './ServiceCard';

export function Services() {
  return (
    <section>
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </section>
  );
}
```

---

## ✅ Component Checklist

When creating a reusable component:

- [ ] Define clear TypeScript interfaces
- [ ] Add variant prop for flexibility
- [ ] Include default values
- [ ] Add JSDoc comments
- [ ] Make responsive by default
- [ ] Include accessibility attributes
- [ ] Export component and types
- [ ] Add usage examples in comments

---

**Last Updated**: November 9, 2024  
**Version**: 1.0
