<template>
  <div>
    <div class="account" style="margin: 0 auto">
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
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .account{
    margin: 40px auto;
    width: 1038px;
    min-height: 500px;
  }
  .account .top{
    width: 1038px;
    height: 50px;
    border-bottom: none;

  }
  .account .center{
    width: 1038px;
    height: 100%;
    border: 1px solid #e2e2e2;
    padding: 20px 15px;

  }
  .account .top ul li{
    background-color: #e2e2e2;
    margin-left: 0;
    border: 1px solid #e2e2e2;
  }
  .account ul li a{
    color: #999;
    border-radius: 0;
    height: 50px;
    line-height: 30px;
  }
  .account .top .nav>li>a:focus,.nav>li>a:hover{
    background-color: #ffffff;
    color: #888888;
   }

</style>
