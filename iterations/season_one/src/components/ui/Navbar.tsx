import React from "react";
import { Link } from "./Link";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3 px-2 select-none">
      <Logo />
      <NavLinks />
    </div>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <h1 className="font-extrabold text-[1.5rem] tracking-wider">
        builderhacks
      </h1>
      <span className="bg-light-main rounded-full w-1 h-1 mt-1"></span>
      <h3 className="font-bold text-[0.8rem] mt-1 tracking-wider">
        winter '21
      </h3>
    </div>
  );
};

const NavLinks = ({ activeLink = "" }) => {
  const links: {
    title: string;
    sectionId: string;
  }[] = [
    { title: "about", sectionId: "about_section" },
    { title: "prizes", sectionId: "prizes_section" },
    { title: "rules", sectionId: "rules_section" },
    { title: "faq", sectionId: "faq_section" },
    { title: "team", sectionId: "team_section" },
  ];

  return (
    <div className="flex items-center gap-5">
      {links.map((link) => {
        return <Link title={link.title} isActive={activeLink === link.title} />;
      })}
    </div>
  );
};
