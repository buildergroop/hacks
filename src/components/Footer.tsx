import { buildergroopDiscordURL } from "@/constant";
import { useRouter } from "next/router";
import React from "react";
import Button from "./buttons/Button";
import UnstyledLink from "./links/UnstyledLink";
import { PartnershipLogo } from "./logos/PartnershipLogo";

export const Footer = () => {
  const router = useRouter();

  const c = {
    heading: "Come on over. It's time to build.",
    buttons: {
      register: {
        text: "Register Now",
        href: "",
      },
    },
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        background: `url("media/NoiseBackground.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <img src="/media/GlowEffect.png" className="absolute z-[-1] mx-auto" />

      <div className="z-[999] w-full border-t border-t-[#ffffff1b] bg-white bg-opacity-[4%] p-[2rem]">
        <div className="container mx-auto">
          <div className="space-y-10">
            <div className="relative flex w-full flex-col lg:flex-row lg:items-center lg:justify-between">
              <h1 className="font-krona max-w-[30rem] text-[2.5rem]">
                {c.heading}
              </h1>
              <Button
                variant="secondary"
                width="w-[10rem]"
                outerClassName="right-0"
                onClick={() => router.push(c.buttons.register.href)}
              >
                {c.buttons.register.text}
              </Button>
            </div>

            <div className="z-[999] border-b border-white opacity-[15%]" />

            <div className="z-[999] flex flex-wrap gap-[2rem] lg:gap-[8rem]">
              <PartnershipLogo />
              <div className="flex flex-wrap gap-[4rem] lg:gap-[6rem]">
                <LinkGroup
                  heading="Buildergroop"
                  links={[
                    { title: "Website", href: "" },
                    { title: "Discord", href: buildergroopDiscordURL },
                    { title: "Twitter", href: "" },
                    { title: "TikTok", href: "" },
                  ]}
                />
                <LinkGroup
                  heading="Hop.io"
                  links={[
                    { title: "Website", href: "" },
                    { title: "Discord", href: "" },
                    { title: "Twitter", href: "" },
                    { title: "Giggl from Hop", href: "https://giggl.app" },
                  ]}
                />
                <LinkGroup
                  heading="Organising Team"
                  links={[
                    {
                      title: "Aaryaman (@aaryamvn)",
                      href: "https://twitter.com/aaryamvn",
                    },
                    {
                      title: "Ari (@aridutilh)",
                      href: "https://twitter.com/aridutilh",
                    },
                    {
                      title: "Tejas (@suptejas)",
                      href: "https://twitter.com/suptejas",
                    },
                    {
                      title: "Phineas (@phineyes)",
                      href: "https://twitter.com/phineyes",
                    },
                    {
                      title: "Rob (@robjmorrissey)",
                      href: "https://twitter.com/robjmorrissey",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="z-[999] w-screen bg-[#000] bg-opacity-[15%]">
        <div className="container mx-auto flex items-center justify-between bg-[transparent] p-[1rem]">
          <span className="text-[1.1rem] font-medium text-description">
            © 2022 Buildergroop Corporation
          </span>
          <Socials />
        </div>
      </div>
    </div>
  );
};

const LinkGroup = ({
  heading,
  links,
}: {
  heading: string;
  links: { title: string; href: string }[];
}) => (
  <div className="space-y-3">
    <h3 className="text-[1.3rem] font-semibold">{heading}</h3>
    <div className="flex flex-col gap-2">
      {links.map((link, i) => (
        <UnstyledLink
          key={i}
          className="text-[1rem] text-[#8A8F97]"
          href={link.href}
        >
          {link.title}
        </UnstyledLink>
      ))}
    </div>
  </div>
);

const Socials = () => (
  <div className="flex items-center gap-3">
    <UnstyledLink href={buildergroopDiscordURL}>
      <img src="/svg/Discord.svg" />
    </UnstyledLink>
    <UnstyledLink href="">
      <img src="/svg/Twitter.svg" />
    </UnstyledLink>
    <UnstyledLink href="">
      <img src="/svg/Github.svg" />
    </UnstyledLink>
  </div>
);
