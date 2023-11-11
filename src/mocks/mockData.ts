import { usuario } from "../store/feature/usuario/types";

const mockData: usuario[] = [
  {
    id: 0,
    isFriend: true,
    name: "Manolo",
    lastName: "Comite",
  },
  {
    id: 1,
    isFriend: false,
    name: "Alpharius",
    lastName: "NotAlpharius",
  },
];

export default mockData;
