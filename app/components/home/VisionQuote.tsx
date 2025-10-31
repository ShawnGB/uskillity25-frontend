import { motion } from "motion/react";

export function VisionQuote() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Multi-Layered Living Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#D63447] via-[#F77B72] to-[#F3C97B]"></div>

      {/* Soft Creative Orbs - Multi-color */}
      <div className="absolute inset-0 z-[1]">
        <motion.div
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#FFD877]/50 via-[#F3C97B]/30 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#BCA7E8]/40 via-[#7BA4C6]/30 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-[#91B59C]/30 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Decorative Elements - Organic & Flowing */}
      <div className="absolute inset-0 z-[2] opacity-15">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/60 blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white/60 blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-white/60 blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-white/60 blur-2xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          className="inline-block relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          {/* Playful quote marks */}
          <motion.div
            className="absolute -top-8 -left-8 text-white/30 text-8xl"
            style={{ fontFamily: 'var(--font-serif)' }}
            animate={{ rotate: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            "
          </motion.div>

          <blockquote
            className="text-white text-3xl sm:text-4xl lg:text-5xl relative z-10"
            style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', lineHeight: 1.25 }}
          >
            A world where creativity is as natural as breathing.
          </blockquote>

          <motion.div
            className="absolute -bottom-8 -right-8 text-white/30 text-8xl"
            style={{ fontFamily: 'var(--font-serif)' }}
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            "
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 flex gap-2 justify-center items-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="w-2 h-2 rounded-full bg-white/60"></div>
          <div className="w-24 h-1 bg-white/80 rounded-full"></div>
          <div className="w-2 h-2 rounded-full bg-white/60"></div>
        </motion.div>
      </div>
    </section>
  );
}
