import { renderHook } from "@testing-library/react";
import useApiUsers from "./UseApiUsers";

describe("Given the hook UseApiUsers", () => {
  describe("When getUsersApi is call", () => {
    test("then it should return the information of Manolo and Alpharius", async () => {
      const manoloName = "Manolo";
      const alphariusName = "Alpharius";
      const {
        result: {
          current: { getUsersApi },
        },
      } = renderHook(useApiUsers);

      const users = await getUsersApi();
      const manolo = users[0];
      const alpharius = users[1];

      expect(manolo.name).toBe(manoloName);
      expect(alpharius.name).toBe(alphariusName);
    });
  });

  describe("When patchUserApi is call", () => {
    test("then it should return the information of Manolo", async () => {
      const {
        result: {
          current: { getUsersApi, patchUserApiToggleFriend },
        },
      } = renderHook(useApiUsers);
      const manoloPocition = 0;
      const manolo = (await getUsersApi())[manoloPocition];
      const manoloUpdated = await patchUserApiToggleFriend(manolo);

      expect(manolo.isFriend).not.toBe(manoloUpdated.isFriend);
    });
  });
});
