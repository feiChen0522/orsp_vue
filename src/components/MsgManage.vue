<template>
  <div>
    <!-- Button trigger modal -->
    <!-- Modal -->
    <div class="modal fade" id="change" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel" v-text="modal_title"></h4>
          </div>
          <div class="modal-body">
            <!--<change-name v-if="modal_change==1"  :old_name='userinfo.name' @newName="getNewName"></change-name>-->
            <!--<change-telephone v-if="modal_change==2" :old_telephone='userinfo.telephone' @NewTelephone="getNewTelephone"></change-telephone>-->
            <change-password v-if="modal_change==3" :telephone="userinfo.telephone"></change-password>
          </div>
          <!--<div class="modal-footer">-->
            <!--<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>-->
            <!--<button type="button" class="btn btn-primary" @click="changePassword">保存</button>-->
          <!--</div>-->
        </div>
      </div>
    </div>

    <!--上传头像模态框-->
    <div class="modal fade" id="usericon" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="myModalLabel2">上传头像</h4>
            </div>
            <div class="modal-body" >
              <upload-usericon :telephone="userinfo.telephone" @getFilename="getfilename"></upload-usericon>
            </div>
          </div>
      </div>
    </div>
    <!--上传头像模态框end-->
    <div class="all">
      <!--头部-->
      <div class="top">
        <span >账号消息</span>
      </div>
      <div class="line"></div><!--分割线-->
      <!--中间主体部分-->
      <div class="personal-info">
        <div class="aa">
          <!--左边头像部分-->
          <div class="info-left">
            <p class="personal-name">亲耐的<span class="name" v-text="userinfo.name"></span>,上传一张头像吧</p>
            <div class="personal-logo">
              <!--src="../assets/images/avatar_89373029_1496285287409.jpg"-->
              <img :src="icon" alt="" class="image" data-toggle="modal" data-target="#usericon">
              <input type="file" class="file" data-toggle="modal" data-target="#usericon" @click.prevent>
            </div>
            <div class="txt_touxiang" data-toggle="modal" data-target="#usericon">编辑头像</div>
            <!--<input type="file" class="file2" @click="pushHeadPortrait">-->
            <div class="level">
              <span>等级：</span>
              <i>LV<i v-text="userinfo.level"></i></i>
            </div>
            <div class="integral">
              <span>我的积分：</span>
              <i v-text="userinfo.integral"></i>
            </div>
          </div>
          <!--右边的个人信息-->
          <div class="info-right">
            <ul class="input-list">
              <li class="row">
                <span class="col-md-4">用户名：</span>
                <input class="col-md-4 per_txtmid" type="text" v-model="userinfo.name">
                <!--<span class="per_txtmid" id="name" v-text="userinfo.name" ></span>-->
                <!--<span class="ritchange" data-toggle="modal" data-target="#change" @click="modalChange($event)" id="1">修改</span>-->
              </li>
              <li class="row">
                <span class="col-md-4">手机号：</span>
                <input class="col-md-4 per_txtmid" type="text" v-model="userinfo.telephone">
                <!--<span class="per_txtmid" id="telephone" v-text="userinfo.telephone"></span>-->
                <!--<span class="ritchange" data-toggle="modal" data-target="#change" @click="modalChange($event)" id="2">修改</span>-->
              </li>
              <li class="row">
                <span class="col-md-4">密码：</span>
                <input class="col-md-4 per_txtmid" type="text" v-model="password" style="border: none" readonly>
                <span class="ritchange col-md-4" data-toggle="modal" data-target="#change" @click="modalChange($event)" id="3">修改</span>
              </li>
              <li class="row">
                <span class="col-md-4">邮箱：</span>
                <span class="col-md-4 per_txtmid" id="email" v-text="userinfo.email"></span>
                <span class="ritchange col-md-4">立即绑定</span>
              </li>
              <li class="row">
                <span class="col-md-4">性别：</span>
                <div style="text-align: left;" class="col-md-8">
                  <input type="radio" style="position: relative;top: 3px;" name="sex" :checked="userinfo.sex=='男'" @click="getSex($event)" value="男">
                  <span style="position: relative;top: -6px; left: 5px;margin-right: 20px">男</span>

                  <input type="radio" style="position: relative;top: 3px;" name="sex" :checked="userinfo.sex=='女'" @click="getSex($event)" value="女">
                  <span style="position: relative;top: -6px; left: 5px">女</span>
                </div>
              </li>
              <li class="row">
                <span class="col-md-4">QQ：</span>
                <input type="text" name="QQ" maxlength="10" minlength="5" class="col-md-4" v-model="userinfo.QQ">
              </li>
            </ul>
            <div class="submit" @click="save">保存</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'bootstrap/js/modal'
  import Upload from "./download/upload";
  export default {
  name: 'MsgManage',
  components: {Upload},
  data () {
    return {
      defaulturl:"../assets/images/avatar_89373029_1496285287409.jpg",
      modal_change:1,
      modal_title:'',
      modal_list:['修改用户名','修改手机号','修改密码'],
      res:"",
      list:{},
      isDisplay:false,
      password:'******',
      icon:'',
      userinfo:{
        name:'',
        telephone:'',
        sex:'',
        email:'',
        level:'',
        icon:'',
        integral:'',
        QQ:''
      }
    }
  },
  created:function(){
    var vm =this;
    var token=localStorage.getItem("token");
    axios({
      url:this.global.serverPath+"/user/showuser/",
      headers:{
        "token":token
      },
      method:"get"
    })
      .then(function (response) {
        vm.list=response.data;
        vm.userinfo.name=vm.list.user_name;
        vm.userinfo.telephone=vm.list.telephone;
        vm.userinfo.password=vm.list.password;
        vm.userinfo.sex=vm.list.sex;
        vm.userinfo.integral=vm.list.integral;
        vm.userinfo.level=vm.list.level;
        vm.userinfo.email=vm.list.email;
        vm.userinfo.QQ=vm.list.one;
        if(vm.list.email){
          vm.userinfo.email=vm.list.email;
        }
        else{
          vm.userinfo.email='尚未绑定邮箱';
        }
        // vm.userinfo.icon=vm.list.icon;
        if(vm.list.icon){
          vm.userinfo.icon=vm.list.icon;
          vm.icon=vm.global.serverPath+"/media/pic/"+vm.list.icon;
        }
        else{
          vm.icon=vm.defaulturl;
        }
      })
      .catch(function (err) {
      })
  },
  mounted:function(){

  },
  methods:{
    //提交用户修改的信息
    save:function(){
      var vm=this;
      // console.log("保存>>>");
      axios({
        method:"post",
        url:this.global.serverPath+"/user/changemsg/",
        data:this.userinfo
      })
        .then(function (response) {
          vm.res=response.data;
          // console.log("-------------------",vm.res);
        })
        .catch(function (err) {
        })
    },
    //难道修改的性别
    getSex:function(event){
      this.userinfo.sex=event.currentTarget.value;
      // alert(this.userinfo.sex)
    },
    //拿到头像filename
    getfilename:function(filename){
      this.userinfo.icon=filename;
    },

    modalChange:function (event) {
      if(event.currentTarget.id=='1'){
        this.modal_change=1;
        this.modal_title=this.modal_list[0];
      }
      if(event.currentTarget.id=='2'){
        this.modal_change=2;
        this.modal_title=this.modal_list[1];
      }
      if(event.currentTarget.id=='3'){
        this.modal_change=3;
        this.modal_title=this.modal_list[2];
      }
    },
    getNewName:function (new_name) {
      this.userinfo.name=new_name;
    },
    getNewTelephone:function (new_telephone) {
      this.userinfo.telephone=new_telephone;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #change {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  ul,li{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .top{
    height: 40px;
    /*background-color: yellow;*/
  }
  .top span{
    color: #EE290D;
    text-align: left;
    font-size: 20px;
    line-height: 40px;
  }
  .line{
    background-color: #d74132;
    height: 3px;
    width: 100%;
  }
  .personal-info{
    width: 80%;
    margin: 30px auto;
    height: 360px;
    border: 1px solid #e2e2e2;
    border-top: 2px solid #d74132;
    text-align: center;
  }
  .personal-info .aa{
    margin: auto;
    width: 80%;
    height: 100%;
  }
  .personal-info .info-left{
    padding: 0 40px;
    width: 40%;
    float: left;
    height: 100%;
    border-right: 1px dashed #ddd;
  }
  .personal-info .info-left .personal-name{
    margin-top: 40px;
    font-size: 12px;
    color: #666666;
    margin-bottom: 20px;
    text-align: center;
  }
  /*头像框*/
  .personal-info .info-left .personal-logo{
    width: 100px;
    height: 100px;
    margin: 0 auto 10px;
    border-radius: 50%;
    cursor: pointer;
  }
  .personal-info .info-left .personal-logo .image{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-size: cover;
    background-color: #ff4f14;
  }
  /*头像*/
  .personal-info .info-left .personal-logo .file {
    opacity: 0;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-indent: 5px;
    position: relative;
    z-index: 50;
    top:-100px;
    border-radius: 50%;
  }
  .personal-info .info-left .txt_touxiang{
    margin: auto;
    /*z-index: 2;*/
    width: 100px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    background: #222;
    background: rgba(0,0,0,.7);
    color: #fff;
    -webkit-transition: bottom .2s ease;
    transition: bottom .2s ease;
  }
  .personal-info .info-left .level{
    width: 100px;
    height: 20px;
    margin: 15px auto 0;
    line-height: 20px;
  }
  .personal-info .info-left .level span{
    font-size: 12px;
    font-weight: 400;
  }
  .personal-info .info-left .level i{
    font-size: 18px;
    font-weight: bold;
    color: #ee9026;
  }
  .personal-info .info-left .integral{
    height: 30px;
    line-height: 30px;
    margin: 5px auto;
    font-size: 16px;
    font-weight: bold;
  }
  .personal-info .info-left .integral span{
    color: #EE290D;
  }
  .personal-info .info-left .integral i{
    position: relative;
    top: 1px;
    font-size: 18px;
  }
  .personal-info .info-right{
    margin-top: 20px;
    float: left;
    width: 60%;
  }
  .info-right .input-list{
    width: 100%;
  }
  .info-right .input-list li{
    font-size: 12px;
    color: #333333;
    height: 40px;
    line-height: 40px;
  }
  .info-right .input-list li span{
    text-align: right;
  }
  .info-right .input-list li input{
    height: 25px;
    position: relative;
    top: 7px;
    border: none;
  }
  .per_txtmid{
    color: #666;
    text-align: left !important;
  }
  .ritchange{
    color: red;
    cursor: pointer;
    text-align: left !important;
  }
  .info-right .submit{
    background-color: #C80000;
    width: 80px;
    margin: 20px auto 0;
    color: white;
    height: 30px;
    text-align: center;
    line-height: 30px;
    cursor:pointer;
  }

</style>
