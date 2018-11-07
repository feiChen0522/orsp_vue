<template>
  <div class="container">
    <!--提示模态框-->
    <div class="modal fade" id="tishi" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div v-text="tishi_msg" style="text-align: center"></div>
          </div>
        </div>
      </div>
    </div>
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
                <input type="text" class="form-control" id="exampleInputTitle" placeholder="请输入宝贝标题" v-model="title">
              </div>
              <div class="form-group">
                <label for="exampleInputTally">宝贝便签</label>
                <input type="text" class="form-control" id="exampleInputTally" placeholder="请输入宝贝标签 例如数码产品 手机" v-model="product_type">
              </div>
              <div class="form-group">
                <label for="exampleInputName">宝贝名称</label>
                <input type="text" class="form-control" id="exampleInputName" placeholder="请输入宝贝名称 例如手机名称 华为mate10" v-model="name">
              </div>


              <div class="form-group">
                <label for="exampleInputOldPrice">宝贝原价</label>
                <input type="text" class="form-control" id="exampleInputOldPrice" placeholder="请输入宝贝原价" v-model="price">
              </div>

              <div class="form-group">
                <label for="exampleInputNum">库存</label>
                <input type="text" class="form-control" id="exampleInputNum" placeholder="请输入宝贝库存" v-model="category">
              </div>
              <div class="form-group a3">
                <label>添加商品描述</label>

                <textarea rows="5"  maxlength="200" onchange="this.value=this.value.substring(0, 200)" onkeydown="this.value=this.value.substring(0, 200)" onkeyup="this.value=this.value.substring(0, 200)"  class="a4" v-model="description"></textarea>

                <label>上传图片</label>
                <div class="image-view">
                  <div class="addbox">
                    <input type="file" @change="getImgBase()" name="good_icon" id="good_img">
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
              <!--<router-link to="/">-->
              <button type="submit" class="btn btn-default" @click="submitForm">提交</button>
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
        tishi_msg:'',
        selected: {
          code: 110000,
          name: '北京市',
          parentId: 0
        },
        imgBase64: [],
        citySelected: {},
        provinceL: [],
        cityL: [],
        file:"",
        title:"",
        name:"",
        price:0,
      //  库存
        category:0,
        description:"",
        product_type:"",
      //  销量
        pnum:0

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

        this.file = file
      },
      //删除图片
      delImg(index) {
        this.imgBase64.splice(index, 1);
      },
    //  上传商品
        submitForm(event) {
        let user_id=sessionStorage.getItem('currentUserId')
          event.preventDefault();
          let formData = new FormData();
          formData.append('name', this.name);
          formData.append('title', this.title);
          formData.append('file', this.file);
          // formData.append('file', this.file);
          let file=document.querySelector('#good_img').files[0]
          formData.append('good_icon', file,file.name ) ;// 通过append向form对象添加数据

          formData.append('user_id', user_id);
          formData.append('price', this.price);
          formData.append('pnum', this.pnum);
          formData.append('product_type', this.product_type);
          formData.append('description', this.description);
          formData.append('category', this.category);

          let config = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          };
          var vm=this;
          // axios.post(this.global.serverPath+'/resource/uploadgoods/', formData, config)
          axios.post(this.global.serverPath+'/resource/uploadgoods/', formData, config)
            .then(function (res) {
              //控制台打印请求成功时返回的数据
              //bind(this)可以不用
              if (res.data.code=="299"){
                vm.tishi_msg='恭喜上传成功';
                $('#tishi').modal("show");

              } else {
                vm.tishi_msg='上传失败';
                $('#tishi').modal("show");
              }
            })
            .catch(function (err) {
              if (err.response) {
                //控制台打印错误返回的内容
              }
              //bind(this)可以不用
            }.bind(this))
      }


    },
    watch: {
      selected: function () {
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
  #tishi{
    font-size: 14px;
    color: #333;
    font-weight: 400;
    /*position: absolute;*/
    /*top: 50%;*/
    /*left: 50%;*/
    /*transform: translateX(-50%) translateY(-50%);*/
  }
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
    background-image:url("../assets/icon/addpicture.jpg") ;
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
