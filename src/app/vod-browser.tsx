import VODCarousel from "./components/vod-carousel";
export interface Streamer {
  name: string;
  customColor?: string;
  id: string;
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
