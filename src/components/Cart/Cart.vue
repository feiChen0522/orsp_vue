<template>
  <div class="center-container">
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
