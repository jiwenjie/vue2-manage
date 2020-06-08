<!-- 添加房间的弹出框 -->
<template>
  <div id="operaOrderApp" class="dialog-page">
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
              <el-select
                v-model="formMObj.roomTye"
                placeholder="请选择房间类型"
                class="match-width"
                :disabled="detail"
              >
                <el-option
                  v-for="(item, index) in roomTypList"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="入住天数:" :label-width="formLabelWidth">
              <el-input
                v-model="formMObj.days"
                type="number"
                autocomplete="off"
                maxlength="10"
                @input="getTotalPriceByDay"
                placeholder="请输入天数"
                :readonly="detail"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="入住价格:" :label-width="formLabelWidth">
              <el-input
                v-model="formMObj.price"
                type="number"
                autocomplete="off"
                maxlength="10"
                placeholder="请输入价格"
                readonly
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="总金额:" :label-width="formLabelWidth">
              <el-input
                v-model="formMObj.totalPrice"
                type="number"
                autocomplete="off"
                maxlength="10"
                placeholder="计算所得"
                readonly
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <!-- 显示入住登记人名称 -->
            <el-form-item label="登记人:" :label-width="formLabelWidth">
              <el-input
                v-model="formMObj.personName"
                autocomplete="off"
                maxlength="10"
                placeholder="请输入登记人"
                readonly
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="入住时间:" :label-width="formLabelWidth">
              <el-input
                v-model="formMObj.checkInTime"
                autocomplete="off"
                placeholder="计算所得"
                readonly
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="结束时间:" :label-width="formLabelWidth">
              <el-input
                v-model="formMObj.endTime"
                autocomplete="off"
                maxlength="10"
                placeholder="计算所得"
                readonly
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <!-- 弹出框底部操作按钮重写 -->
      <div slot="footer" class="dialog-footer cus-footer">
        <el-button @click="closeDialog" class="common-btn" v-show="!detail"
          >取 消</el-button
        >
        <el-button type="primary" class="common-btn" @click="dialogConfirm">{{
          detail ? "关 闭" : "确 定"
        }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "operaOrderDialog",
  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
    detail: {
      // 状态显示，用来判断当前是编辑状态还是详情状态
      type: Boolean,
      default: false,
    },
    // 用户点击确认按钮的回掉
    confirmClick: {
      type: Function,
      default: null,
      required: true,
    },
    orderId: {
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
      return !this.detail ? "编辑订单信息" : "订单详情信息"
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
      roomTypList: [
        {
          value: "01",
          label: "单人间",
        },
        {
          value: "02",
          label: "双人间",
        },
        {
          value: "03",
          label: "普通套房",
        },
        {
          value: "04",
          label: "豪华套房",
        },
        {
          value: "05",
          label: "总统套房",
        },
      ],
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

    // 输入价格的失焦方法，保留两位小数
    getTotalPriceByDay() {
      // this.$nextTick(() => {
      //   this.formMObj.price = Number.parseFloat(this.formMObj.price).toFixed(2)
      // })
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
