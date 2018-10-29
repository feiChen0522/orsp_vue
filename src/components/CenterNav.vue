<template>
  <div class="center-div">
    <div class="so-box" style="background-color: #ce2516">
        <ul class="type_li row" >
          <li class="col-lg-2 col-md-2 col-sm-2 col-xs-2" @click="showTwoTitle"><a href="#">商品分类</a></li>
          <li class="col-lg-2 col-md-2 col-sm-2 col-xs-2"><a href="#">首页</a></li>
          <li class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
            <router-link tag="a" to="/orspdownloadmain">orsp下载</router-link>
          </li>
          <li class="col-lg-2 col-md-2 col-sm-2 col-xs-2"><a href="#">精品推荐</a></li>
          <li class="col-lg-2 col-md-2 col-sm-2 col-xs-2"><router-link to="/release">上传物品</router-link></li>
          <!--<li class="col-lg-2 col-md-2 col-sm-2 col-xs-2"><a href="search.html">交换物品</a></li>-->
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CenterNav',
  data () {
    return {
      twoTitle:false
    }
  },
  methods:{
    showTwoTitle:function () {
      this.twoTitle=!this.twoTitle
      this.$emit("show-title",this.twoTitle)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  *{margin: 0;padding: 0;list-style: none;}
  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* structural elements 结构元素 */
  dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
  pre, /* text formatting elements 文本格式元素 */
  form, fieldset, legend, button, input, textarea, /* form elements 表单元素 */
  th, td /* table elements 表格元素 */ {
    margin: 0;
    padding: 0;
  }
  input{
    background:none;
    outline:none;
    border:0px;
  }
  ul, ol { list-style: none; }

  ul>li{
    border-right: 1px solid #eeeeee;
    height: 20px;
    line-height: 20px;
    margin-top: 6px;
  }
  /** 重置文本格式元素 **/
  a { text-decoration: none;}
  .so-box {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background-color: #f5f5f5;
    /*position: fixed;*/
    /*top: 0px;*/
    z-index: 10;
  }
  .so-box ul>li>a{
    color: #eeeeee;
  }
  .so-box ul>li>a:hover{
    color: #8a8a8a;
  }

  .so-box-content {
    width: 850px;
    height: 30px;

  }
  .type_li{
    width: 804px;
    margin-left: 171px;
  }
  .type_li a:hover{
    color: red;
  }
  @media only screen and (min-width: 380px) and (max-width: 768px){
    .type_li {
      width: 100%;
      margin-left: 0;
    }
    .type_li>li{
      margin-left: 0!important;
    }
  }
  @media only screen and (min-width: 768px) {
    .type_li>li{
      margin-left: 0!important;
    }
    .type_li {
      width: 100%;
      margin-left: 0;
    }

  }
  @media only screen and (min-width: 992px) {
    .type_li>li{
      margin-left: 0!important;
    }
    .type_li{
      width: 804px!important;
      margin-left: 171px;
    }
  }
  @media only screen and (min-width: 1200px) {
    .type_li>li{
      margin-left: 0!important;
    }
    .type_li>li{
      width: 140px;
    }
    .type_li>li:first-child{
      width: 200px;
      height: 32px;
      line-height: 30px;
      position: relative;
      top: -6px;
      background-color: #0d062d;
      border-right: none;
      cursor: pointer;
    }

    .type_li>li:last-child{
      border-right: none;
    }
    .type_li{
      width: 1200px!important;
      margin-left: 180px;
      height: 100%
    }
  }


</style>
