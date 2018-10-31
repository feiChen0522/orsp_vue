<template>
  <div class="hello">

    <div class="container ">
      <div class="row goods">
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 " v-for="(i,index) of goods">
          <div>
            <a @click="sendGoods" style="cursor: pointer;">
            <img :src="i.img_href" alt="" class="imgs">
          </a>
          </div>
          <p href=""><a>￥</a><a  v-text="i.price"></a></p>
          <p class="title">
            <a :data-title="i.title" :data-price="i.price" :data-sales_num="i.sales_num" :data-shop="i.shop" :data-address="i.address"  :data-user="i.user" class="dataPlayLoad" v-text="i.title.substring(0,12)" style="color: black!important;cursor: pointer" @click="sendGoods" :data-change="i.change" :data-belong_name="i.belong_name" :data-belong_to="i.belong_to" :data-Stock="i.Stock" :data-_id="i._id"></a>
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Goods',
    props: {
      goods:{
        default:function(){
          if (sessionStorage.getItem('searchGoods')!=null){
          }
            return JSON.parse(sessionStorage.getItem('searchGoods'))
          }
      }
    },
    data() {
      return {
        show: true,
        img_list: [
          'goods1.jpg', 'goods2.jpg', 'goods3.jpg'
        ],
        good_list:{
          price:"",
          title:'',
          address:'',
          img:''
        },

      }
    },
    mounted:function(){
        if (sessionStorage.getItem('searchGoods')!=null){
          this.currentGoods= JSON.parse(sessionStorage.getItem('searchGoods'))
        }
    },
    methods: {
      initGoods:function(){
        if (sessionStorage.getItem('searchGoods')!=null){
          return JSON.parse(sessionStorage.getItem('searchGoods'))
        }
      },


      sendGoods: function (e) {
        if (e.target.nodeName=="A"){

          let nodes=e.target.parentNode.parentNode.querySelectorAll('a')
          let imgs=e.target.parentNode.parentNode.querySelector('img')
          // this.good_list['price']=nodes[1].innerText;
          // this.good_list['payNum']=nodes[2].innerText;
          // this.good_list['title']=nodes[3].innerText;
          // this.good_list['store']=nodes[4].innerText;
          // this.good_list['address']=nodes[5].innerText;
          this.good_list['img']=imgs.getAttribute('src')
          this.good_list["change"]=e.target.getAttribute('data-change');
          this.good_list["user"]=e.target.getAttribute('data-user');
          this.good_list["belong_name"]=e.target.getAttribute('data-belong_name');
          this.good_list["belong_to"]=e.target.getAttribute('data-belong_to');
          this.good_list["Stock"]=e.target.getAttribute('data-Stock');
          this.good_list["_id"]=e.target.getAttribute('data-_id');
          this.good_list["payNum"]=e.target.getAttribute('data-sales_num');
          this.good_list["price"]=e.target.getAttribute('data-price');
          this.good_list["title"]=e.target.getAttribute('data-title');
          this.good_list["store"]=e.target.getAttribute('data-shop');
          this.good_list["address"]=e.target.getAttribute('data-address');
          sessionStorage.setItem('price',this.good_list['price'])
          sessionStorage.setItem('title',this.good_list['title'])
          sessionStorage.setItem('payNum',this.good_list['payNum'])
          sessionStorage.setItem('address',this.good_list['address'])
          sessionStorage.setItem('img',this.good_list['img'])
          sessionStorage.setItem('change',this.good_list['change'])
          sessionStorage.setItem('belong_name',this.good_list['belong_name'])
          sessionStorage.setItem('belong_to',this.good_list['belong_to'])
          sessionStorage.setItem('Stock',this.good_list['Stock'])
          sessionStorage.setItem('store',this.good_list['store'])
          sessionStorage.setItem('_id',this.good_list['_id'])
          sessionStorage.setItem('user',this.good_list['user'])
          // sessionStorage.setItem('address',this.good_list['address'])
          this.$router.push({
            name:"DetailPage"
          })

        }
      },

    }


    // mounted:function () {
    //   let vm=this;
    //   axios.post(this.global.serverPath+'/resource/getgoods/',
    //     {
    //       // headers: {
    //       //   'Content-Type': 'application/json',
    //       // }
    //     })
    //     .then(function (res) {
    //       console.log(res.data);
    //       vm.goods=res.data;
    //       //控制台打印请求成功时返回的数据
    //       //bind(this)可以不用
    //     }.bind(this))
    //     .catch(function (err) {
    //       if (err.response) {
    //         console.log(err.response)
    //         //控制台打印错误返回的内容
    //       }
    //       //bind(this)可以不用
    //     }.bind(this))
    // }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../static/css/goods.css";
  @import "../../static/css/clear.css";

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }


</style>
