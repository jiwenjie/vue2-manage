<!-- 添加房间的弹出框 -->
<template>
  <div id="addRoomDialogApp" class="dialog-page">
    <!-- :show-close="false" -->
    <el-dialog
      :title="dialogTitle"
      :visible.sync="showVisible"
      @close="closeDialog"
    >
      <el-form :model="formMobj">
        <el-row>
          <el-col :span="12">
            <el-form-item label="房间号码:" :label-width="formLabelWidth">
              <el-input
                v-model="formMobj.roomNum"
                autocomplete="off"
                maxlength="10"
                placeholder="请输入房间号"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="房间类型:" :label-width="formLabelWidth">
              <el-select
                v-model="formMobj.roomTye"
                placeholder="请选择活动区域"
                class="match-width"
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
            <el-form-item label="入住价格:" :label-width="formLabelWidth">
              <el-input
                v-model="formMobj.price"
                type="number"
                autocomplete="off"
                maxlength="10"
                @blur="formPriceBlue"
                placeholder="请输入价格"
              ></el-input>
            </el-form-item>
          </el-col>
          <!-- 往下的内容都是在编辑查看状态展示 -->
          <el-col :span="12" v-if="roomId">
            <el-form-item label="当前状态:" :label-width="formLabelWidth">
              <el-input
                v-model="formMobj.status"
                autocomplete="off"
                maxlength="10"
                placeholder="请输入当前状态"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="roomId">
          <el-col :span="12">
            <el-form-item label="添加人:" :label-width="formLabelWidth">
              <el-input
                v-model="formMobj.addUser"
                autocomplete="off"
                maxlength="10"
                placeholder="请输入添加人"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="添加时间:" :label-width="formLabelWidth">
              <el-input
                v-model="formMobj.createTime"
                autocomplete="off"
                placeholder="请输入添加时间"
              ></el-input>
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
  name: "addRoomDialog",
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
    roomId: {
      type: String | Number,
      default: "",
    },
  },
  computed: {
    showVisible: {
      get() {
        return this.showDialog
      },
      set(val) {
        this.$emit("dialogChangeShow", val)
      },
    },

    dialogTitle() {
      return this.roomId ? "编辑房间信息" : "新建房间信息"
    },
  },
  data() {
    return {
      formMobj: {
        roomNum: "",
        roomTye: "01",
        price: "",
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
    // 用户点击确定
    dialogConfirm() {
      this.confirmClick({
        one: "1212",
      })
      this.$emit("dialogChangeShow", false)
    },

    // 用户点击取消
    closeDialog() {
      this.$emit("dialogChangeShow", false)
    },

    // 输入价格的失焦方法，保留两位小数
    formPriceBlue() {
      this.$nextTick(() => {
        this.formMobj.price = Number.parseFloat(this.formMobj.price).toFixed(2)
      })
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
