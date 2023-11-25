export const wallNextToStepRender = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const wallNextToStepLeft = new GeoJSONLayer({
        url: "./data/WallNextToStep/wallNextToStepLeft.json"
    });

    const wallNextToStepRight = new GeoJSONLayer({
        url: "./data/WallNextToStep/wallNextToStepRight.json"
    });

    wallNextToStepLeft.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [{
                type: "extrude",
                size: 0.6,
                material: {
                    color: "#838b94"
                },
            }]
        }
    };

    wallNextToStepRight.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [{
                type: "extrude",
                size: 0.6,
                material: {
                    color: "#838b94"
                },
            }]
        }
    };

    return [wallNextToStepLeft, wallNextToStepRight];
}