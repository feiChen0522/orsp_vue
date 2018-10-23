<template>
  <div class="mo-div" @mouseout="push">
    <ul>
      <li>
        <span class="col-md-4" style="padding-left: 0">当前密码：</span>
        <input type="password" class="col-md-8" style="text-align: left; width: 200px; padding-left: 0;padding-right: 0" maxlength="8" v-model="current_password" @mouseout="checkpassword">
      </li>
      <p class="p1">密码错误，请重新输入</p>


      <li>
        <span class="col-md-4" style="padding-left: 0">新密码：</span>
        <input type="password" class="col-md-8" style="text-align: left; width: 200px; padding-left: 0;padding-right: 0" maxlength="8" v-model="new_password" @mouseout="checkgeshi">
      </li>
      <p class="p2">密码长度不能小于8，大于16</p>


      <li>
        <span class="col-md-4" style="padding-left: 0">确认密码：</span>
        <input type="password" class="col-md-8" style="text-align: left; width: 200px; padding-left: 0;padding-right: 0" maxlength="8" v-model="new_password_verify" @mouseout="checktwopsw">
      </li>
      <p class="p3">两次密码不一致，请重新输入</p>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'ChangePassword',
  data () {
    return {
      current_password:'',
      new_password:'',
      new_password_verify:'',
    }
  },
  methods:{
    checkpassword:function(){
      if(this.new_password!=this.new_password_verify){
        $(".mo-div .p1").css("opacity",1)
      }
    },
    checkgeshi:function(){
      if(this.new_password.length<8||this.new_password.length>16){
        $(".mo-div .p2").css("opacity",1)
      }
    },
    checktwopsw:function(){
      if(this.new_password!=this.new_password_verify){
        $(".mo-div .p3").css("opacity",1)
      }
    },
    push:function (new_pass) {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mo-div{
    height: 140px;
  }
  .mo-div ul,.mo-div ul li{
    list-style: none;
  }
  .mo-div ul li{
    font-size: 12px;
    color: #333;
    margin-left: 40px;
    height: 26px;
  }
  .mo-div ul li span:nth-child(1){
    text-align: right;
  }
  .mo-div ul li:nth-child(2),.mo-div ul li:nth-child(3){

  }
  .mo-div ul p{
    font-size: 10px;
    color: red;
    text-indent: 5px;
    opacity: 0;
  }

</style>
