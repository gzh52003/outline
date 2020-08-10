const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const token = require('../utils/token');

const {formatData} = require('../utils/tools');
const mongo = require('../utils/mongo');

// 登录
router.get('/',async (req,res)=>{
    let {username,password,vcode,mdl} = req.query;

    // 从会话中获取验证码
    // 校验验证码
    console.log('login.session=',req.session)
    if(vcode !== req.session.vcode){
        res.send(formatData({code:10}))
        return;
    }

    
    const result = await mongo.find('user',{username,password});
    if(result.length>0){
        // 用户名、密码、验证码都校验通过后，判断是否有免登陆选项
        console.log('req.query=',req.query);
        if(mdl === 'true'){
            // token的操作
            // 1. 生成token
            // const token = jwt.sign({ username }, 'laoxie' ,{
            //     // token有效期
            //     expiresIn: 20//1000 * 60 * 60 * 24 * 7
            // });

            const authorization = token.create({ username },20)
            
            console.log('token=',authorization);
            res.send(formatData({data:authorization}));
            return;
        }

        res.send(formatData())
    }else{
        res.send(formatData({code:0}))
    }
})



module.exports = router;