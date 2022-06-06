import React, { useEffect, useState } from 'react';
import { Map, MapApiLoaderHOC, Marker } from 'react-bmapgl';
import { request } from 'ice';

const Location = () => {
  // @ts-ignore
  const defaultLocation = new BMapGL.Point(113.665412, 34.757975);
  // @ts-ignore
  const [mapCenter, setMapCenter] = useState(defaultLocation);
  // @ts-ignore
  const [mapLocation, setMapLocation] = useState(defaultLocation);

  useEffect(() => {
    setInterval(() => {
      request('/api/location')
        .then((data) => {
          // @ts-ignore
          // setMapLocation(new BMapGL.Point(data.data.lng, data.data.lat));
          setMapLocation(new BMapGL.Point(113.665412 + Math.random() - 0.5, 34.757975 + Math.random() - 0.5));
        });
    }, 10000);
  });

  return (
    <div>
      <div>
        <h3 style={{ color: 'white' }}>实时位置查看</h3>
      </div>
      <Map
        style={{ height: 480, width: 480 }}
        center={mapCenter}
        zoom={15}
      >
        <Marker
          position={mapLocation}
          icon={'loc_blue'}
          autoViewport
          viewportOptions={{
            zoomFactor: -12,
          }}
        />
      </Map>
    </div>
  );
};

export default MapApiLoaderHOC({ ak: 'OGdE3NXbWnhXxTzcbZo4q1BKsKtynrN8' })(Location);
