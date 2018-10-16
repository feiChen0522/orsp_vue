<template>
  <div class="type-container">
    <div class="carousel-wrap" id="carousel">
    // 轮播图列表
    <transition-group tag="ul" class='slide-ul' name="list">
      <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
        <a :href="list.clickUrl" >
          <img :src="list.image" :alt="list.desc">
        </a>
      </li>
    </transition-group>
    // 轮播图位置指示
    <div class="carousel-items">
      <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
    </div>
  </div></div>
</template>

<script>
export default {
  name: 'Swing',
  data (){
    return {
      slideList: [
        {
          "clickUrl": "#",
          "desc": "nhwc",
          "image": "http://dummyimage.com/1745x492/f1d65b"
        },
        {
          "clickUrl": "#",
          "desc": "hxrj",
          "image": "http://dummyimage.com/1745x492/40b7ea"
        },
        {
          "clickUrl": "#",
          "desc": "rsdh",
          "image": "http://dummyimage.com/1745x492/e3c933"
        }
      ],
      currentIndex: 0,
      timer: ''
    }
},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../static/css/clear.css';
  @import '../../static/css/main.css';
</style>
