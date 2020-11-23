import { Reducer } from 'redux';
import Propriedade, { PropriedadesState, PropriedadeActionTypes } from '../propriedade/types';

export const initialState: PropriedadesState = {
  data: [] as Array<Propriedade>,
  propriedadesUsuario: [] as Array<Propriedade>
};


const propriedadeReducer: Reducer<PropriedadesState> = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case PropriedadeActionTypes.CARREGAR_PROPRIEDADES: {
      return { ...state, data: action.payload }
    }
    case PropriedadeActionTypes.CARREGAR_PROPRIEDADES_USUARIO: {
      return { ...state, propriedadesUsuario: action.payload }
    }
    default: {
      return state;
    }
  }
}

export default propriedadeReducer;
