import { foundation } from "./data/foundation/foundation.js";
<<<<<<< HEAD
import { centerBuilding } from "./data/centerBuilding/index.js";
import { rightBuilding } from "./data/rightBuilding/rightBuilding.js";
import { leftBuilding } from "./data/leftBuilding/leftBuilding.js";
import { CauThangRender } from "./data/CauthangGiuaLang/CauThangRender.js";
import { CotTruLangRender } from "./data/CotLangBac/CotTruLangRender.js";
=======
import {middle} from "./data/middle/middle.js"
>>>>>>> 7a47e376d28b261d236a58d263b6107fbe3d5864

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

<<<<<<< HEAD
  const centerBuildingArr = centerBuilding(
=======
  const middleArr = middle(
>>>>>>> 7a47e376d28b261d236a58d263b6107fbe3d5864
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

<<<<<<< HEAD
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
=======
>>>>>>> 7a47e376d28b261d236a58d263b6107fbe3d5864

  const map = new Map({
    basemap: "topo-vector",
    layers: [
<<<<<<< HEAD
      ...cauthanggiualang,
      ...cotTruLangBac,
=======
      ...foundationArr,
      ...middleArr
>>>>>>> 7a47e376d28b261d236a58d263b6107fbe3d5864
    ], //end layers
  });

  const view = new SceneView({
    container: "viewDiv",
    map: map,
    camera: {
<<<<<<< HEAD
      position: [105.834850054, 21.036619341, 500],
=======
      position: [ 105.83454927674805,21.036947054908556, 500],
>>>>>>> 7a47e376d28b261d236a58d263b6107fbe3d5864
      heading: 0,
      tilt: 0,
    },
  });

  view.popup.defaultPopupTemplateEnabled = true;
});
