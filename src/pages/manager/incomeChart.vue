<!-- 收入 chart 表展示 -->
<template>
  <div id="incomeChartApp" class="match-height">
    <!-- 头顶的面包屑展示部分 -->
    <headerBrum></headerBrum>
    <!-- 添加房间的内容部分 -->
    <div class="page-content">
      <div class="content-detail match-height">
        收入 chart 表
      </div>
    </div>
  </div>
</template>

<script>
import headerBrum from "@/components/HeaderBrum" // 引入面包屑部分
import incomeChart from "./js/incomeChart"

export default {
  name: "incomeChart",
  components: { headerBrum },
  mixins: [incomeChart],
}
</script>

<style lang="less" scoped>
@import "./css/incomeChart.less";
</style>
