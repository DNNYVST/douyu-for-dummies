"use client";

import { useState, useCallback, Fragment } from "react";
import { Streamer, VOD } from "./interfaces";
import { Card } from "../core/styled/card";
import ExternalLinksSection from "./external-links-section";
import { Button } from "../core/button";
import ChevronLeft from "../icons/chevron-left";
import ChevronRight from "../icons/chevron-right";
import VODThumbnail from "./vod-thumbnail";
import VODThumbnailPlaceholder from "./vod-thumbnail-placeholder";

const getScrollAmount = (element: HTMLDivElement) => element.scrollWidth / 4;

const ScrollableVODSection = ({
  name,
  color,
  id,
  roomId,
  list = [],
  showPlaceholders = false,
}: Streamer) => {
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
      button={<ExternalLinksSection authorId={id} roomId={roomId} />}
      titleColor={color}
      key={name}
      contentRef={contentRef}
    >
      <section className="flex gap-x-5 w-max">
        {list.map((vod: VOD) => (
          <Fragment key={vod.show_id}>
            {showPlaceholders ? (
              <VODThumbnailPlaceholder />
            ) : (
              <VODThumbnail {...vod} />
            )}
          </Fragment>
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

export default ScrollableVODSection;
