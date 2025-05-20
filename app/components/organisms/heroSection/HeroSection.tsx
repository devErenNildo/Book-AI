import HeroTextBlock from "../../molecules/heroTextBlock/HeroTextBlock";
import HeroBanner from "../../atoms/heroBanner/HeroBanner";

export default function HeroSection() {
  return (
    <section className="w-full bg-background px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
      <HeroTextBlock />
      <HeroBanner />
    </section>
  );
}