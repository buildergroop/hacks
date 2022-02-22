import React from "react";
import { Button } from "../common/Button";
import { Link } from "../common/Link";
import { Navbar } from "../parts/Navbar";
import { OpeningCard } from "../parts/OpeningCard";

import { BsPeopleFill, BsCalendarFill, BsTrophyFill } from "react-icons/bs";

export const OpeningSection = () => {
  return (
    <div className="openingSectionBackground transition-all w-screen flex overflow-x-hidden">
      <CardsGraphic />
      <div className="w-full py-[2rem] md:p-[3rem] flex flex-col justify-between lg:min-h-screen 2xl:min-h-[auto] gap-[5rem] lg:gap-[0] 2xl:gap-[10rem] ml-10">
        <Navbar />
        <Content />
        <Sponsor />
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="w-full lg:-mt-5">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="font-extrabold text-[3rem] md:text-[3.8rem] lg:text-[4.2rem] xl:text-[4.6rem] 2xl:text-[5rem] leading-[1.1] tracking-[0.005em]">
            Members of Gen-Z, <br /> Let's Get Hacking.
          </h1>
          <p className="text-[1.3rem] md:max-w-[35rem] font-light">
            Meet the first edition of BuilderHacks, The world's biggest Gen-Z
            hackathon with over{" "}
            <span className="font-extrabold">$5000 USD</span> in prizes.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Button
            width="w-[13rem]"
            color="light"
            rounded="full"
            size="xl"
            className="hover:w-[16rem] hover:h-[3.2rem]"
          >
            <h2 className="text-dark-main text-[1.21rem] font-medium textGradient">
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
    <div className="flex flex-col md:flex-row md:items-center gap-1">
      <h3 className="font-medium text-[1.3rem]">In collaboration with</h3>
      <img src="/LambdatestLogo.png" alt="" className="mt-2" />
    </div>
  );
};

const CardsGraphic = () => {
  return (
    <div className="hidden lg:flex lg:min-h-screen 2xl:min-h-[auto] w-[60%]">
      <div className="flex flex-col h-full w-[50%]">
        <OpeningCard type="graphic" graphic="/Character/Badrun.png" />
        <OpeningCard
          type="informational"
          content="25th to 27th Feb"
          icon={<BsCalendarFill className="h-[4rem] w-[4rem]" />}
        />
        <OpeningCard type="graphic" graphic="/Character/Marni.png" />
      </div>
      <div className="flex flex-col h-full w-[50%]">
        <OpeningCard
          type="informational"
          subheading="of prizes"
          content="$5000"
          icon={<BsTrophyFill className="h-[4rem] w-[4rem]" />}
        />
        <OpeningCard type="graphic" graphic="/Character/Ikbal.png" />
        <OpeningCard
          type="informational"
          subheading="registrations"
          content="100+"
          icon={<BsPeopleFill className="h-[4rem] w-[4rem]" />}
        />
      </div>
    </div>
  );
};
