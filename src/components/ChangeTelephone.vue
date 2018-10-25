<template>
  <div class="mo-div">
    <ul>
      <li>
        <span class="col-md-4" style="padding-left: 0">原手机号：</span>
        <input type="text" class="col-md-8" style="text-align: left; width: 200px; padding-left: 0;padding-right: 0" maxlength="8" v-model="old_telephone" readonly>
      </li>
      <li>
        <span class="col-md-4" style="padding-left: 0">新手机号：</span>
        <input type="text" class="col-md-8" style="text-align: left; width: 200px; padding-left: 0;padding-right: 0" maxlength="8" @mouseout="submit(new_telephone)" v-model="new_telephone">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ChangeTelephone',
  props:["old_telephone"],
  data () {
    return {
      new_telephone:""
    }
  },
  mounted:function () {
    console.log("old_telephone",this.old_telephone);
  },
  methods:{
    submit:function (new_telephone) {
      // alert(new_telephone);
      this.$emit("NewTelephone",new_telephone)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mo-div{
    height: 100px;
  }
  .mo-div ul,.mo-div ul li{
    list-style: none;
  }
  .mo-div ul li{
    font-size: 12px;
    color: #333;
    margin-left: 40px;
    margin-top: 17px;
    height: 40px;
  }
  .mo-div ul li span:nth-child(1){
    text-align: right;
  }

</style>
