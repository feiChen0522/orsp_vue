<template>
  <div class="center-div">
    <div class="so-box row">
        <div class="col-lg-3"></div>
      <ul>
        <li><a href="">关于</a></li>
        <li><a href="">关于我们</a></li>
        <li><a href="">广告合作</a></li>
        <li><a href="">友情链接</a></li>
      </ul>
    </div>
  </div>
</template>
<!--


我们一直致力于为广大开发者提供更多的优质技术文档和辅助开发工具！

关于



招聘
联系方式
新浪微博
电子邮件
旗下网站
Laravel中文网
Ghost中国
BootCDN
Packagist中国镜像
燃腾教育
赞助商
京东云
又拍云

-->
<script>
export default {
  name: 'CenterNav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{

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

  /** 重置文本格式元素 **/
  a { text-decoration: none;}
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
  .type_li a:hover{
    color: red;
  }
</style>
