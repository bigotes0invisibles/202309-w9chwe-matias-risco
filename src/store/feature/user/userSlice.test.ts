import mockData from "../../../mocks/mockData";
import { User } from "./types";
import { initialUsersState, loadUsersActionCreator } from "./userSlice";
import userReduce from "./userSlice";

describe("Given the reducer of usuario", () => {
  describe("When the reducer recive the actualState and the action loadUsuario with users", () => {
    test("then it should return a newState with users updated", () => {
      const usersApi = mockData.map((user): User => ({ ...user }));
      const actualState = initialUsersState;
      const actionLoad = loadUsersActionCreator(usersApi);

      const newState = userReduce(actualState, actionLoad);

      expect(newState.users).toStrictEqual(usersApi);
    });
  });
});
