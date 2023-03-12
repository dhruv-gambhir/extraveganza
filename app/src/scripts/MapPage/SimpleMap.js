import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap({ latitude, longitude}){

  const defaultProps = {
    center: {
      lat: latitude || 1.3521, // set default value to 10.99835602 if lat is not passed in
      lng: longitude || 103.8198, // set default value to 77.01502627 if lng is not passed in
    },
    zoom: 25
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '80%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDGlFQgWtdKStDPPWSahOj9PQoXDP6aIpo" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        
      >

        {console.log("Default centre is " + defaultProps.center.lat)}
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
