<template>
  <div id="addRoomApp" class="match-height">
    <!-- 头顶的面包屑展示部分 -->
    <headerBrum></headerBrum>
    <!-- 添加房间的内容部分 -->
    <div class="page-content">
      <div class="content-detail match-height">
        <!-- 操作一栏，放置添加、删除和搜索部分 -->
        <div class="operation-line reset-fonts">
          <div class="inline-block left-opera">
            <el-button type="primary" size="small" @click="addClick"
              >添加</el-button
            >
            <el-button
              type="danger"
              size="small"
              @click="delClick"
              :disabled="canDel"
              >删除</el-button
            >
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
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55" align="center" />
          <el-table-column type="index" width="50" />
          <el-table-column prop="addUser" label="添加人" min-width="120" />
          <el-table-column prop="roomTypNam" label="房间类型" min-width="80" />
          <el-table-column
            prop="price"
            label="入住价格(天)"
            min-width="100"
            :formatter="emptyFormat"
          />
          <el-table-column
            prop="status"
            label="状态"
            min-width="80"
            :formatter="cellStatusFormat"
          />
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="editRow(scope.row)"
                type="text"
                size="small"
              >
                编辑
              </el-button>
              <el-button
                @click.native.prevent="deleteRow(scope.row)"
                type="text"
                size="small"
                style="color: red"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
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

    <roomDialog
      @dialogChangeShow="dialogChange"
      :showDialog="dialogShow"
      :confirmClick="dialogConfirm"
      :roomId="roomId"
    ></roomDialog>
  </div>
</template>

<script>
import headerBrum from "@/components/HeaderBrum" // 引入面包屑部分
import addRoom from "./js/addRoom"
import roomDialog from "./component/addRoomDialog"

export default {
  name: "addRoom",
  components: { headerBrum, roomDialog },
  mixins: [addRoom],
}
</script>

<style lang="less" scoped>
@import "./css/addRoom.less";
</style>
