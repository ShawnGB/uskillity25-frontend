import type { ReactNode, CSSProperties } from "react";
import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

type ButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  title?: string;
  icon?: string;
  onSubmit?: () => void;
  primary?: boolean;
};

const Button = ({
  children,
  variant,
  size = "md",
  className = "",
  style,
  title,
  icon,
  onSubmit,
  primary,
  ...props
}: ButtonProps): ReactNode => {
  // Legacy support for old API
  const isLegacy = title !== undefined || primary !== undefined;
  const finalVariant = isLegacy
    ? primary
      ? "primary"
      : "secondary"
    : variant || "primary";

  const baseStyle = {
    borderRadius: "18px",
    fontSize: size === "lg" ? "1.0625rem" : size === "sm" ? "0.875rem" : "1rem",
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    letterSpacing: "0.003em",
    padding:
      size === "lg"
        ? "22px 40px"
        : size === "sm"
        ? "12px 24px"
        : "16px 32px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    position: "relative" as const,
    overflow: "hidden" as const,
    display: "inline-flex" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    ...style,
  };

  const variantStyles = {
    primary: {
      color: "#FFFFFF",
      border: "none",
    },
    secondary: {},
    outline: {},
  };

  const finalStyle = {
    ...baseStyle,
    ...variantStyles[finalVariant as keyof typeof variantStyles],
  };

  // Determine CSS class based on variant
  const variantClass = finalVariant === "primary" ? "btn-gradient-primary" : "btn-secondary";

  const content = isLegacy ? (icon ? `${icon} ${title}` : title) : children;

  return (
    <motion.button
      className={`${variantClass} ${className}`}
      style={finalStyle}
      onClick={onSubmit}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {finalVariant === "primary" && (
        <>
          <motion.div
            className="absolute inset-0 rounded-[18px]"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              background:
                "radial-gradient(circle at center, rgba(232, 73, 95, 0.3) 0%, transparent 70%)",
            }}
          />
          <motion.div
            className="btn-gradient-primary-hover absolute inset-0 rounded-[18px]"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </>
      )}
      <span className="relative z-10">{content}</span>
    </motion.button>
  );
};

export { Button };
