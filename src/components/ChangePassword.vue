<template>
  <div class="mo-div">
    <ul>
      <li>
        <span class="col-md-4" style="padding-left: 0">当前密码：</span>
        <input type="password" class="col-md-8" style="text-align: left; width: 200px; padding-left: 0;padding-right: 0" maxlength="8">
      </li>
      <li>
        <span class="col-md-4" style="padding-left: 0">新密码：</span>
        <input type="password" class="col-md-8" style="text-align: left; width: 200px; padding-left: 0;padding-right: 0" maxlength="8">
      </li>
      <li>
        <span class="col-md-4" style="padding-left: 0">确认密码：</span>
        <input type="password" class="col-md-8" style="text-align: left; width: 200px; padding-left: 0;padding-right: 0" maxlength="8">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ChangePassword',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mo-div{
    height: 100px;
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

</style>
