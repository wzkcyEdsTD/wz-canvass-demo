<!--
 * @Author: eds
 * @Date: 2020-07-10 09:02:30
 * @LastEditTime: 2020-07-10 09:32:02
 * @LastEditors: eds
 * @Description: 
 * @FilePath: \wz-canvass-demo\src\components\Core\ArcgisSceneCore.vue
--> 
<template>
  <div />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { PORTAL_ITEM } from "@/config";

@Component
export default class ArcgisCore extends Vue {
  @Prop({ default: "ARCGIS_SCENE_MAP" }) private mapId!: number;

  //    esri object <T>
  public map: any;
  public view: any;

  //    initMap Promise<Boolean>
  public initMap(mapId: string, zoom?: number): Promise<boolean> {
    const { WebScene, SceneView } = (this as any).$ARCGIS_API;
    return new Promise(resolve => {
      this.map = WebScene({
        portalItem: {
          id: PORTAL_ITEM
        }
      });
      //设置地图容器
      this.view = new SceneView({
        container: mapId,
        map: this.map,
        environment: {
          lighting: {
            directShadowsEnabled: true,
            aienmbtOcclusionEnabled: true
          }
        }
      });
      this.view.ui._removeComponents(["zoom", "attribution"]);
      resolve(true);
    });
  }
}
</script>