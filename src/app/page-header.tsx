import Discord from "./components/icons/discord";

const PageHeader = () => (
  <span className="grid grid-cols-3 items-center justify-center">
    <p className="col-start-2 text-center">douyu for dummies</p>
    <span className="flex flex-col opacity-50 ml-auto">
      <span className="flex gap-x-2">
        <Discord />
        <small>smiler</small>
      </span>
      <span className="flex gap-x-2 items-center">
        <img src="/glitch_flat_purple.png" width="15px" height="15px" />
        <small>wind_tempos / fireemoji_</small>
      </span>
    </span>
  </span>
);

export default PageHeader;
