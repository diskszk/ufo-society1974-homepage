import { render, cleanup, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { AlbumDetailPage } from "../pages";
import { store } from "../store/store";

afterEach(cleanup);

describe("Snapshot Testing", () => {
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
