export default interface Propriedade {
  id: number,
  name: string,
  cropType: string,
  productivity: Array<Productivity>
  coordinates: Array<number>
}

export interface Productivity {
  month: number,
  value: number
}

export enum PropriedadeActionTypes {
  CARREGAR_PROPRIEDADES = '@@PROPRIEDADE/CARREGAR_PROPRIEDADES',
  CARREGAR_PROPRIEDADES_USUARIO = '@@PROPRIEDADE/CARREGAR_PROPRIEDADES_USUARIO',
}

export interface carregarPropriedadesNoReducer {
  type: PropriedadeActionTypes.CARREGAR_PROPRIEDADES;
  payload: Array<Propriedade>;
}

export interface carregarPropriedadesDoUsuario {
  type: PropriedadeActionTypes.CARREGAR_PROPRIEDADES_USUARIO;
  payload: Array<Propriedade>;
}

export type KnownAction =
  | carregarPropriedadesNoReducer;

export interface PropriedadesState {
  readonly data: Array<Propriedade>
  readonly propriedadesUsuario: Array<Propriedade>
}