import Vue from 'vue'
import App from './App'
import router from './router'
import Login from './components/Login'
import Regist from './components/Regist'
import Nav from './components/Nav'
import CenterNav from './components/CenterNav'
import Main from './components/Main'
<<<<<<< HEAD
import Swing from './components/Swing'
import HelloWorld from './components/HelloWorld'
=======
import Header from './components/Header'
import Swing from './components/Swing'
>>>>>>> f4a98e73678cd8d0566ca2537691be62343db6ef
import Goods from './components/Goods'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.component('Login-div',Login);
Vue.component('Regist-div',Regist);
Vue.component('nav-div',Nav);
Vue.component('center-nav',CenterNav);
Vue.component('main-nav',Main);
<<<<<<< HEAD
=======
Vue.component('header-top',Header);
>>>>>>> f4a98e73678cd8d0566ca2537691be62343db6ef
Vue.component('swing-div',Swing);
Vue.component('goods-div',Goods);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
