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
            <change-name v-if="modal_change==1"  :old_name='userinfo[0].name'></change-name>
            <change-telephone v-if="modal_change==2"></change-telephone>
            <change-password v-if="modal_change==3"></change-password>
           </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">保存</button>
          </div>
        </div>
      </div>
    </div>
    <div class="right-top">
      <span>账号消息</span>
    </div>
    <div class="line"></div>
    <div class="personal-info">
      <div class="info-left">
        <p class="personal-name">亲耐的<span class="name" v-text="userinfo[0].name"></span>,上传一张头像吧</p>
        <p class="personal-logo">
          <input type="file" class="file">
          <img src="../../static/images/perpeo.png" alt="" class="logo-img">
        </p>
      </div>
      <div class="info-right">
        <ul class="input-list">
          <li>
            <span class="per_txtrit">用户名：</span>
            <span class="per_txtmid" id="name" v-text="userinfo[0].name" ></span>
            <span class="ritchange" data-toggle="modal" data-target="#change" @click="modalChange($event)" id="1">修改</span>
          </li>
          <li>
            <span class="per_txtrit">手机号：</span>
            <span class="per_txtmid" id="telephone" v-text="userinfo[0].telephone"></span>
            <span class="ritchange" data-toggle="modal" data-target="#change" @click="modalChange($event)" id="2">修改</span>
          </li>
          <li>
            <span class="per_txtrit">密码：</span>
            <span class="per_txtmid" id="password" v-text="userinfo[0].password"></span>
            <span class="ritchange" data-toggle="modal" data-target="#change" @click="modalChange($event)" id="3">修改</span>
          </li>
          <li>
            <span class="per_txtrit">邮箱：</span>
            <span class="per_txtmid" id="email" v-text="userinfo[0].email"></span>
            <span class="ritchange">立即绑定</span>
          </li>
          <li>
            <span class="per_txtrit">性别：</span>
            <input type="radio" style="position: relative;top: 3px;" name="sex" checked><span style="margin-left: 5px;margin-right: 20px">男</span>
            <input type="radio" style="position: relative;top: 3px;" name="sex"><span style="margin-left: 5px">女</span>
          </li>
          <li>
            <span class="per_txtrit">QQ：</span>
            <input type="text" name="QQ" maxlength="10" minlength="5" style="width: 180px">
          </li>
        </ul>
        <div class="submit" @click="save">保存</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MsgManage',
  data () {
    return {
      modal_change:1,
      modal_title:'',
      modal_list:['修改用户名','修改手机号','修改密码'],
      list:[],
      isDisplay:false,
      userinfo:[
        {
          name:"捶死你q3sdasdddd",
          new_name:'',
          telephone:'123',
          email:'尚未绑定邮箱',
          password:'123456',
        }
      ],
    }
  },
  mounted:function(){

  },
  methods:{
    save:function(){

    },
    getInfo:function () {
      var vm =this;
      axios.get("http://127.0.0.1:8000/user/getuserinfo/"+vm.telephone)
        .then(function (response) {
          vm.list=response.data;
        })
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
  .right-top{
    height: 40px;
    /*background-color: yellow;*/
  }
  .right-top span{
    color: #666;
    font-size: 20px;
    line-height: 40px;
  }
  .line{
    background-color: #999;
    height: 1px;
    width: 100%;
  }
  .personal-info{
    padding: 60px;
    height: 360px;
  }
  .personal-info .info-left{
    width: 40%;
    float: left;
    border-right: 1px dashed #ddd;
  }
  .personal-info .info-left .personal-name{
    font-size: 12px;
    color: #666666;
    margin-bottom: 30px;
    text-align: left;
  }
  .personal-info .info-left .personal-logo{
    width: 198px;
    height: 198px;
    margin: 0 auto 20px;
    /*background-color: yellow;*/
  }
  .personal-info .info-left .file {
    opacity: 0;
    width: 198px;
    height: 198px;
    position: relative;
    z-index: 50;

  }
  .personal-info .info-left img{
    width: 198px;
    height: 198px;
    position: relative;
    top: -198px;
  }
  .personal-info .info-right{
    float: left;
    width: 60%;
    /*background-color: #aa6708;*/
  }
  .info-right .input-list{
    width: 100%;
  }
  .info-right .input-list li{
    font-size: 11px;
    color: #333333;
    margin-left: 40px;
    height: 40px;

  }
  .per_txtrit {
    display: inline-block;
    width: 50px;
    margin-right: 15px;
    text-align: right;
  }
  .per_txtmid{
    color: #666;
    display: inline-block;
    width: 140px;
    height: 40px;
    text-align: left;
  }
  .ritchange{
    color: red;
    cursor: pointer;

  }
  .info-right .submit{
    background-color: #C80000;
    width: 80px;
    margin: auto;
    color: white;
    height: 30px;
    text-align: center;
    line-height: 30px;
    cursor:pointer;
  }

</style>
