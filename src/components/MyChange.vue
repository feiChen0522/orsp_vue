<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <div class="col-md-10">
          <div class="col-md-12 i1"><span>我的交换</span></div>
          <div class="col-md-12 a2"></div>
          <div class="col-md-12 table-responsive">
            <table class="table table-bordered">
              <thead>
              <tr>
                <th class="col2">请求时间</th>
                <th class="col1">我的商品</th>
                <th class="col1">交换请求商品详情</th>
                <th class="col3">操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="i in allOrder">
                <td class="li2">{{i.generateTime}}</td>
                <td class="li2">{{i.sellerSelectGood.title}}</td>
                <td class="li2">{{'请求交换'+'  '+i.buyerSelectGood.title}}</td>
                <td>
                   <a>同意请求</a>/<a>拒绝</a>
                  <router-link to="/">
                    <p>查看对方商品详情</p>
                  </router-link>
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
    name: "MyChange",
    data() {
      return {
        allOrder:[]
      }

  },
    mounted:function (e) {
      let vm=this
      console.log(e)
      axios({
        url:"http://127.0.0.1:8000/resource/seechange/",
        data:{
          "user_id":sessionStorage.getItem('currentUserId')
        },
        method:"post"
      })
        .then(function (res) {
          vm.allOrder=res.data

        })
        .catch(function (error) {
          console.log("请求失败：，",error)

        })
    }
  }
</script>

<style scoped>
  .i1{
    font-size: 20px;
    color: black;
  }
  div{
    text-align: left ;
  }
  .a2 {
    margin-top: 20px;
  }
  .col1 {
    width: 30%;
  }

  .col2 {
    width: 12%;
  }
  .col3 {
    width: 28%;
  }
  table {
    width: 100%;
    border: 1px solid #E7E3E7;
    border-top: 2px solid #CE0000;
    background: #FFFDEE;
    color: #666;
  }

  thead {
    line-height: normal;
    background: url("../assets/images/sort_bg.png");
  }

  th,td {
    text-align: center;
  }
  .li2{
    padding-top: 20px;
  }
a{
  cursor: pointer;
}
</style>
