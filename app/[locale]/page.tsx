import ComunnitySection from "../components/organisms/comunnitySection/ComunnitySection";
import ForYouCards from "../components/organisms/forYouCards/ForYouCards";
import HeroSection from "../components/organisms/heroSection/HeroSection";

export default async function Home() {

  return (
    <div className="bg-background min-h-screen w-full pt-16">
      <div className="container mx-auto">
        <HeroSection />
        <ForYouCards />
      </div>
      <ComunnitySection />
    </div>
  );
}
