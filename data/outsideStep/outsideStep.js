import { leftStep } from "./leftStep/leftStep.js";
import { rightStep } from "./rightStep/rightStep.js";

export const outsideStep = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const leftstep = leftStep(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest);

    const rightstep = rightStep(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest);

    return [
        ...leftstep,
        ...rightstep
    ];
}
