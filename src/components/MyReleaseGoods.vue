<template>
  <div>
    <div class="con gai" style="margin: 0 auto " v-if="!flag">
      <div class="status">
        <span>全部订单(<i>0</i>)</span>
        <span>待收款(<i>0</i>)</span>
        <span>待发货(<i>0</i>)</span>
        <span>发货中(<i>0</i>)</span>
        <span>已成交(<i>0</i>)</span>
        <span>退款中(<i>0</i>)</span>
        <div class="box-text">
          <input type="text" placeholder="请输入要搜索的词" maxlength="30" class="input-txt">
          <div class="btn-search glyphicon glyphicon-search"></div>
        </div>
      </div>
      <div class="change_message">
        <div class="change_message_item">
          <div class="goods_msg">宝贝展示</div>
          <div class="goods_msg">宝贝标题</div>
          <div class="seller">宝贝便签</div>
          <div class="specification">宝贝名称</div>
          <div class="price">宝贝原价</div>
          <div class="number">库存</div>
          <div class="current_status">商品描述</div>
          <div class="current_status">交易状态</div>
        </div>
        <div class="dongtai_goods" v-for="i in goods">
          <div class="info">
            <span v-text="'上传时间：'+i.upload_time"></span>
            <!--<span>订单号：<i>待交易状态就不显示</i></span>-->
            <!--<span>订单生成时间：<i>待交易不显示</i></span>-->
          </div>
          <div class="change_goods">
            <div class="good_img">
              <div class="good_img_div">
                <img :src="global.serverPath+'/media/pic/'+i.imgurl" alt="">

              </div>
            </div>
            <div class="good_seller" v-text="i.title"></div>
            <div class="good_specification" v-text="i.product_type" style="width:10%"></div>
            <div class="good_specification" v-text="i.name" style="width:15%"></div>
            <div class="good_price" v-text="i.price"></div>
            <div class="good_number" v-text="i.pnum"></div>
            <div class="good_price">
              <div v-text="i.description" style="height: 100%;overflow: hidden;text-overflow: ellipsis;"></div>
            </div>
            <div class="good_current_status" v-text="parseInt(i.status)?'已交易':'待交易'"></div>
            <!--<div class="good_current_status">已交易</div>-->
          </div>
        </div>

      </div>

    </div>
    <div class="sty1" style="padding:50px" v-if="flag">
      <p style="text-align: center;padding: 20px;color: #8d8d8d">你还未发布任何商品，点击下列按钮立即</p>
      <div style="text-align: center">
        <router-link to="/release">
          <button text="马上发布" style="width: 150px;height: 40px;line-height: 38px;color: #8d8d8d">立即发布</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyReleaseGoods',
    data() {
      return {
        flag:'',
        goods: [{
          description: "",
          imgurl: "",
          name: "",
          pnum: "",
          product_type: "",
          title: "",
          upload_time: "",
          price: "",
        }]
      }
    },
    created: function () {
      let vm = this
      let id = sessionStorage.getItem('currentUserId')
      //  发送ajax获取我发布的商品
      axios({
        url: this.global.serverPath+"/resource/seegoodsbyid/",
        method: "post",
        data: {
          "id": id
        }
      })
        .then(function (res) {
          console.log((res.data).length!=0)
          if ((res.data).length){
            this.goods = res.data
            vm.flag=false
          }
          else {
            vm.flag=true
          }
        }.bind(this))
        .catch(function (err) {
          if (err.response) {
            //控制台打印错误返回的内容
          }
          //bind(this)可以不用
        }.bind(this))
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .con {
    width: 1038px;
    border: 1px solid #c5c5c5;
  }
  .gai {
    position: absolute;
    top: 70px;
    left: 260px;
  }
  .status {
    width: 100%;
    height: 50px;
    padding: 0 10px;
    background-color: white;
  }
  .status > span {
    display: inline-block;
    width: 120px;
    height: 50px;
    line-height: 50px;
  }
  .status span:hover {
    color: #d02210;
    cursor: pointer;
  }
  .change_message {
    font-size: 12px;
    /*min-height: 900px;*/
    color: #999;
  }
  .change_message_item {
    border-top: 1px solid #CCCCCC;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #F5F5F5;
  }
  .change_message_item div, .change_goods div {
    float: left;
  }
  .change_message_item .goods_msg, .change_goods .good_img {
    width: 100px;
    height: 80%;
    /*background-color: #FF7E00;*/
  }
  .change_message_item .seller, .change_goods .good_seller {
    /*background-color: #eba85a;*/
    width: 12.5%;
  }
  .change_message_item .specification, .change_goods .good_specification {
    /*background-color: blue;*/
    width: 20%;
  }
  .change_message_item .price, .change_goods .good_price {
    /*background-color: yellow;*/
    width: 12.5%;
  }
  .change_message_item .number, .change_goods .good_number {
    /*background-color: blanchedalmond;*/
    width: 12.5%;
  }
  .change_message_item .current_status, .change_goods .good_current_status {
    /*background-color: chartreuse;*/
    width: 10.5%;
  }
  .dongtai_goods {
    color: #666;
    min-height: 125px;
    background-color: #FFF4E8;
  }
  .dongtai_goods .info {
    width: 100%;
    line-height: 25px;
    height: 25px;
    background-color: #e3e3e3;
    text-align: left;
  }
  .dongtai_goods .info span {
    margin: 0 10px;
    float: left;
  }
  .change_goods {
    text-align: center;
    height: 100px;
    /*line-height: 100px;*/
    border-top: 1px solid #CCCCCC;
  }
  .change_goods .good_img .good_img_div {
    width: 100px;
    height: 80px;
    background-size: cover;
    position: relative;
    margin-top: 10px;
  }
  .change_goods .good_img .good_img_div img {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    object-fit: contain;
  }
  .change_goods .good_current_status {
    color: #D30000;
    height: 80px;
    line-height: 80px;
  }
  .change_amount .amount span {
    color: #D30000;
    font-weight: bold;
  }
  .box-text {
    float: right;
    width: 275px;
    height: 39px;
    border: 1px solid rgba(53, 37, 108, 0.19);
    margin: 6px auto;
  }
  .input-txt {
    text-indent: 5px;
    width: 228px;
    padding: 8px 0 8px 10px;
    border: none;
    font-size: 12px;
    outline: none;
  }
  .box-text .btn-search {
    float: right;
    width: 40px;
    line-height: 40px;
    text-align: center;
    height: 38px;
    position: relative;
    top: -1px;
    left: 2px;
    background-color: rgb(135, 233, 40);
    color: #ffffff;
  }
  .box-text .btn-search:focus, .box-text .btn-search:hover {
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
