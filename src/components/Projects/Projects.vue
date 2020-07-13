<!--
 * @Author: eds
 * @Date: 2020-07-10 09:23:12
 * @LastEditTime: 2020-07-13 18:11:06
 * @LastEditors: eds
 * @Description: 
 * @FilePath: \wz-canvass-demo\src\components\Projects\Projects.vue
--> 
<template>
  <div class="projects">
    <transition name="fade">
      <arcgisScene />
    </transition>
    <leftMenu ref="leftMenu" />
    <rightDetails ref="rightDetails" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ArcgisScene from "./Arcgis/ArcgisScene.vue";
import List from "./components/List/List.vue";
import Details from "./components/Details/Details.vue";

@Component({
  components: {
    ["arcgisScene"]: ArcgisScene,
    ["leftMenu"]: List,
    ["rightDetails"]: Details
  }
})
export default class Projects extends Vue {
  private doLine = true;
  mounted() {
    this.eventRegister();
  }
  private eventRegister(): void {
    // const { $hub } = this as any;
  }
}
</script>

<style scoped lang="less">
.projects {
  height: 100%;
  position: relative;
}
.projects:before {
  content: "";
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  left: 0;
  background: linear-gradient(to top, #00438a, rgba(0, 0, 0, 0)) !important;
  z-index: 2;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
