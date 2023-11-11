import { UserStructure } from "../store/feature/user/types";

const mockData: UserStructure[] = [
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
