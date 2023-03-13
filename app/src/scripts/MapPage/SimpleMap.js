import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap({ center }) {
  /*const defaultProps = {
    zoom: 15
  };*/

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '80%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDGlFQgWtdKStDPPWSahOj9PQoXDP6aIpo" }}
        center={center}
        defaultZoom={15}
      >
        {console.log("The centre is" + center)}
        <AnyReactComponent
          lat={1.3402}
          lng={103.6755}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
