<template>
  <div class="container">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <div class="col-md-10" >
          <div class="col-md-12 i1"><span>上传商品</span></div>
          <div class="col-md-12 a2"></div>
          <div class="col-md-12 ">
            <form>

              <div class="form-group">
                <label for="exampleInputTitle">宝贝标题</label>
                <input type="text" class="form-control" id="exampleInputTitle" placeholder="请输入宝贝标题">
              </div>
              <div class="form-group">
                <label for="exampleInputTally">宝贝便签</label>
                <input type="text" class="form-control" id="exampleInputTally" placeholder="请输入宝贝标签 例如数码产品 手机">
              </div>
              <div class="form-group">
                <label for="exampleInputName">宝贝名称</label>
                <input type="text" class="form-control" id="exampleInputName" placeholder="请输入宝贝名称 例如手机名称 华为mate10">
              </div>
              <div class="form-group">
                <label for="exampleInputNew">宝贝成色</label>
                <p id="exampleInputNew">
                  <label class="col-md-2 radio-inline">
                    <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked> 全新
                  </label>
                  <label class=" col-md-2 radio-inline">
                    <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> 9成新
                  </label>
                  <label class=" col-md-2 radio-inline">
                    <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">8成新
                  </label>
                  <label class=" col-md-5 radio-inline">
                    <input type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"> 7成新
                  </label>
                </p>
              </div>
              <div class="form-group a1">
                <label for="exampleInputAddress">我现在的居住地</label>
                <p id="exampleInputAddress">
                  <select v-model="selected" v-if="provinceL">
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
                <input type="text" class="form-control" id="exampleInputOldPrice" placeholder="请输入宝贝原价">
              </div>
              <div class="form-group">
                <label for="exampleInputNewPrice">宝贝二手现价</label>
                <input type="text" class="form-control" id="exampleInputNewPrice" placeholder="请输入宝贝转手现价">
              </div>
              <div class="form-group">
                <label for="exampleInputNum">库存</label>
                <input type="text" class="form-control" id="exampleInputNum" placeholder="请输入宝贝库存">
              </div>
              <div class="form-group a3">
                <label>添加商品描述</label>

                <textarea class="a4"></textarea>

                <label>上传图片</label>
                <div class="image-view">
                  <div class="addbox">
                    <input type="file" @change="getImgBase()">
                    <div class="addbtn"></div>
                  </div>
                  <div class="view">
                    <div class=" item" v-for="(item, index) in imgBase64">
                      <span class="cancel-btn" @click="delImg(index)">x</span>
                      <img :src="item">
                    </div>
                  </div>
                </div>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox"><router-link to="/agreement">同意ORSP服务协议</router-link>
                </label>
              </div>
              <button type="submit" class="btn btn-default">提交</button>
            </form>
          </div>
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
        imgBase64: [],
        citySelected: {},
        provinceL: [],
        cityL: [],
      }
    },
    methods: {
      //获取图片base64实现预览
      getImgBase() {
        var _this = this;
        var event = event || window.event;
        var file = event.target.files[0];
        var reader = new FileReader();
        //转base64
        reader.onload = function (e) {
          _this.imgBase64.push(e.target.result);
        }
        reader.readAsDataURL(file);
      },
      //删除图片
      delImg(index) {
        this.imgBase64.splice(index, 1);
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
  .i1{

    font-size: 20px;
    color: black;
  }

  .a2 {
    margin-top: 20px;
    margin-bottom: 50px;
    border-bottom: 2px solid #c30;
  }
  div{
    text-align: left;
  }
  .a1{
    margin-bottom: 20px;
    margin-top: 35px;

  }
  .a3{
    width: 730px;
    height: 400px;
    border: solid 1px #cccccc;

  }
  .a4{
    width: 728px;
    height: 120px;
    border: none;
    padding: 0;
    font-size: 15px;
    overflow: unset;
  }
  .clearboth::after{
    content:"";
    display:block;
    clear:both;
  }
  .image-view {
    width: 100%;
    height: 100%;
  }
  .image-view .addbox{
    float:left;
    position:relative;
    height:100px;
    width:100px;
    margin-bottom:20px;
    text-align:center;
  }
  .image-view .addbox input{
    position:absolute;
    left:0;
    height:100px;
    width:100px;
    opacity:0;
  }
  .image-view .addbox .addbtn{
    height:100px;
    float: left;
    width:100px;
    line-height:100px;
    /*background-image:url("assets/icon/addpicture.jpg") ;*/
    background-repeat: no-repeat;
    background-size: 100px 100px;
    border-radius:10px;
  }
  .image-view .item {
    position:relative;
    height:100px;
    width:100px;
    object-fit: cover;
    display: inline-block;
    margin-top: 10px;
  }
  .image-view .item .cancel-btn{
    position:absolute;
    right:-10px;
    top:-10px;
    display:block;
    width:20px;
    height:20px;
    color:#fff;
    line-height:20px;
    text-align:center;
    background:red;
    border-radius:10px;
    cursor:pointer;
  }
  .image-view .item img{
    width:100%;
    height:100%;
  }
  .image-view .view{
    clear:both;
  }

</style>
