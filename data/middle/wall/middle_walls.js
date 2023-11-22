import { first_wall } from "./first_wall/first_wall.js"
import { second_wall } from "./second_wall/second_wall.js";

export const middle_walls = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const firstWall = first_wall(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest);

    const secondWall = second_wall(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest);

    return [
        ...firstWall,
        ...secondWall
    ];
}
