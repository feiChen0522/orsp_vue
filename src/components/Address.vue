<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-10 a1">
        <div class="col-md-10">
          <div class="col-md-12 ">
            <div class="col-md-3"><h3>收货地址薄</h3></div>
            <div class="col-md-3"><button type="button" class="btn btn-default sp2">新增地址</button></div>
          </div>
          <div class="col-md-12 a2"></div>
          <div class="col-md-11 a">
            <div class="col-md-11"></div>
            <div class="col-md-1">
              <a href="" class="del1">删除</a>
            </div>
            <div class="col-md-12 sp1">
              <span class="col-md-2">收货人:</span>
              <div class="col-md-8">王</div>
            </div>
            <div class="col-md-12 sp1">
              <span class="col-md-2">所在地区:</span>
              <div class="col-md-8">北京市 昌平区</div>
            </div>
            <div class="col-md-12 sp1">
              <span class="col-md-2">详细地址:</span>
              <div class="col-md-8">q办公楼一层</div>
            </div>
            <div class="col-md-12 sp1">
              <span class="col-md-2">手机号码:</span>
              <div class="col-md-8">13555555555</div>
            </div>
            <div class="col-md-12 sp1">
              <span class="col-md-2">配送方式:</span>
              <div class="col-md-2">顺丰快递</div>
            </div>
            <div class="col-md-12">
              <div class="col-md-11 a11"><a href="" class="x3">设为默认地址</a></div>
              <div class="col-md-1 "><a href="" class="x1">编辑</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Address',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .a1 {
    text-align: left;
  }
  .a11{
    text-align: right;
  }

  .a {
    border: solid 1px gainsboro;
    margin-left: 40px;
    height: 260px;
  }

  .item1 {
    color: #e8e8e8;
  }

  .sp1 {
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 80px;
  }

  .sp2 {
    margin-top: 17px;
    width: 150px;
    font-size: 16px;
  }

  .a2 {
    margin-top: 20px;
    margin-bottom: 50px;
    border-bottom: 2px solid #c30;
  }

  .del1 {
    background-image: url("../assets/icon/close.png");
    background-repeat: no-repeat;
    text-indent: 2em;
    overflow: hidden;
    width: 13px;
    height: 13px;
    margin-top: 10px;
    margin-left: 40px;
    display: inline-block
  }
  a:hover{
    text-decoration: none;
  }

</style>
