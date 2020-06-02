<!-- 管理界面头部的面包屑部分 -->
<template>
  <div id="headBrum" class="headerBrum">
    <el-breadcrumb separator="/" class="inline-block left-brum">
      <el-breadcrumb-item :to="{ path: '/manager' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">
        {{ item }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <!-- command 点击菜单项触发的事件回调 -->
    <el-dropdown
      @command="handleCommand"
      menu-align="start"
      class="inline-block login-msg"
    >
      <!--<img :src="baseImgPath + adminInfo.avatar" class="avator" />-->
      <img :src="avatar" class="avator" />
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="home">首页</el-dropdown-item>
        <el-dropdown-item command="signout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
// import { signout } from "@/api/getData"
import { baseImgPath } from "@/config/env"
import { mapActions, mapState } from "vuex"
import avatar from "@/assets/icon_avatar.png"

export default {
  name: "headerBrum",
  data() {
    return {
      baseImgPath,
      avatar,
    }
  },
  created() {
    if (!this.adminInfo.id) {
      this.getAdminData()
    }
  },
  computed: {
    ...mapState(["adminInfo"]),
  },
  methods: {
    ...mapActions(["getAdminData"]),

    async handleCommand(command) {
      if (command == "home") {
        this.$router.push("/manager")
      } else if (command == "signout") {
        // const res = await signout()
        // if (res.status == 1) {
        //   this.$message({
        //     type: "success",
        //     message: "退出成功",
        //   })
        //   this.$router.push("/")
        // } else {
        //   this.$message({
        //     type: "error",
        //     message: res.message,
        //   })
        // }
      }
    },
  },
}
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";

#headBrum {
  height: 60px;
  font-size: 0;
  background-color: rgb(239, 242, 247);
}

.left-brum {
  .wh(50%, 100%);
  vertical-align: middle;
  text-align: left;
  line-height: 60px;
  padding-left: 16px;
}

.login-msg {
  .wh(50%, 100%);
  text-align: right;
  vertical-align: middle;
}

.avator {
  display: inline-block;
  font-size: 0;
  width: 60px;
  height: 60px;
  padding: 10px;
  margin-right: 20px;
  /* 转换头像的透明度 */
  -webkit-filter: opacity(30%); /* Chrome, Safari, Opera */
  filter: opacity(30%);
}
</style>
