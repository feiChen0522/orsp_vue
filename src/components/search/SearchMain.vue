<template>
  <div class="search-main">
    <search-div style="margin-top: 20px" :con="inputText"></search-div>
    <classify-div style="margin-top: 20px"></classify-div>
    <goods-div style="margin-top: 20px" v-bind:goods="currentGoods"></goods-div>
    <paging-div :currentIndex="1"  :count="currentCount" @indexclick="displayGoods"></paging-div>
    <footer-div></footer-div>
  </div>
</template>

<script>
export default {
  name: 'SearchMain',
  data () {
    return {
      goods:[],
      currentGoods:[],
      //在这里确定有多少页
      currentCount:0,
      //在这个页面确定一页放多少个
      pageCount:60,
      inputText:''
    }
  },
  created:function () {
    if (this.$route.params.con!=null){
      //从首页点击过来

      this.inputText=this.$route.params.con;
      console.log("this.inputText",this.inputText)
      axios.get('http://127.0.0.1:8000/resource/searchGoods/?good='+this.inputText+'&index='+0
        ,{
          // headers: {
          //   'Content-Type': 'application/json',
          // }
        })
        .then(function (res) {
          //在sessionStorage暂时存储搜索到的数据
          console.log(res)
          sessionStorage.setItem('searchGoods',JSON.stringify(res.data))
          this.goods=res.data
          this.currentCount=parseInt(this.goods.length/this.pageCount)+1
          this.displayGoods(1)
          // window.location.reload();
          //控制台打印请求成功时返回的数据
          //bind(this)可以不用
        }.bind(this))
        .catch(function (err) {
          if (err.response) {
            console.log(err.response)
            //控制台打印错误返回的内容
          }
          //bind(this)可以不用
        }.bind(this))
    }
    else {
      if (sessionStorage.getItem('searchGoods')!=null){
        this.goods=JSON.parse(sessionStorage.getItem('searchGoods'))
      }else {
        console.log(this.$route.params.good);
        this.goods=this.$route.params.good

      }
      this.currentCount=parseInt(this.goods.length/this.pageCount)+1
      this.displayGoods(1)

      //获取到数据之后,获取有多少页

    }

  },
  methods:{
    displayGoods:function (e) {
      console.log();
      //
      this.currentGoods=this.goods.slice((e-1)*this.pageCount,e*this.pageCount)

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
