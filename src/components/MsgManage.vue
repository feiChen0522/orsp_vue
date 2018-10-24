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
            <change-name v-if="modal_change==1"  :old_name='userinfo.name' @newName="getNewName"></change-name>
            <change-telephone v-if="modal_change==2" :old_telephone='userinfo.telephone' @NewTelephone="getNewTelephone"></change-telephone>
            <change-password v-if="modal_change==3"></change-password>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="save">保存</button>
          </div>
        </div>
      </div>
    </div>
    <div class="all">
      <!--头部-->
      <div class="top">
        <span >账号消息</span>
      </div>
      <div class="line"></div><!--分割线-->
      <!--中间主体部分-->
      <div class="personal-info">
        <div class="info-left">
          <p class="personal-name">亲耐的<span class="name" v-text="userinfo.name"></span>,上传一张头像吧</p>
          <div class="personal-logo">
            <input type="file" class="file">
            <!--<img src="../../static/images/perpeo.png" alt="" class="logo-img">-->
          </div>
          <div class="txt_touxiang">编辑头像</div>
        </div>
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
              <input class="col-md-4 per_txtmid" type="text" v-model="userinfo.telephone" style="border: none">
              <!--<span class="per_txtmid" id="telephone" v-text="userinfo.telephone"></span>-->
              <!--<span class="ritchange" data-toggle="modal" data-target="#change" @click="modalChange($event)" id="2">修改</span>-->
            </li>
            <li class="row">
              <span class="col-md-4">密码：</span>
              <span class="col-md-4  per_txtmid" id="password" v-text="userinfo.password"></span>
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
                <input type="radio" class="male" style="position: relative;top: 3px;" name="sex" checked><span style="position: relative;top: -6px; left: 5px;margin-right: 20px">男</span>
                <input type="radio" class="female" style="position: relative;top: 3px;" name="sex"><span style="position: relative;top: -6px; left: 5px">女</span>
              </div>
            </li>
            <li class="row">
              <span class="col-md-4">QQ：</span>
              <input type="text" name="QQ" maxlength="10" minlength="5" class="col-md-4" style="border: 1px solid #E2E2E2;">
            </li>
          </ul>
          <div class="submit" @click="save">保存</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'bootstrap/js/modal'
  export default {
  name: 'MsgManage',
  data () {
    return {
      modal_change:1,
      modal_title:'',
      modal_list:['修改用户名','修改手机号','修改密码'],
      list:{},
      isDisplay:false,
      userinfo:{
        name:'',
        telephone:'',
        sex:'',
        email:'',
        password:'******',
        level:'',
        icon:''
      }
    }
  },
  created:function(){
    var vm =this;
    var token=localStorage.getItem("token")
    axios({
      url:"http://127.0.0.1:8000/user/showuser/",
      headers:{
        "token":token
      },
      method:"get"
    })
      .then(function (response) {
        vm.list=response.data;
        console.log(response.data);
        console.log('showuser data:',vm.list);  //得到的数据

        vm.userinfo.name=vm.list.user_name;
        vm.userinfo.telephone=vm.list.telephone;
        vm.userinfo.icon=vm.list.icon;
        vm.userinfo.sex=vm.list.sex;
        if(vm.list.email){
          vm.userinfo.email=vm.list.email;
        }
        else{
          vm.userinfo.email='尚未绑定邮箱';
        }
      })
      .catch(function (err) {
        console.log("error:",err)
      })
  },
  methods:{
    save:function(){
      console.log(1);
      $("#change").modal('hide')
      window.location.reload()
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
      console.log(1111111111111);
      console.log("new_name",new_name);
      this.userinfo.name=new_name;
      console.log(this.userinfo.name)
    },
    getNewTelephone:function (new_telephone) {
      console.log(2222222222222);
      console.log("new_telephone",new_telephone);
      this.userinfo.telephone=new_telephone;
      console.log(this.userinfo.telephone);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    color: #666;
    text-align: left;
    font-size: 20px;
    line-height: 40px;
  }
  .line{
    background-color: #999;
    height: 1px;
    width: 100%;
  }
  .personal-info{
    width: 80%;
    margin: 30px auto;
    height: 360px;
    border: 1px solid #e2e2e2;
    text-align: center;
  }
  .personal-info .info-left{
    padding: 0 40px;
    width: 220px;
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
    background-image: url("../assets/images/avatar_89373029_1496285287409.jpg");
    background-size: cover;
    border-radius: 50%;
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
    border-radius: 50%;
  }
  .personal-info .info-left .txt_touxiang{
    position: relative;
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
  .personal-info .info-right{
    margin-top: 20px;
    float: left;
    width: 500px;
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
