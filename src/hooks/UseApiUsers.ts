import { useCallback } from "react";
import { UserStructure } from "../store/feature/user/types";
import { setFriend } from "../store/feature/user/utils";

const useApiUsers = () => {
  const urlApi = import.meta.env.VITE_API_URL;

  const getUsersApi = useCallback(async () => {
    const response = await fetch(`${urlApi}/users`);
    const users = (await response.json()) as UserStructure[];
    return users;
  }, [urlApi]);

  const patchUserApiToggleFriend = useCallback(
    async (user: UserStructure) => {
      const response = await fetch(`${urlApi}/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isFriend: setFriend(user.isFriend),
        }),
      });
      const newUser = (await response.json()) as UserStructure;
      return newUser;
    },
    [urlApi],
  );

  return { getUsersApi, patchUserApiToggleFriend };
};

export default useApiUsers;
