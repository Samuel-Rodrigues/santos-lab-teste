import Usuario from '../usuario/types';

export default interface Sessao {
  usuario: Usuario,
}

export enum SessaoActionTypes {
  INICIAR_SESSAO = '@@SESSAO/INICIAR_SESSAO',
  ENCERRAR_SESSAO = '@@SESSAO/ENCERRAR_SESSAO'
}

export interface iniciarSessao {
  type: SessaoActionTypes.INICIAR_SESSAO;
  payload: Usuario;
}

export interface encerrarSessao {
  type: SessaoActionTypes.ENCERRAR_SESSAO;
}

export type KnownAction =
  | iniciarSessao
  | encerrarSessao;

export interface SessaoState {
  readonly usuario: Usuario
  readonly autenticado: boolean
}
