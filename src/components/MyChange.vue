<template>
  <div>
    <div class="container-fluid" v-if="!flag">
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
              <tr v-for="i,index in allOrder">
                <td class="li2">{{i.generateTime}}</td>
                <td class="li2">{{i.sellerSelectGood.title}}</td>
                <td class="li2">{{'请求交换'+'  '+i.buyerSelectGood.title}}</td>
                <td >
                    <p v-if="i.sellerSelectGood.status==1">
                      <a>已同意</a>
                    </p>
                  <p v-else-if="i.sellerSelectGood.status==-1">
                    <a>已拒绝</a>
                  </p>
                  <p v-else><a @click="agreeRequest('1',$event,index)">同意请求</a>/<a @click="agreeRequest('-1',$event,index)">拒绝</a>
                  </p>
                  <router-link to="/" >
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
    <div class="sty1" style="padding:50px" v-if="flag">
      <p style="text-align: center;padding: 20px;color: #8d8d8d">你还没有任何请求交换商品的订单，请添加后查看</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyChange",
    data() {
      return {
        flag:'',
        allOrder:[]
      }

  },
    mounted:function (e) {
      let vm=this
      console.log(e)
      axios({
        url:this.global.serverPath+"/resource/seechange/",
        data:{
          "user_id":sessionStorage.getItem('currentUserId')
        },
        method:"post"
      })
        .then(function (res) {
          console.log(res)
          if ((res.data).length){
            vm.allOrder=res.data
            vm.flag=false
          }
          else{
            vm.flag=true

          }
        })
        .catch(function (error) {
          console.log("请求失败：，",error)

        })
    },
    methods:{



      agreeRequest:function (i,event,index) {
        let ins_data={
          "user_id":sessionStorage.getItem('currentUserId'),
          "operation":i,
          "_id":this.allOrder[index].sellerSelectGood._id
        }
        console.log(event.target)
        axios({
          url:this.global.serverPath+"/resource/selleragree/",
          method:"post",
          data:ins_data
        })
          .then(function (res) {
            if (res.data.code=="298") {
              if (i=="1"){
                event.target.parentNode.innerText="已同意"
              } else {
                event.target.parentNode.innerText="已拒绝"
              }
            }else {
              console.log(res.data)
            }

          })
          .catch(function (error) {
            console.log("请求失败：",error)

          })
      }
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
  .sty1 {
    width: 1038px;
    height: 200px;
    border: 0.5px solid gray;
    position: absolute;
    top:100px;
    left: 250px;
  }
</style>
