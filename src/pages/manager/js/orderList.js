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
      searchText: '', // 用户输入的搜索内容
      selection: [], // 用户选中的数据
      resultList: [], // 房间的数据列表
      currentPage: 1,
      limit: 10,
      totalCount: 0,

      showDialog: false,
      orderId: "",
      detail: false, // 传入dialog子组件中，标识当前是编辑状态还是详情状态
    }
  },
  mounted() {
    this.getInitData();
  },
  methods: {
    // 获取初始化数据
    getInitData() {
      let tempArr = [];
      for (let i = 0; i < 10; i++) {
        let item = {
          id: 'idss' + i,
          createUser: '工号-0029',
          roomTyp: '01',
          roomTypNam: '总统套房',
          price: '132.92',
          startDtm: '2020-01-03 12:32:21',
          endDtm: '2020-02-03 12:32:21',
          totalPrice: '31892.98',
          status: i % 2 == 0 ? '01' : '02',
        }
        tempArr.push(item);
      }
      this.resultList = tempArr;
    },

    // 点击开始搜索
    searchClick() {
      this.currentPage = 1;
      this.getInitData();
    },

    // 点击添加订单,跳转到登记入住界面
    addClick() {
      this.$router.push("/checkin")
    },

    // 行查看，点击查看详情
    viewRow(row) {
      this.showDialog = true;
      this.orderId = row.id;
      this.detail = true;
    },

    // 行编辑，点击打开弹窗
    editRow(row) {
      this.showDialog = true;
      this.orderId = row.id;
      this.detail = false;
    },

    // 弹出框确认方法的回掉
    dialogConfirm(data) {
      console.log('tag-confirm', data)
    },

    // 当用户点击显示隐藏 dialog 的时候调用父组件方法同步更新
    dialogShow(val) {
      this.showDialog = val;
    },

    // 某个字段如果空设置默认值
    emptyFormat(row, column, cellValue, index) {
      return cellValue || '-';
    },

    // 表格选中项发生变化
    handleSelectionChange(val) {
      this.selection = val;
    },

    // 切换每页的数量
    handleSizeChange(val) {
      this.limit = val;
      this.getInitData();
    },

    // 切换当前第几页
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getInitData();
    },
  },
}
