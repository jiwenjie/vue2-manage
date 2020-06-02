<!-- 选择房间的弹出框 -->
<template>
  <div id="selectRoomDialogApp" class="dialog-page">
    <!-- :show-close="false" -->
    <el-dialog
      title="选择房间"
      :visible.sync="showVisible"
      ref="dialogRef"
      @close="closeDialog"
      width="70%"
    >
      <el-table
        ref="table"
        :data="resultList"
        tooltip-effect="dark"
        style="width: 100%"
        :height="tableHeight"
        @row-click="handleRowClick"
      >
        <!--<el-table-column type="selection" width="55" align="center" />-->

        <el-table-column label="选择" align="center" width="65">
          <template slot-scope="scope">
            <el-radio
              :label="scope.row.id"
              v-model="radio"
              @change.native="getCurrentRow(scope.row)"
              >&nbsp;</el-radio
            >
          </template>
        </el-table-column>

        <el-table-column type="index" width="60" />
        <el-table-column
          prop="roomTyp"
          label="房间类型"
          min-width="80"
          :formatter="cellTypFormat"
        />
        <el-table-column prop="roomNum" label="房间号" min-width="120" />
        <el-table-column
          prop="status"
          label="状态"
          min-width="80"
          :formatter="cellStatusFormat"
        />
        <el-table-column
          prop="dayPrice"
          label="价格"
          min-width="80"
          :formatter="emptyFormat"
        />
      </el-table>
      <el-pagination
        style="text-align: right"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[10, 20, 30, 40]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
      >
      </el-pagination>
      <!-- 弹出框底部操作按钮重写 -->
      <div slot="footer" class="dialog-footer cus-footer">
        <el-button @click="closeDialog" class="common-btn">取 消</el-button>
        <el-button type="primary" class="common-btn" @click="dialogConfirm"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import $ from "jquery"

export default {
  name: "selectRoomDialog",
  props: {
    showDialog: {
      type: Boolean | String,
      default: false,
    },
    // 用户点击确认按钮的回掉
    confirmClick: {
      type: Function,
      default: null,
      required: true,
    },
    type: {
      type: String | Number,
      default: "",
    },
  },
  computed: {
    showVisible: {
      get() {
        if (this.showDialog) {
          this.$nextTick(() => {
            this.$refs.table &&
              (this.tableHeight = $(".el-dialog__body").height() - 32)
          })
          this.loadData()
        }
        return this.showDialog
      },
      set(val) {
        this.$emit("changeRoomShow", val)
      },
    },
  },
  data() {
    return {
      formLabelWidth: "80px",
      tableHeight: 0,
      resultList: [],
      radio: "", // 单选框选择行
      page: 1,
      limit: 10,
      totalCount: 0,
    }
  },
  mounted() {
    // 防止用户缩小浏览器高度时内容区域顶出
    window.addEventListener("resize", () => {
      this.$nextTick(() => {
        this.$refs.table &&
          (this.tableHeight = $(".el-dialog__body").height() - 32) // 减去的时分页器的高度
      })
    })
  },
  methods: {
    // 获取列表数据
    loadData() {
      let tempArr = []
      for (let i = 0; i < 20; i++) {
        let item = {
          id: "idsas" + i,
          roomNum: "29" + i + "号",
          roomTyp: i % 2 == 0 ? "01" : "02",
          status: i % 2 == 0 ? "01" : "02",
          dayPrice: "134.90",
        }
        tempArr.push(item)
      }
      this.resultList = tempArr
    },
    // 用户点击确定
    dialogConfirm() {
      if (!this.radio) {
        this.$message({
          message: "请选择房间后在保存!",
          type: "warning",
        })
        return
      }
      this.confirmClick(this.resultList.find((item) => (item.id = this.radio)))
      this.$emit("changeRoomShow", false)
    },

    // 用户点击取消
    closeDialog() {
      this.$emit("changeRoomShow", false)
    },

    // 行点击选中事件
    handleRowClick(row, column, event) {
      this.radio = row.id
    },

    // 切换每页的数量
    handleSizeChange(val) {
      this.limit = val
      // this.getInitData()
    },

    // 切换当前第几页
    handleCurrentChange(val) {
      this.page = val
      // this.getInitData()
    },

    // 格式化显示类型数据
    cellTypFormat(row, column, cellValue, index) {
      let typNameObj = {
        "01": "单人间",
        "02": "双人间",
        "03": "普通套房",
        "04": "豪华套房",
        "05": "总统套房",
      }
      return typNameObj[cellValue]
    },

    // 空数据设置格式化
    cellStatusFormat(row, column, cellValue, index) {
      return cellValue == "01" ? "入住" : "空置"
    },

    // 空数据设置格式化
    emptyFormat(row, column, cellValue, index) {
      return cellValue ? cellValue : "-"
    },

    //  用户点击行
    getCurrentRow(row) {
      // 获取选中数据   row表示选中这一行的数据，可以从里面提取所需要的值
      this.templateSelection = row
    },
  },
}
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";

.cus-footer {
  font-size: 12px;
}

.common-btn {
  padding: 8px 12px;
}

#selectRoomDialogApp /deep/ .el-dialog {
  height: 70%;
}

#selectRoomDialogApp /deep/ .el-dialog__body {
  padding: 0 16px;
  height: calc(100% - 115px);
}
</style>
