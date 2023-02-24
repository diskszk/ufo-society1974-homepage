import { ALT_IMAGE_PATH } from "../constants";
import { Album, Song } from "../types";

// https://amachamusic.chagasi.com/ から拝借
import sampleMP3 from "./sample-mp3-data/natsuyasuminotanken.mp3";

export const mockAlbums: Album[] = [
  {
    id: "album-id-01",
    description: "description-01",
    imageFile: {
      path: ALT_IMAGE_PATH,
      filename: "no_image",
    },
    publishedDate: "1995-02-03",
    title: "テストアルバムタイトル01",
  },
  {
    id: "album-id-02",
    description: "description-02",
    imageFile: {
      path: ALT_IMAGE_PATH,
      filename: "no_image",
    },
    publishedDate: "2000-12-23",
    title: "テストアルバムタイトル02",
  },
];

const lyric = {
  kite: `ちゃちな指輪で 夢を見せるように
さみしい公園で描いた迷路

きみには愛が きみには風景が
ガラス瓶の中に ずっと
影を落としている

ビー玉あそびを
町が透けるまで
そうだ
きみは何か思うのに

音も無く
機体はきみの空を覆う
明滅に向かうように
空をのぼったら

着地しないはずの
目盛りだらけの月
きみの手で 白い手で
空をこじあけて`,
};

export const mockSongs: Song[] = [
  {
    id: "1",
    lyric: lyric.kite,
    songFile: {
      path: sampleMP3,
      filename: "natsuyasuminotanken.mp3",
    },
    story: "song-story-01",
    title: "ソングタイトル01",
    wordsRights: "XXX XXX",
    musicRights: "YYY YYY",
  },
  {
    id: "2",
    lyric: lyric.kite,
    songFile: {
      path: "",
      filename: "",
    },
    story: "song-story-02",
    title: "ソングタイトル02",
    wordsRights: "XXX XXX",
    musicRights: "YYY YYY",
  },
  {
    id: "3",
    lyric: lyric.kite,
    songFile: {
      path: "",
      filename: "",
    },
    story: "song-story-03",
    title: "ソングタイトル03",
    wordsRights: "XXX XXX",
    musicRights: "YYY YYY",
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
