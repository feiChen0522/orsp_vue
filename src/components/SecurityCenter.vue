<template>
  <div>
    <div class="top">
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
  ul,li{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .top{
    height: 40px;
    /*background-color: yellow;*/
  }
  .top span{
    color: #EE290D;
    text-align: left;
    font-size: 20px;
    line-height: 40px;
  }
  .line{
    background-color: #d74132;
    height: 3px;
    width: 100%;
  }
</style>
