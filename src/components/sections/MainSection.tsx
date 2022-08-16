import { useRouter } from "next/router";

import React from "react";
import Button from "../buttons/Button";
import { Countdown } from "../Countdown";
import Header from "../layout/Header";
import { SectionLayout } from "../layout/SectionLayout";
import ArrowLink from "../links/ArrowLink";

export const MainSection = () => {
  const router = useRouter();

  const c = {
    header: {
      szn: "Season Two",
    },

    content: {
      h1: (
        <>
          The Hackathon for Budding{" "}
          <span className="animated-gradient-text">Young Developers</span>
        </>
      ),
      p: "A weekend of fun - hack on revolutionary projects with fellow teen coders & develop something innovative.",
    },

    buttons: {
      register: {
        text: "Register Now",
        href: "",
      },
      discord: {
        text: "Join Discord Server",
        href: "https://discord.gg/builders",
      },
    },
  };

  return (
    <div
      className="relative flex w-screen flex-col justify-between"
      style={{
        background: `url("media/NoiseBackground.png"), linear-gradient(212.06deg, rgba(0, 0, 0, 0.7) 15.8%, #070A23 86.01%), url("media/CityBackground.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Header />

      <SectionLayout
        className="container mx-auto h-full w-full md:mt-[5rem]"
        autoSize={true}
      >
        <div className="space-y-[3rem]">
          {/* Main Part */}
          <div className="max-w-[60rem] space-y-4">
            {/* Info Header */}
            <div className="flex items-center gap-3 text-[1.5rem]">
              <span className="font-bold">{c.header.szn}</span>
            </div>

            {/* Content */}
            <h1 className="font-krona text-[2.5rem] leading-[3.5rem] lg:text-[3rem] lg:leading-[4rem]">
              {c.content.h1}
            </h1>
            <p className="max-w-[40rem] text-[1.2rem] text-description">
              {c.content.p}
            </p>

            {/* Buttons */}
            <div className="relative flex items-center gap-3 pt-[1.7rem]">
              <Button
                variant="primary"
                width="w-[10rem]"
                onClick={() => router.push(c.buttons.register.href)}
              >
                {c.buttons.register.text}
              </Button>

              <ArrowLink
                href={c.buttons.discord.href}
                className="ml-[12rem] text-[0.9rem]"
              >
                {c.buttons.discord.text}
              </ArrowLink>
            </div>
          </div>

          <div className="space-y-[2rem]">
            <div className="border-b border-stroke" />

            <div className="flex w-full flex-wrap items-center justify-between gap-[3rem]">
              <div className="flex items-center gap-[2rem]">
                <div className="space-y-2">
                  <h3 className="text-[1.5rem] font-bold">
                    26<sup>th</sup> August
                  </h3>
                  <span className="text-[1.2rem]">10:00AM EST</span>
                </div>
                <span className="text-[1.2rem] font-bold">TO</span>
                <div className="space-y-2">
                  <h3 className="text-[1.5rem] font-bold">
                    28<sup>th</sup> August
                  </h3>
                  <span className="text-[1.2rem]">10:00AM EST</span>
                </div>
              </div>
              <Countdown />
            </div>
          </div>
        </div>
      </SectionLayout>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1680 40"
        className="z-1 absolute bottom-[1px] w-full"
      >
        <path
          d="M0 40h1680V30S1340 0 840 0 0 30 0 30z"
          className="fill-dark"
        ></path>
      </svg>
    </div>
  );
};
