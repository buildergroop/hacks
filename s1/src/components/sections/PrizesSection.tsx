import React from "react";

export const PrizesSection = () => {
  return (
    <div className="grid place-items-center dottedBackgroundDark text-light-main">
      <div className="flex flex-col items-center gap-[3rem] p-[4rem] mx-auto lg:w-[70rem] 2xl:w-[80rem] w-full">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-[3rem] text-center">Prize's</h1>
          <p className="text-[1rem] text-center">
            These are some of the prizes you can get by winning Builderhacks
            Season One!
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <PrizeCard
            place={1}
            prizeName='2 × 13" M1 Macbook Air'
            subheading="M1 MacBook Pro 2022 (with similar specs) if you are solo"
            image="/PrizePhotos/first.png"
          />
          <PrizeCard
            place={2}
            prizeName="Apple Watch (Series 7)"
            subheading="+ Airpods (3rd Gen)"
            image="/PrizePhotos/second.png"
          />
          <PrizeCard
            place={3}
            prizeName="Razer Huntsman Keyboard"
            subheading="+ Razer Kraken Headphones"
            image="/PrizePhotos/third.png"
          />
          <PrizeCard
            place={4}
            prizeName="Discord Nitro Yearly"
            subheading="+ Wumpus Plushie from Discord"
            image="/PrizePhotos/first.png"
          />
          <PrizeCard
            place={5}
            prizeName="Server Role"
            subheading="Get a cool role in the Buildergroop Discord Server."
            image="/PrizePhotos/second.png"
          />
          <PrizeCard
            place={6}
            prizeName="TAS Platform"
            subheading="All participants get a free year of the LambdaTest TAS Platform."
            image="/PrizePhotos/third.png"
          />
        </div>
      </div>
    </div>
  );
};

interface PrizeCardProps {
  place: 1 | 2 | 3 | 4 | 5 | 6;
  prizeName: string;
  subheading: string;
  image: string;
}

const PrizeCard: React.FC<PrizeCardProps> = ({
  image,
  place,
  prizeName,
  subheading,
}) => {
  const placeTh =
    place === 1
      ? "st"
      : place === 2
      ? "nd"
      : place === 3
      ? "rd"
      : place === 4
      ? "th"
      : undefined;

  return (
    <div
      className={`${
        !placeTh && "hidden md:block"
      } cursor-pointer bg-accent-secondaryLight text-accent-secondaryDark hover:bg-accent-main hover:text-light-main transition-all w-full md:w-[48%] lg:w-[19.4rem] md:h-[21rem] rounded-xl flex flex-col gap-5 shadow-xl bg-opacity-[70%] select-none p-7 md:p-10`}
    >
      {placeTh ? (
        <div className={`flex gap-2 md:gap-0 md:flex-col md:h-[45%]`}>
          <div className="flex">
            <h1
              className={`text-[2.5rem] md:text-[5rem] leading-none font-semibold`}
            >
              {place.toString()}
            </h1>
            <span className={`text-[1rem] md:text-[2rem] font-medium -mt-3`}>
              {placeTh}
            </span>
          </div>
          <span className="font-medium text-[1.2rem] tracking-widest">
            PLACE
          </span>
        </div>
      ) : (
        <h1 className={`text-[3rem] leading-none font-bold h-[45%]`}>
          {place === 5 ? "RUNNER UP" : "ALL HACKERS"}
        </h1>
      )}

      <div className="flex flex-col gap-3 mt-[1rem]">
        <h2 className={`font-semibold text-[1.7rem] leading-[1.2]`}>
          {prizeName}
        </h2>
        <span className={`text-[0.7rem] font-regular tracking-wide`}>
          {subheading}
        </span>
      </div>
    </div>
  );
};

interface PrizeCardProps2 {
  place: 1 | 2 | 3;
  prizeName: string;
  subheading: string;
  image: string;
}

const PrizeCard2: React.FC<PrizeCardProps2> = ({
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
          : "bg-accent-secondaryLight text-accent-main lg:w-[17rem] lg:h-[22rem]"
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
          className={`text-[0.7rem] font-thin text-center tracking-wide w-[80%] mx-auto`}
        >
          {subheading}
        </span>
      </div>
    </div>
  );
};
