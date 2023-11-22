export const CauThangRender = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const cauthanggiualangBac1 = new GeoJSONLayer({
        url: "./data/CauthangGiuaLang/Bac1.json"
    });

    const cauthanggiualangBac2 = new GeoJSONLayer({
        url: "./data/CauthangGiuaLang/Bac2.json"
    });

    const cauthanggiualangBac3 = new GeoJSONLayer({
        url: "./data/CauthangGiuaLang/Bac3.json"
    });

    cauthanggiualangBac1.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [{
                type: "extrude",
                size: 0.22,
                material: {
                    color: "#838b94"
                },
            }]
        }
    };

    cauthanggiualangBac2.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [{
                type: "extrude",
                size: 0.22,
                material: {
                    color: "#838b94"
                },
            }]
        }
    };

    cauthanggiualangBac3.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [{
                type: "extrude",
                size: 0.22,
                material: {
                    color: "#838b94"
                },
            }]
        }
    };

    return [cauthanggiualangBac1, cauthanggiualangBac2, cauthanggiualangBac3];
}