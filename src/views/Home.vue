<!--
 * @Author: eds
 * @Date: 2020-07-10 08:59:11
 * @LastEditTime: 2020-07-10 09:22:31
 * @LastEditors: eds
 * @Description: 
 * @FilePath: \wz-canvass-demo\src\views\Home.vue
--> 
<template>
  <div class="home">
    <Projects />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Projects from "@/components/Projects/Projects.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { Projects }
})
export default class Home extends Vue {}
</script>
