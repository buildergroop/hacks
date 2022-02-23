import React from "react";
import { Button } from "../common/Button";
import { Navbar } from "../parts/Navbar";
import { BsFillPlayFill } from "react-icons/bs";

export const OpeningSection = () => {
  return (
    <div className="openingSectionBackground transition-all w-screen overflow-x-hidden p-[2rem] flex flex-col justify-between select-none">
      <Navbar />
      <Content />
      <img
        src="/CodeEditor.svg"
        className="mx-auto w-[70rem] h-[50rem] -mt-[4rem]"
        draggable="false"
      />
      <Sponsor />
    </div>
  );
};

const Content = () => {
  return (
    <div className="w-full grid place-items-center mt-[4rem]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="font-bold text-[3.5rem] md:text-[4.2rem] lg:text-[4.5rem] xl:text-[4.9rem] 2xl:text-[5.3rem] leading-[1.3] tracking-[0.001em]">
            Members of Gen-Z, <br /> It's Time To Build.
          </h1>
          <p className="text-[1.2rem] font-light md:max-w-[42rem] mx-auto">
            Welcome to the winter edition of BuilderHacks 2021 in collaboration{" "}
            <a href="https://lambdatest.com">
              <span className="font-semibold">with LambdaTest</span>
            </a>
            . Win Prizes upto <span className="font-semibold">$5000 USD</span>,
            Meet Hundreds of like-minded Gen-Z Builders, and have the experience
            of a lifetime.
          </p>
        </div>
        <div className="flex items-center mx-auto gap-3 z-[999]">
          <Button
            width="w-[13.2rem]"
            color="light"
            rounded="xl"
            size="xl"
            className="hover:w-[16rem] hover:h-[3.2rem]"
          >
            <h2 className="text-dark-main text-[1.21rem] font-medium">
              join hackathon
            </h2>
          </Button>
          <div className="h-[3rem] w-[3rem] bg-light-main rounded-full grid place-items-center cursor-pointer hover:bg-opacity-80 transition-all">
            <BsFillPlayFill className="text-dark-main h-[1.6rem] w-[1.6rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Sponsor = () => {
  return (
    <div className="flex flex-col items-center gap-4 -mt-16 mx-auto">
      <div className="flex items-center gap-3">
        <h3 className="font-medium text-[2rem]">Powered By</h3>
        <a href="https://lambdatest.com">
          <img src="/LambdatestLogo.png" alt="" className="h-[2.6rem]" />
        </a>
      </div>
      <p className="text-light-secondary text-center md:max-w-[40rem] mx-auto text-[1.2rem] font-medium">
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
