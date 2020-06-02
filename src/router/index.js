import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/login/login.vue';
import manager from '@/pages/manager/manager.vue';
import home from '@/pages/manager/home.vue';
import checkin from '@/pages/manager/checkin.vue';
import addRoom from '@/pages/manager/addRoom.vue';
import orderList from '@/pages/manager/orderList.vue';
import userList from '@/pages/manager/userList.vue';
import checkout from '@/pages/manager/checkout.vue';
import aboutMe from '@/pages/manager/aboutMe.vue';
import inComeChart from '@/pages/manager/incomeChart.vue';
import timeChart from '@/pages/manager/timeChart.vue';
import personSetting from '@/pages/manager/personSetting.vue';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/manager',
      component: manager,
      name: '',
      children: [{
          path: '/',
          component: home,
          meta: []
        },
        {
          path: '/checkin',
          component: checkin,
          meta: ['添加数据', '登记入住'], // 这里用来实现面包屑的展示，可以通过 $route.meta 获取
        },
        {
          path: '/addRoom',
          component: addRoom,
          meta: ['添加数据', '添加房间'],
        },
        {
          path: '/checkout',
          component: checkout,
          meta: ['添加数据', '退房']
        },
        {
          path: '/orderList',
          component: orderList,
          meta: ['数据管理', '订单列表'],
        },
        {
          path: '/userList',
          component: userList,
          meta: ['数据管理', '用户列表'],
        },
        {
          path: '/aboutMe',
          component: aboutMe,
          meta: ['说明', '关于我们'],
        },
        {
          path: '/inComeChart',
          component: inComeChart,
          meta: ['图表', '收入统计'],
        },
        {
          path: '/timeChart',
          component: timeChart,
          meta: ['图表', '时间统计'],
        },
        {
          path: '/personSetting',
          component: personSetting,
          meta: ['设置', '人员设置'],
        }
      ]
    },
  ]
})
