import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';

import { InputLogin, Form } from './styles';
import { Usuarios } from '../../services/api';
import AlertaErro from '../../components/alertaErro';
import AlertaInfo from '../../components/alertaInfo';
import { ApplicationState } from '../../store/index';
import Usuario from '../../store/reducers/usuario/types';
import { actionCreators as ActionsSessao } from '../../store/reducers/sessao/actions';
import { actionCreators as ActionsUsuario } from '../../store/reducers/usuario/actions';

interface DadosLogin {
  email?: string,
  password?: string
}

const FormLogin: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const usuariosReducer = useSelector((state: ApplicationState) => state.usuarios);

  const [erroLogin, setErroLogin] = useState<boolean>(false);
  const [infoLogin, setInfoLogin] = useState<boolean>(false);
  const [dadosLogin, setDadosLogin] = useState<DadosLogin>({} as DadosLogin);

  useEffect(() => {
    carregarUsuarios()
  }, [])

  useEffect(() => {
    setErroLogin(false);
    setInfoLogin(false);
  }, [dadosLogin])

  const carregarUsuarios = async () => {
    const usuarios = await Usuarios();
    dispatch(ActionsUsuario.salvarUsuariosNoReducer(usuarios));
  }

  const verificarAutenticacao = () => {

    if (!dadosLogin.email || !dadosLogin.password) {
      setInfoLogin(true);
      return;
    }

    usuariosReducer.data.forEach((usuario: Usuario) => {
      if (usuario.email === dadosLogin?.email && usuario.password === dadosLogin.password) {
        iniciarSessao(usuario);
      }
      else {
        setErroLogin(true);
      }
    })
  }
  
  const iniciarSessao = (usuario: Usuario) => {
    setErroLogin(false)
    dispatch(ActionsSessao.iniciarSessao(usuario));
    history.push('/propriedades')
  }

  return (
    <>
      <Form>
        <form >
          <InputLogin label="E-mail" variant="outlined" required
            value={dadosLogin.email || ''}
            onChange={(e) => setDadosLogin({ ...dadosLogin, email: e.target.value })} />
          <InputLogin label="Senha" variant="outlined" required
            type="password"
            value={dadosLogin.password || ''}
            onChange={(e) => setDadosLogin({ ...dadosLogin, password: e.target.value })} />
          <Button variant="contained" color="primary" onClick={() => verificarAutenticacao()}>
            Entrar
        </Button>
        </form>
      </Form>
      {erroLogin && (<AlertaErro texto={"Email ou senha incorretos"} />)}
      {infoLogin && (<AlertaInfo texto={"Preencha todos os campos"} />)}
    </>
  )
}

export default FormLogin;