<template>
  <div class="hello">

    <div class="container ">
      <div class="row goods">
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 " v-for="(i,index) of goods">
          <div><img :src="i.img_href" alt="" class="imgs"></div>
          <p href=""><a href="" v-text="i.price"></a> <a href="" v-text="i.sales_num"></a></p>
          <p class="title">
            <a v-text="i.title" style="color: black!important;" @click="sendGoods"></a>
          </p>
          <a style="width: 118px;display:inline-block;text-overflow: ellipsis;height: 20px;overflow: hidden"> <span
            class="glyphicon glyphicon-th-list"></span>{{i.shop}}</a>
          <a href="" v-text="i.address"></a>
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
            console.log("aaaaaaaaaaaaaaa")
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
        let nodes=e.target.parentNode.parentNode.querySelectorAll('a')
        let imgs=e.target.parentNode.parentNode.querySelector('img')
        this.good_list['price']=nodes[0].innerText;
        this.good_list['title']=nodes[2].innerText;
        this.good_list['address']=nodes[4].innerText;
        this.good_list['img']=imgs.getAttribute('src')

        sessionStorage.setItem('price',this.good_list['price'])
        sessionStorage.setItem('title',this.good_list['title'])
        sessionStorage.setItem('address',this.good_list['address'])
        sessionStorage.setItem('img',this.good_list['img'])
        this.$router.push({
          name:"DetailPage"
        })

      },

    }


    // mounted:function () {
    //   let vm=this;
    //   axios.post('http://127.0.0.1:8000/resource/getgoods/',
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
