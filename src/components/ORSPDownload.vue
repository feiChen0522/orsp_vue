<template>
  <div class="big">
    <!--下载页面header-->
    <nav class="navbar navbar-default" style="background-color: #EAEBEC;height: 30px">
      <div class="container">
        <ul class="nav navbar-nav">
          <li class="active"></li>
          <li><a href="#">下载首页 <span class="sr-only">(current)</span></a></li>
          <li><a href="#">排行榜</a></li>
          <li><a href="#">我的资源</a></li>
          <li><a href="#">上传资源赚积分</a></li>
          <li><a href="#">已下载</a></li>
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
    <div class="container">
      <!--下载页面中间标签分类-->
      <div class="download_l">
        <dl>
          <dt>资源领域:</dt>
          <dd>
            <ul>
              <li><a href="#">全部</a></li>
              <li><a href="#">移动开发</a></li>
              <li><a href="#">开发技术</a></li>
              <li><a href="#">课程资源</a></li>
              <li><a href="#">网络技术</a></li>
              <li><a href="#">操作系统</a></li>
              <li><a href="#">安全技术</a></li>
              <li><a href="#">数据库</a></li>
              <li><a href="#">行业</a></li>
              <li><a href="#">数据库应用</a></li>
              <li><a href="#">存储</a></li>
              <li><a href="#">信息化</a></li>
              <li><a href="#">考试认证</a></li>
              <li><a href="#">云计算</a></li>
              <li><a href="#">大数据</a></li>
              <li><a href="#">跨平台</a></li>
              <li><a href="#">音视频</a></li>
              <li><a href="#">游戏开发</a></li>
              <li><a href="#">人工智能</a></li>
              <li><a href="#">区域连</a></li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt class="border-div">资源类型:</dt>
          <dd>
            <ul>
              <li><a href="#">全部</a></li>
              <li><a href="#">文档类</a></li>
              <li><a href="#">文具类</a></li>
              <li><a href="#">代码类</a></li>
              <li><a href="#">其他</a></li>
            </ul>
          </dd>
        </dl>
      </div>
      <!--资源显示层-->
      <div class="con-2">
        <!--代码资源、最新上传-->
        <nav class="navbar navbar-default" style="border-radius: 0; margin-bottom: 0">
          <div class="container" style="padding-left: 0;padding-right: 0;">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">代码资源 <span class="sr-only">(current)</span></a></li>
              <li><a href="#">最新上传</a></li>
            </ul>
          </div>
        </nav>
        <!--动态的渲染出资源-->
        <div class="res-father">
          <!--循环开始-->
          <!--1-->
          <div class="res-model">
            <div class="img-div">
              <img src="../assets/download/xlsx.png" alt="">
            </div>
            <div class="describe">
              <p>云资源物理机代码</p>
              <p>
                <span class="sp1">上传者：</span><span v-text="upload_user"></span>
                <span class="sp1">上传时间：</span><span v-text="upload_time"></span>
                <span class="sp1">积分/O币：</span><span v-text="need_integral"></span>
              </p>
            </div>
          </div>
          <!--2-->
          <div class="res-model">
            <div class="img-div">
              <img src="../assets/download/zip.png" alt="">
            </div>
            <div class="describe">
              <p>云资源物理机代码</p>
              <p>
                <span class="sp1">上传者：</span><span v-text="upload_user"></span>
                <span class="sp1">上传时间：</span><span v-text="upload_time"></span>
                <span class="sp1">积分/O币：</span><span v-text="need_integral"></span>
              </p>
            </div>
            </div>
          </div>
            <!--3-->
          <div class="res-model">
            <div class="img-div">
              <img src="../assets/download/csdnc-file-edu.png" alt="">
            </div>
            <div class="describe"></div>
          </div>
            <!--4-->
          <div class="res-model">
            <div class="img-div">
              <img src="../assets/download/rar.png" alt="">
            </div>
            <div class="describe"></div>
          </div>
            <!--5-->
          <div class="res-model">
            <div class="img-div">
              <img src="../assets/download/unkonw.png" alt="">
            </div>
            <div class="describe"></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ORSPDownload',
  data () {
    return {
      upload_user: '小飞侠',
      upload_time: '2018-10-22 19:18:22',
      need_integral: '1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  dl,dd,dt,dl,li{
    padding: 0;
    margin: 0;
  }
  .big{
    width: 100%;
    min-height: 600px;
    background-color: #F7F8F9;
  }
  .download_l{
    width: 850px;
    padding: 10px 0 0 0;
    background-color: white;
  }
  .download_l dl{
    overflow: hidden;
    padding-bottom: 20px;
  }
  .download_l dl:nth-child(1){
    border-bottom: dashed 1px #e6e6e6;
  }
  .download_l dl dt{
    width: 78px;
    display: block;
    position: relative;
    text-align: right;
    top: 26px;
    color: #999;
    font-size: 14px;
    font-weight: 400;
  }
  .download_l dl dd{
    margin-left: 80px;
    display: block;
    width: 720px;
  }
  .download_l dd ul{
    line-height: 1.5;
    padding: 5px 10px;

  }
  .download_l dd ul,.download_l dd ul li{
    list-style: none;
  }
  .download_l dd ul li{
    float: left;
    margin: 0 8px;
  }
  .download_l dd ul li a{
    text-decoration: none;
    cursor: pointer;
    color: black;
  }
  .container .con-2{
    width: 850px;
    margin-top:20px;
  }
  .container .con-2 .res-model{
    width: 100%;
    height: 65px;
    padding: 8px 19px;
    background-color: #ffffff;
    border-bottom: dashed 1px #e6e6e6;
  }
  .container .con-2 .res-model .img-div{
    width: 45px;
    height: 48px;
    cursor: pointer;
    float: left;
  }
  .container .con-2 .res-model .img-div img{
    width: 42px;
    height: 48px;
  }
  .container .con-2 .res-model .describe{
    width: 750px;
    height: 100%;
    float: left;
    margin-left: 10px;
    cursor: pointer;
  }
  .container .con-2 .res-model .describe p{
    text-align: left;
    margin: 0;
  }
  .container .con-2 .res-model .describe p:nth-child(1){
    padding-bottom: 6px;
    font-size: 16px;
    color: #333;
    font-weight: 700;
    width: 100%;
  }
  .container .con-2 .res-model .describe p:nth-child(2){
    position: relative;
  }
  .container .con-2 .res-model .describe p:nth-child(2) span.sp1{
    color: #999;
    margin-left: 10px;
  }
  .container .con-2 .res-model .describe p:nth-child(2) span:nth-child(1){
    margin-left: 0;
  }
  .container .con-2 .res-model .describe p:nth-child(2) span:nth-last-child(1){
    color: #ff9358;
    font-size: 32px;
    line-height: 32px;
    display: inline-block;
    position: absolute;
    top: -10px;
    left: 720px;
  }
  .container .con-2 .res-model .describe p:nth-child(2) span:nth-last-child(2){
    position: absolute;
    left: 640px;

  }
</style>
