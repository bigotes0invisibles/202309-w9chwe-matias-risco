import { screen } from "@testing-library/react";
import customRender from "../../utils/test/customRender";
import HomePage from "./HomePage";

describe("Given the component HomePage", () => {
  describe("When HomePage it is render", () => {
    test("the user should see the heading of HomePage is All users", () => {
      customRender(<HomePage />, { isProvider: true });

      const headingElement = screen.getByRole("heading", { name: "All users" });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
