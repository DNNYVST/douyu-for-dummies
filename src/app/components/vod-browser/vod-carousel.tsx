import { Streamer } from "./interfaces";
import { Translator } from "google-translate-api-x";
import ScrollableVODSection from "./scrollable-vod-section";

const translator = new Translator({
  from: "zh-CN",
  to: "en",
  forceBatch: false,
});

const VODCarousel = async (streamer: Streamer) => {
  let data: any = [];
  const response = await fetch(
    `https://v.douyu.com/wgapi/vod/center/authorShowVideoList?${1}=1&limit=${10}&up_id=${
      streamer.id
    }`,
    { cache: "no-store" }
  );
  const html = await response.text();
  let list = JSON.parse(html).data.list;
  // translate list titles
  for (let item of list) {
    //const title: any = await translator.translate(item.title);
    const dateParts = item.time.split(" ")[0].split("-");
    //item.title = title.text;
    item.date = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;
  }
  data = list;
  return <ScrollableVODSection {...streamer} list={data} />;
};

export default VODCarousel;
