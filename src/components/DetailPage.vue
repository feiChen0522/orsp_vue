<template>
  <div class="container" style="width: 1230px">
    <div class="row">
      <div class="col-lg-12 item-detail-show" style="margin: auto;margin-top: 40px">
        <div class="col-md-3 item-detail-left">
          <div class="item-detail-big-img">
            <photo-loupe class :src="goodImg[imgIndex]" :magnification="2"></photo-loupe>
          </div>
          <div class="item-detail-img-row">
            <div class="item-detail-img-small" v-for="(item, index) in goodImg" :key="index"
                 @mouseover="showBigImg(index)">
              <img :src="item" alt="" >
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
              <span class="col-md-6 e1">{{goods.price*2.00}}</span>
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
          <div class="col-md-12">
            <div class="col-md-8 btw">
              <span :class="[{'glyphicon glyphicon-heart-empty':!isCollect},{'glyphicon glyphicon-heart':isCollect}]" style="margin-left: 12px;cursor: pointer;color: #ff3e31;font-size: 18px;" title="点击收藏该商品" @click="collect"></span>
            </div>
          </div>
          <div class="col-md-12 a">
              <button value="马上换购" class="btn1" @click="isLogin">马上换购</button>
          </div>
        </div>
        <div class="col-md-3 item-detail-righe">
          <div class="col-md-12"><p class="b">------类似商品------</p></div>
          <div class="col-md-12" style="margin-left: 20px"><img :src="goodsImg[random1]" alt="" class="img2"></div>
          <div class="col-md-12"style="margin-left: 20px"><img :src="goodsImg[random2]" alt="" class="img2"></div>
          <div class="col-md-12"style="margin-left: 20px"><img :src="goodsImg[random3]" alt="" class="img2"></div>
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
            宝贝全新无划痕，
            买来本打算送人，
            后来出了点事，
            打消念头，
            一口价不仪价。
            本地可面交
          </li>
        </div>
        <div><img :src= "goodsImg[3]" class="img3"></div>
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
          'https://pic11.secooimg.com/product/240/240/48/51/031c1a50783e4532817c0f2f49d7b879.jpg',
          'http://pic11.secooimg.com/product/240/240/50/10/2d3c99844a404389b1c6179c70ef9ac3.jpg',
          'http://pic11.secooimg.com/product/240/240/49/48/10438a64ce924ecbb101584a40a27b65.jpg',
          'http://pic11.secooimg.com/product/240/240/97/10/af04ba41bb5f43cea0a0790eb79882bb.jpg',
          'http://pic11.secooimg.com/product/240/240/97/10/af04ba41bb5f43cea0a0790eb79882bb.jpg',
          'http://pic11.secooimg.com/product/240/240/51/98/3bc2d331adaf4a8f8db29f1aa778a8ca.jpg',
          'http://pic11.secooimg.com/product/240/240/10/52/d46292de050d412cb01322c665646a18.jpg',
          'http://pic11.secooimg.com/product/240/240/55/49/71e0843f076d459da630a9f578b2e92a.jpg',
          'http://pic11.secooimg.com/product/240/240/49/97/1aa7ca64b48f40828c3ccd37f85360a2.jpg',
          'http://pic11.secooimg.com/product/240/240/50/51/23cb33c3f0d3450b81f6fad4b2583839.jpg',
          'http://pic11.secooimg.com/product/240/240/53/97/5aee496a6c6d4712aaa32fe1055a9728.jpg',
          'http://pic11.secooimg.com/product/240/240/98/53/b560e4ea997241fcb759e1561c8f4c97.jpg',
          'http://pic11.secooimg.com/product/240/240/98/53/b5ad55aa80f94447a820ff2431d81604.jpg',
          'http://pic11.secooimg.com/product/240/240/98/56/b8334b0a429941f48c1faf5451afe759.jpg',
          'http://pic11.secooimg.com/product/240/240/10/51/d3dafbcfb5ab44c08170ab295a9ef806.jpg',
          'http://pic11.secooimg.com/product/240/240/49/50/1291e941f2b74796863fde7dba78b149.jpg',
          'http://pic11.secooimg.com/product/240/240/99/55/c78c42af3f0340168eb71f7d68235162.jpg',
          'http://pic11.secooimg.com/product/240/240/57/51/93983e63d0fc4a4d88b6c7f7823a75ce.jpg',
          ''
        ],
        imgIndex: 0,
        isCollect:false,
        goodImg:[],
        random1:'',
        random2:'',
        random3:'',
        random4:'',
      }
    },
    created:function(){
      let _id=sessionStorage.getItem('_id');
      let vm=this
      vm.random1=Math.floor(Math.random()*17);
      vm.random2=Math.floor(Math.random()*17);
      vm.random3=Math.floor(Math.random()*17);
      for (let i=0;i<3;i++){
        vm.goodImg.push(vm.goodsImg[vm.random1+i])
      }
      axios({
        url:this.global.serverPath+"/resource/seemycollect/",
        method:"post",
        data:{
          "user_id":sessionStorage.getItem('currentUserId')
        }
      })
        .then(function (res) {
          console.log(res.data)
          for (let i of res.data) {
            if (i.collect_resource_id==_id) {
              vm.isCollect=true
              break
            }
          }
        })
        .catch(function (error) {
          console.log("请求失败:",error)
        })
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
      this.goodImg.push(this.imgsrc)

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
        let that=this;
        if (localStorage.getItem('token')!=null){
          let token=localStorage.getItem('token');
          axios({
            method:'post',
            url:this.global.serverPath+'/user/judgetoken/',
            headers:{'token':token},
          })
            .then(function (rsp) {
              sessionStorage.setItem('currentUserId',rsp.data.id)
              axios({
                method:'post',
                url:that.global.serverPath+'/resource/seegoodsbyid/',
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
          Login.$emit('HaveLogin',"你还没有登录");
        }
      },
      collect:function () {
        this.isCollect=!this.isCollect
        let user_id=sessionStorage.getItem('currentUserId')
        let resource_id=sessionStorage.getItem('_id')
        let ins_data={
          "user_id":user_id,
          "resource_id":resource_id,
          "operation":0
        }
        if (this.isCollect) {
          ins_data.operation=1
        }

        axios({
          url:this.global.serverPath+"/resource/addcollect/",
          method:"post",
          data:ins_data
        })
          .then(function (res) {
            console.log(res)
          })
          .catch(function (error) {
            console.log("请求失败:",error)
          })
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
    background-image: url("../assets/images/headerlogo.png");
    background-repeat: no-repeat;
    background-size: cover;
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
    margin-left: 40px;
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
    width: 50%;
    height: 400px;
    margin-left: 200px;
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
    height: 100%;
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
