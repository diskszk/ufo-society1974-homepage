export type File = {
  filename: string;
  path: string;
};

export type Album = {
  description: string;
  imageFile: File;
  id: string; // random
  publishedDate: string; // YYYY-MM-DD
  songs?: Song[];
  title: string;
  publishPlatform?: PublishPlatform;
};

export type Song = {
  id: string;
  lyric: string;
  songFile: File;
  story: string;
  title: string;
  wordsRights: string;
  musicRights: string;
};

export type SongSummary = Pick<Song, "id" | "title" | "story">;

export type AlbumInfo = {
  albumId: string;
  songSummaries: SongSummary[];
};

export type PublishPlatform = {
  AppleMusic: string;
  Spotify: string;
  iTunes: string;
  Bandcamp: string;
};

// redux
export type RootStore = {
  loadingStatus: LoadingStatus;
  modalStatus: ModalStatus;
};
export type LoadingStatus = {
  isLoading: boolean;
  error: {
    isError: boolean;
    message: string;
  };
};
export type ModalStatus = {
  isOpen: boolean;
  modalType: "LYRIC_NOTE" | "ERROR" | "LOADING" | "";
  errorMessage: string;
  albumId: string;
  songId: string;
};
