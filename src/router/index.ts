/*
 * @Author: eds
 * @Date: 2020-07-10 08:59:11
 * @LastEditTime: 2020-07-10 09:21:46
 * @LastEditors: eds
 * @Description: 
 * @FilePath: \wz-canvass-demo\src\router\index.ts
 */ 
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
