import { motion } from "motion/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export function JoinSection() {
  return (
    <section id="join" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#FBF6F2] via-[#FFF5ED] to-[#FFFFFF]" />

      {/* Warm directional overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-40"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(251, 227, 210, 0.7) 0%, rgba(255, 244, 233, 0.4) 40%, transparent 70%)",
        }}
      />

      {/* Playful glowing orbs */}
      <div className="absolute inset-0 z-[2] opacity-30">
        <motion.div
          className="absolute top-20 left-[15%] w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(247, 123, 114, 0.6), transparent)' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-[15%] w-[450px] h-[450px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(188, 167, 232, 0.55), transparent)' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(243, 201, 123, 0.5), transparent)' }}
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-8 text-4xl sm:text-5xl lg:text-6xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, lineHeight: 1.15 }}>
            <span style={{ color: '#1E3A5F' }}>Be part of the first </span>
            <span className="relative inline-block">
              <span
                style={{
                  background: 'linear-gradient(90deg, #E8495F 0%, #D63447 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                creative circles
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

          <p className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)', color: '#5A3D3A', lineHeight: 1.7 }}>
            Join us in reigniting human creativity, one connection at a time.
          </p>

          {/* Form card */}
          <motion.div
            className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/60 shadow-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-6 rounded-full border border-[#1E3A5F]/20 focus:border-[#D63447] focus:ring-[#D63447] transition-colors bg-white/80 placeholder:text-[#7A6F67]/60"
                style={{ fontFamily: 'var(--font-sans)', color: '#1E3A5F' }}
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="text-white px-8 py-6 rounded-full whitespace-nowrap"
                  style={{
                    background: 'linear-gradient(90deg, #E8495F 0%, #D63447 25%, #D63447 100%)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.25), 0 2px 4px rgba(214, 52, 71, 0.15)',
                  }}
                >
                  Join Waitlist
                </Button>
              </motion.div>
            </div>

            <p className="text-sm mt-6" style={{ fontFamily: 'var(--font-sans)', color: '#7A6F67' }}>
              We respect your privacy. No spam, ever. Just creative inspiration.
            </p>
          </motion.div>

          {/* Simple footer text */}
          <motion.div
            className="mt-10 text-center space-y-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p style={{ fontFamily: 'var(--font-sans)', color: '#7A6F67' }}>
              Creative souls already waiting
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', color: '#7A6F67' }}>
              Launch early 2026
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
