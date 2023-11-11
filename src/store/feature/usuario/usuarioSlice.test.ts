import mockData from "../../../mocks/mockData";
import { usuario } from "./types";
import { initialUsuarioState, loadUsuariosActionCreator } from "./usuarioSlice";
import usuarioReduce from "./usuarioSlice";

describe("Given the reducer of usuario", () => {
  describe("When the reducer recive the actualState and the action loadUsuario with users", () => {
    test("then it should return a newState with users updated", () => {
      const usuarioApi = mockData.map((usuario): usuario => ({ ...usuario }));
      const actualState = initialUsuarioState;
      const actionLoad = loadUsuariosActionCreator(usuarioApi);

      const newState = usuarioReduce(actualState, actionLoad);

      expect(newState.usuario).toStrictEqual(usuarioApi);
    });
  });
});
