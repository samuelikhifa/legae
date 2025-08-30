import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality: _quality = 80
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Lazy loading with Intersection Observer
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Generate WebP and AVIF sources
  const generateSources = (baseSrc: string) => {
    const srcWithoutExt = baseSrc.replace(/\.[^/.]+$/, '');
    return {
      avif: `${srcWithoutExt}.avif`,
      webp: `${srcWithoutExt}.webp`,
      original: baseSrc
    };
  };

  const sources = generateSources(src);

  return (
    <picture ref={imgRef} className={className}>
      {/* AVIF format for modern browsers */}
      {isInView && (
        <source
          srcSet={sources.avif}
          type="image/avif"
          sizes={sizes}
        />
      )}
      
      {/* WebP format for better compression */}
      {isInView && (
        <source
          srcSet={sources.webp}
          type="image/webp"
          sizes={sizes}
        />
      )}
      
      {/* Fallback to original format */}
      <img
        src={isInView ? sources.original : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNGNUY1RjUiLz48L3N2Zz4='}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
    </picture>
  );
};

export default OptimizedImage;
