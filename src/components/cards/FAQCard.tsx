import React, { useState } from "react";
import { ImMinus, ImPlus } from "react-icons/im";

export const FAQCard: React.FC<{
  num: number;
  heading: string;
  content: any;
}> = ({ num, heading, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCard = () => setIsOpen((c) => !c);

  return (
    <div className="space-y-2">
      <div
        className="flex w-full cursor-pointer items-center justify-between"
        onClick={toggleCard}
      >
        <div className="flex items-center gap-6">
          <div className="text-bold grid h-[2.5rem] w-[2.5rem] place-items-center rounded-full bg-gray text-[1.5rem] text-dark">
            {num.toString()}
          </div>
          <h2 className="text-[1.3rem] font-medium">{heading}</h2>
        </div>

        <div className="grid h-[2rem] w-[2rem] place-items-center rounded-full border border-gray text-gray">
          {!isOpen ? <ImPlus /> : <ImMinus />}
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } ml-[4.2rem] text-[1.1rem] text-description`}
      >
        {content}
      </div>
    </div>
  );
};
