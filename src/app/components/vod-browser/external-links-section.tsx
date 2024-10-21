"use client";

import { StyledLink } from "../../page.styled";
import { useTheme } from "../../theme-provider";

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
  const {
    colorScheme: { textColor },
  } = useTheme();
  return (
    <span className="flex ml-auto gap-x-4">
      <StyledLink
        href={getLiveReplayUrl(authorId)}
        target="_blank"
        rel="noopener noreferrer"
        className={`opacity-80 hover:opacity-100 ${textColor}`}
      >
        VODs
      </StyledLink>
      <StyledLink
        href={getLiveRoomUrl(roomId)}
        target="_blank"
        rel="noopener noreferrer"
        className={`!decoration-[#ED4245] opacity-80 hover:opacity-100 ${textColor}`}
      >
        Live
      </StyledLink>
    </span>
  );
};

export default ExternalLinksSection;
