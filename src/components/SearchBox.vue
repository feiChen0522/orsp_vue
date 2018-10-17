<template>
  <div class="search-box">
    <div class="con-logo">
      <a href="#"><div class="logo"></div></a>
    </div>
    <div class="box">
      <div class="box-text" >
        <input type="text" placeholder="请输入要搜索的词" maxlength="30" class="input-txt">
        <div class="btn-search glyphicon glyphicon-search"><span>搜索</span></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SearchBox',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media only screen and (min-width: 581px){
    .search-box{
      width: 100%;
      height: 70px;
      margin: auto;
    }
    .search-box .con-logo{
      width: 20%;
      /*background-color: yellow;*/
      height: 64px;
      float: left;

    }
    .search-box .logo{
      width: 64px;
      height: 64px;
      background-image: url("../../static/images/logoko.png");
      background-repeat: no-repeat;
      background-size: cover;
      margin-left: 80px;
    }
    .search-box .box{
      /*background-color: #5bc0de;*/
      height: 64px;
      width: 80%;
      float: right;
    }
    .search-box .box .box-text{
      width: 384px;
      height: 39px;
      border: 3px solid #ff6a19;
      /*box-sizing: border-box;*/
      margin: 15px auto;
    }
    .search-box .box .input-txt{
      text-indent: 5px;
      width: 328px;
      padding: 8px 0 8px 10px;
      border: none;
      font-size: 12px;
      outline: none;
    }
    .search-box .box .box-text .btn-search{
      float: right;
      width: 50px;
      line-height: 36px;
      text-align: center;
      height: 35px;
      position: relative;
      top: -1px;
      background-color: #ff6a19;
      color: #ffffff;
    }
    .search-box .box .box-text .btn-search:focus, .search-box .box .box-text .btn-search:hover{
      cursor: pointer;
    }
    .search-box .box .box-text .btn-search span{
      position: relative;
      top: -2px;
    }
  }
  @media only screen and (min-width: 240px) and (max-width: 580px){
    .search-box .con-logo{
      display: none;
    }
    .search-box .box{
      height: 40px;
    }
    .search-box .box .box-text{
      width: 90%;
      height: 39px;
      border: 3px solid #ff6a19;
      margin: 15px auto

    }
    .search-box .box .input-txt{
      text-indent: 5px;
      width: 80%;
      padding: 8px 0 8px 10px;
      border: none;
      font-size: 12px;
      outline: none;
    }
    .search-box .box .box-text .btn-search{
      float: right;
      width: 20%;
      line-height: 37px;
      text-align: center;
      height: 35px;
      position: relative;
      top: -1px;
      left: 1px;
      background-color: #ff6a19;
      color: #ffffff;
    }
    .search-box .box .box-text .btn-search span{
      position: relative;
      top: -2px;
    }
  }

</style>
