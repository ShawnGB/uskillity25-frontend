import Hero from "~/components/home/Hero";
import { Purpose } from "~/components/home/Purpose";
import { About } from "~/components/home/About";
import { CreativeRealms } from "~/components/home/CreativeRealms";
import { HowItWorks } from "~/components/home/HowItWorks";
import { VisionQuote } from "~/components/home/VisionQuote";
import { JoinSection } from "~/components/home/JoinSection";
import { Footer } from "~/components/ui/Footer";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "u/skillity - Reignite Human Creativity" },
    { name: "description", content: "u/skillity helps people rediscover their creativity — and through it, themselves. Join the movement to bring back what technology promised but couldn't deliver." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FBF6F2]">
      <Hero />
      <Purpose />
      <About />
      <HowItWorks />
      <CreativeRealms />
      <VisionQuote />
      <JoinSection />
      <Footer />
    </div>
  );
}
