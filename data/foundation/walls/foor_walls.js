import { top_wall } from "./top_wall/top_wall.js";
import { wall } from "./wall/wall.js";

export const floor_walls = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const topWall = top_wall(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest);

    const wallsResult = wall(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest);

    return [
        ...topWall,
        ...wallsResult
    ];
}
