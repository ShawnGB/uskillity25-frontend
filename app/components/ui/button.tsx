import type { ReactNode, CSSProperties } from "react";

type ButtonProps = {
  title: string;
  icon?: string;
  onSubmit: () => void;
  primary: boolean;
};

const baseStyle: CSSProperties = {
  borderRadius: "18px",
  fontSize: "1.0625rem",
  fontFamily: "Manrope, sans-serif",
  fontWeight: 600,
  letterSpacing: "0.003em",
  height: "3rem",
};

const variantStyle = {
  primary: {
    background: "linear-gradient(90deg, #E8495F 0%, #D63447 25%, #D63447 100%)",
    color: "#FFFFFF",
    boxShadow:
      "inset 0 1px 2px rgba(255, 255, 255, 0.25), 0 2px 4px rgba(214, 52, 71, 0.15)",
    border: "none",
  } as CSSProperties,
  secondary: {
    background: "#FFF7F1",
    border: "2px solid rgba(233, 106, 74, 0.4)",
    color: "#6A3E32",
    boxShadow:
      "inset 0 1px 2px rgba(255, 255, 255, 0.5), 0 2px 8px rgba(233, 106, 74, 0.08)",
  } as CSSProperties,
};

const Button = ({ title, icon, onSubmit, primary }: ButtonProps): ReactNode => {
  const style: CSSProperties = {
    ...baseStyle,
    ...(primary ? variantStyle.primary : variantStyle.secondary),
  };
  return (
    <input
      type="button"
      onSubmit={onSubmit}
      style={style}
      value={icon ? icon + " " + title : title}
    />
  );
};

export { Button };

// TO Do integrate animations in btn
/*  <motion.div
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
                  <span className="relative z-10 flex items-center justify-center">
                    Join the Movement
*/
