import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Regist from '@/components/Regist'
import DetailPage from '@/components/DetailPage'
import Order from '@/components/Order'
import Address from '@/components/Address'
import AddAddress from '@/components/AddAddress'
import Car1 from '@/components/Car1'
import Car2 from '@/components/Car2'
import Car3 from '@/components/Car3'

Vue.use(Router)


export default new Router({
  mode: 'history',
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
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/addaddress',
      name: 'AddAddress',
      component: AddAddress
    },
    {
      path: '/car1',
      name: 'Car1',
      component: Car1
    },
    {
      path: '/car2',
      name: 'Car2',
      component: Car2
    },
    {
      path: '/car3',
      name: 'Car3',
      component: Car3
    }
  ]
})
