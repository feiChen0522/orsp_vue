<template>
  <div class="container" style="padding: 0">
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
    <!--下载模态框-->
    <div class="modal fade" id="download_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="msg" v-text="download_modal_msg"></div>
            <div class="btn" @click="download_res">下载</div>
          </div>
        </div>
      </div>
    </div>

    <div class="center">
      <!--下载页面中间标签分类-->
      <div class="download_l" >
        <!--技术领域-->
        <!--@click="getTwoTechnicalField"-->
        <dl >
          <dt>技术领域:</dt>
          <dd>
            <ul @click="getTwoTechnicalField($event)" id="ul1">
              <li><a href="#" id="0" @click.stop.prevent="showAllFile">全部</a><div class="img"></div></li>
              <li v-for="i of technicalField.slice(0,9)">
                <a v-text="i.name" :id="i.id" class="a"></a><div class="img"></div>
              </li>
            </ul>
            <div class="twofield" id="twofield1">
              <li v-for="i of twoTechnicalField"><a @click="getFileByCondition(i.id)" v-text="i.name" :id="i.id"></a></li>
            </div>
            <ul @click="getTwoTechnicalField($event)" id="ul2">
              <li v-for="i of technicalField.slice(9)">
                <a href="#" v-text="i.name" :id="i.id" class="a"></a><div class="img"></div>
              </li>
            </ul>
            <div class="twofield" id="twofield2">
              <li v-for="i of twoTechnicalField"><a @click="getFileByCondition(i.id)" v-text="i.name" :id="i.id"></a></li>
            </div>
          </dd>
        </dl>
        <!--资源类型-->
        <dl>
          <dt class="border-div">资源类型:</dt>
          <dd>
            <ul>
              <li><a href="#">全部</a></li>
              <li v-for="i of resourceType"><a @click="getRescourseId(i.id)" v-text="i.name" :id="i.id">全部</a></li>
            </ul>
          </dd>
        </dl>
      </div>
      <!--资源显示层-->
      <div class="con-2">
        <!--代码资源、最新上传-->
        <nav class="navbar navbar-default" style="border-radius: 0; margin-bottom: 0">
          <div class="container" style="padding-left: 0;padding-right: 0; width: 850px;">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">代码资源 <span class="sr-only">(current)</span></a></li>
              <li><a href="#">最新上传</a></li>
            </ul>
          </div>
        </nav>
        <!--动态的渲染出资源-->
        <div class="res-father">
          <!--循环开始-->
          <!--1-->
          <div class="res-model" v-for="i,index in files">
            <div class="img-div">
              <img src="../assets/download/xlsx.png" alt="">
            </div>
            <div class="describe">
              <p class="p1">
                <i v-text="i.title"></i>
                <i :class="i.collectcount?'glyphicon glyphicon-heart':'glyphicon glyphicon-heart-empty'" style="color: red;font-size: 18px;float: right;margin-right: 150px" title="点我收藏" @click="change_xinxin($event.target,i.id,index)"></i>
              </p>
              <p>
                <span class="sp1">上传者：</span><span v-text="i.upload_user"></span>
                <span class="sp1">上传时间：</span><span v-text="i.upload_time"></span>
                <span class="glyphicon glyphicon-download-alt" style="float: right;margin-right: -10px" :data-name="i.name" @click="download(i.name,i.need_integral)"></span>
                <span v-text="i.need_integral"></span><span class="sp1">积分/O币：</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="top-txt"></div>
      <div class="user_login_info">
        <div class="user_login_img">
          <div class="logo_img">
            <img :src="userinfo.icon" alt="" class="image" data-toggle="modal" data-target="#usericon">
            <!--<input type="file" class="file" data-toggle="modal" data-target="#usericon" v-on:click.prevent="onClick">-->
          </div>
          <span v-if="!islogin" style="cursor: pointer" @click="gologin">您好，请登录</span>
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
        <div class="user-upload" @click="jumpToUpload">上传资源</div>
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
  </div>
