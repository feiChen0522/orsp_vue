import index from "../router";
<template>
  <div class="container-fluid">
    <div class="col-md-1"></div>
    <div class="col-md-10">
      <div class="col-md-12">
        <div class="col-md-2 b">
          <a><img src="../assets/logo.png" alt="ORSP" class="c"></a></div>
        <div class="col-md-7 hidden-xs hidden-sm img01 d">
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
              <td>
                <div class="col-md-12">
                  <span class="col-md-10 f2"><strong>收货人信息:</strong></span>
                  <a href="#" class="col-md-2 f3" data-toggle="modal" data-target="#myModal_Address">新增收货地址</a>
                  <div class="modal fade" id="myModal_Address" tabindex="-1" role="dialog"
                       aria-labelledby="myModalLabel">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">

                        <div class="modal-body">
                          <addaddress-div></addaddress-div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12" @click="onclick">
                  <p :class="{'g1':flag1}" @click="selectAddress(0,$event)" id="default">
                    <b>联系人:</b>
                    <a v-text='address[0]["concact_name"]'></a>
                    <b>手机号:</b>
                    <a v-text='address[0]["concact_telephone"]'></a>
                    <a v-text='address[0]["provice_id"]'></a>
                    <a v-text='address[0]["city_id"]'></a>
                  </p>
                </div>
                <div v-if="flag">
                  <div class="col-md-12" id="have">
                    <p v-for="i,index in address" v-if="index!=0" @click="selectAddress(index,$event)" >
                      <b>联系人:</b>
                      <a v-text='address[index]["concact_name"]'></a>
                      <b>手机号:</b>
                      <a v-text='address[index]["concact_telephone"]'></a>
                      <a v-text='address[index]["provice_id"]'></a>
                      <a v-text='address[index]["city_id"]'></a>
                    </p>

                  </div>
                </div>
                <div class="col-md-12" @click="onchange">
                  <b class="p1">更多地址<span class="glyphicon glyphicon-menu-down
" aria-hidden="true" v-if="!flag"></span><span class="glyphicon glyphicon-menu-up
" aria-hidden="true" v-if="flag"> </span></b>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="col-md-12">
                  <span class="col-md-10 f2"><strong>邮寄方式:</strong></span>
                </div>
                <div class="col-md-12">
                  <span>
                    <button class="sp1" @click="selectExpress('顺丰快递')">顺丰快递</button>
                    <button class="sp1" @click="selectExpress('用户自提')">用户自提</button>
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="col-md-12">
                  <span class="col-md-10 f2"><strong>发票类型:</strong></span>
                </div>
                <div class="col-md-12">
                  <p>该类型商品不支持发票</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="col-md-12">
                  <span class="col-md-10 f2"><strong>支付方式:</strong></span>
                </div>
                <div class=" col-md-12 radio e">
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>担保交易
                  </label>
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option1">非担保交易
                  </label>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-12">
          <!--<a  data-toggle="modal" data-target=".bs-example-modal-sm" class="delgoods">提交商品订单</a>-->
          <a class="delgoods" @click="submitOrder" style="cursor: pointer">提交商品订单</a>


          <!--<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" >-->
          <!--<div class="modal-dialog modal-sm" role="document">-->
          <!--<div class="modal-content">-->
          <!--<div class="modal-header">-->
          <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>-->
          <!--<h4 class="modal-title" id="myModalLabel" style="font-size: 14px">请使用手机扫描二维码支付担保金</h4>-->
          <!--</div>-->
          <!--<div style="width: 150px;height: 150px;margin: 0 auto" >-->
          <!--<img  :src="'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://123.207.11.101/?_id='+_id" alt="">-->

          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
        </div>
      </div>
    </div>
    <div class="col-md-1"></div>
  </div>


</template>

