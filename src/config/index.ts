/*
 * @Author: eds
 * @Date: 2020-07-10 09:03:19
 * @LastEditTime: 2020-07-15 14:17:26
 * @LastEditors: eds
 * @Description:
 * @FilePath: \wz-canvass-demo\src\config\index.ts
 */

const CONFIG_DEV = {
  ARCGIS_API_URL:
    "https://lysb.lucheng.gov.cn/lc/libs/arcgis_js_v412_api/arcgis_js_api/library/4.12/dojo/dojo.js",
  LOCAL_HOST: "https://jichuditu.wzkcy.com/arcgis",
  SERVER_HOST: "https://jichuditu.wzkcy.com/server/rest/services",
};
//  坐标系
const spatialReference = { wkid: 4490 };

//  ARCGIS FOR JS库本地地址
const ARCGIS_OPTION = {
  url: CONFIG_DEV.ARCGIS_API_URL,
};

const CAMERA = {
  position: {
    x: 120.65877597560247,
    y: 27.915105757571543,
    z: 10007.730531352572,
  },
  heading: 358,
  fov: 55,
  tilt: 47,
};

//  portal地址
const PORTAL_ITEM = "39c31c82634c4e9f8ceff6b597a17f4f";
//  设施点
const POINT = `${CONFIG_DEV.SERVER_HOST}/Hosted/SSD_ZSXM/FeatureServer/0`;
//  项目点
const PROJECTS = `${CONFIG_DEV.SERVER_HOST}/Hosted/SSD_ZSXM/FeatureServer/0`;
//  道路面
const ROAD = `${CONFIG_DEV.SERVER_HOST}/ZSXM/Road_Line/MapServer`;
//  项目面
const PROJECT_POLYGON = `${CONFIG_DEV.SERVER_HOST}/ZSXM/XMFW/MapServer`;

export {
  ARCGIS_OPTION,
  CONFIG_DEV,
  PORTAL_ITEM,
  CAMERA,
  POINT,
  ROAD,
  PROJECTS,
  PROJECT_POLYGON,
};
