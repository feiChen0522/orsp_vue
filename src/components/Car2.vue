<template>
  <div class="container-fluid">
    <div class="col-md-1"></div>
    <div class="col-md-10">
      <div class="col-md-12">
        <div class="col-md-2 b">
          <a><img src="../assets/logo.png" alt="ORSP" class="c"></a></div>
        <div class="col-md-7 hidden-xs hidden-sm img01 d">
          <ul>
            <li class="cur1">1.我的购物车</li>
            <li class="cur2">2.填写核对订单信息</li>
            <li>3.成功提交订单</li>
          </ul>
        </div>
      </div>
      <div class="col-md-12">
        <div class="col-md-12 table-responsive">
          <table class="table">
            <thead>
            <td class="c1">填写并核对订单信息</td>
            </thead>
            <tbody>
            <tr>
              <td>
                <div class="col-md-12">
                  <span class="col-md-10 f2"><strong>收货人信息:</strong></span>
                  <a href="#" class="col-md-2 f3">新增收货地址</a>
                </div>
                <div class="col-md-12" @click="onclick">
                  <p :class="{'g1':flag1}">麻花疼 13555555555 苏州 虎丘区 Q讯大厦 108层</p>
                </div>
                <div v-if="flag">
                  <div class="col-md-12">
                    <p>麻花疼 13555555555 苏州 虎丘区 Q讯大厦 108层</p>
                    <p>麻花疼 13555555555 苏州 虎丘区 Q讯大厦 108层</p>
                    <p>麻花疼 13555555555 苏州 虎丘区 Q讯大厦 108层</p>
                  </div>
                </div>
                <div class="col-md-12" @click="onchange">
                  <b class="p1">更多地址<span class="glyphicon glyphicon-menu-down
" aria-hidden="true" v-if="!flag"></span><span class="glyphicon glyphicon-menu-up
" aria-hidden="true" v-if="flag"> </span></b>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="col-md-12">
                  <span class="col-md-10 f2"><strong>邮寄方式:</strong></span>
                  <a href="#" class="col-md-2 f3">更多+</a>
                </div>
                <div class="col-md-12" @click="onclick">
                  <p :class="{'g1':flag1}">顺丰快递</p>
                </div>
                <div class="col-md-12" @click="onclick">
                  <p :class="{'g1':flag1}">送货时间不限</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="col-md-12">
                  <span class="col-md-10 f2"><strong>支付方式:</strong></span>
                </div>
                <div class=" col-md-12 radio e">
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>担保交易
                  </label>
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option1">非担保交易
                  </label>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-12">
          <router-link tag="a" to="/car3"  class="delgoods">放弃商品</router-link>
        </div>
      </div>
    </div>
    <div class="col-md-1"></div>
  </div>


</template>

<script>
  export default {
    name: "Car2",
    data() {
      return {
        flag: false,
        flag1: false,
      }
    },
    methods: {
      onchange: function () {
        this.flag = !this.flag
      },
      onclick: function () {
        this.flag1 = !this.flag1
      }
    }
  }
</script>

<style scoped>
  ul,li{
    list-style: none;
  }
  a{
    color: black;
  }

  a:hover{
    text-decoration: none;
    color: black;
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

  .img01 {
    width: 656px;
    height: 32px;
    background: url("../assets/images/flow_bg.png") 0px -32px;
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
    right: 20px;
    top: 40px;
  }
  .e {
    margin-left: 15px;
  }
  .f1{
    background: url(../assets/images/cart_001.gif);
    background-repeat: no-repeat;
  }

  .delgoods {
    width: 135px;
    height: 36px;
    float: right;
    color: #fff;
    font-size: 17px;
    line-height: 36px;
    text-align: center;
    background: url("../assets/images/btn_check_1.jpg") ;
    background-repeat: no-repeat;
  }
  .delgoods:hover{
    text-decoration: none;
    color: white;
  }
  a:hover {
    text-decoration: none;
  }
  .cur2 {
    color: white;
    font-weight: bolder;
  }
  .cur1{
    margin-left: -40px;
  }
  table {
    border: 1px solid #E7E3E7;
    border-top: 2px solid #CE0000;
    background: #FFFDEE;
    color: #666;
    margin-top: 40px;}
  thead {
    height: 50px;
    line-height: 36px;
    background: url("../assets/images/sort_bg.png");
  }
  .f2{
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    color: black;
  }
  tbody td {
    border-bottom: 1px solid #E7E3E7;
  }
  p{
    margin-left: 15px;
    font-size: 15px;
    cursor:pointer;
    height: 40px;
    line-height: 40px;
  }
  b{
    cursor:pointer;
  }
  .g1{
    background-color: gainsboro;
  }
  p:hover{
    background-color: gainsboro;
  }

  tbody img {
    height: 80px;
    border: 1px solid #eee;
    vertical-align: middle;
    float: left;
    display: inline;
    margin-right: 10px;
  }
  .c1{
    text-align: left;
    font-size: 17px;
    margin-left: 18px;
    color: black;
  }
  .f3{
    text-align: right;
    height: 40px;
    line-height: 40px;
  }
  .p1{
    font-size: 10px;
    margin-top: 5px;
    margin-left: 15px;
    width: 60px;
  }

  .e1{
    margin-top: 10px;
  }


</style>
