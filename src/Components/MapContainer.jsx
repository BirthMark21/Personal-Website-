import React from 'react';

const MapContainer = ({ location }) => {
  return (
    <div className="map-container">
      {/* Map component - can be implemented with Leaflet or other map library */}
      <p>Map for location: {location}</p>
    </div>
  );
};

export default MapContainer;
