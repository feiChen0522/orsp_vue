<template>
  <div class="right">
      <div class="top-txt"></div>
      <div class="user_login_info">
        <div class="user_login_img">
          <div class="logo_img">
            <img :src="userinfo.icon" alt="" class="image" data-toggle="modal" data-target="#usericon">
            <!--<input type="file" class="file" data-toggle="modal" data-target="#usericon" v-on:click.prevent="onClick">-->
          </div>
          <span v-if="!islogin" style="cursor: pointer">您好，请登录</span>
          <div class="info" v-if="islogin">
            <div class="name">Hi，<i v-text="userinfo.name"></i></div>
            <div class="level">
              <span class="level-sp1">等级:</span>
              <span class="level-sp2" v-text="userinfo.level"></span>
              <i class="level-i2" v-text="userinfo.integral"></i>
              <i class="level-i1">下载积分：</i>
            </div>
          </div>
        </div>
        <div class="user-upload">上传资源</div>
      </div>
      <div class=""></div>
      <div class="recommend">
        <div class="recommend-top">
          <span class="line"></span>
          <span class="top-sp">OR<i style="color: #333; font-style: normal">今日分享</i>SP</span>
        </div>
        <!--今日分享的条数暂定为5-->
        <div class="recommend-center">
          <ul>
            <li>
              <p class="p1">机器学习极简入门课</p>
              <p class="p2"><i>作者/分享人：</i><i>飞哥哥哥</i></p>
            </li>
            <li>
              <p class="p1">机器学习极简入门课</p>
              <p class="p2"><i>作者/分享人：</i><i>飞哥哥哥</i></p>
            </li>
            <li>
              <p class="p1">机器学习极简入门课</p>
              <p class="p2"><i>作者/分享人：</i><i>飞哥哥哥</i></p>
            </li>
            <li>
              <p class="p1">机器学习极简入门课</p>
              <p class="p2"><i>作者/分享人：</i><i>飞哥哥哥</i></p>
            </li>
            <li>
              <p class="p1">机器学习极简入门课</p>
              <p class="p2"><i>作者/分享人：</i><i>飞哥哥哥</i></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
  name: 'ORSPDownloadRight',
  data () {
    return {
      islogin:false,
      defaulturl:"../assets/images/avatar_89373029_1496285287409.jpg",
      userinfo:{
        name:'',
        icon:'',
        level:'',
        integral:'',
      },
      list:{},
    }
  },
  created:function () {
    var vm= this;
    var token=localStorage.getItem("token");
    if (token){
      vm.islogin=true;
      axios({
        url:this.global.serverPath+"/user/showuser/",
        headers:{
          "token":token
        },
        method:"get"
      })
        .then(function(res){
          vm.list=res.data;
          console.log(vm.list);
          vm.userinfo.name=vm.list.user_name;
          vm.userinfo.integral=vm.list.integral;
          vm.userinfo.level=vm.list.level;
          if(vm.list.icon){
            vm.userinfo.icon=vm.global.serverPath+"/media/pic/"+vm.list.icon;
          }
          else{
            vm.userinfo.icon=vm.defaulturl;
          }
        })
        .catch(function (err) {
          console.log("error:",err)
        })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  i{
    font-style: normal;
  }
  .right{
    width: 300px;
    min-height: 500px;
    float: right;
  }
  .top-txt{
    width: 300px;
    height: 30px;
    /*background-image: url("../assets/images/hiorsp.png");*/
    /*background-repeat: no-repeat;*/
    /*background-size: contain;*/
  }
  .user_login_info{
    margin-bottom: 20px;
    margin-top: 70px;
    padding: 0 19px 18px;
    width: 100%;
    background-color: #fff;
    border: 1px solid #eee;
  }
  .user_login_img{
    padding-bottom: 10px;
    border-bottom: 1px solid #ebedf2;
    font-size: 14px;
    color: #333;
  }
  .user_login_img .logo_img{
    position: relative;
    width: 100px;
    height: 100px;
    border: 1px solid #d5d8df;
    border-radius: 50%;
    margin: -50px auto 10px;
    background-color: #ebedf2;
    cursor: pointer;

  }
  .user_login_img .logo_img .image{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-size: cover;
  }
  .user_login_img .logo_img .file{
    opacity: 0;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-indent: 5px;
    position: relative;
    top: -100px;
    z-index: 50;
    border-radius: 50%;
  }
  .user_login_img .info .name{
    font-size: 14px;
    color: #333;
    font-weight: 700;
    text-align: left;
    padding-left: 10px;
    margin-bottom: 5px;
  }
  .user_login_img .info .level{
    height: 16px;
    padding: 0 10px;
  }
  .user_login_img .info .level .level-sp1,.user_login_img .info .level .level-sp2{
    display: inline-block;
    float: left;
    width: 32px;
    height: 16px;
    background-color: #9DC75F;
    font-size: 10px;
    font-weight: bold;
    color: #FFFFFF;
    position: relative;
    line-height: 16px;
  }
  .user_login_img .info .level .level-sp2{
    background-color: #2D5315;
    width: 16px;
    height: 16px;
  }
  .user_login_img .info .level i{
    font-size: 12px;
    font-weight: 400;
    color: #6b6b6b;
    display: inline-block;
    float: right;
  }
  .user_login_img .info .level .level-i2{
    color: #ed5570;
  }
  .user-upload{
    margin-top: 10px;
    width: 100%;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    background: #e82a2a;
    border-radius: 5px;
    text-align: center;
  }
  .recommend{
    padding: 0 19px;
    width: 100%;
    background-color: #fff;
    border: 1px solid #eee;
  }
  .recommend-top{
    width: 100%;
    height: 40px;
    line-height: 50px;
  }
  .recommend-top .line{
    display: block;
    float: left;
    width: 3px;
    height: 17px;
    position: relative;
    top: 15px;
    background: #cf2730;
    margin: 0 8px 0 0;
  }
  .recommend-top .top-sp{
    display: block;
    float: left;
    font-size: 16px;
    color: #868b96;
  }
  .recommend-center{
    padding-top: 10px;
  }
  .recommend-center ul,.recommend-center ul li{
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
  }
  .recommend-center ul li{
    height: 60px;
    border-top: 1px solid #ebedf2;
    text-align: left;
    padding: 8px 5px;
  }
  .recommend-center ul li .p1{
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 14px;
    color: #545454;
  }
  .recommend-center ul li .p1:hover{
    color: #cc0000;
    cursor: pointer;
  }
  .recommend-center ul li .p2{
    font-size: 12px;
    color: #888;
  }
</style>
