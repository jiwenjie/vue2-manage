<!-- 登录成功后的主体管理界面 -->
<template>
  <div id="managerApp" class="match-height lmanager_page">
    <el-row class="match-height">
      <el-col :span="4" class="menu-col">
        <el-menu
          class="menu-col"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :default-active="defaultActive"
          router
        >
          <el-menu-item index="manager">
            <i class="el-icon-menu"></i>
            <span>首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item index="userList">
              <span>用户列表</span>
            </el-menu-item>
            <el-menu-item index="orderList">
              <span>订单列表</span>
            </el-menu-item>
            <!-- <el-menu-item index="adminList">
              <span>管理员列表</span>
            </el-menu-item> -->
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-plus"></i>
              <span>添加数据</span>
            </template>
            <el-menu-item index="addRoom">
              <span>添加房间</span>
            </el-menu-item>
            <el-menu-item index="checkin">
              <span>入住</span>
            </el-menu-item>
            <el-menu-item index="checkout">
              <span>退房</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>图表</span>
            </template>
            <el-menu-item index="timeChart">
              <span>时间统计</span>
            </el-menu-item>
            <el-menu-item index="inComeChart">
              <span>收入统计</span>
            </el-menu-item>
          </el-submenu>
          <!-- <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>编辑</span>
            </template>
            <el-menu-item index="vueEdit">
              <span>文本编辑</span>
            </el-menu-item>
          </el-submenu> -->
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>设置</span>
            </template>
            <el-menu-item index="personSetting">
              <!-- 人员设置，展示人员列表，展示信息和修改密码，权限等操作 -->
              <span>人员设置</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-warning"></i>
              <span>说明</span>
            </template>
            <el-menu-item index="aboutMe">
              <span>关于我们</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" class="content-col">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import manager from "./js/manager"
export default {
  name: "manager",
  components: {},
  mixins: [manager],
}
</script>

<style lang="less" scoped>
@import "./css/manager.less";
</style>
