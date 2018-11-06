<template>
  <div>
    <div class="container-fluid" v-if="!flag">
      <div class="r-collect-container">
        <div class="r-collect-title">我的收藏</div>
        <table>
          <tr>
            <td>商品展示</td>
            <td>商品名称</td>
          </tr>
          <tr v-for="i in all_collect">
            <td>
              <div class="r-img-container">
                <div style="width:70px;height: 70px ">
                  <img :src="i.img_src" alt="">

                </div>
              </div>
            </td>
            <td>{{i.name}}</td>


          </tr>

        </table>
      </div>
    </div>
    <div class="sty1" style="padding:50px" v-if="flag">
      <p style="text-align: center;padding: 20px;color: #8d8d8d">你还未收藏任何商品</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: "MyCollect",
    data() {
      return {
        flag: '',
        all_collect: []
      }
    },
    mounted: function () {
      let vm = this
      axios({
        url: this.global.serverPath+"/resource/seemycollect/",
        data: {
          "user_id": sessionStorage.getItem('currentUserId'),
          "show": true
        },
        method: "post"

      })
        .then(function (res) {
          console.log(res.data)
          if ((res.data).length) {
            vm.all_collect = res.data
            vm.flag =false
          }
          else {
            vm.flag = true
          }

        })
        .catch(function (error) {
          console.log("请求失败：" + error)
        })
    }
  }
</script>

<style scoped>
  @import '../../static/css/clear.css';

  .r-collect-container {
    display: block;
  }

  .r-collect-container > .r-collect-title {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: 500;
    padding-left: 20px;
  }

  .r-collect-container > table {
    width: 80%;
    margin: 0 auto;
    margin-top: 20px;
  }

  .r-collect-container > table tr {
    width: 100%;
    display: flex;

    border: 1px solid black;
    border-bottom: none;
  }

  .r-collect-container > table tr:last-child {
    border-bottom: 1px solid black;
  }

  .r-collect-container > table tr:first-child > td {
    height: 30px;

    line-height: 30px;
  }

  .r-collect-container > table tr:first-child {
    height: 30px;
    line-height: 30px;
  }

  .r-collect-container > table tr > td {
    flex: 1;
    height: 100px;
    line-height: 100px;
    /*border: 1px solid #e6c5c5;*/
    padding-left: 10px;
    text-align: center;
    border-left: none;
  }

  .r-collect-container > table tr > td:first-child {
  }

  .r-collect-container > table tr > td > div {
    background-repeat: no-repeat;
    background-size: contain;
    width: 70%;
    height: 70%;
    margin: 0 auto;
    /*margin-top: 20px;*/
  }

  .r-collect-container > table tr > td > a {
    color: red !important;
    font-size: 14px;
    margin-right: 10px;
  }

  .r-img-container > div img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .sty1 {
    width: 1038px;
    height: 200px;
    border: 0.5px solid gray;
    position: absolute;
    top:100px;
    left: 250px;
  }

</style>
