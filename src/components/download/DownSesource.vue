<template>
  <div class="my-download">
    <table>
      <tr>
        <th>标题</th>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>
    </table>
  </div>


</template>

<script>
  export default {
    name: "DownSesource",
    data() {
      return {
        upuserid: '1',
        myid: '2',
        fname: '123.txt'
      }
    },
    methods: {
      checkdownload: function () {
        var vm = this;
        axios.post(this.global.serverPath+'/file/checkdownloadfile', {'upuserid': this.upuserid, 'myid': this.myid})
          .then(function (response) {
            if (response.data['code'] == 214) {
              vm.download();
            } else {
            }
          })
          .catch(function (error) {
          })
      },
      download: function (e) {
        var vm = this;
        // axios.post(this.global.serverPath+'/file/downloadfile',url: 'api/user/', {'fname': this.fname})
        axios({
          method: 'post',
          url: this.global.serverPath+'/file/downloadfile',
          data: {
            fname: this.fname
          },
          responseType: 'blob'
        }).then(function (response) {
          const content = response.data
            const blob = new Blob([content])
            const fileName = vm.fname
            if ('download' in document.createElement('a')) { // 非IE下载
              const elink = document.createElement('a')
              elink.download = fileName
              elink.style.display = 'none'
              elink.href = URL.createObjectURL(blob)
              document.body.appendChild(elink)
              elink.click()
              URL.revokeObjectURL(elink.href) // 释放URL 对象
              document.body.removeChild(elink)
            } else { // IE10+下载
            navigator.msSaveBlob(blob, fileName)
          }
        })
          .catch(function (error) {
          })
      },
    }
  }

</script>

<style scoped>
.my-download table{
  width: 800px;
  height: 600px;
  background-color: #3b49ff;
  margin-left: 40px;
}
.my-download table>tr{
  border: 1px solid black;
}
.my-download table>tr>td{
  border-right: 1px solid black;
}
</style>
