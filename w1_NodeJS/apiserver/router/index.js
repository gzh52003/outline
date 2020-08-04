const express = require('express');

const router = express.Router();

const cors = require('../filter/cors')

const user = require('./user');
const goods = require('./goods');

// 格式化请求参数中间件
router.use(express.urlencoded(),express.json())
router.use(cors)

router.use('/user',user);
router.use('/goods',goods);


module.exports = router;