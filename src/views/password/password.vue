<template>
  <div class="password">
    <div class="content">
      <el-steps
        :active="0"
        finish-status="success"
        simple
        style="margin-top: 20px"
      >
        <el-step title="身份验证"></el-step>
        <el-step title="密码重置"></el-step>
        <el-step title="重置完成"></el-step>
      </el-steps>
      <div class="content__01">
        <el-form ref="form" :model="form" label-width="65px" :rules="rules">
          <el-form-item label="手机号:" prop="phone">
            <el-input v-model="form.phone" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="验证码:" class="pr">
            <el-input placeholder="请输入验证码"></el-input>
            <button
              @click.prevent="getCode()"
              class="code-btn"
              :disabled="!show"
            >
              <span v-show="show">获取验证码</span>
              <span v-show="!show" class="count">{{ count }} s</span>
            </button>
          </el-form-item>
          <el-form-item>
            <el-button>重置</el-button>
            <el-button>下一步</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "password",
  data() {
    return {
      show: true,
      count: "",
      timer: null,
      form: {
        phone: "",
      },
      rules: {
        phone: [
          {
            require: true,
            message: "请输入手机号！",
            trigger: "blur",
          },
          { len: 12, message: "请输入正确的手机号" },
        ],
      },
    };
  },
  methods: {
    getCode() {
      if (!this.timer) {
        this.count = 60;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= 60) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.password {
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  .content {
    background-color: rgba(115, 156, 217, 0.2);
    padding: 20px 50px;
    width: 800px;
    &__01 {
      padding: 200px;
      .pr {
        position: relative;
      }

      .code-btn {
        width: 100px;
        height: 20px;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 222;
        //#ef8466橘色
        color: #409eff;
        font-size: 14px;
        border: none;
        border-left: 1px solid #bababa;
        padding-left: 10px;
        background-color: #fff;
        //鼠标指针的样式:伸出食指的手,default 箭头，crosshair 十字，progress 箭头和沙漏
        cursor: pointer;
      }
    }
  }
}
</style>
