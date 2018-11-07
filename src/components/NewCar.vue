<template>
  <div class="container-fluid">
    <div class="modal fade" id="tishi" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div>购物车为空</div>
          </div>
        </div>
      </div>
    </div>
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
          <div class="shoppingcar">
            <div class="shopcontent">
              <div class="box" >
                <!-- 购物车内容开始-->
                <div class="box1">
                  <div class="carstyle">
                    <div class="cartitle">
                      <span class="name">商品信息</span>
                      <span class="operation">操作</span>
                      <span>上架日期</span>
                      <span class="num">数量</span>
                      <span class="pricel">单价</span>
                    </div>

                  </div>
                  <div class="cart-table" v-if="false">
                    <div class="cart-group divide pr">
                      <div class="cart-items clearfix">
                        <!--图片-->
                        <div class="items-thumb fl">
                          <img><a></a>
                        </div>
                        <!--信息-->
                        <div class="name hide-row fl">
                          <div class="name-table">
                            <a><p>xiuxia</p></a>
                          </div>
                        </div>
                        <!--价格-->
                        <div class="Cleft Cbtn" style="display: inline-block"><p>¥1</p></div>
                        <!--价格-->
                        <div class="Cbtn">
                          <p>
                            <input type="button" value="-" @click="numOperation(0)">
                            <input type="text" readonly v-model="goodNum" style="width: 30px">
                            <input type="button" value="+" @click="numOperation(1)">
                          </p>
                        </div>
                        <div class="Cbtn"><p>2018-07-09</p></div>
                        <!--删除按钮-->
                        <div class="Cdel">
                          <p class="items-delete-btn"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style="padding:50px" v-if="true">
                    <div class="cart-e">
                    </div>
                    <p style="text-align: center;padding: 20px;color: #8d8d8d">你的购物车空空如也</p>
                    <div style="text-align: center">
                      <router-link to="/">
                        <button text="现在选购" style="width: 150px;height: 40px;line-height: 38px;color: #8d8d8d">马上选购</button>
                      </router-link>
                    </div>

                  </div>
                </div>

                <div class="cart-bottom-bg fix-bottom" v-if="false">
                  <div class="shipping-box">
                    <div><h4 style="border-right: 1px solid  #e1e1e1;
      padding: 0 20px;margin-right: 20px">已选择 <i>2</i> 件商品</h4></div>
                    <div><h4>总额：<span>￥2</span></h4></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

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
              <a   class="checkout" @click="generateOrder" style="cursor: pointer">结 算</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Carlist",
    props: ['good'],
    data() {
      return {
        goods: {},
        imgsrc: '',
        flag: true,
        //  商品数量
        goodNum: 1,
        //商品单价
        unitPrice: 10.10,
        //库存
        cateNum: 10,
        totalPrice: 0.00,
        id:18

      }
    },
    created:function(){
      let vm=this
      let url=this.global.serverPath+"/user/getcart/"
      axios({
        method: 'post',
        url: url,
        data:{
          "type":"2",
          "id":sessionStorage.getItem('currentUserId')
        }

      })
        .then(function (rsp) {
          if (rsp.data==0){
            $('#tishi').modal('show');
          }
          else {
            res=(rsp.data==0)
          }
        })
        .catch(function (err) {
        })

    },

    mounted: function () {
      // this.goods=this.$route.params
      this.goods = JSON.parse(sessionStorage.getItem('buyerSelectGood'))
      this.goodNum = parseInt(this.goods.pnum)
      this.cateNum = parseInt(this.goods.category)
      this.unitPrice = parseFloat(this.goods.price)
    },
    methods: {
      delall: function () {
        // sessionStorage.clear();
        // // window.location.reload()
        this.flag = !true
      },
      numOperation: function (f) {

        this.goodNum = f === 1 ? this.goodNum + 1 : this.goodNum - 1
        if (this.goodNum <= 0) {
          this.goodNum += 1
        } else if (this.goodNum > this.cateNum) {
          this.goodNum -= 1
        }
        this.goods.pnum = this.goodNum
        sessionStorage.setItem('buyerSelectGood', JSON.stringify(this.goods))


      }
    }
  }
