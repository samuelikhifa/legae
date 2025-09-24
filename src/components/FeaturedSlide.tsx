import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

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
  showIndicators?: boolean;
  className?: string;
}

const FeaturedSlide = ({
  slides,
  autoPlay = true,
  autoPlayInterval = 6000,
  showIndicators = true,
  className = "",
}: FeaturedSlideProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

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

  return (
    <section className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Background Image - Simple and Direct */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${currentSlideData.image})`,
          backgroundColor: "#01215E"
        }}
      ></div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4">


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-left max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            {currentSlideData.title}
          </h1>

          <p className="text-base sm:text-lg lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl leading-relaxed">
            {currentSlideData.description}
          </p>

          {currentSlideData.ctaText && (
            <button
              onClick={currentSlideData.ctaAction}
              className="px-6 py-4 bg-white text-[#01215E] rounded-full font-semibold text-lg flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-200"
            >
              <span>{currentSlideData.ctaText}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
        
      </div>
      </div>

      {/* Slide Indicators */}
      {showIndicators && slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
      {autoPlay && slides.length > 1 && (
        <button
          onClick={togglePlayPause}
          className="absolute top-8 right-8 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <div className="w-4 h-4 flex space-x-1">
              <div className="w-1 h-4 bg-current"></div>
              <div className="w-1 h-4 bg-current"></div>
            </div>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
      )}
    </section>
  );
};

export default FeaturedSlide;