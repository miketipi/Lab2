export const PhanLangRender = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const phanlang = new GeoJSONLayer({
        url: "./data/PhanLang/phanlang.geojson.json"
    })

    phanlang.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [{
                type: "extrude",
                size: 5.2,
                material: {
                    color: "#4f1511"
                },
            }]
        }
    };

    

    return [phanlang];
}