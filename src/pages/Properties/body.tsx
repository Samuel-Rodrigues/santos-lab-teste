import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Maps from '../../components/maps';
import { ApplicationState } from '../../store';
import { Propriedades } from '../../services/api';
import Propriedade from '../../store/reducers/propriedade/types'
import { actionCreators } from '../../store/reducers/propriedade/actions'

const Body: React.FC = () => {
  const dispatch = useDispatch();

  const sessaoReducer = useSelector((state: ApplicationState) => state.sessao)
  const propriedadesReducer = useSelector((state: ApplicationState) => state.propriedades.data)
  const propriedadesUsuario = useSelector((state: ApplicationState) => state.propriedades.propriedadesUsuario)

  const carregarPropriedades = async () => {
    const propriedades = await Propriedades();
    dispatch(actionCreators.carregarPropriedadesNoReducer(propriedades))
  }

  useEffect(() => {
    carregarPropriedades();
  }, [])

  useEffect(() => {
    buscarPropriedadesDoUsuario()

  }, [propriedadesReducer])

  const buscarPropriedadesDoUsuario = () => {

    var listaPropriedades: Array<Propriedade> = []

    if (sessaoReducer.usuario.propertyIds) {
      sessaoReducer.usuario.propertyIds.forEach(idPropriedadeUsuario => {
        propriedadesReducer.forEach((propriedade: Propriedade) => {
          if (propriedade.id === idPropriedadeUsuario) {
            listaPropriedades.push(propriedade);
          }
        })
      })
    }
    dispatch(actionCreators.carregarPropriedadesDoUsuario(listaPropriedades));
  }
  return <Maps propriedades={
    sessaoReducer.usuario.role === 'admin' ?
      propriedadesReducer : propriedadesUsuario} />
}

export default Body;