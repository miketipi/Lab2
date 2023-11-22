export const CauThangTraiRender = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const cauthangtrailangBac1 = new GeoJSONLayer({
    url: "./data/CauthangTrai/bac1.json",
  });
  const cauthangtrailangBac2 = new GeoJSONLayer({
    url: "./data/CauthangTrai/bac2.json",
  });
  const cauthangtrailangBac3 = new GeoJSONLayer({
    url: "./data/CauthangTrai/bac3.json",
  });
  const cauthangtrailangBac4 = new GeoJSONLayer({
    url: "./data/CauthangTrai/bac4.json",
  });
  const cauthangtrailangBac5 = new GeoJSONLayer({
    url: "./data/CauthangTrai/bac5.json",
  });
  const cauthangtrailangBac6 = new GeoJSONLayer({
    url: "./data/CauthangTrai/bac6.json",
  });
  const cauthangtrailangBac7 = new GeoJSONLayer({
    url: "./data/CauthangTrai/bac7.json",
  });
  const cauthangtrailangBac8 = new GeoJSONLayer({
    url: "./data/CauthangTrai/bac8.json",
  });

  cauthangtrailangBac1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.42, //0.42
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  cauthangtrailangBac2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.42, //0.42
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  cauthangtrailangBac3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.42, //0.42
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  cauthangtrailangBac4.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.42, //0.42
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  cauthangtrailangBac5.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.42, //0.42
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  cauthangtrailangBac6.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.42, //0.42
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  cauthangtrailangBac7.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.42, //0.42
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  cauthangtrailangBac8.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1, //0.42
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };

  return [
    cauthangtrailangBac1,
    cauthangtrailangBac2,
    cauthangtrailangBac3,
    cauthangtrailangBac4,
    cauthangtrailangBac5,
    cauthangtrailangBac6,
    cauthangtrailangBac7,
    cauthangtrailangBac8,
  ];
};
