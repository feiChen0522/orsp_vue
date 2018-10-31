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
        <li @click="islogin3">
          <router-link to="">我的资源</router-link>
        </li>
        <li>
          <router-link to="/orspupload" >上传资源赚积分</router-link>
        </li>
        <li @click="islogin">
          <!--<a @click="islogin">已下载</a>-->
          <router-link to="" @click.stop.prevent >已下载</router-link>
        </li>
        <li @click="islogin2">
          <router-link to="">我的收藏</router-link>
        </li>
      </ul>
      <form class="navbar-form navbar-right">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="请输入关键字" v-model="txt_condition">
        </div>
        <button type="submit" class="btn btn-default" @click.stop.prevent="sendTxtCondition(txt_condition)">搜索</button>
      </form>
    </div>
  </nav>
</template>

<script>
  import sendTxtCon from '../common/js/login'
  export default {
  name: 'ORSPDownloadHeader',
  data () {
    return {
      txt_condition:'',
    }
  },
  methods:{
    sendTxtCondition:function(txt_condition){
      sendTxtCon.$emit('txtcon',txt_condition);
    },
    islogin:function () {
      let token=localStorage.getItem("token");
      if(token){
        this.$router.push({
          name:"HadDownload"
        })
      }
      else{
        Login.$emit('HaveLogin',"你还没有登录")
      }
    },
    islogin2:function () {
      let token=localStorage.getItem("token");
      if(token){
        this.$router.push({
          name:"ORSPCollect"
        })
      }
      else{
        Login.$emit('HaveLogin',"你还没有登录")
      }
    },
    islogin3:function () {
      let token=localStorage.getItem("token");
      if(token){
        this.$router.push({
          name:"ORSPMyFile"
        })
      }
      else{
        Login.$emit('HaveLogin',"你还没有登录")
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
