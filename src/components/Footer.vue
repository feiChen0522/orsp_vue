<template>
  <div class="center-div">
    <p>- - END - -</p>
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
        ORSP全球最大的在线资源交换网站
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
        <ul>
          <li><a href="">关于</a></li>
          <li><a href="">关于我们</a></li>
          <li><a href="">广告合作</a></li>
          <li><a href="">友情链接</a></li>
        </ul>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
        <ul>
          <li><a href="">联系方式</a></li>
          <li><a href="">新浪微博</a></li>
          <li><a href="">电子邮件</a></li>
        </ul>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
        <ul>
          <li><a href="">旗下网站</a></li>
          <li><a href="">Laravel中文网</a></li>
          <li><a href="">Ghost中国</a></li>
          <li><a href="">BootCDN</a></li>
        </ul>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
        <ul>
          <li><a href="">赞助商</a></li>
          <li><a href="">京东云</a></li>
          <li><a href="">广告合作</a></li>
          <li><a href="">又拍云</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CenterNav',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .center-div>p{
    color: #333333!important;
    margin-top: 40px;
  }
  div.row{
  background-color: black;
  border-top: 1px solid grey;
  margin-top: 20px;
}
div.row>div:first-child{
  padding-top: 20px;
}
div>ul>li:first-child{
  margin-bottom: 10px;
  margin-top: 10px;
}
div>ul>li{
  margin-bottom: 5px;
}
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* structural elements 结构元素 */
  dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
  pre, /* text formatting elements 文本格式元素 */
  form, fieldset, legend, button, input, textarea, /* form elements 表单元素 */
  th, td /* table elements 表格元素 */
  {
    margin: 0;
    padding: 0;
  }

  input {
    background: none;
    outline: none;
    border: 0px;
  }

  ul, ol {
    list-style: none;
  }

  /** 重置文本格式元素 **/
  a {
    color: #b8b8b8 !important;
    text-decoration: none;
  }
a:hover{
  color: red!important;
}

  .so-box {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background-color: rgba(255, 144, 0, 0.53);
    /*position: fixed;*/
    /*top: 0px;*/
    z-index: 10;
  }

  .so-box-content {
    width: 850px;
    height: 30px;
    margin-left: 146px;

  }

  .type_li a:hover {
    color: red;
  }
</style>
