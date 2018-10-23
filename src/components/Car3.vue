<template>
  <div class="container-fluid">
    <div class="col-md-1"></div>
    <div class="col-md-10">
      <div class="col-md-12">
        <div class="col-md-2 b">
          <a><img src="../assets/logo.png" alt="ORSP" class="c"></a></div>
        <div class="col-md-8 hidden-xs hidden-sm img01 d">
          <ul>
            <li class="cur1">1.我的购物车</li>
            <li>2.填写核对订单信息</li>
            <li class="cur2">3.成功提交订单</li>
          </ul>
        </div>
      </div>
      <div class="col-md-12 ee">
        <div class="col-md-12 success_hd">
          <span>订单提交成功</span>
        </div>
        <div class="success_bd">
          <p><span></span>订单提交成功，我们将及时为您处理</p>
          <p class="message"><strong>完成支付后，你可以</strong> <a class="a01" style="cursor: pointer" @click="showOrder">查看订单状态</a>
            <router-link to="/" class="a01" >继续购物</router-link> <a href="" a01>问题反馈</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Car3",
    methods:{
      showOrder:function () {
        this.$router.push({
          name:"Order",
        })
      }
    }
  }
</script>

<style scoped>
  ul, li {
    list-style: none;
  }

  a {
    color: black;
  }

  .a {
    margin-top: 20px;
    margin-bottom: 50px;
    border-bottom: 2px solid #c30;
  }

  .b {
    height: 100px;
    overflow: hidden;
  }

  .c {
    height: 120px;
    width: 100px;
  }

  div {
    text-align: left;
  }

  .img01 {
    width: 656px;
    height: 32px;
    background: url("../assets/images/flow_bg.png") 0px -64px;
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

  .d {
    position: relative;
    top: 40px;
  }

  a:hover {
    text-decoration: none;
  }

  .cur2 {
    color: white;
    font-weight: bolder;
  }

  .cur1 {
    margin-left: -40px;
  }

  .success_hd {
    height: 36px;
    line-height: 36px;
    background: url("../assets/images/sort_bg.png") 0 0 repeat-x;
    border: 1px solid #E7E3E7;
    border-top: 2px solid #CE0000;
    border-bottom: 0;
  }

  .success_bd {
    margin-top: 40px;
    border: 1px solid #E7E3E7;
    border-top: 0;
    padding: 30px 10px;
  }

  .success_bd p span {
    display: inline-block;
    width: 36px;
    height: 36px;
    background: url("../assets/images/bg_icons.png") 0 -304px;
    margin-right: 5px;
    position: relative;
    top: 10px;
  }

  .success_hd span {
    font-size: 19px;
    color: black;
  }

  .success_bd p {
    font-size: 16px;
    text-align: center;
    font-weight: bolder;
    color: #8CBD75;
  }

  .success_bd p.message {
    border-top: 1px dotted #eee;
    padding-top: 20px;
    margin-top: 20px;
    font-size: 15px;
    color: #666;
  }

  .message a {
    color: #005aa0;
    font-size: 13px;
  }

  .ee {
    margin-top: 30px;
  }

</style>
