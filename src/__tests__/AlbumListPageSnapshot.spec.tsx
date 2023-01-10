import { render, cleanup, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { AlbumDetailPage, AlbumListPage } from "../pages";
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

  test("AlbumDetailPage", async () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MemoryRouter>
          <AlbumDetailPage />
        </MemoryRouter>
      </Provider>
    );
    // fetchを待つ
    await screen.findAllByTestId("loaded");

    expect(asFragment()).toMatchSnapshot();
  });
});
