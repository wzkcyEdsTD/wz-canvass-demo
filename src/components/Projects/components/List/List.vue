<!--
 * @Author: eds
 * @Date: 2020-07-10 10:02:51
 * @LastEditTime: 2020-07-10 15:30:11
 * @LastEditors: eds
 * @Description: 
 * @FilePath: \wz-canvass-demo\src\components\Projects\components\List\List.vue
-->
<template>
  <div class="list animated" :class="[hideVisible ? 'slideOutLeft' : 'slideInLeft']">
    <div class="custom-query">
      <el-input v-model="queryValue">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-button type="primary" @click.stop="query">查询</el-button>
    </div>
    <el-tabs v-model="tabActive" class="my-tabs">
      <el-tab-pane label="区域" name="area" />
      <el-tab-pane label="产业" name="industry" />
      <el-tab-pane label="用地规模" name="scale" />
    </el-tabs>
    <div class="list-content">
      <el-menu active-text-color="#000" text-color="#000" class="my-menu">
        <el-submenu
          v-for="(value, index) of tabsMenuData"
          v-show="value.tab == tabActive"
          :class="[!value.id ? 'noCheck' : '']"
          :key="index"
          :index="index + ''"
        >
          <template slot="title">
            <!-- <el-checkbox
              v-show="false && value.children.length"
              v-model="value.check"
              class="my-checkbox"
              @click.stop.native="() => {}"
              @change="changeCheckboxHandler(index)"
            ></el-checkbox>-->
            <span class="inner-title" v-if="!value.children.length" v-html="value.innerTitle" />
            <span>{{ value.areaName }}</span>
            <span>（{{ value.children.length }}个）</span>
          </template>
          <el-menu-item
            :index="index + '-' + ind"
            v-for="(item, ind) of value.children"
            :key="ind"
            @click="menuItemClickHandler(item)"
            :class="[item.key ? 'key_sc' : '']"
            class="children-menu-item"
          >
            <!-- <el-checkbox
              v-model="item.check"
              class="my-checkbox"
              @change="changeCheckboxHandler(index, ind)"
              v-show="false"
            ></el-checkbox>-->
            {{ item.name }}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <span class="hide_button" @click="hideSide"></span>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import menuData from "@/mock/areaList";
export default {
  name: "list",
  data() {
    return {
      tabActive: "area",
      queryValue: undefined,
      tabsMenuData: menuData,
      hideVisible: false
    };
  },
  computed: {
    ...mapState({
      // xmMenu: state => state.xmMenu
    })
  },
  methods: {
    hideSide() {
      this.hideVisible = !this.hideVisible;
    },
    // tabsPaneClickHandler(val) {},
    changeCheckboxHandler(parentIndex, childrenIndex) {
      const currentMenu = this.tabsMenuData;
      const parentCheck = currentMenu[parentIndex].check;
      if (currentMenu[parentIndex].id) {
        this.$set(currentMenu[parentIndex], "check", parentCheck);
        this.$hub.$emit("document-checkbox", currentMenu[parentIndex]);
      } else {
        return alert("功能建设中，敬请期待!");
      }
    },
    // 单独点击一个侧目录的子项
    menuItemClickHandler(project) {
      this.$hub.$emit("menu-item-click", project);
    },
    // 查询
    query() {
      const tabsMenuData = [];
      const reg = new RegExp(this.queryValue);
      menuData.forEach(d => {
        const children = d.children.filter(item => item.name.match(reg));
        tabsMenuData.push({
          ...d,
          children
        });
      });
      this.tabsMenuData = [...tabsMenuData];
    }
  }
};
</script>
<style scoped lang="less">
@import url(../element-extra.less);
.list {
  position: absolute;
  top: 120px !important;
  left: 10px;
  bottom: 20px;
  z-index: 2;
  width: 320px;
  background: url("../img/document_bg.png") 0 0 no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 10px 10px;
  text-align: left;
  .hide_button {
    position: absolute;
    top: 40%;
    left: 320px;
    height: 126px;
    width: 27px;
    background: url("../img/hide_button.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
  .list-content {
    flex: 1;
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .list-content::-webkit-scrollbar {
    /*外层轨道，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置3）*/
    height: 4px;
    width: 4px;
  }
  .list-content::-webkit-scrollbar-track-piece {
    /*内层轨道，滚动条中间部分（位置4）*/
    background: rgba(4, 30, 117, 0.4);
    border-radius: 2px;
  }
  .list-content::-webkit-scrollbar-thumb {
    /*滚动条里面可以拖动的那部分（位置5）*/
    background: rgba(62, 158, 255, 0.8);
    border-radius: 2px;
  }
}

.custom-query {
  height: 60px;
  line-height: 60px;
}
.custom-query /deep/ .el-input {
  width: 240px;
  margin-right: 8px;
}
.custom-query /deep/ .el-input__inner {
  height: 34px;
  line-height: 34px;
  border-color: #10cdf9;
  background: rgba(22, 52, 127, 0.5);
  font-size: 16px;
  border-radius: 0;
  color: #fff;
}
.custom-query /deep/ .el-input__icon {
  line-height: 34px;
}
.custom-query /deep/ .el-button {
  height: 34px;
  line-height: 34px;
  background: rgba(37, 169, 226, 1);
  width: 50px;
  padding: 0;
  border-radius: 0;
  font-size: 16px;
  box-sizing: border-box;
}
.children-menu-item {
  padding: 0 6px !important;
  height: 44px;
  line-height: 44px;
  background: rgba(19, 88, 183, 0.44);
  border-bottom: 1px solid #3e9eff;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  font-size: 16px;
  color: #fff !important;
  position: relative;
}
.key_sc {
  background: rgba(220, 20, 60, 0.2);
}
.children-menu-item:hover {
  background: rgba(19, 88, 183, 0.84);
}
.children-menu-item > button {
  position: absolute;
  right: 10px;
  height: 24px;
  line-height: 24px;
  padding: 0 8px;
  top: 12px;
  background-color: #243968;
  border: 1px solid #05fff8;
  color: #fff;
  cursor: pointer;
}

/** visible */
.vsb {
  visibility: hidden;
}
</style>
