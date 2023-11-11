import { screen } from "@testing-library/react";
import customRender from "../../utils/test/customRender";
import mockData from "../../mocks/mockData";
import UserList from "./UserList";

describe("Given the component UserList", () => {
  describe("When UserList it is render with the information of Manolo,Alpharius", () => {
    test("the user should see the heading of Manolo Comite and Alpharius NotAlpharius", () => {
      const ManoloInfo = mockData[0];
      const headingName = `${ManoloInfo.name} ${ManoloInfo.lastName}`;
      customRender(
        <UserList />,
        { isProvider: true },
        {
          preloadedState: {
            usersState: {
              users: mockData,
            },
          },
        },
      );

      const headingElement = screen.getByRole("heading", {
        name: headingName,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
