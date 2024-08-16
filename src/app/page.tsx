// import { Main, Container } from "./page.styled";
import { Translator } from "google-translate-api-x";
import { Card } from "./components/core/styled/card";
import { Button } from "./components/core/styled/button";

const STREAMS = [
  {
    name: "Anuo",
    id: "OVAO4QQbm7Qk",
  },
  {
    name: "Rare",
    id: "8PAbVPy9lZAO",
  },
  {
    name: "Semage",
    id: "aBADDZYpnAXm",
  },
  {
    name: "Xybb",
    id: "LlOdEon1b7nR",
  },
  {
    name: "Yeluo",
    id: "aKPA3GEKZAGD",
  },
  {
    name: "QingXin",
    id: "ky6AZxrBOwKW",
  },
];

const getLiveReplayUrl = (authorId: number) =>
  `https://v.douyu.com/author/${authorId}?type=liveReplay`;

const getShowUrl = (hashId: string) => `https://v.douyu.com/show/${hashId}`;

const getFormattedVideoDurationString = (duration: string) => {
  const split = duration.split(":");
  const minutes: number = parseInt(split[0], 10);
  const seconds = split[1];
  const hours: string = Math.floor(minutes / 60).toString();
  let remainder: string = (minutes % 60).toString();
  if (remainder === "0") {
    remainder = "00";
  }
  return `${hours}:${remainder}:${seconds}`;
};

const getDateDifference = (date: string) => {
  let vodDate = new Date(date);
  let now = new Date(Date.now());

  let timeDifference = now.getTime() - vodDate.getTime();
  let dayDifference = Math.round(timeDifference / (1000 * 3600 * 24));

  // console.log(
  //   "Total number of days between dates:\n" +
  //     vodDate.toDateString() +
  //     " and " +
  //     now.toDateString() +
  //     " is: " +
  //     dayDifference +
  //     " days"
  // );
  return `${dayDifference} day${dayDifference !== 1 ? "s" : ""} ago`;
};

interface VOD {
  show_id: number;
  title: string;
  time: string;
  video_list: any;
  date: string;
}

const translator = new Translator({
  from: "zh-CN",
  to: "en",
  forceBatch: false,
});

const Page = async () => {
  let data = [];
  for (const stream of STREAMS) {
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
    data.push({ name: stream.name, list: list });
  }

  return (
    <main className="flex flex-col mx-[10%] my-[5%] gap-y-5">
      <p className="text-center">douyu for dummies</p>
      {data.map((streamer) => (
        <Card title={streamer.name} key={streamer.name}>
          <section className="flex gap-x-5 w-max">
            {streamer.list.map(({ show_id, title, date, video_list }: VOD) => (
              <div key={show_id}>
                <div className="relative">
                  <a
                    href={getShowUrl(video_list[0].hash_id)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-[20rem] rounded-md hover:border-2 hover:border-[#9147ff]"
                      src={video_list[0].video_pic}
                    />
                  </a>
                  <small className="absolute top-0 left-0 m-4 bg-black bg-opacity-60 px-[0.4rem] rounded-sm">
                    {getFormattedVideoDurationString(
                      video_list[0].video_str_duration
                    )}
                  </small>
                  <small className="absolute bottom-0 right-0 m-4 bg-black bg-opacity-60 px-[0.4rem] rounded-sm">
                    {getDateDifference(date)}
                  </small>
                </div>
                <p className="break-word max-w-[20rem]">{title}</p>
              </div>
            ))}
          </section>
        </Card>
      ))}
    </main>
  );
};

export default Page;
