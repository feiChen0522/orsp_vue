<template>
  <div class="hello">
    <div class="container ">
      <div class="row goods">
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12" v-for="(i,index) of goods">
          <div><img :src="i.img_href" alt=""></div>

          <p href=""><a href=""  v-text="i.price"></a> <a href="" v-text="i.sales_num"></a></p>
          <p  class="title"><a href="" v-text="i.title" style="color: black!important;"></a></p>
          <a href=""> <span class="glyphicon glyphicon-th-list"></span>{{i.shop}}</a>
          <a href="" v-text="i.address"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Goods',
  data () {
    return {
      img_list:[
        'goods1.jpg','goods2.jpg','goods3.jpg'
      ]
      ,goods:[]
    }
  },
  mounted:function () {
    let vm=this;
    axios.post('http://127.0.0.1:8000/resource/getgoods/',
      {
        // headers: {
        //   'Content-Type': 'application/json',
        // }
      })
      .then(function (res) {
        console.log(res.data);
        vm.goods=res.data;
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../static/css/goods.css";
@import "../../static/css/clear.css";
</style>
