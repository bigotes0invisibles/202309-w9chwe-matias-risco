export interface usuario {
  id: number;
  name: string;
  lastName: string;
  isFriend: boolean;
}

export interface usuarioStateStructure {
  usuario: usuario[];
}
