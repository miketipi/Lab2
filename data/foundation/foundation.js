<<<<<<< HEAD
import { center_entry } from "./doors/center_entry/center_entry.js";
import { left_entry } from "./doors/left_entry/left_entry.js";
import { right_entry } from "./doors/right_entry/right_entry.js";
import { left_step } from "./step/left_step/left_step.js";
import {gate_left_wall} from "./doors/gate_left/gate_left.js"
import {gate_right_wall} from "./doors/gate_right/gate_right.js"
import {gate_back_right_wall} from "./doors/gate_back_right/gate_back_right.js"
import {gate_back_left_wall} from "./doors/gate_back_left/gate_back_left.js"
import { right_step } from "./step/right_step/right_step.js";
import { floor_walls } from "./walls/foor_walls.js";
import { floor_rails } from "./rails/floor_rails.js";
=======

import { floor_walls } from "./walls/foor_walls.js";
>>>>>>> 7a47e376d28b261d236a58d263b6107fbe3d5864

export const foundation = (Map, SceneView, GeoJSONLayer, SceneLayer,
  GraphicsLayer, Graphic, esriRequest) => {

<<<<<<< HEAD
  const centerEntry = center_entry(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)
  const leftEntry = left_entry(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)
  const rightEntry = right_entry(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)
  const leftStep = left_step(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)
  const rightStep = right_step(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)
  const walls = floor_walls(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)
  const rails = floor_rails(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)
  const gateLeftWall = gate_left_wall(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)
  const gateRightWall = gate_right_wall(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)
  const gateBackRightWall = gate_back_right_wall(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)
  const gateBackLeftWall = gate_back_left_wall(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)

  return [
    ...centerEntry,
    ...leftEntry,
    ...rightEntry,
    ...leftStep,
    ...rightStep,
    ...walls,
    ...rails,
    ...gateLeftWall,
    ...gateRightWall,
    ...gateBackRightWall,
    ...gateBackLeftWall
=======
 
  const walls = floor_walls(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)

  return [
    ...walls
>>>>>>> 7a47e376d28b261d236a58d263b6107fbe3d5864
  ]
}