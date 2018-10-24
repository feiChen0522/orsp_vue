<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-10 a1">
        <div class="col-md-12">
          <div class="col-md-3"><h3>收货地址薄</h3></div>
          <div class="col-md-3">
            <button type="button" class="btn btn-default sp2" data-toggle="modal" data-target="#myModal_Address">新增地址
            </button>
          </div>
        </div>
        <div class="col-md-10">
          <div class="col-md-12 a2"></div>


          <div class="col-md-11 a" v-for="(i,index) in address">
            <div class="col-md-2 c"><span v-if="!i.default">曾用地址</span><span
              v-if="i.default">默认地址</span></div>
            <div class="col-md-9"></div>
            <div class="col-md-1">
              <a href="" class="del1">删除</a>
            </div>
            <div class="col-md-12 sp1">
              <span class="col-md-2">收货人:</span>
              <div class="col-md-8" v-text="i.concact_name"></div>
            </div>
            <div class="col-md-12 sp1">
              <span class="col-md-2">所在地区:</span>
              <div class="col-md-8" v-text="i.provice_id+'   '+i.city_id"></div>
            </div>
            <div class="col-md-12 sp1">
              <span class="col-md-2">详细地址:</span>
              <div class="col-md-8">q办公楼一层</div>
            </div>
            <div class="col-md-12 sp1">
              <span class="col-md-2">手机号码:</span>
              <div class="col-md-8" v-text="i.concact_telephone">13555555555</div>
            </div>
            <div class="col-md-12">
              <div class="col-md-11 a11"><a href="#" @click="onchange(index,i.user_id,i.id)">设为默认地址</a></div>
              <div class="col-md-1 "><a href="" class="x1">编辑</a></div>
            </div>
          </div>
        </div>
      </div>

      <!--新增地址模态框-->
      <div class="modal fade" id="myModal_Address" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">

            <div class="modal-body">
              <addaddress-div></addaddress-div>
            </div>

          </div>
        </div>
      </div>
      <!-- Button trigger modal -->
      <!-- Modal -->
      <!--<div class="modal fade" id="myModal_Address" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">-->
      <!--<div class="modal-dialog" role="document">-->
      <!--<div class="modal-content">-->
      <!--<div class="modal-header">-->
      <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>-->
      <!--<h4 class="modal-title" id="myModalLabel">新增收货地址</h4>-->
      <!--</div>-->
      <!--<div class="modal-body">-->
      <!--11111111111-->
      <!--</div>-->

      <!--</div>-->
      <!--</div>-->
      <!--</div>-->


      <!--模态框结束-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Address',
    data() {
      return {
        flag: '',
        address: [],
        userid: '',
        addressdefault: ''
      }
    },
    created: function () {
      let that = this
      let token = localStorage.getItem('token')

      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/user/judgetoken/',
        headers: {'token': token},
      })
        .then(function (rsp) {
          that.useid = rsp.data.id

          axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/user/getaddresbyid/',
            data:{
              "id":that.useid
            }
          })
            .then(function (rsp) {
              that.address = (rsp.data)
              console.log(that.address)
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
      onchange: function (index,userid,id) {
        // let id =sessionStorage.getItem('currentUserId')
        axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/user/changeaddress/',
          data: {'index': index,'userid':userid,'id':id},
        })
          .then(function (rsp) {
            location.replace(location)
            alert('sssssss')
            console.log(rsp.data)
          })
          .catch(function (err) {
            console.log('请求失败', err);
          })
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .a1 {
    text-align: left;
  }

  .a11 {
    text-align: right;
  }

  .a {
    border: solid 1px gainsboro;
    margin-left: 40px;
    height: 260px;
  }

  .sp1 {
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 80px;
  }

  .sp2 {
    margin-top: 17px;
    width: 150px;
    font-size: 16px;
  }

  .a2 {
    margin-top: 20px;
    margin-bottom: 50px;
    border-bottom: 2px solid #c30;
  }

  .del1 {
    background-image: url("../assets/icon/close.png");
    background-repeat: no-repeat;
    text-indent: 2em;
    overflow: hidden;
    width: 13px;
    height: 13px;
    margin-top: 10px;
    margin-left: 40px;
    display: inline-block
  }

  a:hover {
    text-decoration: none;
  }

  .c {
    width: 100px;
    height: 30px;
    background-color: #ffaa45;
    color: white;
    line-height: 30px;
    text-align: center;
    margin-top: 5px;
  }
</style>
