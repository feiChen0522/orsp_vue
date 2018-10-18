<template>
  <div class="container"  >

    <div id="example-1">
      <button @mouseover="show = !show">
        Toggle render
      </button>
      <transition
        name="custom-classes-transition"
        enter-active-class="animated slideInUp"
        leave-active-class="animated slideOutDown"
      >
        <p v-if="show">hello</p>
      </transition>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'test',
  data() {
    return {
      show: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*.slide-fade-enter-active {*/
    /*transition: all .3s ease;*/
  /*}*/
  /*.slide-fade-leave-active {*/
    /*transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
  /*}*/
  /*.slide-fade-enter, .slide-fade-leave-to*/
    /*!* .slide-fade-leave-active for below version 2.1.8 *! {*/
    /*transform: translateX(10px);*/
    /*opacity: 0;*/
  /*}*/
</style>
