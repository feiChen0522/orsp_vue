<template>
  <div id="app" class="container-fluid">
    <header></header>
    <center-nav></center-nav>
    <main-nav></main-nav>
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
  margin-top: 60px;
}
.container-fluid{
  padding-left: 0;
  padding-right: 0;
}
</style>
