import React, { Component, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

export default class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfoWindow: false
    };
  }

  handleMarkerClick = () => {
    this.setState({ showInfoWindow: !this.state.showInfoWindow });
  };

  handleInfoWindowClose = () => {
    this.setState({ showInfoWindow: false });
  };

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
          <Marker
            position={this.props.center}
            onClick={this.handleMarkerClick}
          />

          {this.state.showInfoWindow && (
            <InfoWindow
              position={this.props.center}
              onCloseClick={this.handleInfoWindowClose}
            >
              <div>
                <h3>{this.props.address}</h3>
                <p>Info window content goes here.</p>

                {/* Embed Street View panorama */}
                <iframe
                  width="100%"
                  height="200"
                  frameBorder="0"
                  src={`https://www.google.com/maps/embed/v1/streetview?key=AIzaSyDGlFQgWtdKStDPPWSahOj9PQoXDP6aIpo&location=${this.props.center.lat},${this.props.center.lng}&heading=210&pitch=10`}
                  allowFullScreen
                />
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    )
  }
}
