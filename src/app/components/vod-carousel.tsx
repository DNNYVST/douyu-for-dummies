"use client";

import { useState, useEffect } from "react";
import { Card } from "./core/styled/card";
import { Button } from "./core/styled/button";
import ChevronLeft from "./icons/chevron-left";
import ChevronRight from "./icons/chevron-right";
import VODThumbnail, { VOD } from "./vod-thumbnail";

export interface Streamer {
  name: string;
  customColor?: string;
  id: string;
  list: any[];
}

const getScrollAmount = (element: HTMLElement) => element.scrollWidth / 4;

const VODCarousel = ({ name, customColor, id, list }: Streamer) => {
  const [showLeftButton, setShowLeftButton] = useState<boolean>(false);
  const [showRightButton, setShowRightButton] = useState<boolean>(true);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;
    const handleScroll = () => {
      setShowLeftButton(element.scrollLeft > 0);
      setShowRightButton(
        element.scrollLeft + element.clientWidth < element.scrollWidth
      );
    };
    element.addEventListener("scroll", handleScroll);
    return () => element.removeEventListener("scroll", handleScroll);
  }, [id]);

  const element = document.getElementById(id);

  return (
    <Card title={name} titleColor={customColor} key={name} contentId={id}>
      <section className="flex gap-x-5 w-max">
        {list.map((vod: VOD) => (
          <VODThumbnail key={vod.show_id} {...vod} />
        ))}
      </section>
      {showLeftButton && (
        <Button
          className="absolute top-[50%] left-0 !rounded-full !p-2 opacity-90"
          onClick={() => element?.scrollBy(-getScrollAmount(element), 0)}
        >
          <ChevronLeft />
        </Button>
      )}
      {showRightButton && (
        <Button
          className="absolute top-[50%] right-0 !rounded-full !p-2 opacity-90"
          onClick={() => element?.scrollBy(getScrollAmount(element), 0)}
        >
          <ChevronRight />
        </Button>
      )}
    </Card>
  );
};

export default VODCarousel;
