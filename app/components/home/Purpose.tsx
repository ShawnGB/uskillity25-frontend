import { motion } from "motion/react";
import { TrendingDown, Smartphone, Bot, Heart, Users, Flame } from "lucide-react";
import { FloatingShapes } from "~/components/ui/FloatingShapes";
import { SectionHeading } from "~/components/ui/SectionHeading";

const points = [
  {
    icon: TrendingDown,
    title: "The Creative Pulse is Fading",
    description: "Technology grows faster every day — but many people feel more disconnected, more passive, less alive.",
    color: "#7BA4C6",
  },
  {
    icon: Smartphone,
    title: "We Consume, Not Create",
    description: "We scroll, consume, react… yet rarely create. The passive mindset is replacing the maker's spirit.",
    color: "#F77B72",
  },
  {
    icon: Bot,
    title: "AI Can't Replace Purpose",
    description: "AI can imitate art — but not purpose. As automation replaces routine, imagination is the only thing truly ours.",
    color: "#BCA7E8",
  },
  {
    icon: Heart,
    title: "Creativity is Survival",
    description: "Creativity is not a luxury — it's survival. When we stop creating, we stop evolving.",
    color: "#F3C97B",
  },
  {
    icon: Users,
    title: "Making Keeps Us Alive",
    description: "Learning, making, sharing — these acts keep us emotionally and socially alive.",
    color: "#91B59C",
  },
  {
    icon: Flame,
    title: "Reignite Your Spark",
    description: "u/skillity creates real spaces where curiosity returns, ideas collide, and people remember the joy of making.",
    color: "#D63447",
  },
];

const floatingShapes = [
  {
    color: "rgba(247, 123, 114, 0.5)",
    size: "16rem",
    position: { top: "2.5rem", left: "10%" },
    duration: 8,
    delay: 0,
    opacity: [0.3, 0.5, 0.3],
    scale: [1, 1.2, 1],
  },
  {
    color: "rgba(145, 181, 156, 0.45)",
    size: "20rem",
    position: { top: "25%", right: "15%" },
    duration: 10,
    delay: 1,
    opacity: [0.35, 0.5, 0.35],
    scale: [1, 1.15, 1],
  },
  {
    color: "rgba(188, 167, 232, 0.4)",
    size: "18rem",
    position: { bottom: "25%", left: "20%" },
    duration: 9,
    delay: 0.5,
    opacity: [0.3, 0.45, 0.3],
    scale: [1, 1.1, 1],
  },
  {
    color: "rgba(243, 201, 123, 0.5)",
    size: "17.5rem",
    position: { bottom: "2.5rem", right: "10%" },
    duration: 11,
    delay: 1.5,
    opacity: [0.35, 0.5, 0.35],
    scale: [1, 1.25, 1],
  },
];

export function Purpose() {
  return (
    <section id="purpose" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 z-0 section-bg-warm" />

      {/* Soft directional overlay */}
      <div className="absolute inset-0 z-[1] section-overlay" />

      {/* Playful floating shapes */}
      <FloatingShapes shapes={floatingShapes} />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          highlightedWord="Matters"
          subtitle="The world needs more makers, not just consumers."
        >
          Why it Matters
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                {/* Clean card */}
                <div className="card-glass relative h-full p-8">
                  {/* Simple icon */}
                  <div className="mb-5">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${point.color}15` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: point.color }} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-4 text-xl" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-text-blue)', lineHeight: 1.3 }}>
                    {point.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
