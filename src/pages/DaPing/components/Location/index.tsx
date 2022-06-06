import React from 'react';
import { Map, MapApiLoaderHOC, Circle } from 'react-bmapgl';

const Location = () => {
  return (
    <div>
      <div>
        <h3 style={{ color: 'white' }}>实时位置查看</h3>
      </div>
      <Map
        style={{ height: 480, width: 480 }}
        center={new BMapGL.Point(113.665412, 34.757975)}
        zoom={15}
      >
        <Circle
          center={new BMapGL.Point(113.665412, 34.757975)}
          radius={500}
          strokeColor="#f00"
          strokeWeight={2}
          fillColor="#ff0"
          fillOpacity={0.3}
        />
      </Map>
    </div>
  );
};

export default MapApiLoaderHOC({ ak: 'OGdE3NXbWnhXxTzcbZo4q1BKsKtynrN8' })(Location);
