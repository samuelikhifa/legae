
export type SmartImageProps = {
  src: string; // fallback (e.g., jpg/png)
  webp?: string; // optional webp
  avif?: string; // optional avif
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean; // eager load when true
  sizes?: string; // responsive sizes hint
};


export default function SmartImage({
  src,
  webp,
  avif,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes = "100vw",
}: SmartImageProps) {
  return (
    <picture>
      {avif ? <source srcSet={avif} type="image/avif" /> : null}
      {webp ? <source srcSet={webp} type="image/webp" /> : null}
      <img
        src={webp || src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        sizes={sizes}
        className={className}
      />
    </picture>
  );
}
