import React from "react";
import { BuilderhacksLogo } from "../common/Logo";
import { Countdown } from "./Countdown";

export const Navbar = () => {
  return (
    <div className="flex items-center md:justify-around lg:justify-between py-3 px-3 lg:px-10 select-none">
      <div className="hidden lg:block">
        <BuilderhacksLogo />
      </div>
      <Countdown />
    </div>
  );
};
