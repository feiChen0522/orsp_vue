<template>
  <nav class="navbar navbar-default navbar-inverse" style="border-radius: 0; min-height: 30px; margin-bottom: 0;">
    <div class="container-fluid" style="width: 90%;">
      <!-- Brand and toggle get grouped fsor better mobile display -->
      <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed " data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" style="padding: 2px 4px;margin: 3px 5px 0 0;;">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <p class="navbar-text"><a class="navbar-brand navbar-link" href="#" style="margin-left: 0; padding: 0 0 0 5px; height: 20px;">ORSP</a></p>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav" style="margin-bottom: 0">
            <li><a href="#">您好，请登录 <span class="sr-only">(current)</span></a></li>
            <li><a href="#">注册</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right" style="margin-top: 0;">
            <li><a href="#">我的天下</a></li>
            <li><a href="#">换物车</a></li>
            <li><a href="#">我的收藏</a></li>
            <li><a href="#">易物指南</a></li>
            <li><a href="#">加入诚信商</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar-nav>li>a {
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 12px;
    color: rgba(251, 253, 252, 0.68);
  }
  .navbar-text {
    margin-top: 5px;
    margin-bottom: 5px;
  }
</style>
