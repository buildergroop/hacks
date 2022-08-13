import React from "react";

export const PartnershipLogo = () => {
  return (
    <div className="flex select-none items-center gap-3">
      <img
        src="/svg/Buildergroop.svg"
        alt=""
        className="h-[2.5rem] w-[2.5rem]"
      />
      <span className="text-[1.5rem] font-bold">x</span>
      <img src="/svg/Hop.svg" alt="" className="h-[2.5rem] w-[2.5rem]" />
    </div>
  );
};
