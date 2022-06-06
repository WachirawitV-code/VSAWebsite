import React from "react";
import { useState } from "react";
import { Map, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { useRef } from "react";



const FunctionDraw = () => {

  const [center, setCenter] = useState({ lat: 24.4539, lng: 54.3773 });
  const [mapLayers, setMapLayers] = useState([]);

  const ZOOM_LEVEL =12;
  const mapRef = useRef();

   const _onCreate = (e) => {
     console.log(e); };

   const _onEdited = (e) => {
     console.log(e); };

   const _onDeleted = (e) => {
     console.log(e); };

  return (
    <>
      <div className="FunctionDraw">
          <Map center={center} zoom={ZOOM_LEVEL} ref={mapRef} >
              <FeatureGroup>
                <EditControl
                  position="topright"
                  onCreated={_onCreate}
                  onEdited={_onEdited}
                  onDeleted={_onDeleted}
                  draw={{
                    rectangle: false,
                    polyline: false,
                    circle: false,
                    circlemarker: false,
                    marker: false,
                  }}
                />
              </FeatureGroup>             
              </Map>      
      </div>
    </>
  );
};

export default FunctionDraw;