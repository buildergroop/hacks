import React from "react";

interface OpeningCardProps {
  type: "graphic" | "informational";

  // if type is graphic
  graphic?: string;

  // if type is informational
  subheading?: string;
  content?: string;
  icon?: JSX.Element;
}

export const OpeningCard: React.FC<OpeningCardProps> = ({
  type,
  graphic,
  subheading,
  content,
  icon,
}) => {
  return (
    <div
      className={`
      bg-light-main backdropFilter h-[33.3%] w-full select-none
      ${type === "informational" ? "bg-opacity-25" : "bg-opacity-10"}
    `}
    >
      {type === "graphic" ? (
        <div className="relative h-full">
          <img src={graphic} alt="character" className="absolute bottom-0" />
        </div>
      ) : (
        <div className="flex flex-col justify-between p-6 h-full">
          <div className="">{icon}</div>
          <div className="flex flex-col">
            <h1 className="font-semibold text-[3rem] tracking-wide leading-[3rem]">
              {content}
            </h1>
            <h3 className="font-regular text-[1.4rem]">{subheading}</h3>
          </div>
        </div>
      )}
    </div>
  );
};
