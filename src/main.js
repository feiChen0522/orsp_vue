import Vue from 'vue'
import App from './App'
import router from './router'
import Login from './components/Login'
import Regist from './components/Regist'
import Nav from './components/Nav'
import CenterNav from './components/CenterNav'
import Main from './components/Main'
import Header from './components/Header'
import Goods from './components/Goods'
import Carlist from './components/Cart/Carlist'
import CarlistSeller from './components/Cart/CarlistSeller'
import Footer from './components/Footer'
import SearchBox from './components/SearchBox'
import Classify from './components/search/Classify'
import Index from './components/Index'
import DetailPage from './components/DetailPage'
import UploadUsericon from './components/UploadUsericon'
import ChangePassword from './components/ChangePassword'
import ChangeTelephone from './components/ChangeTelephone'
import agreement from './components/Agreement'
import Swing from './components/Swing'
import AddAddress from './components/AddAddress'
import MyChange from './components/MyChange'
import MyReleaseGoods from './components/MyReleaseGoods'
import GoodsHaveSold from './components/GoodsHaveSold'
import PhotoLoupe from './components/PhotoLoupe'
import upload from './components/download/upload'
import Notice from './components/Notice'
import Address from './components/Address'
import Left from './components/person/Left'
import Paging from './components/test/Paging'
import comment from './components/comment/comment'
import Search from './components/test/Search'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//导入购物车
import Car1 from './components/Car1'
import ORSPDownload from './components/ORSPDownload'
import ORSPDownloadRight from './components/ORSPDownloadRight'
import ORSPDownloadHeader from './components/ORSPDownloadHeader'
import ORSPDownloadMain from './components/ORSPDownloadMain'
import ORSPDownloadCenter from './components/ORSPDownloadCenter'

Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.component('Login-div',Login);
Vue.component('Regist-div',Regist);
Vue.component('nav-div',Nav);
Vue.component('center-nav',CenterNav);
Vue.component('main-nav',Main);
Vue.component('header-top',Header);
Vue.component('goods-div',Goods);
Vue.component('car-list',Carlist);
Vue.component('Index-div', Index);
Vue.component('Login-div', Login);
Vue.component('search-div', SearchBox);
Vue.component('footer-div', Footer);
Vue.component('classify-div', Classify);
Vue.component('car-list', Carlist);
Vue.component('carsell-list', CarlistSeller);
Vue.component('detail-div', DetailPage);
Vue.component('upload-usericon', UploadUsericon);
Vue.component('change-password',ChangePassword);
Vue.component('change-telephone',ChangeTelephone);
Vue.component('agreement-div', agreement);
Vue.component('swing-div', Swing);
// Vue.component('paging2-div', Paging2);
Vue.component('my-release-goods', MyReleaseGoods);
Vue.component('left-div', Left);
Vue.component('paging-div', Paging);
Vue.component('addaddress-div', AddAddress);
Vue.component('MyChange-div', MyChange);
Vue.component('upload-div', upload);
Vue.component('goods-have-sold',GoodsHaveSold);
Vue.component('photo-loupe',PhotoLoupe);
Vue.component('comment-div',comment);
//购物车页面
Vue.component('Car1-div', Car1);
Vue.component('notice', Notice);
Vue.component('classify-search', Search);
//ORSP下载页面
Vue.component('orspdownload-main', ORSPDownloadMain);
Vue.component('orspdownload-header', ORSPDownloadHeader);
Vue.component('orspdownload', ORSPDownload);
Vue.component('orspdownload-center', ORSPDownloadCenter);
Vue.component('orspdownload-right', ORSPDownloadRight);
import global from './Global'
Vue.prototype.global=global

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
