import React from "react";
import { useState } from "react";
import { Map, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import Navbar from './Navbar/Navbar';

const DrawPic = () => {

  const [center, setCenter] = useState({ lat: 24.4539, lng: 54.3773 });
  const [mapLayers, setMapLayers] = useState([]);

  const ZOOM_LEVEL = 12;
  const mapRef = useRef();

   const _onCreate = (e) => {
     console.log(e); };

   const _onEdited = (e) => {
     console.log(e); };

   const _onDeleted = (e) => {
     console.log(e); };

  return (
    <>
      <Navbar/>
      <div className="row">
        <div className="col text-center">
          <h2>Mark label </h2>

          <div className="container" >
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
              <img src={"https://test-o7f7gafj4q-uc.a.run.app/uploads/2020-08-01-21.10.43.png"} width="500" height="500" alt="" loading="lazy"></img>
              </Map>
              <h2></h2>
              <button type="button" class="btn btn-success">Success</button>
              <pre className="text-left">{JSON.stringify(mapLayers, 0, 2)}</pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawPic;