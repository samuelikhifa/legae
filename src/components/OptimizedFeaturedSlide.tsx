import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

interface Slide {
  id: string;
  title: string;
  description: string;
  image: string;
  ctaText?: string;
  ctaAction?: () => void;
}

interface OptimizedFeaturedSlideProps {
  slides: Slide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
}

// Image cache for instant loading
const imageCache = new Map<string, HTMLImageElement>();

const OptimizedFeaturedSlide = ({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
  className = "",
}: OptimizedFeaturedSlideProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Memoize slide data to prevent unnecessary re-renders
  const slideData = useMemo(() => slides, [slides]);
  const currentSlideData = slideData[currentSlide];

  // Ultra-aggressive preloading with resource hints
  useEffect(() => {
    if (slideData.length === 0) return;

    const preloadImages = async () => {
      // Add resource hints for better network performance
      const addResourceHints = () => {
        slideData.forEach((slide, index) => {
          if (slide.image.startsWith('http')) {
            try {
              const url = new URL(slide.image);
              
              // DNS prefetch
              if (!document.querySelector(`link[rel="dns-prefetch"][href="//${url.hostname}"]`)) {
                const dnsPrefetch = document.createElement('link');
                dnsPrefetch.rel = 'dns-prefetch';
                dnsPrefetch.href = `//${url.hostname}`;
                document.head.appendChild(dnsPrefetch);
              }
              
              // Preconnect for first image
              if (index === 0 && !document.querySelector(`link[rel="preconnect"][href="${url.origin}"]`)) {
                const preconnect = document.createElement('link');
                preconnect.rel = 'preconnect';
                preconnect.href = url.origin;
                preconnect.crossOrigin = 'anonymous';
                document.head.appendChild(preconnect);
              }
            } catch (e) {
              console.warn('Invalid URL for slide image:', slide.image);
            }
          }
        });
      };

      addResourceHints();

      // Preload images with priority ordering
      const preloadPromises = slideData.map((slide, index) => {
        return new Promise<void>((resolve) => {
          // Skip if already cached
          if (imageCache.has(slide.image)) {
            setLoadedImages(prev => new Set([...prev, slide.image]));
            resolve();
            return;
          }

          const img = new Image();
          
          // Set performance attributes
          if ('fetchPriority' in img) {
            (img as any).fetchPriority = index === 0 ? 'high' : 'low';
          }
          if ('loading' in img) {
            (img as any).loading = index === 0 ? 'eager' : 'lazy';
          }
          if ('decoding' in img) {
            (img as any).decoding = 'async';
          }

          img.onload = () => {
            imageCache.set(slide.image, img);
            setLoadedImages(prev => new Set([...prev, slide.image]));
            if (index === 0) setIsInitialLoad(false);
            resolve();
          };

          img.onerror = () => {
            console.warn(`Failed to load slide image: ${slide.image}`);
            resolve();
          };

          // Stagger loading for better performance
          const delay = index === 0 ? 0 : Math.min(index * 50, 500);
          setTimeout(() => {
            img.src = slide.image;
          }, delay);
        });
      });

      // Add preload link for first image
      const firstImage = slideData[0]?.image;
      if (firstImage && !document.querySelector(`link[rel="preload"][href="${firstImage}"]`)) {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.as = 'image';
        preloadLink.href = firstImage;
        if ('fetchPriority' in preloadLink) {
          (preloadLink as any).fetchPriority = 'high';
        }
        document.head.appendChild(preloadLink);
      }

      await Promise.allSettled(preloadPromises);
    };

    preloadImages();
  }, [slideData]);

  // Optimized autoplay with performance considerations
  useEffect(() => {
    if (!isPlaying || slideData.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideData.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, slideData.length, autoPlayInterval]);

  // Memoized navigation functions
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length);
  }, [slideData.length]);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideData.length);
  }, [slideData.length]);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // Optimized image style with performance hints
  const getImageStyle = useCallback((imageUrl: string) => ({
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    willChange: 'transform',
    transform: 'translateZ(0)', // Force hardware acceleration
  }), []);

  if (!slideData || slideData.length === 0) {
    return (
      <div className="h-screen bg-gradient-to-br from-[#01215E] to-[#445C8A] flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">No slides available</h1>
          <p className="text-xl opacity-80">Please add slides to display content</p>
        </div>
      </div>
    );
  }

  return (
    <section className={`relative h-screen overflow-hidden ${className}`}>
      {/* Critical loading indicator for first load */}
      {isInitialLoad && !loadedImages.has(currentSlideData.image) && (
        <div className="absolute inset-0 bg-[#01215E] flex items-center justify-center z-50">
          <div className="text-center text-white">
            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-lg font-medium">Loading experience...</p>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.25, 
            ease: "easeOut",
            // Reduce motion for users who prefer it
            ...(window.matchMedia('(prefers-reduced-motion: reduce)').matches && {
              duration: 0.1
            })
          }}
          className="absolute inset-0"
          style={{ willChange: 'opacity' }}
        >
          {/* Optimized Background Image */}
          <div
            className="absolute inset-0"
            style={getImageStyle(currentSlideData.image)}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#01215E]/80 via-[#445C8A]/70 to-[#001F58]/80" />

          {/* Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-left max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.05,
                  ease: "easeOut"
                }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              >
                {currentSlideData.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.1,
                  ease: "easeOut"
                }}
                className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl leading-relaxed"
              >
                {currentSlideData.description}
              </motion.p>

              {currentSlideData.ctaText && (
                <motion.button
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.15,
                    ease: "easeOut"
                  }}
                  onClick={currentSlideData.ctaAction}
                  className="px-5 sm:px-6 py-3 sm:py-4 bg-white text-[#01215E] rounded-full font-semibold text-base sm:text-lg flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-150"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ willChange: 'transform' }}
                >
                  <span>{currentSlideData.ctaText}</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      {showControls && slideData.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-200 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-200 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </>
      )}

      {/* Slide Indicators */}
      {showIndicators && slideData.length > 1 && (
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2 sm:space-x-3">
          {slideData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Play/Pause Control */}
      {autoPlay && slideData.length > 1 && (
        <button
          onClick={togglePlayPause}
          className="absolute top-6 sm:top-8 right-6 sm:right-8 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-200 backdrop-blur-sm"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <div className="w-3 h-3 sm:w-4 sm:h-4 flex space-x-0.5 sm:space-x-1">
              <div className="w-0.5 sm:w-1 h-full bg-current"></div>
              <div className="w-0.5 sm:w-1 h-full bg-current"></div>
            </div>
          ) : (
            <Play className="w-3 h-3 sm:w-4 sm:h-4" />
          )}
        </button>
      )}
    </section>
  );
};

export default OptimizedFeaturedSlide;
