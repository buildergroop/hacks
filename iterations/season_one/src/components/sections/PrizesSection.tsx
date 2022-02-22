import React from "react";

export const PrizesSection = () => {
  return (
    <div className="lg:grid place-items-center bg-light-main text-dark-main">
      <div className="p-[2rem] md:p-[4rem] mx-auto flex flex-col items-center gap-[7rem]">
        <h1 className="text-theme-main font-extrabold text-[3rem] text-accent-main">
          Grand Prizes
        </h1>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <PrizeCard
            place={2}
            prizeName="Apple Watch (Series 7)"
            subheading="+ Airpods (3rd Gen)"
            image="/PrizePhotos/second.png"
          />
          <PrizeCard
            place={1}
            prizeName='2 × 13" M1 Macbook Air'
            subheading="M1 MacBook Pro 2022 (with similar specs) if you are solo"
            image="/PrizePhotos/first.png"
          />
          <PrizeCard
            place={3}
            prizeName="Razer Huntsman Elite Keyboard"
            subheading="+ Razer Kraken Headphones"
            image="/PrizePhotos/third.png"
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
      className={`flex flex-col items-center gap-7 p-5 rounded-xl prizeBoxShadow ${
        isMainCard
          ? "bg-accent-main text-accent-inverse lg:w-[19rem] lg:h-[27rem]"
          : "bg-accent-secondaryLight text-accent-main lg:w-[16rem] lg:h-[22rem]"
      }`}
    >
      <img
        src={image}
        alt=""
        className={`rounded-full border-[10px] -mt-[7rem] bg-light-main prizeBoxShadow ${
          isMainCard
            ? "h-[13rem] w-[13rem] border-light-main"
            : "h-[10rem] w-[10rem] border-accent-tertiaryLight"
        }`}
      />
      <div className={`flex ${isMainCard ? "font-bold" : "font-medium"}`}>
        <div className="flex flex-col items-center">
          <h1
            className={`${
              isMainCard ? "text-[5rem]" : "text-[4rem]"
            } leading-none`}
          >
            {place.toString()}
          </h1>
          <span className="font-medium text-[1.2rem] tracking-widest -mr-2">
            PLACE
          </span>
        </div>
        <span className={`text-[2rem] ${isMainCard ? "-ml-3" : "-ml-1"}`}>
          {placeTh}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h2
          className={`font-medium text-center ${
            isMainCard
              ? "text-[2.2rem] leading-[1]"
              : "text-[1.8rem] leading-[1.3]"
          }`}
        >
          {prizeName}
        </h2>
        <span
          className={`text-[0.8rem] font-thin text-center tracking-wide w-[80%] mx-auto`}
        >
          {subheading}
        </span>
      </div>
    </div>
  );
};