<script>
  export default {
    name: "Car2",
    data() {
      return {
        flag: false,
        flag1: false,
        currentIndex:1,
        activClass:'select',
        address: [{
          "concact_name": "",
          "concact_telephone": "",
          "provice_id": "",
          "city_id": ""
        }],
        selectAddressByUser: 0,
        selectExpressByUser: "顺丰快递",
        _id: "",
        nodes:[]
      }
    },
    created: function () {
      //  去请求当前用户的地址
      this._id = sessionStorage.getItem("_id")
      let vm = this
      let id = sessionStorage.getItem('currentUserId')
      axios({
        method: 'post',
        url: this.global.serverPath+'/user/getaddresbyid/',
        data: {
          "id": id
        }
      })
        .then(function (rsp) {
          vm.address = rsp.data;
        })
        .catch(function (err) {
          console.log('请求失败', err);
        })
    },
    mounted:function(){


    },
    methods: {
      onchange: function () {
        this.flag = !this.flag
      },
      onclick: function () {
        this.flag1 = !this.flag1
      },
      addAddress: function () {

      },
      selectAddress: function (i,event) {
        console.log("选中了地址", i)
        this.selectAddressByUser = this.address[i]
        // console.log(event.target.nodeName);
        // if (event.target.nodeName=="P"){
        //   for (let li of event.target.parentNode.childNodes){
        //     console.log("li",li)
        //     if (li.nodeName=="P"){
        //       li.style.backgroundColor="gainsboro"
        //
        //     }
        //   }
        //   $('#default').css("backgroundColor","gainsboro")
        //   event.target.style.backgroundColor="red"
        //
        // }
        let defaultAddress=document.querySelector('#default')
        let haveAddress=document.querySelectorAll('#have>p')
        defaultAddress.style.backgroundColor="gainsboro"
        for (let p of haveAddress){
          console.log(p)
          p.style.backgroundColor="gainsboro"
        }
        if (event.target.nodeName=="P"){
          event.target.style.backgroundColor="#ff000030"
        }


      },
      selectExpress: function (i) {
        this.selectExpressByUser = i
      },
      submitOrder: function () {
        let vm = this
        this._id = sessionStorage.getItem("_id")
        axios({
          method: 'post',
          url: this.global.serverPath+'/resource/paymentguaranty/',
          data: {
            "id": vm._id,
            "selectAddressByUser": vm.selectAddressByUser,
            "selectExpressByUser": vm.selectExpressByUser
          }
        })
          .then(function (rsp) {
            if (rsp.data.code == "215") {
              vm.$router.push({
                name: "Car3"
              })
            }
          })
          .catch(function (err) {
            console.log('请求失败', err);
          })
      }
    }
  }
</script>

<style scoped>

  .select{
    background-color: #3b49ff;
  }

  ul, li {
    list-style: none;
  }

  a {
    color: black;
  }

  a:hover {
    text-decoration: none;
    color: black;
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

  .img01 {
    width: 656px;
    height: 32px;
    background: url("../assets/images/flow_bg.png") 0px -32px;
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
    right: 20px;
    top: 40px;
  }

  .e {
    margin-left: 15px;
  }

  .f1 {
    background: url(../assets/images/cart_001.gif);
    background-repeat: no-repeat;
  }

  .delgoods {
    width: 135px;
    height: 36px;
    float: right;
    color: #fff;
    font-size: 17px;
    line-height: 36px;
    text-align: center;
    background: url("../assets/images/btn_check_1.jpg");
    background-repeat: no-repeat;
  }

  .delgoods:hover {
    text-decoration: none;
    color: white;
  }

  a:hover {
    text-decoration: none;
  }

  .cur2 {
    color: white;
    font-weight: bolder;
  }

  .cur1 {
    margin-left: -40px;
  }

  table {
    border: 1px solid #E7E3E7;
    border-top: 2px solid #CE0000;
    background: #FFFDEE;
    color: #666;
    margin-top: 40px;
  }

  thead {
    height: 50px;
    line-height: 36px;
    background: url("../assets/images/sort_bg.png");
  }

  .f2 {
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    color: black;
  }

  tbody td {
    border-bottom: 1px solid #E7E3E7;
  }

  p {
    margin-left: 15px;
    font-size: 15px;
    cursor: pointer;
    height: 40px;
    line-height: 40px;
  }

  b {
    cursor: pointer;
  }

  .g1 {
    background-color: gainsboro;
  }

  p:hover {
    background-color: gainsboro;
  }

  .sp1 {
    font-size: 15px;
    border: solid 0.5px #0080ff;
    width: 120px;
    height: 40px;
    margin-left: 15px;
    margin-top: 15px;
  }

  button {
    border: 0;
    background-color: transparent;
    outline: none;
  }

  button:focus {
    border: solid 1px red;
  }

  tbody img {
    height: 80px;
    border: 1px solid #eee;
    vertical-align: middle;
    float: left;
    display: inline;
    margin-right: 10px;
  }

  .c1 {
    text-align: left;
    font-size: 17px;
    margin-left: 18px;
    color: black;
  }

  .f3 {
    text-align: right;
    height: 40px;
    line-height: 40px;
  }

  .p1 {
    font-size: 10px;
    margin-top: 5px;
    margin-left: 15px;
    width: 60px;
  }


</style>
