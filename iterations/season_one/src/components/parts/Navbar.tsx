import React from "react";
import { BuilderhacksLogo } from "../common/Logo";
import { Countdown } from "./Countdown";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3 px-10 select-none">
      <BuilderhacksLogo />
      <Countdown />
    </div>
  );
};
