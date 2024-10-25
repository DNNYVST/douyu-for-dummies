import Discord from "./components/icons/discord";
import Image from "next/image";
import ThemeToggle from "./components/theme-toggle";
import { cookies } from "next/headers";

const PageHeader = () => (
  <span className="grid grid-cols-3 items-center justify-center text-text-primary">
    <ThemeToggle initialTheme={cookies().get("theme")?.value} />
    <p className="col-start-2 text-center text-text-primary">
      douyu for dummies
    </p>
    <span className="flex flex-col opacity-40 ml-auto">
      <small className="text-text-primary">made by:</small>
      <span className="flex gap-x-2">
        <Discord />
        <small className="text-text-primary">smiler</small>
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
        <small className="text-text-primary">wind_tempos fka fireemoji_</small>
      </span>
    </span>
    <small className="opacity-40 italic text-text-primary">
      coming soon: add your own streamers, mobile layout
    </small>
  </span>
);

export default PageHeader;
