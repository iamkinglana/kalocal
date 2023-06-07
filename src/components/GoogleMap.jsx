import React from 'react';
import { GoogleMap, Marker } from 'react-google-maps';

function GoogleMapComponent() {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={12}
      center={defaultCenter}
    >
      <Marker position={defaultCenter} /> {/* Add a marker at the center of the map */}
    </GoogleMap>
  );
}

export default GoogleMapComponent;
