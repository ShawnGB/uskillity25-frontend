import { motion } from "motion/react";
import { Palette, Users, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Palette,
    title: "Create",
    description: "Share what you love.",
    color: "#F77B72",
    emoji: "🎨",
  },
  {
    icon: Users,
    title: "Connect",
    description: "Find local circles and experiences.",
    color: "#F3C97B",
    emoji: "🤝",
  },
  {
    icon: Sparkles,
    title: "Grow",
    description: "Learn and rediscover your spark.",
    color: "#BCA7E8",
    emoji: "✨",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#FFFFFF] via-[#FFF5ED] to-[#FBF6F2]" />

      {/* Soft warm overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-35"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(255, 244, 233, 0.7) 0%, rgba(255, 248, 242, 0.4) 50%, transparent 80%)",
        }}
      />

      {/* Playful background shapes */}
      <div className="absolute inset-0 z-[2] opacity-25">
        <motion.div
          className="absolute top-20 left-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(247, 123, 114, 0.5), transparent)' }}
          animate={{ y: [0, -25, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(188, 167, 232, 0.45), transparent)' }}
          animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(243, 201, 123, 0.5), transparent)' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, lineHeight: 1.15 }}>
            <span style={{ color: '#1E3A5F' }}>How It </span>
            <span className="relative inline-block">
              <span
                style={{
                  background: 'linear-gradient(90deg, #E8495F 0%, #D63447 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Works
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 h-2 rounded-full rotate-1"
                style={{
                  background: 'rgba(214, 52, 71, 0.35)',
                  width: '100%',
                }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)', color: '#5A3D3A', lineHeight: 1.7 }}>
            Simple, human, and joyful.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Clean card - same style as Purpose with step number */}
                <div className="relative h-full bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/60 shadow-md hover:shadow-lg transition-all duration-300">

                  {/* Step number badge */}
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md"
                    style={{ backgroundColor: step.color }}
                  >
                    <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.1rem' }}>{index + 1}</span>
                  </div>

                  {/* Simple icon */}
                  <div className="mb-5 mt-2">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto"
                      style={{ backgroundColor: `${step.color}15` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: step.color }} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-4 text-xl text-center" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: '#1E3A5F', lineHeight: 1.3 }}>
                    {step.title}
                  </h3>
                  <p className="text-center" style={{ fontFamily: 'var(--font-sans)', color: '#7A6F67', lineHeight: 1.7 }}>
                    {step.description}
                  </p>
                </div>

                {/* Connecting arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px z-20"
                    style={{ background: 'linear-gradient(to right, rgba(30, 58, 95, 0.3), rgba(30, 58, 95, 0.1))' }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#1E3A5F', opacity: 0.4 }}></div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p
          className="text-center mt-12"
          style={{ fontFamily: 'var(--font-sans)', color: '#7A6F67', lineHeight: 1.7 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          No algorithms. No infinite scrolling. Just real humans, making real things.
        </motion.p>
      </div>
    </section>
  );
}
