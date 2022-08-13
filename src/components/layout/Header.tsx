import * as React from "react";
import { BHWordmark } from "../logos/BHWordmark";
import { PartnershipLogo } from "../logos/PartnershipLogo";

export default function Header() {
  return (
    <header className="fixed flex w-full items-center justify-between p-[2.7rem]">
      <BHWordmark />
      <PartnershipLogo />
    </header>
  );
}
