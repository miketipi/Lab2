export const CauThangPhaiRender = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const wall1 = new GeoJSONLayer({
    url: "./data/CauthangPhai/wall1.json",
  });
  const wall2 = new GeoJSONLayer({
    url: "./data/CauthangPhai/wall2.json",
  });
  const wall3 = new GeoJSONLayer({
    url: "./data/CauthangPhai/wall3.json",
  });
  const wall4 = new GeoJSONLayer({
    url: "./data/CauthangPhai/wall4.json",
  });
  const wall5 = new GeoJSONLayer({
    url: "./data/CauthangPhai/wall5.json",
  });
  const wall6 = new GeoJSONLayer({
    url: "./data/CauthangPhai/wall6.json",
  });
  const bacthangthang1 = new GeoJSONLayer({
    url: "./data/CauthangPhai/bacthangthang1.json",
  });
  const bacthangthang2 = new GeoJSONLayer({
    url: "./data/CauthangPhai/bacthangthang2.json",
  });
  const bacthangthang3 = new GeoJSONLayer({
    url: "./data/CauthangPhai/bacthangthang3.json",
  });
  const bacthangthang4 = new GeoJSONLayer({
    url: "./data/CauthangPhai/bacthangthang4.json",
  });
  const bacthangthang5 = new GeoJSONLayer({
    url: "./data/CauthangPhai/bacthangthang5.json",
  });
  const bacthangthang6 = new GeoJSONLayer({
    url: "./data/CauthangPhai/bacthangthang6.json",
  });
  const bacthangthang7 = new GeoJSONLayer({
    url: "./data/CauthangPhai/bacthangthang7.json",
  });
  const bacthangthang8 = new GeoJSONLayer({
    url: "./data/CauthangPhai/bacthangthang8.json",
  });
  const bacthangthang9 = new GeoJSONLayer({
    url: "./data/CauthangPhai/bacthangthang9.json",
  });
  const bacthangngang1 = new GeoJSONLayer({
    url: "./data/CauthangPhai/bacthangngang1.json",
  });
  const bacthangngang2 = new GeoJSONLayer({
    url: "./data/CauthangPhai/bacthangngang2.json",
  });
  wall1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 4,
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };

  wall2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3,
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  wall3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3,
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  wall4.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  wall5.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1,
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  wall6.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1,
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  bacthangthang1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.7,
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  bacthangthang2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.7,
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  bacthangthang3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.7,
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  bacthangthang4.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.7,
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  bacthangthang5.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.7,
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  bacthangthang6.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.7,
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  bacthangthang7.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.7,
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  bacthangthang8.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.7,
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  bacthangthang9.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.7,
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  bacthangngang1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.6,
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  bacthangngang2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.6,
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };

  return [
    wall1,
    wall2,
    wall3,
    wall4,
    wall5,
    wall6,
    bacthangthang1,
    bacthangthang2,
    bacthangthang3,
    bacthangthang4,
    bacthangthang5,
    bacthangthang6,
    bacthangthang7,
    bacthangthang8,
    bacthangthang9,
    bacthangngang1,
    bacthangngang2
  ];
};
