import React from "react";
import { GradientBackground } from "@/components/utils/gradient-background";
import { HomeSection } from "@/components/sections/home-section";

export default function HomePage() {
  return (
    <GradientBackground>
      <main className="relative min-h-screen">
        <HomeSection />
      </main>
    </GradientBackground>
  );
}
