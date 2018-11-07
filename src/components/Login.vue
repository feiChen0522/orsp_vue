<template>
  <div class="container" style="width: 400px!important;">

          <div class="login-div" >
            <div class="row">
              <div class="col-lg-12 r-welcome"><h1>欢迎登录</h1></div>
              <div class="col-lg-12 r-telephone-input" >
                <input type="text" placeholder="请输入手机号" maxlength="11" v-model="telephone">
              </div>
              <div class="col-lg-12 check-txt" >
                <a  v-if="tel_correct">手机号不合法</a>
              </div>
              <div class="col-lg-12 r-password-input">
                <input type="password" placeholder="请输入密码" maxlength="40" v-model="password">
              </div>
              <div class="col-lg-12 check-txt" >
                <a  v-if="psd_correct">密码不正确请重新输入</a>
              </div>
              <div class="col-lg-12 r-login-div">
                <div class="btn btn-success" @click="login">登录</div>
              </div>

              <div class="have-account col-lg-12">
                <div class="row">
                  <a  class="col-lg-9">
                    还没有账号?
                  </a>

                <a  class="col-lg-3" @click="jumpRegist">去注册</a>
                </div></div>
              <div class="login-third">
                <p><a >第三方登录</a></p>
                <div class="login-third-icon">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'Login',
  data () {
    return {
      telephone:"15755407823",
      password:"1234561",
      tel_correct:false,
      psd_correct:false,
      // url:this.global.serverPath+"/user/login/"
      url:this.global.serverPath+"/user/login/"
    }
  },
  created:function(){
    this.debouncedvertifyTel = _.debounce(this.vertifyTel, 1000)
    this.debouncedvertifyPsd = _.debounce(this.vertifyPsd, 1000)
  },
  methods:{
    vertifyTel:function () {
      if (!this.telephone){
        this.tel_correct=false
      } else if (!(/^1[34578]\d{9}$/.test(this.telephone))) {
        this.tel_correct=true
      }
      else {
        this.tel_correct=false
      }
    },
    vertifyPsd:function () {
      if (!this.telephone){
        this.psd_correct=false
      } else if (this.password.length<=6) {
        this.psd_correct=true
      }
      else {
        this.psd_correct=false
      }
    },
  //  发送ajax请求登录
    login:function () {
      console.log("this.global",this.global.serverPath)
      let vm = this;
      // axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';
      axios.post(vm.url,
        {'telephone': vm.telephone, 'password': vm.password
        },{
        // headers: {
        //   'Content-Type': 'application/json',
        // }
      })
        .then(function (res) {
          localStorage.setItem('token',res.headers.token)
          // console.log(localStorage.getItem('token'));
          axios({
            method:'post',
            url:vm.global.serverPath+'/user/judgetoken/',
            headers:{'token':localStorage.getItem('token')},
          })
            .then(function (rsp) {
              console.log("++++++++++++++++login++++++++++")
              console.log(rsp.data)
              sessionStorage.setItem('currentUserId',rsp.data.id)
              window.location.reload()

              // setInterval(function () {
              //   if(parseInt(vm.second)===1){
              //     //  ?????????????????在这里放跳转主页
              //     window.location.reload()
              //   }
              //   vm.second-=1
              // },1000)
            })
            .catch(function (err) {
              console.log('请求失败',err);
            })
          //控制台打印请求成功时返回的数据
          //bind(this)可以不用
        }.bind(this))
        .catch(function (err) {
          if (err.response) {
            //控制台打印错误返回的内容
          }
          //bind(this)可以不用
        }.bind(this))
    },
    jumpRegist:function () {
      console.log(111111111111);
      this.$emit('jump-regist',1)
    }
  },
  computed:{
    telephoneVerify:function () {

    }
    },
  watch:{
    telephone:function (newtel) {
      this.debouncedvertifyTel();
    },
    password:function () {
      this.debouncedvertifyPsd();


    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../static/css/clear.css';
  @import '../../static/css/login.css';
</style>
