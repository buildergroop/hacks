import React from "react";
import { Navbar } from "../parts/Navbar";
import { GiPartyPopper } from "react-icons/gi";
import { InfoBanner } from "../common/InfoBanner";
import { REGISTRATION_LINK } from "~/constants";
import { ButtonRow } from "../common/ButtonRow";

export const OpeningSection = () => {
  return (
    <div className="openingSectionBackground transition-all w-screen overflow-x-hidden flex flex-col justify-between select-none">
      <div className="hidden md:block">
        <InfoBanner Icon={GiPartyPopper}>
          Registrations Are Now Open! Click{" "}
          <a href={REGISTRATION_LINK} className="font-bold">
            Here
          </a>{" "}
          to Register.
        </InfoBanner>
      </div>
      <div className="flex flex-col justify-between px-[2rem] py-[1rem] w-full mb-[3rem]">
        <Navbar />
        <Content />
        <img
          src="/CodeEditor.svg"
          className="mx-auto hidden lg:block xl:w-[70rem] xl:h-[50rem] -mt-[2rem] xl:-mt-[4rem]"
          draggable="false"
        />
        <Sponsor />
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="w-full grid place-items-center mt-[4rem]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 md:text-center">
          <SponsorSm />

          <h1 className="font-bold text-[2.7rem] md:text-[4.2rem] lg:text-[4.5rem] xl:text-[4.9rem] 2xl:text-[5.3rem] leading-[1.3] tracking-[0.001em]">
            Members of Gen-Z, <br /> It's Time To Build.
          </h1>
          <p className="text-[1rem] font-light md:max-w-[42rem] mx-auto">
            Welcome to the winter edition of BuilderHacks 2021 in collaboration{" "}
            <a href="https://lambdatest.com">
              <span className="font-semibold">with LambdaTest</span>
            </a>
            . Win cool gadgets from our{" "}
            <span className="font-semibold">$5000 USD</span> prize pool, Meet
            hundreds of like-minded Gen-Z builders, and have the experience of a
            lifetime.
          </p>
        </div>
        <ButtonRow />
      </div>
    </div>
  );
};

const SponsorSm = () => {
  return (
    <div className="flex lg:hidden items-center gap-3 md:mx-auto">
      <h3 className="font-medium text-[1.4rem]">Powered By</h3>
      <a href="https://lambdatest.com">
        <img src="/LambdatestLogo.png" alt="" className="h-[1.8rem]" />
      </a>
    </div>
  );
};

const Sponsor = () => {
  return (
    <div className="hidden lg:flex flex-col items-center gap-4 lg:-mt-10 xl:-mt-16 mx-auto">
      <div className="flex items-center gap-3">
        <h3 className="font-medium text-[2rem]">Powered By</h3>
        <a href="https://lambdatest.com">
          <img src="/LambdatestLogo.png" alt="" className="h-[2.6rem]" />
        </a>
      </div>
      <p className="text-light-main text-center md:max-w-[40rem] mx-auto text-[1.2rem] font-thin">
        Perform Automated and Live Interactive Cross Browser Testing on 3000+
        Real Browsers and Operating Systems Online with LambdaTest.
      </p>
    </div>
  );
};

// const CardsGraphic = () => {
//   return (
//     <div className="hidden lg:flex lg:min-h-screen 2xl:min-h-[auto] w-[60%]">
//       <div className="flex flex-col h-full w-[50%]">
//         <OpeningCard type="graphic" graphic="/Character/Badrun.png" />
//         <OpeningCard
//           type="informational"
//           content="25th to 27th Feb"
//           icon={<BsCalendarFill className="h-[4rem] w-[4rem]" />}
//         />
//         <OpeningCard type="graphic" graphic="/Character/Marni.png" />
//       </div>
//       <div className="flex flex-col h-full w-[50%]">
//         <OpeningCard
//           type="informational"
//           subheading="of prizes"
//           content="$5000"
//           icon={<BsTrophyFill className="h-[4rem] w-[4rem]" />}
//         />
//         <OpeningCard type="graphic" graphic="/Character/Ikbal.png" />
//         <OpeningCard
//           type="informational"
//           subheading="registrations"
//           content="100+"
//           icon={<BsPeopleFill className="h-[4rem] w-[4rem]" />}
//         />
//       </div>
//     </div>
//   );
// };
