<template>
  <div class="mo-div">
    <ul>
      <li >
        <span class="col-md-4" style="text-align: right; padding-left: 0">当前用户名：</span>
        <span class="col-md-8" style="padding-left: 0" v-text="old_name" v-once></span>
      </li>
      <li>
        <span class="col-md-4" style="padding-left: 0">新用户名：</span>
        <input type="text" class="col-md-8" style="text-align: left; width: 200px; padding-left: 0;padding-right: 0" maxlength="8">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:["old_name"],
  name: 'ChangePassword',
  data () {
    return {

    }
  },
  mounted:function () {
    console.log(111111,this.old_name);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mo-div{
    height: 70px;
  }
  .mo-div ul li{
    font-size: 12px;
    color: #333;
    margin-left: 40px;
    height: 40px;
  }
  .mo-div ul li span:nth-child(1){
    text-align: right;
  }
  .mo-div ul li span:nth-child(2){
    text-align: left;
    color: #999;
  }

</style>
