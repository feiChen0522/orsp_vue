<template>
  <div class="container">
    <div class="search-box">
      <div class="con-logo">
        <router-link tag="a" to="/" href="#"><div class="logo"></div></router-link>
      </div>
      <div class="title-container" style="width: 300px;float: left;height: 80px">
        <img src="../../static/images/title.png" alt="" style="object-fit: contain;width: 100%;height: 100%">
      </div>
      <div class="box">
        <div class="box-text" style="background-color: #ce2516;">
          <input type="text" placeholder="请输入要搜索的词" maxlength="30" class="input-txt" v-model="inputText" @keyup.enter="searchGoods">
          <div style="background-color: #ce2516"  class="btn-search glyphicon glyphicon-search" @click="searchGoods" ><span>搜索</span></div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import myCartBox from './indexCom/myRecommend'

export default {
  name: 'SearchBox',
  props:['con'],
  data () {
    return {
        inputText:""
    }
  },
  components:{
    myCartBox
  },
  created(){

    if (sessionStorage.getItem('searchCondition')!=null) {
      this.inputText=sessionStorage.getItem('searchCondition')
    }
  },
  mounted(){

    console.log("con",this.con)
    if (this.con) this.inputText=this.con
    console.log("con",this.inputText)
    sessionStorage.setItem('searchCondition',this.inputText)

  },
  methods:{
    searchGoods:function (e) {
      sessionStorage.setItem('searchCondition',this.inputText)
      axios.get(this.global.serverPath+'/resource/searchGoods/?good='+this.inputText+'&index='+0
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

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @media only screen and (min-width: 581px){
    .search-box{
      width: 100%;
      height: 70px;
      margin: auto;
    }
    .search-box .con-logo{
      width: 10%;
      /*background-color: yellow;*/
      height: 64px;
      float: left;

    }
    .search-box .logo{
      width: 94px;
      height: 94px;
      background-image: url("../../static/images/logoko.png");
      background-repeat: no-repeat;
      background-size: cover;
      margin-top: -20px;
    }
    .search-box .box{
      /*background-color: #5bc0de;*/
      height: 64px;
      width: 60%;
      float: right;
    }
    .search-box .box .box-text{
      width: 384px;
      height: 39px;
      border: 3px solid rgb(206, 37, 22);
      /*box-sizing: border-box;*/
      margin: 15px auto;
    }
    .search-box .box .input-txt{
      text-indent: 5px;
      width: 328px;
      padding: 8px 0 8px 10px;
      border: none;
      font-size: 12px;
      outline: none;
    }
    .search-box .box .box-text .btn-search{
      float: right;
      width: 50px;
      line-height: 36px;
      text-align: center;
      height: 35px;
      position: relative;
      top: -1px;
      background-color: #ff6a19;
      color: #ffffff;
      left: 2px;
    }
    .search-box .box .box-text .btn-search:focus, .search-box .box .box-text .btn-search:hover{
      cursor: pointer;
    }
    .search-box .box .box-text .btn-search span{
      position: relative;
      top: -2px;
      left: 1px;
    }
  }
  @media only screen and (min-width: 240px) and (max-width: 580px){
    .search-box .con-logo{
      display: none;
    }
    .search-box .box{
      height: 40px;
    }
    .search-box .box .box-text{
      width: 90%;
      height: 39px;
      border: 3px solid #ff6a19;
      margin: 15px auto

    }
    .search-box .box .input-txt{
      text-indent: 5px;
      width: 80%;
      padding: 8px 0 8px 10px;
      border: none;
      font-size: 12px;
      outline: none;
    }
    .search-box .box .box-text .btn-search{
      float: right;
      width: 20%;
      line-height: 37px;
      text-align: center;
      height: 35px;
      position: relative;
      top: -1px;
      left: 1px;
      background-color: #ff6a19;
      color: #ffffff;
    }
    .search-box .box .box-text .btn-search span{
      position: relative;
      top: -2px;
    }
  }

</style>
