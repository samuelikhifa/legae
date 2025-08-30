// Google Analytics 4 Configuration
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 Measurement ID

// Initialize Google Analytics
export const initGA = () => {
  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true,
    // Enhanced ecommerce and user engagement
    custom_map: {
      custom_parameter_1: 'user_engagement_score',
      custom_parameter_2: 'content_category'
    }
  });
};

// Track page views
export const trackPageView = (url: string, title: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: title,
      page_location: url,
      send_page_view: true
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number,
  customParameters?: Record<string, any>
) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...customParameters
    });
  }
};

// Sports-specific event tracking
export const trackSportsEvent = {
  // Service inquiries
  serviceInquiry: (serviceType: string) => {
    trackEvent('service_inquiry', 'engagement', serviceType, undefined, {
      content_category: 'services',
      user_engagement_score: 8
    });
  },

  // Portfolio interactions
  portfolioView: (projectName: string) => {
    trackEvent('portfolio_view', 'content', projectName, undefined, {
      content_category: 'portfolio',
      user_engagement_score: 6
    });
  },

  // Contact form submissions
  contactSubmission: (formType: string) => {
    trackEvent('contact_form_submit', 'conversion', formType, 10, {
      content_category: 'contact',
      user_engagement_score: 10
    });
  },

  // Newsletter signups
  newsletterSignup: () => {
    trackEvent('newsletter_signup', 'conversion', 'email_subscription', 8, {
      content_category: 'newsletter',
      user_engagement_score: 7
    });
  },

  // Video/media engagement
  mediaEngagement: (mediaType: string, duration: number) => {
    trackEvent('media_engagement', 'content', mediaType, duration, {
      content_category: 'media',
      user_engagement_score: Math.min(duration / 30, 10) // Score based on engagement time
    });
  },

  // CTA button clicks
  ctaClick: (ctaText: string, location: string) => {
    trackEvent('cta_click', 'engagement', `${ctaText}_${location}`, undefined, {
      content_category: 'cta',
      user_engagement_score: 5
    });
  },

  // Search functionality (if implemented)
  siteSearch: (searchTerm: string, resultsCount: number) => {
    trackEvent('site_search', 'engagement', searchTerm, resultsCount, {
      content_category: 'search',
      user_engagement_score: 4
    });
  }
};

// User journey tracking
export const trackUserJourney = {
  // Track time spent on page
  timeOnPage: (pageName: string, timeSpent: number) => {
    trackEvent('time_on_page', 'engagement', pageName, timeSpent, {
      content_category: 'user_journey'
    });
  },

  // Track scroll depth
  scrollDepth: (percentage: number, pageName: string) => {
    trackEvent('scroll_depth', 'engagement', pageName, percentage, {
      content_category: 'user_journey',
      user_engagement_score: Math.min(percentage / 10, 10)
    });
  },

  // Track exit intent
  exitIntent: (pageName: string) => {
    trackEvent('exit_intent', 'engagement', pageName, undefined, {
      content_category: 'user_journey'
    });
  }
};

// Enhanced ecommerce tracking (for future service bookings)
export const trackEcommerce = {
  // Track service consultation bookings
  beginCheckout: (serviceType: string, value: number) => {
    window.gtag('event', 'begin_checkout', {
      currency: 'USD',
      value: value,
      items: [{
        item_id: serviceType,
        item_name: `${serviceType} Consultation`,
        category: 'sports_services',
        quantity: 1,
        price: value
      }]
    });
  },

  // Track completed service bookings
  purchase: (serviceType: string, value: number, transactionId: string) => {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      currency: 'USD',
      value: value,
      items: [{
        item_id: serviceType,
        item_name: `${serviceType} Service`,
        category: 'sports_services',
        quantity: 1,
        price: value
      }]
    });
  }
};
