/*
 * @Author: eds
 * @Date: 2020-07-10 09:07:02
 * @LastEditTime: 2020-07-11 15:58:52
 * @LastEditors: eds
 * @Description:
 * @FilePath: \wz-canvass-demo\src\config\arcgisApi.ts
 */

import { ARCGIS_OPTION, CONFIG_DEV } from "@/config";
import { loadModules } from "esri-loader";

export function arcgisApi(fn: Function) {
  //  ARCGIS_API
  loadModules(
    [
      "esri/WebScene",
      "esri/layers/FeatureLayer",
      "esri/layers/MapImageLayer",
      "esri/views/SceneView",
      "esri/config",
      "esri/layers/support/LabelClass",
      "esri/widgets/Legend",
      "esri/identity/IdentityManager",
    ],
    ARCGIS_OPTION
  ).then(
    ([
      WebScene,
      FeatureLayer,
      MapImageLayer,
      SceneView,
      esriConfig,
      LabelClass,
      Legend,
      IdentityManager,
    ]) => {
      esriConfig.portalUrl = CONFIG_DEV.LOCAL_HOST;
      IdentityManager.on("dialog-create", function() {
        IdentityManager.dialog.open = true;
      });
      fn &&
        fn({
          WebScene,
          FeatureLayer,
          MapImageLayer,
          SceneView,
          LabelClass,
          Legend,
        });
    }
  );
}
