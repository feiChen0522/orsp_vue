<template>
  <div class="container">
    <div class="con">
      <div class="top-txt">上传资源</div>
      <form @submit.prevent="submit" id="aaa">
        <div class="input-container">
          <input type="file" class="aa2" name="usericon" id="upload_file1" @change="update">
        </div>
        <div id="preview"></div>
        <a v-text="fileTip" class="col-lg-12" style="color: red!important;"></a>
        <div class="input-container-txt">
          你可以上传小于200M的压缩包
        </div>

        <!--资源名称-->
        <div class="name col-md-12">
          <label>资源名称：</label>
          <input type="text" class="name" v-model="title">
        </div>
        <a v-text="titleTip" class="col-lg-12" style="color: red!important;"></a>

        <!--技术领域-->
        <div class="col-lg-12">
          <label style="margin-top: 20px">技术领域：</label>
          <select name="sel_primary" id="sel_primary1" style="height: 30px" v-model="technicalType1">
            <option value="请选择">请选择</option>
            <option value="python" v-for="(i,index) in technicalType" v-text="i.name" :value="i">python </option>
          </select>
          <select name="sel_primary2" id="sel_primary2" style="height: 30px" v-model="twotechnicalType">
            <option value="请选择">请选择</option>
            <option value="python" v-for="i in technicalType1.twoTechnicalField" v-text="i.name" :value="i.id"></option>
          </select>
        </div>
        <a v-text="technicalTypeTip" class="col-lg-12" style="color: red!important;"></a>

        <!--资源类型-->
        <div class="col-lg-12" style="margin-bottom: 20px">
          <label style="margin-top: 20px">资源类型：</label>
          <select name="sel_primary3" id="resourceType" style="height: 30px" v-model="resourceType1">
            <option value="请选择">请选择</option>
            <option :value="i.id" v-for="i in resourceType" v-text="i.name" :id="i.id"></option>
          </select>
        </div>
        <a v-text="resourceTypeTip" class="col-lg-12" style="color: red!important;"></a>

        <!--花费积分-->
        <div class="col-lg-12" style="margin-bottom: 20px">
          <label for="sel_primary">积分/O币：</label>
          <input type="text" class="integral" v-model="need_integral" maxlength="2">
          <a v-text="need_integralTip" class="col-lg-12" style="color: red!important;"></a>
        </div>

        <!--资源描述-->
        <div class="resource-describe col-lg-12" style="margin-bottom: 20px">
          <label for="resource-describe" style="position: relative; top: -150px;margin-right: 8px;">资源描述:</label>
          <textarea name="resource-describe"
                    placeholder="描述不支持HTML标签；详细的资源描述有机会获得我们的推荐，更有利于他人下载，赚取更多积分。如资源描述不清，有可能审核不通过。"
                    cols="40" rows="8" maxlength="160" v-model="describe"></textarea>
        </div>
        <a v-text="describeTip" class="col-lg-12" style="color: red!important;"></a>

        <div class="col-lg-12" style="margin-bottom: 20px">
          <input type="checkbox" @click="agreePro=!agreePro">
          <a  data-toggle="modal" data-target="#myModal" @click="showFile=!showFile" >同意ORSP资源共享规则</a>
        </div>
        <div class="r-agree-btn col-lg-12">
          <div type="submit" @click="uploadFile" style="background-color: #bf0000;width: 100px;height: 30px;color: white;text-align: center;line-height: 30px;margin-left: 40px; cursor: pointer" >上传</div>
        </div>
      </form>

      <!--上传成功-->
      <div class="modal fade" id="uploadsuccess" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div v-text="tishi_msg" style="text-align: center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ORSPUpload',
  data () {
    return {
      tishi_msg:'',
      file:'',
      technicalType:[],
      twotechnicalType:[],
      technicalType1:'',
      resourceType:'',
      resourceType1:'',
      classify:'',
      describe:'',
      need_integral:'',
      title:'',
      agreePro:false,
      showFile:true,
      //  是否可以上传
      uploadFlag:true,
      titleTip:'',
      describeTip:'',
      need_integralTip:'',
      resourceTypeTip:'',
      technicalTypeTip:'',
      fileTip:'',
    }
  },
  created:function(){
    this.getAllTechnicalField();
    this.getresourceType();
  },
  //技术领域
  methods:{
    getAllTechnicalField:function(){
      let vm=this;
      axios({
        url:vm.global.serverPath+'/file/getalltechnicalfield/',
        method:"post",
      })
        .then(function(res){
          vm.technicalType=res.data
        })
    },
    //资源类型
    getresourceType:function(){
      let vm=this;
      axios({
        url:vm.global.serverPath+'/file/getresourcetype/',
        method:"post",
      })
        .then(function(res){
          vm.resourceType=res.data;
          console.log(vm.resourceType,9999);
        })
    },
    submit:function (e) {

    },
    fileChange:function (e) {
      this.file = e.target.files[0];
    },
    update (e) {  // 上传照片
      var self = this;
      let file = e.target.files[0];
      this.preview1(file);
      /* eslint-disable no-undef */
      let param = new FormData() ;// 创建form对象
      //usericon通常就是file的name属性值
      param.append('usericon', file, file.name) ;// 通过append向form对象添加数据
      param.append('chunk', '0'); // 添加form表单中其他数据
      this.file=param;
    },
    preview1(file){
      var img = new Image();
      img.src = URL.createObjectURL(file);
      var url = img.src;
      var $img = $(img);
      $img.css({'width':'69px','height':'69px','borderRadius':'50%','marginLeft':'20px'});
      img.onload = function () {
        URL.revokeObjectURL(url);
        $('#preview').empty().append($img);
      }
    },

    //  上传文件
    uploadFile:function () {
      //同意ORSP协议之后才能上传文件
      //判断上传文件的信息是否填写完整
      if (!this.file) {
        this.uploadFlag=false;
        this.fileTip="请选择一个文件"
      }
      else{
        this.uploadFlag=true;
        this.fileTip=""
      }

      if (!this.title) {
        this.uploadFlag=false;
        this.titleTip="请输入资源名称"
      }
      else{
        this.uploadFlag=true;
        this.titleTip=""
      }

      if (!this.technicalType1) {
        this.uploadFlag=false;
        this.technicalTypeTip="请选择技术领域"
      }
      else{
        this.uploadFlag=true;
        this.technicalTypeTip=""
      }

      if (!this.twotechnicalType) {
        this.uploadFlag=false;
        this.technicalTypeTip="请选择技术领域"
      }
      else{
        this.uploadFlag=true;
        this.technicalTypeTip=""
      }

      if (!this.resourceType1) {
        this.uploadFlag=false;
        this.resourceTypeTip="请选择资源的类型"
      }
      else{
        this.uploadFlag=true;
        this.resourceTypeTip=""
      }

      if (!this.describe) {
        this.uploadFlag=false;
        this.describeTip="请填写文件的描述"
      }
      else{
        this.uploadFlag=true;
        this.describeTip=""
      }

      if (!this.need_integral) {
        this.uploadFlag=false;
        this.need_integralTip="请填写所需要的积分"
      }
      else{
        this.uploadFlag=true;
        this.need_integralTip=""
      }

      if (this.agreePro&&this.uploadFlag===true) {

        let config = {
          headers: {'Content-Type': 'multipart/form-data'}
        };
        let vm=this;
        axios.post(vm.global.serverPath+'/file/uploadfile/', this.file, config)
          .then(function (res) {
            //    发送文件信息到后台
            let fileMsg={
              "name":res.data.name,
              "title":vm.title,
              "twoTechnicalFieldId_id":vm.twotechnicalType,
              "resourceTypeId_id":vm.resourceType1,
              "describe":vm.describe,
              "need_integral":vm.need_integral,
              "upload_user_id":sessionStorage.getItem('currentUserId')
            };
            axios.post(vm.global.serverPath+'/file/savefile/', fileMsg, config)
              .then(function (res) {
                vm.tishi_msg=res.data;
                $('#uploadsuccess').modal("show");
                //bind(this)可以不用
              }.bind(this))
              .catch(function (err) {
                if (err.response) {
                  //控制台打印错误返回的内容
                }
                //bind(this)可以不用
              }.bind(this))

            //控制台打印请求成功时返回的数据
            //bind(this)可以不用
          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              //控制台打印错误返回的内容
            }
            //bind(this)可以不用
          }.bind(this))
        /*
        * .then(function (res) {
        console.log(res)
        console.log(res.headers);
        sessionStorage.setItem('token',res.headers.token)
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
        *
        * */
      }

    }

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #uploadsuccess{
    font-size: 14px;
    color: #333;
    font-weight: 400;
    /*position: absolute;*/
    /*top: 50%;*/
    /*left: 50%;*/
    /*transform: translateX(-50%) translateY(-50%);*/
  }
  a{
    text-decoration: none;
  }
  button{
    margin-bottom: 0!important;
  }
  .container{
    padding: 0;
  }
  .container .con{
    background-color: #FFFFFF;
    width: 850px;
    min-height: 800px;
    text-align: left;
    padding: 20px 20px;
  }
  .con .top-txt{
    font-size: 16px;
    border-bottom: 1px solid #EFEFEF;
  }
  .con .input-container{
    width: 80px;
    height:80px;
    background-image: url("../../static/images/upload.png");
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 2;
    float: left;
    margin-top: 30px;
  }
  .input-container:hover{
    cursor: pointer;
  }
  .input-container>input{
    width: 100%;
    height: 100%;
    opacity: 0;
    /*background-color: #ff4f14;*/
  }
  .input-container-txt{
    margin-top: 10px;
    color: #666;
    position: relative;
    top: 60px;
    left: 30px;
  }
  .name{
    clear: both;
    margin-top: 10px;
  }

</style>
