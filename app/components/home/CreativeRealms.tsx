import { motion } from "motion/react";
import { Palette, Leaf, Music, Brain, Users } from "lucide-react";

const realms = [
  {
    icon: Palette,
    name: "Art & Design",
    tagline: "Express what you feel",
    color: "#F77B72",
    emoji: "🎨",
  },
  {
    icon: Leaf,
    name: "Nature & Movement",
    tagline: "Learn through flow",
    color: "#91B59C",
    emoji: "🌿",
  },
  {
    icon: Music,
    name: "Music & Flow",
    tagline: "Listen, move, create",
    color: "#7BA4C6",
    emoji: "🎵",
  },
  {
    icon: Brain,
    name: "Mind & Reflection",
    tagline: "Grow inward to expand outward",
    color: "#BCA7E8",
    emoji: "🧘",
  },
  {
    icon: Users,
    name: "Community & Connection",
    tagline: "Share your energy with others",
    color: "#F3C97B",
    emoji: "🤝",
  },
];

export function CreativeRealms() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#FBF6F2] via-[#FFF5ED] to-[#FBF6F2]" />

      {/* Soft directional overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-40"
        style={{
          background: "linear-gradient(110deg, rgba(253, 240, 230, 0.6) 0%, rgba(255, 248, 242, 0.4) 50%, transparent 100%)",
        }}
      />

      {/* Playful floating shapes */}
      <div className="absolute inset-0 z-[2] opacity-25">
        <motion.div
          className="absolute top-16 right-[20%] w-64 h-64 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(247, 123, 114, 0.5), transparent)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-[15%] w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(145, 181, 156, 0.45), transparent)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.5, 0.35] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 left-[30%] w-72 h-72 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(188, 167, 232, 0.4), transparent)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.45, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
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
            <span style={{ color: '#1E3A5F' }}>Explore Your </span>
            <span className="relative inline-block">
              <span
                style={{
                  background: 'linear-gradient(90deg, #E8495F 0%, #D63447 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Creative Realms
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
          <p className="text-lg max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)', color: '#5A3D3A', lineHeight: 1.7 }}>
            Every path leads somewhere beautiful. Choose your starting point.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {realms.map((realm, index) => {
            const Icon = realm.icon;
            return (
              <motion.div
                key={realm.name}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                {/* Clean card - same style as Purpose */}
                <div className="relative h-full bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/60 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">

                  {/* Simple icon */}
                  <div className="mb-5">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${realm.color}15` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: realm.color }} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-4 text-xl" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: '#1E3A5F', lineHeight: 1.3 }}>
                    {realm.name}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', color: '#7A6F67', lineHeight: 1.7 }}>
                    {realm.tagline}
                  </p>
                </div>
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
          transition={{ duration: 1, delay: 0.5 }}
        >
          More realms coming soon — shaped by you.
        </motion.p>
      </div>
    </section>
  );
}