</template>

<script>
  import sendTxtCon from '../common/js/login'
export default {
  name: 'ORSPDownload',
  data () {
    return {
      tishi_msg:'',
      download_modal_msg:'',
      mes:'',
      islogin:false,
      defaulturl:"../assets/images/avatar_89373029_1496285287409.jpg",
      userinfo:{
        name:'',
        icon:'',
        level:'',
        integral:'',
      },
      list:{},
      files:[{

      }],
      condition:{
      //   "twofieldid":'',
        "txtcondition":'',
      //   "resoursetypeid":'',
      },
      technicalField:'',
      twoTechnicalFieldALL:'',
      twoTechnicalField:'',
      resourceType:'',
    }
  },
  created:function(){

    this.getTechnicalField();
    this.getResourceType();
    this.showAllFile();
    this.getUserInfo();
    // this.getTxtCondition();
  },
  methods:{

    jumpToUpload:function(){
      this.$router.push({
        name:"ORSPUpload"
      })
    },
    //点击心心触发
    change_xinxin:function(e,i,index){  //i为当前文件id
      let userid=sessionStorage.getItem("currentUserId");
      let vm=this;
      //添加收藏
      if(e.classList.contains("glyphicon-heart-empty")){
        e.classList.remove("glyphicon-heart-empty");
        e.classList.add("glyphicon-heart");
        axios({
          url:this.global.serverPath+"/file/addcollect/",
          method:"post",
          data:{
            "id":i,
            "userid":userid
          }
        })
          .then(function(res){
            let ress=res.data;
            if(ress.code=="209"){
              vm.tishi_msg="收藏成功";
              $('#tishi').modal("show");
              // vm.collecctnumber(i,e,index)
            }
          })
          .catch(function(err){
            console.log(err);
          })
      }
      //取消收藏
      else if(e.classList.contains("glyphicon-heart")){
        e.classList.remove("glyphicon-heart");
        e.classList.add("glyphicon-heart-empty");
        axios({
          url:this.global.serverPath+"/file/cancelcollect/",
          method:"post",
          data:{
            "id":i,
            "userid":userid
          }
        })
          .then(function(res){
            let ress=res.data;
            if(ress.code=="222"){
              vm.tishi_msg="取消收藏成功";
              $('#tishi').modal("show");
              // vm.collecctnumber(i,e,index)
            }
          })
          .catch(function(err){
            console.log(err);
          })
      }
    },
    //拿到用户信息
    getUserInfo:function(){
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
    //拿到一级技术领域标签
    getTechnicalField:function(){
      let vm=this;
      axios({
        url:this.global.serverPath+"/file/gettechnicalfield/",
        method:'get',
      })
        .then(function (res) {
          vm.technicalField=res.data;
          console.log(vm.technicalField);
        });

    },
    //拿到二级技术领域标签
    getTwoTechnicalField:function(e){
      if(event.target.tagName=="A"){
        var id=event.target.id;
        console.log(id);
        if(event.currentTarget.id=="ul1"){
          $('#twofield2').css({
            display:"none"
          });
          $('#twofield1').css({
            display:"block"
          })
        }
        if(event.currentTarget.id=="ul2"){
          $('#twofield1').css({
            display:"none"
          });
          $('#twofield2').css({
            display:"block"
          })
        }
        if(event.target.id=="0"){
          $('#twofield1').css({
            display:"none"
          });
          $('#twofield2').css({
            display:"none"
          })
        }
        let list_div=document.querySelectorAll('.download_l dd ul li div');
        for(var i=0;i<list_div.length;i++){
          list_div[i].style.opacity=0;
        }
        if(event.target.id!="0"){
          list_div[id].style.opacity=1;
        }
        let vm=this;
        axios({
          url:this.global.serverPath+"/file/gettwotechnicalfield/?id="+id,
          method:'get',
        })
          .then(function (res) {
            vm.twoTechnicalField=res.data;
            console.log(999,vm.twoTechnicalField);
          })

      }
    },
    //拿到所有资源类型
    getResourceType:function(){
      let vm=this;
      axios({
        url:this.global.serverPath+"/file/getresourcetype/",
        method:"get",
      })
        .then(function(res){
          vm.resourceType=res.data;
          console.log(vm.resourceType);
        })
    },
    //拿到所有已上传的文件
    showAllFile:function(){
      let vm=this;
      let url=this.global.serverPath+"/file/showallfile/";
      axios({
        method: 'get',
        url: url,
      })
        .then(function (rsp) {
          console.log("拿到的文件",rsp.data);
          vm.files=rsp.data
        })
        .catch(function (err) {
          console.log('请求失败', err);
        })
    },
    getTxtCondition:function(){
      sendTxtCon.$on('txtcon',(target)=>{
        this.condition.txtcondition=target;
        console.log(this.condition.txtcondition);
      });
    },
    // getTwoFieldId:function(id){
    //   this.condition.twofieldid=id;
    //   console.log(222,this.condition);
    //   this.getFileByCondition(this.condition)
    // },
    getRescourseId:function(id){
      this.condition.resoursetypeid=id;
      console.log(333,this.condition);
      this.getFileByCondition(this.condition)
    },
    getFileByCondition:function(id){
      let vm=this;
      let url=this.global.serverPath+"/file/showfilebycondition/";
      axios({
        method: 'post',
        url: url,
        data:{
          "twofieldid":id
        }
      })
        .then(function(res){
          console.log("拿到的文件",res.data);
          vm.files=res.data
        })
        .catch(function(err){
          console.log(err);
        })
    },
    download_res:function(){
      var that=this;
      axios({
        method: 'post',
        url: this.global.serverPath+'/file/downloadfile/',
        data: that.mes,
        responseType: 'blob'
      }).then(function (response) {
        const content = response.data;
        const blob = new Blob([content]);
        const fileName = name;
        if ('download' in document.createElement('a')) { // 非IE下载
          const elink = document.createElement('a');
          elink.download = fileName;
          elink.style.display = 'none';
          elink.href = URL.createObjectURL(blob);
          document.body.appendChild(elink);
          elink.click();
          URL.revokeObjectURL(elink.href);// 释放URL 对象
          document.body.removeChild(elink);
          that.getUserInfo()
        } else { // IE10+下载
          navigator.msSaveBlob(blob, fileName)
        }
      })
        .catch(function (error) {
          console.log(error)
        })
    },
  //下载资源
    download: function (name,integral) {
      let token=localStorage.getItem("token");
      var vm = this;
      let userid=sessionStorage.getItem("currentUserId");
      console.log(userid);
      vm.mes={
        "fname": name,
        "userid":userid
      };
      if(token){
        axios({
          method: 'post',
          url: this.global.serverPath+'/file/whetherdownload/',
          data: vm.mes
        })
          .then(function (res) {
            let ress=res.data;
            if(ress.code=="220"){
              vm.download_modal_msg="已下载，不会重新花费积分，可去已下载页面查看详情";
              $("#download_modal").modal("show");
              // vm.download_res(mes,vm);
            }
            else{
              //没有下载过
              console.log(integral,1111111111111111111111);
              if(parseInt(vm.userinfo.integral)>=parseInt(integral)){
                vm.download_modal_msg="确定花费积分下载这个文件吗？";
                $("#download_modal").modal("show");
                // vm.download_res(mes,vm);
              }
              else{
                vm.tishi_msg="抱歉，您的积分不足";
                $('#tishi').modal("show");
              }
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      }
      else{
        Login.$emit('HaveLogin',"你还没有登录");
      }
    },
    gologin:function () {
      Login.$emit('HaveLogin',"你还没有登录");
    }

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
  #download_modal .modal-body{
    height: 270px;
  }
  #download_modal .modal-body .msg{
    margin-top: 50px;
    margin-bottom: 50px;
  }
  #download_modal .modal-body .btn{
    margin: auto;
    width: 100px;
    height: 30px;
    background-color: #ca0000;
    font-weight: bold;
    color: #ffffff;
  }
  dl,dd,dt,dl,li{
    padding: 0;
    margin: 0;
  }
  .center{
    width: 850px;
    float: left;
    min-height: 500px;
  }
  .download_l{
    width: 850px;
    padding: 10px 0 0 0;
    background-color: white;
  }
  .download_l dl{
    overflow: hidden;
    padding-bottom: 20px;
  }
  .download_l dl:nth-child(1){
    border-bottom: dashed 1px #e6e6e6;
  }
  .download_l dl dt{
    width: 78px;
    display: block;
    position: relative;
    text-align: right;
    top: 26px;
    color: #999;
    font-size: 14px;
    font-weight: 400;
  }
  .download_l dl dd{
    margin-left: 80px;
    display: block;
    width: 720px;
  }
  .download_l dd ul{
    line-height: 1.5;
    padding: 5px 10px;
    min-height: 30px;
    /*background-color: #3b49ff;*/
  }
  .download_l dd .twofield{
    background-color: #F7F8F9;
    padding: 10px 0;
    margin-left: 15px;
    width: 650px;
    min-height: 50px;
    line-height: 30px;
    text-align: left;
    display: none;
  }
  .download_l dd .twofield li{
    list-style: none;
    display: inline-block;
    padding: 0;
  }
  .download_l dd .twofield a{
    margin-left: 20px;
    cursor: pointer;
  }
  .download_l dd ul,.download_l dd ul li{
    list-style: none;
  }
  .download_l dd ul li{
    float: left;
    margin: 0 8px 8px;
  }
  .download_l dd ul li a{
    text-decoration: none;
    cursor: pointer;
    color: black;
  }
  .download_l dd ul li div{
    background-image: url("../assets/images/triangle.jpg");
    width: 10px;
    height: 6px;
    position: relative;
    top: 9px;
    opacity: 0;
    left: 45%;
  }
  .container .con-2{
    width: 850px;
    margin-top:20px;
  }
  .container .con-2 .res-model{
    width: 100%;
    height: 65px;
    padding: 8px 19px;
    background-color: #ffffff;
    border-bottom: dashed 1px #e6e6e6;
  }
  .container .con-2 .res-model .img-div{
    width: 45px;
    height: 48px;
    cursor: pointer;
    float: left;
  }
  .container .con-2 .res-model .img-div img{
    width: 42px;
    height: 48px;
  }
  .container .con-2 .res-model .describe{
    width: 750px;
    height: 100%;
    float: left;
    margin-left: 10px;
    cursor: pointer;
  }
  .container .con-2 .res-model .describe p{
    text-align: left;
    margin: 0;
  }
  .container .con-2 .res-model .describe p:nth-child(1){
    padding-bottom: 6px;
    font-size: 16px;
    color: #333;
    font-weight: 700;
    width: 100%;
  }
  .container .con-2 .res-model .describe p:nth-child(2){
    position: relative;
  }
  .container .con-2 .res-model .describe p:nth-child(2) span.sp1{
    color: #999;
    margin-left: 10px;
  }
  .container .con-2 .res-model .describe p:nth-child(2) span:nth-child(1){
    margin-left: 0;
  }
  .container .con-2 .res-model .describe p:nth-child(2) span:nth-last-child(2){
    color: #ff9358;
    font-size: 32px;
    line-height: 32px;
    float: right;
    margin-right: 10px;
    position: relative;
    top: -10px;
    /*display: inline-block;*/
    /*position: absolute;*/
    /*top: -10px;*/
    /*left: 720px;*/
  }
  .container .con-2 .res-model .describe p:nth-child(2) span:nth-last-child(1){
    /*position: absolute;*/
    /*left: 640px;*/
    float: right;

  }
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
    cursor: pointer;
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
