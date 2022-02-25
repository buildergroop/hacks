import React from "react";
import { REGISTRATION_LINK } from "~/constants";
import { Button } from "../common/Button";

export const AboutSection = () => {
  return (
    <div className="text-dark-main dottedBackgroundLight grid place-items-center p-[2rem] md:p-[4rem]">
      <div className="flex flex-col gap-[3rem] lg:gap-0 lg:flex-row justify-between items-center 2xl:w-[80rem]">
        <div className="flex flex-col gap-7 lg:w-[50%]">
          <h1 className="font-semibold text-[3rem] xl:text-[3.7rem] 2xl:text-[4rem] leading-tight">
            A Hackathon for the Builders of Tomorrow.
          </h1>
          <p className="text-dark-secondary">
            BuilderHacks are built from the ground up to support software
            developers early on in their careers to connect, learn, and engage
            in healthy competition with peers. We understand the importance of
            these events to young developers out there, and want BuilderHacks to
            act as the best possible stepping stone.
            <br />
            <br />
            In the first iteration of our event, BuilderHacks Season One (Winter
            Edition), we're partnering up with LambdaTest, a platform that
            automates all your testing needs. We've managed to form a prize pool
            of USD $5000 to kick off the first ever Builderhacks. The team is
            extremely excited to see so many young builders coding the future,
            together.
          </p>
          <Button
            width="w-[13.2rem]"
            color="accent"
            rounded="xl"
            size="xl"
            className="hover:w-[14rem]"
          >
            <a
              href={REGISTRATION_LINK}
              className="text-accent-inverse text-[1.21rem] font-medium"
            >
              join hackathon
            </a>
          </Button>
        </div>
        <div className="flex flex-col gap-5 lg:w-[30rem] 2xl:w-[40rem] lg:ml-[3.5rem]">
          <InfoCard title="Learn." background="bg-blue" textColor="text-blue">
            Participate in a{" "}
            <span className="font-medium">number of workshops</span> hosted
            during the course of the hackathon and learn vital technologies.
          </InfoCard>

          <InfoCard title="Connect." background="bg-pink" textColor="text-pink">
            The first edition of BuilderHacks will be a{" "}
            <span className="font-medium">golden opportunity</span> to make
            friends in your generation that have similar interests.
          </InfoCard>

          <InfoCard
            title="Reward."
            background="bg-purple"
            textColor="text-purple"
          >
            Get Macbooks, Airpods, keyboards, merch from great companies, and
            much more from our prize pool
            <span className="font-medium"> worth 5000 USD.</span>
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

interface InfoCardProps {
  title: string;
  textColor: string;
  background: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  children,
  textColor,
  background,
}) => {
  return (
    <div
      className={`flex flex-col gap-1 ${background} bg-opacity-[10%] p-7 rounded-xl`}
      // style={{ boxShadow: "0px 0px 60px 0px #E9E9E9" }}
    >
      <h1 className={`font-bold text-[1.5rem] ${textColor}`}>{title}</h1>
      <p className="text-dark-secondary text-[1rem]">{children}</p>
    </div>
  );
};
