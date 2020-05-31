import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/login/login.vue';
import manager from '@/pages/manager/manager.vue';
import checkin from '@/pages/manager/checkin.vue';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/manager',
      // name: 'manager',
      component: manager,
      name: '',
      children: [{
        path: '/checkin',
        component: checkin,
        // meta: ['添加数据', '添加商铺'],
      }]
    },
  ]
})
