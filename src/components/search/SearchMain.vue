<template>
  <div class="search-main">
    <search-div style="margin-top: 20px"></search-div>
    <classify-div style="margin-top: 20px"></classify-div>
    <goods-div style="margin-top: 20px" v-bind:goods="goods"></goods-div>
    <footer-div></footer-div>
  </div>
</template>

<script>
export default {
  name: 'SearchMain',
  data () {
    return {
      goods:[],
    }
  },
  mounted:function () {
    console.log(this.$route.params.good);
    this.goods=this.$route.params.good
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
