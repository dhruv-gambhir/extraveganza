import React, { Component,useState } from 'react';
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};


export default class SimpleMap extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyDGlFQgWtdKStDPPWSahOj9PQoXDP6aIpo"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={this.props.center}
          zoom={13}
        >
        <Marker position={this.props.center} />

          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}