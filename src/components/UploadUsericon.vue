<template>
  <div class="mo-div">
    <!--提示模态框-->
    <div class="modal fade" id="tishi" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div v-text="tishi_msg"></div>
          </div>
        </div>
      </div>
    </div>
    <!--头-->
    <div class="aa">
      <div class="txt-file">上传文件</div>
      <span>支持大小不超过 5M 的 jpg、png 图片</span>
    </div>
    <input type="file" name="usericon" id="userimg" @change="aa">
    <!--预览框-->
    <div class="preview">
      <div class="bb"></div>
      <div class="cc">
        <span>预览</span>
        <div class="logo"></div>
      </div>
    </div>
    <!--尾-->
    <div class="footer">
      <div class="cancel" @click="cancel">取消</div>
      <div class="sub" @click="commit">提交</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'UploadUsericon',
  props:["telephone"],
  data () {
    return {
      tishi_msg:'',
      file:"",
      filename:"",
    }
  },
  mounted:function () {

  },
  methods:{
    //图片预览方法
    preview:function(file){
      var img1=new Image();
      var img2=new Image();
      img1.src=URL.createObjectURL(file);
      img2.src=URL.createObjectURL(file);
      var url1=img1.src;
      var url2=img2.src;
      var $img1=$(img1);
      var $img2=$(img2);
      $img1.css({
        "width":"100%",
        "height":"100%",
        "object-fit":"cover",
      });
      $img2.css({
        "width":"100%",
        "height":"100%",
        "object-fit":"cover",
        "border-radius":"50%",

      });
      img1.onload=function(){
        URL.revokeObjectURL(url1);
        $(".preview .bb").empty().append($img1);
      };
      img2.onload=function(){
        URL.revokeObjectURL(url2);
        $(".cc .logo").empty().append($img2);
      }
    },
    aa:function(e){
      //图片预览
      var file=e.target.files[0];
      this.preview(file);
      let obj=new FormData();//创建form对象
      obj.append("usericon",file,file.name);//将file，filename给usericon
      obj.append("chunk",0);
      this.file=obj;//将这个表单对象给file，传给后台
    },
    //提交上面的file,传给后台
    commit:function () {
      var vm=this;
      if (this.file){
        var token=localStorage.getItem("token");
        axios({
          url:this.global.serverPath+"/user/uploadusericon/",
          method:"post",
          data:this.file,
          headers:{
            "content-type":"multipart/form-data",
            "token":token
          },
        })
          .then(function(res){
            if(res.data.code=="218"){
              vm.tishi_msg='头像上传成功';
              $('#tishi').modal("show");
              vm.filename=res.data.filename;
              vm.goMsg(vm.filename);
              vm.cancel();
            }
            if(res.data.code=="418"){
              vm.tishi_msg='头像上传失败';
              $('#tishi').modal("show");
            }
          })
          .catch(function(err){
          })
      }
    },
    goMsg:function(filename){
      this.$emit("getFilename",filename)
    },
    cancel:function () {
      // $('#usericon').modal('hide');
      // $('.modal-backdrop').remove();
      window.location.reload()
    },

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
  .mo-div .aa{
   /*background-color: #3b49ff;*/
    text-align: left;
  }
  .mo-div .txt-file{
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    background: rgba(0,0,0,.7);
    color: #fff;
    border-radius: 4px;
    display: inline-block;
    margin-right: 10px;
  }
  .mo-div input{
    width: 100px;
    height: 30px;
    line-height: 30px;
    position: relative;
    top: -30px;
    opacity: 0;
    z-index: 2;
  }
  .mo-div .preview{
    position: relative;
    top: -15px;
    height: 300px;
    width: 502px;
    border: 1px solid #DDDDDD
  }
  .mo-div .preview .bb{
    float: left;
    width: 300px;
    height: 300px;

  }
  .mo-div .preview .cc{
    float: left;
    height: 300px;
    width: 200px;
    border-left: 1px solid #DDDDDD;
  }
  .mo-div .preview .cc span{
    position: relative;
    top: 10px;
    left: -70px;
    color: #999;
    font-size: 20px;
    font-weight: 700;
  }
  .mo-div .preview .cc .logo{
    width: 100px;
    height: 100px;
    margin: 60px auto;
    background-image: url("../assets/images/avatar_89373029_1496285287409.jpg");
    background-size: cover;
    border-radius: 50%;
    cursor: pointer;
  }
  .mo-div .footer div{
    border-radius: 4px;
    display: inline-block;
    width: 80px;
    color: white;
    height: 30px;
    text-align: center;
    line-height: 30px;
    cursor:pointer;
    font-size: 14px;
    font-weight: 400;
  }
  .mo-div .footer .cancel{
    border: 1px solid #ccc;
    margin-left: 20px;
    margin-right: 30px;
    color: #333;
    background-color: #fff;
  }
  .mo-div .footer .sub{
    background-color: #337AB7;
  }
  .mo-div .footer .sub:hover{
    background-color: #2d5389;
  }
</style>
