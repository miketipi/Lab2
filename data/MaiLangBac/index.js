export const roof_RB = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const roofGeojsonLayer = new GeoJSONLayer({
    url: "./data/rightBuilding/firstFloor/roof/roof1.geojson.json",
  });

  roofGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "#ab864a",
          },
        },
      ],
    },
  };
  const roofGeojsonLayer2 = new GeoJSONLayer({
    url: "./data/rightBuilding/firstFloor/roof/roof2.geojson.json",
  });
  const roofGeojsonLayer3 = new GeoJSONLayer({
    url: "./data/rightBuilding/firstFloor/roof/roof3.geojson.json",
  });
  const roofGeojsonLayerBigFloor = new GeoJSONLayer({
    url: "./data/rightBuilding/firstFloor/roof/roof1.bigfloor.geojson.json",
  });
  const roofGeojsonLayerSmallFloor = new GeoJSONLayer({
    url: "./data/rightBuilding/firstFloor/roof/roof1.smallfloor.geojson.json",
  });
  
  roofGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "#a9a9a9",
          },
        },
      ],
    },
  };
  roofGeojsonLayer2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.8,
          material: {
            color: "#a9a9a9",
          },
        },
      ],
    },
  };
  roofGeojsonLayer3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "#a9a9a9",
          },
        },
      ],
    },
  };

  roofGeojsonLayerBigFloor.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "#a9a9a9",
          },
        },
      ],
    },
  };

  roofGeojsonLayerSmallFloor.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "#a9a9a9",
          },
        },
      ],
    },
  };

  return [
    roofGeojsonLayer,
    roofGeojsonLayer2,
    roofGeojsonLayer3,
    roofGeojsonLayerBigFloor,
    roofGeojsonLayerSmallFloor,
  ];
};
