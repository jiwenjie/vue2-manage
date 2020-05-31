import Vue from 'vue'
import Vuex from 'vuex'
import {
  getAdminInfo
} from '@/api/getData'

Vue.use(Vuex)

// 负责保存值
const state = {
  adminInfo: {
    avatar: 'default.jpg',
    name: 'jiwenjie'
  },
}

// 负责实际的更新操作，该部分无法调用异步方法，只能用同步方法
const mutations = {
  saveAdminInfo(state, adminInfo) {
    state.adminInfo = adminInfo;
  }
}

// 同样可以负责更新操作，该部分可以使用异步方法；
// Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
// 因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。
// 但是记住，这里的 context 不是 store 实例本身
const actions = {
  /**
   * commit 和 state 参数是解构写法，第一个参数本身是一个完整的对象，此处只是取了 commit 和 state，commit 用来调用更新 mutations，state 一般来说用不到
   * 3，此处的 this即为调用处传递过来的 vueComponent，比如如果登录界面传参this，则这里打印出来的就是登录界面的 vueComponent，能够拿到登录界面的所有数据和方法
   */
  async getAdminData({
    commit,
    state
  }, _this) {
    console.log('tag actions', _this)
    try {
      const res = await getAdminInfo()
      if (res.status == 1) {
        commit('saveAdminInfo', res.data);
      } else {
        throw new Error(res.type)
      }
    } catch (err) {
      console.log(err.message)
    }
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})
