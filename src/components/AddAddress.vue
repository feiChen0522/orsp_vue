<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-10">
        <div class="col-md-10">
          <form class="form-horizontal">
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">收货人:</label>
              <div class="col-sm-9">
                <input  class="form-control" id="inputpersonal">
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label" >地址:</label>
              <div class="col-sm-9">
                <div class="row">
                  <select class="col-lg-3" v-model="selected"  v-if="provinceL" style="width: 100px;margin-right: 20px;margin-left: 16px;">
                    <option disabled value="请选择城市">请选择省份</option>
                    <option v-for="(item,index) in provinceL" :value="item">{{item.name}}</option>
                  </select>
                  <select class="col-lg-3" v-model="citySelected" v-if="cityL" style="width: 100px">
                    <option disabled value="请选择城市">请选择城市</option>
                    <option v-for="(item,index) in cityL" :value="item">{{item.name}}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">详细地址:</label>
              <div class="col-sm-9">
                <input class="form-control" id="inputaddress">
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">手机号:</label>
              <div class="col-sm-9">
                <input class="form-control" id="inputphone">
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-3 col-sm-10">
                <div class="checkbox">
                  <label>
                    <input type="checkbox"> 设为默认地址
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-3 col-sm-10">
                <button type="submit" class="btn btn-default">提交</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  // import {province, city} from '../../static/css/vue-area.js'
export default {
  name: 'AddAddress',
  data() {
    return {
      selected: {
        code: 110000,
        name: '北京市',
        parentId: 0
      },

      citySelected: {},
      provinceL: [],
      cityL: [],
    }
  },
  watch: {
    selected: function () {
      console.log(this.selected)
      // 清除区县
      this.citySelected = {}
      this.cityL = city.filter((item) => item.parentId === this.selected.code)
    }
  },
  created() {
    // this.provinceL = [...province]
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .a{
    margin-top: 20px;
    margin-bottom: 50px;
    border-bottom: 2px solid #c30;
  }
  div{
    text-align: left;
  }

  select {
    width: 200px;
    height: 35px;
    border: solid 2px #d8d8d8;
  }
</style>
