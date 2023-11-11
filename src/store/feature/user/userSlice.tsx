import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, UserStateStructure } from "./types";

export const initialUsersState: UserStateStructure = {
  users: [],
};

const usersSlice = createSlice({
  name: "usersState",
  initialState: initialUsersState,
  reducers: {
    loadUsers: (currentState, action: PayloadAction<User[]>) => ({
      ...currentState,
      users: action.payload.map((user) => ({ ...user })),
    }),
  },
});

export default usersSlice.reducer;
export const { loadUsers: loadUsersActionCreator } = usersSlice.actions;
