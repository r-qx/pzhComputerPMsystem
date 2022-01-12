const express = require("express");
const router = express.Router();
const user = require("../router_handler/user_handler");

//验证表单规则的第三方中间件
const expressJoi = require("@escook/express-joi");
const user_ruler = require("../schema/user");

router.get("/register", expressJoi(user_ruler.user_register), user.register);
router.get("/login", expressJoi(user_ruler.user_login), user.login);

module.exports = router;
