import Button from "@/components/buttons/Button";
import { hopURL } from "@/constant";
import { useRouter } from "next/router";
import React from "react";
import { SectionLayout } from "../layout/SectionLayout";

export const SponsorSection = () => {
  const router = useRouter();

  return (
    <SectionLayout autoSize={true}>
      <div
        className="relative overflow-hidden rounded-3xl border border-[#ffffff1b] bg-dark1 p-[3rem]"
        style={{ boxShadow: "0px 4px 60px 0px #050812" }}
      >
        <div className="">
          <div className="z-[999] mb-7 space-y-2">
            <span className="text-[1.2rem] font-semibold uppercase text-gray">
              From The Sponsor
            </span>
            <h1 className="font-krona text-[1.6rem]">
              Build realtime apps with ease.
            </h1>
            <p className="mt-4 text-[1.2rem] leading-[2.1rem] text-description lg:max-w-[45%]">
              Hop is a cloud platform, with realtime tools baked in. Deploy your
              app on Hop and add realtime features in minutes, not weeks
            </p>
          </div>

          <Button
            variant="secondary"
            width="w-[10rem]"
            onClick={() => router.push(hopURL)}
          >
            Check It Out
          </Button>

          <div className="mt-5 pb-14" />
        </div>

        <img
          src="/svg/HopBanner.svg"
          alt=""
          className="absolute right-0 bottom-0 hidden w-[40rem] xl:block"
        />
      </div>
    </SectionLayout>
  );
};
