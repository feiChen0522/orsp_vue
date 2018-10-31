<template>
  <div class="container" style="width: 400px!important;" >

          <div class="login-div" v-if="!regist_success">
            <div class="row">
              <div class="col-lg-12 r-welcome"><h1>欢迎注册</h1></div>
              <div class="col-lg-12 r-user-input" >
                <input type="text" placeholder="请输入用户名"  v-model="username">
              </div>
              <div class="col-lg-12 check-txt" >
                <a href="" v-if="username_correct">中英文均可,最少14个英文或者7个汉字</a>
                <a href="" v-else v-text="username_tip"></a>
              </div>
              <div class="col-lg-12 r-telephone-input" >
                <input type="text" placeholder="请输入手机号" maxlength="11" v-model="telephone">
              </div>
              <div class="col-lg-12 check-txt" >
                <a href="" v-if="tel_correct">请输入正确的手机号</a>
                <a href="" v-else v-text="telephone_tip"></a>
              </div>
              <div class="col-lg-12 r-password-input">
                <input type="password" placeholder="请设置密码" maxlength="40" v-model="password">
              </div>

              <div class="col-lg-12 check-txt" >
                <a href="" v-if="psd_correct">至少8位,至少包括字母,数字,特殊字符</a>
                <a href="" v-else v-text="password_tip"></a>

              </div>

              <div class="col-lg-12 sms-verification">
                <input type="text" v-model="sms_text">
                <span @click="sendVerificationCode">获取短信验证码</span>
              </div>
              <div class="col-lg-12 check-txt" >
                <a v-if="isVerification">请输入正确的验证码</a>

              </div>
              <div class="col-lg-12 r-login-div">
                <div class="btn btn-success" @click="regist">注册</div>
              </div>

              <div class="have-account col-lg-12">
                <div class="row">
                  <a href="" class="col-lg-9">
                    已有账号?
                  </a>

                <a href="" class="col-lg-3">去登录</a>
                </div></div>
              <div class="login-third col-lg-12">
                <p><a href="">第三方登录</a></p>
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

          <div class="login-div" v-else>
            <div class="row">
              <div class="col-lg-12 regist-success" style="color: green;font-size: 20px">注册成功,<a href="" v-text="second"></a>秒后自动返回主页面</div>
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
      username:"raobaoshi",
      telephone:"15755407860",
      password:"1234561",
      username_correct:false,
      tel_correct:false,
      psd_correct:false,
      username_tip:"",
      telephone_tip:"",
      password_tip:"",
      url:this.global.serverPath+"/user/regist/",
      tel_flag:false,
      regist_success:false,
      second:5,
      sms_text:"",
      isVerification:false
    }
  },
  created:function(){
    this.debouncedvertifyTel = _.debounce(this.vertifyTel, 1000);
    this.debouncedvertifyPsd = _.debounce(this.vertifyPsd, 1000);
    this.debouncedvertifyUserName = _.debounce(this.vertifyUserName, 1000)
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
        this.tel_flag=true
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
    vertifyUserName:function () {
      if (!this.username){
        this.username_correct=false
      } else if (!(/^.{7,}$/.test(this.username))) {
        this.username_correct=true
      }
      else {
        this.username_correct=false
      }
    },
  //  发送ajax请求登录
    regist:function () {

      let flag=true;
      //判断用户名,手机号,密码是否都填写
      if (!this.username){
        this.username_tip="请设置用户名";
        flag=false;
      }
      if (!this.password){
        this.password_tip="请设置密码";
        flag=false;
      }
      if (!this.telephone){
        this.telephone_tip="请输入手机号";
        flag=false;
      }
      let vm = this;
      // axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';
      if(flag){
        //先验证手机号是否存在
        axios.post(this.global.serverPath+'/user/isexist/',
          {'telephone': vm.telephone
          },{
            // headers: {
            //   'Content-Type': 'application/json',
            // }
          })
          .then(function (res) {
            if (res.data.code=="208"){
              vm.telephone_tip="手机号已被注册,请直接登录";
            }else if (res.data.code=="408"){
              axios.post(vm.global.serverPath+'/user/yezheng/',
                {'phone': vm.telephone,
                  'yecode':vm.sms_text
                })
                .then(function (res) {
                  console.log(res);
                  if (res.data.code=="200"){
                    axios.post(vm.url,
                      {'telephone': vm.telephone, 'password': vm.password,'user_name':vm.username
                      },{
                        // headers: {
                        //   'Content-Type': 'application/json',
                        // }
                      })
                      .then(function (res) {
                        let token=res.headers.token
                        localStorage.setItem('token',token);
                        vm.regist_success=true;
                        console.log("++++++++++++++++++++++++++")
                        axios({
                          method:'post',
                          url:this.global.serverPath+'/user/judgetoken/',
                          headers:{'token':token},
                        })
                          .then(function (rsp) {
                            console.log("++++++++++++++++11111regist++++++++++")
                            console.log(rsp.data)
                            sessionStorage.setItem('currentUserId',rsp.data.id)
                            setInterval(function () {
                              if(parseInt(vm.second)===1){
                                //  ?????????????????在这里放跳转主页
                                window.location.reload()
                              }
                              vm.second-=1
                            },1000)
                          })
                          .catch(function (err) {
                            console.log('请求失败',err);
                          })

                        //控制台打印请求成功时返回的数据
                        //bind(this)可以不用
                      }.bind(this))
                      .catch(function (err) {
                        if (err.response) {
                          console.log(err.response)
                          //控制台打印错误返回的内容
                        }
                        //bind(this)可以不用
                      }.bind(this))
                  } else {
                    vm.isVerification=true
                  }
                  // console.log(res.headers);
                  // sessionStorage.setItem('token',res.headers.token)
                  //控制台打印请求成功时返回的数据
                  //bind(this)可以不用
                }.bind(this))
                .catch(function (err) {
                  if (err.response) {
                    //控制台打印错误返回的内容
                  }
                  //bind(this)可以不用
                }.bind(this))





            }
            // console.log(res.headers);
            // sessionStorage.setItem('token',res.headers.token)
            //控制台打印请求成功时返回的数据
            //bind(this)可以不用
          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              //控制台打印错误返回的内容
            }
            //bind(this)可以不用
          }.bind(this))

      }
    },
    sendVerificationCode:function () {
      let vm=this
      axios.post(this.global.serverPath+'/user/sendverificationcode/',
        {'phone': vm.telephone
        })
        .then(function (res) {
          console.log(res);
          // console.log(res.headers);
          // sessionStorage.setItem('token',res.headers.token)
          //控制台打印请求成功时返回的数据
          //bind(this)可以不用
        }.bind(this))
        .catch(function (err) {
          if (err.response) {
            //控制台打印错误返回的内容
          }
          //bind(this)可以不用
        }.bind(this))
    }
  },
  computed:{
    telephoneVerify:function () {

    }
    },
  watch:{
    telephone:function (newtel) {
      console.log("执行了getAnswer");
      this.debouncedvertifyTel();
      this.telephone_tip="";
      if(this.tel_flag){
        console.log("执行了axios");

      }
    },
    password:function () {
      this.debouncedvertifyPsd();
      this.password_tip="";

    },
    username:function () {
      this.debouncedvertifyUserName();
      this.username_tip=""
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  *{margin: 0;padding: 0;list-style: none;}
  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* structural elements 结构元素 */
  dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
  pre, /* text formatting elements 文本格式元素 */
  form, fieldset, legend, button, input, textarea, /* form elements 表单元素 */
  th, td /* table elements 表格元素 */ {
    margin: 0;
    padding: 0;
  }
  input{
    background:none;
    outline:none;
    border:0px;
  }
  ul, ol { list-style: none; }

  /** 重置文本格式元素 **/
  a { text-decoration: none;}
  .login-div{
    margin: 0 auto;
    width: 400px ;
    /*height: 380px;*/

  }
  a:hover{
    color: red!important;
  }
  .container{
  }
  div.row h1{
    font-size: 18px;
    color: lightgreen;
    font-weight: 200;
  }
  .login-div>div.row>div{
    margin-top: 15px;
  }
  .login-div .r-welcome{
    height: 50px;
  }
  .login-div .r-welcome>h1{
    height: 100%;
    line-height: 50px;

  }
  div input{
    padding-left: 10px;
  }
  .login-div .r-telephone-input{
    height: 42px;
  }
  .login-div .r-telephone-input input{
    height: 42px;
    width: 302px;
    border: 1px solid #9d9d9d85;
  }

  .login-div .r-password-input{
    height: 42px;
  }
  .login-div .r-password-input input{
    height: 42px;
    width: 302px;
    border: 1px solid #9d9d9d85;
  }
  .login-div .r-login-div>div{
    height: 42px;
    width: 302px;
    border: 1px solid #9d9d9d85;
    line-height: 42px;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 2px;
  }
  .login-div .have-account{
    text-align: left;
    padding-left: 50px;
    margin-bottom: 20px;
  }
  .check-txt{
    text-align: left;
    margin-left: 53px;
    height: 10px;
    margin-top: 0px!important;
  }
  .r-telephone-input{
    margin-bottom: 0px!important;
  }
  .check-txt>a{
    color: red!important;
    font-size: 11px!important;
    font-weight: 300;
  }

  /*第三方登录
  */
  .login-third .login-third-icon {
    display: flex;
    justify-content: center;
  }
  .login-third>p{
    color: #5f5f5f;
  }
  .login-third>p>a:hover{
    color: #5f5f5f!important;
  }
  .login-third .login-third-icon div {
    width: 25px;
    height: 25px;
    margin-top: 10px;
    margin-left: 10px;
    background-image: url("../../src/assets/ico-bind-logo.png");
    cursor: pointer;
    opacity: 0.7;

  }

  .login-third .login-third-icon div:hover {
    opacity: 1;

  }

  .login-third .login-third-icon div:nth-child(1) {
    background-position: 0px 216px;
  }

  .login-third .login-third-icon div:nth-child(2) {
    background-position: 0px 174px;

  }

  .login-third .login-third-icon div:nth-child(3) {
    background-position: 0px 134px;

  }

  .login-third .login-third-icon div:nth-child(4) {
    background-position: 0px 94px;

  }

  .login-third .login-third-icon div:nth-child(5) {
    background-position: 0px 62px;
  }
  .r-user-input>input{
    width: 302px;
    height: 42px;
    border: 1px solid #9d9d9d85;
  }
  .regist-success{
    height: 200px;
    line-height: 200px;
  }
  .sms-verification>input{
    height: 42px;
    width: 150px;
    border: 1px solid #9d9d9d85;
    margin-right: 30px;
  }
  .sms-verification>span{
    width: 120px;
    height: 42px;
    background-color: #f7f7f7;
    cursor: pointer;
    display: inline-block;
    line-height: 42px;
    border: 1px solid #9d9d9d85;
    color: #999999;
  }

</style>
