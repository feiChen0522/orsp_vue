<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-10">
        <div class="col-md-10">
          <form class="form-horizontal">
            <div class="form-group">
              <label class="col-sm-3 control-label">收货人:</label>
              <div class="col-sm-9">
                <input class="form-control" id="inputpersonal" v-model="concact_name">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label">地址:</label>
              <div class="col-sm-9">
                <div class="row">
                  <select class="col-lg-3" @change="prochange($event)"
                          style="width: 111px;margin-right: 20px;margin-left: 16px;">
                    <option value="请选择城市">请选择省份</option>
                    <option v-for="item in provinceL" :value="item.id">{{item.province_name}}</option>
                  </select>
                  <select class="col-lg-3" style="width: 130px" :model="cityl">
                    <option value="请选择城市">请选择城市</option>
                    <option v-for="item in cityl" :value="item.id">{{item['city_name']}}</option>
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
                    <input type="checkbox"> 设为默认地址
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-3 col-sm-10">
                <button type="submit" class="btn btn-default" @click="addAddress">提交</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {city} from "../../static/css/vue-area";

  export default {
    name: 'AddAddress',
    data() {
      return {
        provinceL: '',
        id: '',
        cityL: '',
        cityl: []
      }
    },

    created: function () {
      let vm = this
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/user/getpcaddress/',
      })
        .then(function (rsp) {
          vm.provinceL = (rsp.data)
          axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/user/getcityaddress/',
          })
            .then(function (rsp) {
              vm.cityL = (rsp.data)
            })
            .catch(function (err) {
              console.log('请求失败', err);
            })
        })
        .catch(function (err) {
          console.log('请求失败', err);
        })

    },

    methods: {
      prochange: function (event) {
        let vm = this;
        vm.id = (event.target.value);
        var city = this.cityL;
        for (var i in city) {
          if (JSON.stringify(city[i].c_p_id)==vm.id){
            vm.cityl.push(city[i])
          }
        }
        if (i['c_p_id'] == vm.id) {
          vm.cityl.push(i)

        }
      }
    }
  }
</script>

<style scoped>
  .a {
    margin-top: 20px;
    margin-bottom: 50px;
    border-bottom: 2px solid #c30;
  }

  div {
    text-align: left;
  }

  select {
    width: 200px;
    height: 35px;
    border: solid 2px #d8d8d8;
  }
</style>
