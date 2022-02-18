import React from "react";
import { Button } from "../ui/Button";
import { Link } from "../ui/Link";
import { Navbar } from "../ui/Navbar";

export const OpeningSection = () => {
  return (
    <div className="openingSectionBackground transition-all w-screen">
      <div className="p-[3rem] min-h-screen 2xl:min-h-[auto] flex flex-col justify-between 2xl:gap-[10rem]">
        <Navbar />
        <Content />
        <Sponsor />
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="w-full -mt-5">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="font-black text-[4.5rem] leading-[1.2] tracking-[-0.035em]">
            Members of Gen-Z, <br /> Let's Get Hacking.
          </h1>
          <p className="text-[1.2rem] md:max-w-[35rem] font-medium">
            Meet the first edition of BuilderHacks, The world's biggest Gen-Z
            hackathon with over{" "}
            <span className="font-extrabold">$5000 USD</span> in prizes.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Button
            width="w-[14rem]"
            color="light"
            rounded="full"
            size="xl"
            className="hover:w-[16rem] hover:h-[3.2rem]"
          >
            <h2 className="text-dark-main text-[1.21rem] font-extrabold textGradient">
              join hackathon
            </h2>
          </Button>
          <Link title="learn more" />
        </div>
      </div>
    </div>
  );
};

const Sponsor = () => {
  return (
    <div className="flex items-center gap-1">
      <h3 className="font-semibold text-[1.3rem]">In collaboration with</h3>
      <img src="/LambdatestLogo.png" alt="" className="mt-2" />
    </div>
  );
};

const Cards = () => {};
