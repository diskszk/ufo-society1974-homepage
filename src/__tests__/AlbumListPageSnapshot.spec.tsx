import { cleanup, screen } from "@testing-library/react";
import { AlbumListPage } from "../pages";
import { customRender } from "./test-utils";

afterEach(cleanup);

describe("Snapshot Testing", () => {
  test("AlbumListPage", async () => {
    const { asFragment } = customRender(<AlbumListPage />);

    // fetchを待つ
    await screen.findAllByTestId("loaded");

    expect(asFragment()).toMatchSnapshot();
  });
});
