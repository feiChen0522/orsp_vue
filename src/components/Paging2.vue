<template>
  <div class="container" style="margin-top: 20px;">
    <div class="paging" >
      <div class="inner">
        <button class="lastpage" @click="changeIndex($event)" id="lastpage" >上一页</button>
        <div class="page_number">
          <ul>
            <li v-for="i in p_count" :id="i" @click="getCurrentPage(i)" :class="currentPage === i?'active':''">
              <a href="" v-text="i">1</a>
            </li>
            <!--<li><a href="####">2</a></li>-->
            <!--<li class="ellipsis"><a href="####">...</a></li>-->
            <!--<li><a href="####">3</a></li>-->
            <!--<li><a href="####">4</a></li>-->
            <!--<li><a href="####">5</a></li>-->
            <!--<li class="ellipsis"><a href="####">...</a></li>-->
            <!--<li><a href="####">6</a></li>-->
            <!--<li><a href="####">7</a></li>-->
          </ul>
        </div>
        <button class="nextpage" @click="changeIndex($event)" id="nextpage">下一页</button>
      </div>
      <!--<div class="total">2</div>-->
      <!--<div class="form">3</div>-->
      <!--<span v-text="p_c"></span>-->
      <!--<span v-text="currentPage"></span>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Paging2',
  data () {
    return {
      currentPage: 1, // 当前页
      indexPage:1, // 默认页
      p_c:this.p_count ,// 页面总数
    }
  },
  props:['p_count'],
  computed:{

  },
  mounted:function(){
    // if (this.currentPage == 1) {
    //
    // }
  },
  methods:{
    getCurrentPage:function (i) {
      this.currentPage=i; //获取当前页
      this.$emit("indexclick",i)
    },
    changeIndex:function (event) {
      if(event.currentTarget.id=="nextpage"){
          this.currentPage+=1;
          this.$emit("indexclick",this.currentPage);
      }
      if(event.currentTarget.id=="lastpage"){
          this.currentPage = this.currentPage - 1;
          this.$emit("indexclick", this.currentPage);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div,ul,li,a{
    padding: 0;
    margin: 0;
  }
  ul,li{
    list-style: none;
  }
  .paging{
    width: 60%;
    height: 35px;
    margin: auto;
  }
  .paging .inner{
    width: 70%;
    line-height: 35px;
  }
  .paging .total{
    width: 10%;
    /*background-color: #ff35cc;*/
  }
  .paging .form{
    width: 20%;
    background-color: #b2dba1;
  }
  .paging div{
    float: left;
  }
  .paging .inner .lastpage, .paging .inner .nextpage{
    border: 1px solid #ededed;
    padding: 0 8px;
    height: 35px;
    background: white;
    width: 60px;
  }
  .paging .inner .lastpage:hover, .paging .inner .nextpage:hover{
    border: 1px solid red;
    cursor: pointer;
  }
  .paging .inner ul{
    margin: 0 8px;
  }
  .paging .inner ul li{
    float: left;
    height: 35px;
    width: 35px;
    padding: 0 5px;
    margin-right: -1px;
    border: 1px solid #ededed;
  }
  .paging .inner ul li:hover {
    position: relative;
    z-index: 2;
    border: 1px solid red;
  }
  .active{
    position: relative;
    z-index: 2;
    border: 1px solid red;
  }
  .paging .inner ul li.ellipsis{
    border: none;
    display: none;
    padding: 0;
  }
  .paging .inner ul li a{
    padding: 0 5px;
    text-decoration: none;
  }
</style>
