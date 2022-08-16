import clsx from "clsx";
import React from "react";

enum CardColor {
  "blue",
  "purple",
  "pink",
}

export const InfoCard: React.FC<{
  color: keyof typeof CardColor;
  variant: "top" | "bottom";
  heading: any;
  subheading: string;
  description: string;
}> = ({ color, variant, heading, subheading, description }) => {
  return (
    <div className="group select-none">
      <div
        className={clsx(
          "h-[13rem] w-[25rem] border transition-all",
          "hidden lg:block",
          [
            color === "blue" && "border-blue-stroke",
            color === "purple" && "border-purple-stroke",
            color === "pink" && "border-pink-stroke",
          ],
          [
            variant === "bottom" && [
              "-mb-[calc(13rem+1.4rem)] ml-[1.4rem]",
              "group-hover:-mb-[13rem] group-hover:ml-0",
            ],
            variant === "top" && [
              "-mb-[calc(13rem-1.4rem)] -ml-[1.4rem]",
              "group-hover:-mb-[13rem] group-hover:ml-0",
            ],
          ]
        )}
      ></div>

      <div
        className={clsx(
          "h-[13rem] w-full px-[1.5rem] pt-[1.3rem] pb-[2rem] md:w-[25rem]",
          "bg-opacity-[30%] backdrop-blur-sm",
          "flex flex-col justify-between",
          [
            color === "blue" && "bg-blue-main",
            color === "purple" && "bg-purple-main",
            color === "pink" && "bg-pink-main",
          ]
        )}
      >
        <div>
          <h1 className="text-[2.5rem] font-extrabold">{heading}</h1>
          <h3
            className={clsx("text-[1.2rem] font-bold uppercase", [
              color === "blue" && "text-blue-text",
              color === "purple" && "text-purple-text",
              color === "pink" && "text-pink-text",
            ])}
          >
            {subheading}
          </h3>
        </div>

        <p className="text-description">{description}</p>
      </div>
    </div>
  );
};
