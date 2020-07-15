/*
 * @Author: eds
 * @Date: 2020-07-10 08:59:11
 * @LastEditTime: 2020-07-14 09:13:50
 * @LastEditors: eds
 * @Description:
 * @FilePath: \wz-canvass-demo\src\main.ts
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { arcgisApi } from "@/config/arcgisApi";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.prototype.$hub = new Vue();
Vue.prototype.$window = window;
Vue.prototype.$jq = (Window as any).$;

arcgisApi((arcgisApi: JSX.EsriObject) => {
  Vue.prototype.$ARCGIS_API = arcgisApi;
  const $vue: JSX.ElementClass = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount("#app");
  (Window as any).$vue = $vue;
});

Vue.config.productionTip = false;
