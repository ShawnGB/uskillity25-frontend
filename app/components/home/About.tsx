import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ marginTop: '-150px' }}>
      {/* Warm gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#FBF6F2] via-[#FFF7F1] to-[#FFFFFF]" />

      {/* Soft warm overlay - consistent with Hero */}
      <div className="absolute inset-0 z-[1] opacity-30">
        <div
          className="absolute top-0 left-0 w-full h-1/2"
          style={{
            background: "radial-gradient(ellipse at 30% 20%, rgba(251, 227, 210, 0.6) 0%, rgba(255, 244, 233, 0.3) 40%, transparent 70%)",
          }}
        />
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 z-[2] opacity-20">
        <motion.div
          className="absolute top-20 right-[15%] w-64 h-64 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(243, 201, 123, 0.4), transparent)' }}
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-[10%] w-72 h-72 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(145, 181, 156, 0.35), transparent)' }}
          animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image side - simple and clean */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Main image container */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1757085242675-1a047a53c04d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzaG9wJTIwcGVvcGxlJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYxMDM4MTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Creative people collaborating"
                className="w-full h-[450px] object-cover"
                style={{
                  filter: 'saturate(0.9) contrast(1.05) brightness(1.02)'
                }}
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/10 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Section title - consistent with Hero style */}
            <h2 className="mb-8 text-4xl sm:text-5xl lg:text-6xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, lineHeight: 1.15 }}>
              <span style={{ color: '#1E3A5F' }}>From Platform</span>
              <br />
              <span style={{ color: '#1E3A5F' }}>to </span>
              <span className="relative inline-block">
                <span
                  style={{
                    background: 'linear-gradient(90deg, #E8495F 0%, #D63447 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Movement
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-2 rounded-full -rotate-1"
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

            <div className="space-y-6 mb-10">
              <p className="text-lg" style={{ fontFamily: 'var(--font-sans)', color: '#5A3D3A', lineHeight: 1.7 }}>
                <span
                  style={{
                    background: 'linear-gradient(90deg, #E8495F 0%, #D63447 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 600,
                  }}
                >
                  u/skillity
                </span> began as a skill-sharing platform in 2016. Today it's a movement to bring back what technology promised but couldn't deliver.
              </p>

              <p className="text-lg" style={{ fontFamily: 'var(--font-sans)', color: '#7A6F67', lineHeight: 1.7 }}>
                We're building spaces where people don't just consume — they create, share, and rediscover their spark.
              </p>
            </div>

            {/* Simple footer text */}
            <div className="space-y-1">
              <p style={{ fontFamily: 'var(--font-sans)', color: '#7A6F67' }}>
                Since 2016 — Building community
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', color: '#7A6F67' }}>
                Human-First, Always
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
