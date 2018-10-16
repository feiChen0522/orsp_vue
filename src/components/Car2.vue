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
                <div class="col-md-12">
                  <span class="col-md-10 f2">收货人信息:</span>
                  <a href="#" class="col-md-2 f3" >新增收货地址</a>
                </div>
                <div class="col-md-12">
                  <p>麻花疼 13555555555  苏州 虎丘区 Q讯大厦 108层</p>
                </div >
                <div class="col-md-12">
                  <p class="p1">更多地址<img src="images/show_down.svg" class="img03"></p>
                </div >
              </tr>
              <tr>
                <td><a href=""><img src=${good.img}></a> <strong><a href="">${good.title}</a></strong>
                </td>
              </tr>
              <tr>
                <td><a href=""><img src=${good.img}></a> <strong><a href="">${good.title}</a></strong>
                </td>
              </tr>
              <tr>
                <td><a href=""><img src=${good.img}></a> <strong><a href="">${good.title}</a></strong>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Car2"
  }
</script>

<style scoped>
  @import "./order.css";
</style>
