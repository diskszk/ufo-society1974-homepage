import { rest } from "msw";
import { WEB_API_BASE_URL } from "../constants";
import {
  createMockAlbum,
  createMockSong,
  mockAlbumInfo,
  mockAlbums,
  mockSongs,
} from "./mockData";

export const handlers = [
  rest.get(`${WEB_API_BASE_URL}/albums`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        albums: mockAlbums,
      })
    );
  }),

  rest.get(`${WEB_API_BASE_URL}/albums/:id`, (req, res, ctx) => {
    const id = req.params.id as string;

    // 404の処理 エラー時のレスポンスが不明

    const mockAlbum = createMockAlbum(id);

    return res(
      ctx.status(200),
      ctx.json({
        albums: [mockAlbum],
        info: mockAlbumInfo,
      })
    );
  }),

  // 存在しないAPI
  rest.get(`${WEB_API_BASE_URL}/albums/:albumId/songs`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        songs: mockSongs,
      })
    );
  }),

  rest.get(
    `${WEB_API_BASE_URL}/albums/:albumId/songs/:songId`,
    (req, res, ctx) => {
      const songId = req.params.songId as string;

      const song = createMockSong(songId);
      return res(
        ctx.status(200),
        ctx.json({
          songs: [song],
        })
      );
    }
  ),
];
