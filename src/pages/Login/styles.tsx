import styled from 'styled-components'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

export const ContainerLogin = styled(Container)`
  margin-top: 25px;
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: -webkit-center;
`;

export const TituloLogin = styled.p`
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputLogin = styled(TextField)`
  .MuiOutlinedInput-root {
    margin-bottom: 20px;
    width: 500px;
    display: flex !important;
  }
`;

export const Form = styled.div`
  width: 100vw;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  width: 500px;
  button{
    display: block;
    margin-left: auto;
  }
`;