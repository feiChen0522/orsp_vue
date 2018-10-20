<template>
  <div class="con">
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
      <div class="dongtai_goods">
        <div class="change_goods">
          <div class="good_img">
            <div class="good_img_div"></div>
          </div>
          <div class="good_seller">卖家</div>
          <div class="good_specification">新科(Shinco) DVP-311A型 DVD播放机</div>
          <div class="good_price">300.00</div>
          <div class="good_number">1</div>
          <div class="good_current_status">待付款</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'MyReleaseGoods',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
  .status span{
    display: inline-block;
    width: 120px;
    height: 50px;
    line-height: 50px;
  }
  .status span:hover{
    color: #d02210;
    cursor: pointer;
  }
  .change_message{
    font-size: 12px;
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
    min-height: 100px;
    background-color: #FFF4E8;
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
    background-image: url("../assets/images/1538788453189.jpg");
    background-size: cover;
    position: relative;
    left: 35%;
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
</style>
