import Hero from "~/components/home/Hero";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FBF6F2]">
      <Hero />
      <section>About</section>
      <section>Purpose</section>
      <section> Join</section>
      <section>Why it Matters</section>
    </div>
  );
}
