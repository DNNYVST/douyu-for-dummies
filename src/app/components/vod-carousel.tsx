"use client";

import { useState, useCallback } from "react";
import { Card } from "./core/styled/card";
import { Button } from "./core/styled/button";
import { StyledLink } from "../page.styled";
import ChevronLeft from "./icons/chevron-left";
import ChevronRight from "./icons/chevron-right";
import VODThumbnail, { VOD } from "./vod-thumbnail";

export interface Streamer {
  name: string;
  customColor?: string;
  id: string;
  roomId: number;
  list: any[];
}

const getLiveReplayUrl = (authorId: string) =>
  `https://v.douyu.com/author/${authorId}?type=liveReplay`;

const getLiveRoomUrl = (roomId: number) => `https://douyu.com/${roomId}`;

const getScrollAmount = (element: HTMLDivElement) => element.scrollWidth / 4;

const VODCarousel = ({ name, customColor, id, roomId, list }: Streamer) => {
  const [showLeftButton, setShowLeftButton] = useState<boolean>(false);
  const [showRightButton, setShowRightButton] = useState<boolean>(true);
  const [contentNode, setContentNode] = useState<HTMLDivElement | null>(null);

  const contentRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      setContentNode(node);
      const handleScroll = () => {
        setShowLeftButton(node.scrollLeft > 0);
        setShowRightButton(
          node.scrollLeft + node.clientWidth < node.scrollWidth
        );
      };
      node.addEventListener("scroll", handleScroll);
      return () => node.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <Card
      title={name}
      button={
        <span className="flex ml-auto gap-x-4 !text-[#efeff1] opacity-60">
          <StyledLink
            href={getLiveReplayUrl(id)}
            target="_blank"
            rel="noopener noreferrer"
          >
            VODs
          </StyledLink>
          <StyledLink
            href={getLiveRoomUrl(roomId)}
            target="_blank"
            rel="noopener noreferrer"
            className="!decoration-[#ED4245]"
          >
            Live
          </StyledLink>
        </span>
      }
      titleColor={customColor}
      key={name}
      contentRef={contentRef}
    >
      <section className="flex gap-x-5 w-max">
        {list.map((vod: VOD) => (
          <VODThumbnail key={vod.show_id} {...vod} />
        ))}
      </section>
      {showLeftButton && contentNode && (
        <Button
          className="absolute top-[50%] left-0 !rounded-full !p-2 opacity-90"
          onClick={() =>
            contentNode?.scrollBy(-getScrollAmount(contentNode), 0)
          }
        >
          <ChevronLeft />
        </Button>
      )}
      {showRightButton && contentNode && (
        <Button
          className="absolute top-[50%] right-0 !rounded-full !p-2 opacity-90"
          onClick={() => contentNode?.scrollBy(getScrollAmount(contentNode), 0)}
        >
          <ChevronRight />
        </Button>
      )}
    </Card>
  );
};

export default VODCarousel;
