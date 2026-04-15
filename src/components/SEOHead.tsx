import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEOHead({
  title = 'Infurex - Premium Web Design & Digital Marketing for Real Estate Agents',
  description = 'Transform your real estate business with premium web design, SEO, and digital marketing solutions. We specialize in building high-converting websites for real estate agents and agencies.',
  image = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=630&fit=crop',
  url = 'https://infurex.com'
}: SEOHeadProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Remove existing meta tags that we'll be setting
    const metaTagsToRemove = [
      'description',
      'og:title',
      'og:description',
      'og:image',
      'og:url',
      'og:type',
      'twitter:card',
      'twitter:title',
      'twitter:description',
      'twitter:image',
      'theme-color',
      'keywords'
    ];

    metaTagsToRemove.forEach(name => {
      const existing = document.querySelector(`meta[name="${name}"]`) || 
                      document.querySelector(`meta[property="${name}"]`);
      if (existing) existing.remove();
    });

    // Basic meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: 'real estate web design, real estate digital marketing, real estate SEO, agent websites, property websites, IDX integration, real estate branding, luxury real estate marketing' },
      { name: 'author', content: 'Infurex Digital Marketing' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0' },
      { name: 'theme-color', content: '#0B1120' },
      
      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:site_name', content: 'Infurex' },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: url },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ];

    // Create and append meta tags
    metaTags.forEach(({ name, property, content }) => {
      const meta = document.createElement('meta');
      if (name) meta.setAttribute('name', name);
      if (property) meta.setAttribute('property', property);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    });

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Add JSON-LD structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Infurex',
      description: description,
      url: url,
      logo: 'https://infurex.com/logo.png',
      image: image,
      telephone: '+880-1757-553238',
      email: 'infurexmarketing@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'BD'
      },
      sameAs: [
        'https://www.facebook.com/profile.php?id=61572375227568',
        'https://www.instagram.com/_infurex._.marketing/',
        'https://www.linkedin.com/in/jaber-hossain-297233372/'
      ],
      areaServed: {
        '@type': 'Country',
        name: 'Global'
      },
      serviceType: [
        'Web Design',
        'Web Development',
        'Digital Marketing',
        'SEO Services',
        'Real Estate Marketing'
      ],
      priceRange: '$$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '48'
      }
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    // Add EmailJS CDN script
    let emailjsScript = document.querySelector('script[src*="emailjs"]');
    if (!emailjsScript) {
      emailjsScript = document.createElement('script');
      emailjsScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js');
      emailjsScript.setAttribute('type', 'text/javascript');
      document.head.appendChild(emailjsScript);
    }

    // Cleanup function
    return () => {
      // We don't remove on unmount to keep SEO tags throughout navigation
    };
  }, [title, description, image, url]);

  return null;
}