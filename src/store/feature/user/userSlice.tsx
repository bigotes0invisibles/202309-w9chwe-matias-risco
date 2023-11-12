import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserStructure, UserStateStructure } from "./types";
import { setFriend } from "./utils";

export const initialUsersState: UserStateStructure = {
  users: [],
};

const usersSlice = createSlice({
  name: "usersState",
  initialState: initialUsersState,
  reducers: {
    loadUsers: (currentState, action: PayloadAction<UserStructure[]>) => ({
      ...currentState,
      users: action.payload.map((user) => ({ ...user })),
    }),

    toggleFriend: (currentState, action: PayloadAction<number>) => ({
      ...currentState,
      users: currentState.users.map((user) => ({
        ...user,
        isFriend:
          user.id === action.payload ? setFriend(user.isFriend) : user.isFriend,
      })),
    }),
  },
});

export default usersSlice.reducer;
export const {
  loadUsers: loadUsersActionCreator,
  toggleFriend: toggleFriendActionCreator,
} = usersSlice.actions;
