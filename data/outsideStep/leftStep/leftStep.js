export const leftStep = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const leftstep1 = new GeoJSONLayer({
        url: "./data/outsideStep/leftStep/leftStep1.geojson.json"
    });

    leftstep1.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 1,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };

    const leftstep2 = new GeoJSONLayer({
        url: "./data/outsideStep/leftStep/leftStep2.geojson.json"
    });

    leftstep2.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.5,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };

    const leftstep3 = new GeoJSONLayer({
        url: "./data/outsideStep/leftStep/leftStep3.geojson.json"
    });

    leftstep3.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.5,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };

    const leftstep4 = new GeoJSONLayer({
        url: "./data/outsideStep/leftStep/leftStep4.geojson.json"
    });

    leftstep4.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.5,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };

    const leftstep5 = new GeoJSONLayer({
        url: "./data/outsideStep/leftStep/leftStep5.geojson.json"
    });

    leftstep5.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.5,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };

    const leftstep6 = new GeoJSONLayer({
        url: "./data/outsideStep/leftStep/leftStep6.geojson.json"
    });

    leftstep6.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.5,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };

    const leftstep7 = new GeoJSONLayer({
        url: "./data/outsideStep/leftStep/leftStep7.geojson.json"
    });

    leftstep7.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.5,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };

    const leftstep8 = new GeoJSONLayer({
        url: "./data/outsideStep/leftStep/leftStep8.geojson.json"
    });

    leftstep8.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 1.5,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };

    return [
        leftstep1,
        leftstep2,
        leftstep3,
        leftstep4,
        leftstep5,
        leftstep6,
        leftstep7,
        leftstep8,
    ]
}