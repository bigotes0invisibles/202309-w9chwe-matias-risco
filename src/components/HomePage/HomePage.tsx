import { useEffect } from "react";
import useApiUsers from "../../hooks/UseApiUsers";
import { useAppDispatch } from "../../store/hooks";
import HomePageStyled from "./HomePageStyled";
import { loadUsersActionCreator } from "../../store/feature/user/userSlice";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getUsersApi } = useApiUsers();

  useEffect(() => {
    (async () => {
      const users = await getUsersApi();
      dispatch(loadUsersActionCreator(users));
    })();
  }, [dispatch, getUsersApi]);

  return (
    <HomePageStyled>
      <h2>All users</h2>
    </HomePageStyled>
  );
};

export default HomePage;
