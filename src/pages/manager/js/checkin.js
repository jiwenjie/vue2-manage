import {
  login,
} from "@/api/getData"

import {
  showLoading,
  hideLoading
} from '../../utils/commonUtil'

export default {
  data() {
    return {
      formMobj: {
        name: '',
        sex: '01',
        age: '',
        roomTye: '01',
        roomNum: '', // 房间号码
        roomId: '', // 房间id
        price: '',
        days: '',
        totalPrice: '', // 房间总金额
      },
      rules: {
        name: [{
          required: true,
          message: "请输入名称",
          trigger: "blur"
        }, ],
        sex: [{
          required: true,
          message: "请选择性别",
          trigger: "blur"
        }],
        age: [{
          required: true,
          message: "请输入年龄",
          trigger: "blur"
        }],
        roomNum: [{
          required: true,
          message: "请选择房间",
          trigger: "blur"
        }],
        days: [{
          required: true,
          message: "请输入天数",
          trigger: "blur"
        }],
      },
      sexList: [{
          value: '01',
          label: '男'
        },
        {
          value: '02',
          label: '女'
        }
      ],
      roomTypList: [{
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
      formLabelWidth: "100px",

      // 用户选择房间弹出框
      dialogShow: false,
    }
  },
  mounted() {

  },

  methods: {
    // 用户点击出现选择弹出框
    selectRoom() {
      this.dialogShow = true;
    },

    // 用户点击确认的回掉
    selectConfirm(data) {
      this.formMobj.price = data.dayPrice;
      this.formMobj.roomNum = data.roomNum;
    },

    // 点击弹出框回掉显示隐藏方法
    selectRoomChange(val) {
      this.dialogShow = val;
    },

    // 确认入住
    confirmCheckIn() {
      this.$refs['MObjForm'].validate(async (valid) => {
        if (valid) {
          // 该处调用接口，入住成功后生成一笔订单
          showLoading();

          setTimeout(() => {
            this.$message({
              message: "登记成功!",
              type: "success",
            })
            hideLoading();
          }, 800)
        } else {
          this.$notify.error({
            title: "错误",
            message: "请把信息补充完整",
            offset: 100,
          })
          return false
        }
      })
    },

    // 重置数据
    resetData() {
      this.$refs['MObjForm'].resetFields();
    },

    // 改变输入的天数计算总金额
    changeInputDay(value) {
      if (!value) {
        this.formMobj.totalPrice = '';
      } else {
        this.formMobj.totalPrice = Number.parseFloat(this.formMobj.price * this.formMobj.days).toFixed(2);
      }
    }
  }
}
