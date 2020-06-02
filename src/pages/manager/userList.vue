<!-- 用户列表(入住过的用户存储本地产生列表) -->
<template>
  <div id="userListApp" class="match-height">
    <!-- 头顶的面包屑展示部分 -->
    <headerBrum></headerBrum>
    <!-- 添加房间的内容部分 -->
    <div class="page-content">
      <div class="content-detail match-height">
        <!-- 操作一栏，放置添加、删除和搜索部分 -->
        <div class="operation-line reset-fonts">
          <div class="inline-block left-opera">
            <!-- <el-button type="primary" size="small" @click="addClick"
              >添加</el-button
            > -->
            <!-- <el-button
              type="danger"
              size="small"
              @click="delClick"
              :disabled="canDel"
              >删除</el-button
            > -->
          </div>
          <!-- 搜索区域 -->
          <div class="inline-block right-search">
            <el-input
              placeholder="请输入搜索内容"
              v-model="searchText"
              :maxlength="20"
              class="input-with-select search-input"
            >
              <el-button
                slot="append"
                icon="el-icon-search"
                @click="searchClick"
              ></el-button>
            </el-input>
          </div>
        </div>
        <el-table
          ref="table"
          :data="resultList"
          tooltip-effect="dark"
          style="width: 100%"
        >
          <!-- <el-table-column type="selection" width="55" align="center" /> -->
          <el-table-column type="index" width="60" align="center" />
          <el-table-column prop="name" label="姓名" min-width="120" />
          <el-table-column
            prop="sex"
            label="性别"
            min-width="80"
            :formatter="sexFormatter"
          />
          <el-table-column prop="age" label="年龄" min-width="80" />
          <el-table-column
            prop="checkInCount"
            label="入住次数"
            min-width="80"
          />
          <el-table-column
            prop="spendTotalPrice"
            label="花费总金额"
            min-width="120"
          />
          <!-- <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="viewRow(scope.row)"
                type="text"
                size="small"
              >
                查看
              </el-button>
              <el-button
                @click.native.prevent="editRow(scope.row)"
                type="text"
                size="small"
              >
                编辑
              </el-button>
            </template>
          </el-table-column> -->
        </el-table>
        <el-pagination
          style="text-align: right"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalCount"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import headerBrum from "@/components/HeaderBrum" // 引入面包屑部分
import userList from "./js/userList"

export default {
  name: "userList",
  components: { headerBrum },
  mixins: [userList],
}
</script>

<style lang="less" scoped>
@import "./css/userList.less";
</style>
