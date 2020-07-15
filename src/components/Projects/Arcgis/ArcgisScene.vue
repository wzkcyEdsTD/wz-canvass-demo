<!--
 * @Author: eds
 * @Date: 2020-07-10 09:23:47
 * @LastEditTime: 2020-07-15 14:29:38
 * @LastEditors: eds
 * @Description: 
 * @FilePath: \wz-canvass-demo\src\components\Projects\Arcgis\ArcgisScene.vue
--> 
<template>
  <div class="projects_scene" :id="MapId" />
</template>

<script lang="ts">
import { Component, Mixins, Watch } from "vue-property-decorator";
import ArcgisSceneCore from "@/components/Core/ArcgisSceneCore.vue";
import { doMassMap, cameraToMap, cameraBackMap } from "./ArcgisScene";
import { State } from "vuex-class";

@Component({
  methods: { doMassMap, cameraToMap, cameraBackMap }
})
export default class ArcgisScene extends Mixins(ArcgisSceneCore) {
  protected id: number = +new Date();
  @State("arcgisDone") stateArcgisDone!: boolean;

  //    Getter/
  get MapId(): string {
    return "arcgisScene_" + this.id;
  }

  //  mounted
  async mounted(): Promise<void> {
    await this.initMap(this.MapId);
    await doMassMap(this);
    this.eventRegister();
  }
  private eventRegister(): void {
    const { $hub } = this as any;
    $hub.$on("menu-item-click", ({ geometry }: any) => {
      cameraToMap(this, geometry || []);
    });
    $hub.$on("switch-panel", (val: boolean) => {
      !val && cameraBackMap(this);
    });
  }
}
</script>

<style scoped lang="less">
.projects_scene {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
