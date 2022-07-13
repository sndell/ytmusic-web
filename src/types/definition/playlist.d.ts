export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Author {
  name: string;
  id: string;
}

export interface Artist {
  name: string;
  id: string;
}

export interface Album {
  name: string;
  id: string;
}

export interface FeedbackTokens {
  add: string;
  remove: string;
}

export interface Track {
  videoId: string;
  title: string;
  artists: Artist[];
  album: Album;
  likeStatus: string;
  thumbnails: Thumbnail[];
  isAvailable: boolean;
  isExplicit: boolean;
  duration: string;
  duration_seconds: number;
  setVideoId: string;
  feedbackTokens: FeedbackTokens;
}

export interface Color {
  r: number;
  g: number;
  b: number;
}

export interface IPlaylist {
  id: string;
  privacy: string;
  title: string;
  thumbnails: Thumbnail[];
  description: string;
  author: Author;
  duration: string;
  trackCount: number;
  suggestions_token: strin | null;
  tracks: Track[];
  duration_seconds: number;
  color: Color;
}
