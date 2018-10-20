<template>
  <div class="container">
    <div class="row">
      <div class="col-md-11 table-responsive">
        <table class="table">
          <thead>
          <tr>
            <th class="col1">商品名称</th>
            <th class="col2">商品信息</th>
            <th class="col3">单价</th>
            <th class="col3">用户等级</th>
            <th class="col3">是否担保</th>
            <th class="col3">操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-bind:id="goods.price" v-if=flag>
            <td class="col1">
              <router-link to="/detailpage">
                <img :src=imgsrc style="width: 110px; height: 80px;margin-left: 10px;border: none" class="col-md-8">
                <p v-text="goods.title" style="text-align: left"></p></router-link>
            </td>
            <td class="col2"><p>棕色</p></td>
            <td class="col3"><p>￥{{goods.price}}</p></td>
            <td class="col4">
              <p>level8</p>
            </td>
            <td class="col5"><p>默认</p></td>
            <td class="col6"><p class="del" @click="delall">删除</p></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Carlist",
    data() {
      return {
        goods: {},
        imgsrc: '',
        flag:true
      }
    },
    mounted: function () {
      // this.goods=this.$route.params
      this.goods['price'] = sessionStorage.getItem('price')
      this.goods['title'] = sessionStorage.getItem('title')
      this.goods['address'] = sessionStorage.getItem('address')
      this.goods['img'] = sessionStorage.getItem('img')
      this.imgsrc = this.goods['img']
      if (this.goods){

      }
    },
    methods:{
      delall:function () {
        // sessionStorage.clear();
        // // window.location.reload()
        this.flag=!true
      }
    }
  }

</script>

<style scoped>
  table {
    width: 100%;
    border: 1px solid #E7E3E7;
    border-top: 2px solid #CE0000;
    background: #FFFDEE;
    color: #666;
  }

  p {
    margin-top: 20px;
    line-height: normal;
    font-size: 14px;
  }
  p:hover{
    cursor: pointer;
  }

  thead {
    height: 50px;
    line-height: 36px;
    background: url("../../assets/images/sort_bg.png");
  }

  th, td {
    text-align: center;
  }

  tbody td {
    border-bottom: 1px solid #E7E3E7;
  }

  td {
    text-align: center;
  }

  .col1 {
    width: 40%;
  }

  .col2 {
    width: 20%;
  }

  .col3 {
    width: 10%;
  }

  .mycart tbody img {
    width: 80px;
    height: 80px;
    border: 1px solid #eee;
    vertical-align: middle;
    float: left;
    display: inline;
    margin-right: 10px;
  }
</style>
