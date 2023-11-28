import { leftStep } from "./leftStep/leftStep.js";

export const outsideStep = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const leftstep = leftStep(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest);

    return [
        ...leftstep
    ];
}
