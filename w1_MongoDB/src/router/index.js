const { Router, urlencoded, json } = require('express');
// express.json===bodyParse.json, ....
const session = require('express-session')

const router = Router();


const userRouter = require('./user');
const goodsRouter = require('./goods');
const regRouter = require('./reg');
const loginRouter = require('./login');
const vcodeRouter = require('./vcode');


// 数据格式化中间件
router.use(urlencoded({ extended: false }), json())

// 使用session会话
// 通过req.session获取存入会话的数据
router.use(session({
    secret: 'laoxie',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        // 设置cookie有效期
        maxAge: 1000*60*60*2
    }
}))

// /api/user
router.use('/user', userRouter);

// /api/goods
router.use('/goods', goodsRouter);

// 注册
router.use('/reg', regRouter);

// 登录
router.use('/login', loginRouter);


// 验证码
router.use('/vcode', vcodeRouter);
module.exports = router;