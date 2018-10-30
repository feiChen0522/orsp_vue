<template>
  <div class="container" style="padding: 0">
    <orspdownload-center></orspdownload-center>
    <orspdownload-right></orspdownload-right>
  </div>
</template>

<script>
export default {
  name: 'ORSPDownload',
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
      // axios.post('http://localhost:8000/file/downloadfile',url: 'api/user/', {'fname': this.fname})
      axios({
        method: 'post',
        url: 'http://localhost:8000/file/downloadfile/',
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
  /*dl,dd,dt,dl,li{*/
    /*padding: 0;*/
    /*margin: 0;*/
  /*}*/
  /*.download_l{*/
    /*width: 850px;*/
    /*padding: 10px 0 0 0;*/
    /*background-color: white;*/
  /*}*/
  /*.download_l dl{*/
    /*overflow: hidden;*/
    /*padding-bottom: 20px;*/
  /*}*/
  /*.download_l dl:nth-child(1){*/
    /*border-bottom: dashed 1px #e6e6e6;*/
  /*}*/
  /*.download_l dl dt{*/
    /*width: 78px;*/
    /*display: block;*/
    /*position: relative;*/
    /*text-align: right;*/
    /*top: 26px;*/
    /*color: #999;*/
    /*font-size: 14px;*/
    /*font-weight: 400;*/
  /*}*/
  /*.download_l dl dd{*/
    /*margin-left: 80px;*/
    /*display: block;*/
    /*width: 720px;*/
  /*}*/
  /*.download_l dd ul{*/
    /*line-height: 1.5;*/
    /*padding: 5px 10px;*/
    /*min-height: 30px;*/
    /*!*background-color: #3b49ff;*!*/
  /*}*/
  /*.download_l dd .twofield{*/
    /*background-color: #F7F8F9;*/
    /*padding: 10px 0;*/
    /*margin-left: 15px;*/
    /*width: 650px;*/
    /*min-height: 50px;*/
    /*line-height: 30px;*/
    /*text-align: left;*/
    /*display: none;*/
  /*}*/
  /*.download_l dd .twofield li{*/
    /*list-style: none;*/
    /*display: inline-block;*/
    /*padding: 0;*/
  /*}*/
  /*.download_l dd .twofield a{*/
    /*margin-left: 20px;*/
  /*}*/
  /*.download_l dd ul,.download_l dd ul li{*/
    /*list-style: none;*/
  /*}*/
  /*.download_l dd ul li{*/
    /*float: left;*/
    /*margin: 0 8px 8px;*/
  /*}*/
  /*.download_l dd ul li a{*/
    /*text-decoration: none;*/
    /*cursor: pointer;*/
    /*color: black;*/
  /*}*/
  /*.download_l dd ul li div{*/
    /*background-image: url("../assets/images/triangle.jpg");*/
    /*width: 10px;*/
    /*height: 6px;*/
    /*position: relative;*/
    /*top: 9px;*/
    /*opacity: 0;*/
    /*left: 45%;*/
  /*}*/
  /*.container .con-2{*/
    /*width: 850px;*/
    /*margin-top:20px;*/
  /*}*/
  /*.container .con-2 .res-model{*/
    /*width: 100%;*/
    /*height: 65px;*/
    /*padding: 8px 19px;*/
    /*background-color: #ffffff;*/
    /*border-bottom: dashed 1px #e6e6e6;*/
  /*}*/
  /*.container .con-2 .res-model .img-div{*/
    /*width: 45px;*/
    /*height: 48px;*/
    /*cursor: pointer;*/
    /*float: left;*/
  /*}*/
  /*.container .con-2 .res-model .img-div img{*/
    /*width: 42px;*/
    /*height: 48px;*/
  /*}*/
  /*.container .con-2 .res-model .describe{*/
    /*width: 750px;*/
    /*height: 100%;*/
    /*float: left;*/
    /*margin-left: 10px;*/
    /*cursor: pointer;*/
  /*}*/
  /*.container .con-2 .res-model .describe p{*/
    /*text-align: left;*/
    /*margin: 0;*/
  /*}*/
  /*.container .con-2 .res-model .describe p:nth-child(1){*/
    /*padding-bottom: 6px;*/
    /*font-size: 16px;*/
    /*color: #333;*/
    /*font-weight: 700;*/
    /*width: 100%;*/
  /*}*/
  /*.container .con-2 .res-model .describe p:nth-child(2){*/
    /*position: relative;*/
  /*}*/
  /*.container .con-2 .res-model .describe p:nth-child(2) span.sp1{*/
    /*color: #999;*/
    /*margin-left: 10px;*/
  /*}*/
  /*.container .con-2 .res-model .describe p:nth-child(2) span:nth-child(1){*/
    /*margin-left: 0;*/
  /*}*/
  /*.container .con-2 .res-model .describe p:nth-child(2) span:nth-last-child(1){*/
    /*color: #ff9358;*/
    /*font-size: 32px;*/
    /*line-height: 32px;*/
    /*display: inline-block;*/
    /*position: absolute;*/
    /*top: -10px;*/
    /*left: 720px;*/
  /*}*/
  /*.container .con-2 .res-model .describe p:nth-child(2) span:nth-last-child(2){*/
    /*position: absolute;*/
    /*left: 640px;*/
  /*}*/
  /*.right{*/
    /*width: 300px;*/
    /*min-height: 500px;*/
    /*float: right;*/
  /*}*/
  /*.container .center{*/
    /*float: left;*/
  /*}*/

</style>
