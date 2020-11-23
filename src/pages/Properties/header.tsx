import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { actionCreators } from '../../store/reducers/sessao/actions';

interface props {
  emailUsuario: string,
  quantidadePropriedades: number,
  perfil: string
}

const Header: React.FC<props> = ({ emailUsuario, quantidadePropriedades, perfil }) => {
  const dispatch = useDispatch();

  const encerrarSessao = () => {
    dispatch(actionCreators.encerrarSessao());
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ marginLeft: 'auto' }}>
            Bem-vindo {emailUsuario}, você {perfil === 'admin' ? 'é admin e pode ver todas ' : `tem ${quantidadePropriedades}`} propriedades
          </Typography>
          <Button color="inherit" style={{ marginLeft: 'auto' }} 
          onClick={encerrarSessao}>Sair</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;