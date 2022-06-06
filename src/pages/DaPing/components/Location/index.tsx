import React, { useEffect, useState } from 'react';
import { Map, MapApiLoaderHOC, Circle } from 'react-bmapgl';
import { request } from 'ice';

const Location = () => {
  // @ts-ignore
  const [mapCenter, setMapCenter] = useState<BMapGL.Point>();

  useEffect(() => {
    setInterval(() => {
      request('/api/location')
        .then((data) => {
          // @ts-ignore
          setMapCenter(new BMapGL.Point(data.data.lng, data.data.lat));
        });
    }, 5000);
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
      />
    </div>
  );
};

export default MapApiLoaderHOC({ ak: 'OGdE3NXbWnhXxTzcbZo4q1BKsKtynrN8' })(Location);
