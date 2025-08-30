import { useEffect } from 'react';
import { trackUserJourney } from '../../utils/analytics';

interface ScrollTrackerProps {
  pageName: string;
}

const ScrollTracker: React.FC<ScrollTrackerProps> = ({ pageName }) => {
  useEffect(() => {
    let startTime = Date.now();
    let maxScroll = 0;
    let scrollDepthMarkers = [25, 50, 75, 90];
    let trackedDepths = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      maxScroll = Math.max(maxScroll, scrollPercent);

      // Track scroll depth milestones
      scrollDepthMarkers.forEach(depth => {
        if (scrollPercent >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth);
          trackUserJourney.scrollDepth(depth, pageName);
        }
      });
    };

    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackUserJourney.timeOnPage(pageName, timeSpent);
      trackUserJourney.scrollDepth(maxScroll, pageName);
    };

    // Track exit intent (mouse leaving viewport)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        trackUserJourney.exitIntent(pageName);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [pageName]);

  return null;
};

export default ScrollTracker;
