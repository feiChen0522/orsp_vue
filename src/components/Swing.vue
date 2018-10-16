<template>
  <div class="swing-div">

  </div>
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
  @import '../../static/css/swing.css';
</style>
