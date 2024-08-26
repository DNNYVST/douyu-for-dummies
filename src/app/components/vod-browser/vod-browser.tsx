import { Suspense } from "react";
import { Streamer } from "./interfaces";
import VODCarousel from "./vod-carousel";
import ScrollableVODSection from "./scrollable-vod-section";

const getFallbackData = (name: string) =>
  Array(4)
    .fill(0)
    .map((_, index) => ({
      show_id: index,
      title: `${name}placeholder${index}`,
      time: `${name}placeholder${index}`,
      video_list: [{}],
      date: `${name}placeholder${index}`,
    }));

const VODBrowser = ({ data }: { data: Streamer[] }) => {
  return (
    <>
      {data.map((streamer: Streamer) => (
        <Suspense
          key={streamer.id}
          fallback={
            <ScrollableVODSection
              {...streamer}
              list={getFallbackData(streamer.name)}
              showPlaceholders
            />
          }
        >
          <VODCarousel {...streamer} />
        </Suspense>
      ))}
    </>
  );
};

export default VODBrowser;
