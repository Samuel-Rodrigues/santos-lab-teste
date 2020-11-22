export default interface Usuario {
  email: string,
  password: string,
  role: string,
  propertyIds?: Array<number>
}

export enum UsuarioActionTypes {
  CARREGAR_USUARIOS = '@@USUARIO/CARREGAR_USUARIOS',
}

export interface salvarUsuariosNoReducer {
  type: UsuarioActionTypes.CARREGAR_USUARIOS;
  payload: Array<Usuario>;
}

export type KnownAction =
  | salvarUsuariosNoReducer;

export interface UsuariosState {
  readonly data: Array<Usuario>
}