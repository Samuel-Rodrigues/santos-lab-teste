import Usuario from '../usuario/types';
import { SessaoActionTypes, iniciarSessao, encerrarSessao } from './types';

export const actionCreators = {
  iniciarSessao: (usuario: Usuario) =>
    ({ type: SessaoActionTypes.INICIAR_SESSAO, payload: usuario } as iniciarSessao),
  encerrarSessao: () =>
    ({ type: SessaoActionTypes.ENCERRAR_SESSAO } as encerrarSessao),
}