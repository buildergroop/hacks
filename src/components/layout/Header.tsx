import * as React from "react";
import { BHWordmark } from "../logos/BHWordmark";
import { PartnershipLogo } from "../logos/PartnershipLogo";

export default function Header() {
  return (
    <header className="sticky top-0 my-[2rem] flex h-[4rem] w-screen items-center">
      <div className="container mx-auto flex h-full items-center justify-between rounded-full p-[2rem]">
        <div className="hidden md:block">
          <BHWordmark />
        </div>
        <PartnershipLogo />
      </div>
    </header>
  );
}
