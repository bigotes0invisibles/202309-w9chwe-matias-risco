export interface UserStructure {
  id: number;
  name: string;
  lastName: string;
  isFriend: boolean;
}

export interface UserStateStructure {
  users: UserStructure[];
}
