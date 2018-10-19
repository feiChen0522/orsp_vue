<template>
  <div class="search-main">
    <search-div style="margin-top: 20px"></search-div>
    <classify-div style="margin-top: 20px"></classify-div>
    <goods-div style="margin-top: 20px" v-bind:goods="currentGoods"></goods-div>
    <paging-div :currentIndex="1"  :count="currentCount" @indexclick="displayGoods"></paging-div>
    <footer-div></footer-div>
  </div>
</template>

<script>
export default {
  name: 'SearchMain',
  data () {
    return {
      goods:[],
      currentGoods:[],
      //在这里确定有多少页
      currentCount:0,
      //在这个页面确定一页放多少个
      pageCount:60
    }
  },
  created:function () {
    console.log(this.$route.params.good);
    this.goods=this.$route.params.good
    console.log("1goods",this.goods);
    //获取到数据之后,获取有多少页
    this.currentCount=parseInt(this.goods.length/this.pageCount)+1
    console.log("this.currentCount",this.currentCount);

  },
  methods:{
    displayGoods:function (e) {
      console.log(11111111111,e);
      console.log();
      //
      this.currentGoods=this.goods.slice((e-1)*this.pageCount,e*this.pageCount)
      console.log("3goods",this.currentGoods);

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
