<template>
  <div class="tTable container body-content">
    <div class="form-group">
      <div class="form-group">
        <div class="pager" id="pager">
          <span v-for="item in count+1" :key="item">
            <span v-if="item===1" class="btn btn-default" @click="showPage(1,$event)" :class="{'disabled':fDisabled}">
                首页
            </span>
            <span v-if="item===1" class="btn btn-default" @click="showPage(pageCurrent-1,$event)" :class="{'disabled':fDisabled}">
                上一页
            </span>
            <span v-if="item===1" class="btn btn-default " @click="showPage(item,$event)"
                  :class="{red_white:item==pageCurrent}"
            >
                {{item}}
            </span>
            <span v-if="item===1&&item<showPagesStart-1" class="btn btn-default disabled ">
              ...
            </span>
            <span v-if="item>1&&item<=count-1&&item>=showPagesStart&&item<=showPageEnd&&item<=count"
                  class="btn btn-default" @click.prevent.stop="showPage(item,$event)"
                  :class="{red_white:item==pageCurrent}"
            >
                {{item}}
            </span>
            <span v-if="item===count&&item>showPageEnd+1" class="btn btn-default disabled">
                ...
            </span>
            <span v-if="item===count" class="btn btn-default 1" @click="showPage(item,$event)" :style="{'display':pageShow}"
                  :class="{red_white:item==pageCurrent}"
            >
                {{item}}
            </span>
            <span v-if="item===count" class="btn btn-default" @click="showPage(pageCurrent+1,$event)" :class="{'disabled':lDisabled}">
                下一页
            </span>
            <span v-if="item===count" class="btn btn-default" @click="showPage(count,$event)" :class="{'disabled':lDisabled}">
                尾页
            </span>
          </span>
          <span>{{pageCurrent}}/{{count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Paging',
  props: [
    // 分页数
    'count',
    // 总项目数
    // 'ac',
    // 传过来的当前页面
    'currentIndex'
  ],
  data () {
    return {
      msg: '分页',
      // 为第一页或者最后一页时，首页，尾页不能点击
      fDisabled: false,
      lDisabled: false,
      // 当前页面
      pageCurrent: 1,
      // 分页大小
      pagesize: 12,
      // 显示分页按钮数
      showPages: 5,
      // 开始显示的分页按钮
      showPagesStart: 1,
      // 结束显示的分页按钮
      showPageEnd: 3,
    // 解决count=1的bug
      pageShow:false
    }
  },



  mounted () {
    this.showPage(this.pageCurrent, null, true)
  },
  created:function(){
    console.log("count",this.count)

    if (this.count===1||this.count===0){
      this.pageShow="none"
    }
  },
  updated () {
    // 获取当前页码
    // this.pageCurrent = this.currentIndex
  },
  methods: {
    showPage (pageIndex, event, forceRefresh) {
      // console.log(pageIndex)
      // console.log(this.count)
      if (pageIndex>this.count){
        console.log("pageIndex",pageIndex);
      } else if (pageIndex<=0){
      } else {
        this.pageCurrent = pageIndex
        if (event)       {
          console.log("$('.btn')",$('.btn'));
          for (let e of $('.btn')) {
            e.style.backgroundColor="white"
            if (pageIndex==parseInt(e.innerText)){


              e.style.backgroundColor="grey";
            }
          }

          // event.currentTarget.style.backgroundColor="gray";
        }
        if (pageIndex > 0) {
          this.$emit('indexclick', pageIndex)
          if (pageIndex > this.count) {
            pageIndex = this.count
          }
          this.pageCurrent = pageIndex
          // 如果当前页首页或者尾页，则上一页首页就不能点击，下一页尾页就不能点击
          if (this.pageCurrent === 1) {
            this.fDisabled = true
            this.lDisabled = false
          } else if (this.pageCurrent === this.count) {
            this.fDisabled = false
            this.lDisabled = true
          } else {
            this.fDisabled = false
            this.lDisabled = false
          }
          // 计算分页按钮数据
          if (this.count > this.showPages) {
            if (pageIndex <= (this.showPages - 1) / 2) {
              this.showPagesStart = 1
              this.showPageEnd = this.showPages - 1
            } else if (pageIndex >= this.count - (this.showPages - 3) / 2) {
              this.showPagesStart = this.count - this.showPages + 2
              this.showPageEnd = this.count
            } else {
              this.showPagesStart = pageIndex - (this.showPages - 3) / 2
              this.showPageEnd = pageIndex + (this.showPages - 3) / 2
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped>
  .red_white {
    background: gray;
    color: white;
  }
  .pager span span:hover{
    background: lightgrey;
    color: gray;
  }
</style>
