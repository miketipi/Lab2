export const BacThemGiuaRender = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const bacthemgiua = new GeoJSONLayer({
        url: "./data/bacthemgiua/BacThemGiua.json"
    });

    
    bacthemgiua.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [{
                type: "extrude",
                size: 0.1,
                material: {
                    color: "#838b94"
                },
            }]
        }
    };


    return [bacthemgiua];
}