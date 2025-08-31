import { useState, useRef, useEffect, useCallback } from 'react';

interface FastImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  preload?: boolean;
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string;
}

// Image preloader cache
const imageCache = new Set<string>();
const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (imageCache.has(src)) {
      resolve();
      return;
    }

    const img = new Image();
    img.onload = () => {
      imageCache.add(src);
      resolve();
    };
    img.onerror = reject;
    img.src = src;
  });
};

const FastImage: React.FC<FastImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  // placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNGNUY1RjUiLz48L3N2Zz4=',
  onLoad,
  preload = false,
  fetchPriority = priority ? 'high' : 'auto',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}) => {
  const [isLoaded, setIsLoaded] = useState(imageCache.has(src));
  const [isInView, setIsInView] = useState(priority);
  const [error, setError] = useState(false);
  const [isPreloaded, setIsPreloaded] = useState(imageCache.has(src));
  const imgRef = useRef<HTMLImageElement>(null);

  // Aggressive preloading for priority images
  useEffect(() => {
    if (priority || preload) {
      preloadImage(src).then(() => {
        setIsPreloaded(true);
      }).catch(() => {
        setError(true);
      });
    }
  }, [src, priority, preload]);

  // Enhanced intersection observer with larger root margin for faster loading
  useEffect(() => {
    if (priority || isPreloaded) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Preload immediately when in view
          preloadImage(src).then(() => {
            setIsPreloaded(true);
          }).catch(() => {
            setError(true);
          });
          observer.disconnect();
        }
      },
      { 
        rootMargin: '200px', // Increased from 50px for earlier loading
        threshold: 0.01 // Lower threshold for faster triggering
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isPreloaded, src]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setError(true);
  }, []);

  // Generate optimized image sources
  const generateSources = (baseSrc: string) => {
    // Check if it's already a webp
    if (baseSrc.endsWith('.webp')) {
      return {
        webp: baseSrc,
        original: baseSrc
      };
    }
    
    const srcWithoutExt = baseSrc.replace(/\.[^/.]+$/, '');
    return {
      webp: `${srcWithoutExt}.webp`,
      original: baseSrc
    };
  };

  const sources = generateSources(src);
  const shouldShowImage = (priority || isInView || isPreloaded) && !error;

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imgRef}>
      <picture>
        {/* WebP source for better compression */}
        {shouldShowImage && (
          <source
            srcSet={sources.webp}
            type="image/webp"
            sizes={sizes}
          />
        )}
        
        <img
          // src={}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={fetchPriority}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-all duration-200 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{
            aspectRatio: width && height ? `${width}/${height}` : undefined,
            contentVisibility: priority ? 'visible' : 'auto',
            containIntrinsicSize: width && height ? `${width}px ${height}px` : undefined
          }}
        />
      </picture>
      
      
    </div>
  );
};

export default FastImage;
