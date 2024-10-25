"use client";

import { StyledLink } from "../../page.styled";

const getLiveReplayUrl = (authorId: string) =>
  `https://v.douyu.com/author/${authorId}?type=liveReplay`;

const getLiveRoomUrl = (roomId: number) => `https://douyu.com/${roomId}`;

const ExternalLinksSection = ({
  authorId,
  roomId,
}: {
  authorId: string;
  roomId: number;
}) => {
  return (
    <span className="flex ml-auto gap-x-4">
      <StyledLink
        href={getLiveReplayUrl(authorId)}
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-80 hover:opacity-100 text-text-primary"
      >
        VODs
      </StyledLink>
      <StyledLink
        href={getLiveRoomUrl(roomId)}
        target="_blank"
        rel="noopener noreferrer"
        className="!decoration-[#ED4245] opacity-80 hover:opacity-100 text-text-primary"
      >
        Live
      </StyledLink>
    </span>
  );
};

export default ExternalLinksSection;
