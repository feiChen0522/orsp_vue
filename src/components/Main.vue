<template>
  <div class="type-container">
      <div class="row">
        <div class="col-lg-3 type">
          <ul class="row">
            <li v-for="types of type_data" :data-id="types.id" :data-type-name="types.product_type" :key="types.id">
              <p>
                <a v-for="t of types.category" href="" v-text="t.name" :data-id="t.id" :key="t.id"></a>
                <i style="float: right;color: red;margin-right: 15px;"> > </i>
              </p>
            </li>
          </ul>
        </div>
        <div class="col-lg-9 detail-type" v-if="true"></div>
        <div class="col-lg-9 detail-type" v-else></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      type_count:10,
      type_data:[]
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../static/css/clear.css';
  @import '../../static/css/main.css';
</style>
