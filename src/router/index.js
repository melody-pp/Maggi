import Vue from 'vue'
import Router from 'vue-router'
import MainFrame from '@/pages/MainFrame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainFrame',
      component: MainFrame
    }
  ]
})
