import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.html'
import organize from '@/components/organize'
import layout from '@/components/layout'
import origize from '@/components/origize'
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
      component: layout,
      children:[
        {
          path: 'list',
          name:'olist',
          component: origize,
        },
        {
          path: 'detail/:id',
          name:'odetail',
          component: organizeDetail,
        },
        {
          path: 'member/:id',
          name:'member',
          component: member
        },
        {
          path: 'active/:id',
          name:'active',
          component: activities
        }
      ]
    },

  ]
})
