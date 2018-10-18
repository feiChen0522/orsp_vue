<template>
    <div>

      <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
        上传文件
      </button>

      <!-- Modal -->
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">上传文件</h4>
            </div>
            <div class="modal-body">
              <div class="upload-container">

                <form @submit.prevent="submit" id="aaa">
                  <div class="input-container col-lg-12">
                    <input type="file" id="file" name="file" @change="fileChange">
                  </div>
                  <div class="col-lg-12">
                    你可以上传小于200M的压缩包
                  </div>
                  <!--<div class="col-lg-12">-->
                    <!--<label for="sel_primary">资源类型：</label>-->
                    <!--<select name="sel_primary" id="sel_primary0">-->
                      <!--<option value>请选择</option>-->
                      <!--<option value="1">移动开发</option>-->
                      <!--<option value="2">开发技术 </option>-->
                      <!--<option value="3">课程资源 </option>-->
                    <!--</select>-->
                  <!--</div>-->
                  <div class="col-lg-12">
                    <label for="sel_primary">所属分类：</label>
                    <select name="sel_primary" id="sel_primary1">
                      <option value>请选择</option>
                      <option value="1">移动开发</option>
                      <option value="2">开发技术 </option>
                      <option value="3">课程资源 </option>
                    </select>
                  </div>
                  <!--<p>资源标签</p>-->
                  <div class="col-lg-12">
                    <label for="sel_primary">资源分数：</label>
                    <select name="sel_primary" id="sel_primary2">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3 </option>
                      <option value="4">4 </option>
                    </select>
                  </div>
                  <div class="resource-describe col-lg-12">
                    <label for="resource-describe">资源描述:</label>
                    <textarea name="resource-describe"
                              placeholder="描述不支持HTML标签；详细的资源描述有机会获得我们的推荐，更有利于他人下载，赚取更多积分。如资源描述不清，有可能审核不通过。"
                              cols="30" rows="10" maxlength="160"></textarea>
                  </div>

                  <div class="col-lg-12">
                    <router-link to="/"  data-toggle="modal" data-target="#myModal" >同意ORSP资源共享规则</router-link>
                  </div>
                  <div class="r-agree-btn col-lg-12">
                    <input type="submit" value="上传">
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>



</template>

<script>
export default {
  name: 'Upload',
  data () {
    return {
      file:'',
      resourceType:'',
      classify:'',
      describe:'',
      need_integral:'',
      title:''
    }
  },
  methods:{
    submit:function (e) {

    },
    fileChange:function (e) {
      this.file = e.target.files[0];
      console.log(this.file);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../../static/css/upload.css";
</style>
