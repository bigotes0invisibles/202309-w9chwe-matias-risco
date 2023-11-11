export interface User {
  id: number;
  name: string;
  lastName: string;
  isFriend: boolean;
}

export interface UserStateStructure {
  users: User[];
}
