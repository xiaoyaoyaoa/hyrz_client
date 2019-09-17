import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.html'
import organize from '@/components/organize'
import organizeDetail from '@/components/origizeDetail'
import member from '@/components/member'
import activities from '@/components/active'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/organize',
      component: organize,
    },
    {
      path: '/organize/detail/:id',
      component: organizeDetail,
      // children:[
      //   {
      //     path: '',
      //     component: organizeDetail
      //   },
      // ]
    },
    {
      path: '/member/:id',
      component: member
    },
    {
      path: '/active/:id',
      component: activities
    }
  ]
})
