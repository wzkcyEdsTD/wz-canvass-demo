/*
 * @Author: eds
 * @Date: 2020-07-10 09:24:39
 * @LastEditTime: 2020-07-11 16:16:40
 * @LastEditors: eds
 * @Description:
 * @FilePath: \wz-canvass-demo\src\components\Projects\Arcgis\ArcgisScene.ts
 */
import { POINT, ROAD, PROJECT_POLYGON } from "@/config";
/**
 * 项目地图初始化
 * @param {JSX.ElementClass} context
 * @returns {Promise<boolean>}
 */
function doMassMap(context: JSX.ElementClass): Promise<boolean> {
  return new Promise(resolve => {
    const { $ARCGIS_API, map } = context as any;
    const { MapImageLayer, FeatureLayer } = $ARCGIS_API;
    map.add(
      new FeatureLayer({
        id: "ROAD",
        url: ROAD,
        elevationInfo: {
          mode: "relative-to-scene",
        },
      })
    );
    resolve(true);
  });
}

/**
 * 叠加设施点、地面
 * @param {*} map
 * @param {*} FeatureLayer
 */
function forceToArea(map: any, FeatureLayer: any) {
  !map.findLayerById("PROJECT_POLYGON") &&
    map.add(
      new FeatureLayer({
        id: "PROJECT_POLYGON",
        url: PROJECT_POLYGON,
        elevationInfo: {
          mode: "absolute-height",
          featureExpressionInfo: {
            expression: 12,
          },
          unit: "meters",
        },
      })
    );
  !map.findLayerById("POINT") &&
    map.add(
      new FeatureLayer({
        id: "POINT",
        url: POINT,
        elevationInfo: {
          mode: "relative-to-scene",
          featureExpressionInfo: {
            expression: 14,
          },
          unit: "meters",
        },
        outFields: ["*"],
        featureReduction: { type: "selection" },
        labelingInfo: [
          {
            labelExpressionInfo: { value: "{名称}" },
            symbol: {
              type: "label-3d",
              symbolLayers: [
                {
                  type: "text",
                  material: { color: "white" },
                  halo: { size: 1, color: [50, 50, 50] },
                  size: 10,
                },
              ],
            },
          },
        ],
      })
    );
}

/**
 * 跳转
 * @param {JSX.ElementClass} context
 * @param {number[]} geometry
 */
function cameraToMap(context: JSX.ElementClass, [x, y]: number[]) {
  if (!x || !y) return;
  const { $ARCGIS_API, view, map } = context as any;
  const { FeatureLayer } = $ARCGIS_API;
  view.goTo({
    position: { x, y: y - 0.008, z: 400 },
    heading: 0,
    tilt: 70,
  });
  forceToArea(map, FeatureLayer);
}

export { doMassMap, cameraToMap };
