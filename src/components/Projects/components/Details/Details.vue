<!--
 * @Author: eds
 * @Date: 2020-07-10 10:29:34
 * @LastEditTime: 2020-07-10 16:27:39
 * @LastEditors: eds
 * @Description: 
 * @FilePath: \wz-canvass-demo\src\components\Projects\components\Details\Details.vue
--> 
<template>
  <div
    v-show="project"
    class="details animated"
    :class="[hideVisible?'slideOutRight':'slideInRight']"
  >
    <div class="details-frame">
      <el-tabs v-model="tabActive" class="my-tabs">
        <el-tab-pane :label="project ? project.name : '项目信息'" name="info" />
      </el-tabs>
      <ProjectDetail :project="project" />
    </div>
    <span class="hide_button" @click="()=>{hideVisible=!hideVisible}"></span>
  </div>
</template>

<script>
/* eslint-disable */
import ProjectDetail from "./ProjectDetail";
export default {
  data() {
    return {
      tabActive: "info",
      hideVisible: true,
      project: undefined
    };
  },
  components: { ProjectDetail },
  mounted() {
    this.eventRegister();
  },
  methods: {
    eventRegister() {
      this.$hub.$on("menu-item-click", val => {
        this.project = val;
        this.hideVisible = false;
      });
    }
  }
};
</script>
<style scoped lang="less">
@import url(../element-extra.less);
.details {
  position: absolute;
  top: 120px !important;
  right: 10px;
  bottom: 20px;
  z-index: 2;
  width: 420px;
  background: url("../img/rightDiv_bg.png") 0 0 no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 40px 20px 40px 30px;
  text-align: left;
  .hide_button {
    transform: rotateY(180deg);
    position: absolute;
    top: 40%;
    right: 98%;
    height: 126px;
    width: 27px;
    background: url("../img/hide_button.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
  .details-frame {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>