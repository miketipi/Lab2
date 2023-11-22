import { foundation } from "./data/foundation/foundation.js";
import {middle} from "./data/middle/middle.js"

require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/GeoJSONLayer",
  "esri/layers/SceneLayer",
  "esri/layers/GraphicsLayer",
  "esri/Graphic",
  "esri/request",
], function (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
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


  const map = new Map({
    basemap: "topo-vector",
    layers: [
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

  view.popup.defaultPopupTemplateEnabled = true;
});
