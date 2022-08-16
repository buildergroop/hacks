import React from "react";
import { SectionLayout } from "../layout/SectionLayout";

export const PrizesSection = () => {
  const c = {
    content: {
      h1: "Win BIG.",
      desc: (
        <>
          You have the chance to win top notch Apple products and credits. Not a
          fan of our selection? <strong> We’ll send you the cash.</strong>
        </>
      ),
    },
  };

  return (
    <SectionLayout
      className="px-auto m-[2rem] flex flex-col gap-5 rounded-3xl border border-[#ffffff1b] bg-dark1"
      autoSize={true}
      style={{ boxShadow: "0px 4px 60px 0px #050812" }}
    >
      <div className="text-center">
        <h1 className="font-krona text-[2rem]">{c.content.h1}</h1>
        <p className="mx-auto max-w-[40rem] text-[1.1rem] text-description">
          {c.content.desc}
        </p>
      </div>

      <img
        src="/svg/PrizeOrbitMobile.svg"
        alt=""
        className="mx-auto mt-[3rem] block w-[20rem] lg:hidden"
      />

      <img
        src="/svg/PrizeOrbit.svg"
        alt=""
        className="mx-auto mt-[3rem] hidden w-[60rem] lg:block xl:mr-[5rem] 2xl:mr-[14rem]"
      />
    </SectionLayout>
  );
};
