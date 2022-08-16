import React from "react";

export const SectionLayout: React.FC<
  React.HTMLAttributes<HTMLDivElement> & { autoSize?: boolean }
> = ({ className, autoSize, ...props }) => {
  return (
    <div
      {...props}
      className={`container h-full px-[2rem] md:mx-auto ${
        !autoSize && "min-h-screen w-screen"
      } py-[5rem] ${className}`}
    />
  );
};
