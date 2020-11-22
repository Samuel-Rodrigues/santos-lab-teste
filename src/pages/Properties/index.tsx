import React from 'react';

import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';

import Body from './body';
import Header from './header';
import { ApplicationState } from '../../store/index';
import { retornaNomeDoEmail } from '../../utils/stringUtil';

const Properties: React.FC = () => {
  const sessaoReducer = useSelector((state: ApplicationState) => state.sessao);

  return sessaoReducer.autenticado ? (
    <>
      <Header
        emailUsuario={retornaNomeDoEmail(sessaoReducer.usuario.email)}
        quantidadePropriedades={
          sessaoReducer.usuario.propertyIds ?
            sessaoReducer.usuario.propertyIds?.length : 0
        }
        perfil={sessaoReducer.usuario.role}
      />
      <Body />
    </>
  ) : (<Redirect to="/" />)

}
export default Properties;