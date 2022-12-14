import { rest } from "msw";
import {
  createMockAlbum,
  mockAlbumInfo,
  mockAlbums,
  mockSongs,
} from "./mockData";

const BASE_URL = `${process.env.API_BASE_URL}/api`;

export const handlers = [
  rest.get(`${BASE_URL}/albums`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        albums: mockAlbums,
      })
    );
  }),

  rest.get(`${BASE_URL}/albums/:id`, (req, res, ctx) => {
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

  rest.get(`${BASE_URL}/albums/:albumId/songs/:songId`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        songs: mockSongs,
      })
    );
  }),
];
