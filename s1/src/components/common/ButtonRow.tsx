import React from "react";
import { FaCaretRight } from "react-icons/fa";
import { DISCORD_LINK, REGISTRATION_LINK } from "~/constants";
import { Button } from "./Button";
import { PlayButton } from "./PlayButton";

export const ButtonRow = () => {
    return (
        <div className="flex flex-col gap-2 md:gap-3 md:flex-row md:items-center md:mx-auto z-[999]">
          <Button
            width="w-[12rem]"
            color="light"
            rounded="xl"
            size="xl"
            className="hover:w-[13rem]"
          >
            <a
              href={REGISTRATION_LINK}
              className="text-dark-main text-[1.21rem] font-medium"
            >
              register now
            </a>
          </Button>
          <Button
            width="w-[14rem]"
            rounded="xl"
            size="xl"
            className="hover:w-[15rem] border border-light-main bg-opacity-0 hover:bg-opacity-0 hover:border-opacity-10"
          >
            <a
              href={DISCORD_LINK}
              className="text-light-main text-[1.21rem] font-medium flex items-center gap-1"
            >
              join community
<FaCaretRight />
            </a>
          </Button>
          <PlayButton />
        </div>
    )
}