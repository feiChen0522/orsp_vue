import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Regist from '@/components/Regist'
import DetailPage from '@/components/DetailPage'
import Order from '@/components/Order'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: HelloWorld
    },
    {
      path: '/Regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/detailpage',
      name: 'DetailPage',
      component: DetailPage
    },
    ,
    {
      path: '/order',
      name: 'Order',
      component: Order
    }

  ]
})
