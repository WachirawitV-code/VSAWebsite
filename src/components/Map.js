import React, { useState } from "react";

import L from "leaflet";
import { Map, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import Navbar from './Navbar/Navbar'


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const MapT = () => {
  const [center, setCenter] = useState({ lat: 24.4539, lng: 54.3773 });
  const ZOOM_LEVEL = 12;
  const mapRef = useRef();

  const _created = (e) => console.log(e);

  return (
    <>
      <Navbar/>
      <div className="row">
        <div className="col text-center">
          <h2>React-leaflet - Draw shapes on map</h2>

          <div className="col">
            <Map center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
              <FeatureGroup>
                <EditControl
                  position="topright"
                  onCreated={_created}
                  draw={
                    {
                      /* rectangle: false,
                    circle: false,
                    circlemarker: false,
                    marker: false,
                    polyline: false, */
                    }
                  }
                />
              </FeatureGroup>
              
              <TileLayer
                url="https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=9hhTenrufsMkJWV1tFyK"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
            </Map>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default MapT;