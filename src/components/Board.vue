<template>
  <div>
    <div class="freeback-container">
      <div class="freeback-img-box">
        <img src="../assets/images/freeback.png">
      </div>
      <div class="freeback-box-border">

        <div class="freeback-title">
          <p style="font-size: 25px;font-weight: 600">意见反馈</p>
          <p style="font-size: 20px;font-weight: 400">感谢你的反馈，我们会积极改善，做出更好的服务的</p>
        </div>
        <div class="freeback-content">
          <div class="freeback-form">
            <form :model="formItem">
              <label style="margin-left: 27px">标题</label>
              <input v-model="formItem.title" placeholder="请输入标题" class="len">

              <label style="position: relative;top: -160px">反馈信息</label>
              <textarea v-model="formItem.content" placeholder="请输入反馈信息" class="len he"></textarea>

              <button type="submit" style="margin-left:120px ">提交</button>
              <button type="reset">清空信息</button>

            </form>
          </div>
        </div>
      </div>

    </div>
    <div>
      <footer-div></footer-div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Board",
    data() {
      return {
        formItem: {
          title: '',
          content: ''
        }
      };
    }
  }
</script>

<style scoped>
  .freeback-container {
    margin: 15px auto;
    width: 80%;
    height: 600px;
    display: flex;
    align-items: center;
  }

  .freeback-img-box {
    width: 50%;
  }

  .len {
    width: 350px;
    margin-left: 10px;
    border: 0.2px solid gray;
  }

  input, textarea {
    height: 50px;
  }

  .he {
    height: 170px;
    margin-top: 20px;
  }

  input:focus {
    border: 0.2px solid;
    border-color: #09b9f4;
    box-shadow: 0 0 15px #1da6f0;
  }

  textarea:focus {
    border-style: solid;
    border-color: #09b9f4;
    box-shadow: 0 0 15px #1da6f0;
  }

  .freeback-img-box img {
    width: 80%;
    margin-right: 80px;
  }

  .freeback-box-border {
    width: 50%;
    text-align: left;
    height: 450px;
    width: 480px;
    margin: auto;
  }

  .freeback-content {
    margin: 15px auto;
    border: 1px #ccc dotted;
    height: 350px;
  }

  .freeback-form {
    margin: 30px auto;
    width: 90%;
  }

  button {
    background-color: #079cff;
    margin: 0;
    padding: 0;
    border: 1px solid transparent;
    outline: none;
    width: 100px;
    height: 40px;
    border-radius: 8%;
    color: white;
    margin-top: 10px;
  }

  button:hover {
    opacity: 0.8;
  }
</style>
