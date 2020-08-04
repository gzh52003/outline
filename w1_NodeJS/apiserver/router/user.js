const express = require('express');

const router = express.Router();


// 获取所有用户
router.get('/',(req,res)=>{
    res.send('all user')
})

// 注册
router.post('/',(req,res)=>{
    res.send('all user')
})


module.exports = router;