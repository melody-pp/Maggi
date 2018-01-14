import Vue from 'vue'
import Router from 'vue-router'
import MainFrame from '@/pages/MainFrame'
import PersonalInfo from '@/pages/personalInfo/PersonalInfo'
import Comments from '@/pages/comments/Comments'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base:'/dist/',
  routes: [
    {
      path: '/',
      name: 'MainFrame',
      component: MainFrame
    },
    {
      path: '/personalInfo',
      component: PersonalInfo
    },
    {
      path: '/comments',
      component: Comments
    }
  ]
})
