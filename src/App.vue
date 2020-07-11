<!--
 * @Author: eds
 * @Date: 2020-07-09 14:10:03
 * @LastEditTime: 2020-07-10 10:18:34
 * @LastEditors: eds
 * @Description: 
 * @FilePath: \wz-canvass-demo\src\App.vue
--> 
<template>
  <div class="app">
    <header class="app_header">
      <div class="app_toptab_position app_toptab_normal"></div>
    </header>
    <div class="app_container">
      <router-view ref="router" />
    </div>
  </div>
</template>

<style lang="less">
@import url("assets/less/common.less");
@import url("assets/less/arcgis.less");
@import url("assets/less/animate.css");
</style>

