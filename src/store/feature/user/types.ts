export interface UserStructure {
  id: number;
  name: string;
  lastName: string;
  isFriend: "unknown" | "friend" | "enemy";
  image: string;
}

export interface UserStateStructure {
  users: UserStructure[];
}
