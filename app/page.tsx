"use client"
import ComunnitySection from "./components/organisms/comunnitySection/ComunnitySection";
import ForYouCards from "./components/organisms/forYouCards/ForYouCards";
import Header from "./components/organisms/header/Header";
import HeroSection from "./components/organisms/heroSection/HeroSection";

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <HeroSection />
      <ForYouCards />
      <ComunnitySection />
    </div>
  );
}
