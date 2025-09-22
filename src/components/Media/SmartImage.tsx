
export type SmartImageProps = {
  src: string; // fallback (e.g., jpg/png)
  webp?: string; // optional webp
  avif?: string; // optional avif
  // Responsive srcset strings (e.g., from vite-imagetools `as=srcset`)
  srcSetWebp?: string;
  srcSetAvif?: string;
  srcSet?: string; // generic/fallback srcset (e.g., jpg)
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
  srcSetWebp,
  srcSetAvif,
  srcSet,
}: SmartImageProps) {
  return (
    <picture>
      {srcSetAvif ? (
        <source srcSet={srcSetAvif} type="image/avif" sizes={sizes} />
      ) : avif ? (
        <source srcSet={avif} type="image/avif" />
      ) : null}
      {srcSetWebp ? (
        <source srcSet={srcSetWebp} type="image/webp" sizes={sizes} />
      ) : webp ? (
        <source srcSet={webp} type="image/webp" />
      ) : null}
      <img
        src={webp || src}
        srcSet={srcSet}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        // Hint the browser that this image is critical when priority is true
        fetchPriority={priority ? ("high" as any) : ("auto" as any)}
        decoding="async"
        sizes={sizes}
        className={className}
        style={{ backgroundColor: "#0f172a" }}
      />
    </picture>
  );
}
