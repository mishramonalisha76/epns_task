import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
  it("renders app div", () => {
    render(<App />);
    const appDiv = screen.getByTestId("app-element");
    expect(appDiv).toHaveClass("App");
  });
});
