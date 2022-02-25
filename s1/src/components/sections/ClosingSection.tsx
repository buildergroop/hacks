import React from "react";
import { BuilderhacksLogo } from "~/components/common/Logo";
import { ButtonRow } from "../common/ButtonRow";

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
          <ButtonRow />
        </div>
      </div>
    </div>
  );
};
