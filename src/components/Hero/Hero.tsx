import type { ReactNode } from "react";

export type HeroProps = {
  
  src: string; 
  alt: string;

  
  srcSetAvif?: string;
  srcSetWebp?: string;
  srcSetFallback?: string; 

  
  sizes?: string; 
  width?: number; 
  height?: number; 
  
  title: string;
  subtitle?: string;
  actions?: ReactNode; 

  // Layout
  className?: string;
  overlayClassName?: string;
};

 
export default function Hero({
  src,
  alt,
  srcSetAvif,
  srcSetWebp,
  srcSetFallback,
  sizes = "(min-width: 1280px) 1280px, (min-width: 1024px) 1024px, 100vw",
  width = 1920,
  height = 1080,
  title,
  subtitle,
  actions,
  className = "",
  overlayClassName = "",
}: HeroProps) {
  return (
    <section className={`relative w-full min-h-[100svh] lg:min-h-screen overflow-hidden ${className}`}>
      {/* Background image */}
      <picture className="absolute inset-0 w-full h-full">
        {srcSetAvif ? (
          <source srcSet={srcSetAvif} type="image/avif" sizes={sizes} />
        ) : null}
        {srcSetWebp ? (
          <source srcSet={srcSetWebp} type="image/webp" sizes={sizes} />
        ) : null}
        {srcSetFallback ? (
          <source srcSet={srcSetFallback} sizes={sizes} />
        ) : null}
        <img
          src={src}
          alt={alt}
          loading="eager" // Do NOT lazy-load hero
          decoding="async"
          width={width}
          height={height}
          sizes={sizes}
          className="block w-full h-full object-cover object-center"
          style={{ backgroundColor: "#0f172a", aspectRatio: `${width}/${height}` }}
        />
      </picture>

      {/* Overlay content */}
      <div className={`absolute inset-0 flex items-center justify-center text-center px-4 ${overlayClassName}`}>
        <div className="max-w-4xl">
          <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-3 sm:mt-4 text-white/90 text-base sm:text-xl lg:text-2xl leading-relaxed">
              {subtitle}
            </p>
          ) : null}
          {actions ? <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 justify-center">{actions}</div> : null}
        </div>
      </div>

      {/* Gradient guard for readability (optional) */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" /> */}
    </section>
  );
}
