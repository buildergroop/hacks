import * as React from "react";
import Layout from "@/components/layout/Layout";
import { MainSection } from "@/components/sections/MainSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PrizesSection } from "@/components/sections/PrizesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/Footer";
import { SponsorSection } from "@/components/sections/SponsorSection";

export default function Home() {
  return (
    <Layout className="overflow-x-hidden">
      <MainSection />
      <SponsorSection />
      <AboutSection />
      <PrizesSection />
      <FAQSection />
      <Footer />
    </Layout>
  );
}
