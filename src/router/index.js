import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Regist from '@/components/Regist'
<<<<<<< HEAD
import Swing from '@/components/Swing'
=======
import DetailPage from '@/components/DetailPage'
import Order from '@/components/Order'

>>>>>>> f4a98e73678cd8d0566ca2537691be62343db6ef
Vue.use(Router)


export default new Router({
  mode: 'history',
  redirect:'/',
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
<<<<<<< HEAD
      path: '/swing',
      name: 'Swing',
      component: Swing
    },
=======
      path: '/detailpage',
      name: 'DetailPage',
      component: DetailPage
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
>>>>>>> f4a98e73678cd8d0566ca2537691be62343db6ef

  ]
})
