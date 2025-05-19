import HeroTextBlock from "../../molecules/heroTextBlock/HeroTextBlock";
import Image from "next/image";
import banner from "@/public/banner1.png";
import HeroBanner from "../../atoms/heroBanner/HeroBanner";

export default function HeroSection() {
  return (
    <section className="w-full bg-background text-white px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
      <HeroTextBlock />
      <HeroBanner />
    </section>
  );
}