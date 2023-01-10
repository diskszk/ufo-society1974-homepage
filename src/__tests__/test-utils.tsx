import { ReactElement, ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { MemoryRouter } from "react-router-dom";

const Wrapper: React.FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <Provider store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>
  );
};

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Wrapper, ...options });
