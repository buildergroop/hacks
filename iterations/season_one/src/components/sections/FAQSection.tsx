import React, { useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

interface FAQ {
  question: string;
  answer: any;
}

const faqs: FAQ[] = [
  {
    question: "Will there be a theme?",
    answer:
      "There will be but, it will be disclosed closer to the hackathon date to prevent people from starting their hack early.",
  },
  {
    question: "When is the hackathon?",
    answer:
      "It's during the weekend of February 25th, 2022 - February 27th, 2022. BuilderHacks starts at 9PM EST on the 25th and will go on for 36 hours.",
  },
  {
    question: "What happens if I win first place as a one-person team?",
    answer: `The normal prize for first place is two M1 Macbook Airs, however this assumes that your team has two individuals.

      Are you a one person team? We'll send over the latest 14" M1 Macbook Pro instead!
      `,
  },
  {
    question: "Is this hackathon beginner friendly?",
    answer: (
      <p>
        Absolutely! We'll be hosting workshops from time-to-time, as well as
        activity sessions so there's constant entertainment during the
        hackathon.
        <br />
        <br />
        We'd also like to mention that some highly experienced attendees for
        builderhacks season 1 (namely Ali, Scott, Benja, Fifty and more) have
        generously decided to forfeit their position on the leaderboard as well
        as any prizes in the event of their project winning to give other
        upcoming engineers a fair chance
      </p>
    ),
  },
];

export const FAQSection = () => {
  return (
    <div className="grid place-items-center text-dark-main bg-light-tertiary">
      <div className="flex justify-between p-[2rem] md:p-[4rem] mx-auto 2xl:w-[80rem]">
        <div className="flex flex-col gap-2 w-[46%]">
          <h1 className="font-bold text-[2rem]">FAQ's</h1>
          <p className="text-[1rem]">
            Listed are some of the answers to questions our participants ask us
            quite frequently. If you’re not able to resolve any query you may
            have feel free to ping any one of the admins in the Buildergroop
            Discord Server.
          </p>
        </div>
        <div className="flex flex-col gap-3 w-[48%]">
          {faqs.map((faq, index) => {
            return <FAQCard {...faq} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

const FAQCard: React.FC<FAQ> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div
      className="flex items-center justify-between p-5 rounded-xl bg-light-main w-full cursor-pointer transition-all"
      onClick={() => {
        setIsOpen((c) => !c);
      }}
      style={{
        boxShadow: "0px 6px 12px 0px #00000005",
      }}
    >
      <h1 className="font-semibold text-[1rem] select-none">{question}</h1>
      <BsFillCaretDownFill />
    </div>
  ) : (
    <div className="flex flex-col gap-2 p-5 rounded-xl bg-light-main w-full transition-all">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => {
          setIsOpen((c) => !c);
        }}
        style={{
          boxShadow: "0px 6px 12px 0px #00000005",
        }}
      >
        <h1 className="font-semibold text-[1rem] select-none">{question}</h1>
        <BsFillCaretUpFill />
      </div>
      <div className="mt-5">{answer}</div>
    </div>
  );
};
