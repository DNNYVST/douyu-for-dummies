import VODCarousel from "./components/vod-carousel";

export interface Streamer {
  name: string;
  color?: string;
  id: string;
  roomId: number;
  list: any[];
}

const VODBrowser = ({ data }: { data: Streamer[] }) => {
  if (!data) return <>Loading...</>;
  return (
    <>
      {data.map((streamer: Streamer) => (
        <VODCarousel key={streamer.id} {...streamer} />
      ))}
    </>
  );
};

export default VODBrowser;
