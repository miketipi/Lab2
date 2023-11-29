export const second_wall = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const secondWall = new GeoJSONLayer({
        url: "./data/middle/wall/second_wall/second.middle.geojson.json"
    });

    secondWall.renderer = {
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

    return [
        secondWall
    ]
}