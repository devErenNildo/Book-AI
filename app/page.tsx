"use client"
import { useEffect } from "react";
import ComunnitySection from "./components/organisms/comunnitySection/ComunnitySection";
import ForYouCards from "./components/organisms/forYouCards/ForYouCards";
import Header from "./components/organisms/header/Header";
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
    <div className="bg-background w-full justify-center pt-16">
      < HeroSection />
      <ForYouCards />
      <ComunnitySection />
    </div >
  );
}
