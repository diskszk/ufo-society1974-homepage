import * as React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

const Test: React.FC = () => {
  return <div>this is test</div>;
};

describe("Test.tsx", () => {
  test("Testコンポーネントが描画される", () => {
    render(<Test />);
    expect(screen.getByText(/this is test/));
  });
});
