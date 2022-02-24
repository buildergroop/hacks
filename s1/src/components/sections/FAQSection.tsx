import React, { useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

interface FAQ {
  question: string;
  answer: any;
}

const faqs: FAQ[] = [
  {
    question: "What is a hackathon?",
    answer: (
      <p className="">
        A hackathon is where a group of (or one) developer(s) build an awesome
        piece of software revolving around a particular theme via specific
        programming languages and technologies.
        <br />
        <br />
        The purpose of a hackathon is to "hack together" something in a given
        time frame. It need not be a fully functional product, however, it
        should be able to demonstrate your idea well enough in the most simple
        possible manner.
      </p>
    ),
  },
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
    question: "Can I work in a team?",
    answer:
      "To ensure we can distribute awesome prizes for all the winners in a team, we are limiting team sizes to a maximum of 2 individuals.",
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
    <div className="grid place-items-center bg-light-main text-dark-main">
      <div className="flex flex-col gap-[3rem] p-[2rem] md:p-[4rem] mx-auto lg:w-[70rem] 2xl:w-[80rem]">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-[3rem]">FAQ's</h1>
          <p className="text-[1rem]">
            Listed are some of the answers to questions our participants ask us
            quite frequently. If you’re not able to resolve any query you may
            have feel free to ping any one of the admins in the{" "}
            <a href="https://discord.gg/builders" className="text-accent-main">
              Buildergroop Discord Server.
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full">
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
      className="flex items-center justify-between p-5 border-b-2 border-light-secondary w-full cursor-pointer"
      onClick={() => {
        setIsOpen((c) => !c);
      }}
    >
      <h1 className="font-semibold text-[1rem] select-none">{question}</h1>
      <BsFillCaretDownFill />
    </div>
  ) : (
    <div className="flex flex-col gap-2 w-full">
      <div
        className="flex items-center justify-between cursor-pointer p-5 border-b-2 border-accent-main text-accent-main"
        onClick={() => {
          setIsOpen((c) => !c);
        }}
      >
        <h1 className="font-semibold text-[1rem] select-none">{question}</h1>
        <BsFillCaretUpFill />
      </div>
      <div className="mt-5 pb-5 pt-2 px-5">{answer}</div>
    </div>
  );
};
