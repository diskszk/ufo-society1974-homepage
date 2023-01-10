import { cleanup, screen } from "@testing-library/react";
import { AlbumDetailPage } from "../pages";
import { customRender } from "./test-utils";

afterEach(cleanup);

describe("Snapshot Testing", () => {
  test("AlbumDetailPage", async () => {
    const { asFragment } = customRender(<AlbumDetailPage />);

    // fetchを待つ
    await screen.findAllByTestId("loaded");

    expect(asFragment()).toMatchSnapshot();
  });
});
