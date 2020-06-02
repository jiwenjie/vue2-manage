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
      totalCount: 400,

      // 添加弹出框相关
      dialogShow: false,
      roomId: ""
    }
  },
  mounted() {
    this.getInitData();
  },
  computed: {
    canDel() {
      return this.selection.length == 0 ? true : false;
    }
  },
  methods: {
    // 获取初始化数据
    getInitData() {
      let tempArr = [];
      for (let i = 0; i < 10; i++) {
        let item = {
          id: 'idss' + i,
          addUser: 'admin',
          roomTyp: '01',
          roomTypNam: '总统套房',
          price: '12132.92',
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

    // 点击添加房间
    addClick() {
      this.dialogShow = true;
    },

    // 行编辑，点击打开弹窗
    editRow(row) {
      this.dialogShow = true;
      this.roomId = row.id;
      console.log('tag--', row)
    },

    // 点击删除房间
    delClick() {
      this.$confirm('确认删除吗？')
        .then(_ => {
          showLoading()

          setTimeout(() => {
            this.resultList.splice(this.resultList.indexOf(row), 1);
            hideLoading();
            this.$message({
              message: '操作成功',
              type: 'success'
            });
          }, 500)
        })
        .catch(_ => {});
    },

    // 某个字段如果空设置默认值
    emptyFormat(row, column, cellValue, index) {
      return cellValue || '-';
    },

    // 房间状态设置格式化
    cellStatusFormat(row, column, cellValue, index) {
      return cellValue == '01' ? '入住' : '空置'
    },

    // 行删除
    deleteRow(row) {
      this.$confirm('确认删除吗？')
        .then(_ => {
          showLoading()

          setTimeout(() => {
            this.resultList.splice(this.resultList.indexOf(row), 1);
            hideLoading();
            this.$message({
              message: '操作成功',
              type: 'success'
            });
          }, 200)
        })
        .catch(e => {
          console.log('deleteRow Tag', e);
        });
    },

    // 用户点击添加弹出框的确认
    dialogConfirm(data) {
      console.log('dialogCallback', data)
    },

    // 向子组件传递自定义事件，改变弹出框显示
    dialogChange(val) {
      this.dialogShow = val;
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
