import { motion } from "motion/react";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  subtitle?: string;
  highlightedWord?: string;
};

export function SectionHeading({
  children,
  subtitle,
  highlightedWord,
}: SectionHeadingProps) {
  // Split children into parts if highlightedWord is provided
  const renderTitle = () => {
    if (typeof children === "string" && highlightedWord) {
      const parts = children.split(highlightedWord);
      return (
        <>
          <span style={{ color: "var(--color-text-blue)" }}>{parts[0]}</span>
          <span className="relative inline-block">
            <span className="gradient-text-primary">{highlightedWord}</span>
            <motion.span
              className="gradient-underline"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </span>
          {parts[1] && (
            <span style={{ color: "var(--color-text-blue)" }}>{parts[1]}</span>
          )}
        </>
      );
    }
    return children;
  };

  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <h2
        className="mb-6 text-4xl sm:text-5xl lg:text-6xl"
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 600,
          lineHeight: 1.15,
        }}
      >
        {renderTitle()}
      </h2>
      {subtitle && (
        <p
          className="text-lg max-w-2xl mx-auto"
          style={{
            fontFamily: "var(--font-sans)",
            color: "var(--color-text-warm)",
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
