import React from 'react';

import FormLogin from './form';
import Logo from '../../compoents/logo';
import { ContainerLogin, TituloLogin } from './styles';

const Login: React.FC = () => {
  return (<>
    <ContainerLogin>
      <Logo />
      <TituloLogin>Iniciar sessão</TituloLogin>
      <FormLogin />
    </ContainerLogin>
  </>
  )
}

export default Login;