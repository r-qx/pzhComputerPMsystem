<template>
  <div id="login">
    <div class="login__body">
      <h3>攀枝花学院计算机实验室管理系统</h3>
      <el-form
        class="login__body__form"
        ref="form"
        :model="form"
        :rules="rules"
        label-width="55px"
      >
        <el-form-item label="账号" prop="id">
          <el-input v-model="form.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            type="password"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <div style="display: flex; justify-content: space-between">
            <el-input
              placeholder="请输入验证码"
              v-model="this.identifyCode"
            ></el-input>
            <div class="code" @click="refreshCode">
              <sidentify
                :identifyCode="identifyCode"
                style="margin: 1px 0 0 30px"
              ></sidentify>
            </div>
          </div>
        </el-form-item>
        <el-form-item>
          <div style="display: flex; justify-content: space-between">
            <el-checkbox label="记住密码" name="type"></el-checkbox>
            <span style="color: #57a3f3">忘记密码?</span>
          </div>
        </el-form-item>
      </el-form>
      <el-button
        class="button"
        @click="onSubmit"
        size="large"
        type="primary"
        style="width: 100%; margin: 20px 0"
        >登 录</el-button
      >
      <div class="login__body__foot">
        <div @click="signUp">注册账号</div>
      </div>
    </div>
  </div>
</template>

<script>
import sidentify from "@/components/stdentify.vue";
import { request } from "@/network/request";
export default {
  name: "login",
  components: {
    sidentify,
  },
  data() {
    return {
      identifyCodes: "1234567890abcdefg",
      identifyCode: "",
      form: {
        username: "rqx6",
        password: "888888",
      },
      code: "",
      rules: {
        username: [
          {
            min: 12,
            max: 12,
            message: "账号长度为12个字符！",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    onSubmit() {
      if (!this.form.username || !this.form.password) {
        return this.$message.warning("请输入用户名和密码！");
      }
      //方便测试，先把验证码填上
      // if (this.code == "" || this.code == null) {
      //   return this.$message.warning("请输入验证码！");
      // }
      // if (this.code !== this.identifyCode) {
      //   this.identifyCode = "";
      //   this.code = "";
      //   this.makeCode(this.identifyCodes, 4);
      //   return this.$message.error("验证码错误！");
      // }
      else {
        request({
          url: "/api/login",
          data: {
            username: this.form.username,
            password: this.form.password,
          },
        }).then((data) => {
          if (data.data.status == 1) {
            this.$router
              .push({
                path: "/dashboard",
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            this.$message("账号或密码错误！");
          }
        });
      }
    },
    signUp() {},
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.code = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode +=
          this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
      }
    },
  },
};
</script>

<style scoped lang="less">
#login {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-image: url("../../assets/bg.png");
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login__body {
    width: 340px;
    height: 560px;
    background-color: #eff3f6;
    padding: 0 50px;
    h3 {
      margin: 50px 0;
      text-align: center;
    }
    &__form {
    }
    &__foot {
      margin-top: 20px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
