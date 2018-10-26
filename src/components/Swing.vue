<template>
  <div class="swing-div">
    <div class="img-container">
      <a href=""  v-for="(i,index) of imgList" :data-id="index">
        <transition name="fade"
                    enter-active-class="animated fadeInRight"
                    leave-active-class="animated fadeOutLeft"

        >
        <img :src="i"  alt="" v-show="currentIndex==index">
        </transition>
      </a>
    </div>
    <ul class="dot-point">
      <li :data-id="index" v-for="(i,index) of imgList" @mouseover="changeImg($event)" :class="{'changeBck':currentIndex==index}"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Swing',
    data() {
      return {
        imgList:[
          '../../static/images/1.jpg',
          '../../static/images/2.jpg',
          '../../static/images/3.jpg',
          '../../static/images/4.jpg',
          '../../static/images/5.jpg',
        ],
        currentIndex:1,
        isChangeBck:true
      }
    },
    mounted:function(){
      let vm =this;

      let img_length=vm.imgList.length;
      setInterval(function () {

        if (vm.currentIndex>img_length-2){
          vm.currentIndex=0
        } else {
          vm.currentIndex+=1;
        }
      },2500)
    },
    methods:{
      changeImg:function (event) {
        this.currentIndex=parseInt(event.target.getAttribute('data-id'))
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../static/css/clear.css';
  @import '../../static/css/swing.css';
</style>
