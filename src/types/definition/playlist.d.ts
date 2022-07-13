export interface IThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface IAuthor {
  name: string;
  id: string;
}

export interface IArtist {
  name: string;
  id: string;
}

export interface IAlbum {
  name: string;
  id: string;
}

export interface IFeedbackTokens {
  add: string;
  remove: string;
}

export interface ITrack {
  videoId: string;
  title: string;
  artists: Artist[];
  album: IAlbum;
  dateAdded?: string
  likeStatus: string;
  thumbnails: IThumbnail[];
  isAvailable: boolean;
  isExplicit: boolean;
  duration: string;
  duration_seconds: number;
  setVideoId: string;
  feedbackTokens: IFeedbackTokens;
}

export interface IColor {
  r: number;
  g: number;
  b: number;
}

export interface IPlaylist {
  id: string;
  privacy: string;
  title: string;
  thumbnails: IThumbnail[];
  description: string;
  author: IAuthor;
  duration: string;
  trackCount: number;
  suggestions_token: strin | null;
  tracks: ITrack[];
  duration_seconds: number;
  color: IColor;
}
