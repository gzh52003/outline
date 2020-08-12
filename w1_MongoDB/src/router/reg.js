const express = require('express');
const router = express.Router();
// const crypto = require('crypto');

const {formatData,md5} = require('../utils/tools');
const mongo = require('../utils/mongo');

// RESTful api规范
// 注册
router.post('/',async (req,res)=>{
    let {username,password} = req.body;
    console.log('password1=',password)
    // const hash = crypto.createHash('md5');
    // hash.update(password+'laoxie'); // 加盐 盐值
    // password = hash.digest('hex');
    // console.log('password2=',password,password.length)

    password = md5(password)
    let result
    try{
        result = await mongo.insert('user',{username,password});
        res.send(formatData());
    }catch(err){
        res.send(forMatData({code:0}))

    }
})

router.get('/check',async (req,res)=>{
    const {username} = req.query;

    const result = await mongo.find('user',{username});
    if(result.length>0){
        res.send(formatData({code:0}))
    }else{
        res.send(formatData())
    }
})


module.exports = router;