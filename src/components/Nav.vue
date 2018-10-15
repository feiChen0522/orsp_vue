<template>
  <div class="container-fluid">
    <header class="header">
      <ul class="row">
        <li><a href="#">苏州你好</a></li>
        <li><a href="login.html">您好,请登录</a></li>
        <li><a href="register.html">免费注册</a></li>
        <li><a href="#">我的orsp</a></li>
        <li><a href="#"><img src="images/shop_car_empty.svg" alt="">
          换物车</a></li>
        <li><a href="#"><img src="images/collect.svg" alt="">收藏夹</a></li>
        <li><a href="#">联系客服</a></li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .header{
    width: 100%;
    height: 20px;
    background-color: #111;
  }
  body,ul,li{
    margin: 0;
    padding: 0;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: #999;
    font: 12px/1.5 Microsoft YaHei,tahoma,arial,Hiragino Sans GB,\\5b8b\4f53,sans-serif;;
    font-weight: 200;
  }
  .icon-change{
    width: 40px;
    height:20px;
    /*background-image: url("../images/change.svg");*/
    background-size: contain;
    background-repeat: no-repeat;
    /*background-position: -20px;*/
    float: left;
    display: none;
  }
  .header ul{
    display: flex;
    flex-direction: row;
  }
  .header ul li{
    width: 70px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin-left: 20px;
  }
  .header ul li:nth-child(4){
    margin-left: 400px;
  }
  .header ul li:nth-child(1){
    margin-left: 200px;
  }
  .header ul li:nth-child(5) img{
    width: 16px;
    height: 16px;
  }
  .header ul li:nth-child(6) img{
    width: 14px;
    height: 14px;

    left: -2px;
  }
  a:hover{
    color: red;
  }
  .logo-container{
    width: 100%;
    height: 80px;
    margin-top: 20px;
  }
  .logo-container>div{
    float: left;
  }
  .logo-icon{
    width: 100px;
    margin-left: 200px;
    height: 100px;
    overflow: hidden;
    position: relative;
    top: -20px;
    /*background-color: #1eff06;*/
  }
  .logo-icon img{
    width: 100px;
  }
  .logo-text{
    width: 140px;
    height: 80px;
    float: left;
    /*background-color: #1eff06;*/
  }
  .logo-text img{
    width: 120px;
    height: 40px;
    margin-top: 20px;
    margin-left: 10px;
  }
  /*搜索框*/
  .search-container-div{
    width: 619px;
    height: 32px;
    border: 1px solid grey;
    border-right: none;
    float: left;
    margin-top: 24px;
    margin-left: 40px;
  }
  .search-container-div input{
    width: 500px;
    height: 32px;
    line-height: 32px;
    outline: none;
    box-sizing: border-box;
    border: none;
    float: left;
    font-size: 12px;
    padding-left: 10px;
  }
  .search-container-div>img{
    width: 25px;
    height: 25px;
    margin-top: 4px;
    opacity: 0.7;
  }
  .search-container-div>img:hover{
    cursor: pointer;
    opacity: 1;
  }
  .search-container-div>div{
    width: 80px;
    height: 33px;
    float: right;
    text-align: center;
    line-height: 32px;
    font-size: 18px;
    font-weight: 700;
    color: #FFF;

    background-repeat: no-repeat;
    background-size: cover;
    /*background-position: 5px;*/
    /*background-color: #F10215;*/
    background-image: linear-gradient(to right,#ff9000 0,#ff5000 100%);
    position: relative;
    /*left: 1px;*/

  }
  .search-container-div>div:hover{
    cursor: pointer;
  }

  /*响应式头部*/
  @media only screen and (max-width: 1200px) {
    .header ul li:nth-child(4),.header ul li:nth-child(1){
      margin-left: 0!important;
    }
    .header>ul{
      display: flex;
      justify-content: space-between;
      flex-direction: row;
    }
    .header>ul>li{
      flex: 1;
    }
  }
  @media only screen and (max-width: 980px) {

  }
  @media only screen and (max-width: 640px) {
    .header>ul>li{
      overflow: hidden;
      margin-left: 0;
    }
    .header>ul>li>a{
      font-size: 10px;
      overflow: hidden;
      height: 20px;
      text-overflow: inherit;
      width: 40px;
    }
  }
</style>
