<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <div class="col-md-12">
          <div class="col-md-2 b">
            <a><img src="../assets/logo.png" alt="ORSP" class="c"></a></div>
          <div class="col-md-8 hidden-xs hidden-sm img01 d">
            <ul>
              <li class="cur">1.我的购物车</li>
              <li>2.填写核对订单信息</li>
              <li>3.成功提交订单</li>
            </ul>
          </div>
        </div>
        <div class="col-md-12">
          <div class="col-md-8 mycart hidden-xs hidden-sm"><h2 class="f1"><span>我的购物车</span></h2></div>
          <div class="col-md-4"><h2><span></span></h2></div>
          <car-list></car-list>
          <div class="col-md-12 d01"><span class="glyphicon glyphicon-sort " aria-hidden="true"></span></div>
          <div class="col-md-12 e">
            <div class="col-md-3"><h4><span>请添加你将交换的物品:</span></h4></div>
            <div class="dropdown">
              <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="true">
                我提交的订单
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Action</a></li>
              </ul>
            </div>
          </div>
          <car-list></car-list>
          <div class="col-md-12 cart_btn">
            <div class="col-md-8"></div>
            <div class="col-md-3">
              <a href="" class="delgoods">放弃商品</a>
            </div>
            <div class="col-md-1">
              <router-link tag="a" to="/car2" href="#" class="checkout">结 算</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Car1"
  }
</script>

<style scoped>
  ul,li{
    list-style: none;
  }
  .a{
    margin-top: 20px;
    margin-bottom: 50px;
    border-bottom: 2px solid #c30;
  }
  .b{
    height: 100px;
    overflow: hidden;
  }

  .c{
    height: 120px;
    width: 100px;
  }
  div{
    text-align: left;
  }

  select {
    width: 200px;
    height: 35px;
  }
  .img01 {
    width: 656px;
    height: 32px;
    background: url("../assets/images/flow_bg.png");
    background-repeat: no-repeat;
    display: inline;
    float: right;
  }
  .img01 li {
    float: left;
    width: 205px;
    text-align: center;
    line-height: 32px;
    font-size: 13px;
  }

  .d{
    position: relative;
    right: 40px;
    top: 40px;
  }
  .e{
    margin-bottom: 30px;
  }
  .d01{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .mycart h2 {
    width: 190px;
    height: 50px;
  }
  .f1{
    background: url(../assets/images/cart_001.gif);
    background-repeat: no-repeat;
  }
  .mycart h2 span {
    display: none;
  }
  .cart_btn {
  }

  .cart_btn .checkout {
    width: 135px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    float: right;
    display: inline-block;
    background: url("../assets/images/btn_check.jpg");
    background-repeat: no-repeat;
  }

  a:hover {
    text-decoration: none;
    color: #fff;
  }

  .cart_btn .delgoods {
    width: 135px;
    height: 36px;
    float: left;
    color: #fff;
    font-size: 17px;
    line-height: 36px;
    text-align: center;
    background: url("../assets/images/btn_check_1.jpg");
    background-repeat: no-repeat;
  }

  .cart_btn .continue:hover {
    text-decoration: none;

  }
  .cur {
    color: white;
    font-weight: bolder;
    margin-left: -40px;
  }
</style>
