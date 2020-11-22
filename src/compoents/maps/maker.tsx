import React, { useState } from 'react';

import Popper from '@material-ui/core/Popper';

import { Productivity } from '../../store/reducers/propriedade/types'
import { MarkerMap, CardMakerMap, NameMarker, SubTitleMarker, ScrollbarMarker } from './styles';

interface props {
  nome: string,
  tipoColheta: string,
  historico: Array<Productivity>
  lat?: number
  lng?: number
}
const Marker: React.FC<props> = ({ nome, tipoColheta, historico }) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const valorTotal = () => {
    var total: number = 0;
    historico.forEach(hist => {
      total = total + hist.value;
    })
    return total;
  }

  const mesesTotal = () => {
    var meses: number = 0;
    historico.forEach(hist => {
      meses = meses + 1;
    })
    return meses;
  }

  return (
    <>
      <MarkerMap className="pin bounce"
        style={{ backgroundColor: 'red', cursor: 'pointer' }}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <div className="pulse" />
      </MarkerMap>

      <Popper id={id} open={open} anchorEl={anchorEl}>
        <CardMakerMap>
          <NameMarker>{nome || ""}</NameMarker>
          <SubTitleMarker>Colheta: <span>{tipoColheta || ""}</span></SubTitleMarker>
          <ScrollbarMarker>
            <p>Histórico:</p>
            {historico && historico.map(hist => (
              <span key={hist.month}>Mês {hist.month} - valor: {hist.value}</span>
            ))}</ScrollbarMarker>
          <ScrollbarMarker>
            <p>Quanidade de meses: {mesesTotal()}</p>
            <p>Valor total: {valorTotal()}</p>
          </ScrollbarMarker>
        </CardMakerMap>
      </Popper>
    </>
  );
};

export default Marker;