<template>
    <div style="width: 870px" >
      <div class="search">
       <div class="div1" style="height: 41px">
         <ul class="first-ul">
           <li title="综合排序">综合排序</li>
           <li title="销量从高到低">销量</li>
           <li title="信用从高到底">信用</li>
           <li @mouseenter="enter" v-show="flag">价格
           </li>
           <li style="border: none">
             <div class="price" v-show="!flag" @mouseleave="leave" >
               <ul style="position: absolute;z-index: 500">
                 <li @click="sort(1)">价格从低到高</li>
                 <li @click="sort(0)">价格从高到低</li>

               </ul>
             </div>
           </li>

         </ul>
         <div class="price-search" @mouseenter="enter1" @mouseleave="leave1">
           <input type="text" placeholder="￥" v-model="min_price"> -
           <input type="text" placeholder="￥" v-model="max_price">
           <button v-show="button_flag" @click="searchByCon">确定</button>
         </div>
       </div>
        <div class="page">
          <img src="../../../static/images/左.svg" alt="" class="left" @click="left">
          <span v-text="page" class="page1"></span> /
          <span v-text="allpage"></span>
          <img src="../../../static/images/右.svg" alt="" class="right" @click="right">
        </div>
      </div>
      <!--<div class="chance">-->
        <!--<input type="checkbox" id="checkbox1"> <label for="checkbox1">包邮</label>-->
        <!--<input type="checkbox" id="checkbox2"> <label for="checkbox2">赠送退货运险费</label>-->
        <!--<input type="checkbox" id="checkbox3"> <label for="checkbox3">货到付款</label>-->
        <!--<input type="checkbox" id="checkbox4"> <label for="checkbox4">二手</label>-->
        <!--<input type="checkbox" id="checkbox5"> <label for="checkbox5">7+天内退款</label>-->
        <!--<input type="checkbox" id="checkbox6"> <label for="checkbox6">正品保障</label>-->
        <!--<input type="checkbox" id="checkbox7"> <label for="checkbox7">海外产品</label>-->
      <!--</div>-->


    </div>
</template>

<script>
    export default {
        name: "Search",
        watch:{
          page:function () {
            var page = document.querySelector(".page1");
            page.style.color = '#ff4400';
          }
        },
        methods:{
          enter:function () {
            this.flag = false
          },
          leave:function () {
            this.flag = true
          },
          enter1:function () {
            this.button_flag=true;
            var sear = document.querySelector(".price-search");
            sear.style.backgroundColor = 'white';
            sear.style.border ='solid 1px #e8e8e8';
          },
          leave1:function () {
            this.button_flag=false;
            var sear = document.querySelector(".price-search");
            sear.style.backgroundColor = '#f5f5f5';
            sear.style.border='none';
          },
          left:function () {
            this.page--;
            if(this.page<=1){
              this.page=1
            }
          },
          right:function () {
            this.page++;
            if(this.page>=this.allpage){
              this.page=this.allpage
            }
          },
          sort:function (p) {
            let goods=JSON.parse(sessionStorage.getItem('searchGoods'))

            if (p===1){
              function sortId(a,b){
                return a.price-b.price
              }
              goods.sort(sortId);
              console.log(goods);
              sessionStorage.setItem('searchGoods',JSON.stringify(goods))
              window.location.reload()
            } else {
              function sortId(b,a){
                return a.price-b.price
              }
              goods.sort(sortId);
              console.log(goods);
              sessionStorage.setItem('searchGoods',JSON.stringify(goods))
              window.location.reload()
            }

          },
          searchByCon:function () {
            let vm=this
            let inputText=sessionStorage.getItem('searchCondition')
            axios.get(this.global.serverPath+'/resource/searchGoods/?good='+inputText+'&index='+0+'&min_price='+vm.min_price+'&max_price='+vm.max_price
              ,{
                // headers: {
                //   'Content-Type': 'application/json',
                // }
              })
              .then(function (res) {
                console.log("搜索");
                console.log(res)
                //在sessionStorage暂时存储搜索到的数据
                sessionStorage.setItem('searchGoods',JSON.stringify(res.data))

                this.$router.push({
                  name:"SearchMain",
                  params:{
                    good:res.data
                  }
                });
                // window.location.reload();
                //控制台打印请求成功时返回的数据
                //bind(this)可以不用
              }.bind(this))
              .catch(function (err) {
                if (err.response) {
                  //控制台打印错误返回的内容
                }
                //bind(this)可以不用
              }.bind(this))
          }
        },
        data:function () {
          return{
            flag:true,
            button_flag:false,
            page:1,
            allpage:100,
            min_price:'',
            max_price:''
          }
        }
    }
</script>

<style scoped>
  ul,li{
    list-style: none;
  }
  .search{
    width: 1113px;
    height: 41px;
    background-color: #f5f5f5;
    position: relative;
    margin-top: 20px;
  }
  .first-ul{
    list-style-type: none;
    display: flex;
    width: auto;
    position: relative;
    left: -40px;
  }
  .first-ul>li{
    width: 87px;
    height: 41px;
    border: solid 0.8px #e5e5e5;
    box-sizing: border-box;
    line-height: 39px;
    text-align: center;
    color: #6d6d6d;
    cursor: pointer;
  }
  .first-ul>li:hover{
    color: #ff4400;
    background-color: #ffffff;
  }
  .div1{
    position: absolute;
    left: 0;
  }
  .price{
    width: 130px;
    height: 160px;
    background-color: white;
    position: relative;
    /*left: 291px;*/
    /*top: -40px;*/
    z-index: 2000;
    border: solid 1px #e5e5e5;
    box-sizing: border-box;
    color: #6d6d6d;
    font-size: 12px;
  }
  .price>ul{
    width: 100%;
    height: 80px;
    position: absolute;
    left: 0;
  }
  .price li{
    width: 100%;
    height: 25%;
    list-style: none;
    /*background-color: red;*/
    line-height: 39px;
    text-align: center;
    position: relative;
    left: -24px;
    z-index: 600;
  }
  .price li:hover{
    color: #ff4400;
    cursor: pointer;
  }
  .price-search{
    width: 220px;
    height: 41px;
    background-color: #f5f5f5;
    line-height: 41px;
    position: relative;
    left: 370px;
    top: -50px;
    padding-left: 20px;
  }
  .price-search input{
    width: 55px;
    height: 23px;
  }
  .price-search button{
    width: 55px;
    height: 30px;
    background-color: #ff4400;
    color: white;
    border: none;
    line-height: 30px;
  }
  .page{
    width: 90px;
    height: 39px;
    background-color: #f5f5f5;
    position: relative;
    left: 760px;
    top: 2px;
    line-height: 39px;
    color: #6d6d6d;

  }
  .page img{
    cursor: pointer;
  }
  .page .left{
    /*margin-top: 10px;*/
  }
  .page .right{
    margin-top: 10px;
    position: absolute;
    left: 80px;
  }
  .chance{
    width: 600px;
    height: 40px;
    border: solid 1px #e5e5e5;
    box-sizing: border-box;
    background-color: white;
    display: flex;
    color: #6d6d6d;
    font-weight: 100;
    line-height: 40px;
  }
  .chance input{
    width: 15px;
    height: 15px;
    margin-right: 5px;
    padding-right: 5px;
    position: relative;
    top: 10px;
  }
  .chance label{
    margin-right: 9px;
    font-weight: 400;
  }
</style>
