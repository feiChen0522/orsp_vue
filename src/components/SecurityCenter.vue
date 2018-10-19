<template>
  <div>
    <div class="right-top">
      <span>安全中心</span>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'SecurityCenter',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .right-top{
    height: 40px;
    /*background-color: yellow;*/
  }
  .right-top span{
    color: #666;
    font-size: 20px;
    line-height: 40px;
  }
  .line{
    background-color: #999;
    height: 1px;
    width: 100%;
  }
</style>
