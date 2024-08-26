import PageHeader from "./page-header";
import VODBrowser from "./vod-browser";
import { STREAMS } from "./page";

export default function Loading() {
  const data = STREAMS.map((stream) => ({
    ...stream,
    name: "Loading...",
    color: "#efeff1",
    list: Array(4)
      .fill(0)
      .map((_, index) => ({
        isPlaceholder: true,
        show_id: index,
        title: `${stream.name}placeholder${index}`,
        time: `${stream.name}placeholder${index}`,
        video_list: [],
        date: `${stream.name}placeholder${index}`,
      })),
  }));

  return (
    <main className="flex flex-col mx-[10%] mt-[2%] mb-[5%] gap-y-5">
      <PageHeader />
      <VODBrowser data={data} />
    </main>
  );
}
