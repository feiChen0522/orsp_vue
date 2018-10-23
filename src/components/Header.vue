<template>
  <nav class="navbar navbar-default navbar-inverse" style="border-radius: 0; min-height: 30px; margin-bottom: 0;">
    <div class="container-fluid" style="width: 90%;">
      <!-- Brand and toggle get grouped fsor better mobile display -->
      <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed " data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" style="padding: 2px 4px;margin: 3px 5px 0 0;;">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <p class="navbar-text">
            <router-link to="/" tag="a" class="navbar-brand navbar-link "  style="margin-left: 0; padding: 0 0 0 5px; height: 10px;">ORSP</router-link>
          </p>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav" style="margin-bottom: 0">
           <li>
             <!--<a >您好，请登录<span class="sr-only">(current)</span></a>-->
             <a data-toggle="modal" data-target="#myModal1" @click.stop.prevent="goPersonCenter">
               <p class="p1" v-text="LoginStatus" style="cursor: pointer" ></p>
             </a>
           </li>

            <!--登录模态框开始-->
            <!-- Button trigger modal -->


            <!-- Modal -->
            <div class="modal fade in" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div class="modal-dialog" role="document">
                <div class="modal-content" style="width: 475px;">

                  <div class="modal-body" >
                    <Login-div @jump-regist="displayRegist"></Login-div>
                  </div>

                </div>
              </div>
            </div>
            <!--登录模态框结束-->

            <!--注册模态框开始-->
            <div class="modal fade in" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div class="modal-dialog" role="document">
                <div class="modal-content" style="width: 475px;">

                  <div class="modal-body" >
                    <Regist-div></Regist-div>
                  </div>

                </div>
              </div>
            </div>
            <!--模态框结束-->
            <li>
              <a data-toggle="modal" data-target="#myModal2">
                <p class="p1" v-text="RegistStatus" style="cursor: pointer" @click.stop.prevent="cancelLogin" @jumpResit="displayRegist"></p>
              </a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right" style="margin-top: 0;">
            <li @click='is_login'>
              <!--<router-link to="/personcenter">-->
              <a @click.self.prevent><p class="p1">我的天下</p></a>
              <!--</router-link>-->
            </li>
            <li>
              <router-link to="/car1">
                <p class="p1">换物车</p>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <p class="p1">我的收藏</p>
              </router-link>
            </li>
            <li>
              <router-link to="/board">
                <p class="p1">联系我们</p>
              </router-link>
            </li>
            <li>
                <p class="p1 p2" @click="coll">收藏网站</p>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
  import 'bootstrap/js/modal'
  import Login from '../common/js/login'
export default {
  name: 'Header',
  data () {
    return {
      LoginTitle:"欢迎登录",
      LoginStatus:"您好，请登录",
      RegistStatus:"注册",

    }
  },

  mounted:function(){
    Login.$on('HaveLogin',target=>{
      $('#myModal1').modal('show')
    });

    if (localStorage.getItem('token')!=null) {
      var token=localStorage.getItem('token')
      let vm=this
      axios({
        method:'post',
        url:'http://127.0.0.1:8000/user/judgetoken/',
        headers: {
          'token': token
        }
      })
        .then(function (res) {

          if (res.data.hasOwnProperty('user_name')){
            vm.LoginStatus="欢迎"+res.data.user_name
            vm.RegistStatus="退出"
            next();
          } else {
            alert("登录失败")
          }
          //控

        })
        .catch(function (err) {

        })



    }
  },
  methods:{
    goPersonCenter:function () {
      if (this.LoginStatus!="您好，请登录") {
        this.$router.push({
          name:'Center'
        })
      }else {
        $('#myModal1').modal('show');
      }
    },
    cancelLogin:function () {
      if (this.RegistStatus!="注册") {
        localStorage.removeItem('token')
        window.location.reload()
      }else {
        $('#myModal2').modal('show');
      }
    },
    displayRegist:function () {
      $('myModal2').modal('hide')
      $('myModal1').modal('show')
    },
    coll:function(){
      alert('点击CTRL+D 收藏网站')
    },
    is_login:function () {
      var token=localStorage.getItem('token')
      if(token){
        console.log("前往个人中心")
        this.$router.push({
          name:'Center'
        });
      }else{
        alert("请先登录！！！在查看个人中心！！！！   宝仕，这里要弹出登录模态框，我没弹出来，你来搞")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar-nav>li>a {
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 12px;
    color: rgba(251, 253, 252, 0.68);
  }
  .navbar-text {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .p1{
    height: 10px;
    font-size: 12px!important;
    cursor: pointer;
  }
  .p2{
    padding-top: 7px;
    padding-bottom: 5px;
    font-size: 12px;
    color: rgba(251, 253, 252, 0.68);
  }
  .p2:hover{
    color: white;
    cursor: pointer;
  }
</style>