</script>

<style scoped>
  .shopcontent {
    clear: both;
    width: 90%;
    min-height: 600px;
    padding: 0 0 25px;
    margin: 0 auto;
    padding-top: 40px;
  }

  .box {
    margin-bottom: 30px;
    overflow: hidden;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0, 0, 0, .14);
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, .1);

  }

  .carstyle {
    padding-bottom: 10px;
  }

  .carstyle .cartitle {
    z-index: 1;
    line-height: 38px;
    height: 38px;
    padding: 0 0 0 30px;
    font-size: 12px;
    background: #eee;
    border-bottom: 1px solid #dbdbdb;
    border-bottom-color: rgba(0, 0, 0, .08);
  }

  .carstyle .cartitle .name {
    float: left;
    text-align: left;
    margin-left: 280px;
  }

  .box1 {
    position: relative;
  }

  .carstyle .cartitle span {
    width: 13%;
    float: right;
    text-align: center;
    color: #838383;
  }

  .cart-items {
    height: 140px;
    margin-left: 7%;
    display: flex;
    align-items: center;
  }

  .items-thumb {
    margin-top: 30px;
    overflow: hidden;
    width: 80px;
    height: 110px;
  }

  img {
    width: 80px;
    height: 80px;
  }

  .name {
    width: 380px;
    margin-left: 20px;
    color: #323232;
    display: table;
    float: left;
  }

  .name-table {
    display: table-cell;
    vertical-align: middle;
    height: 140px;
  }

  .operation {
    height: 38px;
    margin-left: 24px;
    font-size: 12px;
    line-height: 38px;
  }

  .items-delete-btn {
    display: block;
    width: 30px;
    height: 30px;
    margin: 0 auto;
    margin-bottom: 10px;
    color: #C2C2C2;
    background: url("../assets/icon/delete-btn-icon_a35bf2437e@2x.jpg");
    background-size: 100% auto;
    cursor: pointer;
  }

  .items-delete-btn :hover {
    background-image: url("../assets/icon/delete-btn-icon_a35bf2437e@2x.jpg");
  }

  .cart-bottom-bg {
    position: relative;
    z-index: 200;
    border-top: 1px solid #D9D9D9;
    border-radius: 0 0 8px 8px;
    height: 70px;
    width: 100%;

    background: #f7f7f7;
    border-top: 1px solid #e9e9e9;
    box-shadow: 0 -3px 8px rgba(0, 0, 0, .04)
  }

  h4 {
    color: #323232;
    position: relative;
    top: 15px;
  }

  h4 i {
    font-size: 18px;
    font-weight: 700;
    margin-top: 30px;
  }

  i, span {
    color: #d44d44;
  }

  h5 {
    color: #959595;
  }

  h5 i {
    font-size: 16px;
    font-weight: 700;
  }

  .cart-e {
    margin: 0 auto;
    background: url("../assets/images/car.jpg") no-repeat;
    width: 275px;
    height: 200px;
    background-size: 100% 100%;
    color: #8d8d8d;
  }

  .Cleft {
    margin-left: 1%;
  }

  .Cbtn {
    overflow: hidden;
    float: right !important;
    width: 14%;
    text-align: center;
    color: #666;
    vertical-align: middle;

  }

  .Cdel {
    overflow: hidden;
    width: 14%;
    text-align: center;
    color: #666;
    vertical-align: middle;
    margin-left: 1%;

  }

  .shipping-box {
    float: right;
    margin-right: 50px;
    display: inline-flex;
    line-height: normal;
  }

  .shipping-box span {
    vertical-align: middle;
  }

  .name .name-table p {
    width: 300px;
    word-wrap: break-word;
  }

</style>
