import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Button } from "../ui/button";

export default function Hero(): ReactNode {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "80vh", minHeight: "650px" }}
    >
      {/* Creative hands painting - inspiring artistic expression */}
      <motion.div className="absolute inset-0 z-[0]">
        <img
          src="https://images.unsplash.com/photo-1560421683-6856ea585c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGhhbmRzJTIwcGFpbnRpbmclMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjExMTg2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Creative hands painting with vibrant colors"
          className="w-full h-full object-cover"
          style={{
            objectPosition: "center center",
            filter: "brightness(1.0) saturate(0.75) blur(2px)",
          }}
        />
      </motion.div>

      {/* Multi-colored aura around the hero image - more vivid */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Coral glow - left side - more saturated */}
        <motion.div
          className="absolute w-[500px] h-[500px] blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 107, 99, 0.55), transparent)",
            top: "20%",
            left: "-10%",
          }}
          animate={{
            opacity: [0.4, 0.65, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Lavender glow - top center - more vivid */}
        <motion.div
          className="absolute w-[600px] h-[600px] blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(168, 139, 247, 0.5), transparent)",
            top: "-15%",
            left: "35%",
          }}
          animate={{
            opacity: [0.35, 0.6, 0.35],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Gold glow - right side - more saturated */}
        <motion.div
          className="absolute w-[550px] h-[550px] blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(253, 180, 75, 0.55), transparent)",
            top: "30%",
            right: "-10%",
          }}
          animate={{
            opacity: [0.4, 0.65, 0.4],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Blue glow - bottom left - more vivid */}
        <motion.div
          className="absolute w-[500px] h-[500px] blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.5), transparent)",
            bottom: "10%",
            left: "15%",
          }}
          animate={{
            opacity: [0.35, 0.55, 0.35],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        {/* Green glow - bottom right - more saturated */}
        <motion.div
          className="absolute w-[450px] h-[450px] blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.5), transparent)",
            bottom: "15%",
            right: "20%",
          }}
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      {/* Warm radial gradient centered left */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(255, 240, 228, 0.8) 0%, rgba(255, 240, 228, 0.5) 35%, transparent 70%)",
        }}
      />

      {/* Reduced directional overlay */}
      <div
        className="absolute inset-0 z-[3]"
        style={{
          background:
            "linear-gradient(105deg, rgba(251, 227, 210, 0.45) 0%, rgba(253, 240, 230, 0.35) 40%, rgba(255, 248, 242, 0.25) 70%, transparent 100%)",
        }}
      />

      {/* Floating colorful particles/confetti - playful and whimsical */}
      <div className="absolute inset-0 z-[3] pointer-events-none">
        {/* Particle 1 - Coral */}
        <motion.div
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: "radial-gradient(circle, #F77B72, #E96A4A)",
            boxShadow: "0 0 8px rgba(247, 123, 114, 0.5)",
            top: "15%",
            left: "25%",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Particle 2 - Green */}
        <motion.div
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: "radial-gradient(circle, #91B59C, #7AA88F)",
            boxShadow: "0 0 6px rgba(145, 181, 156, 0.5)",
            top: "60%",
            left: "15%",
          }}
          animate={{
            y: [0, 25, 0],
            x: [0, -10, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Particle 3 - Blue */}
        <motion.div
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            background: "radial-gradient(circle, #7BA4C6, #6B94B6)",
            boxShadow: "0 0 10px rgba(123, 164, 198, 0.5)",
            top: "35%",
            left: "70%",
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Particle 4 - Lavender */}
        <motion.div
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: "radial-gradient(circle, #BCA7E8, #A895D8)",
            boxShadow: "0 0 8px rgba(188, 167, 232, 0.5)",
            top: "25%",
            left: "85%",
          }}
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Particle 5 - Gold */}
        <motion.div
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: "radial-gradient(circle, #F3C97B, #E8B868)",
            boxShadow: "0 0 10px rgba(243, 201, 123, 0.6)",
            top: "70%",
            left: "80%",
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        {/* Particle 6 - Orange vivid */}
        <motion.div
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: "radial-gradient(circle, #FF8A3D, #FFD877)",
            boxShadow:
              "0 0 12px rgba(255, 138, 61, 0.8), 0 0 6px rgba(255, 216, 119, 0.5)",
            top: "45%",
            left: "40%",
          }}
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        />

        {/* Particle 7 - Coral small */}
        <motion.div
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: "radial-gradient(circle, #F77B72, #F08568)",
            boxShadow: "0 0 6px rgba(247, 123, 114, 0.5)",
            top: "55%",
            left: "60%",
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, 25, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Particle 8 - Blue small */}
        <motion.div
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: "radial-gradient(circle, #7BA4C6, #8AB0CC)",
            boxShadow: "0 0 6px rgba(123, 164, 198, 0.5)",
            top: "80%",
            left: "30%",
          }}
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.8,
          }}
        />
      </div>

      {/* Main content - positioned below navbar with generous breathing room */}
      <div className="relative z-10 h-full flex items-start pt-28 pb-12">
        <div className="w-full max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-20 xl:px-28">
          <div className="relative">
            {/* Left side: Headline container - stays in same position */}
            <div className="max-w-3xl relative">
              {/* Warm radial glow behind text - coral to soft apricot */}
              <div
                className="absolute -left-16 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{
                  width: "600px",
                  height: "600px",
                  background:
                    "radial-gradient(circle, rgba(251, 227, 210, 0.7) 0%, rgba(255, 244, 233, 0.5) 40%, transparent 70%)",
                  filter: "blur(70px)",
                  zIndex: -1,
                }}
              />

              {/* Additional soft glow layer for depth */}
              <div
                className="absolute -left-8 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{
                  width: "450px",
                  height: "450px",
                  background:
                    "radial-gradient(circle, rgba(243, 182, 168, 0.3) 0%, transparent 60%)",
                  filter: "blur(50px)",
                  zIndex: -1,
                }}
              />

              {/* Headline - elegant serif with solid warm tones */}
              <div className="mb-11">
                <h1
                  className="text-7xl sm:text-8xl lg:text-[8rem] xl:text-[8.5rem]"
                  style={{
                    fontFamily: "Crimson Pro, Georgia, serif",
                    fontWeight: 600,
                    lineHeight: 1.1,
                    letterSpacing: "0.005em",
                  }}
                >
                  {/* "Reignite" - medium gray, sans-serif, smaller */}
                  <span
                    className="block mb-0 relative"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      color: "#1E3A5F",
                      fontWeight: 800,
                      fontSize: "0.43em",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      textShadow: "0 1px 3px rgba(30, 58, 95, 0.15)",
                    }}
                  >
                    Reignite
                    {/* Playful spark dots - vivid shiny golden-orange */}
                  </span>

                  {/* "Human" - vivid multi-color gradient */}
                  <span
                    className="block mt-0 mb-0 relative"
                    style={{
                      background:
                        "linear-gradient(120deg, #FF6B35 0%, #FF4E85 30%, #A855F7 65%, #FDB44B 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontWeight: 400,
                      filter:
                        "drop-shadow(0 2px 10px rgba(255, 107, 53, 0.5)) drop-shadow(0 1px 0 rgba(255, 255, 255, 0.2))",
                    }}
                  >
                    Human
                  </span>

                  {/* "Creativity." - deep blue, sans-serif, smaller */}
                  <span
                    className="block -mt-2 relative"
                    style={{
                      marginTop: "-2rem",
                      fontFamily: "Manrope, sans-serif",
                      color: "#1E3A5F",
                      fontWeight: 800,
                      fontSize: "0.43em",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      textShadow: "0 1px 3px rgba(30, 58, 95, 0.15)",
                    }}
                  >
                    Creativity.
                    {/* Hand-drawn playful underline - deep blue subtle */}
                    <motion.span
                      className="absolute -bottom-2 left-0 h-2 rounded-full -rotate-1"
                      style={{
                        background: "rgba(30, 58, 95, 0.35)",
                        width: "100%",
                        boxShadow: "0 1px 2px rgba(30, 58, 95, 0.15)",
                      }}
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: "easeOut",
                      }}
                    />
                  </span>
                </h1>
              </div>
            </div>

            {/* Right side: Subheading + CTAs - moved to right, same vertical height */}
            <div
              className="absolute hidden lg:flex flex-col max-w-md"
              style={{ top: "350px", right: "50px" }}
            >
              {/* Subheadline - warm, intimate, conversational */}
              <div className="mb-8">
                <p
                  className="text-xl"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 400,
                    lineHeight: 1.7,
                    letterSpacing: "0.015em",
                    color: "#5A3D3A",
                  }}
                >
                  <span
                    style={{
                      background:
                        "linear-gradient(90deg, #E8495F 0%, #D63447 25%, #D63447 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontWeight: 600,
                      filter: "drop-shadow(0 1px 2px rgba(214, 52, 71, 0.1))",
                    }}
                  >
                    u/skillity
                  </span>{" "}
                  helps people rediscover their creativity — and through it,
                  themselves.
                </p>
              </div>

              {/* CTA Buttons - vivid gradient minimal glow */}
              <div className="flex flex-col gap-4">
                <Button
                  title="Join the moement"
                  primary={true}
                  onSubmit={() => alert("Submitting")}
                />

                <Button
                  title="Learn More"
                  primary={false}
                  onSubmit={() => alert("Submitting")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Soft organic wave - blending into next section */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-[5]">
        <svg
          className="w-full"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          style={{ height: "300px" }}
        >
          <defs>
            {/* Warm off-white gradient for curve */}
            <linearGradient id="wave-fill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF7F1" stopOpacity="0.5" />
              <stop offset="15%" stopColor="#FFF7F1" stopOpacity="0.85" />
              <stop offset="30%" stopColor="#FBF6F2" stopOpacity="1" />
              <stop offset="100%" stopColor="#FBF6F2" stopOpacity="1" />
            </linearGradient>

            {/* Gentle ambient shadow for depth */}
            <filter id="wave-shadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="20" />
              <feOffset dx="0" dy="-6" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.05" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Organic wave - gentle flowing transition, raised right side */}
          <g filter="url(#wave-shadow)">
            <path
              d="M0,250 C200,230 320,212 480,188 C640,164 800,141 980,113 C1160,85 1300,73 1440,110 L1440,400 L0,400 Z"
              fill="url(#wave-fill)"
            />
          </g>
        </svg>
      </div>

      {/* Scroll indicator - organic and warm */}
      <motion.div
        className="absolute bottom-[22rem] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
        animate={{
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="w-[1.5px] h-12"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(233, 106, 74, 0.4), transparent)",
          }}
        />
        <motion.svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <circle cx="5" cy="5" r="1.5" fill="#E96A4A" opacity="0.5">
            <animate
              attributeName="opacity"
              values="0.3;0.6;0.3"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </motion.svg>
      </motion.div>
    </section>
  );
}
