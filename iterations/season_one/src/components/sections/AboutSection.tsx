import React from "react";

export const AboutSection = () => {
  return (
    <div className="min-h-screen grid place-items-center bg-light-main text-dark-main">
      <div className="p-5 md:p-0 md:container mx-auto flex items-center gap-16">
        <div className="max-w-[40rem]">
          <h1 className="font-normal text-[3.5rem] leading-tight">
            <span className="font-semibold">Buildergroop presents</span> one of
            the largest hackathons <span className="font-semibold"></span>
            <span className="font-semibold">exclusive to the youth.</span> Join
            us and hack to your hearts fullest content.
          </h1>
        </div>
        <div className="border-r border-light-secondary h-screen"></div>
        <div className="flex flex-col gap-10 max-w-[40rem]">
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
            title="Win Dope Prizes"
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
      <p className="font-thin">{children}</p>
    </div>
  );
};
