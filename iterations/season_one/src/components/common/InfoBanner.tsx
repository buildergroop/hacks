import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

export const InfoBanner: React.FC<{
  Icon: any;
}> = ({ children, Icon }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return isOpen ? (
    <div className="w-screen grid place-items-center p-3 bg-dark-main bg-opacity-[50%] relative">
      <div className="flex items-center gap-1">
        <Icon className="w-[1rem] h-[1rem]" />
        {children}
      </div>
      <FaTimes
        className="absolute w-[1rem] h-[1rem] right-[3rem] cursor-pointer"
        onClick={() => {
          setIsOpen((c) => !c);
        }}
      />
    </div>
  ) : (
    <></>
  );
};
