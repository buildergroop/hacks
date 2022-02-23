import React from "react";
import { Button } from "../common/Button";
import { Navbar } from "../parts/Navbar";
import { OpeningCard } from "../parts/OpeningCard";

import { BsPeopleFill, BsCalendarFill, BsTrophyFill } from "react-icons/bs";

export const OpeningSection = () => {
  return (
    <div className="openingSectionBackground transition-all w-screen overflow-x-hidden p-[2rem] flex flex-col justify-between h-screen">
      <Navbar />
      <Content />
      <div className=""></div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="w-full lg:-mt-5 grid place-items-center">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="font-bold text-[3.2rem] md:text-[3.8rem] lg:text-[4.2rem] xl:text-[4.6rem] 2xl:text-[5rem] leading-[1.3] tracking-[0.005em]">
            Members of Gen-Z, <br /> Let's Get Hacking.
          </h1>
          <p className="text-[1.2rem] font-light md:max-w-[42rem] mx-auto">
            Welcome to the winter edition of BuilderHacks 2021 in collaboration{" "}
            <a href="https://lambdatest.com">
              <span className="font-semibold">with LambdaTest</span>
            </a>
            . Win Prizes upto <span className="font-semibold">$5000 USD</span>,
            Meet Hundreds of like-minded Gen-Z Builders, and have the experience
            of a lifetime.
          </p>
        </div>
        <div className="flex items-center mx-auto">
          <Button
            width="w-[13.2rem]"
            color="light"
            rounded="xl"
            size="xl"
            className="hover:w-[16rem] hover:h-[3.2rem]"
          >
            <h2 className="text-dark-main text-[1.21rem] font-medium">
              join hackathon
            </h2>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Sponsor = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-1">
      <h3 className="font-medium text-[1.3rem]">In collaboration with</h3>
      <a href="https://lambdatest.com">
        <img src="/LambdatestLogo.png" alt="" className="mt-2" />
      </a>
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
