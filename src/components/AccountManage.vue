<template>
  <div>
    <div class="account" style="margin-left: 147px">
      <div class="top">
        <ul class="nav nav-pills">
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
      <div class="center">
        <router-view>

        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AccountManage',
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .account {
    margin: 40px auto;
    width: 1038px;
    min-height: 500px;
  }

  .account .top {
    width: 100%;
    height: 50px;
    border-bottom: none;
    position: relative;

    right: -16px;
  }

  .account .center {
    width: 100%;
    height: 100%;
    border: 1px solid #d74132;
    padding: 20px 10px;
    margin-left: 80px;
  }
  .account .top ul{
    height: 40px;
  }
  .account .top ul li {
    background-color: #d74132;
    margin-left: 0;
    border: 1px solid #d74132;
  }

  .account ul li a {
    color: #fff;
    border-radius: 0;
    height: 50px;
    line-height: 30px;
  }

  .account .top .nav > li > a:focus, .nav > li > a:hover {
    background-color: #ffffff;
    color: #888888;
  }

</style>
