export interface Streamer {
  name: string;
  color?: string;
  id: string;
  roomId: number;
  list?: any[];
  showPlaceholders?: boolean;
}

export interface VOD {
  show_id: number;
  title: string;
  time: string;
  video_list: any;
  date: string;
}
