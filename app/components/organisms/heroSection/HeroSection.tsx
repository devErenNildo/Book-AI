import HeroTextBlock from "../../molecules/heroTextBlock/HeroTextBlock";
import ImageBanner from "../../atoms/heroBanner/ImageBanner";
import image from "@/public/banner1.png"

export default function HeroSection() {
  return (
    <section className="w-full bg-background px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
      <HeroTextBlock />
      <ImageBanner image={image} />
    </section>
  );
}