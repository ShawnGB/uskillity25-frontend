import { motion } from "motion/react";
import { Palette, Leaf, Music, Brain, Users } from "lucide-react";
import { FloatingShapes } from "~/components/ui/FloatingShapes";
import { SectionHeading } from "~/components/ui/SectionHeading";

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

const floatingShapes = [
  {
    color: "rgba(247, 123, 114, 0.5)",
    size: "16rem",
    position: { top: "4rem", right: "20%" },
    duration: 8,
    delay: 0,
    opacity: [0.3, 0.5, 0.3],
    scale: [1, 1.2, 1],
  },
  {
    color: "rgba(145, 181, 156, 0.45)",
    size: "20rem",
    position: { bottom: "8rem", left: "15%" },
    duration: 10,
    delay: 1,
    opacity: [0.35, 0.5, 0.35],
    scale: [1, 1.15, 1],
  },
  {
    color: "rgba(188, 167, 232, 0.4)",
    size: "18rem",
    position: { top: "33.33%", left: "30%" },
    duration: 9,
    delay: 0.5,
    opacity: [0.3, 0.45, 0.3],
    scale: [1, 1.1, 1],
  },
];

export function CreativeRealms() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 z-0 section-bg-warm" />

      {/* Soft directional overlay */}
      <div className="absolute inset-0 z-[1] section-overlay" />

      {/* Playful floating shapes */}
      <FloatingShapes shapes={floatingShapes} />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          highlightedWord="Creative Realms"
          subtitle="Every path leads somewhere beautiful. Choose your starting point."
        >
          Explore Your Creative Realms
        </SectionHeading>

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
                <div className="card-glass relative h-full p-8 cursor-pointer">
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
                  <h3 className="mb-4 text-xl" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-text-blue)', lineHeight: 1.3 }}>
                    {realm.name}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
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
          style={{ fontFamily: 'var(--font-sans)', color: 'var(--muted-foreground)', lineHeight: 1.7 }}
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
