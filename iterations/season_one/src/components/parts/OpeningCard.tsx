import React from "react";

interface OpeningCardProps {
  type: "graphic" | "informational";

  // if type is graphic
  graphic?: string;

  // if type is informational
  subheading?: string;
  content?: string;
  icon?: React.Component;
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
  ${type === "informational" ? "bg-[#fafafa]" : "bg-[#010101]"}
  h-[33.3%] w-full`}
    >
      a
    </div>
  );
};
