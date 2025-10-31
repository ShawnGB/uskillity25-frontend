import type { ReactNode, ButtonHTMLAttributes, CSSProperties } from "react";
import { motion } from "motion/react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
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

  const baseStyle: CSSProperties = {
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
    position: "relative",
    overflow: "hidden",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    ...style,
  };

  const variantStyles: Record<string, CSSProperties> = {
    primary: {
      background:
        "linear-gradient(90deg, #E8495F 0%, #D63447 25%, #D63447 100%)",
      color: "#FFFFFF",
      boxShadow:
        "inset 0 1px 2px rgba(255, 255, 255, 0.25), 0 2px 4px rgba(214, 52, 71, 0.15)",
      border: "none",
    },
    secondary: {
      background: "#FFF7F1",
      border: "2px solid rgba(233, 106, 74, 0.4)",
      color: "#6A3E32",
      boxShadow:
        "inset 0 1px 2px rgba(255, 255, 255, 0.5), 0 2px 8px rgba(233, 106, 74, 0.08)",
    },
    outline: {
      background: "#FFF7F1",
      border: "2px solid rgba(233, 106, 74, 0.4)",
      color: "#6A3E32",
      boxShadow:
        "inset 0 1px 2px rgba(255, 255, 255, 0.5), 0 2px 8px rgba(233, 106, 74, 0.08)",
    },
  };

  const finalStyle: CSSProperties = {
    ...baseStyle,
    ...variantStyles[finalVariant],
  };

  const content = isLegacy ? (icon ? `${icon} ${title}` : title) : children;

  return (
    <motion.button
      className={className}
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
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              background:
                "linear-gradient(90deg, #F05A70 0%, #E02541 25%, #E02541 100%)",
              borderRadius: "18px",
            }}
          />
        </>
      )}
      <span className="relative z-10">{content}</span>
    </motion.button>
  );
};

export { Button };
