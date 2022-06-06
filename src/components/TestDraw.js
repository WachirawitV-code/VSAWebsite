import React from "react";
import { useState } from "react";
import { Map, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { useRef } from "react";
import Navbar from './Navbar/Navbar';
import ImageMark from './image'
import FunctionDraw from './FunctionDraw'
import { Stage, Layer, Rect } from "react-konva";


const DrawPic = () => {

  const [center, setCenter] = useState({ lat: 24.4539, lng: 54.3773 });
  const [mapLayers, setMapLayers] = useState([]);

  const ZOOM_LEVEL =12;
  const mapRef = useRef();

  const _onCreate = (e) => {
    console.log(e);

    const { layerType, layer } = e;
    if (layerType === "polygon") {
      const { _leaflet_id } = layer;

      setMapLayers((layers) => [
        ...layers,
        { id: _leaflet_id, latlngs: layer.getLatLngs()[0] },
      ]);
    }
  };

     const _onEdited = (e) => {
      console.log(e);
      const {
        layers: { _layers },
      } = e;
  
      Object.values(_layers).map(({ _leaflet_id, editing }) => {
        setMapLayers((layers) =>
          layers.map((l) =>
            l.id === _leaflet_id
              ? { ...l, latlngs: { ...editing.latlngs[0] } }
              : l
          )
        );
      });
    };

    const _onMounted = (drawControl) => {
      this.drawControl = drawControl;
  }

     const _onDeleted = (e) => {
      console.log(e);
      const {
        layers: { _layers },
      } = e;
  
      Object.values(_layers).map(({ _leaflet_id }) => {
        setMapLayers((layers) => layers.filter((l) => l.id !== _leaflet_id));
      });
    };

   const submitButton = (
       <button type="button" class="btn btn-success">
           Submit
       </button>
   )
   const PointMark = ['x = ','Y = ']

   const PointMouse = event => {
     const {clientX,clientY} = event;
     console.log(clientX,clientY)
   }

  //  const DrawAnnotations = () => {
  //   const [annotations, setAnnotations] = useState([]);
  //   const [newAnnotation, setNewAnnotation] = useState([]);
  
  //   const handleMouseDown = event => {
  //     if (newAnnotation.length === 0) {
  //       const { x, y } = event.target.getStage().getPointerPosition();
  //       setNewAnnotation([{ x, y, width: 0, height: 0, key: "0" }]);
  //     }
  //   };
  
  //   const handleMouseUp = event => {
  //     if (newAnnotation.length === 1) {
  //       const sx = newAnnotation[0].x;
  //       const sy = newAnnotation[0].y;
  //       const { x, y } = event.target.getStage().getPointerPosition();
  //       const annotationToAdd = {
  //         x: sx,
  //         y: sy,
  //         width: x - sx,
  //         height: y - sy,
  //         key: annotations.length + 1
  //       };
  //       annotations.push(annotationToAdd);
  //       setNewAnnotation([]);
  //       setAnnotations(annotations);
  //     }
  //   };
  
  //   const handleMouseMove = event => {
  //     if (newAnnotation.length === 1) {
  //       const sx = newAnnotation[0].x;
  //       const sy = newAnnotation[0].y;
  //       const { x, y } = event.target.getStage().getPointerPosition();
  //       setNewAnnotation([
  //         {
  //           x: sx,
  //           y: sy,
  //           width: x - sx,
  //           height: y - sy,
  //           key: "0"
  //         }
  //       ]);
  //     }
  //   };
  
  //   const annotationsToDraw = [...annotations, ...newAnnotation];
  //   return (
  //     <Stage
  //       onMouseDown={handleMouseDown}
  //       onMouseUp={handleMouseUp}
  //       onMouseMove={handleMouseMove}
  //       width={900}
  //       height={700}
  //     >
  //       <Layer>
  //         {annotationsToDraw.map(value => {
  //           return (
  //             <Rect
  //               x={value.x}
  //               y={value.y}
  //               width={value.width}
  //               height={value.height}
  //               fill="transparent"
  //               stroke="black"
  //             />
  //           );
  //         })}
  //       </Layer>
  //     </Stage>
  //   );
  // };

  return (
    <>
      <Navbar/>
      <div className="row">
        <div className="col text-center">
          <h2>Mark label </h2>

          <div className="container" >
          <div className="card card-body my-3">
              <Map center={center} zoom={ZOOM_LEVEL} ref={mapRef} >
              < ImageMark />
              <FeatureGroup>
                <EditControl
                  position="topright"
                  onCreated={_onCreate}
                  onEdited={_onEdited}
                  onDeleted={_onDeleted}
                  // onMounted={_onMounted}
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
              <p>ID : ???? </p>
              <p>Date : ??/??/???? </p>
              <p>Class Name </p>
              <input type="text" className="form-control" />
              <p>Who Mark</p>
              <input type="text" className="form-control" />
              <h2></h2>
              <pre className="text-left">{JSON.stringify(mapLayers, 0, 2)}</pre>
              <p>
                  {PointMark}
              </p>
              <h2>
                  {submitButton}
              </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawPic;