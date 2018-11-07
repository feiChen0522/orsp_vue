<template>
  <div class="index-container">

    <search-div @searchData="getGoodData" style="margin-top: 20px" id="top"></search-div>
    <center-nav style="margin-top: 20px;" @show-title="showTwoTitle" :class="{'displayCen':isFixed}"></center-nav>
    <main-nav class="div-center" :twoTitle="twoTitle" ></main-nav>
    <!--每日推荐-->
    <my-recommend style="margin-top: 40px"></my-recommend>
    <!--猜你喜欢-->
    <guess-like-tel></guess-like-tel>
    <guess-like-watch></guess-like-watch>
    <guess-like-cloth></guess-like-cloth>

    <div class="back-top" :class="{'show-back-top':isBack}">
      <a  @click="backTop">
        <img src="../../static/images/backtop.jpeg" alt="">
      </a>
    </div>

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
    data() {
      return {
        twoTitle: false,
        //导航栏固定
        isFixed: false,
        isBack: false,
        timer:null
      }
    },
    mounted: function () {
      let self = this
      window.onscroll = function () {
        let top = $(this).scrollTop()
        if (top >= 700 && top <= 800) {
          console.log("bbbbbbbbbbbbbbbb")

          self.isFixed = true
        } else if (top > 800) {
          console.log("aaaaaaaaaaaaaaaaaaaa")
          self.isBack = true
        }
        else {
          self.isFixed = false
          self.isBack = false

        }
      }
    },
    methods: {
      getGoodData: function (t) {
        console.log(t);
      },
      showTwoTitle: function (tag) {
        console.log("------------------")
        console.log(tag)
        this.twoTitle = tag
        //返回顶部


      },
      backTop:function(){
        this.timer=setInterval(this.runToTop,60)
      },

      runToTop: function () {
        var top=document.body.scrollTop||document.documentElement.scrollTop;
        document.body.scrollTop=top-top/5;
        document.documentElement.scrollTop=top-top/5;

        if (top <= 0) {
          clearInterval(this.timer);
        }
      }
    },
    components: {
      'guess-like-tel': GuessLikeTel,
      'guess-like-watch': GuessLikeWatch,
      'guess-like-cloth': GuessLikeCloth,
      'my-recommend': myRecommend,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .displayCen {
    position: fixed;
    top: 0;
    z-index: 1000;
    margin-top: 0 !important;
    width: 100%;
  }

  .back-top {
    width: 40px;
    height: 40px;
    position: fixed;
    right: 40px;
    bottom: 80px;
    background-color: white;
    display: none;
    cursor: pointer;
  }

  .back-top img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .show-back-top {
    display: block;
  }
</style>
