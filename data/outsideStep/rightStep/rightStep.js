export const rightStep = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const rightstep1 = new GeoJSONLayer({
        url: "./data/outsideStep/rightStep/rightStep1.geojson.json"
    });

    rightstep1.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 1,
                    material: {
                        color: "#656e73"
                    },
                }
            ]
        }
    };

    const rightstep2 = new GeoJSONLayer({
        url: "./data/outsideStep/rightStep/rightStep2.geojson.json"
    });

    rightstep2.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.5,
                    material: {
                        color: "#656e73"
                    },
                }
            ]
        }
    };

    const rightstep3 = new GeoJSONLayer({
        url: "./data/outsideStep/rightStep/rightStep3.geojson.json"
    });

    rightstep3.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.5,
                    material: {
                        color: "#656e73"
                    },
                }
            ]
        }
    };

    const rightstep4 = new GeoJSONLayer({
        url: "./data/outsideStep/rightStep/rightStep4.geojson.json"
    });

    rightstep4.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.5,
                    material: {
                        color: "#656e73"
                    },
                }
            ]
        }
    };

    const rightstep5 = new GeoJSONLayer({
        url: "./data/outsideStep/rightStep/rightStep5.geojson.json"
    });

    rightstep5.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.5,
                    material: {
                        color: "#656e73"
                    },
                }
            ]
        }
    };

    const rightstep6 = new GeoJSONLayer({
        url: "./data/outsideStep/rightStep/rightStep6.geojson.json"
    });

    rightstep6.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.5,
                    material: {
                        color: "#656e73"
                    },
                }
            ]
        }
    };

    const rightstep7 = new GeoJSONLayer({
        url: "./data/outsideStep/rightStep/rightStep7.geojson.json"
    });

    rightstep7.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.5,
                    material: {
                        color: "#656e73"
                    },
                }
            ]
        }
    };

    const rightstep8 = new GeoJSONLayer({
        url: "./data/outsideStep/rightStep/rightStep8.geojson.json"
    });

    rightstep8.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 1.5,
                    material: {
                        color: "#656e73"
                    },
                }
            ]
        }
    };

    return [
        rightstep1,
        rightstep2,
        rightstep3,
        rightstep4,
        rightstep5,
        rightstep6,
        rightstep7,
        rightstep8,
    ]
}