import { foundation } from "./data/foundation/foundation.js";
import { centerBuilding } from "./data/centerBuilding/index.js";
import { rightBuilding } from "./data/rightBuilding/rightBuilding.js";
import { leftBuilding } from "./data/leftBuilding/leftBuilding.js";
import { CauThangRender } from "./data/CauthangGiuaLang/CauThangRender.js";
import { middle } from "./data/middle/middle.js";
import { CauThangTraiRender } from "./data/CauthangTrai/CauThangTraiRender.js";
import { CotTruLangRender } from "./data/CotLangBac/CotTruLangRender.js";
import { CauThangPhaiRender } from "./data/CauthangPhai/CauThangPhaiRender.js";
import { MaiLangBacRender } from "./data/MaiLangBac/roof.js";
import { wallNextToStepRender } from "./data/WallNextToStep/wallNextToStepRender.js"
import { BacThemGiuaRender } from "./data/bacthemgiua/BacThemGiuaRender.js";
import { PhanLangRender } from "./data/PhanLang/PhanLang.js";
import { outsideStep } from "./data/outsideStep/outsideStep.js";
require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/GeoJSONLayer",
  "esri/layers/SceneLayer",
  "esri/layers/GraphicsLayer",
  "esri/Graphic",
  "esri/request",
  "esri/geometry/Mesh",
  "esri/geometry/Point"
], function (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest,
  Mesh,
  Point
) {
    const phanLang = PhanLangRender(
        Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
    );
  const foundationArr = foundation(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const bacthemgiua = BacThemGiuaRender(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );
  const middleArr = middle(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );
  const cauthangtrai = CauThangTraiRender(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );
  const cauthangphai = CauThangPhaiRender(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const leftBuildingArr = leftBuilding(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const rightBuildingArr = rightBuilding(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const cauthanggiualang = CauThangRender(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const cotTruLangBac = CotTruLangRender(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const cauthanggiua = CauThangRender(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );
  const MaiLangBac = MaiLangBacRender( 
  Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const wallNextToStep = wallNextToStepRender(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const outsidestep = outsideStep(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const map = new Map({
    basemap: "topo-vector",
    layers: [...foundationArr,
    ...middleArr,
    ...cauthangtrai,
    ...cotTruLangBac,
    ...cauthanggiua,
    ...cauthangphai,
    ...wallNextToStep,
    ...MaiLangBac,
    ...bacthemgiua,
    ...phanLang,
    ...outsidestep
    ], //end layers
  });

  const view = new SceneView({
    container: "viewDiv",
    map: map,
    camera: {
      position: [105.83454927674805, 21.036947054908556, 500],
      heading: 0,
      tilt: 0,
    },
  });
  const cotco1 = new Point({
    x: 105.835036769,
    y: 21.036665335,
    z: 0
});

Mesh.createFromGLTF(cotco1, "./model/FlagVN.glb")
    .then(function (geometry) {
        // increase it a factor of 3
        geometry.scale(0.5, { origin: cotco1 });
        // rotate it by 90 degrees around the z axis

        geometry.rotate(0, 0, 115);
        // add it to a graphic
        const graphic = new Graphic({
            geometry,
            symbol: {
                type: "mesh-3d", // autocasts as new MeshSymbol3D()
                symbolLayers: [{
                    type: "fill", // autocasts as new FillSymbol3DLayer()
                    material: {

                    },
                    size: 1000
                }]
            }
        });

        view.graphics.add(graphic);
    })
    .catch(console.error);
    const cay1 = new Point({
      x: 105.834828,
      y: 21.036635,
      z: 0.4
  });
  
  Mesh.createFromGLTF(cay1, "./model/small_tree.glb")
      .then(function (geometry) {
          // increase it a factor of 3
          geometry.scale(0.2, { origin: cay1 });
          // rotate it by 90 degrees around the z axis
  
          geometry.rotate(0, 0, 80);
          // add it to a graphic
          const graphic = new Graphic({
              geometry,
              symbol: {
                  type: "mesh-3d", // autocasts as new MeshSymbol3D()
                  symbolLayers: [{
                      type: "fill", // autocasts as new FillSymbol3DLayer()
                      material: {
  
                      },
                      size: 1000
                  }]
              }
          });
  
          view.graphics.add(graphic);
      })
      .catch(console.error);

      const cay2 = new Point({
        x: 105.834856,
        y: 21.036758,
        z: 0.4
    });
    
    Mesh.createFromGLTF(cay2, "./model/short_tree.glb")
        .then(function (geometry) {
            // increase it a factor of 3
            geometry.scale(0.2, { origin: cay2 });
            // rotate it by 90 degrees around the z axis
    
            geometry.rotate(0, 0, 80);
            // add it to a graphic
            const graphic = new Graphic({
                geometry,
                symbol: {
                    type: "mesh-3d", // autocasts as new MeshSymbol3D()
                    symbolLayers: [{
                        type: "fill", // autocasts as new FillSymbol3DLayer()
                        material: {
    
                        },
                        size: 0.05
                    }]
                }
            });
    
            view.graphics.add(graphic);
        })
        .catch(console.error);
        const cay3 = new Point({
          x: 105.834835,
          y: 21.036658,
          z: 0.4
      });
      
      Mesh.createFromGLTF(cay3, "./model/short_tree.glb")
          .then(function (geometry) {
              // increase it a factor of 3
              geometry.scale(0.2, { origin: cay3 });
              // rotate it by 90 degrees around the z axis
      
              geometry.rotate(0, 0, 80);
              // add it to a graphic
              const graphic = new Graphic({
                  geometry,
                  symbol: {
                      type: "mesh-3d", // autocasts as new MeshSymbol3D()
                      symbolLayers: [{
                          type: "fill", // autocasts as new FillSymbol3DLayer()
                          material: {
      
                          },
                          size: 0.05
                      }]
                  }
              });
      
              view.graphics.add(graphic);
          })
          .catch(console.error);
          const cay5 = new Point({
            x: 105.834864,
            y: 21.036561,
            z: 0
        });
        
        Mesh.createFromGLTF(cay5, "./model/small_tree.glb")
            .then(function (geometry) {
                // increase it a factor of 3
                geometry.scale(0.2, { origin: cay5 });
                // rotate it by 90 degrees around the z axis
        
                geometry.rotate(0, 0, 80);
                // add it to a graphic
                const graphic = new Graphic({
                    geometry,
                    symbol: {
                        type: "mesh-3d", // autocasts as new MeshSymbol3D()
                        symbolLayers: [{
                            type: "fill", // autocasts as new FillSymbol3DLayer()
                            material: {
        
                            },
                            size: 0.05
                        }]
                    }
                });
        
                view.graphics.add(graphic);
            })
            .catch(console.error);

            const cay6 = new Point({
              x: 105.834856,
              y: 21.036523,
              z: 0
          });
          
          Mesh.createFromGLTF(cay6, "./model/small_tree.glb")
              .then(function (geometry) {
                  // increase it a factor of 3
                  geometry.scale(0.2, { origin: cay6 });
                  // rotate it by 90 degrees around the z axis
          
                  geometry.rotate(0, 0, 80);
                  // add it to a graphic
                  const graphic = new Graphic({
                      geometry,
                      symbol: {
                          type: "mesh-3d", // autocasts as new MeshSymbol3D()
                          symbolLayers: [{
                              type: "fill", // autocasts as new FillSymbol3DLayer()
                              material: {
          
                              },
                              size: 0.05
                          }]
                      }
                  });
          
                  view.graphics.add(graphic);
              })
              .catch(console.error);

              const cay7 = new Point({
                x: 105.834848,
                y: 21.036482,
                z: 0
            });
            
            Mesh.createFromGLTF(cay7, "./model/small_tree.glb")
                .then(function (geometry) {
                    // increase it a factor of 3
                    geometry.scale(0.2, { origin: cay7 });
                    // rotate it by 90 degrees around the z axis
            
                    geometry.rotate(0, 0, 80);
                    // add it to a graphic
                    const graphic = new Graphic({
                        geometry,
                        symbol: {
                            type: "mesh-3d", // autocasts as new MeshSymbol3D()
                            symbolLayers: [{
                                type: "fill", // autocasts as new FillSymbol3DLayer()
                                material: {
            
                                },
                                size: 0.05
                            }]
                        }
                    });
            
                    view.graphics.add(graphic);
                })
                .catch(console.error);

                const cay8 = new Point({
                  x: 105.834922,
                  y: 21.036834,
                  z: 0
              });
              
              Mesh.createFromGLTF(cay8, "./model/small_tree.glb")
                  .then(function (geometry) {
                      // increase it a factor of 3
                      geometry.scale(0.2, { origin: cay8 });
                      // rotate it by 90 degrees around the z axis
              
                      geometry.rotate(0, 0, 80);
                      // add it to a graphic
                      const graphic = new Graphic({
                          geometry,
                          symbol: {
                              type: "mesh-3d", // autocasts as new MeshSymbol3D()
                              symbolLayers: [{
                                  type: "fill", // autocasts as new FillSymbol3DLayer()
                                  material: {
              
                                  },
                                  size: 0.05
                              }]
                          }
                      });
              
                      view.graphics.add(graphic);
                  })
                  .catch(console.error);

                  const cay9 = new Point({
                    x: 105.834931,
                    y: 21.036872,
                    z: 0
                });
                
                Mesh.createFromGLTF(cay9, "./model/small_tree.glb")
                    .then(function (geometry) {
                        // increase it a factor of 3
                        geometry.scale(0.2, { origin: cay9 });
                        // rotate it by 90 degrees around the z axis
                
                        geometry.rotate(0, 0, 80);
                        // add it to a graphic
                        const graphic = new Graphic({
                            geometry,
                            symbol: {
                                type: "mesh-3d", // autocasts as new MeshSymbol3D()
                                symbolLayers: [{
                                    type: "fill", // autocasts as new FillSymbol3DLayer()
                                    material: {
                
                                    },
                                    size: 0.05
                                }]
                            }
                        });
                
                        view.graphics.add(graphic);
                    })
                    .catch(console.error);

                    const cay10 = new Point({
                      x: 105.834938,
                      y: 21.036910,
                      z: 0
                  });
                  
                  Mesh.createFromGLTF(cay10, "./model/small_tree.glb")
                      .then(function (geometry) {
                          // increase it a factor of 3
                          geometry.scale(0.2, { origin: cay10 });
                          // rotate it by 90 degrees around the z axis
                  
                          geometry.rotate(0, 0, 80);
                          // add it to a graphic
                          const graphic = new Graphic({
                              geometry,
                              symbol: {
                                  type: "mesh-3d", // autocasts as new MeshSymbol3D()
                                  symbolLayers: [{
                                      type: "fill", // autocasts as new FillSymbol3DLayer()
                                      material: {
                  
                                      },
                                      size: 0.05
                                  }]
                              }
                          });
                  
                          view.graphics.add(graphic);
                      })
                      .catch(console.error);

                      const cay4 = new Point({
                        x: 105.834859,
                        y: 21.036782,
                        z: 0.4
                    });
                    
                    Mesh.createFromGLTF(cay4, "./model/small_tree.glb")
                        .then(function (geometry) {
                            // increase it a factor of 3
                            geometry.scale(0.2, { origin: cay4 });
                            // rotate it by 90 degrees around the z axis
                    
                            geometry.rotate(0, 0, 80);
                            // add it to a graphic
                            const graphic = new Graphic({
                                geometry,
                                symbol: {
                                    type: "mesh-3d", // autocasts as new MeshSymbol3D()
                                    symbolLayers: [{
                                        type: "fill", // autocasts as new FillSymbol3DLayer()
                                        material: {
                    
                                        },
                                        size: 0.05
                                    }]
                                }
                            });
                    
                            view.graphics.add(graphic);
                        })
                        .catch(console.error);
  view.popup.defaultPopupTemplateEnabled = true;
});
