import { foundation } from "./data/foundation/foundation.js";
import { centerBuilding } from "./data/centerBuilding/index.js";
import { rightBuilding } from "./data/rightBuilding/rightBuilding.js";
import { leftBuilding } from "./data/leftBuilding/leftBuilding.js";
import { CauThangRender } from "./data/CauthangGiuaLang/CauThangRender.js";
import { CotTruLangRender } from "./data/CotLangBac/CotTruLangRender.js";
import { middle } from "./data/middle/middle.js";
require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/GeoJSONLayer",
  "esri/layers/SceneLayer",
  "esri/layers/GraphicsLayer",
  "esri/Graphic",
  "esri/request",
  "esri/geometry/Mesh",
  "esri/geometry/Point"
], function (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest,
  Mesh,
  Point
) {
  const foundationArr = foundation(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const middleArr = middle(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const leftBuildingArr = leftBuilding(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const rightBuildingArr = rightBuilding(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const cauthanggiualang = CauThangRender(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const cotTruLangBac = CotTruLangRender(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const map = new Map({
    basemap: "topo-vector",
    layers: [
      ...cauthanggiualang,
      ...cotTruLangBac,
      ...foundationArr,
      ...middleArr
    ], //end layers
  });

  const view = new SceneView({
    container: "viewDiv",
    map: map,
    camera: {
      position: [ 105.83454927674805,21.036947054908556, 500],
      heading: 0,
      tilt: 0,
    },
  });
  const cotco1 = new Point({
    x: 105.835036769,
    y: 21.036665335,
    z: 0
});

Mesh.createFromGLTF(cotco1, "./model/FlagVN.glb")
    .then(function (geometry) {
        // increase it a factor of 3
        geometry.scale(0.5, { origin: cotco1 });
        // rotate it by 90 degrees around the z axis

        geometry.rotate(0, 0, 115);
        // add it to a graphic
        const graphic = new Graphic({
            geometry,
            symbol: {
                type: "mesh-3d", // autocasts as new MeshSymbol3D()
                symbolLayers: [{
                    type: "fill", // autocasts as new FillSymbol3DLayer()
                    material: {

                    },
                    size: 1000
                }]
            }
        });

        view.graphics.add(graphic);
    })
    .catch(console.error);
    const cotco2 = new Point({
      x: 105.839036769,
      y: 21.036665335,
      z: 0
  });
  
  Mesh.createFromGLTF(cotco2, "./model/ap.glb")
      .then(function (geometry) {
          // increase it a factor of 3
          geometry.scale(0.5, { origin: cotco1 });
          // rotate it by 90 degrees around the z axis
  
          geometry.rotate(0, 0, 115);
          // add it to a graphic
          const graphic = new Graphic({
              geometry,
              symbol: {
                  type: "mesh-3d", // autocasts as new MeshSymbol3D()
                  symbolLayers: [{
                      type: "fill", // autocasts as new FillSymbol3DLayer()
                      material: {
  
                      },
                      size: 1000
                  }]
              }
          });
  
          view.graphics.add(graphic);
      })
      .catch(console.error);
  view.popup.defaultPopupTemplateEnabled = true;
});
