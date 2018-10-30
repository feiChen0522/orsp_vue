<template>
    <div>

     <div v-if="showFile">

       <!-- Modal -->

               <div class="upload-container">

                 <form @submit.prevent="submit" id="aaa">
                   <div class="input-container col-lg-12">
                     <input type="file" class="aa2" name="usericon" id="upload_file1" @change="update">

                   </div>

                   <div id="preview"></div>
                   <a v-text="fileTip" class="col-lg-12" style="color: red!important;"></a>

                   <div class="col-lg-12">
                     你可以上传小于200M的压缩包
                   </div>
                   <!--<div class="col-lg-12">-->
                   <!--<label for="sel_primary">资源类型：</label>-->
                   <!--<select name="sel_primary" id="sel_primary0">-->
                   <!--<option value>请选择</option>-->
                   <!--<option value="1">移动开发</option>-->
                   <!--<option value="2">开发技术 </option>-->
                   <!--<option value="3">课程资源 </option>-->
                   <!--</select>-->
                   <!--</div>-->
                   <div class="col-lg-12">
                     <label for="sel_primary">所属分类：</label>
                     <select name="sel_primary" id="sel_primary1" style="height: 30px" v-model="resourceType">
                       <option value>请选择</option>
                       <option value="游戏辅助">游戏辅助</option>
                       <option value="python">python </option>
                     </select>

                   </div>
                   <a v-text="resourceTypeTip" class="col-lg-12" style="color: red!important;"></a>

                   <!--<p>资源标签</p>-->
                   <div class="col-lg-12">
                     <label for="sel_primary">资源分数：</label>
                     <select name="sel_primary" id="sel_primary2" style="height: 30px;line-height: 30px" v-model="need_integral">
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3 </option>
                       <option value="4">4 </option>
                     </select>
                     <a v-text="need_integralTip" class="col-lg-12" style="color: red!important;"></a>

                   </div>
                   <div class="resource-describe col-lg-12">
                     <label for="resource-describe">资源描述:</label>
                     <textarea name="resource-describe"
                               placeholder="描述不支持HTML标签；详细的资源描述有机会获得我们的推荐，更有利于他人下载，赚取更多积分。如资源描述不清，有可能审核不通过。"
                               cols="30" rows="10" maxlength="160" v-model="describe"></textarea>
                   </div>
                   <a v-text="describeTip" class="col-lg-12" style="color: red!important;"></a>


                   <div class="col-lg-12">
                     <input type="checkbox" @click="agreePro=!agreePro">
                     <a  data-toggle="modal" data-target="#myModal" @click="showFile=!showFile" >同意ORSP资源共享规则</a>
                   </div>
                   <div class="r-agree-btn col-lg-12">
                     <div type="submit"  @click="uploadFile" style="background-color: red;width: 100px;height: 30px;color: white;text-align: center;line-height: 30px;margin-left: 40px;" >上传</div>
                   </div>
                 </form>


                 <!--上传成功-->
                 <button id="uploada" data-toggle="modal" data-target="#myModal" style="display: none">
                 </button>
                 <div class="modal fade bs-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                   <div class="modal-dialog modal-sm" role="document">
                     <div class="modal-content">
                       <a v-text="uploadMsg"></a>
                     </div>
                   </div>
                 </div>

               </div>
             </div>
    </div>

</template>

<script>
export default {
  name: 'Upload',
  data () {
    return {
      file:'',
      resourceType:'',
      classify:'',
      describe:'',
      need_integral:1,
      title:'',
      agreePro:false,
      showFile:true,
    //  是否可以上传
      uploadFlag:true,
      describeTip:'',
      need_integralTip:'',
      resourceTypeTip:'',
      fileTip:'',
      uploadMsg:"上传成功"
    }
  },
  methods:{
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
        this.uploadFlag=false
        this.fileTip="请选择一个文件"
      }
      if (!this.resourceType) {
        this.uploadFlag=false
        this.resourceTypeTip="请选择资源的类型"
      }
      if (!this.describe) {
        this.uploadFlag=false
        this.describeTip="请填写文件的描述"
      }
      if (!this.need_integral) {
        this.uploadFlag=false
        this.need_integralTip="请填写所需要的积分"
      }
      if (this.agreePro&&this.uploadFlag===true) {
        let config = {
          headers: {'Content-Type': 'multipart/form-data'}
        };
        axios.post(this.global.serverPath+'/file/uploadfile/', this.file, config)
          .then(function (res) {
            //    发送文件信息到后台
            let fileMsg={
              "name":res.data.name,
              "resourceType":this.resourceType,
              "describe":this.describe,
              "need_integral":this.need_integral,
              "upload_user_id":sessionStorage.getItem('currentUserId')
            };
            axios.post(this.global.serverPath+'/file/savefile/', fileMsg, config)
              .then(function (res) {
                $('#uploada')[0].click();
                window.location.reload()
                //    发送文件信息到后台
                //控制台打印请求成功时返回的数据
                this.uploadMsg="上传成功"

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
@import "../../../static/css/upload.css";
button{
  margin-bottom: 0!important;
}

</style>
