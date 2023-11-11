import { screen } from "@testing-library/react";
import customRender from "../../utils/test/customRender";
import Header from "./Header";

describe("Given the component Header", () => {
  describe("When Header it is render", () => {
    test("the user should see the name of the aplication Tuttyfly", () => {
      customRender(<Header />);

      const headingElement = screen.getByRole("heading", { name: "Tuttyfly" });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
