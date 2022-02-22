import React from "react";

export const PrizesSection = () => {
  return (
    <div className="h-screen lggrid place-items-center bg-light-main text-dark-main">
      <div className="p-[2rem] md:p-[4rem] 2xl:p-0 mx-auto flex flex-col items-center gap-10">
        <h1 className="text-theme-main font-extrabold text-[3rem] text-accent-main">
          Grand Prizes
        </h1>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <PrizeCard
            place={2}
            prizeName='2 × 13" M1 Macbook Air'
            subheading="M1 MacBook Pro 2022 if you are solo"
            image="rstjhgdhj"
          />
          <PrizeCard
            place={1}
            prizeName='2 × 13" M1 Macbook Air'
            subheading="M1 MacBook Pro 2022 if you are solo"
            image="rstjhgdhj"
          />
          <PrizeCard
            place={3}
            prizeName='2 × 13" M1 Macbook Air'
            subheading="M1 MacBook Pro 2022 if you are solo"
            image="rstjhgdhj"
          />
        </div>
      </div>
    </div>
  );
};

interface PrizeCardProps {
  place: 1 | 2 | 3;
  prizeName: string;
  subheading: string;
  image: string;
}

const PrizeCard: React.FC<PrizeCardProps> = ({
  place,
  prizeName,
  subheading,
  image,
}) => {
  const isMainCard = place === 1;
  const placeTh = place === 1 ? "st" : place === 2 ? "nd" : "rd";

  return (
    <div
      className={`flex flex-col items-center gap-5 rounded-xl prizeBoxShadow ${
        isMainCard
          ? "bg-accent-main text-accent-inverse lg:w-[19rem] lg:h-[25rem]"
          : "bg-accent-secondaryLight text-accent-main lg:w-[16rem] lg:h-[22rem]"
      }`}
    >
      <div className={`flex ${isMainCard ? "font-bold" : "font-medium"}`}>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[5rem] leading-none">{place.toString()}</h1>
          <span className="font-thin text-[1.2rem] tracking-widest -mr-2">
            PLACE
          </span>
        </div>
        <span className={`text-[2rem] ${isMainCard ? "-ml-3" : "-ml-1"}`}>
          {placeTh}
        </span>
      </div>
    </div>
  );
};
