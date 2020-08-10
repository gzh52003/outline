const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const {formatData} = require('../utils/tools');
const mongo = require('../utils/mongo');

// 登录
router.get('/',async (req,res)=>{
    let {username,password,vcode} = req.query;

    // 从会话中获取验证码
    // 校验验证码
    console.log('login.session=',req.session)
    if(vcode !== req.session.vcode){
        res.send(formatData({code:10}))
        return;
    }

    
    const result = await mongo.find('user',{username,password});
    if(result.length>0){
        res.send(formatData())
    }else{
        res.send(formatData({code:0}))
    }
})



module.exports = router;