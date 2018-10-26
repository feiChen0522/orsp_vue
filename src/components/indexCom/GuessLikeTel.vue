<template>

  <div class="like">
    <div class="like-title">
      <img src="../../../static/images/clock.jpeg" alt="">
      <b>手机专场</b>
      <a></a>
    </div>
    <div class="like-container">
      <div @click.stop="showDetail('LOGO印花全棉T恤','11189.00','0001')">
        <div>
          <a>
            <img src="../../../static/images/tel1.jpg" alt="">
          </a>
        </div>
        <h6>坚果 3 TPU 软胶透明保护套</h6>
        <h3>轻薄透明、完美贴合、TPU 环保材质</h3>

        <p>￥29.00</p>
      </div>
      <div @click.stop="showDetail('LOGO印花全棉T恤','11189.00','0001')">
        <div>
          <a>
            <img src="../../../static/images/tel2.jpg" alt="">
          </a>
        </div>
        <h6>坚果 3 前屏钢化玻璃保护膜</h6>
        <h3>超强透光率、耐刮花、防指纹</h3>

        <p>￥49.00</p>
      </div>
      <div @click.stop="showDetail('LOGO印花全棉T恤','11189.00','0001')">
        <div>
          <a>
            <img src="../../../static/images/tel3.jpg" alt="">
          </a>
        </div>
        <h6>坚果 3 绒布国旗保护套</h6>
        <h3>质感精良、完美贴合、周到防护</h3>

        <p>￥79.00</p>
      </div>
      <div @click.stop="showDetail('LOGO印花全棉T恤','11189.00','0001')">
        <div>
          <a>
            <img src="../../../static/images/tel4.jpg" alt="">
          </a>
        </div>
        <h6>Smartisan 半入耳式耳机</h6>
        <h3>经典配色、专业调音、高品质麦克风</h3>

        <p>￥29.00</p>
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
    height: 90%;
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
