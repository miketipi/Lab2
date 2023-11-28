export const wall = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const backWall = new GeoJSONLayer({
        url: "./data/foundation/walls/wall/floor.back.wall.geojson.json"
    });

    const frontWall1 = new GeoJSONLayer({
        url: "./data/foundation/walls/wall/floor.front.wall.part1.geojson.json"
    });
    const frontWall2 = new GeoJSONLayer({
        url: "./data/foundation/walls/wall/floor.front.wall.part2.geojson.json"
    })

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

    const topWall = new GeoJSONLayer({
        url: "./data/foundation/walls/wall/floor.top.wall.geojson.json"
    });



    topWall.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 1.5,
                    material: {
                        color: "#9da1a6",
                        
                    },
                }
            ]
        },
    };
    backWall.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4,
                    material: {
                        color: "#9da1a6",
                        
                    },
                }
            ]
        },
    };

    frontWall1.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4,
                    material: {
                        color: "#9da1a6"
                    },
                }
            ]
        }
    };
    frontWall2.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4,
                    material: {
                        color: "#9da1a6"
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
                        color: "#9da1a6"
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
                        color: "#9da1a6"
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
                        color: "#9da1a6"
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
                        color: "#9da1a6"
                    },
                }
            ]
        }
    };

    return [
        backWall,
        frontWall1, 
        frontWall2,
        leftWall, 
        rightWall,
        rightWall2,
        leftWall2,
        topWall
    ]
}