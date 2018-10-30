<template>
  <div class="container">
    <div class="top">
      <div class="top-left">
        <div class="logo-img"></div>
        <div class="name">指南针丶飞</div>
        <div class="level">
          <span class="level-sp1">等级:</span>
          <span class="level-sp2">1</span>
        </div>
      </div>
      <div class="top-right">
        <div class="d1">
          <span>积分</span>
          <span>10240</span>
        </div>
        <div class="d1">
          <span>上传资源</span>
          <span>2</span>
        </div>
        <div class="d1">
          <span>下传资源</span>
          <span>3</span>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="center-top">
        <span class="top-sp">已下载</span>
      </div>
      <div class="re-center">
        <ul>
          <li>
            <p class="p1">机器学习极简入门课</p>
            <p class="p2">
              <i>作者/分享人：</i><i>飞哥哥哥</i>
              <i>上传时间：</i><i>2018/10/28 18:50</i>
              <i>积分/O币：</i><i>2</i>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Login from '../common/js/login'
export default {
  name: 'HadDownload',
  data () {
    return {
      list:'',
    }
  },
  created:function () {
    let token=localStorage.getItem("token");
    if(token){
      let vm=this;
      axios({
        url:this.global.serverPath+"/file/showdownloadfile",
        method:"post",
        headers:{
          "token":token
        }
      })
        .then(function (res) {
          vm.list=res.data;
          console.log(666,vm.list);
        })
        .catch(function(err){
          console.log(err);
        })
    }
    else{
      Login.$emit('HaveLogin',"你还没有登录")
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    padding: 0;
  }
  .top{
    width: 850px;
    height: 200px;
    padding: 20px 20px;
    margin-bottom: 20px;
    box-sizing: padding-box;
    background-color: #FFFFFF;

  }
  .top .top-left{
    float: left;
    width: 260px;
    height: 160px;
   }
  .top .top-right{
    float: left;
    width: 540px;
    height: 160px;
  }
  .top .logo-img{
    float: left;
    width: 100px;
    height: 100px;
    border: 1px solid #d5d8df;
    border-radius: 50%;
    background-color: #ebedf2;
    cursor: pointer;
    position: relative;
    top: 20px;
    left: 30px;
  }
  .top .name {
    float: left;
    margin-left: 50px;
    margin-top: 40px;
  }
  .top .level{
    width: 48px;
    position: relative;
    top: -25px;
    left: 150px;
    height: 16px;
  }
  .top .level .level-sp1,.top .level .level-sp2{
    display: inline-block;
    float: left;
    width: 32px;
    height: 16px;
    background-color: #9DC75F;
    font-size: 10px;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 16px;
  }
  .top .level .level-sp2{
    background-color: #2D5315;
    width: 16px;
    height: 16px;
  }
  .top .top-right .d1{
    width: 160px;
    height: 160px;
    float: left;
    margin-right: 20px;
    padding: 30px 0;
  }
  .top .top-right .d1 span{
    display: block;
  }
  .top .top-right .d1 span:nth-child(1){
    font-size: 14px;
    color: #666;
  }
  .top .top-right .d1 span:nth-child(2){
    margin-top: 20px;
    font-weight: 700;
    font-size: 24px;
    color: #ff9358;
  }
  .center{
    width: 850px;
    min-height: 400px;
    padding: 20px 20px;
    background-color: #ffffff;
  }
  .center .center-top{
    height: 40px;
    line-height: 40px;
    background-color: #E7E7E7;
  }
  .center .center-top .top-sp{
    font-weight: bold;
    color: #d92b1a;
    font-size: 16px;

  }
  .re-center ul li{
    list-style: none;
    height: 60px;
    border-bottom: 1px solid #ebedf2;
    text-align: left;
    padding: 8px 5px;
  }
  .re-center ul li .p1{
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 14px;
    color: #545454;
  }
  .re-center ul li .p1:hover{
    color: #cc0000;
    cursor: pointer;
  }
  .re-center ul li .p2{
    position: relative;
    font-size: 12px;
    color: #888;
  }
  .re-center ul li .p2 i{
    font-style: normal;
  }
  .re-center ul li .p2 i:nth-child(2){
    margin-right: 20px;
  }
  .re-center ul li .p2 i:nth-child(5){
    margin-left: 360px;
    font-size: 14px;
  }
  .re-center ul li .p2 i:nth-child(6){
    display: inline-block;
    position: absolute;
    top: -3px;
    color: #ff9358;
    font-size: 18px;
    font-weight: 400;
  }
</style>
