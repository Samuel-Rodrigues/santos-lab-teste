import React from 'react';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

interface props {
  propsAlert?: AlertProps,
  texto: string
}

const AlertaErro: React.FC<props> = ({ propsAlert, texto }) => {
  return <MuiAlert
    style={{ width: 500, margin: 15 }}
    severity="error"
    elevation={5}
    variant="filled"
    {...propsAlert}>{texto}
  </MuiAlert>;
}

export default AlertaErro;