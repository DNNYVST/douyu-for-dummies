const getLiveReplayUrl = (authorId: number) =>
  `https://v.douyu.com/author/${authorId}?type=liveReplay`;

export const getAuthorShowVideoList = async (
  authorId: string,
  page: number = 1,
  limit: number = 3
) => {
  const response = await fetch(
    `https://v.douyu.com/wgapi/vod/center/authorShowVideoList?page=${page}&limit=${limit}&up_id=${authorId}`
  );
  const html = await response.text();
  console.log('loaded');
  return JSON.parse(html).data.list;
};
