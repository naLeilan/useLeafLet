import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function App() {
  const [mapPosition, setMapPosition] = useState([40, 0]);
  return (
    <div className="mapContainer">
      <MapContainer
        center={mapPosition}
        zoom={9}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
