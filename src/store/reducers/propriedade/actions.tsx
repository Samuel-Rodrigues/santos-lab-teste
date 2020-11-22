import Propriedade, { PropriedadeActionTypes, carregarPropriedadesNoReducer, carregarPropriedadesDoUsuario } from './types'

export const actionCreators = {
  carregarPropriedadesNoReducer: (propriedades: Array<Propriedade>) =>
    ({ type: PropriedadeActionTypes.CARREGAR_PROPRIEDADES, payload: propriedades } as carregarPropriedadesNoReducer),
  carregarPropriedadesDoUsuario: (propriedades: Array<Propriedade>) =>
    ({ type: PropriedadeActionTypes.CARREGAR_PROPRIEDADES_USUARIO, payload: propriedades } as carregarPropriedadesDoUsuario),
}