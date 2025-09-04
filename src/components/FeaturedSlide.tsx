import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Loader } from "lucide-react";

interface Slide {
  id: string;
  title: string;
  description: string;
  image: string;
  ctaText?: string;
  ctaAction?: () => void;
}

interface FeaturedSlideProps {
  slides: Slide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
}

const FeaturedSlide = ({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
  className = "",
}: FeaturedSlideProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [imageLoadErrors, setImageLoadErrors] = useState<Set<string>>(new Set());
  const [preloadedImages, setPreloadedImages] = useState<Map<string, HTMLImageElement>>(new Map());

  // Preload images with aggressive caching and optimization
  const preloadImage = useCallback((src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      // Check if already preloaded
      if (preloadedImages.has(src)) {
        resolve(preloadedImages.get(src)!);
        return;
      }

      const img = new Image();
      
      // Aggressive loading optimizations
      img.loading = 'eager';
      img.decoding = 'sync';
      img.fetchPriority = 'high';
      
      img.onload = () => {
        setPreloadedImages(prev => new Map(prev).set(src, img));
        setLoadedImages(prev => new Set(prev).add(src));
        resolve(img);
      };
      
      img.onerror = () => {
        setImageLoadErrors(prev => new Set(prev).add(src));
        reject(new Error(`Failed to load image: ${src}`));
      };
      
      // Start loading
      img.src = src;
    });
  }, [preloadedImages]);

  // Preload current and adjacent images
  useEffect(() => {
    if (!slides || slides.length === 0) return;

    const preloadSlides = async () => {
      // Get indices to preload (current, next, and previous)
      const indicesToPreload = [
        currentSlide,
        (currentSlide + 1) % slides.length,
        (currentSlide - 1 + slides.length) % slides.length
      ];

      // Preload in priority order
      for (const index of indicesToPreload) {
        try {
          await preloadImage(slides[index].image);
        } catch (error) {
          console.warn(`Failed to preload image for slide ${index}:`, error);
        }
      }
    };

    preloadSlides();
  }, [currentSlide, slides, preloadImage]);

  // Auto-advance functionality
  useEffect(() => {
    if (!isPlaying || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (!slides || slides.length === 0) {
    return (
      <div className="h-screen bg-gradient-to-br from-[#01215E] to-[#445C8A] flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">No slides available</h1>
          <p className="text-xl opacity-80">Please add slides to display content</p>
        </div>
      </div>
    );
  }

  const currentSlideData = slides[currentSlide];
  const isCurrentImageLoaded = loadedImages.has(currentSlideData.image);
  const hasImageError = imageLoadErrors.has(currentSlideData.image);

  return (
    <section className={`relative h-screen overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* Loading State */}
          {!isCurrentImageLoaded && !hasImageError && (
            <div className="absolute inset-0 bg-gradient-to-br from-[#01215E] to-[#445C8A] flex items-center justify-center z-10">
              <div className="text-white text-center">
                <Loader className="w-12 h-12 animate-spin mx-auto mb-4" />
                <p className="text-lg opacity-80">Loading image...</p>
              </div>
            </div>
          )}

          {/* Error State */}
          {hasImageError && (
            <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-red-700 flex items-center justify-center z-10">
              <div className="text-white text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">!</span>
                </div>
                <p className="text-lg opacity-80">Failed to load image</p>
              </div>
            </div>
          )}

          {/* Background Image - Only render when loaded */}
          {isCurrentImageLoaded && (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300"
              style={{
                backgroundImage: `url(${currentSlideData.image})`,
                backgroundPosition: "center top",
                willChange: "transform",
                transform: "translateZ(0)", // Force GPU acceleration
              }}
            />
          )}

          {/* Overlay - only show when image is loaded or has error */}
          {/* {(isCurrentImageLoaded || hasImageError) && (
            <div className="absolute inset-0 bg-gradient-to-br from-[#01215E]/80 via-[#445C8A]/70 to-[#001F58]/80" />
          )} */}

          {/* Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center mt-16">
            <div className="text-left max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                {currentSlideData.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed"
              >
                {currentSlideData.description}
              </motion.p>

              {currentSlideData.ctaText && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  onClick={currentSlideData.ctaAction}
                  className="px-6 py-4 bg-white text-[#01215E] rounded-full font-semibold text-lg flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-200 ml-4"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>{currentSlideData.ctaText}</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      {showControls && slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            ←
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm"
            aria-label="Next slide"
          >
            →
          </button>
        </>
      )}

      {/* Slide Indicators with Loading States */}
      {showIndicators && slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((slide, index) => {
            const isLoaded = loadedImages.has(slide.image);
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {!isLoaded && (
                  <div className="absolute inset-0 rounded-full bg-yellow-400/50 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Play/Pause Control */}
      {autoPlay && slides.length > 1 && (
        <button
          onClick={togglePlayPause}
          className="absolute top-8 right-8 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <div className="w-4 h-4 flex space-x-1">
              <div className="w-1 h-4 bg-current"></div>
              <div className="w-1 h-4 bg-current"></div>
            </div>
          ) : (
            <Play className="w-4 h-4" />
          )}
        </button>
      )}

      {/* Hidden preload images for browser caching */}
      <div className="hidden">
        {slides.map((slide) => (
          <img
            key={slide.id}
            src={slide.image}
            alt=""
            loading="eager"
            decoding="sync"
            style={{ display: 'none' }}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .featured-slide-content {
            padding: 1rem;
          }
        }
        
        /* GPU acceleration for smoother animations */
        .bg-cover {
          will-change: transform;
          transform: translateZ(0);
        }
      `}</style>
    </section>
  );
};

export default FeaturedSlide;