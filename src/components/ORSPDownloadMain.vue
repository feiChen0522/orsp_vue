<template>
  <div class="big">
    <!--下载页面header-->
    <orspdownload-header></orspdownload-header>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'ORSPDownloadMain',
  data () {
    return {
      condition:{
        txtcondition:'',
      }
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  dl,dd,dt,dl,li{
    padding: 0;
    margin: 0;
  }
  .big{
    width: 100%;
    min-height: 800px;
    background-color: #F7F8F9;
  }
</style>
