export const wall = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const backWall = new GeoJSONLayer({
        url: "./data/foundation/walls/wall/floor.back.wall.geojson.json"
    });

    const frontWall = new GeoJSONLayer({
        url: "./data/foundation/walls/wall/floor.front.wall.geojson.json"
    });

    const leftWall = new GeoJSONLayer({
        url: "./data/foundation/walls/wall/floor.left.wall.geojson.json"
    });

    const leftWall2 = new GeoJSONLayer({
        url: "./data/foundation/walls/wall/floor.left.wall.2.geojson.json"
    });

    const rightWall = new GeoJSONLayer({
        url: "./data/foundation/walls/wall/floor.right.wall.geojson.json"
    });

    const rightWall2 = new GeoJSONLayer({
        url: "./data/foundation/walls/wall/floor.right.wall.2.geojson.json"
    });



    backWall.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4,
                    material: {
                        color: "#313036",
                        
                    },
                }
            ]
        },
    };

    frontWall.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4,
                    material: {
                        color: "#313036"
                    },
                }
            ]
        }
    };

    rightWall.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4,
                    material: {
                        color: "#313036"
                    },
                }
            ]
        }
    };

    leftWall.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4,
                    material: {
                        color: "#313036"
                    },
                }
            ]
        }
    };

    leftWall2.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4,
                    material: {
                        color: "#313036"
                    },
                }
            ]
        }
    };

    rightWall2.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4,
                    material: {
                        color: "#313036"
                    },
                }
            ]
        }
    };

    return [
        backWall,
        frontWall, 
        leftWall, 
        rightWall,
        rightWall2,
        leftWall2
    ]
}