import React from "react";
import { AboutSection } from "~/components/sections/AboutSection";
import { FooterSection } from "~/components/sections/FooterSection";
import { OpeningSection } from "~/components/sections/OpeningSection";
import { PrizesSection } from "~/components/sections/PrizesSection";

export default function Home() {
  return (
    <div className="w-screen">
      <OpeningSection />
      <AboutSection />
      <PrizesSection />
      <FooterSection />
    </div>
  );
}