import React from "react";

export const PrizesSection = () => {
  return (
    <div className="grid place-items-center dottedBackgroundDark text-light-main">
      <div className="flex flex-col items-center gap-[3rem] p-[4rem] mx-auto lg:w-[70rem] 2xl:w-[80rem] w-full">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-[3rem] text-center">Prizes</h1>
          <p className="text-[1rem] text-center">
            These are some of the prizes you can get by winning Builderhacks
            Season One!
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <PrizeCard
            place={1}
            prizeName='2 × 13" M1 Macbook Air'
            subheading='14" M1 MacBook Pro 2021 (with similar specs) if you are solo'
            image="/PrizePhotos/first.png"
          />
          <PrizeCard
            place={2}
            prizeName="Apple Watch (Series 7)"
            subheading="+ AirPods (3rd Gen)"
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
            subheading="Get the classic version of Discord Nitro, free for a whole year."
            image="/PrizePhotos/first.png"
          />
          <PrizeCard
            place={5}
            prizeName="Server Role"
            subheading="Get a special role in the Buildergroop Discord for being a Runner Up!"
            image="/PrizePhotos/second.png"
          />
          <PrizeCard
            place={6}
            prizeName="TAS Platform"
            subheading="All participants get a year of the LambdaTest TAS Platform at no extra cost."
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
        <h1 className={`text-[3rem] leading-none font-bold h-[45%] mb-7`}>
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
