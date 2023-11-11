import React from "react";
import UserListStyled from "./UserListStyled";
import { useAppSelector } from "../../store/hooks";
import UserCard from "../UserCard/UserCard";

const UserList = (): React.ReactElement => {
  const users = useAppSelector((state) => state.usersState.users);

  return (
    <UserListStyled>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </UserListStyled>
  );
};

export default UserList;
