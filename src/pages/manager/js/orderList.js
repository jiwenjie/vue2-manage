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

    // 点击添加订单
    addClick() {
      this.dialogShow = true;
    },

    // 行查看，点击查看详情
    viewRow(row) {
      console.log('tag-row', row);
    },

    // 行编辑，点击打开弹窗
    editRow(row) {
      console.log('tag--', row);
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
