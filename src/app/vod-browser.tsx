"use client";

import { useState, useEffect } from "react";
import { Card } from "./components/core/styled/card";
import Image from "next/image";

interface VOD {
  show_id: number;
  title: string;
  time: string;
  video_list: any;
  date: string;
}

const THUMBNAIL_WIDTH = 295;

const getVODUrl = (hashId: string) => `https://v.douyu.com/show/${hashId}`;

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

  return `${dayDifference} day${dayDifference !== 1 ? "s" : ""} ago`;
};

const VODBrowser = ({ data }: { data: any }) => {
  console.log("CLIENT RENDER");

  if (!data) return <>Loading...</>;
  return (
    <>
      {data.map((streamer) => (
        <Card
          title={streamer.name}
          titleColor={streamer.customColor}
          key={streamer.name}
        >
          <section className="flex gap-x-5 w-max">
            {streamer.list.map(({ show_id, title, date, video_list }: VOD) => (
              <div key={show_id}>
                <div className="relative">
                  <a
                    href={getVODUrl(video_list[0].hash_id)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      alt={title}
                      src={video_list[0].video_pic}
                      width={THUMBNAIL_WIDTH}
                      height={THUMBNAIL_WIDTH * (9 / 16)}
                      className="rounded-md hover:border-2 hover:border-[#9147ff] shadow-lg"
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
                <p
                  className={`break-word max-w-[${THUMBNAIL_WIDTH}px] text-sm`}
                >
                  {title}
                </p>
              </div>
            ))}
          </section>
        </Card>
      ))}
    </>
  );
};

export default VODBrowser;
