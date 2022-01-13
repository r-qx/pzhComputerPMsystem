<template>
  <div class="register">
    <div class="content">
      <h3>注册账号</h3>
      <el-form
        class="login__body__form"
        ref="form"
        :model="form"
        :rules="rules"
        label-width="80px"
      >
        <el-form-item label="账号" prop="username">
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
        <el-form-item label="确认密码" prop="password2">
          <el-input
            v-model="form.password2"
            placeholder="请再次输入密码"
            type="password"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input
            v-model="form.phone"
            placeholder="请输入手机号"
            type="phone"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item class="item_last">
          <el-button type="primary" @click="onSubmit(form)">确定</el-button>
          <el-button @click="refresh()">重置</el-button>
          <el-button @click="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog
      title="注册成功！请登陆！"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="login()">登 录</el-button>
    </el-dialog>
  </div>
</template>

<script>
import { request } from "@/network/request";
export default {
  name: "register",
  data() {
    return {
      dialogVisible: false,
      form: {
        username: "",
        password: "",
        password2: "",
        phone: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        password2: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            len: 11,
            message: "请输入正确手机号",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (this.form.password === this.form.password2) {
            request({
              url: "/api/register",
              data: {
                username: this.form.username,
                password: this.form.password,
                phone: this.form.phone,
              },
            }).then((data) => {
              this.form.username = "";
              this.form.password = "";
              this.form.password2 = "";
              this.form.phone = "";
              if (data.data.status == 0) {
                this.$message.warning(data.data.error);
              } else {
                this.dialogVisible = true;
              }
            });
          } else {
            this.form.password2 = "";
            this.$message.warning("两次密码不一致！请重新输入");
          }
        } else {
          return false;
        }
      });
    },
    login() {
      this.dialogVisible = false;
      this.$router.push({ path: "/login" });
    },
    refresh() {
      this.form.username = "";
      this.form.password = "";
      this.form.password2 = "";
      this.form.phone = "";
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.register {
  height: 100vh;
  overflow: hidden;
  background-image: url("../../assets/bg.png");
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    background-color: #eff3f6;
    padding: 20px 50px;
    width: 400px;
    height: 400px;
    h3 {
      margin-bottom: 30px;
      text-align: center;
    }
    .login__body__form {
      .item_last {
        width: 100%;
        margin-top: 50px;
        text-align: center;
      }
    }
  }
}
</style>
