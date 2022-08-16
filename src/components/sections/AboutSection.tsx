import { hopURL, registrationURL } from "@/constant";
import React from "react";
import { InfoCard } from "../cards/InfoCard";
import { SectionLayout } from "../layout/SectionLayout";
import ArrowLink from "../links/ArrowLink";

export const AboutSection = () => {
  const c = {
    content: {
      h1: "This is BuilderHacks.",
      desc: (
        <>
          Welcome to the summer edition of BuilderHacks 2022 in collaboration
          with{" "}
          <strong>
            <a href={hopURL}>Hop</a>
          </strong>
          . Win Prizes from out <strong>$5000 USD</strong> prize pool, Meet
          thousands of like-minded Gen-Z Programmers, and have the experience of
          a lifetime.
        </>
      ),
    },
  };
  return (
    <SectionLayout autoSize={true}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h1 className="font-krona text-[2rem]">{c.content.h1}</h1>
          <p className="max-w-[40rem] text-[1.1rem] text-description">
            {c.content.desc}
          </p>
        </div>

        <div className="inline text-[1.05rem]">
          <ArrowLink href={registrationURL}>Register Now</ArrowLink>
        </div>
      </div>

      {/* INFO CARDS */}
      <div className="w-full">
        <div className="mx-auto mt-[5rem] flex max-w-[60rem] flex-wrap items-center justify-center gap-[2rem] lg:gap-[5rem]">
          <InfoCard
            color="blue"
            variant="bottom"
            heading="$5000 usd"
            subheading="Prize Pool"
            description="Macbooks, Apple Watches, AirPods, and free hosting credits."
          />
          <InfoCard
            color="purple"
            variant="top"
            heading="2,400+"
            subheading="Members"
            description="Buildergroop’s community is full of talented young builders."
          />
          <InfoCard
            color="pink"
            variant="bottom"
            heading={
              <>
                26
                <Th /> to 28
                <Th />
              </>
            }
            subheading="Of August 2022"
            description="Hack your heart out for 48 hours during your summer weekend."
          />
        </div>
      </div>
    </SectionLayout>
  );
};

const Th = () => <sup>th</sup>;
