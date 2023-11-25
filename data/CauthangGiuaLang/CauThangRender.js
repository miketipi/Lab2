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

    const cauthanggiualangBac4 = new GeoJSONLayer({
        url: "./data/CauthangGiuaLang/Bac4.json"
    });

    const cauthanggiualangBac5 = new GeoJSONLayer({
        url: "./data/CauthangGiuaLang/Bac5.json"
    });

    const cauthanggiualangBac6 = new GeoJSONLayer({
        url: "./data/CauthangGiuaLang/Bac6.json"
    })

    cauthanggiualangBac1.renderer = {
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

    cauthanggiualangBac2.renderer = {
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

    cauthanggiualangBac3.renderer = {
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

    cauthanggiualangBac4.renderer = {
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

    cauthanggiualangBac5.renderer = {
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

    cauthanggiualangBac6.renderer = {
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
    }

    return [cauthanggiualangBac1, cauthanggiualangBac2, cauthanggiualangBac3, cauthanggiualangBac4, cauthanggiualangBac5, cauthanggiualangBac6];
}