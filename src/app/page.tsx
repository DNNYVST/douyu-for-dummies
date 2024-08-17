import { Translator } from "google-translate-api-x";
import VODBrowser from "./vod-browser";
import PageHeader from "./page-header";
import Discord from "./components/icons/discord";

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
    color: CLASS_COLORS["Demon Hunter"],
  },
  {
    name: "Rare",
    id: "8PAbVPy9lZAO",
    color: CLASS_COLORS["Demon Hunter"],
  },
  {
    name: "Semage",
    id: "aBADDZYpnAXm",
    color: CLASS_COLORS["Mage"],
  },
  {
    name: "Xybb",
    id: "LlOdEon1b7nR",
  },
  {
    name: "Yeluo",
    id: "aKPA3GEKZAGD",
    color: CLASS_COLORS["Rogue"],
  },
  {
    name: "QingXin",
    id: "ky6AZxrBOwKW",
    color: CLASS_COLORS["Mage"],
  },
];

const translator = new Translator({
  from: "zh-CN",
  to: "en",
  forceBatch: false,
});

const Page = async () => {
  let data = [];
  for (const stream of STREAMS) {
    console.log("loading data");
    const response = await fetch(
      `https://v.douyu.com/wgapi/vod/center/authorShowVideoList?${1}=1&limit=${10}&up_id=${
        stream.id
      }`
    );
    const html = await response.text();
    let list = JSON.parse(html).data.list;
    // translate list titles
    for (let item of list) {
      const title = await translator.translate(item.title);
      const dateParts = item.time.split(" ")[0].split("-");
      item.title = title.text;
      item.date = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;
    }
    data.push({ name: stream.name, customColor: stream.color, list: list });
  }
  // sort by most recent
  data.sort((a, b) => new Date(b.list[0].date) - new Date(a.list[0].date));

  console.log("SERVER RENDER");

  return (
    <main className="flex flex-col mx-[10%] mt-[2%] mb-[5%] gap-y-5">
      <PageHeader />
      <VODBrowser data={data} />
    </main>
  );
};

export default Page;
