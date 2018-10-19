<template>
<div class="account">
  <div class="left">
    <div class="left-top">账户管理</div>
    <ul class="nav nav-pills nav-stacked">
      <li role="presentation">
        <router-link to="/msgManage">账号信息</router-link>
      </li>
      <li role="presentation">
        <router-link to="/securityCenter">安全中心</router-link>
      </li>
      <li role="presentation">
        <router-link to="/shoppingAddress">收货地址</router-link>
      </li>
    </ul>
  </div>
  <div class="right">
    <router-view>

    </router-view>
  </div>
</div>
</template>

<script>
export default {
  name: 'AccountManage',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .account{
    margin: 40px auto 40px;
    width: 85%;
    min-height: 500px;
    /*border: 1px solid red;*/
  }
  .account .left{
    float: left;
    width: 20%;
    height: 500px;
    background-color: #FAFAFA;
    border: 1px solid #e2e2e2;
  }
  .account .right{
    float: right;
    width: 77%;
    height: 100%;
    border: 1px solid #e2e2e2;
    padding: 20px 15px;
  }
  .account .left .left-top{
    width: 100%;
    text-indent: 15px;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: #ffffff;
    background-color: #C80000;
  }
  .account ul li a{
    color: #999;
  }
  .account .left .nav>li>a:focus,.nav>li>a:hover{
    /*background-color: #ffffff;*/
    color: #cb1414;
  }
  /*.account .left .nav-pills>li.active>a, .nav-pills>li.active>a:focus, .nav-pills>li.active>a:hover{*/
    /*background-color: #AA0000;*/

  /*.account .right .info{*/
    /*margin: 0 15px;*/
    /*background-color: yellow;*/
  /*}*/
</style>
