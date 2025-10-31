import { motion } from "motion/react";

type FloatingShape = {
  color: string;
  size: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  duration: number;
  delay: number;
  opacity: number[];
  scale: number[];
};

type FloatingShapesProps = {
  shapes: FloatingShape[];
};

export function FloatingShapes({ shapes }: FloatingShapesProps) {
  return (
    <div className="absolute inset-0 z-[2] opacity-25">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="floating-shape-base"
          style={{
            background: `radial-gradient(circle, ${shape.color}, transparent)`,
            width: shape.size,
            height: shape.size,
            ...shape.position,
          }}
          animate={{
            scale: shape.scale,
            opacity: shape.opacity,
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}
