<template>
  <div class="container">
  <div class="classify">
  <h1>所有分类  >   </h1>
  <div class="row">
    <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"><a href="">相关分类:</a></div>
    <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"><a class="abc" href="">相关分类:</a></div>
    <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1" v-for="i of allClassify"><a href="" v-text="i">相关分类:</a></div>
    <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"><a href="">更多 > </a></div>
  </div>
  <div class="row sort-container">
    <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"><a href="">综合排序</a></div>
    <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"><a href="">销量</a></div>
    <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"><a href="">信用</a></div>
    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 price">
      <a href="" @mouseover="displayUlFunc">价格</a>
      <ul :style="displayUl" @mouseleave="unDisplayUlFunc">
        <li>价格从高到低</li>
        <li>价格从低到高</li>
      </ul>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 input-price">
      <input type="text" placeholder="$">
      <input type="text" placeholder="$">
      <input type="button" value="确定">
    </div>

  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Classify',
  data () {
    return {
      allClassify:[
        '针织衫衬','卫衣','长袖','衬衫T恤','短外套','大码女装','雪纺衫','蕾丝衫针','针织衫衬'
      ],
      displayUl:{},

    }
    },
  methods:{
    displayUlFunc:function () {
      this.displayUl={'display':"block"}
    },
    unDisplayUlFunc:function (event) {
      this.displayUl={'display':"none"}
    }
  },



  mounted:function () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../../static/css/classify.css";
  @import "../../../static/css/clear.css";


</style>
