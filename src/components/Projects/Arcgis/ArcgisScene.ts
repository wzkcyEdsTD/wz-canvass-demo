/*
 * @Author: eds
 * @Date: 2020-07-10 09:24:39
 * @LastEditTime: 2020-07-15 15:21:49
 * @LastEditors: eds
 * @Description:
 * @FilePath: \wz-canvass-demo\src\components\Projects\Arcgis\ArcgisScene.ts
 */
import { POINT, PROJECTS, ROAD, CAMERA, PROJECT_POLYGON } from "@/config";
const pointOption: object = {
  elevationInfo: {
    mode: "relative-to-scene",
    featureExpressionInfo: { expression: 14 },
    unit: "meters",
  },
  outFields: ["*"],
  featureReduction: { type: "selection" },
};
/**
 * 项目地图初始化
 * @param {JSX.ElementClass} context
 * @returns {Promise<boolean>}
 */
function doMassMap(context: JSX.ElementClass): Promise<boolean> {
  return new Promise(resolve => {
    const { $ARCGIS_API, map, view } = context as any;
    const { FeatureLayer } = $ARCGIS_API;
    map.add(
      new FeatureLayer({
        id: "PROJECTS",
        url: PROJECTS,
        elevationInfo: {
          mode: "relative-to-scene",
        },
        definitionExpression: "类型1 = '项目点'",
        ...pointOption,
        labelingInfo: [
          {
            labelExpressionInfo: { value: "{名称}" },
            symbol: {
              type: "label-3d",
              symbolLayers: [
                {
                  type: "text",
                  material: { color: "red" },
                  halo: { size: 2, color: [255, 255, 255] },
                  size: 16,
                },
              ],
            },
          },
        ],
      })
    );
    view.goTo(CAMERA);
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
  !map.findLayerById("ROAD")
    ? map.add(
        new FeatureLayer({
          id: "ROAD",
          url: ROAD,
          elevationInfo: {
            mode: "relative-to-scene",
          },
        })
      )
    : (map.findLayerById("ROAD").visible = true);
  !map.findLayerById("POINT")
    ? map.add(
        new FeatureLayer({
          id: "POINT",
          url: POINT,
          definitionExpression: "类型1 <> '项目点'",
          ...pointOption,
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
                    size: 12,
                  },
                ],
              },
            },
          ],
        })
      )
    : (map.findLayerById("POINT").visible = true);
}

/**
 *
 * 返回首页
 * @param {JSX.ElementClass} context
 */
function cameraBackMap(context: JSX.ElementClass) {
  const { map, view } = context as any;
  map.findLayerById("POINT") && (map.findLayerById("POINT").visible = false);
  map.findLayerById("ROAD") && (map.findLayerById("ROAD").visible = false);
  view.goTo(CAMERA);
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
    position: { x, y: y - 0.006, z: 400 },
    heading: 0,
    tilt: 60,
  });
  forceToArea(map, FeatureLayer);
}

export { doMassMap, cameraToMap, cameraBackMap };
