<template>
  <div class="container">
    <!--提示模态框-->
    <div class="modal fade" id="tishi" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div v-text="tishi_msg"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="top">
      <div class="top-left">
        <div class="logo-img">
          <img :src="userinfo.icon" alt="">
        </div>
        <div class="name" v-text="userinfo.name"></div>
        <div class="level">
          <span class="level-sp1">等级:</span>
          <span class="level-sp2"  v-text="userinfo.level"></span>
        </div>
      </div>
      <div class="top-right">
        <div class="d1">
          <span>积分</span>
          <span v-text="userinfo.integral">10240</span>
        </div>
        <div class="d1">
          <span>上传资源</span>
          <span v-text="count.uploadcount">2</span>
        </div>
        <div class="d1">
          <span>下传资源</span>
          <span v-text="count.downloadcount">3</span>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="center-top">
        <span class="top-sp">我的收藏</span>
      </div>
      <div class="re-center">
        <ul>
          <li v-for="(i,index) in file" :id="i.id">
            <div class="img-div">
              <img src="../assets/download/xlsx.png" alt="">
            </div>
            <p class="p1">
              <i v-text="i.title"></i>
              <i class="glyphicon glyphicon-heart" style="color: red;font-size: 18px" title="点我取消收藏" @click="change_xinxin($event.target,i.id,index)"></i>
            </p>
            <p class="p2">
              <i>作者/分享人：</i><i v-text="i.upload_user_name"></i>
              <i>上传时间：</i><i v-text="i.upload_time"></i>
              <i>收藏人数：</i><i v-text="i.collectcount"></i>
              <i>积分/O币：</i><i v-text="i.need_integral"></i>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ORSPCollect',
  data() {
    return {
      tishi_msg: '',
      defaulturl: "../assets/images/avatar_89373029_1496285287409.jpg",
      list: '',
      file: '',
      fileinfo: {
        id: '',
        describe: '',
        upload_time: '',
        need_integral: '',
        upload_user_name: '',
        like_num: '',
        share_num: '',
      },
      userinfo: {
        name: '',
        level: '',
        icon: '',
        integral: '',
      },
      count: '',
      uploadcount: '', //上传资源次数
      downloadcount: '', //下载资源次数
      collectcount: '', //收藏次数
    }
  },
  created: function () {

    this.getUserInfo();
    this.showCollectFile();

  },
  methods: {
    //更新收藏人数
    collecctnumber: function (i, e, index) {
      console.log("重新刷新收藏人数");
      let vm = this;
      axios({
        url: this.global.serverPath+"/file/collectnumber/",
        method: "post",
        data: {
          "id": i,
        }
      })
        .then(function (res) {
          let cou = res.data;
          console.log(cou);
          vm.collectcount = cou;
          console.log("哈哈哈哈", i);
          vm.file[index]["collectcount"] = vm.collectcount
        })
        .catch(function (err) {
          console.log(err);
        })
    },
    //点击心心触发
    change_xinxin: function (e, i, index) {  //i为当前文件id
      let userid = sessionStorage.getItem("currentUserId");
      let vm = this;
      //添加收藏
      axios({
        url: this.global.serverPath+"/file/cancelcollect/",
        method: "post",
        data: {
          "id": i,
          "userid": userid
        }
      })
        .then(function (res) {
          let ress = res.data;
          if (ress.code == "222") {
            vm.tishi_msg = "取消收藏成功";
            $('#tishi').modal("show");
            vm.showCollectFile()
            // vm.collecctnumber(i, e, index)
          }
        })
        .catch(function (err) {
          console.log(err);
        })
    },
    getUserInfo: function () {
      var vm = this;
      var token = localStorage.getItem("token");
      axios({
        url: this.global.serverPath+"/user/showuser/",
        headers: {
          "token": token
        },
        method: "get"
      })
        .then(function (response) {
          vm.list = response.data;
          console.log(response.data);
          vm.userinfo.name = vm.list.user_name;
          vm.userinfo.sex = vm.list.sex;
          vm.userinfo.integral = vm.list.integral;
          vm.userinfo.level = vm.list.level;
          if (vm.list.icon) {
            vm.userinfo.icon = vm.global.serverPath+"/media/pic/" + vm.list.icon;
          }
          else {
            vm.userinfo.icon = vm.defaulturl;
          }
        })
        .catch(function (err) {
          console.log("error:", err)
        })
    },
    showCollectFile: function () {
      var userid = sessionStorage.getItem("currentUserId");
      let vm = this;
      axios.get(this.global.serverPath+"/file/showcollectfile/" + userid)
        .then(function (res) {
          vm.file = res.data;
          vm.count = vm.file.pop();
        })
        .catch(function (err) {
          console.log(err);
        })
    },
  }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #tishi{
    font-size: 14px;
    color: #333;
    font-weight: 400;
    /*position: absolute;*/
    /*top: 50%;*/
    /*left: 50%;*/
    /*transform: translateX(-50%) translateY(-50%);*/
  }
  i{
    font-style: normal;
  }
  .container{
    padding: 0;
  }
  .top{
    width: 850px;
    height: 200px;
    padding: 20px 20px;
    margin-bottom: 20px;
    box-sizing: padding-box;
    background-color: #FFFFFF;

  }
  .top .top-left{
    float: left;
    width: 260px;
    height: 160px;
   }
  .top .top-right{
    float: left;
    width: 540px;
    height: 160px;
  }
  .top .logo-img{
    float: left;
    width: 100px;
    height: 100px;
    border: 1px solid #d5d8df;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    top: 20px;
    left: 30px;
  }
  .top .logo-img img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .top .name {
    float: left;
    margin-left: 50px;
    margin-top: 40px;
  }
  .top .level{
    width: 48px;
    position: relative;
    top: -25px;
    left: 150px;
    height: 16px;
  }
  .top .level .level-sp1,.top .level .level-sp2{
    display: inline-block;
    float: left;
    width: 32px;
    height: 16px;
    background-color: #9DC75F;
    font-size: 10px;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 16px;
  }
  .top .level .level-sp2{
    background-color: #2D5315;
    width: 16px;
    height: 16px;
  }
  .top .top-right .d1{
    width: 160px;
    height: 160px;
    float: left;
    margin-right: 20px;
    padding: 30px 0;
  }
  .top .top-right .d1 span{
    display: block;
  }
  .top .top-right .d1 span:nth-child(1){
    font-size: 14px;
    color: #666;
  }
  .top .top-right .d1 span:nth-child(2){
    margin-top: 20px;
    font-weight: 700;
    font-size: 24px;
    color: #ff9358;
  }
  .center{
    width: 850px;
    min-height: 400px;
    padding: 20px 20px;
    background-color: #ffffff;
  }
  .center .center-top{
    height: 40px;
    line-height: 40px;
    background-color: #f38007;
    text-align: left;
    text-indent: 20px;
  }
  .center .center-top .top-sp{
    font-weight: 400;
    color: #ffffff;
    font-size: 16px;

  }
  .re-center ul{
    padding: 0 40px;
  }
  .re-center ul li{
    list-style: none;
    height: 100px;
    border-bottom: 1px solid #ebedf2;
    text-align: left;
    padding: 0 5px;
  }
  .re-center ul li .img-div{
    width: 45px;
    height: 48px;
    cursor: pointer;
    float: left;
    margin-top: 15px;
    margin-bottom: 37px;
    margin-right: 10px;

  }
  .re-center ul li .img-div img{
    width: 42px;
    height: 48px;
  }
  .re-center ul li .p1{
    position: relative;
    top: 20px;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 14px;
    color: #545454;
  }
  .re-center ul li .p1 i:nth-child(2){
    display: inline-block;
    float: right;
  }
  .re-center ul li .p1:hover{
    color: #cc0000;
    cursor: pointer;
  }
  .re-center ul li .p2{
    position: relative;
    top: 25px;
    font-size: 12px;
    color: #888;
  }
  .re-center ul li .p2 i{
    font-style: normal;
  }
  .re-center ul li .p2 i:nth-child(2),.re-center ul li .p2 i:nth-child(4),.re-center ul li .p2 i:nth-child(6){
    margin-right: 20px;
    color: #333;
  }
  /*.re-center ul li .p2 i:nth-last-child(1){*/
    /*font-size: 14px;*/
  /*}*/
  .re-center ul li .p2 i:nth-last-child(1){
    display: inline-block;
    position: absolute;
    top: -7px;
    color: #ff9358;
    font-size: 20px;
    font-weight: 400;
  }
</style>
