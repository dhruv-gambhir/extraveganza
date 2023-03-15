import React, { useRef, useEffect } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap({ center }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setCenter(center);
      console.log("The center is", center);

    }
  }, [center]);

  return (
    <div style={{ height: "100%", width: "80%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyDGlFQgWtdKStDPPWSahOj9PQoXDP6aIpo",
        }}
        defaultCenter={center}
        defaultZoom={15}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
      >
        {console.log("The centre is" + center.lat)}
        <AnyReactComponent lat={1.3402} lng={103.6755} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
