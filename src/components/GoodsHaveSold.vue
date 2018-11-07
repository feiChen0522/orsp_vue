<template>
  <div>
    <div class="con" style="margin-left:250px" v-if="!flag">
    <div class="status">
      <span>全部订单(<i>0</i>)</span>
      <span>待收款(<i>0</i>)</span>
      <span>待发货(<i>0</i>)</span>
      <span>发货中(<i>0</i>)</span>
      <span>已成交(<i>0</i>)</span>
      <span>退款中(<i>0</i>)</span>
      <div class="box-text" >
        <input type="text" placeholder="请输入要搜索的词" maxlength="30" class="input-txt">
        <div class="btn-search glyphicon glyphicon-search"></div>
      </div>
    </div>
    <div class="change_message">
      <div class="change_message_item">
        <div class="goods_msg">商品信息</div>
        <div class="seller">卖家</div>
        <div class="specification">规格</div>
        <div class="price">单价</div>
        <div class="number">数量</div>
        <div class="current_status">状态</div>
      </div>
      <div class="dongtai_goods" v-for="i in all_order">
        <div class="info">
          <span>订单号：<i>{{i.id}}</i></span>
          <span>下单时间：<i>{{i.generateTime}}</i></span>
          <span>订单完成时间：<i>2018-10-19 22:22:22</i></span>
        </div>
        <div class="change_goods">
          <div class="good_img">
            <div class="good_img_div">
              <img :src="global.serverPath+i.sellerSelectGood.img" alt="">
            </div>
          </div>
          <div class="good_seller">卖家</div>
          <div class="good_specification">{{i.sellerSelectGood.title}}</div>
          <div class="good_price">{{i.sellerSelectGood.price}}</div>
          <div class="good_number">{{i.sellerSelectGood.pnum}}</div>
          <div class="good_current_status">交易成功</div>
        </div>
      </div>
    </div>
  </div>
    <div class="sty1" style="padding:50px" v-if="flag">
      <p style="text-align: center;padding: 20px;color: #8d8d8d">你还未购买任何商品，点击下列按钮立即购买</p>
      <div style="text-align: center">
        <router-link to="/search">
          <button text="马上发布" style="width: 150px;height: 40px;line-height: 38px;color: #8d8d8d">前去购买</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'GoodsHaveSold',
  data () {
    return {
      flag:'',
      all_order:[]
    }
  },
  created:function () {
    let vm=this
    axios({
      url:this.global.serverPath+"/resource/showbuy/",
      data:{
        "user_id":sessionStorage.getItem('currentUserId')
      },
      method:"post"
    })
      .then(function (res) {
        console.log((res.data).length!=0)
        if ((res.data).length){
          vm.all_order=res.data
          vm.flag=false
        }
        else {
          vm.flag=true
        }



      })
      .catch(function (error) {
        console.log(error)

      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .con{
    width: 1038px;
    border: 1px solid #c5c5c5;
  }
  .status{
    width: 100%;
    height: 50px;
    padding: 0 10px;
    background-color: white;
  }
  .status>span{
    display: inline-block;
    width: 120px;
    height: 50px;
    line-height: 50px;
    text-align: left ;
  }
  .status span:hover{
    color: #d02210;
    cursor: pointer;
  }
  .change_message{
    font-size: 12px;
    /*min-height: 900px;*/
    color: #999;
  }
  .change_message_item{
    border-top: 1px solid #CCCCCC;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #F5F5F5;
  }
  .change_message_item div,.change_goods div{
    float: left;
  }
  .change_message_item .goods_msg,.change_goods .good_img{
    width: 30%;
  }
  .change_message_item .seller,.change_goods .good_seller{
    width: 12.5%;
  }
  .change_message_item .specification,.change_goods .good_specification{
    width: 20%;
  }
  .change_message_item .price,.change_goods .good_price{
    width: 12.5%;
  }
  .change_message_item .number,.change_goods .good_number{
    width: 12.5%;
  }
  .change_message_item .current_status,.change_goods .good_current_status{
    width: 12.5%;
  }
  .dongtai_goods{
    color: #666;
    min-height: 125px;
    background-color: #FFF4E8;
  }
  .dongtai_goods .info{
    width: 100%;
    line-height: 25px;
    height: 25px;
    background-color: #e3e3e3;
    text-align: left;
  }
  .dongtai_goods .info span{
    margin: 0 10px;
  }
  .change_goods{
    text-align: center;
    height: 100px;
    line-height: 100px;
    border-top: 1px solid #CCCCCC;
  }
  .change_goods .good_img .good_img_div{
    width: 100px;
    height: 99px;
    background-size: cover;
    position: relative;
    left: 35%;
  }
  .change_goods .good_img .good_img_div img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .change_goods .good_current_status{
    color: #D30000;
  }
  .change_amount .amount span{
    color: #D30000;
    font-weight: bold;
  }
  .box-text{
    float: right;
    width: 275px;
    height: 39px;
    border: 1px solid rgba(53, 37, 108, 0.19);
    margin: 6px auto;
  }
  .input-txt{
    text-indent: 5px;
    width: 228px;
    padding: 8px 0 8px 10px;
    border: none;
    font-size: 12px;
    outline: none;
  }
  .box-text .btn-search{
    float: right;
    width: 40px;
    line-height: 40px;
    text-align: center;
    height: 38px;
    position: relative;
    top: -1px;
    left: 2px;
    background-color: rgb(135, 233, 40);
    color: #ffffff;
  }
  .box-text .btn-search:focus,.box-text .btn-search:hover{
    cursor: pointer;
  }
  .sty1 {
    width: 1038px;
    height: 200px;
    border: 0.5px solid gray;
    position: absolute;
    top:100px;
    left: 250px;
  }
</style>
