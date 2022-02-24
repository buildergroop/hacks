import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { Button } from "../common/Button";
import { BuilderhacksLogo } from "~/components/common/Logo";
import { REGISTRATION_LINK } from "~/constants";

export const ClosingSection = () => {
  return (
    <div className="openingSectionBackground transition-all w-screen flex flex-col justify-between px-[3rem] md:px-0 py-[5rem]">
      <div className="w-full grid place-items-center">
        <div className="flex flex-col gap-8">
          <div className="md:mx-auto -mb-3">
            <BuilderhacksLogo />
          </div>
          <div className="flex flex-col gap-4 md:text-center">
            <h1 className="font-bold text-[2.7rem] md:text-[4.2rem] lg:text-[4.5rem] xl:text-[4.9rem] 2xl:text-[5.3rem] leading-[1.3] tracking-[0.001em]">
              It's Time To Build.
            </h1>
            <p className="text-[1rem] font-light md:max-w-[42rem] mx-auto">
              Are you ready to join{" "}
              <a href="https://buildergroop.com">Buildergroop's</a> first ever
              hackathon in collaboration with{" "}
              <a href="https://lambdatest.com">
                <span className="font-semibold">with LambdaTest</span>
              </a>
              ? With over $5000 USD in prizes and tons of fellow young builders,
              we're sure you'll have a great time.
            </p>
          </div>
          <div className="flex items-center md:mx-auto gap-3 z-[999]">
            <Button
              width="w-[13.2rem]"
              color="light"
              rounded="xl"
              size="xl"
              className="hover:w-[16rem] hover:h-[3.2rem]"
            >
              <a
                href={REGISTRATION_LINK}
                className="text-dark-main text-[1.21rem] font-medium"
              >
                join hackathon
              </a>
            </Button>
            <div className="h-[3rem] w-[3rem] bg-light-main rounded-full grid place-items-center cursor-pointer hover:bg-opacity-80 transition-all">
              <BsFillPlayFill className="text-dark-main h-[1.6rem] w-[1.6rem]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
