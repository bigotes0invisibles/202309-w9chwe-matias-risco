import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { usuario, usuarioStateStructure } from "./types";

export const initialUsuarioState: usuarioStateStructure = {
  usuario: [],
};

const usuarioSlice = createSlice({
  name: "usuarioState",
  initialState: initialUsuarioState,
  reducers: {
    loadUsuarios: (currentState, action: PayloadAction<usuario[]>) => ({
      ...currentState,
      usuario: action.payload.map((usuario) => ({ ...usuario })),
    }),
  },
});

export default usuarioSlice.reducer;
export const { loadUsuarios: loadUsuariosActionCreator } = usuarioSlice.actions;
