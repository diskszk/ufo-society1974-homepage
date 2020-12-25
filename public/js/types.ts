export type File = {
  filename: string;
  path: string;
};

export type Album = {
  discription: string;
  imageFile: File;
  id: string; // random
  publish_date: string; // YYYY-MM-DD
  songs?: Song[];
  title: string;
  services?: Services;
};

export type Song = {
  id: string;
  lyric: string;
  songFile: File;
  story: string;
  title: string;
  wordsRights: string;
  musicRights: string;
  created_at?: firebase.firestore.Timestamp;
};

export type Services = {
  AppleMusic: string;
  Spotify: string;
  iTunes: string;
  Bandcamp: string;
};

// redux
export type RootStore = {
  loadingStatus: LoadingStatus;
};
export type LoadingStatus = {
  isLoading: boolean;
  error: {
    isError: boolean;
    message: string;
  };
};
