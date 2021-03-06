import React from "react";
import { AboutSection } from "~/components/sections/AboutSection";
import { ClosingSection } from "~/components/sections/ClosingSection";
import { FAQSection } from "~/components/sections/FAQSection";
import { OpeningSection } from "~/components/sections/OpeningSection";
import { FooterSection } from "~/components/sections/FooterSection";
import { PrizesSection } from "~/components/sections/PrizesSection";
import { Meta } from "~/partials/Meta";

export default function Home() {
  return (
    <>
      <Meta
        title="BuilderHacks - An Inclusive Gen-Z Hackathon."
        description="In our very first iteration of BuilderHacks, you can win prizes upto $5000 USD, Meet hundreds of like-minded Gen-Z builders, and have the experience of a lifetime."
        image="https://cdn.discordapp.com/attachments/924237532919627816/946482248918638612/builderhacks_winter_emoji.png"
        keywords="hackathon, gen-z, builderhacks, buildergroop, code, programming, software, testing, automation"
      />
      <div className="w-screen">
        <OpeningSection />
        <AboutSection />
        <PrizesSection />
        <FAQSection />
        <ClosingSection />
        <FooterSection />
      </div>
    </>
  );
}
