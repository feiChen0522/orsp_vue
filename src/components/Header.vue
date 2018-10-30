<template>
  <nav class="navbar navbar-default navbar-inverse" style="border-radius: 0; min-height: 30px; margin-bottom: 0;">
    <div class="container-fluid" >
      <!-- Brand and toggle get grouped fsor better mobile display -->
      <div class="navbar-header">
        <button  type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav" style="margin-bottom: 0">
            <li>
              <p class="navbar-text">
                <router-link tag="a" to="/" style="font-size: 12px;color: #6c6c6c;cursor: pointer;">ORSP</router-link>
              </p>
            </li>
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
            <li>

            </li>
            <li @click='is_login'>
              <!--<router-link to="/personcenter">我的天下-->
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
      var token=localStorage.getItem('token');
      let vm=this;
      axios({
        method:'post',
        url:this.global.serverPath+'/user/judgetoken/',
        headers: {
          'token': token
        }
      })
        .then(function (res) {
          if (res.data.hasOwnProperty('user_name')){
            vm.LoginStatus="欢迎"+res.data.user_name;
            vm.RegistStatus="退出";
            sessionStorage.setItem('currentUserId',res.data.id);
            // next();
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
        localStorage.removeItem('token');
        window.location.reload()
      }else {
        $('#myModal2').modal('show');
      }
    },
    displayRegist:function (e) {

      console.log(2222222222222);
      $('#myModal1').modal('hide');
      $('#myModal2').modal('show')
    },
    coll:function(){
      alert('点击CTRL+D 收藏网站')
    },
    is_login:function () {
      var token=localStorage.getItem('token');
      if(token){
        console.log("前往个人中心");
        this.$router.push({
          name:'Center'
        });
      }else{
        $("#myModal1").modal("show")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form{
  }
  .navbar-inverse{
    background-color: #f2f2f2;
    border:none;
  }
  .navbar-nav>li>a {
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 12px;
    color: #6c6c6c;
  }
  .navbar-nav>li>a:hover{

    color: red;
  }
  .navbar-text {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .navbar-text>a:hover{
    text-decoration: none;
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
