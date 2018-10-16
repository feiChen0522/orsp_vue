<template>
  <div class="swing-div">
    <div class="img-container">
      <a href=""  v-for="(i,index) of imgList" :data-id="index"><img :src="i"  alt="" v-show="currentIndex==index"></a>
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
          '../../static/images/swing/1.png',
          '../../static/images/swing/2.png',
          '../../static/images/swing/3.png',
          '../../static/images/swing/4.png',
          '../../static/images/swing/5.png',
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
