<template>
  <div id="app" class="container-fluid">
    <classify-div></classify-div>
    <header-top></header-top>
    <search-div style="margin-top: 20px"></search-div>
    <center-nav style="margin-top: 20px"></center-nav>
    <main-nav class="div-center"></main-nav>
    <goods-div style="margin-top: 20px"></goods-div>
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
