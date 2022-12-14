import { Album, Song } from "../types";

export const mockAlbums: Album[] = [
  {
    id: "album-id-01",
    description: "description-01",
    imageFile: {
      path: "",
      filename: "",
    },
    publishedDate: "1995-02-03",
    title: "テストアルバムタイトル01",
  },
  {
    id: "album-id-02",
    description: "description-02",
    imageFile: {
      path: "",
      filename: "",
    },
    publishedDate: "2000-12-23",
    title: "テストアルバムタイトル02",
  },
];

export const createMockAlbum = (id: string): Album => {
  return {
    id,
    description: `description-${id}`,
    imageFile: {
      path: "",
      filename: "",
    },
    publishedDate: "1995-02-03",
    title: `テストアルバムタイトル${id}`,
  };
};

const lyric = {
  kite: "",
};

export const mockSongs: Song[] = [
  {
    id: "song-id-01",
    lyric: lyric.kite,
    songFile: {
      path: "",
      filename: "",
    },
    story: "song-story-01",
    title: "ソングタイトル01",
    wordsRights: "John Lennon",
    musicRights: "Paul McCartney",
  },
  {
    id: "song-id-02",
    lyric: lyric.kite,
    songFile: {
      path: "",
      filename: "",
    },
    story: "song-story-02",
    title: "ソングタイトル02",
    wordsRights: "John Lennon",
    musicRights: "Paul McCartney",
  },
  {
    id: "song-id-03",
    lyric: lyric.kite,
    songFile: {
      path: "",
      filename: "",
    },
    story: "song-story-03",
    title: "ソングタイトル03",
    wordsRights: "John Lennon",
    musicRights: "Paul McCartney",
  },
];

export const mockAlbumInfo = {
  albumId: "album-id-01",
  songSummaries: mockSongs.map((song) => {
    return {
      id: song.id,
      title: song.title,
      story: song.story,
    };
  }),
};
