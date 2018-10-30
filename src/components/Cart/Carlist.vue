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
            <th class="col3">数量</th>
            <th class="col3">上传时间</th>
            <th class="col3">操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-bind:id="goods.price" v-if=flag>
            <td class="col1">
              <router-link to="/detailpage">
                <img :src="this.global.serverPath+'/media/pic/'+good.imgurl" style="width: 110px; height: 80px;margin-left: 10px;border: none" class="col-md-8">
                <p v-text="good.name" style="text-align: center"></p></router-link>
            </td>
            <td class="col2"><p v-text="good.description"></p></td>
            <td class="col3"><p v-text="'$'+parseFloat(good.price).toFixed(2)"></p></td>
            <td class="col4">
              <p>
                <input type="button" value="-" @click="numOperation(0)">
                <input type="text" readonly v-model="goodNum" style="width: 30px">
                <input type="button" value="+" @click="numOperation(1)">

              </p>
            </td>
            <td class="col5"><p v-text="good.upload_time"></p></td>
            <td class="col6"><p class="del" @click="delall">删除</p></td>
          </tr>
          </tbody>
        </table>
        <p style="float: right;height: 42px;line-height: 40px;color: red;font-size: 20px" v-text="parseFloat(unitPrice*goodNum).toFixed(2)">15.00</p>
        <p style="float: right;height: 40px;line-height: 40px;font-weight: 600;font-size: 16px;margin-right: 10px;">总价格:  </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Carlist",
    props:['good'],
    data() {
      return {
        goods: {},
        imgsrc: '',
        flag:true,
      //  商品数量
        goodNum:1,
        //商品单价
        unitPrice:10.10,
        //库存
        cateNum:10,
        totalPrice:0.00,

      }
    },
    mounted: function () {
      // this.goods=this.$route.params
      this.goods=JSON.parse(sessionStorage.getItem('buyerSelectGood'))
      console.log(111111111,this.good)
      this.goodNum=parseInt(this.goods.pnum)
      this.cateNum=parseInt(this.goods.category)
      this.unitPrice=parseFloat(this.goods.price)
    },
    methods:{
      delall:function () {
        // sessionStorage.clear();
        // // window.location.reload()
        this.flag=!true
      },
      numOperation:function (f) {

          this.goodNum=f===1?this.goodNum+1:this.goodNum-1
        if (this.goodNum<=0){
          this.goodNum+=1
        }else if (this.goodNum>this.cateNum) {
          this.goodNum-=1
        }
        this.goods.pnum=this.goodNum
        sessionStorage.setItem('buyerSelectGood',JSON.stringify(this.goods))


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
