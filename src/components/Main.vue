<template>
  <div class="type-container">
    <div class="row"  @mouseleave="detailTypeShow=!detailTypeShow">
      <div class="col-lg-2 type">
        <ul class="row" @mouseover="getThree($event)" >
          <li v-for="(types,index) of type_data" :data-id="types.id" :data-flag="haveData" :index="index"  :data-type-name="types.product_type" :key="types.id">

            <a v-for="t of types.category" href="" v-text="t.name" :data-id="t.id" :key="t.id"></a>
            <i style="float: right;color: rgba(46,0,0,0.68);margin-right: 15px;"> > </i>

          </li>
        </ul>
      </div>
      <transition name="fade">
        <div class="col-lg-9 detail-type" v-if="detailTypeShow">
          <ul v-for="(t,index) of typeThree">
            <li v-show="index==current_index" v-for="tt of typeThree[current_index]">
              <h1 v-text="tt.product_type" :data-id="tt.id" class=""></h1>
              <a v-for="ttt of tt.category">
                <a href="" :data-id="ttt.id" v-text="ttt.product_type"></a>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-lg-9 detail-type swing" @mouseleave="detailTypeShow=true" v-else>
          <swing-div style="margin-left: -15px;margin-top: -15px"></swing-div>
        </div>
      </transition>




    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        haveData:"false",
        type_count:10,
        type_data:[],
        query_condition:'',
        current_index:"",
        typeThree:[],
        detailTypeShow:false
      }
    },
    mounted:function () {
      let vm=this;
      axios.get('http://127.0.0.1:8000/resource/getgoodtypetwo/')
        .then(function (res) {
          console.log(res.data);
          vm.type_data=res.data;
          console.log(vm.type_data)
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
    methods:{
      getThree:function (event) {
        let vm=this;
        vm.detailTypeShow=true
        let e=event.target;
        if (e.nodeName=="LI"){
          this.query_condition=[];
          this.current_index=parseInt(e.getAttribute('index'));
          console.log("this.current_index", this.current_index);
          // console.log(e.children);
          for (let ele of e.children){
            // console.log(ele);
            if(ele.nodeName=="A"){
              console.log(ele.getAttribute('data-id'));
              this.query_condition.push(ele.getAttribute('data-id'))
            }
          }
          this.query_condition=this.query_condition.join(',')
          console.log(this.query_condition);
          if (e.getAttribute('data-flag')=="false" || vm.typeThree[this.current_index]==undefined) {
            axios.get('http://127.0.0.1:8000/resource/getgoodtypethree/'+this.query_condition)
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

          e.setAttribute('data-flag',"true");
          console.log(1)

        }
      },
      displaySwing:function (event) {
        console.log(event.target.className);
        // this.detailTypeShow=!this.detailTypeShow

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../static/css/clear.css';
  @import '../../static/css/main.css';
</style>
