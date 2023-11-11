import { useCallback } from "react";
import { UserStructure } from "../store/feature/user/types";

const useApiUsers = () => {
  const urlApi = import.meta.env.VITE_API_URL;

  const getUsersApi = useCallback(async () => {
    const response = await fetch(`${urlApi}/users`);
    const users = (await response.json()) as UserStructure;
    return users;
  }, [urlApi]);

  return { getUsersApi };
};

export default useApiUsers;
