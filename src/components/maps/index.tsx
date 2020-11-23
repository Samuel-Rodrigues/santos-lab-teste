import React from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './maker';
import { MapContainer } from './styles';
import Propriedade from '../../store/reducers/propriedade/types';

const googleMapsKey = 'AIzaSyASjobS_SE2ipW_z6gkXrEiZfLXwhNo1XM'

interface props {
  propriedades: Array<Propriedade>
}

const Maps: React.FC<props> = ({ propriedades }) => {

  return (<>
    <MapContainer>
      {propriedades.length > 0 && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapsKey }}
          defaultCenter={{
            lat: propriedades[0].coordinates[0],
            lng: propriedades[0].coordinates[1]
          }}
          defaultZoom={6}
        >
          {propriedades.map(propriedade => (
            <Marker key={propriedade.id}
              lat={propriedade.coordinates[0]}
              lng={propriedade.coordinates[1]}
              nome={propriedade.name}
              tipoColheta={propriedade.cropType}
              historico={propriedade.productivity}
            />
          ))}
        </GoogleMapReact>
      )}
    </MapContainer>
  </>
  )
}

export default Maps;