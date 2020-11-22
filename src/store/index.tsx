import { createStore, combineReducers } from 'redux';

import sessaoReducer from './reducers/sessao';
import usuarioReducer from './reducers/usuario';
import { SessaoState } from './reducers/sessao/types';
import propriedadeReducer from './reducers/propriedade';
import { UsuariosState } from './reducers/usuario/types';
import { PropriedadesState } from './reducers/propriedade/types';

const rootReducer = combineReducers({
  sessao: sessaoReducer,
  usuarios: usuarioReducer,
  propriedades: propriedadeReducer,
})

export interface ApplicationState {
  sessao: SessaoState,
  usuarios: UsuariosState,
  propriedades: PropriedadesState
}
export default createStore(rootReducer);