<template>
  <div class="index-container">

    <search-div @searchData="getGoodData" style="margin-top: 20px"></search-div>
    <center-nav style="margin-top: 20px;" @show-title="showTwoTitle"></center-nav>
    <main-nav class="div-center" :twoTitle="twoTitle"></main-nav>
    <footer-div></footer-div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      twoTitle:false
    }
  },
  methods:{
    getGoodData:function (t) {
      console.log(t);
    },
    showTwoTitle:function (tag) {
      console.log("------------------")
      console.log(tag)
      this.twoTitle=tag

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
