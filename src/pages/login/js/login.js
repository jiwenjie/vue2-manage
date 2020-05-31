import {
  login,
} from "@/api/getData"

import {
  mapActions,
  mapState
} from "vuex"

export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [{
          required: true,
          message: "请输入用户名",
          trigger: "blur"
        }, ],
        password: [{
          required: true,
          message: "请输入密码",
          trigger: "blur"
        }],
      },
      showLogin: false,
    }
  },
  mounted() {
    this.showLogin = true
    if (!this.adminInfo.id) {
      this.getAdminData()
    }
  },
  computed: {
    // adminInfo() {
    //   return this.$store.state.adminInfo;
    // },
    ...mapState(["adminInfo"]), // 语法糖，正常写法如上
  },
  methods: {
    /** 用来同步更新 mutations时使用的语法糖 **/
    // ...mapMutations([
    //   'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

    //   // `mapMutations` 也支持载荷：
    //   'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    // ]),

    // getAdminData() {
    //   this.$store.dispatch('getAdminData', this);
    // },
    /** 改种写法不会把 this 传递过去，如果想传递参数则使用上方写法 **/
    ...mapActions(["getAdminData"]), // // 将 `this.getAdminData()` 映射为 `this.$store.dispatch('getAdminData')`

    async submitForm(formName) {
      // this.$refs[formName].validate(async (valid) => {
      //   if (valid) {
      //     const res = await login({
      //       user_name: this.loginForm.username,
      //       password: this.loginForm.password,
      //     })
      //     if (res.status == 1) {
      //       this.$message({
      //         type: "success",
      //         message: "登录成功",
      //       })
      //       this.$router.push("manager");
      //     } else {
      //       this.$message({
      //         type: "error",
      //         message: res.message,
      //       })
      //     }
      //   } else {
      //     this.$notify.error({
      //       title: "错误",
      //       message: "请输入正确的用户名密码",
      //       offset: 100,
      //     })
      //     return false
      //   }
      // })
      this.$router.push("manager");
    },
  },
  watch: {
    adminInfo: function (newValue) {
      if (newValue.id) {
        this.$message({
          type: "success",
          message: "检测到您之前登录过，将自动登录",
        })
        this.$router.push("manager");
      }
    },
  },
}
