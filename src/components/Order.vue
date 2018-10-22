<template>
  <div class="container st1">
    <div class="row">
      <div class="col-md-10">
        <p style="text-align: left;font-size: 26px">我的订单:</p>
      </div>
      <div class="col-md-10 a"></div>
      <div class="col-md-10 table-responsive ">
        <table class="table table-bordered b">
          <thead>
          <tr>
            <th width="10%">订单号</th>
            <th width="15%">订单商品</th>
            <th width="8%">收货人</th>
            <th width="32%">收货地址</th>
            <th width="15%">下单时间</th>
            <th width="8%">订单状态</th>
            <th width="12%">操作</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><a href="">471196680</a></td>
            <td><a href="" style="color: #ff5000"></a></td>
            <td>王</td>
            <td>湖北省 武汉市 武昌 软件园1号201 13333333333</td>
            <td>2018-10-06 23:00:00</td>
            <td>已完成</td>
            <td><a href="">查看</a>|<a href="">删除</a></td>
          </tr>
          <tr>
            <td><a href="">471196612</a></td>
            <td><a href="">2222222222222</a></td>
            <td>王</td>
            <td>湖北省 武汉市 武昌 软件园1号201 13333333333</td>
            <td>2018-10-06 23:00:00</td>
            <td>待确定</td>
            <td><a href="">查看</a>|<a href="">取消订单</a></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: 'Order',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!--Add "scoped" attribute to limit CSS to this component only-->
<style scoped>
  .st1{
    position: absolute;
    top:70px;
    left: 270px;
  }
  th {
    text-align: center;
    background-color: #f5f5f5;
    height: 30px;

  }

  td {
    text-align: center;
    height: 40px;
    line-height: 40px;
  }

  .a {
    margin-top: 20px;
    margin-bottom: 50px;
    border-bottom: 2px solid #c30;
  }

  a {
    color: black;
  }

  a:hover {
    color: #717171;
    text-decoration: none;
  }

</style>
