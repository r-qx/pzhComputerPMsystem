const express = require("express");
const router = express.Router();
const user = require("../router_handler/user_handler");

//验证表单规则的第三方中间件,被我放到前端验证了，老是解析不到正确的body格式
// const expressJoi = require("@escook/express-joi");
// const user_ruler = require("../schema/user");
// const bodyParser = require("body-parser");

router.post("/register", user.register);
router.post("/login", user.login);
router.post("codeMessage", user.messageCode);

module.exports = router;
