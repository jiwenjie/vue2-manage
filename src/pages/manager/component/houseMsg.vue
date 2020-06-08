<!-- 准备执行退房操作的列表，点击查看显示当前房屋状态的详细信息，还有多久到期等，入住人是谁 -->
<template>
  <div id="houseMsgApp" class="dialog-page">
    <!-- :show-close="false" -->
    <el-dialog
      :title="dialogTitle"
      :visible.sync="showVisible"
      @close="closeDialog"
    >
      <el-form :model="formMObj">
        <el-row>
          <el-col :span="12">
            <el-form-item label="房间号码:" :label-width="formLabelWidth">
              <el-input
                v-model="formMObj.roomNum"
                autocomplete="off"
                maxlength="10"
                placeholder="请输入房间号"
                readonly
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="房间类型:" :label-width="formLabelWidth">
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
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
export default {
  name: "houseMsgDialog",
  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
    // 用户点击确认按钮的回掉
    confirmClick: {
      type: Function,
      default: null,
      required: true,
    },
    pkValue: {
      type: String | Number,
      default: "",
    },
  },
  computed: {
    showVisible: {
      get() {
        if (this.showDialog) {
          // 当显示弹出框的时候调用接口数据
          this.loadData()
        }
        return this.showDialog
      },
      set(val) {
        this.$emit("updateShowDialog", val)
      },
    },

    dialogTitle() {
      return "编辑订单信息"
      // return !this.detail ? "编辑订单信息" : "订单详情信息"
    },
  },
  data() {
    return {
      formMObj: {
        roomNum: "",
        roomTye: "01",
        days: "",
        price: "", // 单价
        totalPrice: "", // 总金额
        personName: "",
        checkInTime: "", // 登记入住时间
        endTime: "",
      },
      formLabelWidth: "80px",
    }
  },
  methods: {
    // 显示弹出框的时候调用接口获取详情数据
    loadData() {},

    // 用户点击确定
    dialogConfirm() {
      this.confirmClick({
        one: "1212",
      })
      this.$emit("updateShowDialog", false)
    },

    // 用户点击取消
    closeDialog() {
      this.$emit("updateShowDialog", false)
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
</style>
