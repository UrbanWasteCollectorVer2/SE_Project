import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'

};

const center = {
  lat:  10.772094670993672, 
  lng: 106.65817165552765,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB_SSkLkLO1u5QGNl_4kUDERkvC1GtKBAI"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div style={{height: "400px"}}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={-0.9}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }

        
        <></>
      </GoogleMap>
      </div>
  ) : <></>
}

export default React.memo(MyComponent)