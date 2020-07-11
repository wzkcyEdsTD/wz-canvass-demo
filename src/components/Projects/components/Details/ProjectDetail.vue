<!--
 * @Author: eds
 * @Date: 2020-07-10 15:36:40
 * @LastEditTime: 2020-07-10 16:26:57
 * @LastEditors: eds
 * @Description: 
 * @FilePath: \wz-canvass-demo\src\components\Projects\components\Details\ProjectDetail.vue
--> 
<template>
  <div class="project-detail">
    <img :src="image" />
    <ul>
      <li v-for="(v,key) in project" :key="key" v-show="TITLES[key]">
        <span>{{TITLES[key]}}</span>
        <span v-html="typeof v == 'string' ? v : v.join('<br />')"></span>
      </li>
    </ul>
    <div class="around">
      <header>周边设施</header>
      <ul>
        <li v-for="(v,i) in AROUNDS" :key="i">
          <span>
            <img :src="require(`../img/icon/${v.title}.png`)" />
          </span>
          <span>{{v.title}}:{{v.value}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { titles } from "@/mock/projects";
import aroundList from "@/mock/arounds";
@Component
export default class ProjectDetail extends Vue {
  @Prop({
    default: () => {
      return {};
    }
  })
  private project!: object;

  private TITLES = titles;
  private AROUNDS = aroundList;
  private image: any = require("../img/demo.png");
}
</script>

<style scoped lang="less">
.project-detail::-webkit-scrollbar {
  display: block;
  width: 6px;
  background-color: rgb(207, 205, 226);
  border-radius: 3px;
}

.project-detail::-webkit-scrollbar-thumb {
  width: 6px;
  background-color: rgb(66, 68, 196);
  border-radius: 3px;
}
.project-detail {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  > img {
    width: 100%;
    border-radius: 6px;
  }
  > ul {
    margin: 10px 0;
    > li {
      > span {
        display: block;
      }
      > span:first-child {
        color: #409eff;
        font-weight: bold;
        font-size: 18px;
      }
    }
  }
  > .around {
    border-top: 1px #ccc solid;
    > header {
      text-align: center;
      font-size: 20px;
      color: #409eff;
      font-weight: bold;
      margin: 10px 0;
    }
    > ul {
      > li {
        display: inline-block;
        width: 49.9%;
        height: 40px;
        text-align: center;
        > span {
          display: inline-block;
          font-size: 16px;
          > * {
            vertical-align: middle;
          }
        }
        > span:first-child {
          width: 40px;
          > img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>