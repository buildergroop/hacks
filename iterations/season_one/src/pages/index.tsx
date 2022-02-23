import React from "react";
import { AboutSection } from "~/components/sections/AboutSection";
import { ClosingSection } from "~/components/sections/ClosingSection";
import { FAQSection } from "~/components/sections/FAQSection";
import { OpeningSection } from "~/components/sections/OpeningSection";
// import { FooterSection } from "~/components/sections/FooterSection";
// import { PrizesSection } from "~/components/sections/PrizesSection";

export default function Home() {
  return (
    <div className="w-screen">
      <OpeningSection />
      <AboutSection />
      <FAQSection />
      <ClosingSection />
      {/* <PrizesSection /> */}
      {/* <FooterSection /> */}
    </div>
  );
}
