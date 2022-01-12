const express = require("express");

const app = express();

//配置跨域
const cors = require("cors");
app.use(cors());

//配置解析body表单的中间件
app.use(express.urlencoded({ extended: false }));

//res中添加cc方法，用于返回错误对象
app.use((req, res, next) => {
  res.cc = (err, status = 0) => {
    res.send({
      status: status,
      error: err instanceof Error ? err.message : err,
    });
  };
  next();
});

//导入用户路由
const userRouter = require("./router/router/user");
app.use("/api", userRouter);

//捕捉全局错误的中间件
const joi = require("joi");
app.use(function (err, req, res, next) {
  // 数据验证失败
  if (err instanceof joi.ValidationError) return res.cc(err);
  // 未知错误
  res.cc(err);
});

app.listen(3000, () => {
  console.log("serve is running in http://127.0.0.1:3000");
});
