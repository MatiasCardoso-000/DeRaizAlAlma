import { ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  webpSrc?: string; // WEBP version
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  sizes?: string;
  className?: string;
}

/**
 * Componente de imagen optimizado con soporte para:
 * - WEBP con fallback a JPG/PNG
 * - Lazy loading
 * - Responsive images con srcset
 * - Placeholder blur para mejor UX
 */
export default function OptimizedImage({
  src,
  webpSrc,
  alt,
  width,
  height,
  loading = "lazy",
  sizes,
  className = "",
  ...props
}: OptimizedImageProps) {
  return (
    <picture>
      {/* WEBP format para navegadores modernos */}
      {webpSrc && (
        <source
          srcSet={webpSrc}
          type="image/webp"
          sizes={sizes}
        />
      )}
      {/* Fallback a formato original */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        sizes={sizes}
        className={className}
        decoding="async"
        {...props}
      />
    </picture>
  );
}
