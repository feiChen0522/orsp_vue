import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Regist from '@/components/Regist'
import DetailPage from '@/components/DetailPage'
import Detail from '@/components/Detail'
import Order from '@/components/Order'
import Address from '@/components/Address'
import NewCar from '@/components/NewCar'

import Release from '@/components/Release'
import Agreement from '@/components/Agreement'
import Index from '@/components/Index'
import Upload from '@/components/download/upload'
import Center from '@/components/person/Center'
import Paging from '@/components/test/Paging'
import MyCollect from '@/components/MyCollect'
import AccountManage from '@/components/AccountManage'
import Cart from '@/components/Cart/Cart'
import Car1 from '@/components/Car1'
import Car2 from '@/components/Car2'
import Car3 from '@/components/Car3'
import MsgManage from '@/components/MsgManage'
import Swing from '@/components/Swing'
import SecurityCenter from '@//components/SecurityCenter'
import ShoppingAddress from '@/components/ShoppingAddress'
import MyReleaseGoods from '@/components/MyReleaseGoods'
import GoodsHaveSold from '@/components/GoodsHaveSold'
import ShowMyUpSesource from '@/components/download/ShowMyUpSesource'
import DownSesource from '@/components/download/DownSesource'

import comment from '@/components/comment/comment'
import Board from '@/components/Board'
import Search from '@/components/test/Search'

import ORSPDownload from '@/components/ORSPDownload'
import ORSPDownloadHeader from '@/components/ORSPDownloadHeader'
import ORSPDownloadMain from '@/components/ORSPDownloadMain'
import HadDownload from '@/components/HadDownload'
import ORSPUpload from '@/components/ORSPUpload'
import ORSPCollect from '@/components/ORSPCollect'
import ORSPMyFile from '@/components/ORSPMyFile'

// import Search from '@/components/Search'
import SearchMain from '@/components/search/SearchMain'
import MyChange from '@/components/MyChange'
import PersonLeft from '@/components/person/Left'
import test from '@/components/test/test'

Vue.use(Router)


export default new Router({
  mode: 'history',
  redirect:'/',
  scrollBehavior(to, from, savedPosition) {

    if (savedPosition) {
      //真正起作用的是这里,else里面的if删除了，免得误导
      return savedPosition
    } else {
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/newcar',
      name: 'NewCar',
      component: NewCar,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Regist',
      name: 'Regist',
      component: Regist
    },

    {
      path: '/detailpage',
      name: 'DetailPage',
      component: Detail
    },


    {
      path: '/search',
      name: 'SearchMain',
      component: SearchMain
    },
    {
      path: '/board',
      name: 'Board',
      component: Board
    },

    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/release',
      name: 'Release',
      component: Release,
      meta: {
        title: 'Release',
        keepAlive:true
      },
    },
    {
      path: '/agreement',
      name: 'Agreement',
      component: Agreement
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
    },
    //  个人中心左侧
    {
      path: '/personleft',
      name: 'PersonLeft',
      component: PersonLeft
    },
    {
      path: '/test',
      name: 'Search',
      component: Search
    },
    {
      path: '/paging',
      name: 'Paging',
      component: Paging
    },
  //  个人中心
    {
      path:'/personcenter',
      name:'Center',
      component:Center,
      redirect:'/accountManage',
      children:[
        {
          path: '/address',
          name: 'Address',
          component: Address
        },
        {
          path: '/mychange',
          name: 'MyChange',
          component: MyChange
        },
        {
          path: '/order',
          name: 'Order',
          component: Order
        },
        {
          path: '/goodshaveSold',
          name: 'GoodsHaveSold',
          component: GoodsHaveSold
        },
        {
          path: '/myreleaseGoods',
          name: 'MyReleaseGoods',
          component: MyReleaseGoods
        },
        {
          path: '/showmyupsesource',
          name: 'ShowMyUpSesource',
          component: ShowMyUpSesource
        },
        {
          path: '/downsesource',
          name: 'DownSesource',
          component: DownSesource
        },
        //个人信息
        {
          path: '/accountManage',
          name: 'AccountManage',
          component: AccountManage,
          redirect:'/msgManage',
          children:[
            {
              path: '/msgManage',
              name: 'MsgManage',
              component: MsgManage
            },
            {
              path: '/securityCenter',
              name: 'SecurityCenter',
              component: SecurityCenter
            },
            {
              path: '/shoppingAddress',
              name: 'ShoppingAddress',
              component: ShoppingAddress
            }
          ]
        },
        {
          path: '/mycollect',
          name: 'MyCollect',
          component: MyCollect
        },
      ]
    },

    // 下载头部
    {
      path: '/orspdownloadheader',
      name: 'ORSPDownloadHeader',
      component: ORSPDownloadHeader
    },
    // 下载中心
    {
      path: '/orspdownloadmain',
      name: 'ORSPDownloadMain',
      component: ORSPDownloadMain,
      redirect:'/orspdownload',
      children:[
        //下载首页
        {
          path: '/orspdownload',
          name: 'ORSPDownload',
          component: ORSPDownload
        },
        {
          path: '/haddownload',
          name: 'HadDownload',
          component: HadDownload
        },
        {
          path: '/orspupload',
          name: 'ORSPUpload',
          component: ORSPUpload
        },
        {
          path: '/orspcollect',
          name: 'ORSPCollect',
          component: ORSPCollect
        },
        {
          path: '/orspmyfile',
          name: 'ORSPMyFile',
          component: ORSPMyFile
        }

      ]
    },

  ]
})
