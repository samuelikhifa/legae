import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEOHead: React.FC<SEOProps> = ({
  title = "Legacy54 - Elevating African Sports Excellence",
  description = "Legacy54 is Africa's premier sports management company, designing and delivering unforgettable sporting experiences across all 54 African countries. Expert event management, athlete representation, and brand partnerships.",
  keywords = "African sports management, sports events Africa, athlete representation, sports marketing Africa, Legacy54, sports excellence, African sports culture, event management, brand partnerships",
  image = "/images/legacy54-og-image.jpg",
  url = "https://www.legacy54.com",
  type = "website",
  author = "Legacy54",
  publishedTime,
  modifiedTime
}) => {
  const fullTitle = title.includes('Legacy54') ? title : `${title} | Legacy54`;
  const canonicalUrl = url.endsWith('/') ? url.slice(0, -1) : url;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Helper function to update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Primary Meta Tags
    updateMetaTag('title', fullTitle);
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');
    
    // Canonical URL
    updateLinkTag('canonical', canonicalUrl);
    
    // Open Graph / Facebook
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:site_name', 'Legacy54', true);
    updateMetaTag('og:locale', 'en_US', true);
    
    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:url', canonicalUrl, true);
    updateMetaTag('twitter:title', fullTitle, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:creator', '@Legacy54Sports', true);
    
    // Article specific tags
    if (publishedTime) {
      updateMetaTag('article:published_time', publishedTime, true);
    }
    if (modifiedTime) {
      updateMetaTag('article:modified_time', modifiedTime, true);
    }
    updateMetaTag('article:author', author, true);
    
    // Additional SEO Tags
    updateMetaTag('theme-color', '#01215E');
    updateMetaTag('msapplication-TileColor', '#01215E');
    updateMetaTag('application-name', 'Legacy54');
    
    // Geo Tags for African focus
    updateMetaTag('geo.region', 'AF');
    updateMetaTag('geo.placename', 'Africa');
    updateMetaTag('ICBM', '0.0236, 37.9062');
    
    // Structured Data - Organization
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredDataScript);
    }
    
    structuredDataScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SportsOrganization",
      "name": "Legacy54",
      "alternateName": "Legacy54 Sports Management",
      "url": "https://www.legacy54.com",
      "logo": "https://www.legacy54.com/images/legacy54-logo.png",
      "description": description,
      "foundingDate": "2020",
      "founder": {
        "@type": "Person",
        "name": "Legacy54 Founders"
      },
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Africa",
        "addressCountry": "Multiple African Countries"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+234-XXX-XXXX",
        "contactType": "customer service",
        "availableLanguage": ["English", "French", "Arabic", "Swahili"]
      },
      "sameAs": [
        "https://www.facebook.com/Legacy54Sports",
        "https://www.twitter.com/Legacy54Sports",
        "https://www.instagram.com/Legacy54Sports",
        "https://www.linkedin.com/company/legacy54"
      ],
      "sport": [
        "Football",
        "Basketball",
        "Athletics",
        "Rugby",
        "Cricket",
        "Tennis"
      ],
      "areaServed": {
        "@type": "Place",
        "name": "Africa",
        "description": "All 54 African Countries"
      }
    });
  }, [fullTitle, description, keywords, image, canonicalUrl, type, author, publishedTime, modifiedTime]);

  return null; // No JSX needed since we're manipulating the DOM directly
};

export default SEOHead;
