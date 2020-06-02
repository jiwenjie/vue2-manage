<!-- home 首页，manager的主页 -->
<template>
  <div id="homeApp" class="home_page">
    <headerBrum></headerBrum>
    首页数据首页数据首页数据
  </div>
</template>

<script>
import headerBrum from "@/components/HeaderBrum" // 引入面包屑部分
import home from "./js/home"
export default {
  name: "home",
  components: { headerBrum },
  mixins: [home],
}
</script>

<style lang="less" scoped>
@import "./css/home.less";
</style>
