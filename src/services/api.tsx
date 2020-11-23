import Usuario from '../store/reducers/usuario/types';
import Propriedade from '../store/reducers/propriedade/types';

export const Usuarios = async (): Promise<Array<Usuario>> => {
  return await require('../assets/users.json');
}

export const Propriedades = async (): Promise<Array<Propriedade>> => {
  return await require('../assets/properties.json')
}