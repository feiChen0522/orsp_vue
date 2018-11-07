<template>
  <div>
    <div class="container sty" v-if="!flag">
      <div class="row">
        <div class="col-md-10 dblackcolor col-md-offset-1" v-for="(sg,index) of sesourcelist" :key="index">
          <div class="col-md-12 img1" style="text-align: right" @click="delData(index)">删除</div>
          <div class="col-md-2"><img src="../../assets/icon/ziplogo.jpg" alt=""></div>
          <div class="col-md-8" style="margin-top: 10px">
            <div class="col-md-12 title1">
              <router-link to="/" v-text="sg.title"></router-link>
            </div>
            <div class="col-md-12" v-text="sg.describe">
            </div>
            <div class="col-md-12 spa">
              <span class="glyphicon glyphicon-calendar" v-text="sg.upload_time"></span>
              <span class="glyphicon glyphicon-arrow-down">{{sg.download_count}}次</span>
              <span class="glyphicon glyphicon-hand-right">所需积分/R币：{{sg.need_integral}}积分</span></div>
          </div>
          <div class="col-md-12 " style="margin-top:15px">
            <hr style="height:1px;border:none;border-top:1px dashed #d3d3d3;"/>
          </div>
        </div>
      </div>
    </div>
    <div class="sty1" style="padding:50px" v-if="flag">
      <p style="text-align: center;padding: 20px;color: #8d8d8d">你还未上传任何文件，点击下列按钮立即上传</p>
      <div style="text-align: center">

        <a data-toggle="modal" data-target="#myModal_upload">
          <button text="马上发布" style="width: 150px;height: 40px;line-height: 38px;color: #8d8d8d">我要上传</button>
        </a>

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "DownSesource",
    data() {
      return {
        flag: '',
        sesourcelist: [],
        id: '1',
        list: {}
      }
    },
    mounted: function () {
      this.getData();
    },
    methods: {
      getData: function () {
        var vm = this;
        this.id = sessionStorage.getItem('currentUserId');
        axios.get(this.global.serverPath+'/file/showmyupfile/?id=' + vm.id)
          .then(function (response) {
            if ((response.data).length) {
              vm.sesourcelist = (response.data);
              vm.flag = false
            }
            else {
              vm.flag = true
            }
            vm.sesourcelist = (response.data)
          })
          .catch(function (error) {
          })
      },
      delData: function (index) {
        var vm = this;
        axios.post(this.global.serverPath+'/file/delmyupfile/', {'qid': this.id, 'qindex': index})
          .then(function (response) {
            if (response.data['code'] == '213') {
              window.location.reload()
            }


          })
          .catch(function (error) {
          })
      }
    }
  }

</script>

<style scoped>
  .sty {
    width: 1038px;
    margin-top: 30px;
    margin-left: 220px;
  }

  .dblackcolor {
    background-color: #efefef;
    height: 180px;
  }

  div {
    text-align: left;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;

    position: relative;
  }

  .title1 {
    font-weight: 700;
    font-size: 18px;
  }

  span {
    margin-right: 20px
  }

  .spa {
    position: absolute;
    top: 100px;
  }

  .sty1 {
    width: 1038px;
    height: 200px;
    border: 0.5px solid gray;
    position: absolute;
    top: 100px;
    left: 250px;
  }
  .img1{
    background-image: url("../../assets/icon/close.png");
    background-repeat: no-repeat;
    text-indent: 2em;
    overflow: hidden;
    width: 13px;
    height: 13px;
    float: right;
    margin-top: 10px;
    margin-left: 200px;
    display: inline-block
  }

</style>
