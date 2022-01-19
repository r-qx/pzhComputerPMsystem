const db = require("../../bin/index");
//对密码加密的第三方插件
const bcrypt = require("bcryptjs");
//生成token的第三方包
const jwt = require("jsonwebtoken");
const config = require("../config");

const querystring = require("querystring");

exports.register = (req, res) => {
  req.on("data", function (data) {
    const username = querystring.parse(decodeURIComponent(data)).username;
    const password1 = querystring.parse(decodeURIComponent(data)).password;
    const phone = querystring.parse(decodeURIComponent(data)).phone;
    console.log(phone);
    const sql = `select * from users where username=?`;
    db.query(sql, username, (err, results) => {
      if (err) return res.send(res.cc(err));
      if (results.length > 0) return res.send(res.cc("该用户名已存在"));
      const addSQL = `insert into users set ?`;
      const password = bcrypt.hashSync(password1, 10);
      db.query(
        addSQL,
        { username: username, password: password, phone: phone },
        (err, results) => {
          if (err) return res.send(res.cc(err));
          if (results.affectedRows !== 1) return res.send(res.cc("注册失败"));
          res.send({
            message: "注册成功！",
            status: 1,
          });
        }
      );
    });
  });
};

exports.login = (req, res) => {
  req.on("data", function (data) {
    let username = querystring.parse(decodeURIComponent(data)).username;
    let password = querystring.parse(decodeURIComponent(data)).password;
    const sql = `select * from users where username=?`;
    db.query(sql, username, (err, results) => {
      if (err) return res.send(res.cc(err));
      if (results.length !== 1) return res.send("该用户不能存在！");
      const compareResult = bcrypt.compareSync(password, results[0].password);
      if (!compareResult) return res.cc("密码错误，登录失败！");
      const user = { ...results[0], password: "" };
      const tokenStr = jwt.sign(user, config.jwtSecretKey, {
        expiresIn: "3h",
      });
      res.send({
        status: 1,
        message: "登录成功!",
        token: "Bearer " + tokenStr,
      });
    });
  });
};

exports.messageCode = (req, res) => {
  res.send("ok");
};
