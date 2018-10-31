<template>
 <div>
   <div class="container st1" v-if="!flag">
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
           <tr v-for="i in myOrder">
             <td style="text-align: left"><a >{{i.id}}</a></td>
             <td><a style="color: #060200;text-align: left;font-size: 12px" v-text="i.sellerSelectGood.title" ></a></td>
             <td v-text="i.buyerSelectGood.selectAddressByUser.concact_name" style="text-align: left"></td>
             <td v-text="i.buyerSelectGood.selectAddressByUser.provice_id+'        '+i.buyerSelectGood.selectAddressByUser.city_id"></td>
             <td v-text="i.generateTime"></td>
             <td v-text="formatStatus(i.buyerSelectGood.guarantyStatus)"></td>
             <td><a @click="deleteOrder(i.id)">删除</a></td>
           </tr>
           </tbody>
         </table>
       </div>
     </div>
   </div>
   <div class="sty1" style="padding:50px" v-if="flag">
     <p style="text-align: center;padding: 20px;color: #8d8d8d">你还没有任何订单信息，请添加订单后查看</p>
   </div>

 </div>

</template>

<script>
  export default {
    name: 'Order',
    data() {
      return {
        flag:'',
        myOrder:[]
      }
    },
    created:function () {
      let that=this
      if (localStorage.getItem('token')!=null) {
        let token = localStorage.getItem('token')
        axios({
          method: 'post',
          url: this.global.serverPath+'/user/judgetoken/',
          headers: {'token': token},
        })
          .then(function (rsp) {
            let id =sessionStorage.getItem('currentUserId')
            axios({
              method: 'post',
              url: that.global.serverPath+'/resource/seemyorder/',
              data:{
                "id":id
              }
            })
              .then(function (rsp) {
                console.log((rsp.data).length)
                if ((rsp.data).length){
                  that.myOrder=rsp.data;
                  that.flag=false
                }
                else{
                  that.flag=true
                }

              })
              .catch(function (err) {
                console.log('请求失败', err);
              })
          })
          .catch(function (err) {
            console.log('请求失败', err);
          })
      }
    },
   methods:{
     formatStatus:function (i) {
       if (parseInt(i)==1){
         return "已缴纳担保金"
       }else {
         return "未缴纳担保金"

       }

     },
     deleteOrder:function (id) {
       axios({
         method:'post',
         url:this.global.serverPath+'/resource/deletemyorder/',
         data:{
           "user_id":sessionStorage.getItem('currentUserId'),
           "id":id
         }
       })
         .then(function (rsp) {
           window.location.reload()
         })
         .catch(function (err) {
           console.log('请求失败',err);
         })
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
  .sty1 {
    width: 1038px;
    height: 200px;
    border: 0.5px solid gray;
    position: absolute;
    top:100px;
    left: 250px;
  }
</style>
