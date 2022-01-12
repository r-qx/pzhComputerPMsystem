const db = require("../../bin/index");
//对密码加密的第三方插件
const bcrypt = require("bcryptjs");
//生成token的第三方包
const jwt = require("jsonwebtoken");
const config = require("../config");

exports.register = (req, res) => {
  const sql = `select * from users where username=?`;
  db.query(sql, [req.body.username], (err, results) => {
    if (err) return res.send(res.cc(err));
    if (results.length > 0) return res.send(res.cc("该用户名已存在"));
    const addSQL = `insert into users set ?`;
    const password = bcrypt.hashSync(req.body.password, 10);
    db.query(
      addSQL,
      { username: req.body.username, password: password },
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
};

exports.login = (req, res) => {
  const sql = `select * from users where username=?`;
  db.query(sql, req.body.username, (err, results) => {
    if (err) return res.send(res.cc(err));
    if (results.length !== 1) return res.send("该用户不能存在！");
    const compareResult = bcrypt.compareSync(
      req.body.password,
      results[0].password
    );
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
};
