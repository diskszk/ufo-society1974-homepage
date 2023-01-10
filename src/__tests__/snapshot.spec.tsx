import { render, cleanup, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { AlbumListPage } from "../pages";
import { store } from "../store/store";

afterEach(cleanup);

describe("Snapshot Testing", () => {
  test("AlbumListPage", async () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MemoryRouter>
          <AlbumListPage />
        </MemoryRouter>
      </Provider>
    );

    // fetchを待つ
    await screen.findAllByTestId("loaded");

    expect(asFragment()).toMatchSnapshot();
  });
});
