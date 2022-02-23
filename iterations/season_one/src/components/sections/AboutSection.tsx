import React from "react";
import { Button } from "../common/Button";

export const AboutSection = () => {
  return (
    <div className="text-dark-main dottedBackgroundLight grid place-items-center p-[2rem] md:p-[4rem]">
      <div className="flex flex-col lg:flex-row justify-between items-center 2xl:w-[80rem]">
        <div className="flex flex-col gap-7 lg:w-[50%]">
          <h1 className="font-semibold text-[3.4rem] xl:text-[3.7rem] 2xl:text-[4rem] leading-tight">
            A Hackathon Exclusive to the Youth.
          </h1>
          <p className="text-dark-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Pellentesque
            ac malesuada tortor, eget porttitor eros. Vivamus pellentesque ex
            nec mauris efficitur, at rutrum nisl aliquet. Pellentesque purus
            nisi, porta eu erat nec, maximus scelerisque nisi.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Pellentesque
            ac malesuada tortor, eget porttitor eros. Vivamus pellentesque ex
            nec mauris efficitur, at rutrum nisl aliquet. Pellentesque purus
            nisi, porta eu erat nec, maximus scelerisque nisi.
          </p>
          <Button
            width="w-[13.2rem]"
            color="accent"
            rounded="xl"
            size="xl"
            className="hover:w-[16rem] hover:h-[3.2rem]"
          >
            <h2 className="text-accent-inverse text-[1.21rem] font-medium">
              join hackathon
            </h2>
          </Button>
        </div>
        <div className="lg:w-[50%]">{/* <InfoCard /> */}</div>
      </div>
    </div>
  );
};

const InfoCard = () => {
  return (
    <div className="bg-accent-main text-accent-inverse bg-opacity-[50%] rounded-xl padding-5 shadow-xl h-full w-full">
      {/* <h1 className="text-[3rem] font-bold">BuilderHacks Ticket</h1> */}
    </div>
  );
};
