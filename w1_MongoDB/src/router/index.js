const {Router,urlencoded,json} = require('express');
// express.json===bodyParse.json, ....

const router = Router();


const userRouter = require('./user');
const goodsRouter = require('./goods');
const regRouter = require('./reg');

// 数据格式化中间件
router.use(urlencoded({extended:false}),json())

// /api/user
router.use('/user',userRouter);

// /api/goods
router.use('/goods',goodsRouter);

// 注册
router.use('/reg',regRouter);

module.exports = router;