import { rest } from "msw";

export const handlers = [
  rest.get("http://sample.dev", (req, res, ctx) => {
    return res(
      ctx.json({
        title: "mock",
      })
    );
  }),
];
