import mockData from "../../../mocks/mockData";
import { UserStateStructure, UserStructure } from "./types";
import {
  initialUsersState,
  loadUsersActionCreator,
  toggleFriendActionCreator,
} from "./userSlice";
import userReduce from "./userSlice";

describe("Given the reducer of usuario", () => {
  describe("When the reducer recive the actualState and the action loadUsuario with users", () => {
    test("then it should return a newState with users updated", () => {
      const usersApi = mockData.map((user): UserStructure => ({ ...user }));
      const actualState = initialUsersState;
      const actionLoad = loadUsersActionCreator(usersApi);

      const newState = userReduce(actualState, actionLoad);

      expect(newState.users).toStrictEqual(usersApi);
    });
  });

  describe("When the reducer recive the actualState and the action toggleFriend with Manolo id", () => {
    test("then it should return a newState with Manolo propety isFriend updated", () => {
      const usersApi = mockData.map((user): UserStructure => ({ ...user }));
      const actualState: UserStateStructure = { users: usersApi };
      const Manolo = usersApi[0];
      const actionToggleFrienad = toggleFriendActionCreator(Manolo.id);

      const newState = userReduce(actualState, actionToggleFrienad);
      const ManoloUpdated = newState.users[0];

      expect(Manolo.isFriend).not.toBe(ManoloUpdated.isFriend);
    });
  });
});
