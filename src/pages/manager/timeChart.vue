<!-- 时间表展示 -->
<template>
  <div id="timeChartApp" class="match-height">
    <!-- 头顶的面包屑展示部分 -->
    <headerBrum></headerBrum>
    <!-- 添加房间的内容部分 -->
    <div class="page-content">
      <div class="content-detail match-height">
        timeWithinRange chart 表,来展示一年中哪个时间段入住人数多
      </div>
    </div>
  </div>
</template>

<script>
import headerBrum from "@/components/HeaderBrum" // 引入面包屑部分
import timeChart from "./js/timeChart"

export default {
  name: "timeChart",
  components: { headerBrum },
  mixins: [timeChart],
}
</script>

<style lang="less" scoped>
@import "./css/timeChart.less";
</style>
