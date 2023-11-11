import { screen } from "@testing-library/react";
import customRender from "../../utils/test/customRender";
import UserCard from "./UserCard";
import mockData from "../../mocks/mockData";

describe("Given the component UserCard", () => {
  describe("When UserCard it is render with the information of Manolo", () => {
    test("the user should see the heading of Manolo Comite", () => {
      const ManoloInfo = mockData[0];
      const headingName = `${ManoloInfo.name} ${ManoloInfo.lastName}`;
      customRender(<UserCard user={ManoloInfo} />);

      const headingElement = screen.getByRole("heading", {
        name: headingName,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
