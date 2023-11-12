import { UserStructure } from "../store/feature/user/types";

const mockData: UserStructure[] = [
  {
    id: 0,
    isFriend: "unknown",
    name: "Manolo",
    lastName: "Comite",
    image: "https://www.mypokecard.com/en/Gallery/my/galery/nJtUAVVeb13r.jpg",
  },
  {
    id: 1,
    isFriend: "enemy",
    name: "Alpharius",
    lastName: "NotAlpharius",
    image:
      "https://i.pinimg.com/280x280_RS/f0/ab/9a/f0ab9a5dc18e6bc041dc01cee7952295.jpg",
  },
];

export default mockData;
