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
        <li>
          <router-link to="/orspupload" >上传资源赚积分</router-link>
        </li>
        <li @click="islogin">
          <!--<a @click="islogin">已下载</a>-->
          <router-link to="" @click.stop.prevent >已下载</router-link>
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
  import Login from '../common/js/login'
  export default {
  name: 'ORSPDownloadHeader',
  data () {
    return {

    }
  },
  methods:{
    islogin:function () {
      let token=localStorage.getItem("token");
      if(token){
        console.log(1);
        this.$router.push({
          name:"HadDownload"
        })
      }
      else{
        Login.$emit('HaveLogin',"你还没有登录")
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
