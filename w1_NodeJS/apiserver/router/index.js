const express = require('express');

const router = express.Router();


const cors = require('../filter/cors')

const user = require('./user');
const goods = require('./goods');
const proxy = require('./proxy');

// 格式化请求参数中间件
router.use(express.urlencoded({extended:false}),express.json())
router.use(cors)

router.use('/user',user);
router.use('/goods',goods);
router.use('/proxy',proxy);

router.get('/jsonp',(req,res)=>{
    const {callback} = req.query;
    // 读取数据库
    const data = {
        username:'laoxie',
        password:123456
    }
    res.send(`${callback}(${JSON.stringify(data)})`);
    // res.send(callback + '(' + JSON.strigify(data) +')');
    // res.send(`getData({"username":"laoxie","password":123456})`);
})




module.exports = router;