"use client";

import Discord from "./components/icons/discord";
import Image from "next/image";
import { useTheme } from "./theme-provider";

const PageHeader = () => {
  const { toggleTheme } = useTheme();
  return (
    <span className="grid grid-cols-3 items-center justify-center">
      <button onClick={toggleTheme}>toggle theme</button>
      <p className="col-start-2 text-center">douyu for dummies</p>
      <span className="flex flex-col opacity-40 ml-auto">
        <small>made by:</small>
        <span className="flex gap-x-2">
          <Discord />
          <small>smiler</small>
        </span>
        <span className="flex gap-x-2 items-center">
          <Image
            src="/glitch_flat_purple.png"
            alt="twitch logo"
            width={15}
            height={15}
            priority
            className="w-[15px] h-[15px]"
          />
          <small>wind_tempos fka fireemoji_</small>
        </span>
      </span>
    </span>
  );
};

export default PageHeader;
