/*
 * @Author: eds
 * @Date: 2020-07-10 14:40:30
 * @LastEditTime: 2020-07-13 18:16:33
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
  "苍南县",
];
const areaList = areas.map((v: string) => {
  return {
    titleName: v,
    children: projects.filter((d: any) => d.area == v) || [],
    check: false,
    tab: "area",
  };
});
const kinds: string[] = [
  "城市开发项目",
  "数字经济产业项目",
  "生命健康项目",
  "高端制造项目",
  "总部经济项目",
  "现代商贸项目",
  "文化旅游项目",
  "其他项目",
];
const kindList = kinds.map((v: string) => {
  return {
    titleName: v,
    children: projects.filter((d: any) => d.kind == v) || [],
    check: false,
    tab: "kind",
  };
});
const scales: string[] = [
  "1-50亩",
  "50-100亩",
  "100-200亩",
  "200-300亩",
];
const scaleList = scales.map((v: string) => {
  return {
    titleName: v,
    children: projects.filter((d: any) => d.scale == v) || [],
    check: false,
    tab: "scale",
  };
});
export { areaList, kindList, scaleList };
