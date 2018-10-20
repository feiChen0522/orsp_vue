/**
* 图片放大镜组件
*/
<template>
  <div class="comp-magnifier" @mousemove.stop="mouseOver" @mouseout.stop="mouseOut">
    <!--初始图片-->
    <img class="goodPic" ref="img" :src="src" :width="width" :height="height" alt="">
    <!--放大镜图标-->
    <img class="glass" src="../assets/images/g-glass.png" width="17px" height="17px">
    <!--放大镜捕获位置-->
    <span class="ks-imagezoom-lens" :class="{show:isShow}"
          :style="{'height':toPx(height/magnification),'width':toPx(width/magnification),'left':toPx(position(x,width)),'top':toPx(position(y,height))}"></span>
    <!--放大效果展示层-->
    <div class="magnifier" :class="{show:isShow}"
         :style='{"width":toPx(width),"height":toPx(height),"left":toPx(width+10)}'>
      <img :src="src" :height="height*magnification" :width="width*magnification"
           :style="{'top': toPx(-position(y,height)*magnification),'left':toPx(-position(x,width)*magnification)}">
    </div>
  </div>
</template>

<script>
  import blankImage from "../assets/images/defaultImg.png";

  export default {
    name: "PhotoLoupe",
    props: {
      //图片路径
      src: {
        type: String,
        required: true,
        default: blankImage
      },
      //图片宽
      width: {
        type: [String, Number],
        default: 400
      },
      //图片高
      height: {
        type: [String, Number],
        default: 400
      },
      //放大倍数
      magnification: {
        type: [String, Number],
        default: 2
      }
    },
    data() {
      return {
        x: 0,
        y: 0,
        isShow: false
      };
    },
    computed: {},
    created: function () {
      //容错机制，放大倍数必须大于等于1，可以为小数
      if (this.magnification < 1) this.magnification = 1
    },
    methods: {
      /**
       * 计算放大区域捕获框距离头部或者左侧的距离（图片放大位置也是由此计算而来）
       * @param {Object} coord    纵/横坐标
       * @param {Object} direction    高/宽
       */
      position: function (coord, direction) {
        var magnification = this.magnification    //放大倍数
        coord = -coord                            //坐标值转换
        var heightOrWidth = ""                    //计算宽还是高
        //根据放大倍数计算最小单位宽度，在图片四周该距离内，对应方向移动，图片放大位置不会变化
        if (direction == 'width') {
          heightOrWidth = this.width / (magnification * 2)
        } else {
          heightOrWidth = this.height / (magnification * 2)
        }
        //计算放大区域捕获框距离头部或者左侧的距离（图片放大位置也是由此计算而来）
        if (coord <= heightOrWidth) {
          return 0
        } else if (coord > heightOrWidth && coord < (heightOrWidth * (magnification * 2 - 1))) {
          return coord - heightOrWidth
        } else {
          return heightOrWidth * (magnification * 2 - 2)
        }
      },
      //添加px单位
      toPx: function (num) {
        return num + "px"
      },
      //图片移入获取光标相对位置坐标
      mouseOver(e) {
        this.isShow = true;
        //获取在纵向的滚动距离
        var currentY =
          window.scrollY ||
          document.documentElement.scrollTop ||
          window.pageYOffset ||
          document.body.scrollTop
        //获取光标在图片上的相对坐标 注：getBoundingClientRect是兼容IE9的写法
        this.x = this.$refs.img.getBoundingClientRect().left - window.event.clientX;
        this.y = this.$refs.img.getBoundingClientRect().top - window.event.clientY - currentY;
      },
      //光标移出，放大镜关闭
      mouseOut() {
        this.isShow = false;
      }
    }
  };
</script>

<style  scoped>
  .comp-magnifier {
    position: relative;
  }

  .comp-magnifier img.goodPic {
    position: relative;
    border: 1px solid #CCC;
  }
  .comp-magnifier img.goodPic:hover {
    cursor: Move;
  }

  .ks-imagezoom-lens {
    position: absolute;
    top: 0px;
    left: 0px;
    background-attachment: scroll;
    background-repeat: repeat;
    cursor: move;
    z-index: 1;
    overflow: hidden;
    background-position: 0 0;
    background-color: transparent;
    background-image: url(../assets/images/mask.png);
    display: none;
  }

  .ks-imagezoom-lens.show {
    display: block;
  }

  .glass {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }

  .comp-magnifier:hover .glass{
      display: none;
  }

  .magnifier {
    display: none;
    position: absolute;
    top: -1px;
    z-index: 10;
    border: 1px solid #CCC;
    overflow: hidden;
  }

  .magnifier img {
    position: absolute;
  }

  .magnifier img.show {
    display: block;
  }

</style>
