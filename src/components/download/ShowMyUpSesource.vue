<template>
  <div class="container sty">
    <div class="row">
      <div class="col-md-10 dblackcolor col-md-offset-1" v-for="(sg,index) of sesourcelist" :key="index">
        <div class="col-md-12" style="text-align: right" @click="delData(index)">删除</div>
        <div class="col-md-2"><img src="../../assets/icon/ziplogo.jpg" alt=""></div>
        <div class="col-md-8" style="margin-top: 10px">
          <div class="col-md-12 title1">
            <router-link to="/" v-text="sg.name"></router-link>
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
</template>

<script>
  export default {
    name: "DownSesource",
    data() {
      return {
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
        this.id=sessionStorage.getItem('currentUserId')
        axios.get('http://localhost:8000/file/showmyupfile/?id=' + vm.id)
          .then(function (response) {
            vm.sesourcelist = (response.data)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      delData: function (index) {
        console.log(index)
        var vm = this;
        axios.post('http://localhost:8000/file/delmyupfile/', {'qid': this.id, 'qindex': index})
          .then(function (response) {
            if (response.data['code'] == '213'){
              window.location.reload()
              alert('删除成功')
            }


          })
          .catch(function (error) {
            console.log(error)
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

</style>
