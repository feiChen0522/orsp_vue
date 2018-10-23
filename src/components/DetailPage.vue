<template>
  <div class="container" style="width: 1230px">
    <div class="row">
      <div class="col-lg-12 item-detail-show" style="margin: auto;margin-top: 40px">
        <div class="col-md-3 item-detail-left">
          <div class="item-detail-big-img">
            <photo-loupe class :src="goodsImg[imgIndex]" :magnification="2"></photo-loupe>
          </div>
          <div class="item-detail-img-row">
            <div class="item-detail-img-small" v-for="(item, index) in goodsImg" :key="index"
                 @mouseover="showBigImg(index)">
              <img :src="item" alt="">
            </div>
          </div>
        </div>
        <div class="col-md-5 item-detail-model">
          <div class="col-md-12">
            <div class="col-md-12"><strong><span v-text="goods.title" class="a1"></span></strong></div>
          </div>
          <div class="col-md-12 item-detail-price-row ">
            <div class="col-md-8 btw"></div>
            <div class="col-md-8 btw">
              <span class="col-md-5 c2">商品类型:</span>
              <span class="item-price-title col-md-6">{{goods.belong_name}}</span>
            </div>
            <div class="col-md-8 btw">
              <span class="col-md-5 c2">品牌:</span>
              <span class="item-price-title col-md-6">{{goods.belong_to}}</span>
            </div>
            <div class="col-md-8 btw">
              <span class="col-md-5 c2">成色:</span>
              <span class="item-price-title col-md-6">9成新</span>
            </div>
            <div class="col-md-8 btw"></div>
          </div>
          <div class="col-md-12">
            <div class="col-md-8 btw" style="margin-top: 20px">
              <span class="col-md-5 c2" style="height: 60px;line-height: 40px">优先交换:</span>
              <button class="item-select-box">{{goods.change}}</button>
            </div>
          </div>
          <div class="col-md-12">
            <div class="col-md-8 btw">
              <span class="col-md-5 c2">所在地:</span>
              <span class="col-md-6" v-text="goods.address"></span>
            </div>
          </div>
          <div class="col-md-12">
            <div class="col-md-8 btw">
              <span class="col-md-5 c2">原价:</span>
              <span class="col-md-6 e1">{{goods.price-10}}</span>
            </div>
          </div>
          <div class="col-md-12">
            <div class="col-md-8 btw">
              <span class="col-md-5 c2">转手价:</span>
              <span class="col-md-6" v-text="goods.price"></span>
            </div>
          </div>
          <div class="col-md-12">
            <div class="col-md-8 btw">
              <span class="col-md-5 c2">库存:</span>
              <span class="col-md-6" v-text="goods.Stock"></span>
            </div>
          </div>
          <div class="col-md-12 a">
              <button value="马上换购" class="btn1" @click="isLogin">马上换购</button>
          </div>
        </div>
        <div class="col-md-3 item-detail-righe">
          <div class="col-md-12"><p class="b">------类似商品------</p></div>
          <div class="col-md-12"><img src="../assets/background_1.jpeg" alt="" class="img2"></div>
          <div class="col-md-12"><img src="../assets/background_1.jpeg" alt="" class="img2"></div>
          <div class="col-md-12"><img src="../assets/background_1.jpeg" alt="" class="img2"></div>
        </div>
      </div>

      <div class="col-md-12">
        <img src="../assets/images/GG1.png" class="img1">
      </div>
      <div class="col-md-3 d">
        <div class="e"></div>
        <div class="col-md-12">
          <div class="col-md-12 f1">
            <span style="color: red;">店主:</span>
            <span style="font-size: 18px;font-family: sans-serif">{{goods.store}}</span>
          </div>
        </div>
        <div class="col-md-12 f2"><p>她加入ORSP25天，常居{{goods.address}}</p></div>

        <div class="col-md-12 f3"><span>查看卖家芝麻信用</span></div>

        <div class="col-md-12 f4">
          <div class="col-md-5"><span class="c1">|</span><a href="#" style="background-color: #3b49ff">我的发布</a></div>
          <div class="col-md-7"><a href="#" class="c2">点击查看详细信息></a></div>
        </div>
        <div class="col-md-12 f5" style="margin-bottom: 50px">
          <div class="col-md-6 f7">
            <ul>
              <li class="col-md-12 f6">成交数量</li>
              <li class="col-md-12 f6">{{goods.payNum}}</li>
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
      <div class="col-md-8 k">
        <div class="g1 ">
          <li role="presentation" class="active g" style="background-color:#fb2a54;"><p>卖家的话:</p></li>
        </div>
        <div class="h">
          <li style="font-size: 16px">
            颜色:黑色 | 容量:256G | 购买渠道:其他版本
            美版有锁苹果7 plus ，ID已注销
            全原装 无任何问题
            卡贴解锁移动联通4G
            无需卡贴 插卡即用
            一口价不仪价。
            深圳可面交
          </li>
        </div>
        <div><img src="../assets/background_1.jpeg" class="img3"></div>
      </div>
    </div>
  </div>



</template>

