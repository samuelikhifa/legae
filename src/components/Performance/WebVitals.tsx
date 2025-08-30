import { useEffect } from 'react';

// Dynamic import to handle different web-vitals versions
const importWebVitals = async () => {
  try {
    const webVitals = await import('web-vitals');
    return webVitals;
  } catch (error) {
    console.warn('web-vitals could not be loaded:', error);
    return null;
  }
};

interface WebVitalsProps {
  onMetric?: (metric: any) => void;
}

const WebVitals: React.FC<WebVitalsProps> = ({ onMetric }) => {
  useEffect(() => {
    const handleMetric = (metric: any) => {
      // Log to console for development
      console.log(`${metric.name}: ${metric.value}`);
      
      // Send to analytics
      if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
      
      // Custom callback
      onMetric?.(metric);
    };

    // Dynamically load and use web-vitals
    const loadWebVitals = async () => {
      const webVitals = await importWebVitals();
      if (!webVitals) return;

      try {
        // Use current web-vitals v3+ API
        if (webVitals.onCLS) {
          webVitals.onCLS(handleMetric);
          webVitals.onFCP && webVitals.onFCP(handleMetric);
          webVitals.onLCP && webVitals.onLCP(handleMetric);
          webVitals.onTTFB && webVitals.onTTFB(handleMetric);
          // Use onINP for v3+
          webVitals.onINP && webVitals.onINP(handleMetric);
        }
      } catch (error) {
        console.warn('Error measuring web vitals:', error);
      }
    };

    loadWebVitals();
  }, [onMetric]);

  return null;
};

export default WebVitals;