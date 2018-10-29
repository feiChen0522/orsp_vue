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
            <th class="col3">是否担保</th>
            <th class="col3">操作</th>
          </tr>
          </thead>
          <tbody>
          <tr  v-if=flag>
            <td class="col1">
              <router-link to="/detailpage">
                <img :src=imgsrc style="width: 110px; height: 80px;margin-left: 10px;border: none" class="col-md-8">
                <p  style="text-align: left"></p></router-link>

              <p v-text="goods.title"></p>
            </td>
            <td class="col2"><p ></p></td>
            <td class="col3"><p v-text="'$'+parseFloat(goods.price).toFixed(2)"></p></td>
            <td class="col4">
              <p>
                <input type="button" value="-" @click="numOperation(0)">
                <input type="text" readonly v-model="goodNum" style="width: 30px">
                <input type="button" value="+" @click="numOperation(1)">

              </p>
            </td>
            <td class="col5"><p>默认</p></td>
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
        totalPrice:0.00
      }
    },
    mounted: function () {
      // this.goods=this.$route.params
      this.goods['price'] = sessionStorage.getItem('price')
      this.goods['title'] = sessionStorage.getItem('title')
      this.goods['address'] = sessionStorage.getItem('address')
      this.goods['img'] = sessionStorage.getItem('img')
      this.goods['Stock'] = sessionStorage.getItem('Stock')
      let _id=sessionStorage.getItem('_id')
      this.goods['_id'] =_id?_id:(Math.random()*10000000).toString(16).substr(0,4)+'-'+(new Date()).getTime()+'-'+Math.random().toString().substr(2,5);
      console.log(_id)
        this.goods['belong_to'] = sessionStorage.getItem('belong_to')
      this.goods['belong_name'] = sessionStorage.getItem('belong_name')
      this.goods['change'] = sessionStorage.getItem('change')
      this.goods['payNum'] = sessionStorage.getItem('payNum')
      this.goods['user'] = sessionStorage.getItem('user')
      this.goods['pnum'] = this.goodNum
      this.cateNum=this.goods['Stock']
      this.imgsrc = this.goods['img']
      this.unitPrice=this.goods["price"]
      sessionStorage.setItem('sellerSelectGood',JSON.stringify(this.goods))
    },
    methods:{
      delall:function () {
        // sessionStorage.clear();
        // // window.location.reload()
        this.flag=!true
      },
      numOperation:function (f) {

          this.goodNum=f===1?this.goodNum+1:this.goodNum-1
        if (this.goodNum==0){
          this.goodNum+=1
        }else if (this.goodNum>this.cateNum) {
          this.goodNum-=1
        }
        this.goods['pnum'] = this.goodNum
        sessionStorage.setItem('sellerSelectGood',JSON.stringify(this.goods))

        console.log(this.goodNum);

      },


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
