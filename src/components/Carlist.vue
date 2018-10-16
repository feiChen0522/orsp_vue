<template>
  <div class="container a1">
    <div class="row">
      <div class="col-md-11 table-responsive">
        <table class="table">
          <thead>
          <tr>
            <th class="col1">商品名称</th>
            <th class="col2">商品信息</th>
            <th class="col3">单价</th>
            <th class="col3">用户等级</th>
            <th class="col3">是否担保</th>
            <th class="col3">操作</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class=""><a href=""><img src=${good.img} ></a> <strong><a href="">${good.title}</a></strong>
            </td>
            <td class="col2"><p>${good.color}</p>
              <p>${good.size}</p></td>
            <td class="col3">￥<span>${good.price}</span></td>
            <td class="col4">
              <p>${good.use_level}</p>
            </td>
            <td class="col5"><p>${good.yes_or_no}</p></td>
            <td class="col6"><a href="" class="del">删除</a></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Carlist"
    }
</script>

<style scoped>
  .mycart {
    overflow: auto;
    width: 990px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    overflow: auto
  }

  table {
    width: 100%;
    border: 1px solid #E7E3E7;
    border-top: 2px solid #CE0000;
    background: #FFFDEE;
    color: #666;
  }

  thead {
    height: 50px;
    line-height: 36px;
    background: url("../assets/images/sort_bg.png");
  }

  th,td {
    text-align: center;
  }

  .mycart tbody td {
    border-bottom: 1px solid #E7E3E7;
  }

  .mycart td {
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
