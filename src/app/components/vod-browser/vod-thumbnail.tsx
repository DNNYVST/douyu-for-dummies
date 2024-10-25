"use client";

import { memo } from "react";
import { VOD } from "./interfaces";
import Image from "next/image";

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

  return dayDifference === 0
    ? "today"
    : `${dayDifference} day${dayDifference !== 1 ? "s" : ""} ago`;
};

const VODThumbnail = memo(({ show_id, title, date, video_list }: VOD) => {
  return (
    <div className="select-none snap-end">
      <div className="relative h-[166px]">
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
            className="rounded-md border-2 border-[#00000000] hover:border-[#9147ff]"
          />
        </a>
        <small className="absolute top-0 left-0 m-4 bg-black bg-opacity-60 px-[0.4rem] rounded-sm pointer-events-none !text-[#efeff1]">
          {getFormattedVideoDurationString(video_list[0].video_str_duration)}
        </small>
        <small className="absolute bottom-0 right-0 m-4 bg-black bg-opacity-60 px-[0.4rem] rounded-sm pointer-events-none !text-[#efeff1]">
          {getDateDifference(date)}
        </small>
      </div>
      <p
        className="break-word text-sm text-text-primary"
        style={{ maxWidth: `${THUMBNAIL_WIDTH}px` }}
      >
        {title}
      </p>
    </div>
  );
});

VODThumbnail.displayName = "VODThumbnail";

export default VODThumbnail;
