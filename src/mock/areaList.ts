/*
 * @Author: eds
 * @Date: 2020-07-10 14:40:30
 * @LastEditTime: 2020-07-11 17:11:59
 * @LastEditors: eds
 * @Description:
 * @FilePath: \wz-canvass-demo\src\mock\areaList.ts
 */

import { projects } from "./projects";
const areas: string[] = [
  "鹿城区",
  "龙湾区",
  "瓯海区",
  "洞头区",
  "乐清市",
  "瑞安市",
  "文成县",
  "平阳县",
  "泰顺县",
  "龙港市",
];
const areaList = areas.map((v: string) => {
  return {
    areaName: v,
    children: projects[v] || [],
    check: false,
    tab: "area",
  };
});
export default areaList;
