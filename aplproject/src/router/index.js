import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Axiomatic from '@/components/Axiomatic'
import Denotational from '@/components/Denotational'
import Operational from '@/components/Operational'
import Lambda from '@/components/Lambda'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/axsem',
      name: 'Axiomatic',
      component: Axiomatic
    },
    {
      path: '/densem',
      name: 'Denotational',
      component: Denotational
    },
    {
      path: '/opsem',
      name: 'Operational',
      component: Operational
    },
    {
      path: '/lamcal',
      name: 'Lambda',
      component: Lambda
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
