import Vue from 'vue'
import Router from 'vue-router'
import MainFrame from '@/pages/MainFrame'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base:'/dist/',
  routes: [
    {
      path: '/',
      name: 'MainFrame',
      component: MainFrame
    }
  ]
})
