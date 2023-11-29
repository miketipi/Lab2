export const first_wall = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const firstWall = new GeoJSONLayer({
        url: "./data/middle/wall/first_wall/first.middle.geojson.json"
    });

    firstWall.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 2,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };

    return [
        firstWall
    ]
}