<template>
  <div class="index-container">

    <search-div @searchData="getGoodData" style="margin-top: 20px"></search-div>
    <center-nav style="margin-top: 20px;" @show-title="showTwoTitle"></center-nav>
    <main-nav class="div-center" :twoTitle="twoTitle"></main-nav>
    <!--每日推荐-->
    <my-recommend style="margin-top: 40px"></my-recommend>
    <!--猜你喜欢-->
    <guess-like-tel></guess-like-tel>
    <guess-like-watch></guess-like-watch>
    <guess-like-cloth></guess-like-cloth>
    <footer-div></footer-div>
  </div>
</template>

<script>
  import GuessLikeTel from '../components/indexCom/GuessLikeTel'
  import GuessLikeWatch from '../components/indexCom/GuessLikeWatch'
  import GuessLikeCloth from '../components/indexCom/GuessLikeCloth'
  import myRecommend from '../components/indexCom/myRecommend'
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
  },
  components:{
    'guess-like-tel':GuessLikeTel,
    'guess-like-watch':GuessLikeWatch,
    'guess-like-cloth':GuessLikeCloth,
    'my-recommend':myRecommend,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
