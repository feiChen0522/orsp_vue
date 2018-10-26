<template>

  <div class="like">
    <div class="like-title">
      <img src="../../../static/images/cloth.png" alt="">
      <b>女士服装</b>
      <a></a>
    </div>
    <div class="like-container">
      <div @click.stop="showDetail('LOGO印花全棉T恤','11189.00','0001')">
        <div>
          <a>
            <img src="../../../static/images/clothes1.jpg" alt="">
          </a>
        </div>
        <h6>LOGO印花全棉T恤</h6>

        <p>￥11189.00</p>
      </div >
      <div @click.stop="showDetail('LOGO印花全棉T恤','11189.00','0001')">
        <div>
          <a>
            <img src="../../../static/images/clothes2.jpg" alt="">
          </a>
        </div>
        <h6>复古标志双色全棉T恤</h6>

        <p>￥2480.00</p>
      </div>
      <div @click.stop="showDetail('LOGO印花全棉T恤','11189.00','0001')">
        <div>
          <a>
            <img src="../../../static/images/clothes3.jpg" alt="">
          </a>
        </div>
        <h6>双排扣长款初剪羊毛外套</h6>

        <p>5534.00</p>
      </div>
      <div @click.stop="showDetail('LOGO印花全棉T恤','11189.00','0001')">
        <div>
          <a>
            <img src="../../../static/images/clothes4.jpg" alt="">
          </a>
        </div>
        <h6>格纹细节真丝连衣裙</h6>

        <p>15340.00</p>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "",
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
  .like{
    width: 80%;
    margin: 0 auto;
  }
  .like-title{
    width: 100%;
    height: 50px;
    text-align: left;
    padding-left: 20px;
    line-height: 50px;
    position: relative;
    top: 1px;
  }
  .like-title>b{
    color: #ff7271;
  }
.like-container{
  height: 300px;
  margin: 0 auto;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
}
.like-container>div{
  flex: 1;
  transition: top linear 0.5s;
}
  .like-container>div:hover{
    box-shadow: 0 2px 18px rgba(138, 138, 138, 0.62), 0 0 11px rgba(138, 138, 138, 0.62), 0 0 11px rgba(138, 138, 138, 0.62);
    position: relative;
    top: -2px;
  }
  .like-container>div>div{
    height: 206px;
  }
  .like-container>div>div img,a{
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .like-container>div>div img{
    object-fit: contain;
  }
  .like-container>div>h3{
    font-size: 12px;
    margin-top: 10px;
    color: #d0d0d0!important;
  }
  .like-container>div>h6{
    font-size: 14px;
    margin-top: 0;
  }
  .like-container>div>p{
    color: red;
    font-weight: bold;
  }
</style>
