<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-1"></div>
      <div class="col-lg-10">
        <div class="col-md-4 h1 ">
          <img-zoom
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539577454588&di=cbdfd4cc49ba5764abbe90b6e35f705f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0117e2571b8b246ac72538120dd8a4.jpg%401280w_1l_2o_100sh.jpg"
            width="300" height="350"
            bigsrc="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539577454588&di=cbdfd4cc49ba5764abbe90b6e35f705f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0117e2571b8b246ac72538120dd8a4.jpg%401280w_1l_2o_100sh.jpg"
            :configs="configs">
          </img-zoom>
        </div>
        <div class="col-md-5 bo1 to1">
          <div class="col-md-4">
            <ul>
              <li>物品换置详情:</li>
              <li>成色:</li>
              <li>商品类型:</li>
              <li>品牌:</li>
              <li>所在地:</li>
              <li>原价:</li>
              <li>现在市场价:</li>
              <li>优先交换:</li>
              <li>库存:</li>
            </ul>
          </div>
          <div class="col-md-8 a1">
            <ul>
              <li>8成新华为 P10 Plus全面屏4G手机</li>
              <li>非全新</li>
              <li>手机
              <li>
              <li>华为:HuaWei</li>
              <li>河北衡水 武邑县</li>
              <li class="e1">￥2999</li>
              <li>￥1299</li>
              <li>电脑外设</li>
              <li>1件</li>
            </ul>
          </div>
          <div class="col-md-12 a">
            <button value="马上换购" class="btn1">马上换购</button>
          </div>
        </div>
        <div class="col-md-3 c">
          <div class="col-md-12"><p class="b">------类似商品------</p></div>
          <div class="col-md-12"><img src="../assets/background_1.jpeg" alt="" class="img2"></div>
          <div class="col-md-12"><img src="../assets/background_1.jpeg" alt="" class="img2"></div>
          <div class="col-md-12"><img src="../assets/background_1.jpeg" alt="" class="img2"></div>
        </div>
        <div class="col-md-12">
          <img src="../assets/images/GG1.png" class="img1">
        </div>
        <div class="col-md-12">
          <div class="col-md-4 d">

            <div class="e"></div>
            <div class="col-md-12">
              <div class="col-md-4 f1">店主:</div>
              <div class="col-md-4 f2"><span>孙宁koy</span></div>
            </div>
            <div class="col-md-10 f2"><p>她加入ORSP25天，常居河北衡水</p></div>

            <div class="col-md-10 f3"><span>查看卖家芝麻信用</span></div>

            <div class="col-md-12 f4">
              <div class="col-md-5"><span class="c1">|</span><a href="#">我的发布</a></div>
              <div class="col-md-7"><a href="#" class="c2">点击查看详细信息></a></div>
            </div>
            <div class="col-md-12 f5" style="margin-bottom: 50px">
              <div class="col-md-6 f7">
                <ul>
                  <li class="col-md-12 f6">成交数量</li>
                  <li class="col-md-12 f6">8</li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul>
                  <li class="col-md-12 f6">用户等级</li>
                  <li class="col-md-12 f6">LEVEL3</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="col-md-12">
              <ul>
                <li class="col-md-12 g"><p>卖家的话:</p></li>
                <li class="col-md-12 h"><p>颜色:黑色 | 容量:256G | 购买渠道:其他版本
                  美版有锁苹果7 plus ，ID已注销
                  全原装 无任何问题
                  卡贴解锁移动联通4G
                  无需卡贴 插卡即用
                  一口价不仪价。
                  深圳可面交</p></li>
              </ul>
            </div>
            <div class="col-md-12"><img src="../assets/background_1.jpeg" class="img3"></div>

          </div>
        </div>
      </div>
      <div class="col-lg-1"></div>
    </div>
  </div>

</template>

<script>
  import imgZoom from './imgZoom'

  export default {
    name: 'DetailPage',
    components: {imgZoom},
    data() {
      return {
        configs: {
          width: 650,
          height: 500,
          maskWidth: 150,
          maskHeight: 150,
          maskColor: 'red',
          maskOpacity: 0.2
        }
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body, ul, li {
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style: none;
    text-align: left;
  }

  li {
    margin-bottom: 25px;
    margin-left: 17px;
    font-size: 15px;
  }

  .img1 {
    margin-top: 50px;
    margin-bottom: 80px;
    width: 100%;
    height: 100px;
  }

  .bo1 {
    margin-bottom: 20px;
    font-size: 18px;
    height: 50px;

  }

  .e1 {
    text-decoration: line-through;
  }

  .to1 {
    margin-top: 30px;
  }

  .img2 {
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
  }
  .a {
    margin-top: 60px;
  }

  .btn1 {
    width: 350px;
    height: 50px;
    font-size: 20px;
    background: #fb2a54;
    border: none;
    color: white;
    margin-left: -50px;
  }

  .b {
    text-align: center;
    font-size: 18px;
    margin-bottom: 30px;
  }

  .c {
    margin-top: 30px;
  }

  .d {
    background-color: #e8e8e8;
  }

  .e {
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background: #ff6600;
    margin: auto;
    margin-top: 40px;
  }

  .f1 {
    font-size: 16px;
    margin-left: 40px;
    margin-top: 30px;
  }

  .f2 {
    font-size: 16px;
    margin-left: 30px;
    margin-top: 30px;
  }

  .f3 {
    width: 250px;
    color: #22ab83;
    font-size: 15px;
    border: 1px solid #2bd9a4;
    height: 38px;
    margin-top: 20px;
    margin-left: 40px;
    background: url("../assets/images/zhima.png") no-repeat 30px 10px;

    background-color: #ecfffa;
    text-align: center;
    line-height: 38px;
  }

  .f4 {
    font-size: 16px;
    margin-left: 10px;
    margin-top: 30px;
  }

  .f5 {
    font-size: 16px;
    margin-top: 30px;
  }

  .f6 {
    font-size: 22px;
    color: gray;
  }

  .f7 {
    border-right: solid 2px white;
  }

  .c1 {
    color: #ff6600;
    margin-right: 10px;
  }

  a {
    color: black;
  }

  a:hover {
    color: #ff6600;
    text-decoration: none;
  }

  .g {
    font-size: 20px;
    color: black;
    height: 55px;
    line-height: 55px;
    background-color: #e8e8e8;
  }

  .h {
    background-color: #e8e8e8;
    font-size: 16px;
  }

  .img3 {
    width: 600px;
    margin-left: 50px;
    height: 400px;
  }
</style>
