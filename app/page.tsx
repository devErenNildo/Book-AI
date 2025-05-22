"use client"
import { useEffect } from "react";
import ComunnitySection from "./components/organisms/comunnitySection/ComunnitySection";
import ForYouCards from "./components/organisms/forYouCards/ForYouCards";
import HeroSection from "./components/organisms/heroSection/HeroSection";
import { useAuth } from "./context/AuthContext";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push('/home');
    }
  }, [user, router]);
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
