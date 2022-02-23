import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";
import { GiTrophy } from "react-icons/gi";

export const AboutSection = () => {
  return (
    <div className="grid place-items-center text-dark-main dottedBackgroundLight">
      <div className="p-[2rem] md:p-[4rem] mx-auto flex flex-col items-center 2xl:w-[80rem]">
        <h1 className="font-normal text-[2.5rem] xl:text-[3.3rem] 2xl:text-[3.7rem] leading-tight mb-10 mx-auto">
          <span className="font-semibold">Buildergroop presents</span> one of
          the largest hackathons <span className="font-semibold"></span>
          <span className="font-semibold">exclusive to the youth.</span> Join us
          and hack to your hearts fullest content.
        </h1>
        <div className="flex gap-10">
          <InfoCard
            title="Connect."
            background="bg-pink"
            textColor="text-pink"
            Icon={BsFillPeopleFill}
          >
            The first edition of BuilderHacks will be a{" "}
            <span className="font-medium">golden opportunity</span> to make
            friends in your generation that have similar interests.
          </InfoCard>

          <InfoCard
            title="Learn."
            background="bg-blue"
            textColor="text-blue"
            Icon={FaBrain}
          >
            Participate in a{" "}
            <span className="font-medium">number of workshops</span> hosted
            during the course of the hackathon and learn vital technologies.
          </InfoCard>

          <InfoCard
            title="Win."
            background="bg-purple"
            textColor="text-purple"
            Icon={GiTrophy}
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
  Icon: any;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  children,
  textColor,
  background,
  Icon,
}) => {
  return (
    <div
      className={`flex flex-col gap-4 ${background} bg-opacity-[13%] p-7 rounded-xl w-[33%]`}
      style={{ boxShadow: "0px 0px 60px 0px #E9E9E9" }}
    >
      <Icon className={`${textColor} h-[2.5rem] w-[2.5rem]`} />
      <div className="flex flex-col gap-1">
        <h1 className={`font-bold text-[1.5rem] ${textColor}`}>{title}</h1>
        <p className="text-dark-secondary text-[1rem]">{children}</p>
      </div>
    </div>
  );
};
