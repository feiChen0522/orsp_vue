<template>
  <div class="center">
    <!--下载页面中间标签分类-->
    <div class="download_l" >
      <!--技术领域-->
      <!--@click="getTwoTechnicalField"-->
      <dl >
        <dt>技术领域:</dt>
        <dd>
          <ul @click="getTwoTechnicalField($event)" id="ul1">
            <li><a href="#" id="0">全部</a><div class="img"></div></li>
            <li v-for="i of technicalField.slice(0,9)">
              <a href="#" v-text="i.name" :id="i.id" class="a"></a><div class="img"></div>
            </li>
          </ul>
          <div class="twofield" id="twofield1">
            <li v-for="i of twoTechnicalField"><a href="#" v-text="i.name" :id="i.id"></a></li>
          </div>
          <ul @click="getTwoTechnicalField($event)" id="ul2">
            <li v-for="i of technicalField.slice(9)">
              <a href="#" v-text="i.name" :id="i.id" class="a"></a><div class="img"></div>
            </li>
          </ul>
          <div class="twofield" id="twofield2">
            <li v-for="i of twoTechnicalField"><a href="#" v-text="i.name" :id="i.id"></a></li>
          </div>
        </dd>
      </dl>
      <!--资源类型-->
      <dl>
        <dt class="border-div">资源类型:</dt>
        <dd>
          <ul>
            <li><a href="#">全部</a></li>
            <li v-for="i of resourceType"><a href="#" v-text="i.name" :id="i.id">全部</a></li>
          </ul>
        </dd>
      </dl>
    </div>
    <!--资源显示层-->
    <div class="con-2">
      <!--代码资源、最新上传-->
      <nav class="navbar navbar-default" style="border-radius: 0; margin-bottom: 0">
        <div class="container" style="padding-left: 0;padding-right: 0; width: 850px;">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">代码资源 <span class="sr-only">(current)</span></a></li>
            <li><a href="#">最新上传</a></li>
          </ul>
        </div>
      </nav>
      <!--动态的渲染出资源-->
      <div class="res-father">
        <!--循环开始-->
        <!--1-->
        <div class="res-model" v-for="i in files">
          <div class="img-div">
            <img src="../assets/download/xlsx.png" alt="">
          </div>
          <div class="describe">
            <p v-text="i.title"></p>
            <p>
              <span class="sp1">上传者：</span><span v-text="i.upload_user"></span>
              <span class="sp1">上传时间：</span><span v-text="i.upload_time"></span>

              <span class="glyphicon glyphicon-download-alt" style="float: right;margin-right: -10px" :data-name="i.name" @click="download(i.name)"></span>

              <span class="sp1">积分/O币：</span><span v-text="i.need_integral"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ORSPDownloadCenter',
    data () {
      return {
        files:[{

        }],
        technicalField:'',
        twoTechnicalFieldALL:'',
        twoTechnicalField:'',
        resourceType:'',
      }
    },
    created:function(){
      this.getTechnicalField();
      this.getResourceType();
      this.showAllFile();
    },
    methods:{
      //拿到一级技术领域标签
      getTechnicalField:function(){
        let vm=this;
        axios({
          url:this.global.serverPath+"/file/gettechnicalfield/",
          method:'get',
        })
          .then(function (res) {
            vm.technicalField=res.data;
            console.log(vm.technicalField);
          });

      },
      //拿到二级技术领域标签
      getTwoTechnicalField:function(e){
        if(event.target.tagName=="A"){
          var id=event.target.id;
          console.log(id);
          if(event.currentTarget.id=="ul1"){
            $('#twofield2').css({
              display:"none"
            });
            $('#twofield1').css({
              display:"block"
            })
          }
          if(event.currentTarget.id=="ul2"){
            $('#twofield1').css({
              display:"none"
            });
            $('#twofield2').css({
              display:"block"
            })
          }
          if(event.target.id=="0"){
            $('#twofield1').css({
              display:"none"
            });
            $('#twofield2').css({
              display:"none"
            })
          }
          let list_div=document.querySelectorAll('.download_l dd ul li div');
          for(var i=0;i<list_div.length;i++){
            list_div[i].style.opacity=0;
          }
          if(event.target.id!="0"){
            list_div[id].style.opacity=1;
          }
          let vm=this;
          axios({
            url:this.global.serverPath+"/file/gettwotechnicalfield/?id="+id,
            method:'get',
          })
            .then(function (res) {
              vm.twoTechnicalField=res.data;
              console.log(999,vm.twoTechnicalField);
            })

        }
      },
      //拿到所有资源类型
      getResourceType:function(event){
        let vm=this;
        axios({
          url:this.global.serverPath+"/file/getresourcetype/",
          method:"get",
        })
          .then(function(res){
            vm.resourceType=res.data;
            console.log(vm.resourceType);
          })
      },
      //拿到所有已上传的文件
      showAllFile:function(){
        let vm=this;
        let url=this.global.serverPath+"/file/showallfile/";
        axios({
          method: 'get',
          url: url,
        })
          .then(function (rsp) {
            console.log("拿到的文件",rsp.data);
            vm.files=rsp.data
          })
          .catch(function (err) {
            console.log('请求失败', err);
          })
      },
      //下载资源
      download: function (name) {
        var vm = this;
        // axios.post(this.global.serverPath+'/file/downloadfile',url: 'api/user/', {'fname': this.fname})
        axios({
          method: 'post',
          url: this.global.serverPath+'/file/downloadfile/',
          data: {
            fname: name
          },
          responseType: 'blob'
        }).then(function (response) {
          const content = response.data;
          const blob = new Blob([content]);
          const fileName = name;
          if ('download' in document.createElement('a')) { // 非IE下载
            const elink = document.createElement('a');
            elink.download = fileName;
            elink.style.display = 'none';
            elink.href = URL.createObjectURL(blob);
            document.body.appendChild(elink);
            elink.click();
            URL.revokeObjectURL(elink.href);// 释放URL 对象
            document.body.removeChild(elink)
          } else { // IE10+下载
            navigator.msSaveBlob(blob, fileName)
          }
        })
          .catch(function (error) {
            console.log(error)
          })
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .center{
    width: 850px;
    float: left;
    min-height: 500px;
  }
  dl,dd,dt,dl,li{
    padding: 0;
    margin: 0;
  }
  .download_l{
    width: 850px;
    padding: 10px 0 0 0;
    background-color: white;
  }
  .download_l dl{
    overflow: hidden;
    padding-bottom: 20px;
  }
  .download_l dl:nth-child(1){
    border-bottom: dashed 1px #e6e6e6;
  }
  .download_l dl dt{
    width: 78px;
    display: block;
    position: relative;
    text-align: right;
    top: 26px;
    color: #999;
    font-size: 14px;
    font-weight: 400;
  }
  .download_l dl dd{
    margin-left: 80px;
    display: block;
    width: 720px;
  }
  .download_l dd ul{
    line-height: 1.5;
    padding: 5px 10px;
    min-height: 30px;
    /*background-color: #3b49ff;*/
  }
  .download_l dd .twofield{
    background-color: #F7F8F9;
    padding: 10px 0;
    margin-left: 15px;
    width: 650px;
    min-height: 50px;
    line-height: 30px;
    text-align: left;
    display: none;
  }
  .download_l dd .twofield li{
    list-style: none;
    display: inline-block;
    padding: 0;
  }
  .download_l dd .twofield a{
    margin-left: 20px;
  }
  .download_l dd ul,.download_l dd ul li{
    list-style: none;
  }
  .download_l dd ul li{
    float: left;
    margin: 0 8px 8px;
  }
  .download_l dd ul li a{
    text-decoration: none;
    cursor: pointer;
    color: black;
  }
  .download_l dd ul li div{
    background-image: url("../assets/images/triangle.jpg");
    width: 10px;
    height: 6px;
    position: relative;
    top: 9px;
    opacity: 0;
    left: 45%;
  }
  .con-2{
    width: 850px;
    margin-top:20px;
  }
  .con-2 .res-model{
    width: 100%;
    height: 65px;
    padding: 8px 19px;
    background-color: #ffffff;
    border-bottom: dashed 1px #e6e6e6;
  }
  .con-2 .res-model .img-div{
    width: 45px;
    height: 48px;
    cursor: pointer;
    float: left;
  }
  .con-2 .res-model .img-div img{
    width: 42px;
    height: 48px;
  }
  .con-2 .res-model .describe{
    width: 750px;
    height: 100%;
    float: left;
    margin-left: 10px;
    cursor: pointer;
  }
  .con-2 .res-model .describe p{
    text-align: left;
    margin: 0;
  }
  .con-2 .res-model .describe p:nth-child(1){
    padding-bottom: 6px;
    font-size: 16px;
    color: #333;
    font-weight: 700;
    width: 100%;
  }
  .con-2 .res-model .describe p:nth-child(2){
    position: relative;
  }
  .con-2 .res-model .describe p:nth-child(2) span.sp1{
    color: #999;
    margin-left: 10px;
  }
  .con-2 .res-model .describe p:nth-child(2) span:nth-child(1){
    margin-left: 0;
  }
  .con-2 .res-model .describe p:nth-child(2) span:nth-last-child(1){
    color: #ff9358;
    font-size: 32px;
    line-height: 32px;
    display: inline-block;
    position: absolute;
    top: -10px;
    left: 720px;
  }
  .con-2 .res-model .describe p:nth-child(2) span:nth-last-child(2){
    position: absolute;
    left: 640px;
  }

</style>
