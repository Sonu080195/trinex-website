import Hero from "@/components/Hero";
import WhyTrinex from "@/components/WhyTrinex";
import Industries from "@/components/Industries";
import Audience from "@/components/Audience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <WhyTrinex />
      <Industries />
      <Audience />
      <Contact />
    </main>
  );
}