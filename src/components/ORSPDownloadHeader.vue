<template>
  <!--下载页面header-->
  <nav class="navbar navbar-default" style="background-color: #EAEBEC;height: 30px">
    <div class="container">
      <ul class="nav navbar-nav">
        <li class="active"></li>
        <li>
          <router-link to="/orspdownload">下载首页<span class="sr-only">(current)</span></router-link>
        </li>
        <li><a href="#">排行榜</a></li>
        <li><a href="#">我的资源</a></li>
        <li><a href="#">上传资源赚积分</a></li>
        <li>
          <router-link to="/haddownload">已下载</router-link>
        </li>
        <li><a href="#">我的收藏</a></li>
      </ul>
      <form class="navbar-form navbar-right">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="请输入关键字">
        </div>
        <button type="submit" class="btn btn-default">搜索</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'ORSPDownloadHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
