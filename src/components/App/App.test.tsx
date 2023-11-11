import { screen } from "@testing-library/react";
import customRender from "../../utils/test/customRender";
import App from "./App";

describe("Given the component App", () => {
  describe("When App it is render with url location as /", () => {
    test("then it should show HomePage", () => {
      customRender(<App />, { isMemoryRouter: true }, { initialPath: "/" });

      const headingElement = screen.getByRole("heading", { name: "All users" });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
