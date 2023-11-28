export const MaiLangBacRender = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const roofGeojsonLayer = new GeoJSONLayer({
    url: "./data/MaiLangBac/roof1.geojson.json",
  });
  const roofGeojsonLayer2 = new GeoJSONLayer({
    url: "./data/MaiLangBac/roof2.geojson.json",
  });
  const roofGeojsonLayer3 = new GeoJSONLayer({
    url: "./data/MaiLangBac/roof3.geojson.json",
  });
  const roofGeojsonLayerBigFloor = new GeoJSONLayer({
    url: "./data/MaiLangBac/roof1.bigfloor.geojson.json",
  });
  const roofGeojsonLayerSmallFloor = new GeoJSONLayer({
    url: "./data/MaiLangBac/roof1.smallfloor.geojson.json",
  });
  const roofGeojsonLayer4 = new GeoJSONLayer({
    url: "./data/MaiLangBac/roof4.geojson.json",
  });
  
  roofGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.05,
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
          size: 2.8,
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
          size: 3.5,
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
          size: 2.05,
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
          size: 2.05,
          material: {
            color: "#a9a9a9",
          },
        },
      ],
    },
  };

  roofGeojsonLayer4.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.5,
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
    roofGeojsonLayer4,
  ];
};
