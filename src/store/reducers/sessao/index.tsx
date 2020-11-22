import { Reducer } from 'redux';
import Usuario from '../usuario/types';
import { SessaoActionTypes, KnownAction, SessaoState } from './types';

export const initialState: SessaoState = {
  usuario: {} as Usuario,
  autenticado: false,
};

const sessaoReducer: Reducer<SessaoState> = (
  state = initialState,
  action: KnownAction,
) => {
  switch (action.type) {
    case SessaoActionTypes.INICIAR_SESSAO: {
      console.log(action.payload)
      return { ...state, usuario: action.payload, autenticado: true };
    }
    case SessaoActionTypes.ENCERRAR_SESSAO: {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
}

export default sessaoReducer;