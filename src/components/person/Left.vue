<template>
  <div class="left-container">
    <div class="r-left fl">
      <!--消息中心-->
      <dl>
        <dt>消息中心 <span
          :class="[{'glyphicon glyphicon-chevron-right':isActiveRight[0]},{'glyphicon glyphicon-arrow-down':isActiveDown[0]}]" data-id="0"
          @click="changeClass"></span></dt>
        <dd :style="{'height':ulHeight[0]+'px'}">
          <transition name="fade"
                      enter-active-class="animated zoomIn"
                      leave-active-class="animated zoomOut"
          >
            <!--enter-active-class="animated slideOutDown"-->
            <!--leave-active-class="animated slideInUp"-->

            <ul class="slideUl"   v-if="show[0]">
              <li>
                <router-link to="">个人信息</router-link>
              </li>
              <li>
                <router-link to=""> 我的订单</router-link>
              </li>
              <!--<li>我的评价</li>-->
              <li>
                <router-link to="">我的地址</router-link>
              </li>
            </ul>
          </transition>
        </dd>
      </dl>
      <dl>
      <dt>我是卖家 <span
        :class="[{'glyphicon glyphicon-chevron-right':isActiveRight[1]},{'glyphicon glyphicon-arrow-down':isActiveDown[1]}]" data-id="1"
        @click="changeClass"></span></dt>
      <dd :style="{'height':ulHeight[1]+'px'}">
        <transition name="fade"
                    enter-active-class="animated zoomIn"
                    leave-active-class="animated zoomOut"
        >
      <ul v-if="show[1]">
      <li><router-link to="">我发布的商品</router-link></li>
      <li><router-link to="">交换请求</router-link></li>
      <!--<li>我的地址</li>-->
      <!--<li>个人信息</li>-->
      </ul>
        </transition>
      </dd>
      </dl>
      <!--我是买家-->
      <dl>
      <dt>我是买家
        <span
          :class="[{'glyphicon glyphicon-chevron-right':isActiveRight[2]},{'glyphicon glyphicon-arrow-down':isActiveDown[2]}]" data-id="2"
          @click="changeClass"></span>
      </dt>
      <dd :style="{'height':ulHeight[2]+'px'}">
        <transition name="fade"
                    enter-active-class="animated zoomIn"
                    leave-active-class="animated zoomOut"
        >
      <ul v-if="show[2]">
      <li><router-link to="">已买到的商品</router-link></li>
      <li><router-link to="">我的收藏</router-link></li>
      <!--<li>我的出价</li>-->
      <!--<li>浏览历史</li>-->
      </ul>
        </transition>
      </dd>
      </dl>
      <!--ORSP下载-->
      <dl>
      <dt>ORSP下载
        <span
          :class="[{'glyphicon glyphicon-chevron-right':isActiveRight[3]},{'glyphicon glyphicon-arrow-down':isActiveDown[3]}]" data-id="3"
          @click="changeClass"></span>
      </dt>
      <dd :style="{'height':ulHeight[3]+'px'}">
        <transition name="fade"
                    enter-active-class="animated zoomIn"
                    leave-active-class="animated zoomOut"
        >
      <ul v-if="show[3]">
      <li><router-link to="">我的下载</router-link></li>
      <li><router-link to="">我的上传</router-link></li>
      <!--<li>个人信息</li>-->
      <li><router-link to="">我要上传</router-link></li>
      </ul>
        </transition>
      </dd>
      </dl>
    </div>

  </div>
</template>

<script>


  export default {
    name: 'PersonLeft',
    data() {
      return {
        isActiveRight:[false,false,false,false],
        isActiveDown:[true,true,true,true],
        show: [true,true,true,true],
        ulHeight:[96,64,64,96]
      }
    },
    methods: {
      changeClass: function (e) {
        // this.isActiveRight[parseInt(e.target.dataset.id)]=!this.isActiveRight[parseInt(e.target.dataset.id)]
        let id=parseInt(e.target.dataset.id);
        this.$set( this.isActiveRight, parseInt(id), !this.isActiveRight[parseInt(id)] )
        this.$set( this.isActiveDown, parseInt(id), !this.isActiveDown[parseInt(id)] )
        this.$set( this.show, parseInt(id), !this.show[parseInt(id)] )

        // this.isActiveDown[parseInt(id)]=!this.isActiveDown[parseInt(id)]
        // this.show[parseInt(id)]=!this.show[parseInt(id)]
        console.log(this.isActiveRight);
        console.log(this.isActiveDown);
        console.log(this.show);
        let height=0
        console.log('id',id==0)
        if (id==1){
          height=this.ulHeight[parseInt(id)]==64?0:64
        } else if (id==2) {
          height=this.ulHeight[parseInt(id)]==64?0:64

        }
        else if (id==3||id==0) {
          height=this.ulHeight[parseInt(id)]==96?0:96
          console.log(2,height);
        }
        console.log(1,height);
        this.$set( this.ulHeight, parseInt(id),height);
        console.log(11111111,this.ulHeight);
        // height=this.ulHeight[parseInt(id)]==96?0:96
        // if (this.ulHeight=='96') this.ulHeight=0
        console.log(e.target)

      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../../static/css/clear.css";

.fade-enter-active, .fade-leave-active {
  transition: height 2.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: 0;
}

a{
  color: #333333 !important;
}

  .r-left {
    width: 140px;
    margin-left: 70px;
    display: flex;
    flex-direction: column;
    border: 1px solid #6a5b5b2e;
  }

  .r-left > dl {
    flex: 1;

  }

  .r-left > dl:first-child {
    margin-top: 0px;
  }

  .r-left > dl:nth-child(2) {
  }

  .r-left > dl:nth-child(3) {
  }

  .r-left > dl:nth-child(4) {
  }

  .r-left > dl > dt {
    background-color: #f6f6f6;
    height: 25px;
    color: #3333338a;
  }

  .r-left > dl > dt > img {
    margin-left: 15px;
    top: 10px;
    position: relative;
    width: 14px;
    height: 14px;
  }

  .r-left > dl > dd {
    height: 0;
  }
  .r-left > dl > dd ul{
    /*position: relative;*/
  }
  .r-left > dl > dd li {
    height: 32px;
    line-height: 32px;
  }

  .r-left > dl > dd li:hover {
    background-color: #e0efff;
    color: #ffd7c3 !important;
  }

  .r-left > dl > dt, dd {
    text-align: center;
    line-height: 32px;
    height: 32px;
    cursor: pointer;
  }
</style>
