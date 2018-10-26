<template>
    <div class="like-box-container">
      <div class="like-title">
        <img src="../../../static/images/recommend.png" alt="">
        <b>每日推荐</b>
      </div>
      <div class="like">
        <div @click.stop="showDetail('LOGO印花全棉T恤','11189.00','0001')">
          <div>
            <a>
              <img src="../../../static/images/recommend1.jpg" alt="">
            </a>
          </div>
          <h6>云南蜜桔 柑橘 5斤 单果80g-150g(青色)</h6>

          <p>￥18.90</p>
        </div>
        <div @click.stop="showDetail('LOGO印花全棉T恤','11189.00','0001')">
          <div>
            <a>
              <img src="../../../static/images/recommend2.jpg" alt="">
            </a>
          </div>
          <h6>花花公子秋衣秋裤男士纯棉青年薄款</h6>

          <p>￥19999.00</p>
        </div>
        <div @click.stop="showDetail('LOGO印花全棉T恤','11189.00','0001')">
          <div>
            <a>
              <img src="../../../static/images/recommend3.jpg" alt="">
            </a>
          </div>
          <h6>小米(MI) PLM09ZM 移动电源2新版 10000mAh</h6>
          <p>￥75.90</p>
        </div>
        <div @click.stop="showDetail('LOGO印花全棉T恤','11189.00','0001')">
          <div>
            <a>
              <img src="../../../static/images/recommend4.jpg" alt="">
            </a>
          </div>
          <h6>大森林竹炭狗 长嘴狗 车内玩偶 除味狗(竹炭狗1只装)</h6>

          <p>￥9.00</p>
        </div>
      </div>

      <div class="lun-bo">
        <img src="../../../static/images/lunbo1.jpg" alt="" v-if="showLunbo" >
        <img src="../../../static/images/lunbo2.jpg" alt="" v-else >

        <ul class="dot-point">
          <li :class="{'back-red':showLunbo}"></li>
          <li :class="{'back-red':!showLunbo}"></li>
        </ul>
      </div>

    </div>
</template>

<script>
    export default {
        name: "myCartBox",
      data(){
          return {
            imgs:['../../../static/images/lunbo1.jpg','../../../static/images/lunbo2.jpg'],
            showLunbo:true
          }
      },
      mounted:function () {
          let vm=this
        setInterval(function () {
          vm.showLunbo=!vm.showLunbo
        },1500)
      },
      methods:{
        showDetail:function (title,price,id) {
          sessionStorage.setItem('price',price)
          sessionStorage.setItem('title',title)
          sessionStorage.setItem('payNum',10)
          sessionStorage.setItem('address',"江苏苏州")
          sessionStorage.setItem('img','../../../static/images/clothes1.jpg')
          sessionStorage.setItem('change',"手表")
          sessionStorage.setItem('belong_name',"衣服")
          sessionStorage.setItem('belong_to',"时尚")
          sessionStorage.setItem('Stock',10)
          sessionStorage.setItem('store',"ORSP旗舰店")
          sessionStorage.setItem('_id',id)
          sessionStorage.setItem('user',"官方")
          this.$router.push({
            name:"DetailPage"
          })
        }
      }
    }
</script>

<style scoped>
.like-box-container{
  width: 80%;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 20px;
}
.like-title{
  width: 100%;
  text-align: left;
  padding-left: 20px;
  line-height: 37px;
  position: relative;
  top: 1px;
  height: 14%;
}
.like-title>b{
  color: #ff7271;
}
  .like{
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: row;
    float: left;
  }
.like>div:hover{
  box-shadow: 0 2px 18px rgba(138, 138, 138, 0.62), 0 0 11px rgba(138, 138, 138, 0.62), 0 0 11px rgba(138, 138, 138, 0.62);
  position: relative;
  top: -2px;
}
  .like>div{
    flex: 1;
    height: 86%;
    padding-top: 10px;
    cursor: pointer;
  }
  .lun-bo{
    width: 10%;
    height: 60%;
    float: left;
    margin-left: 15px;
    position: relative;
  }
.dot-point{
  position: absolute;
  bottom: 40px;
}
  .dot-point>li{
    list-style: none;
    width: 20px;
    height: 4px;
    float: left;
    border: 1px solid red;
    margin-right: 2px;

  }
  .back-red{
    background-color: red!important;
  }
</style>
