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
          <carsell-list></carsell-list>
          <div class="col-md-12 d01"><span class="glyphicon glyphicon-sort " aria-hidden="true"></span></div>
          <div class="col-md-12 e">
            <div class="col-md-3"><h4><span>请添加你将交换的物品:</span></h4></div>
            <div class="col-md-5 order" >我提交的商品 <span style="position: relative;top: 2px;" :class="[{'glyphicon glyphicon-chevron-right':!isActiveDown},{'glyphicon glyphicon-arrow-down':isActiveDown}]" @click="isActiveDown=!isActiveDown"></span></div>

            <ul class="col-md-3" style="position: absolute;left:300px;top: 30px;z-index: 2;" v-show="isActiveDown">
              <li  style="background-color: #eeeeeefa" class="order mySelectGood" v-for="(item,index) in buyerGood" v-text="item.name" :data-id="index" @click="showGood(index,$event)"></li>
            </ul>

          </div>
          <car-list :good="selectedGood"></car-list>
          <div class="col-md-12 cart_btn">
            <div class="col-md-8"></div>
            <div class="col-md-3">
              <a href="" class="delgoods" @click="goBack">放弃商品</a>
            </div>
            <div class="col-md-1">
              <a   class="checkout"  style="cursor: pointer" @click="settlement">结 算</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Car1",
    props: [''],
    data: function () {
      return {
        isActiveDown:false,
        buyerGood:[],
        selectedGood:[]
      }
    },
    mounted: function () {
      this.buyerGood=this.$route.params;
      // this.selectedGood=this.buyerGood[0]
      // this.selectedGood["_id"]=(Math.random()*10000000).toString(16).substr(0,4)+'-'+(new Date()).getTime()+'-'+Math.random().toString().substr(2,5);
      this.selectedGood=JSON.parse(sessionStorage.getItem('buyerSelectGood'))
      // sessionStorage.setItem('buyerSelectGood',JSON.stringify(this.selectedGood))
      console.log(22222222222,this.selectedGood);
    },
    methods: {
      goBack: function () {
        this.$router.push({
          name:"SearchMain"
        }

        )
      },
      showGood:function (index,event) {
        this.selectedGood=this.buyerGood[index]
        console.log()
        let all_li=event.target.parentNode.childNodes
        for (let li of all_li){
          li.style.backgroundColor="#eeeeeefa"
        }
        console.log(event.target);
        event.target.style.backgroundColor="#00ff57";
        console.log(event.target);

      },
      settlement:function(){
        this.generateOrder()
        this.$router.push({
          name:"Car2"
        })
      },
      generateOrder:function () {
        let vm=this;
        let sellerSelectGood=sessionStorage.getItem('sellerSelectGood')
        let buyerSelectGood=sessionStorage.getItem('buyerSelectGood')
        buyerSelectGood=JSON.parse(buyerSelectGood);
        buyerSelectGood["user_id"]=sessionStorage.getItem('currentUserId')

        axios({
          method:'post',

          url:this.global.serverPath+'/resource/generateorder/',
          data:{
            "sellerSelectGood":sellerSelectGood,
            "buyerSelectGood":JSON.stringify(buyerSelectGood)
          }
        })
          .then(function (rsp) {
            sessionStorage.setItem('_id',rsp.data.insert_id)
            vm.$router.push({
              name:"Car2",
              params:{
                "_id":rsp.data.insert_id
              }
            })
          })
          .catch(function (err) {
            console.log('请求失败',err);
          })
      },


    },

  }
</script>

<style scoped>

  .mySelectGood:hover{
    background-color: #2bd9a4!important;
  }
  /*<!--我的订单-->*/
  .order{
    height: 30px;
    width: 116px;
    background-color: rgba(0,0,0,.075);
    color: #a94442;
    padding: 0;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    user-select: none;
  }

  ul, li {
    list-style: none;
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

  .d {
    position: relative;
    right: 40px;
    top: 40px;
  }

  .e {
    margin-bottom: 30px;
  }

  .d01 {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .mycart h2 {
    width: 190px;
    height: 50px;
  }

  .f1 {
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
