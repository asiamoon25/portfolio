import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
      path:'/',
      component:()=>import(/* webpackChunkName:"main"*/'../App'),
      children:[
        {
          path:'/',
          component:()=>import(/* webpackChunkName:"main-main"*/'../components/body/MainPage'),
        },
        {
          path:'/about',
          component:()=>import(/*webpackChunkName:"about"*/'../components/body/About'),
        },
        {
          path:'/project',
          component:()=>import(/*webpackChunkName:"portfolio"*/'../components/body/Project'),
          children:[
            {
              path:'/personal',
              component:()=>import(/*webpackChunkName:"personal"*/'../components/body/Personal')
            },
            {
              path: '/company',
              component:()=>import(/*webpackChunkName:"company"*/'../components/body/Company')
            }
          ]

        },
      ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
