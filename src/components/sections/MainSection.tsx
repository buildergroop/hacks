import { useRouter } from "next/router";

import React from "react";
import Button from "../buttons/Button";
import ArrowLink from "../links/ArrowLink";

export const MainSection = () => {
  const router = useRouter();

  const c = {
    header: {
      szn: "Season Two",
      date: (
        <>
          26
          <Th /> to 28
          <Th /> of August ‘22
        </>
      ),
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
      className="min-h-screen !w-screen"
      style={{
        background: `url("media/NoiseBackground.png"), linear-gradient(212.06deg, rgba(0, 0, 0, 0.47) 15.8%, #070A23 86.01%), url("media/CityBackground.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute bottom-16 left-10 flex max-w-[60rem] flex-col gap-4">
        {/* Info Header */}
        <div className="flex items-center gap-3 text-[1.5rem]">
          <span className="font-bold">{c.header.szn}</span>
          <span>•</span>
          <span>{c.header.date}</span>
        </div>

        {/* Content */}
        <h1 className="font-krona text-[3rem] leading-[4rem]">
          {c.content.h1}
        </h1>
        <p className="max-w-[40rem] text-[1.2rem] text-description">
          {c.content.p}
        </p>

        {/* Buttons */}
        <div className="relative mt-[1.7rem] flex items-center gap-3">
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
    </div>
  );
};

const Th = () => <sup>th</sup>;
