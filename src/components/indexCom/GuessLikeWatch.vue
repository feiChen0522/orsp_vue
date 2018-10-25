<template>

  <div class="like">
    <div class="like-title">
      <img src="../../../static/images/watch.png" alt="">
      <b>钟表卖场</b>
      <a></a>
    </div>
    <div class="like-container">
      <div>
        <div>
          <a>
            <img src="../../../static/images/watches1.png" alt="">
          </a>
        </div>
        <h6>GPS户外手表</h6>

        <p>￥11189.00</p>
      </div>
      <div>
        <div>
          <a>
            <img src="../../../static/images/watches2.png" alt="">
          </a>
        </div>
        <h6>GPS 智能支付运动手表 音乐版</h6>

        <p>￥19999.00</p>
      </div>
      <div>
        <div>
          <a>
            <img src="../../../static/images/watches3.png" alt="">
          </a>
        </div>
        <h6>智能运动健康手环</h6>

        <p>￥7729.00</p>
      </div>
      <div>
        <div>
          <a>
            <img src="../../../static/images/watches4.png" alt="">
          </a>
        </div>
        <h6>指针式智能时尚手表</h6>

        <p>￥9029.00</p>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: ""
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
