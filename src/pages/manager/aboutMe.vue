<!-- 关于我们界面 -->
<template>
  <div id="aboutMeApp" class="match-height">
    <!-- 头顶的面包屑展示部分 -->
    <headerBrum></headerBrum>
    <!-- 添加房间的内容部分 -->
    <div class="page-content">
      <div class="content-detail match-height">
        关于我们关于我们关于我们
      </div>
    </div>
  </div>
</template>

<script>
import headerBrum from "@/components/HeaderBrum" // 引入面包屑部分

export default {
  name: "aboutMe",
  components: { headerBrum },
  data() {
    return {
      msg: "关于我们部分",
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "~@/style/mixin.less";
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
