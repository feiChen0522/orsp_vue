<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-10">
        <div class="col-md-10">
          <form class="form-horizontal">
            <div class="form-group">
              <label class="col-sm-3 control-label">收货人:</label>
              <div class="col-sm-9">
                <input  class="form-control" id="inputpersonal" v-model="concact_name">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label" >地址:</label>
              <div class="col-sm-9">
                <div class="row">
                  <select  class="col-lg-3" v-model="selected"  v-if="provinceL" style="width: 100px;margin-right: 20px;margin-left: 16px;">
                    <option disabled value="请选择省份">请选择省份</option>
                    <option v-for="(item,index) in pcData" :value="item" @change="toSelectPro(index)">{{item.province_name}}</option>
                  </select>
                  <select class="col-lg-3" v-model="citySelected" v-if="cityL" style="width: 100px">
                    <option disabled value="请选择城市">请选择城市</option>
                    <option v-for="(item,index) in currentCity" :value="item">{{item.city_name}}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label">详细地址:</label>
              <div class="col-sm-9">
                <input class="form-control" id="inputaddress">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label">手机号:</label>
              <div class="col-sm-9">
                <input class="form-control" id="inputphone" v-model="concact_telephone">
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-3 col-sm-10">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" v-model="checked"> 设为默认地址
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-3 col-sm-10">
                <button type="button" class="btn btn-default" @click="addAddress">提交</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  // import {province, city} from '../../static/css/vue-area.js'
export default {
  name: 'AddAddress',
  data() {
    return {
      selected: {
        code: 110000,
        name: '北京市',
        parentId: 0
      },

      citySelected: {},
      provinceL: [],
      cityL: [],

      concact_name:"",
      concact_telephone:"",

    //  rrrrrrrrrrrrrrrrrr

    //  所有的省市
      pcData:[],
      currentCity:[],
      checked:false

    }
  },

  watch: {
    selected: function () {
      console.log(this.selected);
      // 清除区县
      // this.citySelected = {}
      // this.cityL = city.filter((item) => item.parentId === this.selected.code)
      this.currentCity=this.selected.city
    }
  },
  created() {
    let vm=this
    axios({
      url:this.global.serverPath+"/user/getcityprovince/",
    })
      .then(function (res) {
        console.log(res.data)
        vm.pcData=res.data

      })
      .catch(function (error) {
        console.log("请求失败",error)
      })
  },
  methods:{
    addAddress:function () {
/*        ins_data={
            "user_id":user_id,
            "concact_name":connect_name,
            "concact_telephone":concact_telephone,
            "city_id":city_id,
            "provice_id":provice_id,
        }
*
* */
      let ins_data={
        "user_id":sessionStorage.getItem('currentUserId'),
        "concact_name":this.concact_name,
        "concact_telephone":this.concact_telephone,
        "city_id":this.citySelected.id,
        "provice_id":this.selected.id,
        "default":this.checked
      }

      axios({
        url:this.global.serverPath+"/user/addaddress/",
        method:"post",
        data:ins_data
      })
        .then(function (res) {
          console.log(res);
          if (res.data.code==="287"){
            alert("添加地址成功");
            window.location.reload()
          } else {
            alert("添加地址失败");
          }
        })
        .catch(function (error) {
          console.log("请求失败：",error)
        })

    },
    toSelectPro:function (index) {
      console.log("省",index)
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .a{
    margin-top: 20px;
    margin-bottom: 50px;
    border-bottom: 2px solid #c30;
  }
  div{
    text-align: left;
  }

  select {
    width: 200px;
    height: 35px;
    border: solid 2px #d8d8d8;
  }
</style>
