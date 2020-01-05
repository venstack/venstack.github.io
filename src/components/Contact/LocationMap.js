import React,{useState} from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
export default function LocationMap() {

const [center] = useState({lat: 28.064099, lng: -80.616789 });
const [zoom] = useState(11);

return (
    <div style={{ height: '115vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDm8U7qWhhsCncdSCr2dT6EPhlFGRzwaCM' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
         <Marker
            lat={center.lat}
            lng={center.lng}
            name="My Marker"
            color="red"
          />
        </GoogleMapReact>
      </div>
);
}