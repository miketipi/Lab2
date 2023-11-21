export const top_wall = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const topWallPart1 = new GeoJSONLayer({
        url: "./data/foundation/walls/top_wall/floor.top.wall.part1.geojson.json"
    });

    topWallPart1.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 3,
                    material: {
                        color: "#756e7a"
                    },
                }
            ]
        }
    };

    return [
        topWallPart1
    ]
}