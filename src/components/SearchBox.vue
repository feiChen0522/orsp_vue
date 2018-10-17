<template>
  <div class="search-box">
    <div>
      <a href="####"><div class="logo"></div></a>
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
  .search-box{
    width: 1140px;
    height: 70px;
    margin: auto;
    background-color: #F8F8F8;
  }
  .search-box .logo{
    float: left;
    width: 64px;
    height: 64px;
    background-image: url("../../static/images/logoko.png");
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 80px;
   }
  .search-box .box{

  }
  .search-box .box .box-text{
    width: 384px;
    float: left;
    height: 39px;
    border: 3px solid #999999;
    /*box-sizing: border-box;*/
    margin: 15px 0 15px 300px;
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
    color: gray;
    line-height: 36px;
    text-align: center;
    height: 35px;
    position: relative;
    top: -1px;
  }
  .search-box .box .box-text .btn-search:focus, .search-box .box .box-text .btn-search:hover{
    background-color: #999999;
    color: #ffffff;
  }
  .search-box .box .box-text .btn-search span{
    position: relative;
    top: -2px;
  }
</style>
