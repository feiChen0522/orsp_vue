<template>
  <div class="container">

    <div id="test"></div>
    </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'test',
  data() {
    return {
      show: true
    }
  }
}
// var count=12;
// $("#test").page({count:12,pageSize:1,skipPart:true});
// $(document).on('click','#test .pagination_search',function(){
//   if($(document).find("#test .pagination_change_page").val()==""){
//     alert("跳转页码不能为空");
//   }else{
//     var num=parseInt($(document).find("#test .pagination_change_page").val());
//     $("#test").page({count:12,pageNo:num,pageSize:1,skipPart:true});
//   }
// });
//
// $(document).on("click","#test .pagination li",function(){
//   var num=$(this).attr("num");
//   if($(this).attr("class")=="disabled"){
//     return false;
//   }
//   if(num==0 || num==(count+1)){
//
//   }else{
//     $("#test").page({count:12,pageNo:num,pageSize:1,skipPart:true});
//   }
// });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*.slide-fade-enter-active {*/
    /*transition: all .3s ease;*/
  /*}*/
  /*.slide-fade-leave-active {*/
    /*transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
  /*}*/
  /*.slide-fade-enter, .slide-fade-leave-to*/
    /*!* .slide-fade-leave-active for below version 2.1.8 *! {*/
    /*transform: translateX(10px);*/
    /*opacity: 0;*/
  /*}*/
</style>
