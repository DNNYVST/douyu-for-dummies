import VODBrowser from "./components/vod-browser/vod-browser";
import PageHeader from "./page-header";

const CLASS_COLORS = {
  "Death Knight": "#C41E3A",
  "Demon Hunter": "#A330C9",
  Druid: "#FF7C0A",
  Evoker: "#33937F",
  Hunter: "#AAD372",
  Mage: "#3FC7EB",
  Monk: "#00FF98",
  Paladin: "#F48CBA",
  Priest: "#FFFFFF",
  Rogue: "#FFF468",
  Shaman: "#0070DD",
  Warlock: "#8788EE",
  Warrior: "#C69B6D",
};

const STREAMS = [
  {
    name: "Anuo",
    id: "OVAO4QQbm7Qk",
    roomId: 135213,
    color: CLASS_COLORS["Demon Hunter"],
  },
  {
    name: "Yeluo",
    id: "aKPA3GEKZAGD",
    roomId: 62081,
    color: CLASS_COLORS["Rogue"],
  },
  {
    name: "Semage",
    id: "aBADDZYpnAXm",
    roomId: 2805008,
    color: CLASS_COLORS["Mage"],
  },
  {
    name: "Xybb",
    roomId: 11942,
    id: "LlOdEon1b7nR",
  },
  {
    name: "Rare",
    id: "8PAbVPy9lZAO",
    roomId: 5421846,
    color: CLASS_COLORS["Demon Hunter"],
  },
  {
    name: "QingXin",
    id: "ky6AZxrBOwKW",
    roomId: 5905138,
    color: CLASS_COLORS["Mage"],
  },
];

const Page = () => {
  return (
    <main className="flex flex-col mx-[10%] pt-[2%] pb-[5%] gap-y-5">
      <PageHeader />
      <VODBrowser data={STREAMS} />
    </main>
  );
};

export default Page;
