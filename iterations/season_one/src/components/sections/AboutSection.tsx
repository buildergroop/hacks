import React from "react";

export const AboutSection = () => {
  return (
    <div className="grid place-items-center bg-dark-main text-light-main">
      <div className="p-[4rem] 2xl:p-0 mx-auto flex flex-col lg:flex-row items-center">
        <h1 className="font-normal text-[2.5rem] xl:text-[3.3rem] 2xl:text-[3.7rem] leading-tight lg:w-[30rem] 2xl:w-[40rem] mb-10 lg:mb-0 lg:mr-[2.5rem]">
          <span className="font-semibold">Buildergroop presents</span> one of
          the largest hackathons <span className="font-semibold"></span>
          <span className="font-semibold">exclusive to the youth.</span> Join us
          and hack to your hearts fullest content.
        </h1>
        <div className="border-r border-dark-secondary h-screen hidden lg:block"></div>
        <div className="flex flex-col gap-10 lg:w-[30rem] 2xl:w-[40rem] lg:ml-[3.5rem]">
          <InfoCard
            title="Meet Like-Minded Gen-Z’s"
            gradient="radial-gradient(108.12% 276.78% at -4.3% 100%, #4F75FF 0%, #E22DFF 100%)"
          >
            The first edition of BuilderHacks will be a{" "}
            <span className="font-medium">golden opportunity</span> to make
            friends in your generation that have similar interests.
          </InfoCard>

          <InfoCard
            title="Learn Great Technologies"
            gradient="radial-gradient(143.8% 212.38% at 5.95% 116.18%, #D718F6 0%, #FF5F7C 53.17%, #FFBA34 100%)"
          >
            Participate in a{" "}
            <span className="font-medium">number of workshops</span> hosted
            during the course of the hackathon and learn vital technologies.
          </InfoCard>

          <InfoCard
            title="Win Awesome Prizes"
            gradient="radial-gradient(100% 255.99% at 0% 100%, #4ED4FF 0%, #46F0A9 27.98%, #9CF963 100%)"
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
  gradient: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children, gradient }) => {
  return (
    <div className="flex flex-col gap-1 text-[1.5rem]">
      <h1
        className="font-medium"
        style={{
          background: gradient,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </h1>
      <p className="font-thin text-light-secondary">{children}</p>
    </div>
  );
};
