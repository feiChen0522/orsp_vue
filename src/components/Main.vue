
<!--
颜色:

#ce2516


-->

<template>
  <div class="container-fluid">
    <div class="row"  @mouseleave="detailTypeShow=!detailTypeShow" style="position: relative;height: 0px">
      <div v-show="twoTitle" class=" type 111111111" style="position: absolute;z-index: 666;left: 180px;background-color: rgb(206, 37, 22);width: 200px;height: 460px;">
        <ul class="row" @mouseover="getThree($event)" style="display: flex;flex-direction: column;height: 100%">
          <li v-for="(types,index) of type_data" :data-id="types.id" :data-flag="haveData" :index="index"
              :data-type-name="types.product_type" :key="types.id" style="flex: 1;line-height: 28px;text-align: left;padding-left: 10px" v-text="types.name">

            <a style="color: #333333!important;margin-right: 15px" v-for="t of types.category" href="" v-text="t.mn" :data-id="t.id" :key="t.id"></a>

          </li>
        </ul>
      </div>
      <!--<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 detail-type" v-if="detailTypeShow" style="z-index: 666;background-color: whitesmoke;height: 460px;width: 700px;">-->
      <div v-if="detailTypeShow" class="col-lg-9 col-md-9 col-sm-9 col-xs-9 detail-type" style="z-index: 666;background-color: whitesmoke;height: 460px;width: 700px;">


        <!--<ul v-for="(t,index) of type_data.ta.ch.tc.te">-->
        <ul v-for="t,index in type_data">

          <li   v-show="index==current_index" >
            <div v-for="tt in t.category" style="margin-bottom: 25px;">
              <b style="height:14px;font-weight: 900;position: relative;font: 14px/1.5 arial,'\65b0\5b8b\4f53';font-family: Arial,'Microsoft Yahei';display: inline-block;border-right: 1px solid #ccacac;padding-right: 10px;line-height: 6px;" class="" v-text="tt.mn"></b>

              <a @click="toSearch(ttt.t)" v-for="ttt,index in tt.ch.tc.cl" v-text="ttt.t" :key="index" v-show="index<6" style="cursor:pointer;margin-left: 5px;">
              </a>
            </div>
          </li>
        </ul>
      </div>
      <!--<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 detail-type swing" @mouseleave="detailTypeShow=true" v-else>-->
      <!--</div>-->

    </div>

    <swing-div ></swing-div>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props:['twoTitle'],
    data () {
      return {
        haveData:"false",
        type_count:10,
        type_data:[],
        query_condition:'',
        current_index:"",
        typeThree:[],
        detailTypeShow:false,
        two_title:false,
        one_type:[]


      }
    },
    // mounted:function () {
    //   let vm=this;
    //   axios.get(this.global.serverPath+'/resource/getgoodtypetwo/')
    //     .then(function (res) {
    //       console.log(res.data);
    //       vm.type_data = res.data;
    //       console.log(vm.type_data)
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
    // },

    created:function(){
      console.log("-----------")
      let vm=this
      axios.get(this.global.serverPath+'/resource/getguomei/')
          .then(function (res) {
            console.log(res.data);
            vm.type_data = res.data;

            //控制台打印请求成功时返回的数据
            //bind(this)可以不用
          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              console.log(err.response)
              //控制台打印错误返回的内容
            }
            //bind(this)可以不用
          }.bind(this))
    },
    methods: {
      getThree: function (event) {
        let vm = this;
        vm.detailTypeShow = true
        let e = event.target;
        if (e.nodeName == "LI") {
          this.query_condition = [];
          this.current_index = parseInt(e.getAttribute('index'));
          console.log("this.current_index", this.current_index);
          // console.log(e.children);
          for (let ele of e.children) {
            // console.log(ele);
            if (ele.nodeName == "A") {
              console.log(ele.getAttribute('data-id'));
              this.query_condition.push(ele.getAttribute('data-id'))
            }
          }
          this.query_condition = this.query_condition.join(',')
          console.log(this.query_condition);
          if (e.getAttribute('data-flag') == "false" || vm.typeThree[this.current_index] == undefined) {
            axios.get(this.global.serverPath+'/resource/getgoodtypethree/' + this.query_condition)
              .then(function (res) {
                console.log(res.data);
                vm.$set(vm.typeThree,this.current_index,res.data)
                //控制台打印请求成功时返回的数据
                //bind(this)可以不用
              }.bind(this))
              .catch(function (err) {
                if (err.response) {
                  console.log(err.response)
                  //控制台打印错误返回的内容
                }
                //bind(this)可以不用
              }.bind(this))
          }

          e.setAttribute('data-flag', "true");
          console.log(1)

        }
      },
      displaySwing: function (event) {
        console.log(event.target.className);
        // this.detailTypeShow=!this.detailTypeShow
      },
      toSearch:function (con) {
        sessionStorage.setItem('searchCondition',con)
        this.$router.push({
          name:"SearchMain",
          params:{
            "con":con
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../static/css/clear.css';
  @import '../../static/css/main.css';

  .show1{
    position: absolute;
    left: 1000px;
    height: 330px;
  }
  .show2{
    position: absolute;
    left: 1000px;
    top:555px
  }
</style>
