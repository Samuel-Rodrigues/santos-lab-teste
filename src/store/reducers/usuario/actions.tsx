import Usuario, { UsuarioActionTypes, salvarUsuariosNoReducer } from './types';

export const actionCreators = {
  salvarUsuariosNoReducer: (usuarios: Array<Usuario>) =>
    ({ type: UsuarioActionTypes.CARREGAR_USUARIOS, payload: usuarios } as salvarUsuariosNoReducer)
}