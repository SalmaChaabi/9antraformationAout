var express = require('express');
var router = express.Router();
const usercontroller = require('../controller/userscontroller');
/* GET users listing. */
router.get('/message',usercontroller.message);
module.exports = router;
