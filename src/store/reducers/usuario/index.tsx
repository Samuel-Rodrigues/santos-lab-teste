import { Reducer } from 'redux';

import Usuario, { UsuariosState, UsuarioActionTypes } from '../usuario/types';

export const initialState: UsuariosState = {
  data: [] as Array<Usuario>
};

const usuarioReducer: Reducer<UsuariosState> = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case UsuarioActionTypes.CARREGAR_USUARIOS: {
      return { ...state, data: action.payload }
    }
    default: {
      return state;
    }
  }
}

export default usuarioReducer;