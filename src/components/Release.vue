<template>
  <div class="container">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10" style="background-color: yellow">
        <div class="col-md-12 i1"><span>上传商品</span></div>
        <div class="col-md-12 a2"></div>
        <div class="col-md-12 ">
          <form>
            <div class="form-group">
              <label for="exampleInputTitle">宝贝标题</label>
              <input type="email" class="form-control" id="exampleInputTitle" placeholder="请输入宝贝标题">
            </div>
            <div class="form-group">
              <label for="exampleInputNew">宝贝成色</label>
              <p id="exampleInputNew">
                <label class="col-md-1 radio-inline">
                  <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked> 全新
                </label>
                <label class=" col-md-1 radio-inline">
                  <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> 9成新
                </label>
                <label class=" col-md-1 radio-inline">
                  <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">8成新
                </label>
                <label class=" col-md-8 radio-inline">
                  <input type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"> 7成新
                </label>
              </p>
            </div>
            <div class="form-group a1">
              <label for="exampleInputAddress">我现在的居住地</label>
              <p id="exampleInputAddress">
                <select v-model="selected"  v-if="provinceL">
                  <option disabled value="请选择城市">请选择省份</option>
                  <option v-for="(item,index) in provinceL" :value="item">{{item.name}}</option>
                </select>
                <select v-model="citySelected" v-if="cityL">
                  <option disabled value="请选择城市">请选择城市</option>
                  <option v-for="(item,index) in cityL" :value="item">{{item.name}}</option>
                </select>
              </p>
            </div>
            <div class="form-group">
              <label for="exampleInputOldPrice">宝贝原价</label>
              <input type="email" class="form-control" id="exampleInputOldPrice" placeholder="请输入宝贝原价">
            </div>
            <div class="form-group">
            <label for="exampleInputNewPrice">宝贝二手现价</label>
            <input type="email" class="form-control" id="exampleInputNewPrice" placeholder="请输入宝贝二手现价">
          </div>
            <div class="form-group">
              <label for="exampleInputNum">库存</label>
              <input type="email" class="form-control" id="exampleInputNum" placeholder="请输入宝贝二手现价">
            </div>
            <div class="form-group">
              <label for="exampleInputFile">File input</label>
              <input type="file" id="exampleInputFile">
              <p class="help-block">Example block-level help text here.</p>
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox"> Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {province, city} from '../../static/css/vue-area.js'

  export default {
    name: 'Release',
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
      this.provinceL = [...province]
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "./1.css";
</style>