<script>
  import Login from '../common/js/login'

  export default {
    name: 'DetailPage',
    data() {
      return {
        goods: {},
        imgsrc: '',
        goodsImg: [
          'http://img2.imgtn.bdimg.com/it/u=630421180,2082636382&fm=200&gp=0.jpg',
          'http://img1.imgtn.bdimg.com/it/u=2140439025,1380868768&fm=200&gp=0.jpg',
          'http://img1.imgtn.bdimg.com/it/u=2140439025,1380868768&fm=200&gp=0.jpg'
        ],
        imgIndex: 0
      }
    },
    mounted: function () {
      // this.goods=this.$route.params
      this.goods['price'] = sessionStorage.getItem('price')
      this.goods['title'] = sessionStorage.getItem('title')
      this.goods['payNum'] = sessionStorage.getItem('payNum')
      this.goods['address'] = sessionStorage.getItem('address')
      this.goods['img'] = sessionStorage.getItem('img')
      this.goods['change'] = sessionStorage.getItem('change')
      this.goods['belong_name'] = sessionStorage.getItem('belong_name')
      this.goods['belong_to'] = sessionStorage.getItem('belong_to')
      this.goods['Stock'] = sessionStorage.getItem('Stock')
      this.goods['store'] = sessionStorage.getItem('store')
      this.goods['user'] = sessionStorage.getItem('user')
      this.imgsrc = this.goods['img']
      this.goodsImg.push(this.imgsrc)

      /*
      *   sessionStorage.setItem('belong_name',this.good_list['belong_name'])
        sessionStorage.setItem('belong_to',this.good_list['belong_to'])
      *
      * */
    },
    methods: {
      select(index1, index2) {
        this.selectBoxIndex = index1 * 3 + index2;
        this.price = this.goodsInfo.setMeal[index1][index2].price;
      },
      showBigImg(index) {
        this.imgIndex = index;
      },
    //  判断是否登录
      isLogin(){
        let that=this
        if (localStorage.getItem('token')!=null){
          let token=localStorage.getItem('token')

          axios({
            method:'post',
            url:'http://127.0.0.1:8000/user/judgetoken/',
            headers:{'token':token},
          })
            .then(function (rsp) {
              sessionStorage.setItem('currentUserId',rsp.data.id)
              axios({
                method:'post',
                url:'http://127.0.0.1:8000/resource/seegoodsbyid/',
                headers:{'token':token},
                data:{
                  "id":sessionStorage.getItem('currentUserId')
                }
              })
                .then(function (rsp) {
                  sessionStorage.setItem('buyerSelectGood',JSON.stringify(rsp.data[0]))
                  that.$router.push({
                    name:"Car1",
                    params:rsp.data
                  })
                })
                .catch(function (err) {
                  console.log('请求失败',err);
                })
            })
            .catch(function (err) {
              console.log('请求失败',err);
            })

        } else {
          Login.$emit('HaveLogin',"你还没有登录")
        }
      },
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

  div {
    text-align: left;
  }

  li {
    margin-bottom: 25px;
    margin-left: 5px;
    font-size: 14px;
  }

  .img1 {
    margin-top: 50px;
    margin-bottom: 80px;
    width: 100%;
    height: 100px;
  }

  .e1 {
    text-decoration: line-through;
  }

  .img2 {
    height: 150px;
    margin-bottom: 10px;
  }

  .item-detail-righe {
    width: 240px;
  }

  .a {
    margin-top: 60px;
    text-align: center
  }

  .btn1 {
    width: 350px;
    height: 50px;
    font-size: 20px;
    background: #fb2a54;
    border: none;
    color: white;

  }

  .b {
    margin-left: 26px;
    font-size: 18px;
    margin-bottom: 30px;
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
    margin-top: 30px;
    text-align: center;
  }

  .f2 {
    font-size: 14px;
    margin-top: 20px;
    text-align: center;

  }

  .f3 {
    width: 200px;
    color: #22ab83;
    font-size: 15px;
    border: 1px solid #2bd9a4;
    height: 38px;
    margin-top: 20px;
    margin-left: 30px;
    background: url("../assets/images/zhima.png") no-repeat 7px 9px;
    background-color: #ecfffa;
    text-align: center;
    line-height: 38px;
  }

  .f4 {
    font-size: 16px;
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
    margin-right: 5px;
    font-size: 15px;
  }

  a {
    color: black;
  }

  a:hover {
    color: #ff6600;
    text-decoration: none;
  }

  .a1 {
    font-size: 20px;
  }

  .g {
    font-size: 18px;
    color: white;
    text-align: center;
    width: 100px;
    height: 40px;
    line-height: 40px;
  }

  .g1 {
    background-color: #f7f7f7;
  }

  .k {
    margin-left: 50px;
  }

  .h {
    background-color: #f7f7f7;
    font-size: 16px;
  }

  .img3 {
    width: 100%;
    height: 400px;
  }

  .item-detail-show {

    margin-left: 30px;
    margin-top: 30px;
    background-color: #fff;
  }

  .item-detail-left {
    width: 430px;
  }

  .item-detail-big-img {
    width: 400px;
    height: 400px;
    box-shadow: 0px 0px 8px #ccc;
    cursor: pointer;
  }

  .item-detail-big-img img {
    width: 100%;
  }

  .item-detail-img-row {
    margin-top: 15px;
    display: flex;

  }

  .item-detail-img-small {
    width: 100px;
    height: 100px;
    box-shadow: 0px 0px 8px #ccc;
    cursor: pointer;
  }

  .item-detail-img-small img {
    width: 100%;
  }

  span {
    font-size: 16px;
  }

  .item-detail-price-row {
    margin-top: 10px;
    background-color: #f3f3f3;
  }

  .btw {
    margin-bottom: 10px
  }

  .c2 {
    color: #999999;
    font-size: 13px;
  }

  .item-price-title {
    color: #5f5f5f;
  }

  .item-select-box {
    width: 100px;
    height: 40px;
    border: 0.5px solid #e3393c;
    cursor: pointer;
    font-size: 16px;
    color: #ff4f14;
  }

  .item-select-box:hover {
    border: 0.5px solid #3b49ff;

  }

  button {
    border: 0;
    background-color: transparent;
    outline: none;
  }
</style>
