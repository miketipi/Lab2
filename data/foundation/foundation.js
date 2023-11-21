
import { floor_walls } from "./walls/foor_walls.js";

export const foundation = (Map, SceneView, GeoJSONLayer, SceneLayer,
  GraphicsLayer, Graphic, esriRequest) => {

 
  const walls = floor_walls(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)

  return [
    ...walls
  ]
}