import React from "react";
import { BuilderhacksLogo } from "../common/Logo";
import { Countdown } from "./Countdown";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3 px-10 select-none">
      <BuilderhacksLogo />
      <Countdown days={20} hours={12} minutes={30} seconds={30} />
    </div>
  );
};

// const NavLinks = ({ activeLink = "" }) => {
//   const links: {
//     title: string;
//     sectionId: string;
//   }[] = [
//     { title: "about", sectionId: "about_section" },
//     { title: "prizes", sectionId: "prizes_section" },
//     { title: "rules", sectionId: "rules_section" },
//     { title: "faq", sectionId: "faq_section" },
//     { title: "team", sectionId: "team_section" },
//   ];

//   return (
//     <div className="hidden 2xl:flex items-center gap-5">
//       {links.map((link) => {
//         return <Link title={link.title} isActive={activeLink === link.title} />;
//       })}
//     </div>
//   );
// };
