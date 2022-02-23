import React, { useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

interface FAQ {
  question: string;
  answer: any;
}

const faqs: FAQ[] = [
  {
    question: "What is BuilderHacks?",
    answer: "jehrbghjerbgetrjhbgrjhbgrejhergjhkeF",
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
        <div className="flex flex-col gap-5 w-[48%]">
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
      className="flex items-center justify-between p-5 rounded-xl bg-light-main w-full cursor-pointer"
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
    <div className="flex flex-col gap-2 p-5 rounded-xl bg-light-main w-full">
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
