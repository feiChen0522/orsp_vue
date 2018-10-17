<template>
  <div id="app" class="container-fluid">
    <header-top></header-top>
    <center-nav></center-nav>
    <main-nav class="div-center"></main-nav>
    <goods-div></goods-div>
    <footer-div></footer-div>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container-fluid{
  padding-left: 0;
  padding-right: 0;
}
  .div-center{
  }
</style>
