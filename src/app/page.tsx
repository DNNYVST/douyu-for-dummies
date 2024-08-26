import { Translator } from "google-translate-api-x";
import VODBrowser, { Streamer } from "./vod-browser";
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

export const STREAMS = [
  {
    name: "Anuo",
    id: "OVAO4QQbm7Qk",
    roomId: 135213,
    color: CLASS_COLORS["Demon Hunter"],
  },
  {
    name: "Rare",
    id: "8PAbVPy9lZAO",
    roomId: 5421846,
    color: CLASS_COLORS["Demon Hunter"],
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
    name: "Yeluo",
    id: "aKPA3GEKZAGD",
    roomId: 62081,
    color: CLASS_COLORS["Rogue"],
  },
  {
    name: "QingXin",
    id: "ky6AZxrBOwKW",
    roomId: 5905138,
    color: CLASS_COLORS["Mage"],
  },
];

const translator = new Translator({
  from: "zh-CN",
  to: "en",
  forceBatch: false,
});

const Page = async () => {
  let data: Streamer[] = [];
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
      const title: any = await translator.translate(item.title);
      const dateParts = item.time.split(" ")[0].split("-");
      item.title = title.text;
      item.date = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;
    }
    data.push({
      ...stream,
      list,
    });
  }
  // sort by most recent
  data.sort(
    (a, b) =>
      new Date(b.list[0].date).valueOf() - new Date(a.list[0].date).valueOf()
  );

  return (
    <main className="flex flex-col mx-[10%] mt-[2%] mb-[5%] gap-y-5">
      <PageHeader />
      <VODBrowser data={data} />
    </main>
  );
};

export default Page;
