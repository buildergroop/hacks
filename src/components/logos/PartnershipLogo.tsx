import { buildergroopURL, hopURL } from "@/constant";
import React from "react";
import UnstyledLink from "../links/UnstyledLink";

export const PartnershipLogo = () => {
  return (
    <div className="flex select-none items-center gap-3">
      <UnstyledLink href={buildergroopURL}>
        <img
          src="/svg/Buildergroop.svg"
          alt=""
          className="h-[2.5rem] w-[2.5rem]"
        />
      </UnstyledLink>
      <span className="text-[1.5rem] font-bold">x</span>
      <UnstyledLink href={hopURL}>
        <img src="/svg/Hop.svg" alt="" className="h-[2.5rem] w-[2.5rem]" />
      </UnstyledLink>
    </div>
  );
};
