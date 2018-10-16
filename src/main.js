// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Login from './components/Login'
import Regist from './components/Regist'
import Nav from './components/Nav'
import CenterNav from './components/CenterNav'
import Main from './components/Main'
import Header from './components/Header'
import Swing from './components/Swing'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.component('Login-div',Login);
Vue.component('Regist-div',Regist);
Vue.component('nav-div',Nav);
Vue.component('center-nav',CenterNav);
Vue.component('main-nav',Main);
Vue.component('header',Header);
Vue.component('swing-div',Swing);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
