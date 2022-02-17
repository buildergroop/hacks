import React from "react";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3 px-2">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <h1 className="font-black text-[1.5rem]">builderhacks</h1>
        <span className="bg-light-main rounded-full w-1 h-1 mt-1"></span>
        <h3 className="font-bold text-[0.8rem] mt-1">winter '21</h3>
      </div>
    </div>
  );
};
