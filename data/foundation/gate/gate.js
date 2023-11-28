export const gate = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const gate = new GeoJSONLayer({
        url: "./data/foundation/gate/gate.geojson.json"
    });

    gate.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 2.5,
                    material: {
                        color: "#4f1511"
                    },
                }
            ]
        }
    };

    return [
        gate
    ]
}