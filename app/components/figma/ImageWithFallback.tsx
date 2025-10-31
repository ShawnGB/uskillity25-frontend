import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ImageWithFallback({
  src,
  alt,
  className,
  style,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Fallback to a solid color background if image fails to load
      setImgSrc("");
    }
  };

  if (hasError || !imgSrc) {
    return (
      <div
        className={className}
        style={{
          ...style,
          background:
            "linear-gradient(135deg, rgba(214, 52, 71, 0.1) 0%, rgba(243, 201, 123, 0.15) 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label={alt}
      >
        <span style={{ color: "var(--foreground)", opacity: 0.3 }}>
          Image unavailable
        </span>
      </div>
    );
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
    />
  );
}
