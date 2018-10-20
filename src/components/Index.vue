<template>
  <div class="index-container">

    <search-div @searchData="getGoodData" style="margin-top: 20px"></search-div>
    <center-nav style="margin-top: 20px;margin-bottom: 20px"></center-nav>
    <main-nav class="div-center"></main-nav>
    <goods-div style="margin-top: 20px"></goods-div>
    <footer-div></footer-div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    getGoodData:function (t) {
      console.log(t);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
