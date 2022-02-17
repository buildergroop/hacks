import React from "react";
import { Button } from "../ui/Button";
import { Navbar } from "../ui/Navbar";

export const OpeningSection = () => {
  return (
    <div className="p-[2rem] w-screen openingSectionBackground flex flex-col gap-[5rem]">
      <Navbar />
      <Content />
    </div>
  );
};

const Content = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="font-black text-[4.5rem] leading-[1.2] tracking-[-0.035em]">
            Members of Gen-Z, <br /> Let's Get Hacking.
          </h1>
          <p className="text-[1.2rem] xl:max-w-[35rem] font-medium">
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
            <h2 className="text-dark-main text-[1.1rem] font-extrabold textGradient">
              join hackathon
            </h2>
          </Button>
          <a className="text-light-main font-bold cursor-pointer text-[1.1rem]">
            learn more
          </a>
        </div>
      </div>
    </div>
  );
};
